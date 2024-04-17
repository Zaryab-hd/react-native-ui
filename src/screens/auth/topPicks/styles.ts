import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  textTop: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    marginLeft: 20,
  },
  textList: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 5,
    marginLeft: 20,
  },
  imageView: {
    marginTop: 30,
    alignItems: 'center',
  },
  imageStyle: {
    height: 160,
    width: 125,
    borderRadius: 15,
    marginHorizontal: 3,
  },
  textDress: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    marginLeft: 20,
  },
  textPick: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 5,
    marginLeft: 20,
  },
  iconView: {
    marginTop: 25,
    alignItems: 'center',
  },
  iconStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 5,
  },
  categoryText: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    marginLeft: 25,
  },
  reviewBox: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 15,
  },
  profileView: {
    flex: 1,
  },
  profile: {
    width: 45,
    height: 45,
  },
  textView: {
    flex: 4,
  },
  textReview: {
    fontSize: 16,
    color: 'black',
    flexWrap: 'wrap',
  },
  ratingsView: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
  ratingIcon: {
    width: 20,
    height: 20,
  },
  ratingText: {
    color: 'black',
    fontSize: 14,
  },
  bottomBarView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBarInnerView: {
    height: 60,
    width: 380,
    marginTop: 25,
    backgroundColor: '#FF8F3D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  bottomIcons: {
    height: 30,
    width: 30,
    marginHorizontal: 25,
  },
});

export default styles;
