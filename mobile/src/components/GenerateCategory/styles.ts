import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  visualizationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },

  inputGroup: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },

  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 2,
    borderRightWidth: 0,
    borderColor: '#F5EC97',
    padding: 8,
    color: '#39393A',
  },

  generateColorContainer: {
    width: '20%',
    height: 50,
  },

  generateColor: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5EC97',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default styles;
