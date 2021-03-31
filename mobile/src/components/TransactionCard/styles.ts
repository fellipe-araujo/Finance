import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    marginVertical: 20,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  transactionName: {
    fontSize: 20,
    fontFamily: 'Nunito_700Bold',
    color: '#505050',
  },

  line: {
    height: 1,
    backgroundColor: '#D7D7D7',
    marginVertical: 7,
  },

  text: {
    fontFamily: 'Nunito_700Bold',
    color: '#505050',
    marginVertical: 2,
  },

  categoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5
  },
});

export default styles;
