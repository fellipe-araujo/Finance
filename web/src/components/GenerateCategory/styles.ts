import styled from "styled-components";
import { colors } from "../../styles/colors";

const Container = styled.div`
  width: 100%;
  margin: 3rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .generate-category-title {
    align-self: flex-start;
    margin-left: 2rem;
    font-size: 1.8rem;
  }

  .category-card-container {
    width: 70%;
  }

  .generate-category-input-group {
    width: 80%;
    height: 5rem;
    margin-top: 10;

    display: flex;
    flex-direction: row;
  }
`;

const Input = styled.input`
  width: 80%;
  height: 100%;
  background-color: ${colors.white};
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  border: 0.2rem solid ${colors.categoryDark};
  border-right-width: 0;
  padding: 0.8rem;
  color: ${colors.grayMedium};
`;

const ButtonGenerate = styled.button`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${colors.categoryDark};
  border: 0;
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Input, ButtonGenerate };
