import { Container, List } from './styles';
import { Link } from 'react-router-dom';
import PrimaryHeader from '../../components/PrimaryHeader';
import ArtifactData from '../../components/ArtifactData';
import AccountCard from '../../components/AccountCard';

const Accounts = () => {
  return (
    <Container>
      <PrimaryHeader title="Minhas Contas" goTo="accounts/create" />
      <ArtifactData
        title="Total"
        subTitle="Acumulado"
        value="R$ 22.765,21"
        artifactType="Contas"
      />

      <List>
        <Link className="accounts-link" to={`/accounts/${1}`}>
          <AccountCard title="Conta Principal" value="R$ 14.567,32" />
        </Link>
      </List>
    </Container>
  );
};

export default Accounts;
