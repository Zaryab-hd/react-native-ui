import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    width: 150,
    height: 150,
    marginTop: 70,
  },
  textWelcome: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 30,
  },
  inputStyle: {
    marginTop: 40,
    width: 350,
    height: 60,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 17,
    padding: 15,
  },
  textOr: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 15,
  },
  viewSocial: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
    justifyContent: 'space-evenly',
  },
  btnStyle: {
    height: 60,
    width: 60,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  viewSignUp: {
    flexDirection: 'row',
    marginTop: 35,
  },
  accountStyle: {
    fontSize: 20,
    fontWeight: '500',
  },
  signupStyle: {
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 5,
    color: 'blue',
  },
});

export default styles;
