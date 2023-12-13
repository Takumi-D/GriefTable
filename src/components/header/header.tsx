import React from "react";
import { connect } from "react-redux";
import "./header.scss";
import getUrlParameters from "../hoc/url-parameters";

const logo = require("./logo.svg").default;

interface Props {
  formDate: {
    name: string;
    surname: string;
  };
  completedForm: boolean;
  navigate: (params: string) => void;
}

interface MapStateToProps {
  formDate: {
    name: string;
    surname: string;
  };
  completedForm: boolean;
}
function Header({
  navigate,
  formDate,
  completedForm,
}: Props): React.JSX.Element {
  const buttonEl = (
    <button
      onClick={() => navigate("/Form")}
      className="login-btn"
      type="button"
    >
      Войти
    </button>
  );

  const infoEl = (
    <div className="user-name">
      <p>{formDate.name}</p>
      <p>{formDate.surname}</p>
    </div>
  );

  return (
    <div className="header">
      <img className="header-img" src={logo} alt="logo" />
      {!completedForm ? buttonEl : infoEl}
    </div>
  );
}

function mapStateToProps({ formDate, completedForm }: MapStateToProps) {
  return { formDate, completedForm };
}

export default getUrlParameters(connect(mapStateToProps, null)(Header));
