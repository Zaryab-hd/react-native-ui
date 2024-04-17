import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GridList = () => {
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
      name: 'Daisy',
    },
    {
      id: 7,
      name: 'Micheal',
    },
    {
      id: 8,
      name: 'Daniel',
    },
    {
      id: 9,
      name: 'Chris',
    },
    {
      id: 10,
      name: 'Mike',
    },
    {
      id: 11,
      name: 'Jenner',
    },
    {
      id: 11,
      name: 'Jenner',
    },
    {
      id: 11,
      name: 'Jenner',
    },
    {
      id: 11,
      name: 'Jenner',
    },
    {
      id: 11,
      name: 'Jenner',
    },
    {
      id: 11,
      name: 'Jenner',
    },
    {
      id: 11,
      name: 'Jenner',
    },
    {
      id: 11,
      name: 'Jenner',
    },
    {
      id: 11,
      name: 'Jenner',
    },
    {
      id: 11,
      name: 'Jenner',
    },
    {
      id: 11,
      name: 'Jenner',
    },
    {
      id: 11,
      name: 'Jenner',
    },
    {
      id: 11,
      name: 'Jenner',
    },
    {
      id: 11,
      name: 'Jenner',
    },
  ];
  return (
    <View>
      <ScrollView>
        <View style={styles.viewStyle}>
          {users.map(item => (
            <Text style={styles.textStyle}>{item.name}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default GridList;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textStyle: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: '#fff',
    margin: 5,
    padding: 10,
    width: 120,
    height: 120,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
