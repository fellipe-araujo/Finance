import { Container, Content, Options } from './styles';
import SecondaryHeader from '../../components/SecondaryHeader';
import InputApp from '../../components/InputApp';
import Button from '../../components/Button';
import ObjectiveLogo from '../../assets/objective-logo.svg';

const NewObjective = () => {
  return (
    <Container>
      <SecondaryHeader title="Novo Objetivo" goBack="/objectives" />

      <Content>
        <img
          className="new-objective-image"
          src={ObjectiveLogo}
          alt="Objective Logo"
        />

        <Options>
          <InputApp title="Nome:" name="Objetivos" />
          <InputApp title="Meta:" name="Objetivos" />
          <InputApp title="Descrição:" name="Objetivos" />

          <Button title="Criar Objetivo" isCreate />
        </Options>
      </Content>
    </Container>
  );
};

export default NewObjective;
