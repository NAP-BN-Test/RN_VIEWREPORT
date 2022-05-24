import {StyleSheet} from 'react-native';
import colors from '../../../assets/css/color';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    // flexDirection: 'column',
    // alignItems: 'center'
    position: 'relative',
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    // marginHorizontal: -20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    color: '#000',
    paddingLeft: 16,
  },
  button: {
    // backgroundColor: colors.redcustom,
    backgroundColor: '#000',
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonFooter: {
    backgroundColor: '#ffff',
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonTitleFooter: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textDemo: {
    color: '#000',
    fontWeight: '400',
    fontSize: 14,
    opacity: 0.5,
    textAlign: 'center',
  },
});
