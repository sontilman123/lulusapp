window.addEventListener('load',function() {
	//alert("Hello! I am an alert box!");
	
	var submit = document.getElementsByName('submit')[0];
	
	var username = document.getElementById('registrasi_username');
	var password = document.getElementById('registrasi_password');
	
	var error1 = "Username sudah terpakai";
	var error2 = "Registrasi gagal, mohon ulangi registrasi";
	
	document.getElementById('registrasi_form').onsubmit = function() {
		var xmlhttp = new XMLHttpRequest();
		
		var params = "?";
		
		params += "username=" + username.value + "&";
		params += "password=" + password.value;
		
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) {
				var response = JSON.parse(xmlhttp.responseText);
				if (response['status'] == 'used') {
					errortext.innerHTML = error1;
					errortext.style.display = "inline";
				} else if (response['status'] == 'success') {
					localStorage.setItem("lulusapp_user", username.value);
					window.location.href = 'home.html';
				} else {
					errortext.innerHTML = error2;
					errortext.style.display = "inline";
				}
			}
		}
		
		xmlhttp.open("GET", "http://lombabbic.ap01.aws.af.cm/services/register.php" + params, true);
		xmlhttp.send(null);
		//alert("Hello! I am an alert box!");
		return false;
		
		//localStorage.setItem("lulusapp_user", username.value);
		//window.location.href = 'home.html';

	};	
	
	document.getElementById('signUp_button').onclick = function() {
		window.location.href = 'registrasi.html';

		return false;
	}
	
});
