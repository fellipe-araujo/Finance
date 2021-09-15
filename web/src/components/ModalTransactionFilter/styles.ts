import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 5rem;
  }
`;

const Title = styled.h2`
  margin: 2rem 0 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  text-align: center;
`;

const ButtonOption = styled.button`
  width: 100%;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.grayMedium};
  margin: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.grayLight};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fonts.weight.light};
`;

const Separator = styled.div`
  width: 80%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.colors.grayMedium};
  opacity: 0.2;
`;

export { Container, Title, ButtonOption, SubTitle, Separator };
