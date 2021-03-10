import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: 144,
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 8,
  },

  title: {
    alignSelf: 'flex-start',
    fontFamily: 'Nunito_400Regular',
    fontSize: 20,
    color: '#39393A',
  },

  line: {
    width: '90%',
    height: 1,
    backgroundColor: '#39393A',
    opacity: 0.3,
    marginVertical: 8,
  },

  valueContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  value: {
    alignSelf: 'center',
    fontFamily: 'Nunito_700Bold',
    fontSize: 32,
  },
});

export default styles;
