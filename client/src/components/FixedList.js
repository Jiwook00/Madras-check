import React, { Component } from "react";
import FixedItem from "./FixedItem";

class FixedList extends Component {
  render() {
    const { fixedData, fetchFixData } = this.props;
    return (
      <>
        <div className="fixed-list">
          고정 확장자
          {fixedData.map((data, id) => (
            <FixedItem key={id} data={data} fetchFixData={fetchFixData} />
          ))}
        </div>
      </>
    );
  }
}

export default FixedList;
