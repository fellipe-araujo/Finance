import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

interface OptionProps {
  add?: boolean;
  remove?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .objective-detail-inputs {
    width: 90%;
    margin-top: 5rem;
  }

  .option-container {
    width: 100%;
    height: 4rem;
    background-color: ${colors.white};
    margin: 1rem 0;
    border-radius: 0.8rem;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .objective-button-container {
    margin-top: 3rem;
  }
`;

const Option = styled.button<OptionProps>`
  width: 50%;
  height: 100%;
  text-decoration: none;
  background-color: ${colors.white};
  border: 0.3rem solid ${colors.white};
  transition: 0.1s;

  .option-title {
    font-size: 2rem;
    color: ${colors.grayMedium};
  }

  ${(props) =>
    props.add &&
    css`
      border-bottom-left-radius: 0.8rem;
      border-top-left-radius: 0.8rem;
      border-color: ${colors.greenDark};

      .option-title {
        color: ${colors.greenDark};
        font-weight: 700;
      }
    `};

  ${(props) =>
    props.remove &&
    css`
      border-bottom-right-radius: 0.8rem;
      border-top-right-radius: 0.8rem;
      border-color: ${colors.redDark};

      .option-title {
        color: ${colors.redDark};
        font-weight: 700;
      }
    `};
`;

export { Container, Option };
