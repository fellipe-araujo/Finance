import React, { ReactNode } from 'react';
import { Container, Header, Box, Title, SubTitle, Amount } from './styles';

interface Props {
  title?: string;
  month?: string;
  amount?: string;
  lastTransaction?: string;
  children?: ReactNode;
  totalAccounts?: boolean;
}

const HighlightCard = ({
  title,
  month,
  amount,
  lastTransaction,
  children,
  totalAccounts,
}: Props) => {
  return (
    <Container totalAccounts={totalAccounts}>
      <Header>
        <Box>
          <Title>{title}</Title>
          <SubTitle totalAccounts={totalAccounts}>Mês: {month}</SubTitle>
        </Box>

        {children}
      </Header>

      <Box>
        <Amount>{amount}</Amount>
        <SubTitle totalAccounts={totalAccounts}>{lastTransaction}</SubTitle>
      </Box>
    </Container>
  );
};

export default HighlightCard;
