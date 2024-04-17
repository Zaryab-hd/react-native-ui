import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  favoriteIcon,
  heartIcon,
  saveIcon,
  shareIcon,
  starIcon,
} from '../../../assets/icons';
import { girlImage } from '../../../assets/images';
import styles from './styles';

const TopTrendng = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.textChoose}>Choose your styles</Text>
      <Text style={styles.textTop}>Top Trending</Text>
      <View style={styles.starView}>
        <Image style={styles.starStyle} source={favoriteIcon}></Image>
        <Image style={styles.starStyle} source={favoriteIcon}></Image>
        <Image style={styles.starStyle} source={favoriteIcon}></Image>
        <Image style={styles.starStyle} source={starIcon}></Image>
        <Image style={styles.starStyle} source={starIcon}></Image>
      </View>
      <Text style={styles.textRatings}>307 Ratings</Text>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={[styles.btnStyle, {backgroundColor: '#ffb6c1'}]}>
          <Image style={styles.iconStyle} source={heartIcon}></Image>
          <Text style={styles.btnText}>70.3k</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle}>
          <Image style={styles.iconStyle} source={saveIcon}></Image>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle}>
          <Image style={styles.iconStyle} source={shareIcon}></Image>
          <Text style={styles.btnText}>Share</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageView}>
        <Image style={styles.imageStyle} source={girlImage}></Image>
      </View>
    </View>
  );
};

export default TopTrendng;


