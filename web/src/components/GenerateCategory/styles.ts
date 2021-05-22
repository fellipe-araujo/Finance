import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 3rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .generate-category-title {
    align-self: flex-start;
    margin-left: 2rem;
    font-size: 1.8rem;
  }

  .generate-category-input-group {
    width: 80%;
    height: 5rem;
    margin-top: 10;

    display: flex;
    flex-direction: row;
  }
`;

const Input = styled.input`
  width: 80%;
  height: 100%;
  background-color: #FFF;
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  border: 0.2rem solid #F5EC97;
  border-right-width: 0;
  padding: 0.8rem;
  color: #39393A;
`;

const ButtonGenerate = styled.button`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #F5EC97;
  border: 0;
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Input, ButtonGenerate };
