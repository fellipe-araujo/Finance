import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  scrollContainer: {
    width: '100%',
    marginTop: 10,
  },

  content: {
    flex: 1,
    width: '80%',
    justifyContent: 'space-between',
    marginVertical: 30,
  },

  inputTitle: {
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
    color: '#202020'
  },
});

export default styles;
