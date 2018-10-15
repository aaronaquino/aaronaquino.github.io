/**
 * Generates a copyright footer.
 */
document.getElementById("copyright-footer").innerHTML =
	"<p class='copyright-text'>&copy;  " +
	new Date().getFullYear() +
	" Copyright <a class='link-no-underline w3-hover-text-theme-dark' href='/index.html'>Aaron Aquino</a>. All rights reserved.";


/**
 * Adds the navigation menu and buttons.
 */
document.getElementById("menu").innerHTML = "<div id='myTopNav' class='w3-large w3-padding-8 topnav'>" +
	"<div id='logo-container'>" +
	"<a class='mobile-nav' href='/index.html'><img src='/assets/logo.png' alt='Logo' id='logo' class='w3-small'></a>" +
	"</div>" +
	"<div id='menu-buttons-container' class='w3-right'>" +
	"<a id='hamburger-button' class='w3-right w3-text-carbon mobile-nav' onclick='toggleTopNav()' href='javascript:void(0);'><i class='fa fa-bars'></i></a>" +
	"<a class='menu-button w3-text-carbon w3-hover-text-theme-dark w3-hover-soft-purple w3-round-large' href='/hacker.html'>HACKER</a>" +
	"<a class='menu-button w3-text-carbon w3-hover-text-theme-dark w3-hover-soft-purple w3-round-large' href='/connector.html'>CONNECTOR</a>" +
	"<a class='menu-button w3-text-carbon w3-hover-text-theme-dark w3-hover-soft-purple w3-round-large' href='/dancer.html'>DANCER</a>" +
	"<a class='menu-button w3-text-carbon w3-hover-text-theme-dark w3-hover-soft-purple w3-round-large' href='/creative.html'>CREATIVE</a>" +
	"<a class='menu-button w3-text-carbon w3-hover-text-theme-dark w3-hover-soft-purple w3-round-large' href='/index.html'>ABOUT</a>" +
	"</div>" +
	"</div>";


/**
 * Toggle between adding and removing the "responsive" class to topnav when the user clicks on the hamburger icon.
 */
function toggleTopNav() {
	let topNav = document.getElementById("myTopNav");
	let hamburgerButton = document.getElementById("hamburger-button");
	let menuButtonsContainer = document.getElementById("menu-buttons-container");
	if (!topNav.classList.contains("responsive")) {
		topNav.classList.add("responsive");
		menuButtonsContainer.classList.add("responsive");
		hamburgerButton.classList.remove("w3-text-carbon");
		hamburgerButton.classList.add("w3-text-theme-dark");
	} else {
		topNav.classList.remove("responsive");
		menuButtonsContainer.classList.remove("responsive");
		hamburgerButton.classList.remove("w3-text-theme-dark");
		hamburgerButton.classList.add("w3-text-carbon");
	}
}
 