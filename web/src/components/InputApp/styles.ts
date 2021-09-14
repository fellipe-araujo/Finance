import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 1rem 0;

  display: flex;
  flex-direction: column;
`;

const Label = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.subTitle};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  height: 4rem;
  color: ${({ theme }) => theme.colors.grayLight};
  background-color: ${({ theme }) => theme.colors.grayMedium};
  border-radius: 0.8rem;
  padding: 0 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.artifactDark};
`;

export { Container, Label, Input };
