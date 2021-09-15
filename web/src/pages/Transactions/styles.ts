import styled from 'styled-components';

const ModalAppContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 5rem;
  }

  > h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.size.title};
    font-weight: ${({ theme }) => theme.fonts.weight.light};
    margin: 2rem 0;
  }
`;

const SelectBox = styled.div`
  height: 4.8rem;
  margin: 1rem 0 2rem;
  border: 0;
  background-color: transparent;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > select {
    width: 25rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.colors.grayDark};
    color: ${({ theme }) => theme.colors.grayLight};
    font-size: ${({ theme }) => theme.fonts.size.title};
    border: 0;
    border-radius: 0.5rem;
  }
`;

const ButtonsBox = styled.div`
  width: 90%;
  margin-top: 30rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ButtonOption = styled.button`
  background-color: transparent;
  border: 0;
  text-decoration: none;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grayMedium};
  padding: 0.7rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h2`
  margin-left: 1rem;
  font-size: ${({ theme }) => theme.fonts.size.subTitle};
  color: ${({ theme }) => theme.colors.grayLight};
`;

const List = styled.div`
  width: 90%;
  height: 65%;
  overflow-y: scroll;

  > img {
    width: 25rem;
    margin-bottom: 3rem;
  }
`;

export { ModalAppContainer, SelectBox, ButtonsBox, ButtonOption, Title, List };
