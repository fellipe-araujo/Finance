import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 80,
    marginVertical: 20,
    borderRadius: 8,
    overflow: 'hidden'
  },

  progressActual: {
    backgroundColor: '#F00',
    height: '100%',
  },

  progressRemaining: {
    backgroundColor: '#FFF',
    height: '100%',
  },

  textGroup: {
    position: 'absolute',
    alignItems: 'center'
  },

  titleText: {
    fontSize: 16,
    fontFamily: 'Nunito_700Bold',
  },

  goalText: {
    fontSize: 20,
    fontFamily: 'Nunito_700Bold',
  },
});

export default styles;
