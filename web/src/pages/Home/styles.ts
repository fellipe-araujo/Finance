import styled from 'styled-components';

const HomeContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeBalance = styled.h1`
  color: #39393a;
  margin-top: 2rem;
  font-weight: 700;
`;

const HomeContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 6rem;
  border-radius: 2rem 2rem 0 0;
  box-shadow: 0 0 3rem rgba(14, 9, 9, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeResumeTitle = styled.h1`
  color: #39393a;
  margin-top: 2rem;
`;

export { HomeContainer, HomeBalance, HomeContent, HomeResumeTitle };
