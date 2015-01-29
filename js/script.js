$(document).ready(function(){



	

//testing passing in variables

	var mouse = "RRRRRRRRRRRRRRRRRR";
	var armpit = "testfoo";

	$('#title').append("<div id='"+armpit+"'>"+mouse+"</div>");

//---name, sciName, imgId, pic, info, sound---

//Testing creating an object below

	function frog(name, sciName, imgId, pic, sound, info) {
    this.name = name;
    this.sciName = sciName;
    this.imgId= imgId
    this.pic = pic;
    this.info = info;
    this.sound = sound;
    //this.audio = audio:
}

// testing calling a property from an object
var frankFrog = new frog (
	"frank the frog", 
	"alpha-frank", 
	"images/Greenfrog1.jpg", 
	"info")


$('#title').append("<div>"+frankFrog.name+"</div>");	


/*-------template for adding frogs----------

var z = new frog (
	"name", 
	"sciName", 
	"imgId",
	"pic",  
	"sound",
	"info");

------------template end-----------*/

//frog objects
var Americanbullfrog = new frog (
	"American bullfrog", 
	"Rana catesbeiana", 
	"Americanbullfrog",
	"images/Americanbullfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/bullfrog.wav",
	"info");

var Americantoad = new frog (
	"American toad", 
	"Bufo americanus", 
	"Americantoad",
	"images/Americantoad1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/american_toad.wav",
	"info");


var Carpenterfrog = new frog (
	"Carpenter frog", 
	"Rana virgatipes", 
	"Carpenterfrog",
	"images/Carpenterfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/carpenter_frog.wav",
	"info");

var Easternspadefoot = new frog (
	"Eastern spadefoot toad", 
	"Scaphiopus h. holbrookii", 
	"Easternspadefoot",
	"images/EasternSpadefoot1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/spadefoot_toad.wav",
	"info");

var z = new frog (
	"name", 
	"sciName", 
	"imgId",
	"pic",  
	"sound",
	"info");

var z = new frog (
	"name", 
	"sciName", 
	"imgId",
	"pic",  
	"sound",
	"info");

//test turning modal in to a jquary event
//$('#frog-contain').click(function(){
	
	//$('#kingModal').html('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" id="closeStyle" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button><h4 class="modal-title" id="myModalLabel">Street Name</h4></div><div class="modal-body"><div id="workFucker"><p class="popSci-Name">(Sci-Name)</p><div class="frogpic"><img id="Americanbullfrog"src="images/Americanbullfrog1.jpg"><div id="play-button"><div id="triangle-right"></div></div></div><p class="info">This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like theyre actually proud of that shit.</p><div id="Test123"></div></div></div></div></div></div>');




//-----------------Below is the working java script dont fuck with it	

//turining modal into function
var modalPop = function(name, sciName, imgId, pic, info){
	return('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" id="closeStyle" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button><h4 class="modal-title" id="myModalLabel">'+name+'</h4></div><div class="modal-body"><div id="workFucker"><p class="popSci-Name">('+sciName+')</p><div class="frogpic"><img id="'+imgId+'"src="'+pic+'"><div id="play-button"><div id="triangle-right"></div></div></div><p class="info">'+info+'This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like theyre actually proud of that shit.</p><div id="Test123"></div></div></div></div></div></div>');
};

var playSound = function(sound){
	var audio = new Audio(sound);
	 	

		$('#triangle-right').click(function() {
	  		if (audio.paused == false) {
	      		audio.pause();
	      			
	  		} else {
	      		audio.play();
	      		
	  		}
		});

		$('#closeStyle').click(function(){
			audio.pause();
			audio.currentTime = 0;
		});
	};


//calling the functions with a click event

//---name, sciName, imgId, pic, info---

/*-------template for click event and adding info to modal---------



$('html id').click(function(){
	
	$('#kingModal').html(modalPop("name", "sciName", "imgId", "pic","info"  ));
	return(playSound('sound'));
});



//------------------------template end------------*/

/*var zzz = 'Americanbullfrog'

$('#'+zzz).click(function(){
	
	$('#kingModal').html(modalPop("American bullfrog", "Rana catesbeiana", "Americanbullfrog", "images/Americanbullfrog1.jpg","its a froggedy frog"  ));
	return(playSound('http://www.state.nj.us/dep/fgw/ensp/audio/bullfrog.wav'));



});

$('#Americantoad').click(function(){
	
	$('#kingModal').html(modalPop("American toad", "Bufo americanus", "Americanbullfrog", "images/Americantoad1.jpg","its a froggedy frog"  ));
	return(playSound('http://www.state.nj.us/dep/fgw/ensp/audio/american_toad.wav'));



});     ----------*/

/*$('#Carpenterfrog').click(function(){
	
	$('#kingModal').html(modalPop(oCarpenterfrog.name, oCarpenterfrog.sciName, oCarpenterfrog.imgId, oCarpenterfrog.pic, oCarpenterfrog.info  ));
	return(playSound(oCarpenterfrog.sound));
});*/

/*
$('#Carpenterfrog').click(function(){
	var x = Carpenterfrog
	$('#kingModal').html(modalPop(x.name, x.sciName, x.imgId, x.pic, x.info  ));
	return(playSound(x.sound));
});
*/

var frogModal = function(frog){
var xxxid = '#'+frog
var x = eval(frog)
$(xxxid).click(function(){
	
	$('#kingModal').html(modalPop(x.name, x.sciName, x.imgId, x.pic, x.info  ));
	return(playSound(x.sound));
});

}
frogModal('Americanbullfrog');
frogModal('Americantoad');
frogModal('Carpenterfrog');
frogModal('Easternspadefoot');

}); //This is THE END
//frog 2
/*---$('#Americantoad').click(function(){
	$('#kingModal').empty();
	
	$('#kingModal').html(modalPop("mAmericantoad","froggy", "hydra jumppy", "Americanbullfrog", "images/Americanbullfrog1.jpg","its a froggedy frog"  ));
	return(playSound('http://www.state.nj.us/dep/fgw/ensp/audio/bullfrog.wav'));---*/


//audio below
/*var audio = new Audio('http://www.state.nj.us/dep/fgw/ensp/audio/bullfrog.wav');
 	

	$('#triangle-right').click(function() {
  		if (audio.paused == false) {
      		audio.pause();
      			
  		} else {
      		audio.play();
      		
  		}
	});

	$('#closeStyle').click(function(){
		audio.pause();
		audio.currentTime = 0;
	});
});*/






