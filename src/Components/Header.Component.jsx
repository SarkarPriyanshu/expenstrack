import React from "react";
import { connect } from "react-redux";

function Header({ total }) {
  return (
    <header className="header">
      <h1 className="header-title">My Expenses</h1>
      <p className="header-para">Total</p>
      <p className="header-count">{total}</p>
    </header>
  );
}

// Dispatcher that help to dispatch the action creators...
const mapStateToProps = (state) => {
  return state.AppReducer;
};

export default connect(mapStateToProps)(Header);
