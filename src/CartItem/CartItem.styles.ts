import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #e9bbbc;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .info,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 80px;
    object-fit: contain;
    margin-left: 40px;
  }
`;
