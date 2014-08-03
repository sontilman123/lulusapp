window.addEventListener('load',function() {

	var type 	= localStorage.getItem("estudia_type");
	var course	= localStorage.getItem("estudia_course");
	
	$('#type').append(type);
	$('#course').append(course);
	
	if (type == "soal") {
		var file 	= "../assets/bank/" + type + "/" + course + "/1.txt";
		var submit 	= document.getElementsByName('submit')[0];
		
		$('#rad_a').focus();
		
		var xhr = new XMLHttpRequest();
		xhr.open("GET", file, true);
		xhr.onreadystatechange = function ()
		{
			if(xhr.readyState === 4)
			{
				if(xhr.status === 200 || xhr.status == 0)
				{
					var response = JSON.parse(xhr.responseText);
					
					$('#question').append(response["soal"]);
					
					$('#pil_a').append(response["pil_a"]);
					$('#pil_b').append(response["pil_b"]);
					$('#pil_c').append(response["pil_c"]);
					$('#pil_d').append(response["pil_d"]);
					
				}
			}
		}
		xhr.send(null);
		
		document.getElementById('answer').onsubmit = function() {
			var selected = $("input[type='radio'][name='answers']:checked");
			alert(selected.val());
			return false;
		};	
		
	} else if (type == "materi") {
		
	}
});