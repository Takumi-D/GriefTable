import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { loginForm, updateForm } from "../../actions";
import "./form.scss";

interface FormDate {
  name: string;
  surname: string;
}

interface Props {
  componentLoginForm: (formDate: FormDate) => void;
  componentUpdateForm: (formDate: FormDate) => void;
  completedForm: boolean;
}

interface MapStateToProps {
  completedForm: boolean;
}

interface ParametersForm {
  name: string;
  surname: string;
}

function Form({
  componentLoginForm,
  componentUpdateForm,
  completedForm,
}: Props) {
  const submitFm = (event: React.FormEvent) => {
    event.preventDefault();
    const formEl = event.target as HTMLFormElement;
    const firstEl = formEl[0] as HTMLInputElement;
    const lastEl = formEl[1] as HTMLInputElement;
    const formDate = {
      name: firstEl.value,
      surname: lastEl.value,
    };
    if (!completedForm) componentLoginForm(formDate);
    if (completedForm) componentUpdateForm(formDate);
  };
  return (
    <form onSubmit={submitFm} className="login-form">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Имя
          <input
            required
            id="exampleInputEmail1"
            type="text"
            className="form-control"
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Фамилия
          <input
            required
            id="exampleInputPassword1"
            type="text"
            className="form-control"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        {!completedForm ? "Войти" : "Изменить"}
      </button>
    </form>
  );
}

function mapStateToProps({ completedForm }: MapStateToProps) {
  return { completedForm };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    componentLoginForm: (param: ParametersForm) => dispatch(loginForm(param)),
    componentUpdateForm: (param: ParametersForm) => dispatch(updateForm(param)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
