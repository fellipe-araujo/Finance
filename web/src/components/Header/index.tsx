import { useState } from 'react';
import { HeaderContainer, Menu } from './styles';
import { FiMenu } from 'react-icons/fi';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <HeaderContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            width: '65%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: '0.1rem solid #ccc',
            background: '#fff',
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
        <Menu>
          <Link to="/accounts">
            <h1>Contas</h1>
          </Link>
          <Link to="/accounts">
            <h1>Transações</h1>
          </Link>
          <Link to="/objectives">
            <h1>Objetivos</h1>
          </Link>
          <Link to="/accounts">
            <h1>Categorias</h1>
          </Link>
        </Menu>
      </Modal>
      <img src={Logo} alt="Finance Logo" />
      <h1>Fellipe</h1>
      <button onClick={() => openModal()}>
        <FiMenu size={30} color="#FFF" />
      </button>
    </HeaderContainer>
  );
};

export default Header;
