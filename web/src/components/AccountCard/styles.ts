import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #fff;
  border-radius: 0.8rem;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 40%;
  height: 100%;
  background: linear-gradient(119.36deg, #a9def9 0%, #e4f2fa 100%);
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .account-card-title {
    font-size: 2.4rem;
    color: #202020;
    text-align: center;
  }
`;

const ValueBox = styled.div`
  width: 60%;
  height: 100%;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  .account-card-value {
    font-size: 2.6rem;
    font-weight: 700;
    color: #39393a;
  }
`;

export { Container, TitleBox, ValueBox };
