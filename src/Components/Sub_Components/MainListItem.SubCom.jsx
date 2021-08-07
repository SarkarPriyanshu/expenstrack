import React from "react";
import svg from "../../assets/spr.svg";
import RemoveListItem from "../../Redux/ActionCreator/HandleRemoveListItem.ActionCreator";
import { HandleShowModel } from "../../Redux/ActionCreator/HandleModel.ActionCreator";
import { connect } from "react-redux";

function MainListItem({
  title,
  amount,
  note,
  date,
  index,
  removeListItem,
  showModel,
}) {
  //Helper function

  const handleClose = (index) => {
    removeListItem(index);
  };

  const handleShowModel = (index) => {
    showModel(index);
  };

  return (
    <>
      <li className="main__list-item">
        <button
          onClick={() => handleShowModel(index)}
          className="main__list-item-btn"
        >
          <svg className="main__list-item-icon">
            <use xlinkHref={`${svg}#icon-edit-2`}></use>
          </svg>
        </button>
        <section className="list-item-content">
          <h4 className="list-item-content-date">{date}</h4>
          <div className="list-item-content-data">
            <p className="list-item-content-data-title">{title}</p>
            <span className="list-item-content-data-amount">{amount}</span>
          </div>
          <small className="list-item-content-note">Note: {note}</small>
        </section>
        <button
          onClick={() => handleClose(index)}
          className="main__list-item-btn"
        >
          <svg className="main__list-item-icon">
            <use xlinkHref={`${svg}#icon-x-circle`}></use>
          </svg>
        </button>
      </li>
    </>
  );
}

const mapStateToProps = (state) => {
  return state.AppReducer;
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListItem: (index) => dispatch(RemoveListItem(index)),
    showModel: (index) => dispatch(HandleShowModel(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainListItem);
