import { useState, useEffect } from "react";
import { Container, List, ButtonOption } from "./styles";
import { FiList, FiBarChart2 } from "react-icons/fi";
import PrimaryHeader from "../../components/PrimaryHeader";
import ArtifactData from "../../components/ArtifactData";
import TransactionCard from "../../components/TransactionCard";
import ModalConfirm from "../../components/ModalConfirm";
import ModalTransactionFilter from "../../components/ModalTransactionFilter";
import { useAuth } from "../../context/auth";
import { UserTransaction } from "../../utils/types";
import { formatPrice } from "../../utils/formatPrice";
import {
  fetchAllTransactions,
  fetchCurrentMonthTransactions,
  fetchAllEntriesTransactions,
  fetchAllExpensesTransactions,
} from "../../utils/transactionsFilter";
import transactionService from "../../services/transactionService";

const Transactions = () => {
  const [transactionsFiltered, setTransactionsFiltered] = useState<
    UserTransaction[]
  >([]);
  const [selectedTransaction, setSelectedTransaction] =
    useState<UserTransaction>();
  const [isModalConfirmVisible, setIsModalConfirmVisible] = useState(false);
  const [isModalTransacionFilterVisible, setIsModalTransacionFilterVisible] =
    useState(false);
  const [typeFilter, setTypeFilter] = useState("este mês");

  const { user } = useAuth();

  const formatDate = (date: string) => {
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const year = date.slice(0, 4);

    return `${day}/${month}/${year}`;
  };

  const toggleModalDelete = async (transactionId: string) => {
    try {
      await transactionService.transactionDelete(user?._id!, transactionId);
      setIsModalConfirmVisible(!isModalConfirmVisible);
    } catch (error) {
      setIsModalConfirmVisible(!isModalConfirmVisible);
      alert("Error ao deletar transação.");
    }
  };

  useEffect(() => {
    const fetchCurrentTransactions = async () => {
      const currentMonthTransactions = await fetchCurrentMonthTransactions(
        user!
      );
      setTransactionsFiltered(currentMonthTransactions.transactions);
    };

    fetchCurrentTransactions();
  }, [user]);

  return (
    <Container>
      <PrimaryHeader title="Transações" goTo="/transactions/create" />

      <ModalConfirm
        modalIsOpen={isModalConfirmVisible}
        description={`Deseja excluir a transação ${selectedTransaction?.name}?`}
        toggleModalConfirm={() => toggleModalDelete(selectedTransaction?._id!)}
        toggleModalCancel={() => setIsModalConfirmVisible(false)}
        closeModal={() => setIsModalConfirmVisible(false)}
      />

      <ModalTransactionFilter
        modalIsOpen={isModalTransacionFilterVisible}
        toggleModalAll={async () => {
          const response = await fetchAllTransactions(user!);
          setTransactionsFiltered(response.transactions);
          setTypeFilter(response.type);
          setIsModalTransacionFilterVisible(false);
        }}
        toggleModalCurrentMonth={async () => {
          const response = await fetchCurrentMonthTransactions(user!);
          setTransactionsFiltered(response.transactions);
          setTypeFilter(response.type);
          setIsModalTransacionFilterVisible(false);
        }}
        toggleModalEntries={async () => {
          const response = await fetchAllEntriesTransactions(user!);
          setTransactionsFiltered(response.transactions);
          setTypeFilter(response.type);
          setIsModalTransacionFilterVisible(false);
        }}
        toggleModalExpenses={async () => {
          const response = await fetchAllExpensesTransactions(user!);
          setTransactionsFiltered(response.transactions);
          setTypeFilter(response.type);
          setIsModalTransacionFilterVisible(false);
        }}
        closeModal={() => setIsModalTransacionFilterVisible(false)}
      />

      <ArtifactData
        title="Transações"
        subTitle={typeFilter}
        value={transactionsFiltered.length.toString()}
        artifactType="Transações"
      />

      <div className="buttons-container">
        <ButtonOption>
          <div className="button-icon-container">
            <FiBarChart2 size={20} color="#202020" />
          </div>

          <div className="button-title-container">
            <h1 className="button-title">Relatório</h1>
          </div>
        </ButtonOption>
        <ButtonOption onClick={() => setIsModalTransacionFilterVisible(true)}>
          <div className="button-icon-container">
            <FiList size={20} color="#202020" />
          </div>

          <div className="button-title-container">
            <h1 className="button-title">Ordenar</h1>
          </div>
        </ButtonOption>
      </div>

      <List>
        {transactionsFiltered.map((transaction) => (
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
              setIsModalConfirmVisible(true);
            }}
          />
        ))}
      </List>
    </Container>
  );
};

export default Transactions;
