import { useState } from 'react';
import './styles.css';
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
    <header className="header-container">
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
        <div className="header-menu-container">
          <Link className="header-menu-link" to="/accounts">
            <h1 className="header-menu-option">Contas</h1>
          </Link>
          <Link className="header-menu-link" to="/accounts">
            <h1 className="header-menu-option">Transações</h1>
          </Link>
          <Link className="header-menu-link" to="/accounts">
            <h1 className="header-menu-option">Objetivos</h1>
          </Link>
          <Link className="header-menu-link" to="/accounts">
            <h1 className="header-menu-option">Categorias</h1>
          </Link>
        </div>
      </Modal>
      <img className="header-image" src={Logo} alt="Finance Logo" />
      <h1 className="header-user-name">Fellipe</h1>
      <button className="header-menu" onClick={() => openModal()}>
        <FiMenu size={30} color="#FFF" />
      </button>
    </header>
  );
};

export default Header;
