/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function foodFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

function fashionFunction(){
document.getElementById("myDropdown2").classList.toggle("show");

}

// Close the dropdown if the pointer exits from it
function hideFunction(){
var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var d = 0; d < dropdowns.length; d++) {
			var openDropdown = dropdowns[d];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
}

// Close the dropdown if the pointer is outside of buttons
window.onmouseleave = function(e) {
	if (!e.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var d = 0; d < dropdowns.length; d++) {
			var openDropdown = dropdowns[d];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
