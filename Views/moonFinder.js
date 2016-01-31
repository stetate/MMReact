// JavaScript by Peter Hayes http://www.aphayes.pwp.blueyonder.co.uk/
// Copyright 2001-2003
// This code is made freely available but please keep this notice.
// The calculations are approximate but should be good enough for general use,
// I accept no responsibility for errors in astronomy or coding.

// WARNING moonrise code changed on 6 May 2003 to correct a systematic error 
// these are now local times NOT UTC as the original code did.

// Meeus first edition table 45.A Longitude and distance of the moon

var Trig = require('./MMtrig');
var Astro = require('./astrocommon')

class moonFinder{

        constructor(){
          this.T45AD = new Array(0, 2, 2, 0, 0, 0, 2, 2, 2, 2,
                               0, 1, 0, 2, 0, 0, 4, 0, 4, 2,
                               2, 1, 1, 2, 2, 4, 2, 0, 2, 2,
                               1, 2, 0, 0, 2, 2, 2, 4, 0, 3,
                               2, 4, 0, 2, 2, 2, 4, 0, 4, 1,
                               2, 0, 1, 3, 4, 2, 0, 1, 2, 2);

          this.T45AM = new Array(0,  0,  0,  0,  1,  0,  0, -1,  0, -1,
                               1,  0,  1,  0,  0,  0,  0,  0,  0,  1,
                               1,  0,  1, -1,  0,  0,  0,  1,  0, -1,
                               0, -2,  1,  2, -2,  0,  0, -1,  0,  0,
                               1, -1,  2,  2,  1, -1,  0,  0, -1,  0,
                               1,  0,  1,  0,  0, -1,  2,  1,  0,  0);

          this.T45AMP = new Array( 1, -1,  0,  2,  0,  0, -2, -1,  1,  0,
                                -1,  0,  1,  0,  1,  1, -1,  3, -2, -1,
                                 0, -1,  0,  1,  2,  0, -3, -2, -1, -2,
                                 1,  0,  2,  0, -1,  1,  0, -1,  2, -1,
                                 1, -2, -1, -1, -2,  0,  1,  4,  0, -2,
                                 0,  2,  1, -2, -3,  2,  1, -1,  3, -1);

         this.T45AF  = new Array( 0,  0,  0,  0,  0,  2,  0,  0,  0,  0,
                                 0,  0,  0, -2,  2, -2,  0,  0,  0,  0,
                                 0,  0,  0,  0,  0,  0,  0,  0,  2,  0,
                                 0,  0,  0,  0,  0, -2,  2,  0,  2,  0,
                                 0,  0,  0,  0,  0, -2,  0,  0,  0,  0,
                                -2, -2,  0,  0,  0,  0,  0,  0,  0, -2);

         this.T45AL = new Array(6288774, 1274027, 658314, 213618, -185116,
                               -114332,   58793,  57066,  53322,   45758,
                                -40923,  -34720, -30383,  15327,  -12528,
                                 10980,   10675,  10034,   8548,   -7888,
                                 -6766,   -5163,   4987,   4036,    3994,
                                  3861,    3665,  -2689,  -2602,    2390,
                                 -2348,    2236,  -2120,  -2069,    2048,
                                 -1773,   -1595,   1215,  -1110,    -892,
                                  -810,     759,   -713,   -700,     691,
                                   596,     549,    537,    520,    -487,
                                  -399,    -381,    351,   -340,     330,
                                   327,    -323,    299,    294,       0);

         this.T45AR = new Array(-20905355, -3699111, -2955968, -569925,   48888,
                                   -3149,   246158,  -152138, -170733, -204586,
                                 -129620,   108743,   104755,   10321,       0,
                                   79661,   -34782,   -23210,  -21636,   24208,
                                   30824,    -8379,   -16675,  -12831,  -10445,
                                  -11650,    14403,    -7003,       0,   10056,
                                    6322,    -9884,     5751,       0,   -4950,
                                    4130,        0,    -3958,       0,    3258,
                                    2616,    -1897,    -2117,    2354,       0,
                                       0,    -1423,    -1117,   -1571,   -1739,
                                       0,    -4421,        0,       0,       0,
                                       0,     1165,        0,       0,    8752);

         this.T45BD = new Array(0, 0, 0, 2, 2, 2, 2, 0, 2, 0,
                               2, 2, 2, 2, 2, 2, 2, 0, 4, 0,
                               0, 0, 1, 0, 0, 0, 1, 0, 4, 4,
                               0, 4, 2, 2, 2, 2, 0, 2, 2, 2,
                               2, 4, 2, 2, 0, 2, 1, 1, 0, 2,
                               1, 2, 0, 4, 4, 1, 4, 1, 4, 2);

         this.T45BM = new Array( 0,  0,  0,  0,  0,  0,  0, 0,  0,  0,
                               -1,  0,  0,  1, -1, -1, -1, 1,  0,  1,
                                0,  1,  0,  1,  1,  1,  0, 0,  0,  0,
                                0,  0,  0,  0, -1,  0,  0, 0,  0,  1,
                                1,  0, -1, -2,  0,  1,  1, 1,  1,  1,
                                0, -1,  1,  0, -1,  0,  0, 0, -1, -2);

         this.T45BMP = new Array(0,  1, 1,  0, -1, -1,  0,  2,  1,  2,
                                0, -2, 1,  0, -1,  0, -1, -1, -1,  0,
                                0, -1, 0,  1,  1,  0,  0,  3,  0, -1,
                                1, -2, 0,  2,  1, -2,  3,  2, -3, -1,
                                0,  0, 1,  0,  1,  1,  0,  0, -2, -1,
                                1, -2, 2, -2, -1,  1,  1, -1,  0,  0);

         this.T45BF = new Array( 1,  1, -1, -1,  1, -1,  1,  1, -1, -1,
                               -1, -1,  1, -1,  1,  1, -1, -1, -1,  1,
                                3,  1,  1,  1, -1, -1, -1,  1, -1,  1,
                               -3,  1, -3, -1, -1,  1, -1,  1, -1,  1,
                                1,  1,  1, -1,  3, -1, -1,  1, -1, -1,
                                1, -1,  1, -1, -1, -1, -1, -1, -1,  1);

         this.T45BL = new Array(5128122, 280602, 277693, 173237, 55413,
                                 46271,  32573,  17198,   9266,  8822,
                                  8216,   4324,   4200,  -3359,  2463,
                                  2211,   2065,  -1870,   1828, -1794,
                                 -1749,  -1565,  -1491,  -1475, -1410,
                                 -1344,  -1335,   1107,   1021,   833,
                                   777,    671,    607,    596,   491,
                                  -451,    439,    422,    421,  -366,
                                  -351,    331,    315,    302,  -283,
                                  -229,    223,    223,   -220,  -220,
                                  -185,    181,   -177,    176,   166,
                                  -164,    132,   -119,    115,   107);
        }

// MoonPos calculates the Moon position, based on Meeus chapter 45

        MoonPos(year,month,day,hours) {
          // julian date
          var t = new Trig();
          var astro = new Astro();
          var jd=astro.julian(year,month,day,hours);
          var T=(jd-2451545.0)/36525;
          var T2=T*T;
          var T3=T2*T;
          var T4=T3*T;
          // Moons mean longitude L'
          var LP=218.3164477+481267.88123421*T-0.0015786*T2+T3/538841.0-T4/65194000.0;
          // Moons mean elongation
          var D=297.8501921+445267.1114034*T-0.0018819*T2+T3/545868.0-T4/113065000.0;
          // Suns mean anomaly
          var M=357.5291092+35999.0502909*T-0.0001536*T2+T3/24490000.0;
          // Moons mean anomaly M'
          var MP=134.9633964+477198.8675055*T+0.0087414*T2+T3/69699.0-T4/14712000.0;
          // Moons argument of latitude
          var F=93.2720950+483202.0175233*T-0.0036539*T2-T3/3526000.0+T4/863310000.0;

          // Additional arguments
          var A1=119.75+131.849*T;
          var A2=53.09+479264.290*T;
          var A3=313.45+481266.484*T;
          var E=1-0.002516*T-0.0000074*T2;
          var E2=E*E;
          // Sums of periodic terms from table 45.A and 45.B
          var Sl=0.0;
          var Sr=0.0;
          for (var i=0; i<60; i++) {
            var Eterm=1;
            if (Math.abs(this.T45AM[i])==1) Eterm=E;
            if (Math.abs(this.T45AM[i])==2) Eterm=E2;
            Sl+=this.T45AL[i]*Eterm*t.sind(t.rev(this.T45AD[i]*D+this.T45AM[i]*M+this.T45AMP[i]*MP+this.T45AF[i]*F));
            Sr+=this.T45AR[i]*Eterm*t.cosd(t.rev(this.T45AD[i]*D+this.T45AM[i]*M+this.T45AMP[i]*MP+this.T45AF[i]*F));
          }
          var Sb=0.0;
          for (var i=0; i<60; i++) {
            var Eterm=1;
            if (Math.abs(this.T45BM[i])==1) Eterm=E;
            if (Math.abs(this.T45BM[i])==2) Eterm=E2;
            Sb+=this.T45BL[i]*Eterm*t.sind(t.rev(this.T45BD[i]*D+this.T45BM[i]*M+this.T45BMP[i]*MP+this.T45BF[i]*F));
          }
          // Additional additive terms
          Sl=Sl+3958*t.sind(t.rev(A1))+1962*t.sind(t.rev(LP-F))+318*t.sind(t.rev(A2));
          Sb=Sb-2235*t.sind(t.rev(LP))+382*t.sind(t.rev(A3))+175*t.sind(t.rev(A1-F))+
             175*t.sind(t.rev(A1+F))+127*t.sind(t.rev(LP-MP))-115*t.sind(t.rev(LP+MP));
          // geocentric longitude, latitude and distance
          var mglong=t.rev(LP+Sl/1000000.0);
          var mglat=t.rev(Sb/1000000.0);
          if (mglat > 180.0) mglat=mglat-360;
          var mr=Math.round(385000.56+Sr/1000.0);
          // Obliquity of Ecliptic
          var obl=23.4393-3.563E-7*(jd-2451543.5);
          // RA and dec
          var ra=t.rev(t.atan2d(t.sind(mglong)*t.cosd(obl)-t.tand(mglat)*t.sind(obl),
                            t.cosd(mglong)))/15.0;
          var dec=t.rev(t.asind(t.sind(mglat)*t.cosd(obl)+t.cosd(mglat)*t.sind(obl)*t.sind(mglong)));
          if (dec > 180.0) dec=dec-360;
          return new Array(ra,dec,mr);
        };

        MoonRise(year,month,day,TZ,latitude,longitude) {
          // returns an array containing rise and set times or one of the
          // following codes.
          // -1 rise or set event not found and moon was down at 00:00
          // -2 rise or set event not found and moon was up   at 00:00
          // WARNING code changes on 6/7 May 2003 these are now local times
          // NOT UTC and rise/set not found codes changed.
          var hours=0;
          var riseset=new Array();
          // elh is the elevation at the hour elhdone is true if elh calculated
          var elh=new Array();
          var elhdone=new Array();
          for (var i=0; i<=24; i++) {elhdone[i]=false;}
          // Compute the moon elevation at start and end of day
          // store elevation at the hours in an array elh to save search time
          var rad=MoonPos(year,month,day,hours-TZ);
          var altaz=radtoaa(rad[0],rad[1],year,month,day,hours-TZ,latitude,longitude);
          elh[0]=altaz[0]; elhdone[0]=true;
          // set the return code to allow for always up or never rises
          if (elh[0] >= 0.0) {
            riseset=new Array(-2,-2);
          } else {
            riseset=new Array(-1,-1);
          }  
          hours=24;
          rad=MoonPos(year,month,day,hours-TZ);
          altaz=radtoaa(rad[0],rad[1],year,month,day,hours-TZ,latitude,longitude);
          elh[24]=altaz[0]; elhdone[24]=true;
          // search for moonrise and set
          for (var rise=0; rise<2; rise++) {
             var found=false;
             var hfirst=0;
             var hlast=24;
             // Try a binary chop on the hours to speed the search
             while (Math.ceil((hlast-hfirst)/2) > 1) {
               var hmid=hfirst+Math.round((hlast-hfirst)/2);
               if (!elhdone[hmid]) {
                 hours=hmid;
                 rad=MoonPos(year,month,day,hours-TZ);
                 altaz=radtoaa(rad[0],rad[1],year,month,day,hours-TZ,latitude,longitude);
                 elh[hmid]=altaz[0]; elhdone[hmid]=true;
               }
               if (((rise == 0) && (elh[hfirst] <= 0.0) && (elh[hmid] >= 0.0)) ||
                   ((rise == 1) && (elh[hfirst] >= 0.0) && (elh[hmid] <= 0.0))) {
                 hlast=hmid; found=true; continue;
               }
               if (((rise == 0) && (elh[hmid] <= 0.0) && (elh[hlast] >= 0.0)) ||
                   ((rise == 1) && (elh[hmid] >= 0.0) && (elh[hlast] <= 0.0))) {
                 hfirst=hmid; found=true; continue;
               }
               break;
             }
             // If the binary chop did not find a 1 hour interval
             if ((hlast-hfirst) > 1) {
               for (var i=hfirst; i<hlast; i++) {
                 found=false;
                 if (!elhdone[i+1]) {
                   hours=i+1;
                   rad=MoonPos(year,month,day,hours-TZ);
                   altaz=radtoaa(rad[0],rad[1],year,month,day,hours-TZ,latitude,longitude);
                   elh[hours]=altaz[0]; elhdone[hours]=true;
                 }
                 if (((rise == 0) && (elh[i] <= 0.0) && (elh[i+1] >= 0.0)) ||
                     ((rise == 1) && (elh[i] >= 0.0) && (elh[i+1] <= 0.0))) {
                   hfirst=i; hlast=i+1; found=true; break;
                 }
               }
             }
             // simple linear interpolation for the minutes
             if (found) {
               var elfirst=elh[hfirst]; var ellast=elh[hlast];
               hours=hfirst+0.5;
               rad=MoonPos(year,month,day,hours-TZ);
               altaz=radtoaa(rad[0],rad[1],year,month,day,hours-TZ,latitude,longitude);
               // alert("day ="+day+" hour ="+hours+" altaz="+altaz[0]+" "+altaz[1]);
               if ((rise == 0) && (altaz[0] <= 0.0)) {hfirst=hours; elfirst=altaz[0];}
               if ((rise == 0) && (altaz[0] > 0.0)) {hlast=hours; ellast=altaz[0];}
               if ((rise == 1) && (altaz[0] <= 0.0)) {hlast=hours; ellast=altaz[0];}
               if ((rise == 1) && (altaz[0] > 0.0)) {hfirst=hours; elfirst=altaz[0];}
               var eld=Math.abs(elfirst)+Math.abs(ellast);
               riseset[rise]=hfirst+(hlast-hfirst)*Math.abs(elfirst)/eld;
             }
          } // End of rise/set loop
          return(riseset);
        };

        MoonPhase(year,month,day) {
          // the illuminated percentage from Meeus chapter 46
          var j=dayno(year,month,day,12)+2451543.5;
          var T=(j-2451545.0)/36525;
          var T2=T*T;
          var T3=T2*T;
          var T4=T3*T;
          // Moons mean elongation Meeus second edition
          var D=297.8501921+445267.1114034*T-0.0018819*T2+T3/545868.0-T4/113065000.0; 
          // Moons mean anomaly M' Meeus second edition
          var MP=134.9633964+477198.8675055*T+0.0087414*T2+T3/69699.0-T4/14712000.0;
          // Suns mean anomaly
          var M=357.5291092+35999.0502909*T-0.0001536*T2+T3/24490000.0;
          // phase angle
          var pa=180.0-D-6.289*sind(MP)+2.1*sind(M)-1.274*sind(2*D-MP)
                 -0.658*sind(2*D)-0.214*sind(2*MP)-0.11*sind(D);
          return(rev(pa));
        };

        moons(year,moondates,moonphases) {
          // Returns the Julian dates (including time) for New and Full Moons.
          // Julian dates returned may be before and after the year requested. (e.g. 2 before and 2 after)
          // Converted from Basic Sky & Telescope, March, 1985
          // Basic program and javascript program agree within 13 seconds for all of 2005 (due to precision differences)
          // Results for 2005 agree with RASC Handbook for January, and within 2 minutes for December and within 5 min for 40 years
          // Modified to return First Quarter and Last Quarter as well - RLM Jan 2005 - modification removed - no good
          //var moondates=new Array();
          //var moonphases=new Array();
          var R1=Math.PI/180; // rad per degree, extra precision in javascript (0.01745329 vs	0.0174532925199432)
          var U=false;
          var Y=year;
          var JDmin = julian(year,1,1,0); // returned dates must be >= this
          var JDmax = julian(year+1,1,1,0); // returned dates must be < this
          var K0=Math.floor((Y-1900)*12.3685); // 1298   Av Julian year(365.25000d)/Synodic month(29.530589d)=12.3685308139299
          var T=(Y-1899.5)/100;	// 1.055
          var T2=T*T;	 // 1.113025
          var T3=T*T*T; // 1.174241[3749999900] extra precision in javascript
          var J0=2415020+29*K0;	// JD 2415020 is 1899-12-31 12:00:00  J0=2452662.0 = 2003-01-22 12:00:00 for Y=2005
          var F0=0.0001178*T2-0.000000155*T3;
              F0=F0+0.75933+0.53058868*K0;
              F0=F0-0.000837*T-0.000335*T2; // 689.4623	vs 689.4623116739620000
          var M0=K0*0.08084821133;
          M0=360*(M0-Math.floor(M0))+359.2242;
          M0=M0-0.0000333*T2;
          M0=M0-0.00000347*T3;	// 697.9766	vs 697.9763491440490000
          var M1=K0*0.07171366128;
          M1=360*(M1-Math.floor(M1))+306.0253;
          M1=M1+0.0107306*T2;
          M1=M1+0.00001236*T3; // 336.3979 vs	336.3969008580840000
          var B1=K0*0.08519585128;
          B1=360*(B1-Math.floor(B1))+21.2964;
          B1=B1-0.0016528*T2;
          B1=B1-0.00000239*T3; // 231.6113 vs	231.6119437042420000
          var i=0; // returns number of values in arrays
          for (var K9=0; K9<=28; K9+=1) {
          //for (var K9=0; K9<=28; K9+=0.5) { // BOGUS modification for quarter phases
            var J=J0+14*K9;
            var F=F0+0.765294*K9;
            var K=K9/2;
            var M5=(M0+K*29.10535608)*R1;
            var M6=(M1+K*385.81691806)*R1;
            var B6=(B1+K*390.67050646)*R1;
            F=F-0.4068*Math.sin(M6);
            F=F+(0.1734-0.000393*T)*Math.sin(M5);
            F=F+0.0161*Math.sin(2*M6);
            F=F+0.0104*Math.sin(2*B6);
            F=F-0.0074*Math.sin(M5-M6);
            F=F-0.0051*Math.sin(M5+M6);
            F=F+0.0021*Math.sin(2*M5);
            F=F+0.0010*Math.sin(2*B6-M6);
            //F=F+0.5/1440; // adds 1/2 minute for proper rounding to minutes per Sky and Tel article  
            J=J+F;
            if ((J>=JDmin) && (J<JDmax)) { // return 23 or 24 values for this year only
            moondates[i]=J;
        /*    if ((K9-Math.floor(K9))>0) {
            	if (!U) {
               	moonphases[i]='LQ'; // 1/2 K, Last Quarter
               }
               else {
               	moonphases[i]='FQ'; // 1/2 K, First Quarter
               }
            }
            else {    */
            	if (!U) {
               	moonphases[i]='NM'; // full K, New Moon
               }
               else {
               	moonphases[i]='FM'; // full K, Full Moon
               }
            //U=!U; // inside bogus else clause
            /* }  */
            i+=1;
          	} // end of test for year
           U=!U; // always negate
          }
          //return moondates;
          return i-1;
        };

}

module.exports = moonFinder;


