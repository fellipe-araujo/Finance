import styled from 'styled-components';

interface ButtonProps {
  create: boolean;
}

const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  height: 6.4rem;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 0.5rem;
  text-decoration: none;
  margin: 1rem 0;

  background: ${(props) =>
    props.create ? props.theme.colors.purpleDark : props.theme.colors.redDark};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
`;

export { ButtonContainer, Title };
