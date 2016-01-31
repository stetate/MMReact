'use strict'
var React = require('react-native');
var Trig = require('./MMtrig');
var moon = require('./moonFinder')

 
var {
    StyleSheet,
    View,
    Text,
    Component,
   } = React;
 
var styles = StyleSheet.create({
    textinput: {
        height: 26,
        width: 50,
        borderWidth: 0.5,
        borderColor: '#0f0f0f',
        padding: 4,
        fontSize: 13,
  },
    textview: {
        height: 26,
        padding: 10,
        fontSize: 13,
  },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
        padding: 10,
        paddingTop: 74,
  },
    labelView: {
        marginRight: 10,
        paddingVertical: 2,
  },
    label: {
        fontWeight: '500',
  },
    headingContainer: {
        backgroundColor: '#f6f7f8',
        marginVertical: 2,
        padding: 10,
        paddingTop: 74,
  },
    heading: {
        fontWeight: '500',
        fontSize: 14,
  },
});
 
var MoonView = React.createClass( {
    render: function(){
        var year = 2016;
        var month = 1;
        var day = 31;
        var hours = 22;
        var latitude = 44.35;
        var longitude = -79.61;
        var TZ = -5;
        var m = new moon();

        var moonpos = m.MoonPos(year,month,day,hours)
        var moonrise = m.MoonRise(year,month,day,TZ,latitude,longitude)
        //remeber that this will bring in the time in UTC so will need to be corrected for the location
        return(
            <View>
            <WithLabel  label="values"/>
               <Text style={styles.label}> "this is the latest text" + this.dataSource</Text>
            <Text style={styles.label}>"this is another row of text which we can see what is happening" </Text>
            </View>
        )
    },
});


var WithLabel = React.createClass({
  render: function() {
    return (
      <View style={styles.labelContainer}>
        <View style={styles.labelView}>
          <Text style={styles.label}>
            {this.props.label}
          </Text>
        </View>
        {this.props.children}
      </View>
    );
  }
});

var Heading = React.createClass({
  render: function() {
    return (
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          {this.props.label}
        </Text>
      </View>
    );
  }
});
 
module.exports = MoonView;