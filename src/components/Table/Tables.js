import React, { useContext } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { tableWrapper, shoppingCartUpdate } from './Tables.module.scss';
import stylesAdditional, { fontBold } from '../../styles/additional.module.scss';
import SingleTableRow from './SingleTableRow/SingleTableRow';
import BlackButton from '../BlackButton/BlackButton';
import ShippingContext from '../../context/ShippingContext';

const Tables = ({ productList }) => {
  const { updateData } = useContext(ShippingContext);
  let temporaryData = { shippingPrice: 23.8, grandPrice: 23.8, subtotalPrice: 0 };

  const savePricesInParent = (ship, grand, sub) => (temporaryData = {
    shippingPrice: ship, grandPrice: grand, subtotalPrice: sub,
  });
  const generateKey = () => Math.random() * 0.314;
  const listOfProduct = productList.map((product) => <SingleTableRow saveInParent={savePricesInParent} product={product} key={generateKey()} />);

  return (
    <section className={tableWrapper}>
      <table>
        <thead>
          <tr>
            <td />
            <td />
            <td className={cx(stylesAdditional.primaryFontColor, stylesAdditional.fontBold)}>Product Name</td>
            <td className={cx(stylesAdditional.primaryFontColor, stylesAdditional.fontBold)}>Unit Price</td>
            <td className={cx(stylesAdditional.primaryFontColor, stylesAdditional.fontBold)}>Qty</td>
          </tr>
        </thead>
        <tbody>
          {listOfProduct}
        </tbody>

      </table>
      <div className={shoppingCartUpdate}>
        <BlackButton content="Update Shopping Cart" type="button" className={fontBold} onClickHandler={() => updateData({ shippingPrice: temporaryData.shippingPrice, grandPrice: temporaryData.grandPrice, subtotalPrice: temporaryData.subtotalPrice })}>Update Shopping Cart</BlackButton>
      </div>
    </section>
  );
};

Tables.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({ image: PropTypes.string, name: PropTypes.string, price: PropTypes.number })).isRequired,
};
export default Tables;
