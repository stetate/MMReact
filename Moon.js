'use strict';
 
var React = require('react-native');
var moon = require('./Views/MoonView')

var {
    StyleSheet,
    View,
    Text,
    NavigatorIOS,
    Component
   } = React;
 
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});
 
class Moon extends Component {
    render() {
        return (
        < NavigatorIOS 
            style = {styles.container}
            initialRoute ={{
                title: 'Moon Details',
                component: moon
            }}/>
        );
    }
}
 
module.exports = Moon;