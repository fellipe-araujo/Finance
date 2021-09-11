import React, { ReactNode } from 'react';
import { Container, Header, Box, Title, SubTitle, Amount } from './styles';

interface Props {
  title?: string;
  month?: string;
  amount?: string;
  lastTransaction?: string;
  children?: ReactNode;
}

const HighlightCard = ({
  title,
  month,
  amount,
  lastTransaction,
  children,
}: Props) => {
  return (
    <Container>
      <Header>
        <Box>
          <Title>{title}</Title>
          <SubTitle>Mês: {month}</SubTitle>
        </Box>

        {children}
      </Header>

      <Box>
        <Amount>{amount}</Amount>
        <SubTitle>{lastTransaction}</SubTitle>
      </Box>
    </Container>
  );
};

export default HighlightCard;
