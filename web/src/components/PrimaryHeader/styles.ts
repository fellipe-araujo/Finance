import styled from "styled-components";
import { colors } from "../../styles/colors";

const Container = styled.div`
  width: 100%;
  height: 15rem;
  background-color: ${colors.grayMedium};
  border-bottom-left-radius: 8rem;
  border-bottom-right-radius: 8rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Content = styled.div`
  width: 90%;
  margin-top: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .primary-header-link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .primary-header-title {
    color: ${colors.white};
    font-size: 2.6rem;
  }
`;

export { Container, Content };
