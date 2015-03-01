$(document).ready(function(){

//---below is a listener that will hide my model
//---its good pratice to always put the listener on page load
/*window.onpopstate = function(event) {
		$('#myModal').modal('hide');
	};*/



//------This is the frog constructor
	function frog(name, sciName, imgId, pic, sound, info) {
    this.name = name;
    this.sciName = sciName;
    this.imgId= imgId
    this.pic = pic;
    this.info = info;
    this.sound = sound;
	}	


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
	"The American bullfrog is the largest frog in America, they can be up to 8 inches long.  The top side is green or brown, and may be spotted while the bottom side is white or yellow. The American bullfrog has ridges that run from the eye, around the tympanum (eardrum). The tympanum in males is larger than the eye and adult females are slightly larger than males. Bullfrogs will eat almost anything they can fit in their mouths, including birds and other frogs!");

var Americantoad = new frog (
	"American toad", 
	"Bufo americanus", 
	"Americantoad",
	"images/Americantoad1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/american_toad.wav",
	"The American toad is approximately 2-4 inches. American toads have short stubby bodies and legs, with a wide, rounded face. Color patterns vary, and the dominate colors can include brown, grey, tan, red, and olive. The underside is usually white with dark spots. Behind American toad’s eyes are two large parotoid glands. This species is typically very warty.");

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
	"The Eastern spadefoot toad is 1.5-3 inches long with a large yellow eye, and vertical pupil. Eastern spadefoot toads spend most of their lives underground. Their skin is smoother and moister than most toads. Two irregular stripes run down their back. On the bottom of their back feet is a small, black, spade-like projection. ");

var Fowlerstoad = new frog (
	"Fowler’s toad", 
	"Bufo woodhousii fowleri", 
	"Fowlerstoad",
	"images/Fowlerstoad1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/fowlers_toad.wav",
	"info");

var Greenfrog = new frog (
	"Green frog", 
	"Rana clamitans melanota", 
	"Greenfrog",
	"images/Greenfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/green_frog.wav",
	"info");

var NewJerseychorusfrog = new frog (
	"New Jersey chorus frog", 
	"Pseudacris triseriata kalmi", 
	"NewJerseychorusfrog",
	"images/Newjerseychorusfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/nj_chorus_frog.wav",
	"info");

var Northerncricketfrog = new frog (
	"Northern cricket frog", 
	"Acris c. crepitans", 
	"Northerncricketfrog",
	"images/Northerncricketfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/no_cricket_frog.wav",
	"info");

var Northerngraytreefrog = new frog (
	"Northern gray treefrog", 
	"Hyla versicolor", 
	"Northerngraytreefrog",
	"images/Northerngreytreefrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/no_gray_frog.wav",
	"info");

var Northernspringpeeper = new frog (
	"Northern spring peeper", 
	"Pseudacris c. crucifer", 
	"Northernspringpeeper",
	"images/Northernspringpeeper1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/spring_peeper.wav",
	"info");

var Pickerelfrog = new frog (
	"Pickerel frog", 
	"Rana palustris", 
	"Pickerelfrog",
	"images/Pickerelfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/pickerel_frog.wav",
	"info");

var PineBarrenstreefrog = new frog (
	"Pine Barrens treefrog", 
	"Hyla andersonii", 
	"PineBarrenstreefrog",
	"images/PineBarrenstreefrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/pine_barrens_treefrog.wav",
	"info");

var Southerngraytreefrog = new frog (
	"Southern gray treefrog", 
	"Hyla chrysoscelis", 
	"Southerngraytreefrog",
	"images/Southerngreytreefrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/so_gray_treefrog.wav",
	"info");

var Southernleopardfrog = new frog (
	"Southern leopard frog", 
	"Rana utricularia", 
	"Southernleopardfrog",
	"images/Southernleopardfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/so_leopard_frog.wav",
	"info");

var Uplandchorusfrog = new frog (
	"Upland chorus frog", 
	"Pseudacris triseriata feriarum", 
	"Uplandchorusfrog",
	"images/Uplandchorusfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/upland_chorus_frog.wav",
	"info");

var Woodfrog = new frog (
	"Wood frog", 
	"Rana sylvatica", 
	"Woodfrog",
	"images/Woodfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/wood_frog.wav",
	"info");




//--------------click works
/*$('#Americanbullfrog').click(function(){
	$('#suckit').html("hello hello hello")
})*/
//--------------click workes end

//-----------click working for modal
/*
$('#Americanbullfrog').click(function(){
	
	var modalTemp_=$('#modalTemp_').html()
	var compileit=_.template(modalTemp_);
	var output = compileit({zzname:"name",zzsciName:"sciName",zzimgId:"Americanbullfrog",zzpic:"images/Americanbullfrog1.jpg",zzinfo:"info"})


	$('#kingModal').html(output)
})*/
//--------------click working for modal end

//--------------click working for modal with frog object and sound
/*
$('#Americanbullfrog').click(function(){
	var x=Americanbullfrog

	var modalTemp_=$('#modalTemp_').html()
	var compileit=_.template(modalTemp_);
	var output = compileit({zzname: x.name,zzsciName: x.sciName,zzimgId: x.imgId,zzpic:x.pic,zzinfo:x.info})


	$('#kingModal').html(output)

var playSound = function(sound){
	var audio = new Audio(sound);
	 	

		$('.playButton').click(function() {
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


playSound(x.sound)



})	
*/
//--------------click working for modal with frog object and sound end

//--------------modal working as function

var createModal = function(frog){
	var x= frog
	var frogId = '#'+ x.imgId
$(frogId).click(function(){
	

	var modalTemp_=$('#modalTemp_').html()
	var compileit=_.template(modalTemp_);
	var output = compileit({zzname: x.name,zzsciName: x.sciName,zzimgId: x.imgId,zzpic:x.pic,zzinfo:x.info})


	$('#kingModal').html(output)

var playSound = function(sound){
	var audio = new Audio(sound);
	 	

		$('.playButton').click(function() {
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


//---below is a listener that will hide my model
//---its good pratice to always put the listener on page load
//---but in this case it needed access to the audio var
		window.onpopstate = function(event) {
		$('#myModal').modal('hide');
			audio.pause();
			audio.currentTime = 0;
	};
//---this creates a new state...it makes the browser 
//--think this is a new page in its history stack
	history.pushState();
	};



playSound(x.sound)



	




})	
}
createModal(Americanbullfrog);
createModal(Americantoad);
createModal(Carpenterfrog);
createModal(Easternspadefoot);
createModal(Fowlerstoad);
createModal(Greenfrog);
createModal(NewJerseychorusfrog);
createModal(Northerncricketfrog);
createModal(Northerngraytreefrog);
createModal(Northernspringpeeper);
createModal(Pickerelfrog);
createModal(PineBarrenstreefrog);
createModal(Southerngraytreefrog);
createModal(Southernleopardfrog);
createModal(Uplandchorusfrog);
createModal(Woodfrog);



});//end----------









//---------------modal working as function
/*
var modalPop = function(name, sciName, imgId, pic, info){
var modalTemp_=$('#modalTemp_').html()
var compileit=_.template(modalTemp_);
var output = compileit({zzname:name,zzsciName:sciName,zzimgId:imgId,zzpic:pic,zzinfo:info})


$('#Americanbullfrog').click(function(){

	$('#kingModal').append(modalPop("American bullfrog", "Rana catesbeiana", "Americanbullfrog","images/Americanbullfrog1.jpg",  "http://www.state.nj.us/dep/fgw/ensp/audio/bullfrog.wav","info")
		)
	});
};*/


/*var playSound = function(sound){
	var audio = new Audio(sound);
	 	

		$('.playButton').click(function() {
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
//---------------------------------
var frogModal = function(frog){
var xxxid = '#'+frog
var x = eval(frog)
$(xxxid).click(function(){
	
	$('#kingModal').html(modalPop(x.name, x.sciName, x.imgId, x.pic, x.info  ));
	return(playSound(x.sound));
});
//--------------




};

frogModal('Americanbullfrog');
frogModal('Americantoad');
frogModal('Carpenterfrog');
frogModal('Easternspadefoot');
frogModal('Fowlerstoad');
frogModal('Greenfrog');
frogModal('NewJerseychorusfrog');
frogModal('Northerncricketfrog');
frogModal('Northerngraytreefrog');
frogModal('Northernspringpeeper');
frogModal('Pickerelfrog');
frogModal('PineBarrenstreefrog');
frogModal('Southerngraytreefrog');
frogModal('Southernleopardfrog');
frogModal('Uplandchorusfrog');
frogModal('Woodfrog');*/


//---remove this after test

/*var Americantoad = new frog (
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

var Fowlerstoad = new frog (
	"Fowler’s toad", 
	"Bufo woodhousii fowleri", 
	"Fowlerstoad",
	"images/Fowlerstoad1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/fowlers_toad.wav",
	"info");

var Greenfrog = new frog (
	"Green frog", 
	"Rana clamitans melanota", 
	"Greenfrog",
	"images/Greenfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/green_frog.wav",
	"info");

var NewJerseychorusfrog = new frog (
	"New Jersey chorus frog", 
	"Pseudacris triseriata kalmi", 
	"NewJerseychorusfrog",
	"images/Newjerseychorusfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/nj_chorus_frog.wav",
	"info");

var Northerncricketfrog = new frog (
	"Northern cricket frog", 
	"Acris c. crepitans", 
	"Northerncricketfrog",
	"images/Northerncricketfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/no_cricket_frog.wav",
	"info");

var Northerngraytreefrog = new frog (
	"Northern gray treefrog", 
	"Hyla versicolor", 
	"Northerngraytreefrog",
	"images/Northerngreytreefrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/no_gray_frog.wav",
	"info");

var Northernspringpeeper = new frog (
	"Northern spring peeper", 
	"Pseudacris c. crucifer", 
	"Northernspringpeeper",
	"images/Northernspringpeeper1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/spring_peeper.wav",
	"info");

var Pickerelfrog = new frog (
	"Pickerel frog", 
	"Rana palustris", 
	"Pickerelfrog",
	"images/Pickerelfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/pickerel_frog.wav",
	"info");

var PineBarrenstreefrog = new frog (
	"Pine Barrens treefrog", 
	"Hyla andersonii", 
	"PineBarrenstreefrog",
	"images/PineBarrenstreefrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/pine_barrens_treefrog.wav",
	"info");

var Southerngraytreefrog = new frog (
	"Southern gray treefrog", 
	"Hyla chrysoscelis", 
	"Southerngraytreefrog",
	"images/Southerngreytreefrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/so_gray_treefrog.wav",
	"info");

var Southernleopardfrog = new frog (
	"Southern leopard frog", 
	"Rana utricularia", 
	"Southernleopardfrog",
	"images/Southernleopardfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/so_leopard_frog.wav",
	"info");

var Uplandchorusfrog = new frog (
	"Upland chorus frog", 
	"Pseudacris triseriata feriarum", 
	"Uplandchorusfrog",
	"images/Uplandchorusfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/upland_chorus_frog.wav",
	"info");

var Woodfrog = new frog (
	"Wood frog", 
	"Rana sylvatica", 
	"Woodfrog",
	"images/Woodfrog1.jpg",  
	"http://www.state.nj.us/dep/fgw/ensp/audio/wood_frog.wav",
	"info");

	

//This is a function designed to create a modal and assign parameter's to it(its the frog popup) 














var modalPop = function(name, sciName, imgId, pic, info){
	return('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" id="closeStyle" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button><h4 class="modal-title" id="myModalLabel">'+name+'</h4></div><div class="modal-body"><div id="workPlease"><p class="popSci-Name">('+sciName+')</p><div class="frogpic"><img id="'+imgId+'"src="'+pic+'"></div><a class="playButton">PLAY</a><p class="info">'+info+'Hello Proin ornare ligula eu tellus tempus elementum. Aenean bibendum iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Ut vel arcu ac tortor adipiscing hendrerit vel sed massa. Fusce sem libero, lacinia vulputate interdum non, porttitor non quam. Aliquam sed felis ligula. Duis non nulla magna.</p></div></div></div></div></div>');
};

var playSound = function(sound){
	var audio = new Audio(sound);
	 	

		$('.playButton').click(function() {
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




//-----function that assignes frogs to the modal
var frogModal = function(frog){
var xxxid = '#'+frog
var x = eval(frog)
$(xxxid).click(function(){
	
	$('#kingModal').html(modalPop(x.name, x.sciName, x.imgId, x.pic, x.info  ));
	return(playSound(x.sound));
});

//----------Assigining a frog to the Modal
}
frogModal('Americanbullfrog');
frogModal('Americantoad');
frogModal('Carpenterfrog');
frogModal('Easternspadefoot');
frogModal('Fowlerstoad');
frogModal('Greenfrog');
frogModal('NewJerseychorusfrog');
frogModal('Northerncricketfrog');
frogModal('Northerngraytreefrog');
frogModal('Northernspringpeeper');
frogModal('Pickerelfrog');
frogModal('PineBarrenstreefrog');
frogModal('Southerngraytreefrog');
frogModal('Southernleopardfrog');
frogModal('Uplandchorusfrog');
frogModal('Woodfrog');
}); //This is THE END*/







