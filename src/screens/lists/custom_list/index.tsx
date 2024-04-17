import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';

const CustomList = () => {
  const users = [
    {
      id: 1,
      name: 'James',
    },
    {
      id: 2,
      name: 'Bond',
    },
    {
      id: 3,
      name: 'Tim',
    },
    {
      id: 4,
      name: 'David',
    },
    {
      id: 5,
      name: 'Alexa',
    },
    {
      id: 6,
      name: 'Alexa',
    },
    {
      id: 7,
      name: 'Alexa',
    },
    {
      id: 8,
      name: 'Alexa',
    },
    {
      id: 9,
      name: 'Alexa',
    },
    {
      id: 10,
      name: 'Alexa',
    },
    {
      id: 11,
      name: 'Jenner',
    },
  ];
  return (
    <View>
      <Text>CustomList</Text>
      <ScrollView style={{marginBottom: 30}}>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default CustomList;
