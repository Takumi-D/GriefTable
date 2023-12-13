import React from "react";
import { connect } from "react-redux";
import urlParameters from "../hoc/url-parameters";
import "./pagination.scss";

interface Props {
  numberOfPages: number;
  navigate: (params: string) => void;
  parameters: {
    id: string;
  };
}

interface MapStateToProps {
  numberOfPages: number;
}

function Pagination({ numberOfPages, navigate, parameters }: Props) {
  const amountPage = [];

  for (let i = 1; i <= numberOfPages; i += 1) {
    amountPage.push(
      <li
        aria-hidden="true"
        key={i}
        onClick={() => navigate(`/Table/${i}`)}
        className={`${numberOfPages === i ? "last-page" : "page"}${
          +parameters.id === i ? " active" : ""
        }`}
      >
        {i}
      </li>,
    );
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          aria-hidden="true"
          onClick={() => {
            if (Object.keys(parameters).length === 0) {
              // empty
            } else if (+parameters.id <= 1) {
              // empty
            } else navigate(`/Table/${+parameters.id - 1}`);
          }}
          className="back"
        >
          Назад
        </li>

        <span className="wrapper-page">{amountPage}</span>

        <li
          aria-hidden="true"
          onClick={() => {
            if (Object.keys(parameters).length === 0) {
              navigate(`/Table/${1}`);
            } else if (+parameters.id >= numberOfPages) {
              // empty
            } else navigate(`/Table/${+parameters.id + 1}`);
          }}
          className="next"
        >
          Далее
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = ({ numberOfPages }: MapStateToProps) => {
  return {
    numberOfPages,
  };
};

export default urlParameters(connect(mapStateToProps, null)(Pagination));
