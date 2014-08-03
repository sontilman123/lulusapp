window.addEventListener('load',function() {

	var pilihan	= localStorage.getItem("lulusapp_pilihan");
	var tipe	= localStorage.getItem("lulusapp_tipe");
	var tahun	= localStorage.getItem("lulusapp_tahun");
	var mapel	= localStorage.getItem("lulusapp_mapel");
	
	tahun = parseInt(tahun) + Math.floor((Math.random() * 13));
	
	var page = Math.floor((Math.random() * 15) + 1);
	
	var info	= "Soal " + converter(tipe) + " mata pelajaran " + converter(mapel);
	
	$('#information').append(info);
	
	var anothers		= document.getElementsByClassName("another");
	var homes			= document.getElementsByClassName("home");
	
	//alert(anothers.length)
	
	var another_button;
	var home_button;
	
	var right_answer	= document.getElementById('right-answer-id');
	var wrong_answer	= document.getElementById('wrong-answer-id');
	
	if (pilihan == "latihan") {
		var file 	= "../assets/bank/soal/" + tipe + "/" + mapel + "/" + tahun + "/" + page + ".txt";
		alert(file);
		var coba 	= "../assets/bank/soal/sbmptn/bindonesia/2000/1.txt";
		var submit 	= document.getElementsByName('submit')[0];
		
		var jawaban = "";
		
		$('#rad_a').focus();
		
		var xhr = new XMLHttpRequest();
		xhr.open("GET", coba, true);
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
					
					jawaban = response["jawaban"];
					
				}
			}
		}
		xhr.send(null);
		
		document.getElementById('answer').onsubmit = function() {
			var selected = $("input[type='radio'][name='answers']:checked");
			if (jawaban == selected.val()) {
				//alert("jawaban benar!");
				right_answer.style.display = "block";
				//another_button 	= anothers[0];
				//home_button		= homes[0];
			} else {
				//alert("jawaban salah!");
				wrong_answer.style.display = "block";
				$('#corected').append(jawaban);
				//another_button 	= anothers[1];
				//home_button		= homes[1];
			}
			//this.disabled = true;
			//document.getElementById('answer').disabled = true;
			$('input[name=answers]').attr('disabled', 'disabled').attr('checked', false); 
			$('input[name=submit]').attr('disabled', 'disabled');
			return false;
		};	
		
	} else {
		window.location.href = 'home.html';
	}
	
	for (var i = 0; i < 2; i++) {
		anothers[i].onclick = function(){
			location.reload();
		};
		
		homes[i].onclick = function(){
			window.location.href = 'home.html';
		};
	}
});

function converter(before) {
	switch(before) {
		case "sbmptn":
			return "SBMTPN";
			break;
		case "un":
			return "UN";
			break;
		case "matematikadasar":
			return "Matematika Dasar";
			break;
		case "matematikaipa":
			return "Matematika IPA";
			break;
		case "matematika":
			return "Matematika";
			break;
		case "bindonesia":
			return "Bahasa Indonesia";
			break;
		case "binggris":
			return "Bahasa Inggris";
			break;
		case "fisika":
			return "Fisika";
			break;
		case "kimia":
			return "Kimia";
			break;
		case "biologi":
			return "Biologi";
			break;
		case "sejarah":
			return "Sejarah";
			break;
		case "ekonomi":
			return "Ekonomi";
			break;
		case "sosiologi":
			return "sosiologi";
			break;
		case "geografi":
			return "Geografi";
			break;
		default:
			return before;
		}
}