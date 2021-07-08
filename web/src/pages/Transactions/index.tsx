import { useState, useEffect } from 'react';
import { Container, ModalAppContainer, List, ButtonOption } from './styles';
import { useHistory } from 'react-router-dom';
import { FiList, FiBarChart2, FiCalendar } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import Logo from '../../assets/Logo.svg';
import ReportLogo from '../../assets/report-logo.svg';
import PrimaryHeader from '../../components/PrimaryHeader';
import ArtifactData from '../../components/ArtifactData';
import TransactionCard from '../../components/TransactionCard';
import ModalConfirm from '../../components/ModalConfirm';
import ModalTransactionFilter from '../../components/ModalTransactionFilter';
import ModalApp from '../../components/ModalApp';
import { useAuth } from '../../context/auth';
import { UserTransaction } from '../../utils/types';
import { formatPrice } from '../../utils/formatPrice';
import { period } from '../../utils/period';
import {
  fetchAllTransactions,
  fetchCurrentMonthTransactions,
  fetchAllEntriesTransactions,
  fetchAllExpensesTransactions,
  fetchMonthAndYearTransactions,
} from '../../utils/transactionsFilter';
import { toastConfig } from '../../utils/toastConfig';
import transactionService from '../../services/transactionService';
import { colors } from '../../styles/colors';

const Transactions = () => {
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toLocaleString('pt-BR').slice(3, 5)
  );
  const [selectedYear, setSelectedYear] = useState(
    new Date().toLocaleString('pt-BR').slice(6, 10)
  );
  const [transactionsFiltered, setTransactionsFiltered] = useState<
    UserTransaction[]
  >([]);
  const [selectedTransaction, setSelectedTransaction] =
    useState<UserTransaction>();
  const [isModalConfirmVisible, setIsModalConfirmVisible] = useState(false);
  const [isModalTransacionFilterVisible, setIsModalTransacionFilterVisible] =
    useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [isModalSelectedMonthVisible, setIsModalSelectedMonthVisible] =
    useState(false);

  const { user } = useAuth();

  const history = useHistory();

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

      toast.success('Transação deletada!', toastConfig);

      setTimeout(function () {
        window.location.reload();
      }, 5000);
    } catch (error) {
      setIsModalConfirmVisible(!isModalConfirmVisible);

      toast.error(
        `Não foi possível excluir a transação desejada!`,
        toastConfig
      );
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

  useEffect(() => {
    const fetchSelectedTransactions = async () => {
      const response = await fetchMonthAndYearTransactions(
        user!,
        selectedMonth,
        selectedYear
      );

      setTransactionsFiltered(response.transactions);
      setTypeFilter(response.type!);
    };

    fetchSelectedTransactions();
  }, [selectedMonth, selectedYear, user]);

  return (
    <Container>
      <PrimaryHeader title="Transações" goTo="/transactions/create" />

      <ToastContainer />

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

      <ModalApp
        modalIsOpen={isModalSelectedMonthVisible}
        closeModal={() =>
          setIsModalSelectedMonthVisible(!isModalSelectedMonthVisible)
        }
      >
        <ModalAppContainer>
          <img className="modal-app-logo" src={Logo} alt="Finance Logo" />

          <h1 className="modal-app-title">Selecione mês e ano</h1>

          <div className="modal-app-select-period">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <>
                <option>Mês</option>
                {period.months.map((month) => (
                  <option key={month.id} value={month.id}>
                    {month.value}
                  </option>
                ))}
              </>
            </select>
          </div>

          <div className="modal-app-select-period">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <>
                <option>Ano</option>
                {period.years.map((year) => (
                  <option key={year.id} value={year.value}>
                    {year.value}
                  </option>
                ))}
              </>
            </select>
          </div>
        </ModalAppContainer>
      </ModalApp>

      <ArtifactData
        title="Transações"
        subTitle={typeFilter}
        value={transactionsFiltered.length.toString()}
        artifactType="Transações"
      />

      <div className="buttons-container">
        <ButtonOption
          onClick={() =>
            history.push(
              `/transactions/report/${selectedYear}/${selectedMonth}`
            )
          }
        >
          <FiBarChart2 size={20} color={colors.grayMedium} />
          <h1 className="button-title">Relatório</h1>
        </ButtonOption>

        <ButtonOption onClick={() => setIsModalTransacionFilterVisible(true)}>
          <FiList size={20} color={colors.grayMedium} />
          <h1 className="button-title">Ordenar</h1>
        </ButtonOption>

        <ButtonOption onClick={() => setIsModalSelectedMonthVisible(true)}>
          <FiCalendar size={20} color={colors.grayMedium} />
          <h1 className="button-title">Mês</h1>
        </ButtonOption>
      </div>

      <List>
        {transactionsFiltered ? (
          transactionsFiltered.map((transaction) => (
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
          ))
        ) : (
          <img className="report-logo" src={ReportLogo} alt="Report" />
        )}
      </List>
    </Container>
  );
};

export default Transactions;
