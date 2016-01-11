// Extensions to the Math routines - Trig routines in degrees
// modified from online available code

'use strict';
 
var React = require('react-native');

var RadPerDeg=Math.PI/180.0; 
var DegPerRad=180.0/Math.PI;

var Trig=({

      rev: function(deg){return deg-Math.floor(deg/360.0)*360.0;},
      sind: function(deg){return Math.sin(deg*RadPerDeg);},
      cosd: function(deg){return Math.cos(deg*RadPerDeg);},
      tand: function(deg){return Math.tan(deg*RadPerDeg);},
      asind: function(c){return Math.asin(c)*DegPerRad;},
      acosd: function(c){return Math.acos(c)*DegPerRad;},
      atan2d: function(y,x){return Math.atan(y/x)*DegPerRad-180.0*(x<0);},
      anglestring: function(a,circle) {
      // returns a in degrees as a string degrees:minutes
      // circle is true for range between 0 and 360 and false for -90 to +90
        var ar=Math.round(a*60)/60;
        var deg=Math.abs(ar);
        var min=Math.round(60.0*(deg-Math.floor(deg)));
        if (min >= 60) { deg+=1; min=0; }
        var anglestr="";
        if (!circle) anglestr+=(ar < 0 ? "-" : "+");
        if (circle) anglestr+=((Math.floor(deg) < 100) ? "0" : "" );
        anglestr+=((Math.floor(deg) < 10) ? "0" : "" )+Math.floor(deg);
        anglestr+=((min < 10) ? ":0" : ":" )+(min);
        return anglestr;
      },

      dround: function(number,X) {
      // rounds 'number' to X decimal places, defaults to 2
          X = (!X ? 2 : X);
          return Math.round(number*Math.pow(10,X))/Math.pow(10,X);
      }


})
module.exports = Trig;

