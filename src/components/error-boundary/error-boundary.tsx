import React, { Component } from "react";

interface State {
  error: boolean;
  errorMessage: string;
}

interface Children {
  children: JSX.Element;
}

class ErrorBoundary extends Component<Children, State> {
  constructor(props: Children) {
    super(props);

    this.state = {
      error: false,
      errorMessage: "",
    };
  }

  componentDidCatch(error: Error) {
    this.setState({
      error: true,
      errorMessage: `${error}`,
    });
  }

  render() {
    const { error, errorMessage } = this.state;
    const { children } = this.props;

    if (error) {
      return <div>Ошибка: {errorMessage}</div>;
    }

    return children;
  }
}

export default ErrorBoundary;
