interface InitialState {
  date: any;
  loading: boolean;
  error: boolean;
  numberOfRecords: number;
  currentArrayOfRecords: any;
  numberOfPages: unknown;
  formDate: {
    name: string;
    surname: string;
  };
  completedForm: boolean;
}

interface Action {
  type?: string;
  payload?: any;
  params?: any;
}

const initialState: InitialState = {
  date: null,
  loading: true,
  error: false,
  numberOfRecords: 10,
  currentArrayOfRecords: [],
  numberOfPages: null,
  formDate: {
    name: "",
    surname: "",
  },
  completedForm: false,
};

function reducer(store = initialState, action: Action = {}) {
  switch (action.type) {
    case "RECEIVING_DATA":
      return {
        ...store,
        error: false,
        loading: false,
        date: action.payload,
        currentArrayOfRecords: action.payload.slice(
          Number(
            Object.keys(action.params)?.length !== 0 ? action.params?.id : 1,
          ) *
            store.numberOfRecords -
            store.numberOfRecords,
          Number(
            Object.keys(action.params)?.length !== 0 ? action.params?.id : 1,
          ) * store.numberOfRecords,
        ),
        numberOfPages: action.payload.length / store.numberOfRecords,
      };
    case "PAGE_SWITCHING":
      return {
        ...store,
        currentArrayOfRecords: [...store.date]?.slice(
          Number(
            Object.keys(action.params)?.length !== 0 ? action.params?.id : 1,
          ) *
            store.numberOfRecords -
            store.numberOfRecords,
          Number(
            Object.keys(action.params)?.length !== 0 ? action.params?.id : 1,
          ) * store.numberOfRecords,
        ),
      };
    case "LOGIN_FORM":
      return {
        ...store,
        formDate: {
          name: action.params.name,
          surname: action.params.surname,
        },
        completedForm: true,
      };
    case "UPDATE_FORM":
      return {
        ...store,
        formDate: {
          name: action.params.name,
          surname: action.params.surname,
        },
      };
    default:
      return store;
  }
}

export default reducer;
