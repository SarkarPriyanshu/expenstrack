export const HandleShowModel = (index) => {
  document.body.style.overflow = "hidden";
  return async function (dispatch, getState) {
    const {
      AppReducer: { list },
    } = await getState();

    let selectedItem = list.find((_item, _index) => {
      if (index === _index) {
        return _item;
      }
    });

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
