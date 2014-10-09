// global try/catch
// if the catch doesn't catch your mistake open the html in chrome
// and use the debugger, that will usually find your coding mistake
try {

////////////////////////////////////////////////////////////////////////////////
// GLOBALS
////////////////////////////////////////////////////////////////////////////////
var csInterface = new CSInterface();

var quick = window.document.getElementById( 'quick' );
var freistellen = window.document.getElementById( 'freistellen' );

var btn1 = window.document.getElementById( 'btn1' );
var btn2 = window.document.getElementById( 'btn2' );
var btn3 = window.document.getElementById( 'btn3' );
var btn4 = window.document.getElementById( 'btn4' );
var btn5 = window.document.getElementById( 'btn5' );
var btn6 = window.document.getElementById( 'btn6' );
var btn7 = window.document.getElementById( 'btn7' );
var btn8 = window.document.getElementById( 'btn8' );
var btn9 = window.document.getElementById( 'btn9' );

var btn11 = window.document.getElementById( 'btn11' );
var btn22 = window.document.getElementById( 'btn22' );
var btn33 = window.document.getElementById( 'btn33' );
var btn44 = window.document.getElementById( 'btn44' );
var btn55 = window.document.getElementById( 'btn55' );
var btn66 = window.document.getElementById( 'btn66' );
var btn77 = window.document.getElementById( 'btn77' );
var btn88 = window.document.getElementById( 'btn88' );
var btn99 = window.document.getElementById( 'btn99' );



////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////


quick.onclick = function() {
    csInterface.evalScript("quicksmart();");
};
freistellen.onclick = function() {
    csInterface.evalScript("freistellen();");
};

btn1.onclick = function() {
	csInterface.evalScript("jetzt();");
};
btn2.onclick = function() {
	csInterface.evalScript("cline();");
};
btn3.onclick = function() {
    csInterface.evalScript("bd();");
};
btn4.onclick = function() {
    csInterface.evalScript("dvd();");
};
btn5.onclick = function() {
    csInterface.evalScript("bkaufen();");
};
btn6.onclick = function() {
    csInterface.evalScript("tt();");
};
btn7.onclick = function() {
    csInterface.evalScript("subline();");
};
btn8.onclick = function() {
    csInterface.evalScript("cite();");
};
btn9.onclick = function() {
    csInterface.evalScript("bg();");
};

btn11.onclick = function() {
    csInterface.evalScript("jetzt_smart();");
};
btn22.onclick = function() {
    csInterface.evalScript("cline_smart();");
};
btn33.onclick = function() {
    csInterface.evalScript("bd_smart();");
};
btn44.onclick = function() {
    csInterface.evalScript("dvd_smart();");
};
btn55.onclick = function() {
    csInterface.evalScript("bkaufen_smart();");
};
btn66.onclick = function() {
    csInterface.evalScript("tt_smart();");
};
btn77.onclick = function() {
    csInterface.evalScript("subline_smart();");
};
btn88.onclick = function() {
    csInterface.evalScript("cite_smart();");
};
btn99.onclick = function() {
    csInterface.evalScript("bg_smart();");
};

} catch( e ) {
	alert( e );
}

// end main.js
