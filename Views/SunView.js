'use strict'
var React = require('react-native');
var Trig = require('./MMtrig');
 
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


var SunView = React.createClass({



    render: function(){
        var year = 2016;
        var month = 1;
        var day = 5;
        var latitude = 44.21;
        var longitude = -79.37;
        //remeber that this will bring in the time in UTC so will need to be corrected for the location
        var dataSource= this.SunRiseSet(year,month,day,latitude,longitude)
        return(
            <View>
            <WithLabel  label="values"/>
               <Text style={styles.label}> "this is the latest text" + this.dataSource</Text>
            <Text style={styles.label}>"this is another row of text which we can see what is happening" </Text>
            </View>
        )
    },

    SunRiseSet: function(year,month,day,latitude,longitude){
          // Based on method in sci.astro FAQ by Paul Schlyter
          // returns an array holding rise and set times in UTC hours
          // NOT accurate at high latitudes
          // latitude = your local latitude: north positive, south negative
          // longitude = your local longitude: east positive, west negative
          // Calculate the Suns position at noon local zone time

          var trig = new Trig();
          var d=this.dayno(year,month,day,12.0-longitude/15);
          var oblecl=23.4393-3.563E-7*d;
          var w=282.9404+4.70935E-5*d;
          var M=356.0470+0.9856002585*d;
          var e=0.016709-1.151E-9*d;

          var E=M+e*(180/Math.PI)*trig.sind(M)*(1.0+e*trig.cosd(M));
          var A=trig.cosd(E)-e;
          var B=Math.sqrt(1-e*e)*trig.sind(E);
          var slon=w+trig.atan2d(B,A);
          var sRA=trig.atan2d(trig.sind(slon)*trig.cosd(oblecl),trig.cosd(slon));
          while(sRA<0)sRA+=360; while(sRA>360)sRA-=360; sRA=sRA/15;
          var sDec=trig.asind(trig.sind(oblecl)*trig.sind(slon));
          // Time sun is on the meridian
          var lst=this.local_sidereal(year,month,day,12-longitude/15,longitude);
          var MT=12.0-longitude/15+sRA-lst;
          while(MT<0)MT+=24; while(MT>24)MT-=24;
          // hour angle
          var cHA0=(trig.sind(-0.8333333)-trig.sind(latitude)*trig.sind(sDec))/(trig.cosd(latitude)*trig.cosd(sDec));
          var HA0=trig.acosd(cHA0);
          HA0=trig.rev(HA0)/15;
          // return rise and set times
          return [(MT-HA0),(MT+HA0)];
        },

    SunRa: function(year,month,day,hours,latitude,longitude) {
          // Based on method in sci.astro FAQ by Paul Schlyter
          // returns the Sun's RA
          // NOT accurate at high latitudes
          // latitude = your local latitude: north positive, south negative
          // longitude = your local longitude: east positive, west negative
          // Calculate the Suns position at 'hours' local zone time
          var trig = new Trig();
          var d=this.dayno(year,month,day,hours-longitude/15);
          var oblecl=23.4393-3.563E-7*d;
          var w=282.9404+4.70935E-5*d;
          var M=356.0470+0.9856002585*d;
          var e=0.016709-1.151E-9*d;
          var E=M+e*(180/Math.PI)*trig.sind(M)*(1.0+e*trig.cosd(M));
          var A=trig.cosd(E)-e;
          var B=Math.sqrt(1-e*e)*trig.sind(E);
          var slon=w+ trig.atan2d(B,A);
          var sRA=trig.atan2d(trig.sind(slon)*trig.cosd(oblecl),trig.cosd(slon));
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
        },

    dayno: function(year,month,day,hours) {
            // Day number is a modified Julian date, day 0 is 2000 January 0.0
            // which corresponds to a Julian date of 2451543.5
            // Oct 2005 - found it does not handle century leap year rules i.e. thinks 2100 is a leap year

            // old version:
            //var d= 367*year-Math.floor(7*(year+Math.floor((month+9)/12))/4)+Math.floor((275*month)/9)+day-730530+hours/24;
            //return d;

            // new version:
            // from  function jd0(year,month,day) {
            // The Julian date at 0 hours UT at Greenwich
            var y  = year;
            var m = month;
        if (m < 3) {
            m += 12;
            y -= 1
        }
        var a = Math.floor(y/100);
            var b = 2-a+Math.floor(a/4);
            var j = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524.5;
            return j-2451543.5+hours/24;
        },
    local_sidereal: function(year,month,day,hours,lon) {
            // Compute local sidereal time in degrees
            // year, month, day and hours are the Greenwich date and time
            // lon is the observers longitude in degrees
            // 0.985647352 = 360 degrees / 365.2421926 <- length of the Tropical Year 2000(?) (equinox to equinox)
            // 98.9818 degrees = 6.59878666667 hours = 6h 35m 55.632s = GST on 2000 Jan 0.0 = JD 2451543.5
            var trig = new Trig();
            var d=this.dayno(year,month,day,hours);
            var lst=(98.9818+0.985647352*d+hours*15+lon);
            return trig.rev(lst)/15;
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
module.exports = SunView;