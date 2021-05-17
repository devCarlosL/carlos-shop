import styled, { css } from 'styled-components';

const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }

  input {
    border: 1px solid #e6eaec;
    border-radius: 4px;
    height: 2rem;
    padding: 0 0.5rem;
  }

  input:focus {
    outline: none;
    box-shadow: #1b5b83 0px 0px 5px 0px, #1b5b83 0px 0px 1px 0px;
  }

  .error {
    font-size: 0.8rem;
    color: #f00;
  }

  ${(props) =>
    props.$error &&
    css`
      border: #f00;
    `};
`;

export default InputContainer;
