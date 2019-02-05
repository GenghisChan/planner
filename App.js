import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { YellowBox } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import UserInput from './src/components/UserInput/UserInput';
import PlaceList from  './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/meteora.jpg'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import { addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index';

class App extends Component<Props> {


  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

modalClosedHandler = () => {
  this.props.onDeselectPlace();
}

  render() {
    console.log(`${addPlace}`)
    return (
      <View style={styles.container}>
          <PlaceDetail
            selectedPlace={this.props.selectedPlace}
            onItemDeleted={this.placeDeletedHandler}
            onModalClosed={this.modalClosedHandler}
          />
          <UserInput onPlaceAdded={this.placeAddedHandler}/>
          <PlaceList
            places={this.props.places}
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
