import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },

  default: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  optionAdd: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#40923F',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  optionRemove: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#BB4E4E',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  globalText: {
    fontFamily: 'Nunito_700Bold',
  },
});

export default styles;
