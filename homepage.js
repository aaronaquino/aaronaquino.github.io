/**
 * Prevents the down arrow from showing visible focus unless the user is navigating with the tab key.
 * Tip taken from: https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2.
 */
function handleFirstTab(e) {
    if (e.keyCode === 9) { // The "I am a keyboard user" key.
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);

/**
 * Scrolls down to the bio when the down arrow is clicked.
 */
$(document).ready(function (){
	$("#down-arrow").click(function (){
		$('html, body').animate({
			scrollTop: $("#about-me").offset().top
		}, 900);
		$("#down-arrow").blur();
	});

	// Scrolling can also be triggered through the Enter key to support a11y.
	$("#down-arrow").keypress(function (e){
		const key = e.which;
		if(key == 13)  {
			$('html, body').animate({
				scrollTop: $("#about-me").offset().top
			}, 900);
			$("#down-arrow").blur();
		}
	});
});
 