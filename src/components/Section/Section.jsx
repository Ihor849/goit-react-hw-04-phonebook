import PropTypes from 'prop-types';

import { BoxSection, BoxTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <BoxSection>
      <BoxTitle>{title}</BoxTitle>
      {children}
    </BoxSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
