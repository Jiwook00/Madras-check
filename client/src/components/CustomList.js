import React, { Component } from "react";
import CustomItem from "./CustomItem";
import "./CustomList.css";

class CustomList extends Component {
  render() {
    const { customData, fetchCustomData } = this.props;
    return (
      <>
        <div className="custom-list">
          <div className="limit">{customData.length}/200</div>
          {customData.map((data, id) => (
            <CustomItem
              key={id}
              data={data}
              fetchCustomData={fetchCustomData}
            />
          ))}
        </div>
      </>
    );
  }
}

export default CustomList;
