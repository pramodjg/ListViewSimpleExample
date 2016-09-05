import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  ListView,
  TouchableHighlight,
   TouchableOpacity,
  Navigator,
  View
} from 'react-native';
class DetailPage extends Component
{
  render() {
    return (
     <Navigator
         renderScene={this.renderScene.bind(this)}
         navigator={this.props.navigator}
         navigationBar={
           <Navigator.NavigationBar style={{backgroundColor: '#000000'}}
               routeMapper={NavigationBarRouteMapper} />
         } />
   );

}
renderScene(route, navigator) {
  return (
    <View style={{paddingTop: 22,flex:1}}>
      <Text style={styles.textStyle}>Detail Page is showing { this.props.username }</Text>
    </View>
  );
}
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
          back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          List Detail Page
        </Text>
      </TouchableOpacity>
    );
  }
};



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
