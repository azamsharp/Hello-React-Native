import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import ListItem from './src/components/ListItem'
import placeImage from './assets/beach.jpg'

export default class App extends React.Component {

  state = {
    placeName : '',
    places : []
  }

  placeNameChanged = (val) => {
    this.setState({
      placeName : val
    })
  }

  addPlacePressed = () => {

    if(this.state.placeName.trim() == "") {
      return
    }

    this.setState({
      ...this.state,
      places : this.state.places.concat({
          name : this.state.placeName,
          image : placeImage
      })
    })

  }

  deleteItem = (index) => {

    let places =  this.state.places.filter((place,i) => {
      return i !== index
    })

    this.setState({
      ...this.state,
      places : places
    })

  }

  render() {

    const placesOutput = this.state.places.map((place,index) => {
      return <ListItem onItemPressed = {() => this.deleteItem(index)} place = {place} />
    })

    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput value={this.state.placeName} style={{width : '70%',padding: 10}} placeholder = 'Enter Place Name' onChangeText = {this.placeNameChanged}  />
          <Button title = "Add" onPress={this.addPlacePressed} style={{width : '30%'}} />
        </View>
        <View style={{ width : "100%"}}>
          <ScrollView>
          {placesOutput}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 26,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  innerContainer: {
    width: "100%",
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems : 'center'
  }
});
