import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {boyIcon, favoriteIcon, starIcon} from '../../../assets/icons';
import styles from './styles';

const TopPicks = () => {
  const images = [
    {src: require('../../../assets/images/girl1.jpg'), key: '1'},
    {src: require('../../../assets/images/girl.jpg'), key: '2'},
    {src: require('../../../assets/images/girl2.jpg'), key: '3'},
    {src: require('../../../assets/images/girl.jpg'), key: '4'},
    {src: require('../../../assets/images/girl1.jpg'), key: '5'},
    {src: require('../../../assets/images/girl2.jpg'), key: '6'},
  ];

  const icons = [
    {src: require('../../../assets/icons/dress1.png'), key: '1', name: 'Polka'},
    {src: require('../../../assets/icons/dress2.png'), key: '2', name: 'Lines'},
    {src: require('../../../assets/icons/dress3.png'), key: '3', name: 'Zehra'},
    {src: require('../../../assets/icons/dress4.png'), key: '4', name: 'Cross'},
  ];

  const bottomBarIcons = [
    {src: require('../../../assets/icons/signal.png'), key: '1'},
    {src: require('../../../assets/icons/wallet.png'), key: '2'},
    {src: require('../../../assets/icons/chat.png'), key: '3'},
    {src: require('../../../assets/icons/shopping.png'), key: '4'},
  ];

  return (
    <View style={styles.mainView}>
      <Text style={styles.textTop}>Editors Top Picks</Text>
      <Text style={styles.textList}>List of amazing styles to choose from</Text>
      <View style={styles.imageView}>
        <FlatList
          horizontal={true}
          data={images}
          renderItem={({item}) => (
            <Image style={styles.imageStyle} source={item.src}></Image>
          )}
        />
      </View>
      <Text style={styles.textDress}>Dress Patterns</Text>
      <Text style={styles.textPick}>Pick your favorite pattern</Text>

      <View style={styles.iconView}>
        <FlatList
          horizontal={true}
          data={icons}
          renderItem={({item}) => (
            <View>
              <Image style={styles.iconStyle} source={item.src}></Image>
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <Text style={styles.textDress}>Customer Reviews</Text>
      <View style={styles.reviewBox}>
        <View style={styles.profileView}>
          <Image style={styles.profile} source={boyIcon}></Image>
        </View>
        <View style={styles.textView}>
          <Text style={styles.textReview}>
            Love the dress. Good quality and vendor supports.
          </Text>
        </View>
        <View style={styles.ratingsView}>
          <Image style={styles.ratingIcon} source={favoriteIcon}></Image>
          <Text style={styles.ratingText}>4.5</Text>
        </View>
      </View>
      <View style={styles.bottomBarView}>
        <View style={styles.bottomBarInnerView}>
          <FlatList
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            horizontal={true}
            data={bottomBarIcons}
            renderItem={({item}) => (
              <View>
                <Image style={styles.bottomIcons} source={item.src}></Image>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default TopPicks;
