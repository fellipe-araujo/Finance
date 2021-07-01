import { useState, useEffect } from 'react';
import { Container, Content, Option } from './styles';
import { useHistory, useParams } from 'react-router-dom';
import CurrencyInput from 'react-currency-input-field';
import SecondaryHeader from '../../components/SecondaryHeader';
import ObjectiveDetailCard from '../../components/ObjectiveDetailCard';
import InputApp from '../../components/InputApp';
import Button from '../../components/Button';
import ModalConfirm from '../../components/ModalConfirm';
import { UserObjective } from '../../utils/types';
import { useAuth } from '../../context/auth';
import { formatPrice } from '../../utils/formatPrice';
import objectiveService from '../../services/objectiveService';

interface ObjetiveProps {
  id: string;
}

const ObjectiveDetail = () => {
  const [objective, setObjective] = useState<UserObjective>();
  const [newObjectiveName, setNewObjectiveName] = useState('');
  const [newObjectiveDescription, setNewObjectiveDescription] = useState('');
  const [newObjectiveValue, setNewObjectiveValue] = useState('');
  const [optionAdd, setOptionAdd] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAction, setModalAction] = useState('');

  const { user } = useAuth();

  const params = useParams<ObjetiveProps>();
  const history = useHistory();

  const modalUpdateDescription = `Você deseja atualizar o objetivo ${objective?.name}?`;
  const modalDeleteDescription = `Você deseja excluir o objetivo ${objective?.name}?`;

  const toggleModalUpdate = async () => {
    try {
      var value = 0;
      if (optionAdd) {
        value =
          objective?.amount! + parseFloat(newObjectiveValue.replace(',', '.'));
      } else {
        value =
          objective?.amount! - parseFloat(newObjectiveValue.replace(',', '.'));
      }

      const progress = (value / objective?.goal!) * 100;
      progress.toFixed(2);

      const newObjective: UserObjective = {
        name: newObjectiveName ? newObjectiveName : objective?.name,
        description: newObjectiveDescription
          ? newObjectiveDescription
          : objective?.description,
        amount: value,
        progress,
      };

      await objectiveService.objectiveUpdate(
        user?._id!,
        objective?._id!,
        newObjective
      );

      setIsModalVisible(!isModalVisible);
      history.push('/objectives');
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      history.push('/objectives');
      alert('Erro ao atualizar objetivo.');
    }
  };

  const toggleModalDelete = async () => {
    try {
      await objectiveService.objectiveDelete(user?._id!, objective?._id!);
      setIsModalVisible(!isModalVisible);
      history.push('/objectives');
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      history.push('/objectives');
      alert('Erro ao deletar objetivo.');
    }
  };

  useEffect(() => {
    const fetchObjective = async () => {
      const response = await objectiveService.objectiveOne(
        user?._id!,
        params.id!
      );

      setObjective(response);
    };

    fetchObjective();
  }, [params.id, user?._id]);

  return (
    <Container>
      <SecondaryHeader title="Detalhe" goBack="/objectives" />

      <ModalConfirm
        modalIsOpen={isModalVisible}
        description={
          modalAction === 'Update'
            ? modalUpdateDescription
            : modalDeleteDescription
        }
        toggleModalConfirm={
          modalAction === 'Update' ? toggleModalUpdate : toggleModalDelete
        }
        toggleModalCancel={() => setIsModalVisible(false)}
        closeModal={() => setIsModalVisible(false)}
      />

      <Content>
        <ObjectiveDetailCard
          name={objective?.name!}
          goal={formatPrice(objective?.goal!)}
          actual={formatPrice(objective?.amount!)}
          remaining={formatPrice(objective?.goal! - objective?.amount!)}
          description={objective?.description!}
        />

        <div className="objective-detail-inputs">
          <InputApp
            title="Nome:"
            name="Objetivos"
            value={newObjectiveName}
            onChange={(e) => setNewObjectiveName(e.target.value)}
          />

          <InputApp
            title="Descrição:"
            name="Objetivos"
            value={newObjectiveDescription}
            onChange={(e) => setNewObjectiveDescription(e.target.value)}
          />

          <h1 className="objective-detail-value-title">Valor:</h1>
          <CurrencyInput
            className="objective-detail-input-currency"
            placeholder="R$ 1.000,00"
            onValueChange={(value) => setNewObjectiveValue(value!)}
            prefix="R$"
            type="text"
            intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
          />

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
            <Button
              title="Atualizar Objetivo"
              isCreate
              onClick={() => {
                setModalAction('Update');
                setIsModalVisible(true);
              }}
            />
            <Button
              title="Excluir Objetivo"
              isCreate={false}
              onClick={() => {
                setModalAction('Delete');
                setIsModalVisible(true);
              }}
            />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default ObjectiveDetail;
