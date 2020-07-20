var
	bgColor;

$(document).ready(function(e){
	var windowHeight = window.innerHeight;
	$('#navigation-menu').css('height', windowHeight + 'px');

	$(document).on('click', '#showMenu', function(){
		$('#navigation-menu').css('left', '0');
		$('#showMenu, #hideMenu').css('left', '160px');
		$('#showMenu, #hideMenu').html('<i class="fa fa-chevron-left"></i>');
		$('#showMenu').attr('id', 'hideMenu');
	});

	$(document).on('click', '#hideMenu', function(){
		$('#navigation-menu').css('left', '-160px');
		$('#showMenu, #hideMenu').css('left', '0');
		$('#showMenu, #hideMenu').html('<i class="fa fa-cog"></i>');
		$('#hideMenu').attr('id', 'showMenu');
	});
});

function setPropertyStyle(id, valor) {
	document.body.style.setProperty(`--${id}`, valor);
}

function start() {
	bgColor = '#ffa07a';
	setPropertyStyle('bgColor', bgColor);
}

start();