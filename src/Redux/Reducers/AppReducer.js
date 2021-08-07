import { defaultState } from "../defaultState";

const AppReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "HANDLE_FORM_SUBMIT":
      return {
        ...state,
        list: [...state.list, action.payload.essentials],
        total: action.payload._total,
      };

    case "REMOVE_LIST_ITEM":
      return {
        ...state,
        list: action.payload._newList,
        total: action.payload._total,
      };

    case "HANDLE_SHOW_MODEL":
      return {
        ...state,
        showModel: true,
        selectedItem: action.payload,
      };

    case "HANDLE_CLOSE_MODEL":
      return {
        ...state,
        showModel: false,
        selectedItem: {},
      };

    case "UPDATE_LIST_ITEM":
      return {
        ...state,
        list: action.payload._newList,
        total: action.payload._total,
        showModel: false,
        selectedItem: state.selectedItem,
      };

    default:
      return state;
  }
};

export default AppReducer;
