import styled from "styled-components";
import { colors } from "../../styles/colors";

const Container = styled.div`
  width: 100%;
  height: 5rem;
  border-radius: 0.8rem;
  margin: 1.5rem 0;
  background: ${(props) => props.color};

  display: flex;
  align-items: center;
  justify-content: center;

  .category-card-title {
    font-size: 2.4rem;
    color: ${colors.grayMedium};
    font-weight: 700;
  }
`;

export { Container };
