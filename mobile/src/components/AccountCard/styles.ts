import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    height: 80,
    marginVertical: 20,
  },
  accountName: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  accountValue: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  title: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
    color: '#202020',
    textAlign: 'center'
  },
  value: {
    fontSize: 24,
    color: '#39393A',
    fontFamily: 'Nunito_700Bold'
  }
});

export default styles;
