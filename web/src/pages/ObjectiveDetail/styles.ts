import styled, { css } from 'styled-components';

interface OptionProps {
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
`;

const InputsBox = styled.div`
  width: 90%;
  margin-top: 3rem;

  .objective-detail-input-currency {
    width: 100%;
    height: 4rem;
    background-color: ${({ theme }) => theme.colors.grayMedium};
    color: ${({ theme }) => theme.colors.grayLight};
    border-radius: 0.8rem;
    padding: 0 1rem;
    border: 0.2rem solid ${({ theme }) => theme.colors.artifactDark};
  }
`;

const Label = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.title};
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

const Option = styled.div<OptionProps>`
  width: 50%;
  height: 100%;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.grayMedium};
  border: 0.3rem solid ${({ theme }) => theme.colors.grayMedium};
  transition: 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

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

const Title = styled.h2<OptionProps>`
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

const ButtonsBox = styled.div`
  margin-top: 3rem;
`;

export { Content, InputsBox, Label, OptionsBox, Option, Title, ButtonsBox };
