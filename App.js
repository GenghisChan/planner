import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import UserInput from './src/components/UserInput/UserInput';
import PlaceList from  './src/components/PlaceList/PlaceList';

export default class App extends Component<Props> {
  state = {
    places: []
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <UserInput onPlaceAdded={this.placeAddedHandler}/>
          <PlaceList places={this.state.places} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }

});
