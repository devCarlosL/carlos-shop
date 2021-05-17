import styled from 'styled-components';

const ProductsContainer = styled('div')`
  .form {
    display: flex;
    flex-direction: column;

    .form__buttons {
      display: flex;
      justify-content: flex-end;
      margin-right: 1.5rem;

      button {
        background: #1b5b83;
        border: none;

        font-size: 0.8rem;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        height: 2.1rem;

        text-transform: uppercase;
        font-weight: bold;

        &:first-child {
          color: #fff;
        }

        &:first-child:hover {
          background: #174c6e;
        }

        &:last-child {
          background: none;
        }

        &:last-child:hover {
          color: #f00;
        }
      }
    }

    .form__item {
      display: flex;
      width: 100%;
    }

    .form__item div:first-child {
      margin-right: 0.75rem;
    }

    .form__item div:last-child {
      margin-left: 0.75rem;
    }
  }

  .table {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    font-size: 1rem;
    border-collapse: collapse;
    border: 1px solid #e6eaec;
    text-align: left;

    th,
    td {
      border: 1px solid #e6eaec;
      padding: 0.8rem;
    }

    tr:hover {
      background-color: #e6eaec;
    }

    .table__btn {
      font-size: 0.8rem;
      color: #fff;
      background: #f00;

      text-transform: uppercase;
      font-weight: bold;

      border: none;
      border-radius: 4px;
      padding: 0.5rem 1rem;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

export default ProductsContainer;
