import React, { useState } from "react";
import { connect } from "react-redux";
import HandleFormSubmit from "../../Redux/ActionCreator/HandleFormSubmit.ActionCreator";

function MainForm(props) {
  const { handleFormSubmit } = props;

  //State Hook
  const [essentials, setEssentials] = useState({});

  //Helper function

  //On Change handler...
  const handleChange = (e) => {
    setEssentials({ ...essentials, [e.target.name]: e.target.value });
  };

  //On submit handler...
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(essentials);
  };

  return (
    <>
      <div className="main__form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <input
              onChange={(e) => handleChange(e)}
              className="main__input"
              type="text"
              name="title"
              placeholder="Title"
              required
              DefaultValue=""
            />
          </div>
          <div>
            <input
              onChange={(e) => handleChange(e)}
              className="main__input"
              type="number"
              name="amount"
              placeholder="Amount"
              required
              DefaultValue=""
            />
          </div>

          <div>
            <input
              onChange={(e) => handleChange(e)}
              className="main__input"
              type="text"
              name="note"
              placeholder="Note"
              required
              DefaultValue=""
            />
          </div>

          <div>
            <input
              onChange={(e) => handleChange(e)}
              className="main__input"
              type="date"
              name="date"
              placeholder="Date"
              required
              DefaultValue=""
            />
          </div>
          <button type="submit" className="main__btn">
            Add Expenses
          </button>
        </form>
      </div>
    </>
  );
}

// Convert the store states into the props...
const mapStateToProps = (state) => {
  return state.AppReducer;
};

// Dispatcher that help to dispatch the action creators...
const mapDispatchToProps = (dispatch) => {
  return {
    handleFormSubmit: (essentials) => dispatch(HandleFormSubmit(essentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
