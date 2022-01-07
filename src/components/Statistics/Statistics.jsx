import PropTypes from 'prop-types';
import { arrayOf } from 'prop-types';
import {
  FeedbackPointsSet,
  TotalPoints,
  FeedbackPointsUnit,
  FeedbackPoints,
  FeedbackPointsValue,
  PositivePotion,
} from './Statistics.styled';

export default function Statistics({
  feedbackStatistics,
  total,
  positivePercentage,
}) {
  return (
    <FeedbackPointsSet>
      {feedbackStatistics.map(([key, value]) => (
        <FeedbackPointsUnit key={key}>
          <FeedbackPoints>{key}:</FeedbackPoints>
          <FeedbackPointsValue>{value}</FeedbackPointsValue>
        </FeedbackPointsUnit>
      ))}
      <TotalPoints>
        total: <span>{total}</span>
      </TotalPoints>
      <PositivePotion>
        positive feedback :
        <span>{positivePercentage && positivePercentage} %</span>
      </PositivePotion>
    </FeedbackPointsSet>
  );
}

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    arrayOf({
      key: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
