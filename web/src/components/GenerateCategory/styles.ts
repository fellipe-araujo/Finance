import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 3rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.h2`
  align-self: flex-start;
  margin-left: 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.subTitle};
`;

const CategoryBox = styled.div`
  width: 70%;
`;

const GenerateCategoryBox = styled.div`
  width: 80%;
  height: 5rem;
  margin-top: 10;

  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 80%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grayMedium};
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.artifactDark};
  border-right-width: 0;
  padding: 0.8rem;
  color: ${({ theme }) => theme.colors.grayLight};
`;

const ButtonGenerate = styled.button`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.artifactDark};
  border: 0;
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Label, CategoryBox, GenerateCategoryBox, Input, ButtonGenerate };
