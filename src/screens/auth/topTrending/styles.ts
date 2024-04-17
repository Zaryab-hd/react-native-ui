import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
  },
  textChoose: {
    fontSize: 25,
    color: 'black',
    marginTop: 50,
  },
  textTop: {
    fontSize: 35,
    fontWeight: '800',
    color: 'black',
    marginTop: 10,
  },
  starView: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 80,
  },
  starStyle: {
    width: 30,
    height: 30,
  },
  textRatings: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginTop: 20,
  },
  btnView: {
    flexDirection: 'row',
    marginTop: 40,
    width: '100%',
    justifyContent:"space-between",
    // backgroundColor:"lightblue",
  },
  btnStyle: {
    flex:1,
    height: 50,
    flexDirection: 'row',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal:10
  ,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '800',
    color: 'black',
    marginLeft: 5,
  },
  imageView: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'green',
    width: '90%',
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
