/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import formatCurrency from '../../utils/formatCurrency';
import PurshasesContainer from './styles';

function Purshases() {
  const [purshasedProducts, setPurshasedProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const getPurshasedProducts = localStorage.getItem('purshases');
      if (getPurshasedProducts) {
        const formatPurshasedProducts = await JSON.parse(getPurshasedProducts);

        setPurshasedProducts(formatPurshasedProducts);
      }
    })();
  }, []);

  return (
    <PurshasesContainer>
      <table className="table">
        <thead className="table__header">
          <tr>
            <th>Pedido</th>
            <th>Comprador</th>
            <th>Quantidade de produtos</th>
            <th>Valor total do pedido</th>
          </tr>
        </thead>
        <tbody>
          {!purshasedProducts ? (
            <span>NADA</span>
          ) : (
            purshasedProducts.map((item, id) => (
              <tr className="table__body" key={id}>
                <td># {id}</td>
                <td>{item.name}</td>
                <td>{item.totalProductsPurshased}</td>
                <td>{formatCurrency(item.totalValueOfProducts)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </PurshasesContainer>
  );
}

export default Purshases;
