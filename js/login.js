window.addEventListener('load',function() {
	//alert("hula hula");
	
	var submit = document.getElementsByName('submit')[0];
	
	var username = document.getElementById('login_username');
	var password = document.getElementById('login_password');
	
	var error = "Username dan kata sandi tidak cocok";
	
	document.getElementById('login_form').onsubmit = function() {
		var xmlhttp = new XMLHttpRequest();
		
		var params = "?";
		
		params += "username=" + username.value + "&";
		params += "password=" + password.value;
		
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				var response = JSON.parse(xmlhttp.responseText);
				if (response['status'] == 'success') {
					localStorage.setItem("lulusapp_user", username.value);
					window.location.href = 'home.html';
				} else {
					errortext.innerHTML = error;
					errortext.style.display = "inline";
				}
			}
		}
		
		xmlhttp.open("GET", "http://lombabbic.ap01.aws.af.cm/services/login.php" + params, true);
		xmlhttp.send(null);
		
		return false;
		
		//localStorage.setItem("lulusapp_user", username.value);
		//window.location.href = 'home.html';

	};	
	
	document.getElementById('signUp_button').onclick = function() {
		window.location.href = 'registrasi.html';

		return false;
	}
	
});
