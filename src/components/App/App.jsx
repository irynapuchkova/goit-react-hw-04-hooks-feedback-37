import React from 'react';
import { useState } from 'react';

import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

const initialState = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [state, setState] = useState(initialState);

  const onButtonClick = ({ currentTarget: { innerText } }) => {
    setState(state => ({ ...state, [innerText]: state[innerText] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value);
  };

  const countPositiveFeedbackPercentage = () => {
    return Number.parseInt((state.good * 100) / countTotalFeedback());
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const statistics = Object.entries(state);
  const options = Object.keys(state);

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
