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
document.getElementById("menu").innerHTML = "<div id='myTopNav' class='w3-large w3-padding-8 topnav'>" +
	"<a href='index.html' class='mobile-nav'><img src='assets/logo_black.png' alt='Logo' id='logo' class='w3-small'></a>" +
	"<a href='javascript:void(0);' class='w3-right w3-hover-white w3-text-carbon w3-hover-text-theme-dark hamburger-icon mobile-nav' onclick='toggleTopNav()'><i class='fa fa-bars'></i></a>" +
	"<a class='w3-right w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='index.html'>ABOUT</a>" +
	"<a class='w3-right w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='creative.html'>CREATIVE</a>" +
	"<a class='w3-right w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='dancer.html'>DANCER</a>" +
	"<a class='w3-right w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='connector.html'>CONNECTOR</a>" +
	"<a class='w3-right w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='hacker.html'>HACKER</a>" +
	"</div>";


/**
 * Toggle between adding and removing the "responsive" class to topnav when the user clicks on the hamburger icon.
 */
function toggleTopNav() {
	var x = document.getElementById("myTopNav");
	if (!x.classList.contains("responsive")) {
		x.classList.add("responsive");
	} else {
		x.classList.remove("responsive");
	}
}
 