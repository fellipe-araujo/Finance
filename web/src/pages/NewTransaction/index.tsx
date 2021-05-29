import { useState } from "react";
import { Container, Content, Options, Type } from "./styles";
import { FiCalendar } from "react-icons/fi";
import Modal from "react-modal";
import Calendar from "react-calendar";
import SecondaryHeader from "../../components/SecondaryHeader";
import InputApp from "../../components/InputApp";
import Button from "../../components/Button";
import TransactionLogo from "../../assets/transaction-logo.svg";
import "react-calendar/dist/Calendar.css";

const NewTrasaction = () => {
  const [optionAdd, setOptionAdd] = useState(true);
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Container>
      <SecondaryHeader title="Nova Transação" goBack="/transactions" />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            width: "90%",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "0.1rem solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "2rem",
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
          <InputApp title="Nome:" name="Transações" />
          <InputApp
            title="Valor (ponto somente para centavos):"
            name="Transações"
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
              <FiCalendar size={20} color="#202020" />
            </button>

            <h1 className="new-transaction-calendar-date">
              {date.toLocaleDateString("pt-BR")}
            </h1>
          </div>

          <h1 className="new-transaction-data-title">Conta:</h1>

          <h1 className="new-transaction-data-title">Categoria:</h1>

          <Button title="Criar transação" isCreate />
        </Options>
      </Content>
    </Container>
  );
};

export default NewTrasaction;
