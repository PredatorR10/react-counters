import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    };

    increaseCount = () => {
        let count = this.state.count + 1;

        this.setState({
            count
        });
    };

    decreaseCount = () => {
        let count = this.state.count - 1;

        this.setState({
            count
        });
    };

    render() {
        return(
            <div>
                <h4>Counter: {this.state.count}</h4>
                <button onClick={this.increaseCount}>Increment</button>
                <button onClick={this.decreaseCount}>Decrement</button>
            </div>
        );
    };
};

export default Counter;