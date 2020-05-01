import React, {Component} from 'react';

class Counter extends Component {
  state = {counter: 0};
  
  componentDidMount = () => {
    this.timer = setInterval(this.incrementCounter, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  };

  incrementCounter = () => {
    this.setState((state) => {
      const incremented = state.counter++
      return {counter : incremented}
    })
  };

  render(){
    return (
        <p>You've spent {this.state.counter} seconds on this app</p>
    )
  };
};

export default Counter;
