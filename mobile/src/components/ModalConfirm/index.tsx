import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

interface Props {
  isModalVisible: boolean;
  toggleModalConfirm(): void;
  toggleModalCancel(): void;
  description: string;
}

const ModalConfirm = ({
  isModalVisible,
  toggleModalConfirm,
  toggleModalCancel,
  description,
}: Props) => {
  return (
    <Modal
      isVisible={isModalVisible}
      // onBackdropPress={}
    >
      <View style={styles.modalContainer}>
        <Image
          source={require('../../../assets/logo/LogoModal.png')}
          style={styles.modalImage}
        />

        <Text style={styles.textDescription}>{description}</Text>

        <View style={styles.modalButtonContainer}>
          <View style={[styles.modalButton, styles.modalButtonCancel]}>
            <TouchableOpacity onPress={toggleModalCancel}>
              <Text style={styles.textCancel}>Cancelar</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.modalButton, styles.modalButtonConfirm]}>
            <TouchableOpacity onPress={toggleModalConfirm}>
              <Text style={styles.textConfirm}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirm;
