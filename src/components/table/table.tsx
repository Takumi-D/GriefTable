import React, { useEffect, memo } from "react";
import "./table.scss";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import initServiceContext from "../hoc/init-service-context";
import Line from "../line/line";
import { actionGetData, updatePosts } from "../../actions";
import getUrlParameters from "../hoc/url-parameters";

interface Parameters {
  id?: string;
}

interface Props {
  date: any;
  loading: boolean;
  error: boolean;
  currentArrayOfRecords: any;
  componentGetData: (parameters: Parameters) => void;
  componentUpdatePosts: (parameters: Parameters) => void;
  parameters: any;
}

interface Item {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface ServicePosts {
  servicePosts: {
    getPosts: () => Promise<[]>;
  };
}

function Table({
  componentGetData,
  componentUpdatePosts,
  date,
  loading,
  error,
  parameters,
  currentArrayOfRecords,
}: Props): React.JSX.Element {
  useEffect(() => {
    if (!date) componentGetData(parameters);
  }, []);

  useEffect(() => {
    if (date) componentUpdatePosts(parameters);
  }, [parameters]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка</div>;
  }

  const postList = currentArrayOfRecords.map((item: Item) => {
    return (
      <Line
        key={item.id}
        id={item.id}
        header={item.title}
        description={item.body}
      />
    );
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="col-1 col-head">ID</th>
          <th className="col-6 col-head">Заголовок</th>
          <th className="col-5 col-head">Описание</th>
        </tr>
      </thead>
      <tbody>{postList}</tbody>
    </table>
  );
}

function mapStateToProps({
  date,
  loading,
  error,
  currentArrayOfRecords,
}: {
  date: [];
  currentArrayOfRecords: [];
  loading: boolean;
  error: boolean;
}) {
  return { date, loading, error, currentArrayOfRecords };
}

function mapDispatchToProps(
  dispatch: Dispatch,
  { servicePosts }: ServicePosts,
) {
  return {
    componentGetData: bindActionCreators(actionGetData(servicePosts), dispatch),
    componentUpdatePosts: (parameters: Parameters) =>
      dispatch(updatePosts(parameters)),
  };
}

export default memo(
  getUrlParameters(
    initServiceContext(connect(mapStateToProps, mapDispatchToProps)(Table)),
  ),
);
