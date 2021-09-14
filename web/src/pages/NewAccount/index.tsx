import { useState } from 'react';
import { Content, Options } from './styles';

import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import SecondaryHeader from '../../components/SecondaryHeader';
import InputApp from '../../components/InputApp';
import Button from '../../components/Button';
import ModalConfirm from '../../components/ModalConfirm';
import PageContainer from '../../components/PageContainer';

import AccountLogo from '../../assets/account-logo.svg';
import accountService from '../../services/accountService';
import { useAuth } from '../../context/auth';
import { toastConfig } from '../../utils/toastConfig';

const NewAccount = () => {
  const [name, setName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalCreateDescription = `Você deseja criar a conta ${name}?`;

  const { user } = useAuth();

  const history = useHistory();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const toggleModalCreate = async () => {
    try {
      await accountService.accountCreate(user?._id!, { name });
      setIsModalVisible(!isModalVisible);

      toast.success(`Conta ${name} criada!`, toastConfig);

      history.push('/accounts');
    } catch (error) {
      setIsModalVisible(!isModalVisible);

      toast.error(`Não foi possível criar a conta desejada!`, toastConfig);

      history.push('/accounts');
    }
  };

  return (
    <PageContainer>
      <SecondaryHeader title="Nova Conta" goBack="/accounts" />

      <ModalConfirm
        modalIsOpen={isModalVisible}
        description={modalCreateDescription}
        toggleModalConfirm={toggleModalCreate}
        toggleModalCancel={closeModal}
        closeModal={closeModal}
      />

      <Content>
        <img src={AccountLogo} alt="Account Logo" />

        <Options>
          <InputApp
            title="Nome da conta:"
            name="Contas"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button title="Criar conta" isCreate onClick={() => openModal()} />
        </Options>
      </Content>
    </PageContainer>
  );
};

export default NewAccount;
