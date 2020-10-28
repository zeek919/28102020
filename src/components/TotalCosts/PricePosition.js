import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { font18 } from '../../styles/additional.module.scss';
import { position, greyHeader } from './PricePosition.module.scss';

const PricePosition = ({ header, price, biggest }) => (
  <div className={biggest ? cx(font18, position) : position}>
    <p className={greyHeader}>{header}</p>
    <p>
      $
      {price}
    </p>
  </div>
);

PricePosition.propTypes = {
  header: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  biggest: PropTypes.bool,
};

PricePosition.defaultProps = {
  biggest: false,
};

export default PricePosition;
