import React, { Component } from "react";

class FixedItem extends Component {
  render() {
    const { data, fetchFixData } = this.props;
    return (
      <>
        <input
          type="checkbox"
          checked={data.check}
          onChange={() => {
            fetch("http://localhost:4000/fixed", {
              method: "POST",
              body: JSON.stringify({ id: data.id }),
              headers: { "Content-Type": "application/json" },
            }).then(() => fetchFixData());
          }}
        />
        <span className="fixed-item">{data.name}</span>
      </>
    );
  }
}

export default FixedItem;
