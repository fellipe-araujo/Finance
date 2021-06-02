import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 10rem;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  background-color: #39393a;
  padding: 0 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .secondary-header-link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .secondary-header-title {
    color: #fff;
    font-size: 2.6rem;
  }

  .secondary-header-invisible {
    width: 3rem;
  }
`;

export { Container };
