import { useState } from "react";
import { Container, Content, Options } from "./styles";
import { useHistory } from "react-router-dom";
import CurrencyInput from "react-currency-input-field";
import SecondaryHeader from "../../components/SecondaryHeader";
import InputApp from "../../components/InputApp";
import Button from "../../components/Button";
import ModalConfirm from "../../components/ModalConfirm";
import ObjectiveLogo from "../../assets/objective-logo.svg";
import { useAuth } from "../../context/auth";
import objectiveService from "../../services/objectiveService";

const NewObjective = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const history = useHistory();

  const { user } = useAuth();

  const modalCreateDescription = `Você deseja criar o objetivo ${name}?`;

  const toggleModalCreate = async () => {
    try {
      const goalFormat = parseFloat(goal.replace(",", "."));
      await objectiveService.objectiveCreate(user?._id!, {
        name,
        goal: goalFormat,
        description,
      });
      setIsModalVisible(!isModalVisible);
      history.push("/objectives");
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      history.push("/objectives");
      alert("Erro ao criar objetivo.");
    }
  };

  return (
    <Container>
      <SecondaryHeader title="Novo Objetivo" goBack="/objectives" />

      <ModalConfirm
        modalIsOpen={isModalVisible}
        description={modalCreateDescription}
        toggleModalConfirm={toggleModalCreate}
        toggleModalCancel={() => setIsModalVisible(false)}
        closeModal={() => setIsModalVisible(false)}
      />

      <Content>
        <img
          className="new-objective-image"
          src={ObjectiveLogo}
          alt="Objective Logo"
        />

        <Options>
          <InputApp
            title="Nome:"
            name="Objetivos"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h1 className="new-objective-value-title">Valor:</h1>
          <CurrencyInput
            className="new-objective-input-currency"
            placeholder="R$ 1.000,00"
            onValueChange={(value) => setGoal(value!)}
            prefix="R$"
            type="text"
            intlConfig={{ locale: "pt-BR", currency: "BRL" }}
          />

          <InputApp
            title="Descrição:"
            name="Objetivos"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button
            title="Criar Objetivo"
            isCreate
            onClick={() => setIsModalVisible(true)}
          />
        </Options>
      </Content>
    </Container>
  );
};

export default NewObjective;
