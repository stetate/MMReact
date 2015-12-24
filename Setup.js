'use strict';
 
var React = require('react-native');
var SetupView = require('./Views/SetupView')
 
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
 
class Setup extends Component {
    render() {
        return (
        < NavigatorIOS 
            style = {styles.container}
            initialRoute ={{
                title: 'System Setup',
                component: SetupView
            }}/>
        );
    }
}
 
module.exports = Setup;
