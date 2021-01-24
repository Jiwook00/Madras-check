import React, { Component } from "react";
import FixedItem from "./FixedItem";
import "./FixedList.css";

class FixedList extends Component {
  render() {
    const { fixedData, fetchFixData } = this.props;
    return (
      <>
        <div className="fixed-list">
          <span className="fixed-extension">고정 확장자</span>
          {fixedData.map((data, id) => (
            <FixedItem key={id} data={data} fetchFixData={fetchFixData} />
          ))}
        </div>
      </>
    );
  }
}

export default FixedList;
