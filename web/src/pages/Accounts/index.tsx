import { useState, useEffect } from "react";
import { Container, List } from "./styles";
import { Link } from "react-router-dom";
import PrimaryHeader from "../../components/PrimaryHeader";
import ArtifactData from "../../components/ArtifactData";
import AccountCard from "../../components/AccountCard";
import { UserAccount } from "../../utils/types";
import { useAuth } from "../../context/auth";
import accountService from "../../services/accountService";
import { formatPrice } from "../../utils/formatPrice";

const Accounts = () => {
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [accountsAmount, setAccountsAmount] = useState(0);

  const { user } = useAuth();

  useEffect(() => {
    const fetchAllAccounts = async () => {
      const response = await accountService.accountAll(user!._id);
      setAccounts(response.reverse());

      var values = 0;

      Object.keys(response).forEach((item) => {
        values += response[item].balance;
      });

      setAccountsAmount(values);
    };

    fetchAllAccounts();
  }, [user]);

  return (
    <Container>
      <PrimaryHeader title="Minhas Contas" goTo="accounts/create" />
      <ArtifactData
        title="Total"
        subTitle="Acumulado"
        value={formatPrice(accountsAmount)}
        artifactType="Contas"
      />

      <List>
        {accounts.map((account) => (
          <Link
            key={account._id}
            className="accounts-link"
            to={`/accounts/${account._id}`}
          >
            <AccountCard
              title={account.name}
              value={formatPrice(account.balance!)}
            />
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default Accounts;
