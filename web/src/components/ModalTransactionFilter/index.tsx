import { Container } from './styles';
import Modal from 'react-modal';
import Logo from '../../assets/Logo.svg';
import { colors } from '../../styles/colors';

interface ModalConfirmProps {
  modalIsOpen: boolean;
  toggleModalAll?(): void;
  toggleModalEntries?(): void;
  toggleModalExpenses?(): void;
  closeModal(): void;
}

const ModalConfirm = ({
  modalIsOpen,
  toggleModalAll,
  toggleModalEntries,
  toggleModalExpenses,
  closeModal,
}: ModalConfirmProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          width: '75%',
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
        },
      }}
      contentLabel="Escolha um opção"
      ariaHideApp={false}
    >
      <Container>
        <img className="modal-filter-logo" src={Logo} alt="Finance Logo" />

        <h1 className="modal-filter-title">Como deseja ordenar?</h1>

        <button className="modal-filter-button" onClick={toggleModalAll}>
          <h1 className="modal-filter-option">Todas Transações</h1>
        </button>

        <div className="modal-filter-line" />

        <button className="modal-filter-button" onClick={toggleModalEntries}>
          <h1 className="modal-filter-option">Entradas</h1>
        </button>

        <div className="modal-filter-line" />

        <button className="modal-filter-button" onClick={toggleModalExpenses}>
          <h1 className="modal-filter-option">Saídas</h1>
        </button>
      </Container>
    </Modal>
  );
};

export default ModalConfirm;
