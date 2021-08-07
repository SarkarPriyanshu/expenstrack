import { defaultState } from "../defaultState";

const AppReducer = (state = defaultState, action) => {
  switch (action.type) {
    //Handle the form submition...
    case "HANDLE_FORM_SUBMIT":
      return {
        ...state,
        list: [...state.list, action.payload.essentials],
        total: action.payload._total,
      };

    //Handle the remove item from list...
    case "REMOVE_LIST_ITEM":
      return {
        ...state,
        list: action.payload._newList,
        total: action.payload._total,
      };

    //Handle the model show event and put that item into selectedItem variable..
    case "HANDLE_SHOW_MODEL":
      return {
        ...state,
        showModel: true,
        selectedItem: action.payload,
      };

    //Handle the model close event..
    case "HANDLE_CLOSE_MODEL":
      return {
        ...state,
        showModel: false,
        selectedItem: {},
      };

    //Handle the update event of an item in the list..
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
