import { Container, Content, Options } from './styles';
import SecondaryHeader from '../../components/SecondaryHeader';
import InputApp from '../../components/InputApp';
import Button from '../../components/Button';
import AccountLogo from '../../assets/account-logo.svg';

const NewAccount = () => {
  return (
    <Container>
      <SecondaryHeader title="Nova Conta" goBack="/accounts" />

      <Content>
        <img
          className="new-account-image"
          src={AccountLogo}
          alt="Account Logo"
        />

        <Options>
          <InputApp title="Nome da conta:" name="Contas" />
          <Button title="Criar conta" isCreate />
        </Options>
      </Content>
    </Container>
  );
};

export default NewAccount;
