import { Dispatch } from "redux";

interface ParametersPosts {
  id?: string;
}

interface ParametersForm {
  name: string;
  surname: string;
}

interface Response {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface ServicePosts {
  getPosts: () => Promise<[]>;
}
export const getPosts = (response: Response[], params: ParametersPosts) => {
  return {
    type: "RECEIVING_DATA",
    payload: response,
    params,
  };
};

export const updatePosts = (params: ParametersPosts) => {
  return {
    type: "PAGE_SWITCHING",
    params,
  };
};

export const loginForm = (params: ParametersForm) => {
  return {
    type: "LOGIN_FORM",
    params,
  };
};

export const updateForm = (params: ParametersForm) => {
  return {
    type: "UPDATE_FORM",
    params,
  };
};

export const actionGetData =
  (servicePosts: ServicePosts) =>
  (params: ParametersPosts) =>
  (dispatch: Dispatch) => {
    servicePosts.getPosts().then((response: Response[]) => {
      dispatch(getPosts(response, params));
    });
  };
