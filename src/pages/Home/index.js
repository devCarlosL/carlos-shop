import React, { useEffect, useState } from 'react';

import HomeCard from '../../components/HomeCard';

import { useCart } from '../../contexts/cart';

import HomeContainer from './styles';

function Home() {
  const { shoppingCart, handleAddItemToCart } = useCart();
  const [storedProducts, setStoredProducts] = useState([]);

  const verifyOncart = (id) => shoppingCart.find((el) => el.id === id);

  useEffect(() => {
    (async () => {
      const getStoredProducts = localStorage.getItem('products');
      if (getStoredProducts) {
        const storedProductsFormat = await JSON.parse(getStoredProducts);

        setStoredProducts(storedProductsFormat);
      }
    })();
  }, []);

  return (
    <HomeContainer>
      {storedProducts.length === 0 ? (
        <span className="empty__products">Não há produtos</span>
      ) : (
        <ul>
          {storedProducts.map((item) => (
            <li key={item.id}>
              <HomeCard
                product={item.product}
                price={item.price}
                disabled={!!verifyOncart(item.id)}
                textButton={verifyOncart(item.id) ? 'No Carrinho' : 'Adicionar'}
                onClick={() =>
                  handleAddItemToCart(
                    item.id,
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
      )}
    </HomeContainer>
  );
}

export default Home;
