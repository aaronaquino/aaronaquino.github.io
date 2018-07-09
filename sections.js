/**
 * Generates a copyright footer.
 */
document.getElementById("copyright-footer").innerHTML =
	"<p class='copyright-text'>&copy;  " +
	new Date().getFullYear() +
	" Copyright <a class='link-no-underline w3-hover-text-theme-dark' href='index.html'>Aaron Aquino</a>. All rights reserved.";


/**
 * Adds the navigation menu and buttons.
 */
document.getElementById("menu").innerHTML = "<ul class='w3-navbar w3-large w3-padding-8 w3-container'>" +
	"<a href='index.html'><img src='assets/logo_black.png' alt='Logo' id='logo' class='w3-small'></a>" +
	"<li class='w3-right'><a class='w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='index.html'>HOME</a></li>" +
	"<li class='w3-right'><a class='w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='creative.html'>CREATIVE</a></li>" +
	"<li class='w3-right'><a class='w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='dancer.html'>DANCER</a></li>" +
	"<li class='w3-right'><a class='w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='connector.html'>CONNECTOR</a></li>" +
	"<li class='w3-right'><a class='w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='hacker.html'>HACKER</a></li>" +
	"</ul>";
 