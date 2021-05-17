/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import * as yup from 'yup';

import UnformInput from '../../components/UnformInput';
import Divider from '../../components/Divider';

import { useCart } from '../../contexts/cart';

import formatCurrency from '../../utils/formatCurrency';
import handleYupErrors from '../../utils/handleYupErrors';

import CartContainer from './styles';

import img from '../../assets/images/img.svg';

function ShoppingCart() {
  const formRef = useRef('');
  const [soldAmount, setSoldAmount] = useState(0);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const {
    shoppingCart,
    setShoppingCart,
    handleRemoveItemFromCart,
    handleClearCart,
  } = useCart();

  const totalPrice = shoppingCart.reduce(
    (acc, current) => acc + Number(current.price * current.soldAmount),
    0,
  );

  const quantityToSell = (value) => {
    setSoldAmount(value);
    localStorage.setItem('shopping-cart', JSON.stringify([...shoppingCart]));
  };

  const handleSubmit = async (data, { reset }) => {
    try {
      const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const consumer = {
        name: data.name,
        totalValueOfProducts: totalPrice,
        purchasedProducts: [...shoppingCart],
      };

      if (localStorage.getItem('purshases') === null) {
        localStorage.setItem('purshases', JSON.stringify([consumer]));
        setPurchasedProducts(consumer);
        handleClearCart();
      } else {
        const getPurchasedProducts = await JSON.parse(
          localStorage.getItem('purshases'),
        );
        localStorage.setItem(
          'purshases',
          JSON.stringify([...getPurchasedProducts, consumer]),
        );
        setPurchasedProducts([...purchasedProducts, consumer]);
        handleClearCart();
      }

      reset();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errors = handleYupErrors(error);

        formRef.current.setErrors(errors);
      }
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const getShoppingCartData = localStorage.getItem('shopping-cart');
      if (getShoppingCartData) {
        const shoppingCartDataFormat = await JSON.parse(getShoppingCartData);

        setShoppingCart(shoppingCartDataFormat);
      }
    })();
  }, []);

  return (
    <CartContainer>
      {shoppingCart.length === 0 ? (
        <span className="empty__cart">Carrinho está vazio</span>
      ) : (
        <>
          <table className="table__cart">
            <thead className="table__cart-header">
              <tr>
                <th>Produto</th>
                <th>Descrição</th>
                <th>Valor unitário</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img src={img} alt="box" />
                      {item.product}
                    </td>
                    <td>{item.description}</td>
                    <td>{formatCurrency(item.price)}</td>
                    <td>
                      <button
                        type="button"
                        className="btn__quantity"
                        onClick={() => {
                          if (Math.sign(item.soldAmount - 1) !== 0) {
                            quantityToSell(item.soldAmount--);
                          }
                        }}
                      >
                        -
                      </button>
                      <span className="sold__quantity">{item.soldAmount}</span>
                      <button
                        type="button"
                        className="btn__quantity"
                        onClick={() => quantityToSell(item.soldAmount++)}
                      >
                        +
                      </button>
                    </td>
                    <td>{formatCurrency(item.price * item.soldAmount)}</td>
                    <td>
                      <button
                        className="table__cart__cell-btn"
                        type="button"
                        onClick={() => handleRemoveItemFromCart(item.id)}
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Divider />
          <div className="btn__container">
            <span>total: {formatCurrency(totalPrice)}</span>
            <Form
              className="form__checkout"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <UnformInput name="name" label="Nome:" />
              <button type="submit" className="btn__checkout">
                Finalizar compra
              </button>
              <button
                type="button"
                className="btn__checkout"
                onClick={() => handleClearCart()}
              >
                Esvaziar carrinho
              </button>
            </Form>
          </div>
        </>
      )}
    </CartContainer>
  );
}

export default ShoppingCart;
