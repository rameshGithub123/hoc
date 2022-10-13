import React, { Component } from "react";
const HOC = (HocComponent, data) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    handleClick = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
    render() {
      return (
        <div>
          Hello{" "}
          <HocComponent
            countNumber={this.state.count}
            handleClick={this.handleClick}
          />
        </div>
      );
    }
  };
};
export default HOC;
