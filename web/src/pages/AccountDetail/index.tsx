import { useEffect, useState } from 'react';
import {
  Content,
  Card,
  Title,
  Separator,
  ValueBox,
  Value,
  Options,
} from './styles';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import SecondaryHeader from '../../components/SecondaryHeader';
import InputApp from '../../components/InputApp';
import Button from '../../components/Button';
import ModalConfirm from '../../components/ModalConfirm';
import PageContainer from '../../components/PageContainer';

import { UserAccount } from '../../utils/types';
import { formatPrice } from '../../utils/formatPrice';
import { toastConfig } from '../../utils/toastConfig';

import accountService from '../../services/accountService';
import { useAuth } from '../../context/auth';
import theme from '../../styles/theme';

interface AccountParams {
  id: string;
}

const AccountDetail = () => {
  const [account, setAccount] = useState<UserAccount>();
  const [newAccountName, setNewAccountName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAction, setModalAction] = useState('');

  const { user } = useAuth();

  const params = useParams<AccountParams>();
  const history = useHistory();

  const modalUpdateDescription = `Você deseja atualizar a conta ${account?.name}?`;
  const modalDeleteDescription = `Você deseja excluir a conta ${account?.name}?`;

  const toggleModalUpdate = async () => {
    try {
      await accountService.accountUpdate(
        user?._id!,
        account?._id!,
        newAccountName
      );
      setIsModalVisible(!isModalVisible);

      toast.info(`Conta ${account?.name} atualizada!`, toastConfig);

      history.push('/accounts');
    } catch (error) {
      setIsModalVisible(!isModalVisible);

      toast.error(`Não foi possível atualizar a conta desejada!`, toastConfig);

      history.push('/accounts');
    }
  };

  const toggleModalDelete = async () => {
    try {
      await accountService.accountDelete(user?._id!, account?._id!);
      setIsModalVisible(!isModalVisible);

      toast.success(`Conta ${account?.name} deletada!`, toastConfig);

      history.push('/accounts');
    } catch (error) {
      setIsModalVisible(!isModalVisible);

      toast.error(`Não foi possível excluir a conta desejada!`, toastConfig);

      history.push('/accounts');
    }
  };

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await accountService.accountOne(user?._id!, params.id!);
      setAccount(response);
    };

    fetchAccount();
  }, [params.id, user?._id]);

  return (
    <PageContainer>
      <SecondaryHeader title={account?.name!} goBack="/accounts" />

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
        <Card>
          <Title>Valor total:</Title>

          <Separator />

          <ValueBox>
            <Value
              color={
                account?.balance! > 0
                  ? theme.colors.greenDark
                  : theme.colors.redDark
              }
            >
              {formatPrice(account?.balance!)}
            </Value>
          </ValueBox>
        </Card>

        <Options>
          <InputApp
            title="Nome da conta:"
            value={newAccountName}
            onChange={(e) => setNewAccountName(e.target.value)}
          />

          <Button
            title="Atualizar conta"
            isCreate
            onClick={() => {
              if (!newAccountName) {
                setNewAccountName(account?.name!);
              }
              setModalAction('Update');
              setIsModalVisible(true);
            }}
          />

          <Button
            title="Excluir conta"
            isCreate={false}
            onClick={() => {
              setModalAction('Delete');
              setIsModalVisible(true);
            }}
          />
        </Options>
      </Content>
    </PageContainer>
  );
};

export default AccountDetail;
