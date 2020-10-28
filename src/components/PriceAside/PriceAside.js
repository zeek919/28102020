import React, { useState, useContext } from 'react';
import { priceWrapper, toRight, submittedWrapper } from './PriceAside.module.scss';
import BlackButton from '../BlackButton/BlackButton';
import AsideMenuHeader from '../AsideMenuHeader/AsideMenuHeader';
import TotalCosts from '../TotalCosts/TotalCosts';
import ShippingContext from '../../context/ShippingContext';
import DisplayContext from '../../context/DisplayContext';

const PriceAside = () => {
  const [display, changeDisplay] = useState(true);
  const { priceData } = useContext(ShippingContext);
  const values = { display, changeDisplay };
  const submitted = display
    ? (
      <>
        <AsideMenuHeader leftHeader="shipping" rightHeader={priceData.shippingPrice} margin />
        <TotalCosts />
      </>
    )
    : (
      <aside className={submittedWrapper}>
        <p>Your order has been submitted successfully</p>
      </aside>
    );

  return (
    <>
      <DisplayContext.Provider value={values}>
        <aside className={priceWrapper}>
          <div className={toRight}>
            <BlackButton onClickHandler={() => changeDisplay(!display)} content="Proceed to checkout" />
          </div>
          <div>
            {submitted}
            <div />
          </div>
        </aside>
      </DisplayContext.Provider>
    </>
  );
};

PriceAside.propTypes = {

};
export default PriceAside;
