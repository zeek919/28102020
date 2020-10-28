import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { asideWrapper, asideWrapperWithMargin } from './AsideMenuHeader.module.scss';

const AsideMenuHeader = ({
  leftHeader, rightHeader, margin,
}) => (
  <section className={margin ? cx([asideWrapperWithMargin, asideWrapper]) : asideWrapper}>
    <p>{leftHeader}</p>
    <p>{rightHeader ? `$${rightHeader}` : ''}</p>
  </section>
);

AsideMenuHeader.propTypes = {
  leftHeader: PropTypes.string.isRequired,
  rightHeader: PropTypes.number,
  margin: PropTypes.bool,
};

AsideMenuHeader.defaultProps = {
  rightHeader: '' || 0,
  margin: false,
};
export default AsideMenuHeader;
