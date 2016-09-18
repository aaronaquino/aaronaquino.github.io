/**
 * Generates a copyright footer.
 */
document.getElementById("copyright-footer").innerHTML =
	"<p class='copyright-text'>&copy;  " +
	new Date().getFullYear() +
	" Copyright <a class='link-no-underline w3-hover-text-strawberry-red' href='index.html'>Aaron Aquino</a>. All rights reserved.";


/**
 * Adds the navigation buttons.
 */
document.getElementById("menu").innerHTML = "<ul class='w3-navbar w3-large w3-padding-8 w3-white w3-container'>" +
	"<a class='w3-hover-white' href='index.html'><img src='images/ninja.svg' alt='Logo' id='logo' class='w3-small'></a>" + 
	"<li class='w3-right'><a class='w3-text-carbon w3-hover-white w3-hover-text-strawberry-red' href='dancer.html'>DANCER</a></li>" +
	"<li class='w3-right'><a class='w3-text-carbon w3-hover-white w3-hover-text-strawberry-red' href='hacker.html'>HACKER</a></li>" +
	"<li class='w3-right'><a class='w3-text-carbon w3-hover-white w3-hover-text-strawberry-red' href='connector.html'>CONNECTOR</a></li>" +
	"<li class='w3-right'><a class='w3-text-carbon w3-hover-white w3-hover-text-strawberry-red' href='index.html'>HOME</a></li>" +
	"</ul>";


/**
 * Adds the social media icons. The spaces after each </a> tag are necessary to create space between the icons.
 */
var socialIcons = document.getElementById("social-icons");
if (socialIcons) {
	socialIcons.innerHTML = 
"<a href='https://www.facebook.com/aaquino33' id='facebookLink' class='icon-3x icon-facebook-sign link-no-underline w3-hover-text-strawberry-red' aria-label='Facebook'></a> " +
"<a href='https://www.linkedin.com/in/aaronaquino33' id='linkedinLink' class='icon-3x icon-linkedin-sign link-no-underline w3-hover-text-strawberry-red' aria-label='LinkedIn'></a> " +
"<a href='https://github.com/aaronaquino' id='githubLink' class='icon-3x icon-github-sign link-no-underline w3-hover-text-strawberry-red' aria-label='Github'></a> " +
"<a href='https://www.instagram.com/aaronaquino33/' id='instagramLink' class='icon-3x icon-instagram-sign link-no-underline w3-hover-text-strawberry-red' aria-label='Instagram'></a>";
}
 