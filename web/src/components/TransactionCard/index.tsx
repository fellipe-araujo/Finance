import { Container } from "./styles";
import { FiTrash2 } from "react-icons/fi";

interface TransacionCardProps {
  name: string;
  expense: boolean;
  price: number;
  date: string;
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
    <Container
      color={expense ? "#BB4E4E" : "#40923F"}
      backgroundColor={categoryColor}
    >
      <div className="transaction-card-info">
        <h1 className="transaction-card-title">{name}</h1>
        <button className="transaction-card-button" onClick={onDelete}>
          <FiTrash2 size={20} color="#39393A" />
        </button>
      </div>

      <div className="transaction-card-line" />

      <div className="transaction-card-info">
        <h1 className="transaction-card-subtitle">Valor:</h1>
        <h1 className="transaction-card-value">R${price}</h1>
      </div>
      <div className="transaction-card-info">
        <h1 className="transaction-card-subtitle">Data:</h1>
        <h1 className="transaction-card-text">{date}</h1>
      </div>

      <div className="transaction-card-line" />

      <div className="transaction-card-info">
        <h1 className="transaction-card-subtitle">Conta:</h1>
        <h1 className="transaction-card-text">{accountName}</h1>
      </div>
      <div className="transaction-card-info">
        <h1 className="transaction-card-subtitle">Categoria:</h1>
        <div className="transaction-card-category">
          <h1 className="transaction-card-text">{categoryName}</h1>
        </div>
      </div>
    </Container>
  );
};

export default TransactionCard;
