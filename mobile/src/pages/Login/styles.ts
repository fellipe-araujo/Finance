import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    marginTop: Constants.statusBarHeight + 30,
  },
  inputGroup: {
    width: '80%',
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#39393a',
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    height: 56,
    width: '100%',
    color: '#505050',
    borderBottomWidth: 2,
    borderBottomColor: '#A9DEF9',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonGroup: {
    width: '80%',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    height: 56,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#505050',
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonLogin: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonSignin: {
    color: '#A9DEF9',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default styles;
