import {
  Container,
  TransactionDataBox,
  Title,
  TrashButton,
  Separator,
  SubTitle,
  Value,
  Text,
  CategoryCard,
} from './styles';
import { FiTrash2 } from 'react-icons/fi';
import theme from '../../styles/theme';

interface TransacionCardProps {
  name: string;
  expense: boolean;
  price: string;
  date: string | Date;
  accountName: string;
  categoryName: string;
  categoryColor: string;
  onDelete(): void;
}

const TransactionCard = ({
  name,
  expense,
  price,
  date,
  accountName,
  categoryName,
  categoryColor,
  onDelete,
}: TransacionCardProps) => {
  return (
    <Container>
      <TransactionDataBox>
        <Title>{name}</Title>
        <TrashButton onClick={onDelete}>
          <FiTrash2 size={20} color={theme.colors.grayDark} />
        </TrashButton>
      </TransactionDataBox>

      <Separator />

      <TransactionDataBox>
        <SubTitle>Valor:</SubTitle>
        <Value color={expense ? theme.colors.redDark : theme.colors.greenDark}>
          {price}
        </Value>
      </TransactionDataBox>

      <TransactionDataBox>
        <SubTitle>Data:</SubTitle>
        <Text>{date}</Text>
      </TransactionDataBox>

      <Separator />

      <TransactionDataBox>
        <SubTitle>Conta:</SubTitle>
        <Text>{accountName}</Text>
      </TransactionDataBox>

      <TransactionDataBox>
        <SubTitle>Categoria:</SubTitle>
        <CategoryCard backgroundColor={categoryColor}>
          <div />
          <h2>{categoryName}</h2>
        </CategoryCard>
      </TransactionDataBox>
    </Container>
  );
};

export default TransactionCard;
