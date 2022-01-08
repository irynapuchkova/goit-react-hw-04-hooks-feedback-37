import React from 'react';
import { useState } from 'react';

import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const option = {
    good,
    neutral,
    bad,
  };
  const statistics = Object.entries(option);
  const options = Object.keys(option);
  const value = Object.values(option);

  const onButtonClick = e => {
    const state = e.currentTarget.innerText.toLowerCase();
    switch (state) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return value.reduce((acc, value) => acc + value);
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Number.parseInt(
      (good * 100) / countTotalFeedback(),
    );
    return positivePercentage;
  };

  const total = countTotalFeedback(value);
  const positivePercentage = countPositiveFeedbackPercentage(total);

  return (
    <>
      <Section title="Please )) Leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onButtonClick} />
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
