window.addEventListener('load',function() {

	var submit = document.getElementsByName('submit')[0];
	
	var username = document.getElementById('login_username');
	var password = document.getElementById('login_password');
		
	document.getElementById('login_form').onsubmit = function() {
		localStorage.setItem("lulusapp_user", username.value);
		window.location.href = 'home.html';

		return false;
	};	
	
	document.getElementById('signUp_button').onclick = function() {
		window.location.href = 'registrasi.html';

		return false;
	}
	
});
