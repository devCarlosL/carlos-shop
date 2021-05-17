/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';

import HomeCard from '../../components/HomeCard';

import { useCart } from '../../contexts/cart';

import HomeContainer from './styles';

function Home() {
  const { handleAddItemToCart } = useCart();
  const [storedProducts, setStoredProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const getStoredProducts = localStorage.getItem('products');
      if (getStoredProducts) {
        const storedProductsFormat = await JSON.parse(getStoredProducts);

        setStoredProducts(storedProductsFormat);
      }
    })();
  }, []);

  console.log(storedProducts);

  return (
    <HomeContainer>
      <ul>
        {storedProducts.map((item, i) => (
          <li key={i}>
            <HomeCard
              product={item.product}
              price={item.price}
              textButton="Adicionar"
              onClick={() =>
                handleAddItemToCart(
                  i,
                  item.product,
                  item.description,
                  item.price,
                  item.quantity,
                )
              }
            />
          </li>
        ))}
      </ul>
    </HomeContainer>
  );
}

export default Home;
