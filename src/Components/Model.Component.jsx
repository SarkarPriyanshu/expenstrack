import React, { useState, useEffect } from "react";
import { HandleCloseModel } from "../Redux/ActionCreator/HandleModel.ActionCreator";
import HandleUpdateListItem from "../Redux/ActionCreator/HandleUpdateListItem.ActionCreator";
import { connect } from "react-redux";

function Model({ closeModel, showModel, selectedItem, update }) {
  //State Hooks
  const [essentials, setEssentials] = useState({});

  //Helper function

  // Model Close Handler....
  const handleCloseModel = () => {
    closeModel();
  };

  // Model Upadate Handler....
  const handleUpdateListItem = (e) => {
    setEssentials({ ...selectedItem, [e.target.name]: e.target.value });
  };

  //Model Submit handler...
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    update(essentials);
  };

  return (
    <>
      <div
        style={showModel ? { display: "flex" } : { display: "none" }}
        className="model-container"
      >
        <div className="model">
          <h2 className="model-headline">Update Expense</h2>
          <form onSubmit={(e) => handleUpdateSubmit(e)}>
            <div>
              <input
                onChange={(e) => handleUpdateListItem(e)}
                className="model__input"
                type="text"
                name="title"
                placeholder="Update Title"
                defaultValue={selectedItem === {} ? "" : selectedItem.title}
                required
              />
            </div>
            <div>
              <input
                onChange={(e) => handleUpdateListItem(e)}
                className="model__input"
                type="number"
                name="amount"
                placeholder="Update Amount"
                defaultValue={selectedItem === {} ? "" : selectedItem.amount}
                required
              />
            </div>
            <div>
              <input
                onChange={(e) => handleUpdateListItem(e)}
                className="model__input"
                type="text"
                name="note"
                placeholder="Update Note"
                defaultValue={selectedItem === {} ? "" : selectedItem.note}
                required
              />
            </div>
            <div>
              <input
                onChange={(e) => handleUpdateListItem(e)}
                className="model__input"
                type="date"
                name="date"
                placeholder="Update Date"
                defaultValue={selectedItem === {} ? "" : selectedItem.date}
                required
              />
            </div>

            <div className="model-btn-container">
              <button
                type="button"
                onClick={() => handleCloseModel()}
                className="model-btn"
              >
                Cancel
              </button>
              <button className="model-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// Dispatcher that help to dispatch the action creators...
const mapDispatchToProps = (dispatch) => {
  return {
    closeModel: () => dispatch(HandleCloseModel()),
    update: (essentials) => dispatch(HandleUpdateListItem(essentials)),
  };
};

// Convert the store states into the props...
const mapStateToProps = (state) => {
  return state.AppReducer;
};

export default connect(mapStateToProps, mapDispatchToProps)(Model);
