import React, {Component} from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { YellowBox } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import UserInput from './src/components/UserInput/UserInput';
import PlaceList from  './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/meteora.jpg'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

export default class App extends Component<Props> {
  state = {
    places: [],
    selectedPlace: null
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.floor((Math.random() * 100) + 1),
          name: placeName,
          image: placeImage
        })
      }
    })
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key == key
        })
      };
    })
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    })
  }

modalClosedHandler = () => {
  this.setState({
    selectedPlace: null
  })
}

  render() {
    return (
      <View style={styles.container}>
          <PlaceDetail
            selectedPlace={this.state.selectedPlace}
            onItemDeleted={this.placeDeletedHandler}
            onModalClosed={this.modalClosedHandler}
          />
          <UserInput onPlaceAdded={this.placeAddedHandler}/>
          <PlaceList
            places={this.state.places}
            onItemSelected={this.placeSelectedHandler}
          />
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
