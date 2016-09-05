
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
class HomePage extends Component
{
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{paddingTop: 22,flex:1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
        />
      </View>
    );
  }

  renderRow(rowData, sectionID, rowID, highlightRow: (sectionID: number, rowID: number) => void){
     var rowHash = Math.abs(hashCode(rowData));
     var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
    return (
      <TouchableHighlight
        underlayColor = '#F0F0F0'
        onPress={() => {
          this._pressRow(rowID,rowData);
          highlightRow(sectionID, rowID);
        }}
        >
        <View style ={styles.row}>
        <Image style={styles.thumb} source={imgSource} />
          <Text style={styles.textStyle}>{rowData}</Text>
        </View>
      </TouchableHighlight>

    )
  }

  _pressRow(rowID,rowData) {
    this.props.navigator.push({
      id: 'DetailPage',
      name: 'ListDetail',
      passProps: {
         username: 'Helllll',
       }
    });
  }
}
var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

var THUMB_URLS = [
  require('./Thumbnails/like.png'),
  require('./Thumbnails/dislike.png'),
  require('./Thumbnails/call.png'),
  require('./Thumbnails/fist.png'),
  require('./Thumbnails/bandaged.png'),
  require('./Thumbnails/flowers.png'),
  require('./Thumbnails/heart.png'),
  require('./Thumbnails/liking.png'),
  require('./Thumbnails/party.png'),
  require('./Thumbnails/poke.png'),
  require('./Thumbnails/superlike.png'),
  require('./Thumbnails/victory.png'),
  ];
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

module.exports = HomePage;
