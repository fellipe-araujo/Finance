import styled from 'styled-components';

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
  }
`;

const Options = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .new-objective-input-currency {
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
  margin-bottom: 1.5rem;

  align-self: flex-start;
`;

export { Content, Options, SubTitle };
