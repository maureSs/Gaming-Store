import styled from 'styled-components';

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
  @media (max-width: 480px) {
    width: 300px;
    padding: 12px;
  }
  @media (min-width: 480px) and (max-width: 768px) {
    width: 350px;
    padding: 13px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 400px;
    padding: 15px;
  }
`;
