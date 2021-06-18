import styled from "styled-components";
import { colors } from "../../styles/colors";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: 5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 85%;
  height: 20rem;
  background: ${colors.white};
  border-radius: 0.8rem;
  box-shadow: 0 0 3rem rgba(14, 9, 9, 0.2);
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .account-detail-title {
    font-size: 2.4rem;
    align-self: flex-start;
    color: ${colors.grayDark};
  }

  .account-detail-line {
    width: 90%;
    height: 0.1rem;
    background: ${colors.line};
    margin: 1.5rem 0;
  }

  .account-detail-value-container {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .account-detail-value-title {
    color: ${(props) => props.color};
  }
`;

const Options = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Container, Content, Card, Options };
