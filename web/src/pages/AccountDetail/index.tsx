import './styles.css';
import SecondaryHeader from '../../components/SecondaryHeader';
import InputApp from '../../components/InputApp';
import Button from '../../components/Button';

const AccountDetail = () => {
  return (
    <div className="account-detail-container">
      <SecondaryHeader title="Principal" goBack="/accounts" />

      <div className="account-detail-content">
        <div className="account-detail-card">
          <h1 className="account-detail-title">Valor total:</h1>

          <div className="account-detail-line" />

          <div className="account-detail-value-container">
            <h1>R$ 14.567,32</h1>
          </div>
        </div>

        <div className="account-detail-data">
          <InputApp title="Nome da conta:" name="Contas" />
          <Button title="Atualizar conta" type="Create" />
          <Button title="Excluir conta" type="Delete" />
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
