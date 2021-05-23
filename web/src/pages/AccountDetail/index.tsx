import { Container, Content, Card, Options } from './styles';
import SecondaryHeader from '../../components/SecondaryHeader';
import InputApp from '../../components/InputApp';
import Button from '../../components/Button';

const AccountDetail = () => {
  return (
    <Container>
      <SecondaryHeader title="Principal" goBack="/accounts" />

      <Content>
        <Card>
          <h1 className="account-detail-title">Valor total:</h1>

          <div className="account-detail-line" />

          <div className="account-detail-value-container">
            <h1>R$ 14.567,32</h1>
          </div>
        </Card>

        <Options>
          <InputApp title="Nome da conta:" name="Contas" />
          <Button title="Atualizar conta" isCreate />
          <Button title="Excluir conta" isCreate={false} />
        </Options>
      </Content>
    </Container>
  );
};

export default AccountDetail;
