import styled, { css } from 'styled-components';

interface BottomBarProps {
  keyboardIsOpen: boolean;
  isLoading: boolean;
}

const Container = styled.div<BottomBarProps>`
  width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.purpleDark};

  ${(props) =>
    props.isLoading
      ? css`
          display: none;
        `
      : css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
        `}

  ${(props) =>
    !props.keyboardIsOpen &&
    css`
      position: fixed;
      bottom: 0;
    `};
`;

const IconContainer = styled.button`
  width: 20%;
  margin: 0 0.5rem;
  border: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1rem;
  color: ${(props) => props.color};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
`;

export { Container, IconContainer, Title };
