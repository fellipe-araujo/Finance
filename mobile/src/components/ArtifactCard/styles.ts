import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 80,
    justifyContent: 'space-between',
    borderRadius: 8,
    borderStyle: 'solid',
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowRadius: 20,
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#000',
    shadowOpacity: 0.25,
  },

  title: {
    fontSize: 18,
    color: '#505050',
    fontFamily: 'Nunito_700Bold',
  },

  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingTop: 5,
  },

  total: {
    fontFamily: 'Nunito_400Regular',
  },
});

export default styles;
