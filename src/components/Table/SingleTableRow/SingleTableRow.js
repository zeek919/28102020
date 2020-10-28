import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import xButton from '../../../images/x-img.png';
import editImg from '../../../images/edit-img.png';
import { primaryFontColor, clearButton } from '../../../styles/additional.module.scss';
import { productCount } from './SingleTableRow.module.scss';
import ShippingContext from '../../../context/ShippingContext';

const SingleTableRow = ({ product, saveInParent }) => {
  const { priceData, updateData } = useContext(ShippingContext);
  const [count, changeCount] = useState(parseInt(priceData.latestCount, 10) || 0);

  const tmpShippingPrice = product.price * count > 100 ? '0' : 23.80;
  const tmpSubtotalPrice = product.price * count;
  const tmpGrantPrice = product.price * count + tmpShippingPrice;

  useEffect(() => saveInParent(tmpShippingPrice, tmpGrantPrice, tmpSubtotalPrice, count), [count]);

  const changeCountHandler = (operation) => {
    let temporaryCount = count;
    if (operation === '-' && temporaryCount > 0) {
      temporaryCount -= 1;
    } else if (operation === '+') {
      temporaryCount += 1;
    }
    changeCount(temporaryCount);
  };

  const updateDataHandler = () => {
    updateData({
      shippingPrice: tmpShippingPrice, grandPrice: tmpGrantPrice, subtotalPrice: tmpSubtotalPrice, latestCount: count,
    });
  };

  const clearData = () => {
    updateData({
      shippingPrice: 0, grandPrice: 0, subtotalPrice: 0, latestCount: 0, hidden: 0,
    });
  };
  const onChangeHandler = (e) => {
    changeCount(e.target.value);
  };

  return (
    <tr style={{ visibility: priceData.hidden === 0 ? 'hidden' : 'visible' }}>
      <td>
        <button
          type="button"
          className={clearButton}
          onClick={clearData}
        >
          <img src={xButton} alt="x-button" />
        </button>
      </td>
      <td>
        <img src={product.image} alt="headphones" />
      </td>
      <td className={primaryFontColor}>
        {product.name}
      </td>
      <td className={primaryFontColor}>
        $
        {product.price}
      </td>
      <td className={primaryFontColor}>
        <section className={productCount}>
          <button type="button" onClick={() => changeCountHandler('-')}>-</button>
          <input type="number" value={count} onChange={onChangeHandler} />
          <button type="button" onClick={() => changeCountHandler('+')}>+</button>
          <button type="button" className={clearButton} onClick={() => updateDataHandler()}>
            <img src={editImg} alt="editButton" />
          </button>
        </section>
      </td>
    </tr>
  );
};

SingleTableRow.propTypes = {
  product: PropTypes.shape(
    { image: PropTypes.string, name: PropTypes.string, price: PropTypes.number },
  ).isRequired,
  saveInParent: PropTypes.func.isRequired,
};

export default SingleTableRow;
