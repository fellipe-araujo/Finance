import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '90%',
    borderRadius: 8,
    marginTop: 20,
    padding: 10
  },

  name: {
    fontSize: 20
  },

  valuesContainer: {
    marginVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D7D7D7',
  },

  valueGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  },

  globalText: {
    color: '#39393A',
    fontFamily: 'Nunito_700Bold'
  },

  descriptionText: {
    marginLeft: 10,
  },
});

export default styles;
