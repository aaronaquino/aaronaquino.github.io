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
	});

	// Scrolling can also be triggered through the Enter key to support a11y.
	$("#down-arrow").keypress(function (e){
		const key = e.which;
		if(key == 13)  {
			$('html, body').animate({
				scrollTop: $("#about-me").offset().top
			}, 900);
		}
	});
});


/**
 * Adds the social media icons. The spaces after each </a> tag are necessary to create space between the icons.
 */
var socialIcons = document.getElementById("social-icons");
if (socialIcons) {
	socialIcons.innerHTML = 
"<a href='https://www.linkedin.com/in/aaronaquino33' target='_blank' class='icon-3x icon-linkedin-sign link-no-underline w3-hover-text-theme-dark social-icon' aria-label='LinkedIn'></a> " +
"<a href='https://www.instagram.com/aaronaquino33' target='_blank' class='icon-3x icon-instagram-sign link-no-underline w3-hover-text-theme-dark social-icon' aria-label='Instagram'></a> " +
"<a href='https://open.spotify.com/user/123165466' target='_blank' class='icon-3x icon-spotify-sign link-no-underline w3-hover-text-theme-dark social-icon' aria-label='Spotify'></a> " +
"<a href='https://www.youtube.com/c/aaronaquino' target='_blank' class='icon-3x icon-youtube-sign link-no-underline w3-hover-text-theme-dark social-icon' aria-label='YouTube'></a>";
}
 