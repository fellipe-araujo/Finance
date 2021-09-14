import { useState, useEffect } from 'react';
import {
  Content,
  InputsBox,
  Label,
  OptionsBox,
  Option,
  Title,
  ButtonsBox,
} from './styles';

import { useHistory, useParams } from 'react-router-dom';
import CurrencyInput from 'react-currency-input-field';
import { toast } from 'react-toastify';

import SecondaryHeader from '../../components/SecondaryHeader';
import ObjectiveDetailCard from '../../components/ObjectiveDetailCard';
import InputApp from '../../components/InputApp';
import Button from '../../components/Button';
import ModalConfirm from '../../components/ModalConfirm';
import PageContainer from '../../components/PageContainer';

import { useAuth } from '../../context/auth';
import { UserObjective } from '../../utils/types';
import { formatPrice } from '../../utils/formatPrice';
import { toastConfig } from '../../utils/toastConfig';
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
      if (optionAdd && newObjectiveValue) {
        value =
          objective?.amount! + parseFloat(newObjectiveValue.replace(',', '.'));
      } else if (!optionAdd && newObjectiveValue) {
        value =
          objective?.amount! - parseFloat(newObjectiveValue.replace(',', '.'));
      } else {
        value = objective?.amount!;
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

      toast.info(`Objetivo ${objective?.name} atualizado!`, toastConfig);

      history.push('/objectives');
    } catch (error) {
      setIsModalVisible(!isModalVisible);

      toast.error(
        `Não foi possível atualizar o objetivo desejado!`,
        toastConfig
      );

      history.push('/objectives');
    }
  };

  const toggleModalDelete = async () => {
    try {
      await objectiveService.objectiveDelete(user?._id!, objective?._id!);
      setIsModalVisible(!isModalVisible);

      toast.success(`Objetivo ${objective?.name} deletado!`, toastConfig);

      history.push('/objectives');
    } catch (error) {
      setIsModalVisible(!isModalVisible);

      toast.error(`Não foi possível excluir o objetivo desejado!`, toastConfig);

      history.push('/objectives');
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
    <PageContainer>
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

        <InputsBox>
          <InputApp
            title="Nome:"
            value={newObjectiveName}
            onChange={(e) => setNewObjectiveName(e.target.value)}
          />

          <InputApp
            title="Descrição:"
            value={newObjectiveDescription}
            onChange={(e) => setNewObjectiveDescription(e.target.value)}
          />

          <Label>Valor:</Label>
          <CurrencyInput
            className="objective-detail-input-currency"
            placeholder="R$ 1.000,00"
            onValueChange={(value) => setNewObjectiveValue(value!)}
            prefix="R$"
            type="text"
            intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
          />

          <OptionsBox>
            <Option
              add={optionAdd ? true : false}
              onClick={() => setOptionAdd(true)}
            >
              <Title add={optionAdd ? true : false}>Adicionar</Title>
            </Option>

            <Option
              remove={optionAdd ? false : true}
              onClick={() => setOptionAdd(false)}
            >
              <Title remove={optionAdd ? false : true}>Retirar</Title>
            </Option>
          </OptionsBox>

          <ButtonsBox className="objective-button-container">
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
          </ButtonsBox>
        </InputsBox>
      </Content>
    </PageContainer>
  );
};

export default ObjectiveDetail;
