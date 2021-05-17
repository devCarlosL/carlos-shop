import styled from 'styled-components';

const CardContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 22rem;
  width: 17.3rem;
  padding: 1rem;
  margin: 1.35rem;

  border-radius: 0.2rem;

  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  img {
    width: 100%;
    height: 100%;
  }
  span {
    text-align: left;
  }

  .product__name {
    font-size: 1rem;
    color: #8697a1;
    margin-top: 1rem;
  }

  .price {
    font-size: 1rem;
    font-weight: bold;
    margin: 1.5rem 0;
  }

  button {
    background: #1b5b83;
    color: #fff;
    font-size: 1rem;
    border: none;
    width: 100%;
    border-radius: 3px;
    padding: 0.5rem 1rem;

    &:disabled {
      background: #d8d8d8;
    }

    &:hover:not([disabled]) {
      filter: brightness(0.8);
    }
  }
`;

export default CardContainer;
