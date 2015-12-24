// Extensions to the Math routines - Trig routines in degrees
// JavaScript by Peter Hayes http://www.aphayes.pwp.blueyonder.co.uk/
// Copyright 2001-2003
// optimized L. McNish Jan 2005

var RadPerDeg=Math.PI/180.0; 
var DegPerRad=180.0/Math.PI;

function rev(deg){return deg-Math.floor(deg/360.0)*360.0;}
function sind(deg){return Math.sin(deg*RadPerDeg);}
function cosd(deg){return Math.cos(deg*RadPerDeg);}
function tand(deg){return Math.tan(deg*RadPerDeg);}
function asind(c){return Math.asin(c)*DegPerRad;}
function acosd(c){return Math.acos(c)*DegPerRad;}
function atan2d(y,x){return Math.atan(y/x)*DegPerRad-180.0*(x<0);}

//function rev(angle){return angle-Math.floor(angle/360.0)*360.0;}
//function sind(angle){return Math.sin((angle*Math.PI)/180.0);}
//function cosd(angle){return Math.cos((angle*Math.PI)/180.0);}
//function tand(angle){return Math.tan((angle*Math.PI)/180.0);}
//function asind(c){return (180.0/Math.PI)*Math.asin(c);}
//function acosd(c){return (180.0/Math.PI)*Math.acos(c);}
//function atan2d(y,x){return (180.0/Math.PI)*Math.atan(y/x)-180.0*(x<0);}

function anglestring(a,circle) {
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
}

function dround(number,X) {
// rounds 'number' to X decimal places, defaults to 2
    X = (!X ? 2 : X);
    return Math.round(number*Math.pow(10,X))/Math.pow(10,X);
}

