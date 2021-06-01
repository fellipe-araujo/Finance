import { useState, useEffect } from "react";
import { HomeContainer, HomeContent } from "./styles";
import Header from "../../components/Header";
import ArtifactResume from "../../components/ArtifactResume";
import { useAuth } from "../../context/auth";
import accountService from "../../services/accountService";
import categoryService from "../../services/categoryService";
import objectiveService from "../../services/objectiveService";
import transactionService from "../../services/transactionService";
import userService from "../../services/userService";
import { formatPrice } from "../../utils/formatPrice";

const Home = () => {
  const [username, setUsername] = useState("");
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
    fetchAccounts();
    fetchObjectives();
    fetchTransactions();
    fetchCategories();
  }, [user]);

  return (
    <HomeContainer>
      <Header name={username} />
      <h1 className="home-balance">{formatPrice(accountTotalValue)}</h1>

      <HomeContent>
        <h1 className="home-resume">Resumo</h1>
        <ArtifactResume name="Contas" total={accountsTotal} />
        <ArtifactResume name="Objetivos" total={objectivesTotal} />
        <ArtifactResume name="Transações" total={transactionsTotal} />
        <ArtifactResume name="Categorias" total={categoriesTotal} />
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
