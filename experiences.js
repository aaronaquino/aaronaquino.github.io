/**
 * Generates a copyright footer.
 */
document.getElementById("copyright-footer").innerHTML =
	"<p class='copyright-text'>&copy;  " +
	new Date().getFullYear() +
	" Copyright <a class='link-no-underline w3-hover-text-theme-dark' href='../index.html'>Aaron Aquino</a>. All rights reserved.";


/**
 * Adds the navigation menu and buttons.
 */
document.getElementById("menu").innerHTML = "<div id='myTopNav' class='w3-large w3-padding-8 topnav'>" +
	"<a href='../index.html' class='mobile-nav'><img src='../assets/logo.png' alt='Logo' id='logo' class='w3-small'></a>" +
	"<a href='javascript:void(0);' id='hamburgerButton' class='w3-right w3-text-carbon hamburger-icon mobile-nav' onclick='toggleTopNav()'><i class='fa fa-bars'></i></a>" +
	"<a class='w3-right w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='../index.html'>ABOUT</a>" +
	"<a class='w3-right w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='../creative.html'>CREATIVE</a>" +
	"<a class='w3-right w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='../dancer.html'>DANCER</a>" +
	"<a class='w3-right w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='../connector.html'>CONNECTOR</a>" +
	"<a class='w3-right w3-hover-white w3-text-carbon w3-hover-text-theme-dark' href='../hacker.html'>HACKER</a>" +
	"</div>";


/**
 * Toggle between adding and removing the "responsive" class to topnav when the user clicks on the hamburger icon.
 */
function toggleTopNav() {
	let topNav = document.getElementById("myTopNav");
	let hamburgerButton = document.getElementById("hamburgerButton");
	if (!topNav.classList.contains("responsive")) {
		topNav.classList.add("responsive");
		hamburgerButton.classList.remove("w3-text-carbon");
		hamburgerButton.classList.add("w3-text-theme-dark");
	} else {
		topNav.classList.remove("responsive");
		hamburgerButton.classList.remove("w3-text-theme-dark");
		hamburgerButton.classList.add("w3-text-carbon");
	}
}
