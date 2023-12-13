import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function getUrlParameters(
  Component: React.ComponentType<any>,
): React.FunctionComponent {
  return function useFn(): React.JSX.Element {
    const parameters = useParams();
    const navigate = useNavigate();

    return <Component parameters={parameters} navigate={navigate} />;
  };
}

export default getUrlParameters;
