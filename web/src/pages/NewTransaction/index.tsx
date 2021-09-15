import { useState, useEffect } from 'react';
import {
  Content,
  Options,
  SubTitle,
  OptionsBox,
  Type,
  Label,
  CalendarButton,
  CalendarText,
  SelectBox,
} from './styles';

import { useHistory } from 'react-router-dom';
import { FiCalendar } from 'react-icons/fi';
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import CurrencyInput from 'react-currency-input-field';
import { toast } from 'react-toastify';

import SecondaryHeader from '../../components/SecondaryHeader';
import InputApp from '../../components/InputApp';
import Button from '../../components/Button';
import ModalConfirm from '../../components/ModalConfirm';
import PageContainer from '../../components/PageContainer';

import TransactionLogo from '../../assets/transaction-logo.svg';
import { useAuth } from '../../context/auth';
import { toastConfig } from '../../utils/toastConfig';
import transactionService from '../../services/transactionService';
import accountService from '../../services/accountService';
import categoryService from '../../services/categoryService';
import {
  UserAccount,
  UserCategory,
  UserTransactionCreate,
} from '../../utils/types';
import theme from '../../styles/theme';

import 'react-calendar/dist/Calendar.css';

const NewTrasaction = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [optionAdd, setOptionAdd] = useState(true);
  const [date, setDate] = useState(new Date());
  const [categories, setCategories] = useState<UserCategory[]>([]);
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [categorySelected, setCategorySelected] = useState('');
  const [accountSelected, setAccountSelected] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalCalendarVisible, setIsModalCalendarVisible] = useState(false);

  const openModal = () => {
    setIsModalCalendarVisible(true);
  };

  const closeModal = () => {
    setIsModalCalendarVisible(false);
  };

  const { user } = useAuth();

  const history = useHistory();

  const modalCreateDescription = `Você deseja criar a transação ${name}?`;

  const toggleModalCreate = async () => {
    try {
      const priceFormat = parseFloat(price.replace(',', '.'));
      const newTransaction: UserTransactionCreate = {
        name,
        price: priceFormat,
        expense: !optionAdd,
        date,
        category: categorySelected,
      };
      await transactionService.transactionCreate(
        user?._id!,
        accountSelected,
        newTransaction
      );
      setIsModalVisible(!isModalVisible);

      toast.success(`Transação ${name} criada!`, toastConfig);

      history.push('/transactions');
    } catch (error) {
      setIsModalVisible(!isModalVisible);

      toast.error(`Não foi possível criar a transação desejada!`, toastConfig);

      history.push('/transactions');
    }
  };

  useEffect(() => {
    const fetchAllCategories = async () => {
      const response = await categoryService.categoryAll(user?._id!);
      setCategories(response);
    };

    const fetchAllAccounts = async () => {
      const response = await accountService.accountAll(user?._id!);
      setAccounts(response);
    };

    fetchAllCategories();
    fetchAllAccounts();
  }, [user?._id]);

  return (
    <PageContainer>
      <SecondaryHeader title="Nova Transação" goBack="/transactions" />

      <ModalConfirm
        modalIsOpen={isModalVisible}
        description={modalCreateDescription}
        toggleModalConfirm={toggleModalCreate}
        toggleModalCancel={() => setIsModalVisible(false)}
        closeModal={() => setIsModalVisible(false)}
      />

      <Modal
        isOpen={isModalCalendarVisible}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            width: '90%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: theme.colors.white,
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '2rem',
          },
        }}
        contentLabel="Escolha um opção"
        ariaHideApp={false}
      >
        <Calendar onChange={setDate} value={date} />
      </Modal>

      <Content>
        <img src={TransactionLogo} alt="Transaction Logo" />

        <Options>
          <InputApp
            title="Nome:"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <SubTitle>Valor:</SubTitle>
          <CurrencyInput
            className="new-transaction-input-currency"
            placeholder="R$ 1.000,00"
            onValueChange={(value) => setPrice(value!)}
            prefix="R$"
            type="text"
            intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
          />

          <OptionsBox>
            <Type
              add={optionAdd ? true : false}
              onClick={() => setOptionAdd(true)}
            >
              <Label add={optionAdd ? true : false}>Adicionar</Label>
            </Type>

            <Type
              remove={optionAdd ? false : true}
              onClick={() => setOptionAdd(false)}
            >
              <Label remove={optionAdd ? false : true}>Retirar</Label>
            </Type>
          </OptionsBox>

          <SubTitle>Data:</SubTitle>

          <CalendarButton
            className="new-transaction-calendar-container"
            onClick={() => openModal()}
          >
            <FiCalendar size={20} color={theme.colors.artifactDark} />
            <CalendarText className="new-transaction-calendar-date">
              {date.toLocaleDateString('pt-BR')}
            </CalendarText>
          </CalendarButton>

          <SubTitle>Conta:</SubTitle>

          <SelectBox>
            <select
              value={accountSelected}
              onChange={(e) => setAccountSelected(e.target.value)}
            >
              <>
                <option>Selecione uma conta</option>
                {accounts.map((account) => (
                  <option key={account._id} value={account._id}>
                    {account.name}
                  </option>
                ))}
              </>
            </select>
          </SelectBox>

          <SubTitle>Categoria:</SubTitle>

          <SelectBox>
            <select
              value={categorySelected}
              onChange={(e) => setCategorySelected(e.target.value)}
            >
              <>
                <option>Selecione uma categoria</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </>
            </select>
          </SelectBox>

          <Button
            title="Criar transação"
            isCreate
            onClick={() => setIsModalVisible(true)}
          />
        </Options>
      </Content>
    </PageContainer>
  );
};

export default NewTrasaction;
