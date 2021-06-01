import { useState, useEffect } from "react";
import { Container, List } from "./styles";
import PrimaryHeader from "../../components/PrimaryHeader";
import ArtifactData from "../../components/ArtifactData";
import TransactionCard from "../../components/TransactionCard";
import ModalConfirm from "../../components/ModalConfirm";
import { useAuth } from "../../context/auth";
import { UserTransaction } from "../../utils/types";
import { formatPrice } from '../../utils/formatPrice';
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

      setTransactions(response);
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
