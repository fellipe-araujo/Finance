import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderRadius: 8,
  },

  modalImage: {
    width: 60,
    height: 47,
    alignSelf: 'center',
    marginVertical: 10,
  },

  textDescription: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#39393A',
    fontFamily: 'Nunito_700Bold',
  },

  modalButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },

  modalButton: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalButtonCancel: {
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 8,
  },

  modalButtonConfirm: {
    backgroundColor: '#505050',
    borderBottomRightRadius: 8,
  },

  textCancel: {
    color: '#39393A',
    fontFamily: 'Nunito_700Bold',
  },

  textConfirm: {
    color: '#FFF',
    fontFamily: 'Nunito_700Bold',
  },
});

export default styles;
