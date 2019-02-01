import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

class UserInput extends Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = e => {
    this.setState({
        placeName: e
      })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    
    this.props.onPlaceAdded(this.state.placeName)
  }


  render(){
    return(
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="Lets go there"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default UserInput;
