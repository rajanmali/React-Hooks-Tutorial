import { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    document.title = `${this.state.count} Clicks`;
  }

  componentDidUpdate(prevProps, prevState) {
    document.title = `${this.state.count} Clicks`;
  }

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  resetCount = () => {
    this.setState(() => ({ count: 0 }));
  };

  render() {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Add Count</button>
        <button onClick={this.resetCount}>Reset Count</button>
      </>
    );
  }
}

export default ClassCounter;
