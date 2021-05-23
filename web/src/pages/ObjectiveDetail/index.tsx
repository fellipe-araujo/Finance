import { useState } from 'react';
import { Container, Option } from './styles';
import SecondaryHeader from '../../components/SecondaryHeader';
import ObjectiveDetailCard from '../../components/ObjectiveDetailCard';
import InputApp from '../../components/InputApp';
import Button from '../../components/Button';

const ObjectiveDetail = () => {
  const [optionAdd, setOptionAdd] = useState(true);

  return (
    <Container>
      <SecondaryHeader title="Detalhe" goBack="/objectives" />
      <ObjectiveDetailCard
        name="Objetivo 1"
        goal="R$ 600,00"
        actual="R$ 320,00"
        remaining="R$ 280,00"
        description=""
      />

      <div className="objective-detail-inputs">
        <InputApp title="Nome:" name="Objetivos" />
        <InputApp title="Descrição:" name="Objetivos" />
        <InputApp title="Valor:" name="Objetivos" />

        <div className="option-container">
          <Option
            add={optionAdd ? true : false}
            onClick={() => setOptionAdd(true)}
          >
            <h1 className="option-title">Adicionar</h1>
          </Option>

          <Option
            remove={optionAdd ? false : true}
            onClick={() => setOptionAdd(false)}
          >
            <h1 className="option-title">Retirar</h1>
          </Option>

        </div>

        <div className="objective-button-container">
          <Button title="Atualizar Objetivo" isCreate />
          <Button title="Excluir Objetivo" isCreate={false} />
        </div>
      </div>
    </Container>
  );
};

export default ObjectiveDetail;
