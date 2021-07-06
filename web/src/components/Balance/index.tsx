import { BalanceContainer } from './styles';

interface BalanceProps {
  title: string;
  value: string;
  balance?: boolean;
  entry?: boolean;
  expense?: boolean;
}

const Balance = ({ title, value, balance, entry, expense }: BalanceProps) => {
  return (
    <BalanceContainer balance={balance} entry={entry} expense={expense}>
      <h1 className="balance-title">{title}</h1>

      <h2 className="balance-value">{value}</h2>
    </BalanceContainer>
  );
};

export default Balance;
