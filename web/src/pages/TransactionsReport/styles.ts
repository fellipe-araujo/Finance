import styled from "styled-components";

interface Props {
  backgroundColor: string;
}

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .report-title {
    margin: 2rem 0;
    color: #202020;
  }

  .report-logo {
    width: 25rem;
    margin-bottom: 3rem;
  }
`;

const ReportCardCategory = styled.div<Props>`
  width: 90%;
  height: 4rem;
  background-color: #fff;
  margin: 1rem 0;
  border-radius: 0.8rem;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .report-category-card-container {
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .report-category-card-color {
    width: 0.7rem;
    height: 100%;
    background-color: ${(props) => props.backgroundColor};
    margin-right: 1rem;
  }

  .report-category-card-name {
    font-size: 2rem;
    color: #202020;
  }

  .report-category-card-amount {
    font-size: 2rem;
    color: #39393a;
    margin-right: 2rem;
  }
`;

export { Container, ReportCardCategory };
