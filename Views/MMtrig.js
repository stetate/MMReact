// Extensions to the Math routines - Trig routines in degrees
// modified from online available code

'use strict';

class Trig {

      constructor(){
      this.RadPerDeg=Math.PI/180.0; 
      this.DegPerRad=180.0/Math.PI;
      }

      rev(deg){
        return deg-Math.floor(deg/360.0)*360.0;
      };

      sind(deg){
        return Math.sin(deg*this.RadPerDeg);
      };

      cosd(deg){
        return Math.cos(deg*this.RadPerDeg);
      };

      tand(deg){
        return Math.tan(deg*this.RadPerDeg);
      };

      asind(c){
        return Math.asin(c)*this.DegPerRad;
      };

      acosd(c){
        return Math.acos(c)*this.DegPerRad;
      };

      atan2d(y,x){
        return Math.atan(y/x)*this.DegPerRad-180.0*(x<0);
      };

      anglestring(a,circle) {
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
      };

      dround(number,X) {
      // rounds 'number' to X decimal places, defaults to 2
          X = (!X ? 2 : X);
          return Math.round(number*Math.pow(10,X))/Math.pow(10,X);
      }


}
module.exports = Trig;