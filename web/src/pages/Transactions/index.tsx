import { useState, useEffect } from "react";
import { Container, List, ButtonOption } from "./styles";
import { FiList, FiBarChart2 } from "react-icons/fi";
import PrimaryHeader from "../../components/PrimaryHeader";
import ArtifactData from "../../components/ArtifactData";
import TransactionCard from "../../components/TransactionCard";
import ModalConfirm from "../../components/ModalConfirm";
import { useAuth } from "../../context/auth";
import { UserTransaction } from "../../utils/types";
import { formatPrice } from "../../utils/formatPrice";
import transactionService from "../../services/transactionService";

const Transactions = () => {
  const [transactions, setTransactions] = useState<UserTransaction[]>([]);
  const [selectedTransaction, setSelectedTransaction] =
    useState<UserTransaction>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const formatDate = (date: string) => {
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const year = date.slice(0, 4);

    return `${day}/${month}/${year}`;
  };

  const { user } = useAuth();

  const toggleModalDelete = async (transactionId: string) => {
    try {
      await transactionService.transactionDelete(user?._id!, transactionId);
      setIsModalVisible(!isModalVisible);
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      alert("Error ao deletar transação.");
    }
  };

  useEffect(() => {
    const fetchAllTransactions = async () => {
      const response = await transactionService.transactionAll(user?._id!);

      setTransactions(response.reverse());
    };

    fetchAllTransactions();
  }, [user?._id]);

  return (
    <Container>
      <PrimaryHeader title="Transações" goTo="/transactions/create" />

      <ModalConfirm
        modalIsOpen={isModalVisible}
        description={`Deseja excluir a transação ${selectedTransaction?.name}?`}
        toggleModalConfirm={() => toggleModalDelete(selectedTransaction?._id!)}
        toggleModalCancel={() => setIsModalVisible(false)}
        closeModal={() => setIsModalVisible(false)}
      />

      <ArtifactData
        title="Transações"
        subTitle="este mês"
        value={transactions.length.toString()}
        artifactType="Transações"
      />

      <div className="buttons-container">
        <ButtonOption>
          <div className="button-icon-container">
            <FiBarChart2 size={20} color="#39393A" />
          </div>
          <h1 className="button-title">Relatório</h1>
        </ButtonOption>
        <ButtonOption>
          <div className="button-icon-container">
            <FiList size={20} color="#39393A" />
          </div>

          <div className="button-title-container">
            <h1 className="button-title">Ordenar</h1>
          </div>
        </ButtonOption>
      </div>

      <List>
        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction._id}
            name={transaction.name!}
            expense={transaction.expense!}
            price={formatPrice(transaction.price!)}
            date={formatDate(transaction.date?.toString()!)}
            accountName={transaction.account?.name!}
            categoryName={transaction.category?.name!}
            categoryColor={transaction.category?.color!}
            onDelete={() => {
              setSelectedTransaction(transaction);
              setIsModalVisible(true);
            }}
          />
        ))}
      </List>
    </Container>
  );
};

export default Transactions;
