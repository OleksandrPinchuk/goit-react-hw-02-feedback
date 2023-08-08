import { Component } from "react";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Section from "./section/Section";
import Notification from "./notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }))
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad

  }

  countPositiveFeedbackPercentage = () => {
    return this.state.good ? Math.round((this.state.good / this.countTotalFeedback()) * 100) : 0;
  }

  render() {
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feadback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            /> : <Notification message='There is no feedback' />}
        </Section>
      </div>
      )
  }
};

App.propTypes = {
  
}