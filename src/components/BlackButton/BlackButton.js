import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { blackStylingButton, marginCenter } from './BlackButton.module.scss';

const BlackButton = ({
  content, onClickHandler, type, centerMargin,
// eslint-disable-next-line react/button-has-type
}) => <button type={type} onClick={onClickHandler} className={centerMargin ? cx(marginCenter, blackStylingButton) : blackStylingButton}>{content}</button>;

BlackButton.propTypes = {
  content: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  type: PropTypes.string,
  centerMargin: PropTypes.bool,
};

BlackButton.defaultProps = {
  type: 'button',
  centerMargin: false,
};
export default BlackButton;
