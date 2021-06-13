import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 2px solid #e9bbbc;
  border-radius: 21px;
  height: 100%;

  button {
    border-radius: 0 0 18px 18px;
    background-color: #e5c1c4;
  }

  img {
    max-height: 250px;
    object-fit: contain;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }

  .product-name {
    text-align: center;
  }

  .add-to-cart {
    font-family: 'Verdana';
  }
`;
