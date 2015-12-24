'use strict';
 
var React = require('react-native');
var SunView = require('./Views/SunView');

var {
    StyleSheet,
    NavigatorIOS,
    View,
    Text,
    Component,
   } = React;
 
var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1
    }
});
 
class Sun extends Component {
    render() {
        return (
  	    < NavigatorIOS 
            style = {styles.container}
            initialRoute ={{
                title: 'Sun Details',
                component: SunView
            }}/>
        );
    }
}
 
module.exports = Sun;
