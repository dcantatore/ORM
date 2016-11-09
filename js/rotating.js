//You need to specify your variables that will have the image and outgoing link such as -
var adOne = '<center><a href="http://yourlink.com" target="_blank"><img src="/images/yourPic.jpg"> </a></center>';
var adTwo = '<center><a href="http://yourlink.com" target="_blank"><img src="/images/yourPic.jpg"> </a></center>';
var adThree = '<center><a href="http://yourlink.com" target="_blank"><img src="/images/yourPic.jpg"> </a></center>';
// You can do this with a template literal inside of an array but I was staying off literals to be safe on all platforms


// this is meant to insert an add at random on execution of the script, into the adHold div
// The numbers chosen to randomize are based on extensive script testing to find the most even distribution 
// Math.random tends to skew very slightly to the low end so I shaved a point off the bottom

(function insertRandomAd(){
    var x = Math.random() * 2 ;
    if( x >= 1.34){
        document.getElementById("adHold").innerHTML += adOne;
    }
    if (x >= .66 && x <= 1.33){
        document.getElementById("adHold").innerHTML += adTwo;
    }
    if(x <= .65){
    	// if one company had two ads it wanted to randomize its spot between
    	var y = Math.random();
    	if (y >= .5){
        document.getElementById("adHold").innerHTML += adThree;
        }
        else {
        document.getElementById("adHold").innerHTML += adFour;
        }
    }
})()
