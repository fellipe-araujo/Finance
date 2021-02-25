import { Alert } from 'react-native';

export const modalConfirm = (
  title: string,
  description: string,
  artifactName: string,
  onPressBody: () => {}
) => {
  return Alert.alert(
    `${title}`,
    `${description} ${artifactName}?`,
    [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Confirmar',
        onPress: onPressBody
      },
    ],
    { cancelable: false }
  );
};
