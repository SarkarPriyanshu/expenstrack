export const HandleShowModel = (index) => {
  document.body.style.overflow = "hidden";
  return async function (dispatch, getState) {
    const {
      AppReducer: { list },
    } = await getState();

    //Search the related item from list and return that item...
    let selectedItem = list.find((_item, _index) => {
      if (index === _index) {
        return _item;
      }
    });

    //Adding a index key value into that item that help us while updating the items form the list..

    selectedItem = { ...selectedItem, index: index };

    dispatch({ type: "HANDLE_SHOW_MODEL", payload: selectedItem });
  };
};

export const HandleCloseModel = () => {
  document.body.style.overflow = "scroll";
  return function (dispatch) {
    dispatch({ type: "HANDLE_CLOSE_MODEL" });
  };
};
