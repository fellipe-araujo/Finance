import styled from "styled-components";

interface Props {
  backgroundColor: string;
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 13rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin: 2rem 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.title};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
`;

const List = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 25rem;
    margin-bottom: 3rem;
  }
`;

const ReportCardCategory = styled.div`
  width: 90%;
  min-height: 4rem;
  background-color: ${({ theme }) => theme.colors.grayMedium};
  margin: 1rem 0;
  border-radius: 0.8rem;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > h2 {
    font-size: ${({ theme }) => theme.fonts.size.title};
    font-weight: ${({ theme }) => theme.fonts.weight.light};
    color: ${({ theme }) => theme.colors.grayLight};
    margin-right: 2rem;
  }
`;

const CategoryBox = styled.div<Props>`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    width: 0.7rem;
    height: 100%;
    background-color: ${(props) => props.backgroundColor};
    margin-right: 1rem;
  }

  > h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.size.title};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
  }
`;

export { Content, Title, List, ReportCardCategory, CategoryBox };
