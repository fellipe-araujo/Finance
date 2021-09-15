import {
  Container,
  Title,
  ButtonsBox,
  CancelAction,
  Text,
  ConfirmAction,
} from './styles';
import Modal from 'react-modal';
import Logo from '../../assets/Logo/Logo.svg';
import theme from '../../styles/theme';

interface ModalConfirmProps {
  modalIsOpen: boolean;
  description: string;
  toggleModalConfirm?(): void;
  toggleModalCancel?(): void;
  closeModal(): void;
}

const ModalConfirm = ({
  modalIsOpen,
  description,
  closeModal,
  toggleModalConfirm,
  toggleModalCancel,
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

        <Title className="modal-confirm-description">{description}</Title>

        <ButtonsBox className="modal-confirm-buttons-group">
          <CancelAction
            className="modal-confirm-cancel"
            onClick={toggleModalCancel}
          >
            <Text className="modal-confirm-title">Cancelar</Text>
          </CancelAction>

          <ConfirmAction
            className="modal-confirm-confirm"
            onClick={toggleModalConfirm}
          >
            <Text className="modal-confirm-title">Confirmar</Text>
          </ConfirmAction>
        </ButtonsBox>
      </Container>
    </Modal>
  );
};

export default ModalConfirm;
