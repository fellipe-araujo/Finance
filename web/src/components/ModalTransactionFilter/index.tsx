import { Container, Title, ButtonOption, SubTitle, Separator } from './styles';
import Modal from 'react-modal';
import Logo from '../../assets/Logo/Logo.svg';
import theme from '../../styles/theme';

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
          background: theme.colors.grayDark,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          borderColor: theme.colors.grayDark,
          outline: 'none',
        },
      }}
      contentLabel="Escolha um opção"
      ariaHideApp={false}
    >
      <Container>
        <img src={Logo} alt="Finance Logo" />

        <Title className="modal-filter-title">Como deseja ordenar?</Title>

        <ButtonOption className="modal-filter-button" onClick={toggleModalAll}>
          <SubTitle className="modal-filter-option">Todas Transações</SubTitle>
        </ButtonOption>

        <Separator className="modal-filter-line" />

        <ButtonOption
          className="modal-filter-button"
          onClick={toggleModalEntries}
        >
          <SubTitle className="modal-filter-option">Entradas</SubTitle>
        </ButtonOption>

        <Separator className="modal-filter-line" />

        <ButtonOption
          className="modal-filter-button"
          onClick={toggleModalExpenses}
        >
          <SubTitle className="modal-filter-option">Saídas</SubTitle>
        </ButtonOption>
      </Container>
    </Modal>
  );
};

export default ModalConfirm;
