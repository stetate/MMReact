'use strict';
 
var React = require('react-native');

 
var {
    StyleSheet,
    View,
    Text,
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
 

var SunView = React.createClass({
    render: function(){
        return(
            <View>
            SunRiseSet(2015,12,24,44.3, -79.6)
            <Text> "SunRiseSet(2015,12,24,44.3, -79.6)" </Text>
            </View>
            );
    },

    SunRiseSet: function(year,month,day,latitude,longitude) {
          // Based on method in sci.astro FAQ by Paul Schlyter
          // returns an array holding rise and set times in UTC hours
          // NOT accurate at high latitudes 
          // latitude = your local latitude: north positive, south negative
          // longitude = your local longitude: east positive, west negative
          // Calculate the Suns position at noon local zone time
          var d=dayno(year,month,day,12.0-longitude/15);
          var oblecl=23.4393-3.563E-7*d;
          var w=282.9404+4.70935E-5*d;
          var M=356.0470+0.9856002585*d;
          var e=0.016709-1.151E-9*d;
          var E=M+e*(180/Math.PI)*sind(M)*(1.0+e*cosd(M));
          var A=cosd(E)-e;
          var B=Math.sqrt(1-e*e)*sind(E);
          var slon=w+atan2d(B,A);
          var sRA=atan2d(sind(slon)*cosd(oblecl),cosd(slon));
          while(sRA<0)sRA+=360; while(sRA>360)sRA-=360; sRA=sRA/15;
          var sDec=asind(sind(oblecl)*sind(slon));
          // Time sun is on the meridian
          var lst=local_sidereal(year,month,day,12-longitude/15,longitude);
          var MT=12.0-longitude/15+sRA-lst;
          while(MT<0)MT+=24; while(MT>24)MT-=24;
          // hour angle
          var cHA0=(sind(-0.8333333)-sind(latitude)*sind(sDec))/(cosd(latitude)*cosd(sDec));
          var HA0=acosd(cHA0);
          HA0=rev(HA0)/15;
          // return rise and set times
          return new Array((MT-HA0),(MT+HA0));
        },

    SunRa: function(year,month,day,hours,latitude,longitude) {
          // Based on method in sci.astro FAQ by Paul Schlyter
          // returns the Sun's RA
          // NOT accurate at high latitudes 
          // latitude = your local latitude: north positive, south negative
          // longitude = your local longitude: east positive, west negative
          // Calculate the Suns position at 'hours' local zone time
          var d=dayno(year,month,day,hours-longitude/15);
          var oblecl=23.4393-3.563E-7*d;
          var w=282.9404+4.70935E-5*d;
          var M=356.0470+0.9856002585*d;
          var e=0.016709-1.151E-9*d;
          var E=M+e*(180/Math.PI)*sind(M)*(1.0+e*cosd(M));
          var A=cosd(E)-e;
          var B=Math.sqrt(1-e*e)*sind(E);
          var slon=w+atan2d(B,A);
          var sRA=atan2d(sind(slon)*cosd(oblecl),cosd(slon));
          while(sRA<0)sRA+=360; while(sRA>360)sRA-=360; sRA=sRA/15;
          //var sDec=asind(sind(oblecl)*sind(slon));
          /*
          // Time sun is on the meridian
          var lst=local_sidereal(year,month,day,12-longitude/15,longitude);
          var MT=12.0-longitude/15+sRA-lst;
          while(MT<0)MT+=24; while(MT>24)MT-=24;
          // hour angle
          var cHA0=(sind(-0.8333333)-sind(latitude)*sind(sDec))/(cosd(latitude)*cosd(sDec));
          var HA0=acosd(cHA0);
          HA0=rev(HA0)/15;
          // return rise and set times
          return new Array((MT-HA0),(MT+HA0));
          */
          return sRA;
        }

});
 
module.exports = SunView;