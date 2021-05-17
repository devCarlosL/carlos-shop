import styled from 'styled-components';

const CartContainer = styled('div')`
  display: flex;
  flex-direction: column;

  .empty__cart {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;

    color: #f00;
  }

  table {
    border-spacing: 1rem;
  }

  .table__cart {
    text-align: left;

    tr {
      padding: 8px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    }

    th {
      height: 0.5rem;
      font-size: 0.8rem;
      text-transform: uppercase;

      &:first-child {
        padding-left: 1rem;
      }
    }

    td {
      height: 5rem;
      font-size: 0.75rem;

      img {
        height: 5rem;
        width: 5rem;
        margin-right: 1rem;
      }

      &:first-child {
        padding-left: 0.5rem;
        display: flex;
        align-items: center;
      }

      &:last-child {
        text-align: center;
      }
    }

    .table__cart-header tr {
      box-shadow: none;
    }

    .table__cart__cell-btn {
      padding: 0.5rem;
      border: none;
      background: transparent;
      text-transform: uppercase;
      font-size: 0.7rem;
      font-weight: bold;

      &:hover {
        color: #f00;
      }
    }
  }

  input:focus {
    outline: none;
  }

  .sold__quantity {
    height: 1.5rem;
    width: 1.8rem;
    padding: 0.4rem 0.8rem;
    text-align: center;
    border: 1px solid #eaeaea;
    background: #f7f7f7;
  }

  .btn__quantity {
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 1rem;

    font-size: 1rem;
    background: transparent;
    border: none;

    &:first-child {
      margin-left: 0;
    }
  }

  .btn__container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 2rem;

    span:first-child {
      text-align: left;
      font-size: 1.2rem;
      font-weight: bold;
      margin-right: 2rem;
      margin-bottom: 3rem;
      text-transform: uppercase;
    }

    .btn__checkout {
      padding: 0.5rem 2rem;
      margin-top: 1rem;
      height: 2.1rem;
      width: 320px;

      color: #fff;
      background: #009944;

      border: none;
      border-radius: 4px;

      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;

      &:hover {
        filter: brightness(0.8);
      }

      &:last-child {
        color: initial;
        background: transparent;

        &:hover {
          color: #f00;
        }
      }
    }
  }
`;

export default CartContainer;
