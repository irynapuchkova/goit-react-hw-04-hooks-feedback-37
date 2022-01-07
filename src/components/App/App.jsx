import React from 'react';
import { Component } from 'react';

import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = e => {
    let reaction = e.currentTarget.innerText.toLowerCase();
    const keys = Object.keys(this.state);
    const isReaction = keys.find(key => key === reaction);

    if (isReaction) {
      this.setState(prevState => ({ [reaction]: prevState[reaction] + 1 }));
    }
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positivePercentage = Number.parseInt(
      (good * 100) / this.countTotalFeedback(),
    );
    return positivePercentage;
  };

  render() {
    const statistics = Object.entries(this.state);
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <Section title="Please )) Leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onButtonClick}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 && <Notification message="There is no feedback ((" />}
          {total > 0 && (
            <Statistics
              feedbackStatistics={statistics}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
