import './styles.css';
import SecondaryHeader from '../../components/SecondaryHeader';
import InputApp from '../../components/InputApp';
import Button from '../../components/Button';
import AccountLogo from '../../assets/account-logo.svg';

const NewAccount = () => {
  return (
    <div className="new-account-container">
      <SecondaryHeader title="Nova Conta" goBack="/accounts" />

      <div className="new-account-content">
        <img
          className="new-account-image"
          src={AccountLogo}
          alt="Account Logo"
        />

        <div className="new-account-data">
          <InputApp title="Nome da conta:" name="Contas" />
          <Button title="Criar conta" type="Create" />
        </div>
      </div>
    </div>
  );
};

export default NewAccount;
