/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({});
const useCart = () => useContext(CartContext);

function CartProvider(props) {
  const [shoppingCart, setShoppingCart] = useState([]);

  const handleAddItemToCart = async (
    id,
    product,
    description,
    quantity,
    price,
    soldAmount = 1,
  ) => {
    const createProduct = {
      id,
      product,
      description,
      quantity,
      price,
      soldAmount,
    };

    if (localStorage.getItem('shopping-cart') === null) {
      localStorage.setItem('shopping-cart', JSON.stringify([createProduct]));
      setShoppingCart([...shoppingCart, createProduct]);
    } else {
      const productsInCart = await JSON.parse(
        localStorage.getItem('shopping-cart'),
      );
      localStorage.setItem(
        'shopping-cart',
        JSON.stringify([...productsInCart, createProduct]),
      );
      setShoppingCart([...productsInCart, createProduct]);
    }
  };

  const handleRemoveItemFromCart = (clickedItem) => {
    const filteredCart = shoppingCart.filter(
      (item) => shoppingCart.indexOf(item) !== clickedItem,
    );

    setShoppingCart(filteredCart);
    localStorage.setItem('shopping-cart', JSON.stringify(filteredCart));
  };

  const handleClearCart = () => {
    setShoppingCart([]);
    localStorage.removeItem('shopping-cart');
  };

  useEffect(() => {
    (async () => {
      const getProductsInCart = localStorage.getItem('shopping-cart');
      if (getProductsInCart) {
        const productsInCartFormat = await JSON.parse(getProductsInCart);

        setShoppingCart(productsInCartFormat);
      }
    })();
  }, []);
  console.log(shoppingCart);
  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        handleAddItemToCart,
        handleRemoveItemFromCart,
        handleClearCart,
      }}
      {...props}
    />
  );
}

export { CartProvider, useCart };
