import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 120%;
  height: 15rem;
  /* margin-bottom: 10rem; */
  background-color: ${({ theme }) => theme.colors.purpleMedium};
  border-bottom-left-radius: 20rem;
  border-bottom-right-radius: 20rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: fixed;
  top: 0;
`;

const Content = styled.div`
  width: 75%;
  margin-top: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 3rem;
  }
`;

const LinkNewAccount = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.title};
`;

export { Container, Content, LinkNewAccount, Title };
