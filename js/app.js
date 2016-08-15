$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    $('.ryu').mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    $('.ryu').mousedown(function() {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show()
            .animate(
                {'left': '1020px'}, 
                500,
                function() {
                    $(this).hide();
                    $(this).css('left', '520px');
                }
        );
    })
    $('.ryu').mouseup(function() {
        // ryu goes back to his ready position
        // name this function to make the intent more clear
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
	$(document).keydown(ryu_look_cool)
});
function playHadouken () {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}
function ryu_look_cool(key_pressed) {
	if(key_pressed.which == 88) { // 88 == 'x'
		//alert( "Handler for .keydown() called." )
		$('.ryu').hide()	
		$('.ryu-cool').show()
	}
}
