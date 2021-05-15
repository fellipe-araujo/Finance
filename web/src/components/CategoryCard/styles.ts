import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  height: 5rem;
  border-radius: 0.8rem;
  margin: 1.5rem 0;
  background: ${(props) => props.color};

  .category-card-link {
    width: 100%;
    height: 100%;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .category-card-title {
    font-size: 2.4rem;
    color: #39393a;
    font-weight: 700;
  }
`;

export { Container };
