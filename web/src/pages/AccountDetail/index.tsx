import { useEffect, useState } from "react";
import { Container, Content, Card, Options } from "./styles";
import { useParams, useHistory } from "react-router-dom";
import SecondaryHeader from "../../components/SecondaryHeader";
import InputApp from "../../components/InputApp";
import Button from "../../components/Button";
import ModalConfirm from "../../components/ModalConfirm";
import { UserAccount } from "../../utils/types";
import { formatPrice } from "../../utils/formatPrice";
import accountService from "../../services/accountService";
import { useAuth } from "../../context/auth";

interface AccountParams {
  id: string;
}

const AccountDetail = () => {
  const [account, setAccount] = useState<UserAccount>();
  const [newAccountName, setNewAccountName] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAction, setModalAction] = useState("");

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
      history.push("/accounts");
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      history.push("/accounts");
      alert("Erro ao atualizar conta.");
    }
  };

  const toggleModalDelete = async () => {
    try {
      await accountService.accountDelete(user?._id!, account?._id!);
      setIsModalVisible(!isModalVisible);
      history.push("/accounts");
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      history.push("/accounts");
      alert("Erro ao deletar conta.");
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
    <Container>
      <SecondaryHeader title={account?.name!} goBack="/accounts" />

      <ModalConfirm
        modalIsOpen={isModalVisible}
        description={
          modalAction === "Update"
            ? modalUpdateDescription
            : modalDeleteDescription
        }
        toggleModalConfirm={
          modalAction === "Update" ? toggleModalUpdate : toggleModalDelete
        }
        toggleModalCancel={() => setIsModalVisible(false)}
        closeModal={() => setIsModalVisible(false)}
      />

      <Content>
        <Card>
          <h1 className="account-detail-title">Valor total:</h1>

          <div className="account-detail-line" />

          <div className="account-detail-value-container">
            <h1>{formatPrice(account?.balance!)}</h1>
          </div>
        </Card>

        <Options>
          <InputApp
            title="Nome da conta:"
            name="Contas"
            value={newAccountName}
            onChange={(e) => setNewAccountName(e.target.value)}
          />
          <Button
            title="Atualizar conta"
            isCreate
            onClick={() => {
              setModalAction("Update");
              setIsModalVisible(true);
            }}
          />
          <Button
            title="Excluir conta"
            isCreate={false}
            onClick={() => {
              setModalAction("Delete");
              setIsModalVisible(true);
            }}
          />
        </Options>
      </Content>
    </Container>
  );
};

export default AccountDetail;
