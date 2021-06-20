import styled from "styled-components";
import { colors } from "../../styles/colors";

interface TitleProps {
  isLogout?: boolean;
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 10rem;
  background-color: ${colors.grayMedium};
  box-shadow: 0 0 1rem rgba(14, 9, 9, 0.8);
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 5.5rem;
  }

  h1 {
    color: ${colors.white};
  }

  button {
    background: none;
    border: none;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;

  .menu-line {
    width: 90%;
    border-bottom: 1px solid ${colors.line};

    align-self: center;
  }

  .logout,
  .menu-option {
    background: transparent;
    text-decoration: none;
    border: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Title = styled.h1<TitleProps>`
  font-size: 2.4rem;
  margin: 2rem;
  color: ${(props) => (props.isLogout ? colors.redDark : colors.grayMedium)};
`;

export { HeaderContainer, Menu, Title };
