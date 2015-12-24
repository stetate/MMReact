'use strict';
 
var React = require('react-native');
 
var {
    StyleSheet,
    View,
    Text,
    navigator,
    Component
   } = React;
 
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    location: {
        color: '#656565'
    }});
 
class SetupView extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    <Text style={styles.title}>Initial position: </Text>
                    {this.GeolocationExample.initialPosition}
                </Text>
                <Text>
                    <Text style={styles.title}>Current position: </Text>
                    {this.GeolocationExample.lastPosition}
                </Text>

	    </View>             
        );
    }
}

/* var GeolocationExample = React.createClass({
  watchID: (null: ?number),*/
class location{

  getInitialState: function() {
    return {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  },

  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },
};

module.exports = SetupView;