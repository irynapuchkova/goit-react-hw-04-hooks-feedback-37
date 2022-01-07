import PropTypes from 'prop-types';
import { NotificationText } from './Notification.styled';

export default function Notification({ message }) {
  return <NotificationText type="text">{message}</NotificationText>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
