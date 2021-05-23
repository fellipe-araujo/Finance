import styled from 'styled-components';

interface InputProps {
  border: string;
}

const Container = styled.div`
  width: 100%;
  margin: 1rem 0;

  display: flex;
  flex-direction: column;

  .input-app-title {
    font-size: 1.8rem;
    color: #202020;
    margin-bottom: 1.5rem;
  }
`;

const Input = styled.input<InputProps>`
  height: 4rem;
  color: #39393a;
  border-radius: 0.8rem;
  padding: 0 1rem;
  border: ${(props) => props.border};
`;

export { Container, Input };
