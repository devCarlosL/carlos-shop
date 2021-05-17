import React from 'react';

import formatCurrency from '../../utils/formatCurrency';

import CardContainer from './styles';

import img from '../../assets/images/img.svg';

function Card({ product, price, onClick, textButton, disabled }) {
  return (
    <CardContainer>
      <img src={img} alt="no images" />
      <span className="product__name">{product}</span>
      <span className="price">{formatCurrency(price)}</span>
      <button type="button" disabled={disabled} onClick={onClick}>
        {textButton}
      </button>
    </CardContainer>
  );
}

export default Card;
