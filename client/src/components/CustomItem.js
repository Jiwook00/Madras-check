import React, { Component } from "react";
import "./CustomItem.css";

class CustomItem extends Component {
  render() {
    const { data, fetchCustomData } = this.props;
    return (
      <>
        <span className="custom-item">
          {data.name}
          <button
            className="custom-button"
            onClick={() => {
              fetch("http://localhost:4000/custom", {
                method: "DELETE",
                body: JSON.stringify({ id: data.id }),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(() => fetchCustomData());
            }}
          >
            &times;
          </button>
        </span>
      </>
    );
  }
}

export default CustomItem;
