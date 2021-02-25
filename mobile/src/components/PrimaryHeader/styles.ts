import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    width: '130%',
    paddingHorizontal: '15%',
    paddingTop: Constants.statusBarHeight + 20,
    height: 180,
    backgroundColor: '#39393A',
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
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
