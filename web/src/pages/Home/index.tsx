import { useState, useEffect } from 'react';
import { Header, Welcome, MoneySvg, BalancesRow, HomeContent, Title } from './styles';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';
import Loading from '../Loading';
import MoneyLogo from '../../assets/money.svg';
// import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import ArtifactResume from '../../components/ArtifactResume';
import HighlightCard from '../../components/HighlightCard';
import { useAuth } from '../../context/auth';

import accountService from '../../services/accountService';
import categoryService from '../../services/categoryService';
import objectiveService from '../../services/objectiveService';
import transactionService from '../../services/transactionService';
import userService from '../../services/userService';

import { formatPrice } from '../../utils/formatPrice';
import { fetchMonthAndYearTransactions } from '../../utils/transactionsFilter';
import theme from '../../styles/theme';

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
    <PageContainer>
      <Header>
        <Welcome>
          Bem-vindo(a), <br /> {username}
        </Welcome>
        <div />
      </Header>

      <BalancesRow>
        <HighlightCard
          title="Entradas"
          month={`${currentMonth}`}
          amount={formatPrice(allEntries)}
        >
          <FiTrendingUp size={25} color={theme.colors.greenDark} />
        </HighlightCard>

        <HighlightCard
          title="Saídas"
          month={`${currentMonth}`}
          amount={formatPrice(allExpenses)}
        >
          <FiTrendingDown size={25} color={theme.colors.redDark} />
        </HighlightCard>

        <HighlightCard
          title="Total"
          month={`${currentMonth}`}
          amount={formatPrice(accountTotalValue)}
        >
          <MoneySvg src={MoneyLogo} alt="Money" />
        </HighlightCard>
      </BalancesRow>

      <Title>Resumo</Title>

      <HomeContent>
        <ArtifactResume name="Contas" total={accountsTotal} />
        <ArtifactResume name="Objetivos" total={objectivesTotal} />
        <ArtifactResume name="Transações" total={transactionsTotal} />
        <ArtifactResume name="Categorias" total={categoriesTotal} />
      </HomeContent>
    </PageContainer>
  );
};

export default Home;
