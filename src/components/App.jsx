import { Component } from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback(option) {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }))
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad

  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const options = Object.keys(this.state);

    return (
      <section>
        <div>
          <h2>Please leave feadback</h2>
          {/* <FeedbackOptions></FeedbackOptions> */}
          <div>
            {options.map(option => (
              <button className="button" type="button" key={option} onClick={() => this.onLeaveFeedback(option)}>{option}</button>
            ))}
          </div>
          <div>
            <h3>Statistics</h3>
            <ul><li>Good: {this.state.good}</li></ul>
            <ul><li>Neutral: {this.state.neutral}</li></ul>
            <ul><li>Bad: {this.state.bad}</li></ul>
            <ul><li>Total: {this.countTotalFeedback()}</li></ul>
            <ul><li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li></ul>
          </div>
        </div>
      </section>)
  }
};
