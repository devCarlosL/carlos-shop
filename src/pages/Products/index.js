import React, { useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import * as yup from 'yup';

import Divider from '../../components/Divider';
import UnformInput from '../../components/UnformInput';

import formatCurrency from '../../utils/formatCurrency';
import handleYupErrors from '../../utils/handleYupErrors';

import ProductsContainer from './styles';

function Products() {
  const formRef = useRef();
  const [storedProducts, setStoredProducts] = useState([]);

  const handleSubmit = async (data, { reset }) => {
    try {
      const schema = yup.object().shape({
        product: yup.string().required('Campo obrigatório'),
        description: yup.string().required('Campo obrigatório'),
        quantity: yup
          .string()
          .matches(/^[0-9]+$/gi, 'Apenas números')
          .required('Campo obrigatório'),
        price: yup.string().required('Campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (localStorage.getItem('products') === null) {
        localStorage.setItem('products', JSON.stringify([data]));
        setStoredProducts([...storedProducts, data]);
      } else {
        const getStoredProducts = await JSON.parse(
          localStorage.getItem('products'),
        );
        localStorage.setItem(
          'products',
          JSON.stringify([...getStoredProducts, data]),
        );
        setStoredProducts([...storedProducts, data]);
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

  const handleRemove = (clickedItem) => {
    const filteredProduct = storedProducts.filter(
      (item) => storedProducts.indexOf(item) !== clickedItem,
    );

    setStoredProducts(filteredProduct);
    localStorage.setItem('products', JSON.stringify(filteredProduct));
  };

  useEffect(() => {
    (async () => {
      const getStoredProducts = localStorage.getItem('products');
      if (getStoredProducts) {
        const dataFormat = await JSON.parse(getStoredProducts);

        setStoredProducts(dataFormat);
      }
    })();
  }, []);

  return (
    <ProductsContainer>
      <Form className="form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form__item">
          <UnformInput type="text" name="product" label="Produto:" />
          <UnformInput type="text" name="description" label="Descrição:" />
        </div>
        <div className="form__item" style={{ marginTop: '16px' }}>
          <UnformInput type="string" name="quantity" label="Quantidade:" />
          <UnformInput type="number" step="0.01" name="price" label="Preço:" />
        </div>
        <Divider />
        <div className="form__buttons">
          <button type="submit">Salvar</button>
          <button type="button">Cancelar</button>
        </div>
        <Divider />
      </Form>

      <table className="table">
        <thead className="table__header">
          <tr>
            <th>Produto</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {storedProducts.map((item) => (
            <tr className="table__body" key={item.id}>
              <td>{item.product}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{formatCurrency(item.price)}</td>
              <td>
                <button
                  className="table__btn"
                  type="button"
                  onClick={() => handleRemove(item.id)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ProductsContainer>
  );
}

export default Products;
