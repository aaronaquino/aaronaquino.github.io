/**
 * Generates a copyright footer.
 */
document.getElementById("copyright-footer").innerHTML =
	"<p class='copyright-text'>&copy;  " +
	new Date().getFullYear() +
	" Copyright <a class='link-no-underline hidden-link' href='/index.html'>Aaron Aquino</a>. All rights reserved.";


/**
 * Adds the navigation menu and buttons.
 */
document.getElementById("top-nav").innerHTML = "<a href='/index.html' id='logo-container'><img id='logo' src='/assets/logo.png' alt='Aaron's logo'></a>" +
	"<div id='spacer'></div>" +
	"<a id='hamburger-button' class='menu-button-untouched' onclick='toggleTopNav()' href='javascript:void(0);' aria-labelledby='hamburger-aria-instructions'><div id='hamburger-aria-instructions' class='screenreader-only'>Click to open menu</div><i aria-hidden='true' class='fa fa-bars'></i></a>" +
	"<div id='break'></div>" +
	"<div id='menu-buttons-container'>" +
	"<a class='menu-button menu-button-untouched' href='/hacker.html'>Hacker</a>" +
	"<a class='menu-button menu-button-untouched' href='/connector.html'>Connector</a>" +
	"<a class='menu-button menu-button-untouched' href='/dancer.html'>Dancer</a>" +
	"<a class='menu-button menu-button-untouched' href='/creative.html'>Creative</a>" +
	"<a class='menu-button menu-button-untouched' href='/index.html'>About</a>" +
	"</div>";


/**
 * Toggle between adding and removing the "responsive" class to the topnav when the user clicks on the hamburger icon.
 */
function toggleTopNav() {
	const topNav = document.getElementById("top-nav");
	const hamburgerButton = document.getElementById("hamburger-button");
	const menuButtonsContainer = document.getElementById("menu-buttons-container");
	if (!topNav.classList.contains("responsive")) {
		topNav.classList.add("responsive");
		menuButtonsContainer.classList.add("responsive");
		hamburgerButton.classList.remove("menu-button-untouched");
		hamburgerButton.classList.add("menu-button-touched");
	} else {
		topNav.classList.remove("responsive");
		menuButtonsContainer.classList.remove("responsive");
		hamburgerButton.classList.remove("menu-button-touched");
		hamburgerButton.classList.add("menu-button-untouched");
	}
}
 