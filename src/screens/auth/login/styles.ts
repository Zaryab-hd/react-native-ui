import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
  textLogin: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 80,
  },
  inputStyle: {
    height: 50,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#0270ba',
    padding: 10,
    margin: 15,
    marginTop: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 18,
    marginTop: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#0270ba',
  },
  checkIcon: {
    color: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  btn: {
    height: 50,
    borderRadius: 15,
    borderWidth: 2,
    backgroundColor: '#0270ba',
    borderColor: '#0270ba',
    padding: 10,
    margin: 15,
    marginTop: 40,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textForgot: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0270ba',
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop: 10,
  },
  textAccount: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 20,
  },
  textSignUp: {
    color: '#0270ba',
    fontSize: 17,
    fontWeight: '800',
    marginTop: 10,
  },
  viewBottom: {
    alignItems: 'center',
    marginTop: 100,
  },
});

export default styles;
