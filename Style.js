import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  },
  header: {
    backgroundColor: '#007aff',
    height: 75,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  contentPhrase: {
    flex: 1,
    padding: 40,
    alignItems: 'center'
  },
  phrase: {
    marginTop: 50,
    textAlign: 'justify',
    fontSize: 22
  },
  button: {
    backgroundColor: '#007aff',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  labelButton: {
    color: '#fff',
    fontSize: 20
  },
  contentButton: {
    flex: 1,
    alignItems: 'center'
  }
});
