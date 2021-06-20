import styled from "styled-components";
import { colors } from "../../styles/colors";

interface ButtonProps {
  create: boolean;
}

const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  height: 5rem;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 0.5rem;
  text-decoration: none;
  margin: 1rem 0;

  background: ${(props) => (props.create ? colors.grayLight : colors.redLight)};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  .button-title {
    color: ${colors.white};
  }
`;

export { ButtonContainer };
