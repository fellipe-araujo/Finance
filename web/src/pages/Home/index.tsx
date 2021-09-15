import { useState, useEffect } from 'react';
import {
  Header,
  Welcome,
  ButtonLogOut,
  BalancesRow,
  HomeContent,
  Title,
} from './styles';

import {
  FiTrendingUp,
  FiTrendingDown,
  FiDollarSign,
  FiLogOut,
} from 'react-icons/fi';
import Loading from '../Loading';

import PageContainer from '../../components/PageContainer';
import ArtifactResume from '../../components/ArtifactResume';
import HighlightCard from '../../components/HighlightCard';
import { useAuth } from '../../context/auth';

import accountService from '../../services/accountService';
import categoryService from '../../services/categoryService';
import objectiveService from '../../services/objectiveService';
import userService from '../../services/userService';

import { formatPrice } from '../../utils/formatPrice';
import {
  fetchMonthAndYearTransactions,
  fetchCurrentPeriodTransactions,
} from '../../utils/transactionsFilter';
import theme from '../../styles/theme';

const Home = () => {
  const [username, setUsername] = useState('');
  const [lastDayEntries, setLastDayEntries] = useState('');
  const [lastDayExpenses, setLastDayExpenses] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [allEntries, setAllEntries] = useState(0);
  const [allExpenses, setAllExpenses] = useState(0);
  const [accountTotalValue, setAccountTotalValue] = useState(0);
  const [accountsTotal, setAccountsTotal] = useState(0);
  const [objectivesTotal, setObjectivesTotal] = useState(0);
  const [categoriesTotal, setCategoriesTotal] = useState(0);

  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  useEffect(() => {
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

    const fetchCurrentTransactions = async () => {
      const response = await fetchCurrentPeriodTransactions(user!);

      setLastDayEntries(response.lastDayEntries!);
      setLastDayExpenses(response.lastDayExpenses!);
    };

    const fetchCurrentDay = () => {
      const day = new Date().toLocaleString('pt-BR').slice(0, 2);
      setCurrentDay(day);
    };

    fetchCurrentTransactions();
    fetchPositiveBalance();
    fetchCurrentDay();
  }, [
    allEntries,
    allExpenses,
    currentMonth,
    currentDay,
    lastDayEntries,
    lastDayExpenses,
    user,
  ]);

  useEffect(() => {
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

    const fetchCategories = async () => {
      const response = await categoryService.categoryAll(user!._id);
      setCategoriesTotal(Object.keys(response).length);
    };

    fetchAccounts();
    fetchObjectives();
    fetchCategories();
  }, [accountsTotal, objectivesTotal, categoriesTotal, user]);

  useEffect(() => {
    const fetchName = async () => {
      const response = await userService.userData(user!._id);
      setUsername(response.name);
    };

    fetchName();
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

        <ButtonLogOut onClick={handleSignOut}>
          <FiLogOut size={30} color={theme.colors.financeBlue} />
        </ButtonLogOut>
      </Header>

      <BalancesRow>
        <HighlightCard
          title="Entradas"
          month={`${currentMonth}`}
          amount={formatPrice(allEntries)}
          lastTransaction={
            lastDayEntries
              ? `Última entrada dia ${lastDayEntries}`
              : 'Nenhuma entrada este mês'
          }
        >
          <FiTrendingUp size={25} color={theme.colors.greenDark} />
        </HighlightCard>

        <HighlightCard
          title="Saídas"
          month={`${currentMonth}`}
          amount={formatPrice(allExpenses)}
          lastTransaction={
            lastDayExpenses
              ? `Última saída dia ${lastDayExpenses}`
              : 'Nenhuma saída este mês'
          }
        >
          <FiTrendingDown size={25} color={theme.colors.redDark} />
        </HighlightCard>

        <HighlightCard
          title="Total"
          month={`${currentMonth}`}
          amount={formatPrice(accountTotalValue)}
          lastTransaction={`Saldo até o dia ${currentDay}`}
        >
          <FiDollarSign size={25} color={theme.colors.artifactDark} />
        </HighlightCard>
      </BalancesRow>

      <Title>Resumo</Title>

      <HomeContent>
        <ArtifactResume name="Contas" total={accountsTotal} />
        <ArtifactResume name="Objetivos" total={objectivesTotal} />
        <ArtifactResume name="Categorias" total={categoriesTotal} />
      </HomeContent>
    </PageContainer>
  );
};

export default Home;
