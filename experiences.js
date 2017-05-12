/**
 * Generates a copyright footer.
 */
document.getElementById("copyright-footer").innerHTML =
	"<p class='copyright-text'>&copy;  " +
	new Date().getFullYear() +
	" Copyright <a class='link-no-underline w3-hover-text-strawberry-red' href='../index.html'>Aaron Aquino</a>. All rights reserved.";


/**
 * Adds the navigation buttons.
 */
document.getElementById("menu").innerHTML = "<ul class='w3-navbar w3-large w3-padding-8 w3-white w3-container'>" +
	"<a class='w3-hover-white' href='../index.html'><img src='../images/logo.png' alt='Logo' id='logo' class='w3-small'></a>" + 
	"<li class='w3-right'><a class='w3-text-carbon w3-hover-white w3-hover-text-strawberry-red' href='../dancer.html'>DANCER</a></li>" +
	"<li class='w3-right'><a class='w3-text-carbon w3-hover-white w3-hover-text-strawberry-red' href='../hacker.html'>HACKER</a></li>" +
	"<li class='w3-right'><a class='w3-text-carbon w3-hover-white w3-hover-text-strawberry-red' href='../connector.html'>CONNECTOR</a></li>" +
	"<li class='w3-right'><a class='w3-text-carbon w3-hover-white w3-hover-text-strawberry-red' href='../index.html'>HOME</a></li>" +
	"</ul>";

 