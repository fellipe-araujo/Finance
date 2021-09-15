import styled, { css } from 'styled-components';

interface TypeProps {
  add?: boolean;
  remove?: boolean;
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 13rem;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 25rem;
    margin-bottom: 3rem;
  }
`;

const Options = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .new-transaction-input-currency {
    width: 100%;
    height: 4rem;
    background-color: ${({ theme }) => theme.colors.grayMedium};
    color: ${({ theme }) => theme.colors.grayLight};
    border-radius: 0.8rem;
    padding: 0 1rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.artifactDark};
  }
`;

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.subTitle};
  color: ${({ theme }) => theme.colors.white};
  margin: 1.5rem 0;

  align-self: flex-start;
`;

const OptionsBox = styled.div`
  width: 100%;
  height: 4rem;
  margin: 1rem 0;
  border-radius: 0.8rem;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Type = styled.button<TypeProps>`
  width: 50%;
  height: 100%;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.grayMedium};
  border: 0.3rem solid ${({ theme }) => theme.colors.grayMedium};
  transition: 0.3s;

  ${(props) =>
    props.add &&
    css`
      border-bottom-left-radius: 0.8rem;
      border-top-left-radius: 0.8rem;
      border-color: ${({ theme }) => theme.colors.greenDark};
    `};

  ${(props) =>
    props.remove &&
    css`
      border-bottom-right-radius: 0.8rem;
      border-top-right-radius: 0.8rem;
      border-color: ${({ theme }) => theme.colors.redDark};
    `};
`;

const Label = styled.h2<TypeProps>`
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.colors.grayLight};

  ${(props) =>
    props.add &&
    css`
      color: ${({ theme }) => theme.colors.greenDark};
    `};

  ${(props) =>
    props.remove &&
    css`
      color: ${({ theme }) => theme.colors.redDark};
    `};
`;

const CalendarButton = styled.button`
  margin: 1rem 0 2rem;
  background: transparent;
  border: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CalendarText = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.title};
  margin-left: 1.5rem;
  color: ${({ theme }) => theme.colors.grayLight};
`;

const SelectBox = styled.div`
  width: 27rem;
  height: 4.8rem;
  margin: 1rem 0 2rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.grayMedium};
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > select {
    background-color: ${({ theme }) => theme.colors.grayMedium};
    width: 25rem;
    height: 4.8rem;
    ${({ theme }) => theme.fonts.size.subTitle};

    color: ${({ theme }) => theme.colors.grayLight};
    border: 0;
    border-radius: 0.5rem;
  }
`;

export {
  Content,
  Options,
  SubTitle,
  OptionsBox,
  Type,
  Label,
  CalendarButton,
  CalendarText,
  SelectBox,
};
