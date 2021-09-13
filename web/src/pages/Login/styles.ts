import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(
    167.96deg,
    ${({ theme }) => theme.colors.purpleMedium} 0%,
    ${({ theme }) => theme.colors.purpleLight} 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoApp = styled.img`
  width: 12rem; 
`;

const LogoTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  font-size: ${({ theme }) => theme.fonts.size.title};
  letter-spacing: .7rem;
`;

export { Container, LogoContainer, LogoApp, LogoTitle };
