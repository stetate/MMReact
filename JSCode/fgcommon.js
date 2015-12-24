function fgtop(pgtitle,maile,links,debug) {
   var linkit = '';
   if (links=='yes') {
   	linkit = '<td valign="top" class="btiny">' +
		'<a href="../about/index.htm"><img alt="" src="../images/Baboutust.gif" style="border:0;width:105px;height:23px" id="lnk1" onmouseover="Mover(\'lnk1\');" onmouseout="Mout(\'lnk1\');"><\/a> ' +
		//'<a href="../biorhythm/index.htm"><img alt="" src="../images/Bbiorhythmt.gif" style="border:0;width:105px;height:23px" id="lnk2" onmouseover="Mover(\'lnk2\');" onmouseout="Mout(\'lnk2\');"><\/a> ' +
		'<a href="../definition/index.htm"><img alt="" src="../images/Bdefinitiont.gif" style="border:0;width:105px;height:23px" id="lnk16" onmouseover="Mover(\'lnk16\');" onmouseout="Mout(\'lnk16\');"><\/a> ' +
		'<a href="../darksky/index.htm"><img alt="" src="../images/Bdarkskyt.gif" style="border:0;width:105px;height:23px" id="lnk17" onmouseover="Mover(\'lnk17\');" onmouseout="Mout(\'lnk17\');"><\/a> ' +
		'<a href="../elements/index.htm"><img alt="" src="../images/Belementst.gif" style="border:0;width:105px;height:23px" id="lnk3" onmouseover="Mover(\'lnk3\');" onmouseout="Mout(\'lnk3\');"><\/a> ' +
		'<a href="../faqs/index.htm"><img alt="" src="../images/Bfaqst.gif" style="border:0;width:105px;height:23px" id="lnk4" onmouseover="Mover(\'lnk4\');" onmouseout="Mout(\'lnk4\');"><\/a> ' +
		'<a href="../files/index.htm"><img alt="" src="../images/Bfilest.gif" style="border:0;width:105px;height:23px" id="lnk5" onmouseover="Mover(\'lnk5\');" onmouseout="Mout(\'lnk5\');"><\/a> ' +
		'<a href="../holiday/index.htm"><img alt="" src="../images/Bholidayt.gif" style="border:0;width:105px;height:23px" id="lnk6" onmouseover="Mover(\'lnk6\');" onmouseout="Mout(\'lnk6\');"><\/a> ' +
		'<a href="../index.html"><img alt="" src="../images/Bhomet.gif" style="border:0;width:105px;height:23px" id="lnk7" onmouseover="Mover(\'lnk7\');" onmouseout="Mout(\'lnk7\');"><\/a> ' +
		'<a href="../howto/index.htm"><img alt="" src="../images/Bhowtot.gif" style="border:0;width:105px;height:23px" id="lnk8" onmouseover="Mover(\'lnk8\');" onmouseout="Mout(\'lnk8\');"><\/a> ' +
		//'<a href="../rfi/index.htm"><img alt="" src="../images/Binformationt.gif" style="border:0;width:105px;height:23px" id="lnk9" onmouseover="Mover(\'lnk9\');" onmouseout="Mout(\'lnk9\');"><\/a> ' +
		'<a href="../laws/index.htm"><img alt="" src="../images/Blawst.gif" style="border:0;width:105px;height:23px" id="lnk10" onmouseover="Mover(\'lnk10\');" onmouseout="Mout(\'lnk10\');"><\/a> ' +
		//'<a href="../fglinks/index.htm"><img alt="" src="../images/Blinkst.gif" style="border:0;width:105px;height:23px" id="lnk11" onmouseover="Mover(\'lnk11\');" onmouseout="Mout(\'lnk11\');"><\/a> ' +
		'<a href="../logo/index.htm"><img alt="" src="../images/Blogot.gif" style="border:0;width:105px;height:23px" id="lnk12" onmouseover="Mover(\'lnk12\');" onmouseout="Mout(\'lnk12\');"><\/a> ' +
		'<a href="../schedule/index.htm"><img alt="" src="../images/Bschedulet.gif" style="border:0;width:105px;height:23px" id="lnk13" onmouseover="Mover(\'lnk13\');" onmouseout="Mout(\'lnk13\');"><\/a> ' +
		'<a href="../storm/index.htm"><img alt="" src="../images/Bstormt.gif" style="border:0;width:105px;height:23px" id="lnk14" onmouseover="Mover(\'lnk14\');" onmouseout="Mout(\'lnk14\');"><\/a> ' +
		'<a href="../clock/index.htm"><img alt="" src="../images/Bclockt.gif" style="border:0;width:105px;height:23px" id="lnk15" onmouseover="Mover(\'lnk15\');" onmouseout="Mout(\'lnk15\');"><\/a> ' +
		'</td>\n';
   }
	var ftop = '<div class="coaddr"><a name="top"><\/a>' +
	'<span class="coname">Larry McNish<\/span>\n' +
	'<table border="0" summary="Address and Links" class="binfo">\n' +
  linkit +
   '<\/tr><\/table>\n' +
	'<a href="Javascript:history.back()">Back<\/a><br>\n' +
	'<span class="btitle"><br>' + pgtitle + '<br><br><\/span><\/div>\n';
	document.write(ftop);
   if (debug=='yes') {
       document.JavaScriptTop.JavaScriptTopTxt.value=ftop;
   }
}
function fgbot(ctrname,pgdate,validators,browsers,maile,debug) {
	var validation = '';
   var browserlnks = '';
	var mailit = '';

	if (pgdate==' ') {
   	var dateObj = new Date(document.lastModified);
		//var fyear = dateObj.getYear()
		//if (fyear<2000){fyear=fyear+1900};
   	pgdate= //new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday')[dateObj.getDay()]+', '+
       new Array('January','February','March','April','May','June','July','August','September','October','November','December')[dateObj.getMonth()]+' '+
       dateObj.getDate()+', '+dateObj.getFullYear();
   }
   
   if (validators.slice(0,3)=='yes') {
		if (validators=='yesx') {
           validation = '<a href="http://validator.w3.org/check/referer"><img src="../images/valid-xhtml10.gif" alt="Valid XHTML 1.0 Strict!" style="border:0;width:88px;height:31px"><\/a>';
		}
       else {
           validation = '<a href="http://validator.w3.org/check/referer"><img src="../images/valid-html401.gif" alt="Valid HTML 4.01!" style="border:0;width:88px;height:31px"><\/a>';
       }
       validation += '&nbsp;<a href="http://jigsaw.w3.org/css-validator/validator?uri=' + location.href + '"><img src="../images/valid-css.gif" alt="Valid CSS!" style="border:0;width:88px;height:31px"><\/a>' +
		'&nbsp;<a href="http://validator.w3.org/checklink?uri=' + location.href + '"><img src="../images/valid-links.gif" alt="Valid Links!" style="border:0;width:88px;height:31px"><\/a>';
	}
	if (browsers=='yes') {
		browserlnks = '<a href="http://www.microsoft.com/windows/ie/downloads/default.asp"><img src="../images/explorer.gif" alt="Get Internet Explorer" style="border:0;width:88px;height:31px"></a>' +
		'&nbsp;<a href="http://wp.netscape.com/download/index.html"><img src="../images/netscape.gif" alt="Get Netscape Navigator" style="border:0;width:90px;height:30px"></a>';
	}
	if (maile=='yes') {
		var mailit = '<br><img src="../images/mmm2.gif" alt="Please type this address in." style="border:0;width:132px;height:17px">'
	}
	var fbot = '<div class="cofoot">' +
	'<a href="#top">Top<\/a><br>\n' +
	'<a href="Javascript:history.back()">Back<\/a><br>\n' +
	'<hr>\n' +
	'<\/div>\n' +
	'<div class="cofootc">Copyright &copy; 2004-2015 Larry McNish All rights reserved.<br>\n' +
	 mailit + '<br>\n' +
	'<span class="copage">Page last updated: ' + pgdate + '<br></span>\n' +
	validation + browserlnks + '\n' +
	'<\/div>\n';
	document.write(fbot);
   if (debug=='yes') {
       document.JavaScriptBot.JavaScriptBotTxt.value=fbot;
   }
}

function Mover(imageName) {
   document.images[imageName].src = document.images[imageName].src.slice(0,-4) + 'o.gif'; //'../images/' + imageName + 'o.gif';
}

function Mout(imageName) {
	document.images[imageName].src = document.images[imageName].src.slice(0,-5) + '.gif'; //'../images/' + imageName + '.gif';
}

