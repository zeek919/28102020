import React, { useState } from 'react';
import { appWrapper } from './App.module.scss';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import PriceAside from '../PriceAside/PriceAside';
import ShippingContext from '../../context/ShippingContext';

const App = () => {
  const [priceData, updateData] = useState({
    shippingPrice: 23.80, subtotalPrice: 0, grandPrice: 23.80, latestCount: 0,
  });
  const values = { priceData, updateData };

  return (
    <ShippingContext.Provider value={values}>
      <section className={appWrapper}>
        <ShoppingCart tittle="Shopping Cart" />
        <PriceAside />
      </section>
    </ShippingContext.Provider>
  );
};

export default App;
