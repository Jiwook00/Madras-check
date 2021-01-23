import React, { Component } from "react";
import CustomItem from "./CustomItem";

class CustomList extends Component {
  render() {
    const { customData, fetchCustomData } = this.props;
    return (
      <>
        <div className="custom-list">
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
