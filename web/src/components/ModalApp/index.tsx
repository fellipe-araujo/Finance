import { ReactNode } from 'react';
import Modal from 'react-modal';
import theme from '../../styles/theme';

interface ModalProps {
  modalIsOpen: boolean;
  closeModal(): void;
  children: ReactNode;
}

const ModalApp = ({ modalIsOpen, closeModal, children }: ModalProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          width: '90%',
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
          padding: '2rem',
        },
      }}
      contentLabel="Escolha um opção"
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};

export default ModalApp;
