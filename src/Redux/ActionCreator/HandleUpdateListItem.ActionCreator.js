const HandleUpdateListItem = (item) => {
  return async function (dispatch, getState) {
    const {
      AppReducer: { selectedItem, list },
    } = await getState();

    let _newList = list.map((_item, _index) => {
      if (_index === selectedItem.index) {
        return {
          ..._item,
          title: item.title,
          amount: item.amount,
          note: item.note,
          date: item.date,
          index: item.index,
        };
      }

      return _item;
    });

    let _total = 0;

    _newList.forEach((_item) => {
      _total += parseInt(_item.amount);
    });

    dispatch({ type: "UPDATE_LIST_ITEM", payload: { _newList, _total } });
  };
};

export default HandleUpdateListItem;
