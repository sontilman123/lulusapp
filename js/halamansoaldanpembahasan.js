window.addEventListener('load',function() {

	//var type 	= localStorage.getItem("estudia_type");
	//var course	= localStorage.getItem("estudia_course");
	
	var pilihan	= localStorage.getItem("lulusapp_pilihan");
	var tipe	= localStorage.getItem("lulusapp_tipe");
	var tahun	= localStorage.getItem("lulusapp_tahun");
	var mapel	= localStorage.getItem("lulusapp_mapel");
	
	var page	= location.search.split('page=')[1];
	
	var prev_button	= document.getElementById('prev_button');
	var next_button	= document.getElementById('next_button');
	
	if (page == "1") {
		prev_button.disabled = true;
		prev_button.style.backgroundColor = "gray";
		//prev_button.style.display = "none";
		//next_button.style.display = "inline-block";
	} else if (page == "15") {
		next_button.disabled = true;
		next_button.style.backgroundColor = "gray";
		//prev_button.style.display = "inline-block";
		//next_button.style.display = "none";
	} else {
		//prev_button.style.display = "inline-block";
		//next_button.style.display = "inline-block";
	}
	
	//alert(page);
	//$('#type').append(type);
	//$('#course').append(course);
	
	var info	= "Soal " + converter(tipe) + " mata pelajaran " + converter(mapel) + " tahun " + tahun;
	
	$('#information').append(info);
	
	if (pilihan == "soalpembahasan") {
	//C:\xampp\htdocs\lulusapp\assets\bank\soal\sbmptn\bindonesia\2000
		var file 	= "../assets/bank/soal/" + tipe + "/" + mapel + "/" + tahun + "/" + page + ".txt";
		//alert(file);
		var submit 	= document.getElementsByName('submit')[0];
		
		var xhr = new XMLHttpRequest();
		xhr.open("GET", file, true);
		xhr.onreadystatechange = function ()
		{
			if(xhr.readyState === 4)
			{
				if(xhr.status === 200 || xhr.status == 0)
				{
					var response = JSON.parse(xhr.responseText);
					
					$('#question').append(page + ". " + response["soal"]);
					
					$('#pil_a').append(response["pil_a"]);
					$('#pil_b').append(response["pil_b"]);
					$('#pil_c').append(response["pil_c"]);
					$('#pil_d').append(response["pil_d"]);
					
					$('#discussion_answer').append(response['jawaban']);
					$('#discussion_explanation').append(response['pembahasan']);
					
				}
			}
		}
		xhr.send(null);
	} else {
		window.location.href = 'home.html';
	}
	
	prev_button.onclick = function(){
		window.location.href = 'halamansoaldanpembahasan.html?page=' + (parseInt(page) - 1);
	};
	
	next_button.onclick = function(){
		window.location.href = 'halamansoaldanpembahasan.html?page=' + (parseInt(page) + 1);
	};
	
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