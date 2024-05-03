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
    width: 150,
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
    marginTop: 20,
  },
  profile: {
    width: 45,
    height: 45,
  },
  textView: {
    flex: 1,
  },
  textReview: {
    fontSize: 16,
    color: 'black',
    marginLeft: 15,
    flexWrap: 'wrap',
  },
  ratingsView: {
    flexDirection: 'column',
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
    flexDirection: 'row',
    backgroundColor: '#EE6940',
    borderRadius: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginHorizontal: 5,
    marginTop: 35,
  },
  bottomIconsView: {
    flex: 1,
  },
  bottomIcons: {
    height: 35,
    width: 35,
    marginHorizontal: 30,
  },
});

export default styles;
