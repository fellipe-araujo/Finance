import styled from "styled-components";
import { colors } from "../../styles/colors";

const Container = styled.div`
  width: 100%;
  height: 10rem;
  background-color: ${colors.white};
  border-radius: 0.8rem;
  overflow: hidden;
  margin: 1.5rem 0;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 40%;
  height: 100%;
  background: linear-gradient(119.36deg, #a9def9 0%, #e4f2fa 100%);
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .account-card-title {
    font-size: 2.4rem;
    color: ${colors.grayMedium};
    text-align: center;
  }
`;

const ValueBox = styled.div`
  width: 60%;
  height: 100%;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .account-card-value {
    font-size: 2.6rem;
    color: ${colors.grayLight};
  }
`;

export { Container, TitleBox, ValueBox };
