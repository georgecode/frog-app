$(document).ready(function(){ 
						   
	$('#Americantoad').click(function(){
		///$('#popup').css("background-color","red");
		////$('#popup').css("background", "url(images/Americantoad1.jpg)");
		//$('#picture').html('<img class="popupFrog" src="images/Americantoad1.jpg">');
		//$('#xxclose').html('<p class="xxclose">X</p>');
		//$('#info').html('<p class="popuptext">Your bones dont break, mine do. Thats clear. Your cells react to bacteria and viruses differently than mine. You dont get sick, I do. Thats also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. Were on the same curve, just on opposite ends.</p>')
		//$('.row').fadeTo('slow', .25);
		$('#popup').html('<iframe src="http://www.mywalldrywall.com/" frameborder="0" scrolling="no" id="myFrame"></iframe>');
		$('#popup').addClass('moveUp')
		//$('#popup').html(
		//	<div class="panel panel-default">
    	//		<div class="panel-heading">
          //			<h3 class="panel-title">X</h3>
        	//	</div>
        	//	<div class="panel-body">
          	//		Panel content
        	//	</div>
      		//</div>
      	//);
	});

	//$('#xxclose').click(function(){
	//	$('.row').fadeToggle()('slow');
	//	$('#picture').empty();
	//	$('#info').empty();
	//	$('#xxclose').empty();

//	});
	
});

//$( "button:first" ).click(function() {
  //$( "p:first" ).fadeToggle( "slow", "linear" );