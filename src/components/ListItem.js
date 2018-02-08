
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';


const listItem = (props) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={{ width: "100%", flexDirection:"row"}}>
    <Image source={props.place.image} style={{width: 50, height: 50}} />
    <View style={styles.listItem}><Text>{props.place.name}</Text></View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({

  listItem : {
    width: "100%",
    padding: 10,
    backgroundColor : '#eee',
    margin: 5
  }

})


export default listItem
