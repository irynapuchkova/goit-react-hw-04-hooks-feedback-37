import PropTypes from 'prop-types';
import { Button, ButtonSet } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonSet>
      {options.map(option => (
        <Button key={option} type="button" onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </ButtonSet>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.node,
  onLeaveFeedback: PropTypes.func,
};
