import { useState, useEffect } from 'react';
import { List, LinkAccountDetail } from './styles';

import { ToastContainer } from 'react-toastify';

import PrimaryHeader from '../../components/PrimaryHeader';
import ArtifactData from '../../components/ArtifactData';
import AccountCard from '../../components/AccountCard';
import PageContainer from '../../components/PageContainer';

import { UserAccount } from '../../utils/types';
import { useAuth } from '../../context/auth';
import accountService from '../../services/accountService';
import { formatPrice } from '../../utils/formatPrice';

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
    <PageContainer>
      <PrimaryHeader title="Minhas Contas" goTo="accounts/create" />

      <ToastContainer />

      <ArtifactData
        title="Total"
        subTitle="acumulado"
        value={formatPrice(accountsAmount)}
      />

      <List>
        {accounts.map((account) => (
          <LinkAccountDetail key={account._id} to={`/accounts/${account._id}`}>
            <AccountCard
              title={account.name}
              value={formatPrice(account.balance!)}
            />
          </LinkAccountDetail>
        ))}
      </List>
    </PageContainer>
  );
};

export default Accounts;
