import { useState } from "react";
import { HeaderContainer, Menu, Title } from "./styles";
import {
  FiMenu,
  FiCreditCard,
  FiTrendingUp,
  FiTarget,
  FiTag,
  FiLogOut,
} from "react-icons/fi";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { useAuth } from "../../context/auth";

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const { signOut } = useAuth();

  return (
    <HeaderContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            width: "65%",
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
        <Menu>
          <Link className="menu-option" to="/accounts">
            <FiCreditCard size={20} color="#39393A" />
            <Title>Contas</Title>
          </Link>

          <div className="menu-line" />

          <Link className="menu-option" to="/transactions">
            <FiTrendingUp size={20} color="#39393A" />
            <Title>Transações</Title>
          </Link>

          <div className="menu-line" />

          <Link className="menu-option" to="/objectives">
            <FiTarget size={20} color="#39393A" />
            <Title>Objetivos</Title>
          </Link>

          <div className="menu-line" />

          <Link className="menu-option" to="/categories">
            <FiTag size={20} color="#39393A" />
            <Title>Categorias</Title>
          </Link>

          <div className="menu-line" />

          <button className="logout" onClick={signOut}>
            <FiLogOut size={20} color="#BB4E4E" />
            <Title isLogout>Sair</Title>
          </button>
        </Menu>
      </Modal>
      <img src={Logo} alt="Finance Logo" />
      <h1>{name}</h1>
      <button onClick={() => openModal()}>
        <FiMenu size={30} color="#FFF" />
      </button>
    </HeaderContainer>
  );
};

export default Header;
