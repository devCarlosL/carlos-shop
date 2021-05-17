import styled from 'styled-components';

const PurshasesContainer = styled('div')`
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
  }
`;

export default PurshasesContainer;
