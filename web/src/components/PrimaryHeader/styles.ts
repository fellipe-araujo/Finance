import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #39393a;
  border-bottom-left-radius: 8rem;
  border-bottom-right-radius: 8rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Content = styled.div`
  width: 90%;
  margin-top: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .primary-header-link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .primary-header-title {
    color: #fff;
    font-size: 2.6rem;
  }
`;

export { Container, Content };
