import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';

const listItem = (props) => (
  <TouchableWithoutFeedback onPress={props.onItemSelected}>
    <View style={styles.listItem}>
        <Image
          resizeMode="cover"
          source={props.placeImage}
          style={styles.placeImage}
        />
        <Text>{props.placeName}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default listItem;
