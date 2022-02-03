import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  state = {
    counters: 5
  };

  increaseCounters = () => {
    let counters = this.state.counters + 1;

    this.setState({
      counters
    });
  };

  decreaseCounters = () => {
    let counters = this.state.counters - 1;

    this.setState({
      counters
    });
  };

  render() {
    return (
      <div>
        <Header increaseCounters={this.increaseCounters} decreaseCounters={this.decreaseCounters}/>
        <h4>Number of Counters: {this.state.counters}</h4>
        <CounterList counter={this.state.counters} />
      </div>
    );
  };
}

export default App;
