import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#39393A',
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
    paddingTop: Constants.statusBarHeight + 20,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  title: {
    color: '#FFF',
    fontSize: 28,
    fontFamily: 'Nunito_700Bold',
  },
});

export default styles;
