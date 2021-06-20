import styled from "styled-components";
import { colors } from "../../styles/colors";

const Container = styled.div`
  width: 30rem;
  margin: 4rem 0;

  .input-authenticate-title {
    color: ${colors.grayMedium};
    font-size: 1.8rem;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 5rem;
  background: transparent;
  border: none;
  border-bottom: 0.1rem solid ${colors.accountDark};
  color: #39393a;
`;

export { Container, Input };
