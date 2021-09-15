import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 5rem;
  }
`;

const Title = styled.div`
  margin: 2rem 0 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.title};
  text-align: center;
`;

const ButtonsBox = styled.div`
  width: 100%;
  margin-top: 3rem;

  display: flex;
  flex-direction: row;
`;

const CancelAction = styled.div`
  width: 50%;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.redLight};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 1.4rem;
`;

const ConfirmAction = styled.div`
  width: 50%;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.grayLight};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, Title, ButtonsBox, CancelAction, Text, ConfirmAction };
