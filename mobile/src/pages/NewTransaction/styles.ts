import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  content: {
    flex: 1,
    width: '80%',
    marginBottom: 20,
  },

  transactionLogo: {
    marginTop: 20,
  },

  title: {
    alignSelf: 'flex-start',
    marginTop: 10,
  },

  dateContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  dateText: {
    marginLeft: 10,
  },

  dropdownContainer: {
    height: 50,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginTop: 10,
    overflow: 'hidden',
  },
});

export default styles;
