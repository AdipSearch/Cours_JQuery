
$(function(){

var i=0;
//while(i<4){

$('html').on('click', function(){
	
	$(".zone:eq("+i+")").show();
	i=i+1;

	if (i < 3) {
		

	}
	else{
	
		$('html').on('click', function(){
		$('body').css("background-image",'url(fond.jpg)');
		});

	}

	if (i < 4) {
		

	}
	else{
	
		$('html').on('click', function(){
		player = document.getElementById('player_audio');
		player.play();
		});

	}


	
});

});





