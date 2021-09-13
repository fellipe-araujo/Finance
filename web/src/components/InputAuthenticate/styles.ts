import styled from "styled-components";

const Container = styled.div`
  width: 30rem;
  margin: 4rem 0;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
`;

const Input = styled.input`
  width: 100%;
  height: 5rem;
  background: transparent;
  border: none;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.purpleDark};
  color: ${({ theme }) => theme.colors.grayLight};
`;

export { Container, Title, Input };
