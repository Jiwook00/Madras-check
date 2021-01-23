import React, { Component } from "react";
import CustomList from "./components/CustomList";
import FixedList from "./components/FixedList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedData: [
        { id: 1, name: "bat" },
        { id: 2, name: "cmd" },
        { id: 3, name: "com" },
      ],
      customData: [
        { id: 1, name: "tes1" },
        { id: 2, name: "test2" },
        { id: 3, name: "test3" },
        { id: 4, name: "tes1" },
        { id: 5, name: "test2" },
        { id: 6, name: "test3" },
        { id: 7, name: "tes1" },
        { id: 8, name: "test2" },
        { id: 9, name: "test3" },
      ],
      inputCustom: "",
    };
  }

  fetchFixData() {
    fetch("http://localhost:4000/fixed", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          fixedData: data,
        })
      );
  }

  fetchCustomData() {
    fetch("http://localhost:4000/custom", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          customData: data,
        })
      );
  }

  handelCreate = () => {
    fetch("http://localhost:4000/custom", {
      method: "POST",
      body: JSON.stringify({ inputCustom: this.state.inputCustom }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => this.fetchCustomData())
      .then(() => this.setState({ inputCustom: "" }));
  };

  componentDidMount() {
    this.fetchFixData();
    this.fetchCustomData();
  }

  handelInputChange = (e) => {
    this.setState({
      inputCustom: e.target.value,
    });
  };

  handelKeyPres = (e) => {
    if (e.key === "Enter") {
      this.handelCreate();
    }
  };

  render() {
    const { fixedData, inputCustom, customData } = this.state;
    const {
      handelCreate,
      handelInputChange,
      handelKeyPres,
      fetchCustomData,
      fetchFixData,
    } = this;
    return (
      <>
        <header>파일 확장자 차단</header>
        <div className="explain">
          파일확장자에 따라 특정 형식의 파일을 첨부하거나 전송하지 못하도록 제한
        </div>
        <div className="fixed">
          <FixedList
            fixedData={fixedData}
            fetchFixData={fetchFixData.bind(this)}
          />
        </div>
        <div className="custom-input">
          <span>커스텀 확장자</span>
          <input
            value={inputCustom}
            onChange={handelInputChange}
            onKeyDownCapture={handelKeyPres}
          />
          <button onClick={handelCreate}>추가</button>
        </div>
        <div>
          <CustomList
            customData={customData}
            fetchCustomData={fetchCustomData.bind(this)}
          />
        </div>
      </>
    );
  }
}

export default App;
