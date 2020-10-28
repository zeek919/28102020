import React, { useContext } from 'react';
import AsideMenuHeader from '../AsideMenuHeader/AsideMenuHeader';
import {
  totalCostsWrapper, withoutBorderLR, withoutBorderBottom, width70,
} from './TotalCosts.module.scss';
import PricePosition from './PricePosition';
import BlackButton from '../BlackButton/BlackButton';
import ShippingContext from '../../context/ShippingContext';
import DisplayContext from '../../context/DisplayContext';

const TotalCosts = () => {
  const { priceData } = useContext(ShippingContext);
  const { display, changeDisplay } = useContext(DisplayContext);
  return (
    <div className={totalCostsWrapper}>
      <div className={withoutBorderLR}>
        <AsideMenuHeader leftHeader="cart totals" />
      </div>
      <PricePosition header="Subtotal" price={priceData.subtotalPrice ? priceData.subtotalPrice : 0} />
      <div className={withoutBorderBottom}>
        <PricePosition header="Grand Total" price={priceData.grandPrice ? priceData.grandPrice : 0} biggest />
      </div>
      <div className={width70}>
        <BlackButton onClickHandler={() => changeDisplay(!display)} content="Proceed to checkout" centerMargin />
      </div>
    </div>
  );
};

export default TotalCosts;
