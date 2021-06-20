import styled from "styled-components";
import { colors } from "../../styles/colors";

interface InputProps {
  border: string;
}

const Container = styled.div`
  width: 100%;
  margin: 1rem 0;

  display: flex;
  flex-direction: column;

  .input-app-title {
    font-size: 1.8rem;
    color: ${colors.grayMedium};
    margin-bottom: 1.5rem;
  }
`;

const Input = styled.input<InputProps>`
  height: 4rem;
  color: ${colors.grayMedium};
  border-radius: 0.8rem;
  padding: 0 1rem;
  border: ${(props) => props.border};
`;

export { Container, Input };
