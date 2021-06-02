import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #39393a;
  box-shadow: 0 0 1rem rgba(14, 9, 9, 0.8);
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 5.5rem;
  }

  h1 {
    color: #fff;
  }

  button {
    background: none;
    border: none;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logout {
    background: transparent;
    border: 0;
  }

  .logout-title {
    font-size: 3rem;
  }

  a {
    text-decoration: none;
    border-bottom: 1px solid #a3a3a3;
  }

  h1 {
    font-size: 3rem;
    margin: 2rem 0;
    color: #39393a;
  }
`;

export { HeaderContainer, Menu };
