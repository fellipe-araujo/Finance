import styled from "styled-components";

const Container = styled.div`
  width: 30rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.grayMedium};
  border-radius: 0.8rem;
  overflow: hidden;
  margin: 1.5rem 0;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 40%;
  height: 100%;
  background: linear-gradient(
    119.36deg,
    ${({ theme }) => theme.colors.artifactDark} 0%,
    ${({ theme }) => theme.colors.artifactLight} 100%
  );
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const ValueBox = styled.div`
  width: 60%;
  height: 100%;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Value = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.title};
  color: ${({ theme }) => theme.colors.grayLight};
`;

export { Container, TitleBox, Title, ValueBox, Value };
