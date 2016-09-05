import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  ListView,
  TouchableHighlight,
  Navigator,
  View
} from 'react-native';
class DetailPage extends Component
{
  render() {
    return (
      <View style={{paddingTop: 22,flex:1}}>
        <Text style={styles.textStyle}>Detail Page is showing  { this.props.username }</Text>
      </View>
    );
}
}
const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumb: {
    width: 32,
    height: 32,
  },
  row:{
   flex:1,
   flexDirection:'row',
   padding:5,
   borderBottomWidth: 1,
   borderColor: '#d7d7d7',
 },
 selectionText:{
   fontSize:15,
   paddingTop:3,
   color:'#000000',
   textAlign:'right'
 },
 separator: {
   flex: 1,
   height: StyleSheet.hairlineWidth,
   backgroundColor: '#000000',
 },
 textStyle: {
   fontSize:12,
   color: '#000000',
 }
});
module.exports=DetailPage;
