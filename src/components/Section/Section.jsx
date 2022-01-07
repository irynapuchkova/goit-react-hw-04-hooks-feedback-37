import PropTypes from 'prop-types';
import { SectionSet, Head } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionSet>
      {title && <Head>{title}</Head>}
      {children}
    </SectionSet>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
