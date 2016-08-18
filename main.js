/*
	Radius by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/



//Profile Array saves user input from create account section and then pushes that data into the accounts array which is then saved in localStorage



	var profile	= [];
//------------------------------------------------------------------

//Function that checks the username index in profile array
//function findIt() {
	//indexOf(0) == username;	
//}



function go(){
	
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var email = document.getElementById("email");
	
	
	var loginUser = document.getElementById("user");
	var loginPass = document.getElementById("pass");
	window.location.href = "profile.html";
}
//----------------------------------------------------------------------






function create(){
	var U = document.getElementById("username").value;
	var P = document.getElementById("password").value;
	var E = document.getElementById("email").value;
	
	profile.push(P);
	profile.push(E);
	localStorage.setItem(U, profile );
	profile = [];	
	}
	

 






























