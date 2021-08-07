const HandleUpdateListItem = (item) => {
  return async function (dispatch, getState) {
    const {
      AppReducer: { selectedItem, list },
    } = await getState();

    //Check the selected item that need to be updated and then update the data in that item..
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

    //Recalculating the total after the updation if the list..
    _newList.forEach((_item) => {
      _total += parseInt(_item.amount);
    });

    dispatch({ type: "UPDATE_LIST_ITEM", payload: { _newList, _total } });
  };
};

export default HandleUpdateListItem;
