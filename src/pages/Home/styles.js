import styled from 'styled-components';

const HomeContainer = styled('div')`
  text-align: center;

  .empty__products {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;

    color: #f00;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  ul li {
    flex: 0 auto;
  }
`;

export default HomeContainer;
