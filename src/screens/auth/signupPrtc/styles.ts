import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    alignItems: 'center',
  },
  profileLogo: {
    width: 150,
    height: 150,
    marginTop: 50,
  },
  textAccount: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 30,
  },
  btnStyle: {
    height: 55,
    width: 350,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    margin: 15,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
  btnText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 15,
  },
  textOr: {
    fontSize: 25,
    fontWeight: '600',
    marginTop: 15,
  },
});

export default styles;
