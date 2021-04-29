import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20 + Constants.statusBarHeight,
  },

  headerWelcome: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  userInfoContainer: {
    flexDirection: 'column',
  },

  textWelcome: {
    fontSize: 18,
    color: '#39393A',
    fontFamily: 'Nunito_400Regular',
  },

  textName: {
    fontSize: 24,
    color: '#39393A',
    fontFamily: 'Nunito_700Bold',
  },

  containerAccount: {
    width: '80%',
    marginVertical: 30,
  },

  value: {
    fontSize: 30,
    color: '#39393A',
    fontFamily: 'Nunito_700Bold',
    marginVertical: 30,
  },

  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowRadius: 20,
    elevation: 5,
    shadowOffset: { width: 0, height: -10 },
    shadowColor: '#000',
    shadowOpacity: 0.25,
  },

  title: {
    marginTop: 20,
    color: '#39393A',
    fontSize: 24,
    fontFamily: 'Nunito_400Regular',
  },
});

export default styles;
