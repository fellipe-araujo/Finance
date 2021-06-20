import { Container } from "./styles";
import Modal from "react-modal";
import Logo from "../../assets/Logo.svg";
import { colors } from "../../styles/colors";

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
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          width: "75%",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: colors.white,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
        },
      }}
      contentLabel="Escolha um opção"
      ariaHideApp={false}
    >
      <Container>
        <img className="modal-confirm-logo" src={Logo} alt="Finance Logo" />

        <h1 className="modal-confirm-description">{description}</h1>

        <div className="modal-confirm-buttons-group">
          <button className="modal-confirm-cancel" onClick={toggleModalCancel}>
            <h1 className="modal-confirm-title">Cancelar</h1>
          </button>
          <button
            className="modal-confirm-confirm"
            onClick={toggleModalConfirm}
          >
            <h1 className="modal-confirm-title">Confirmar</h1>
          </button>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalConfirm;
