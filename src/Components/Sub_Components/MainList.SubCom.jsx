import React from "react";
import MainListItem from "./MainListItem.SubCom";
import { connect } from "react-redux";

function MainList({ list }) {
  return (
    <>
      <div className="main__list__container">
        <ul className="main__list">
          {list &&
            list.map((item, index) => {
              return <MainListItem key={index} index={index} {...item} />;
            })}
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return state.AppReducer;
};

export default connect(mapStateToProps)(MainList);
