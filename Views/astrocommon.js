// Utility functions for astronomical programming.
// JavaScript by Peter Hayes http://www.aphayes.pwp.blueyonder.co.uk/
// now http://www.aphayes.pwp.blueyonder.co.uk/
// Copyright 2001-2003
// This code is made freely available but please keep this notice.
// I accept no liability for any errors in my coding but please
// let me know of any errors you find. My address is on my home page.
var Trig = require('./MMtrig')

class astro{

      leapyear(year) {
      	// new Oct 2005
        var leap=false;
        if (year % 4 == 0) leap = true;
        if (year % 100 ==0 ) leap = false;
        if (year % 400 == 0) leap = true;
        return leap;
      }
         
      jd0(year,month,day) {
      // The Julian date at 0 hours UT at Greenwich	
      	// new Oct 2005
        var y  = year;
        var m = month;
        if (m < 3) {m += 12; y -= 1};
        var a = Math.floor(y/100);
        var b = 2-a+Math.floor(a/4);
        var j = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524.5;
        return j;
      }

      dayno(year,month,day,hours) {
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
        if (m < 3) {m += 12; y -= 1};
        var a = Math.floor(y/100);
        var b = 2-a+Math.floor(a/4);
        var j = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524.5;
        return j-2451543.5+hours/24;
      }

      julian(year,month,day,hours) {
         return  this.dayno(year,month,day,hours)+2451543.5
      }

      jdtocd(jd) {
        // The calendar date from julian date
        // Returns year, month, day, day of week, hours, minutes, seconds
        var Z=Math.floor(jd+0.5);
        var F=jd+0.5-Z;
        if (Z < 2299161){
          var A=Z;
        } else {
          var alpha=Math.floor((Z-1867216.25)/36524.25);
          var A=Z+1+alpha-Math.floor(alpha/4);
        }
        var B=A+1524;
        var C=Math.floor((B-122.1)/365.25);
        var D=Math.floor(365.25*C);
        var E=Math.floor((B-D)/30.6001);
        var d=B-D-Math.floor(30.6001*E)+F;
        if (E < 14) {var month=E-1;} else {var month=E-13;}
        if ( month>2) {var year=C-4716;} else {var year=C-4715;}
        var day=Math.floor(d);
        var h=(d-day)*24;
        var hours=Math.floor(h);
        var m=(h-hours)*60;
        var minutes=Math.floor(m);
        var seconds=Math.round((m-minutes)*60);
        if (seconds >= 60) {minutes=minutes+1;seconds=seconds-60;}
        if (minutes >= 60) {hours=hours+1;minutes=0;}
        var dw=Math.floor(jd+1.5)-7*Math.floor((jd+1.5)/7);
        return new Array(year,month,day,dw,hours,minutes,seconds);  
      }

      local_sidereal(year,month,day,hours,lon) {
        // Compute local sidereal time in degrees
        // year, month, day and hours are the Greenwich date and time
        // lon is the observers longitude in degrees
        // 0.985647352 = 360 degrees / 365.2421926 <- length of the Tropical Year 2000(?) (equinox to equinox)
        // 98.9818 degrees = 6.59878666667 hours = 6h 35m 55.632s = GST on 2000 Jan 0.0 = JD 2451543.5
        var t = new Trig();
        var d=this.dayno(year,month,day,hours);
        var lst=(98.9818+0.985647352*d+hours*15+lon);
        return t.rev(lst)/15;
      }

      radtoaa(ra,dec,year,month,day,hours,lat,lon) {
        // convert ra and dec to altitude and azimuth
        // year, month, day and hours are the Greenwich date and time
        // lat and lon are the observers latitude and longitude
        var t = new Trig();
        var lst=this.local_sidereal(year,month,day,hours,lon);
        var x=t.cosd(15.0*(lst-ra))*t.cosd(dec);
        var y=t.sind(15.0*(lst-ra))*t.cosd(dec);
        var z=t.sind(dec);
        // rotate so z is the local zenith
        var xhor=x*t.sind(lat)-z*t.cosd(lat);
        var yhor=y;
        var zhor=x*t.cosd(lat)+z*t.sind(lat);
        var azimuth=t.rev(t.atan2d(yhor,xhor)+180.0); // so 0 degrees is north
        var altitude=t.atan2d(zhor,Math.sqrt(xhor*xhor+yhor*yhor));
        return new Array(altitude,azimuth);
      }
      //-----Calculate 24 Periodic Terms----------------------------------------------------
      // Meeus Astronmical Algorithms Chapter 27
      // added to library December 17, 2009 
      periodic24( T ) {
      	var A = new Array(485,203,199,182,156,136,77,74,70,58,52,50,45,44,29,18,17,16,14,12,12,12,9,8);
      	var B = new Array(324.96,337.23,342.08,27.85,73.14,171.52,222.54,296.72,243.58,119.81,297.17,21.02,
      			247.54,325.15,60.93,155.12,288.79,198.04,199.76,95.39,287.11,320.81,227.73,15.45);
      	var C = new Array(1934.136,32964.467,20.186,445267.112,45036.886,22518.443,
      			65928.934,3034.906,9037.513,33718.147,150.678,2281.226,
      			29929.562,31555.956,4443.417,67555.328,4562.452,62894.029,
      			31436.921,14577.848,31931.756,34777.259,1222.114,16859.074);
      	var S = 0;
      	for( var i=0; i<24; i++ ) { S += A[i]*cosd( B[i] + (C[i]*T) ); }
      	return S;
      } 
      adjust24( JDE0 ){
      	var T = ( JDE0 - 2451545.0) / 36525;
      	var W = 35999.373*T - 2.47;
      	var dL = 1 + 0.0334*cosd(W) + 0.0007*cosd(2*W);
      	var S = periodic24( T );
      	var JDE = JDE0 + ( (0.00001*S) / dL ); 	// Julian Emphemeris Days
        return JDE;
      }

}
module.exports = astro;


