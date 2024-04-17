import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const List = () => {
  const countries = [
    {
      id: '1',
      name: 'United States',
    },
    {
      id: '2',
      name: 'United Kingdom',
    },
    {
      id: '3',
      name: 'Palestine',
    },
    {
      id: '4',
      name: 'India',
    },
    {
      id: '5',
      name: 'Nigeria',
    },
    {
      id: '6',
      name: 'Uganda',
    },
  ];

  return (
    <View>
      <FlatList
        data={countries}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => item.id}></FlatList>
    </View>
  );
};

export default List;


