import { useState, useEffect } from 'react';
import { Container, Content, Options, Type } from './styles';
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
import TransactionLogo from '../../assets/transaction-logo.svg';
import { useAuth } from '../../context/auth';
import 'react-calendar/dist/Calendar.css';
import {
  UserAccount,
  UserCategory,
  UserTransactionCreate,
} from '../../utils/types';
import { toastConfig } from '../../utils/toastConfig';
import transactionService from '../../services/transactionService';
import accountService from '../../services/accountService';
import categoryService from '../../services/categoryService';
import { colors } from '../../styles/colors';

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
    <Container>
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
            background: colors.white,
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
        <img
          className="new-transaction-image"
          src={TransactionLogo}
          alt="Transaction Logo"
        />

        <Options>
          <InputApp
            title="Nome:"
            name="Transações"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h1 className="new-transaction-value-title">Valor:</h1>
          <CurrencyInput
            className="new-transaction-input-currency"
            placeholder="R$ 1.000,00"
            onValueChange={(value) => setPrice(value!)}
            prefix="R$"
            type="text"
            intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
          />

          <div className="transaction-option-container">
            <Type
              add={optionAdd ? true : false}
              onClick={() => setOptionAdd(true)}
            >
              <h1 className="option-title">Adicionar</h1>
            </Type>

            <Type
              remove={optionAdd ? false : true}
              onClick={() => setOptionAdd(false)}
            >
              <h1 className="option-title">Retirar</h1>
            </Type>
          </div>

          <h1 className="new-transaction-data-title">Data:</h1>

          <div className="new-transaction-calendar-container">
            <button
              className="new-transaction-calendar-button"
              onClick={() => openModal()}
            >
              <FiCalendar size={20} color={colors.grayLight} />
            </button>

            <h1 className="new-transaction-calendar-date">
              {date.toLocaleDateString('pt-BR')}
            </h1>
          </div>

          <h1 className="new-transaction-data-title">Conta:</h1>

          <div className="new-transaction-select-artifacts">
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
          </div>

          <h1 className="new-transaction-data-title">Categoria:</h1>

          <div className="new-transaction-select-artifacts">
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
          </div>

          <Button
            title="Criar transação"
            isCreate
            onClick={() => setIsModalVisible(true)}
          />
        </Options>
      </Content>
    </Container>
  );
};

export default NewTrasaction;
