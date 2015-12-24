'use strict';
 
var React = require('react-native');
var {
    DatePickerIOS,
    StyleSheet,
    View,
    Text,
    navigator,
    TextInput,
    Component
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
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  labelView: {
    marginRight: 10,
    paddingVertical: 2,
  },
  label: {
    fontWeight: '500',
  },
  headingContainer: {
    padding: 4,
    backgroundColor: '#f6f7f8',
  },
  heading: {
    fontWeight: '500',
    fontSize: 14,
  },
});

//class SetupView extends Component {
var SetupView = React.createClass({

  getDefaultProps: function () {
    return {
      date: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date().getTimezoneOffset() / 60),
    };
  },

  getInitialState: function() {
    return {
      date: this.props.date,
      timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
    };
  },

  onDateChange: function(date) {
    this.setState({date: date});
  },

  onTimezoneChange: function(event) {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  },

  render: function(){
        return (
          <View>
            <WithLabel label="Current Time:">
               <Text>{
              this.state.date.toLocaleDateString() +
              ' ' +
                this.state.date.toLocaleTimeString()
              }</Text>
            </WithLabel>
            <WithLabel label="Timezone:">
              <TextInput
                onChange={this.onTimezoneChange}
                style={styles.textinput}
                value={this.state.timeZoneOffsetInHours.toString()}/>
              <Text> hours from UTC</Text>
            </WithLabel>
   
              <Heading label="Date + time picker" />
              <DatePickerIOS date={this.state.date} mode="datetime" timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60} onDateChange={this.onDateChange}/>

              <Text style={styles.description}>
              humbug its finally is working
            </Text>
          </View>             
        );
  }
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
module.exports = SetupView;