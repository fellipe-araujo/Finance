import { useState } from "react";
import { Container, Content, Options } from "./styles";
import { useHistory } from "react-router-dom";
import SecondaryHeader from "../../components/SecondaryHeader";
import GenerateCategory from "../../components/GenerateCategory";
import Button from "../../components/Button";
import ModalConfirm from "../../components/ModalConfirm";
import CategoryLogo from "../../assets/category-logo.svg";
import { useAuth } from "../../context/auth";
import categoryService from "../../services/categoryService";

const NewCategory = () => {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryColor, setNewCategoryColor] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { user } = useAuth();

  const history = useHistory();

  const modalCreateDescription = `Você deseja criar a categoria ${newCategoryName}?`;

  const toggleModalCreate = async () => {
    try {
      await categoryService.categoryCreate(user?._id!, {
        name: newCategoryName,
        color: newCategoryColor,
      });
      setIsModalVisible(!isModalVisible);
      history.push("/categories");
    } catch (error) {
      setIsModalVisible(!isModalVisible);
      history.push("/categories");
      alert("Erro ao criar categoria.");
    }
  };

  return (
    <Container>
      <SecondaryHeader title="Nova Categoria" goBack="/categories" />

      <ModalConfirm
        modalIsOpen={isModalVisible}
        description={modalCreateDescription}
        toggleModalConfirm={toggleModalCreate}
        toggleModalCancel={() => setIsModalVisible(false)}
        closeModal={() => setIsModalVisible(false)}
      />

      <Content>
        <img
          className="new-category-image"
          src={CategoryLogo}
          alt="Category Logo"
        />

        <GenerateCategory
          newName={newCategoryName}
          oldName={newCategoryName ? newCategoryName : ""}
          newNameSet={setNewCategoryName}
          newColor={newCategoryColor}
          newColorSet={setNewCategoryColor}
        />

        <Options>
          <Button
            isCreate
            title="Criar categoria"
            onClick={() => setIsModalVisible(true)}
          />
        </Options>
      </Content>
    </Container>
  );
};

export default NewCategory;
