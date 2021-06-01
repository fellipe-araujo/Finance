import { useState } from "react";
import { Container, Content, Options } from "./styles";
import { useHistory } from "react-router-dom";
import SecondaryHeader from "../../components/SecondaryHeader";
import InputApp from "../../components/InputApp";
import Button from "../../components/Button";
import ModalConfirm from "../../components/ModalConfirm";
import AccountLogo from "../../assets/account-logo.svg";
import accountService from "../../services/accountService";
import { useAuth } from "../../context/auth";

const NewAccount = () => {
  const [name, setName] = useState("");
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
      history.push("/accounts");
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      history.push("/accounts");
      alert("Erro ao criar conta.");
    }
  };

  return (
    <Container>
      <SecondaryHeader title="Nova Conta" goBack="/accounts" />

      <ModalConfirm
        modalIsOpen={isModalVisible}
        description={modalCreateDescription}
        toggleModalConfirm={toggleModalCreate}
        toggleModalCancel={closeModal}
        closeModal={closeModal}
      />

      <Content>
        <img
          className="new-account-image"
          src={AccountLogo}
          alt="Account Logo"
        />

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
    </Container>
  );
};

export default NewAccount;
