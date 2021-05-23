import styled from 'styled-components';

interface ButtonProps {
  create: boolean;
}

const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  height: 5rem;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 0.5rem;
  text-decoration: none;
  margin: 1rem 0;

  background: ${(props) => (props.create ? '#505050' : '#FF8888')};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  .button-title {
    color: #fff;
  }
`;

export { ButtonContainer };
