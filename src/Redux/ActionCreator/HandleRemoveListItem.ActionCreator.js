const RemoveListItem = (index) => {
  return async function (dispatch, getState) {
    const {
      AppReducer: { total, list },
    } = await getState();

    //Search the related item from list and return that item...
    let _total = list.find((_item, _index) => {
      if (index === _index) {
        return _item;
      }

      return null;
    });

    //Calculating the total
    _total = total - parseInt(_total.amount);

    if (_total < 0) {
      _total = 0;
    }

    //Creating new list and then send that list by payload..
    const _newList = list.filter((item, _index) => {
      if (_index !== index) return item;
    });

    dispatch({ type: "REMOVE_LIST_ITEM", payload: { _newList, _total } });
  };
};

export default RemoveListItem;
