import { useState, useEffect } from 'react';
import { HomeContainer, BalancesRow, HomeContent } from './styles';
import Loading from '../Loading';
import Header from '../../components/Header';
import ArtifactResume from '../../components/ArtifactResume';
import Balance from '../../components/Balance';
import { useAuth } from '../../context/auth';
import accountService from '../../services/accountService';
import categoryService from '../../services/categoryService';
import objectiveService from '../../services/objectiveService';
import transactionService from '../../services/transactionService';
import userService from '../../services/userService';
import { formatPrice } from '../../utils/formatPrice';
import { fetchMonthAndYearTransactions } from '../../utils/transactionsFilter';

const Home = () => {
  const [username, setUsername] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [allEntries, setAllEntries] = useState(0);
  const [allExpenses, setAllExpenses] = useState(0);
  const [accountTotalValue, setAccountTotalValue] = useState(0);
  const [accountsTotal, setAccountsTotal] = useState(0);
  const [objectivesTotal, setObjectivesTotal] = useState(0);
  const [transactionsTotal, setTransactionsTotal] = useState(0);
  const [categoriesTotal, setCategoriesTotal] = useState(0);

  const { user } = useAuth();

  useEffect(() => {
    const fetchName = async () => {
      const response = await userService.userData(user!._id);
      setUsername(response.name);
    };

    const fetchPositiveBalance = async () => {
      const response = await fetchMonthAndYearTransactions(
        user!,
        new Date().toLocaleString('pt-BR').slice(3, 5),
        new Date().toLocaleString('pt-BR').slice(6, 10)
      );

      setAllEntries(response.sumEntries);
      setAllExpenses(response.sumExpenses);
      setCurrentMonth(response.type!);
    };

    const fetchAccounts = async () => {
      const response = await accountService.accountAll(user!._id);
      var quantityAccount = 0;
      var values = 0;

      Object.keys(response).forEach((item) => {
        values += response[item].balance;
        quantityAccount++;
      });

      setAccountsTotal(quantityAccount);
      setAccountTotalValue(values);
    };

    const fetchObjectives = async () => {
      const response = await objectiveService.objectiveAll(user!._id);
      setObjectivesTotal(Object.keys(response).length);
    };

    const fetchTransactions = async () => {
      const response = await transactionService.transactionAll(user!._id);
      setTransactionsTotal(Object.keys(response).length);
    };

    const fetchCategories = async () => {
      const response = await categoryService.categoryAll(user!._id);
      setCategoriesTotal(Object.keys(response).length);
    };

    fetchName();
    fetchPositiveBalance();
    fetchAccounts();
    fetchObjectives();
    fetchTransactions();
    fetchCategories();
  }, [user]);

  if (!username) {
    return <Loading />;
  }

  return (
    <HomeContainer>
      <Header name="Minhas Finanças" />
      <h1 className="home-welcome">
        Bem-vindo(a), <br /> {username}
      </h1>

      <BalancesRow>
        <Balance title="Saldo" value={formatPrice(accountTotalValue)} balance />
        <Balance
          title={`Entradas - ${currentMonth}`}
          value={formatPrice(allEntries)}
          entry
        />
        <Balance
          title={`Saídas - ${currentMonth}`}
          value={formatPrice(allExpenses)}
          expense
        />
      </BalancesRow>

      <HomeContent>
        <h1 className="home-resume">Resumo</h1>

        <div className="home-resume-artifact-content">
          <ArtifactResume name="Contas" total={accountsTotal} />
          <ArtifactResume name="Objetivos" total={objectivesTotal} />
          <ArtifactResume name="Transações" total={transactionsTotal} />
          <ArtifactResume name="Categorias" total={categoriesTotal} />
        </div>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
