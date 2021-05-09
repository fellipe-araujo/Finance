import './styles.css';
import SecondaryHeader from '../../components/SecondaryHeader';

const NewAccount = () => {
  return (
    <div className="new-account-container">
      <SecondaryHeader title="Nova Conta" goBack="/accounts" />
    </div>
  );
};

export default NewAccount;
