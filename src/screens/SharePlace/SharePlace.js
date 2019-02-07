import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import UserInput from '../../components/UserInput/UserInput';
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
  }

  render(){
    return(
      <View>
        <UserInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
};



export default connect(null, mapDispatchToProps)(SharePlaceScreen);
