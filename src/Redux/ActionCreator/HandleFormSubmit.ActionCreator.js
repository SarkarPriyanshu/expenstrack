const HandleFormSubmit = (essentials) => {
  return async function (dispatch, getState) {
    const {
      AppReducer: { total },
    } = await getState();

    //Calculating the total
    const _total = total + parseInt(essentials.amount);

    dispatch({ type: "HANDLE_FORM_SUBMIT", payload: { essentials, _total } });
  };
};

export default HandleFormSubmit;
