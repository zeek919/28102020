import React from 'react';
import PropTypes from 'prop-types';
import { shoppingCartHeader } from './ShoppingCart.module.scss';
import { products } from '../../constants/products';
import Tables from '../Table/Tables';

const ShoppingCart = ({ tittle }) => (
  <section>
    <h2 className={shoppingCartHeader}>{tittle}</h2>
    <Tables productList={products} />
  </section>
);

ShoppingCart.propTypes = {
  tittle: PropTypes.string,
};

ShoppingCart.defaultProps = {
  tittle: '',
};

export default ShoppingCart;
