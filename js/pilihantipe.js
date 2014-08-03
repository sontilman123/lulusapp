window.addEventListener('load',function() {
	var tipe_un			= document.getElementById('tipe_un');
	var tipe_sbmptn		= document.getElementById('tipe_sbmptn');
	
	tipe_un.onclick=function(){
		localStorage.setItem("lulusapp_tipe", "un");
		
		if (localStorage.getItem("lulusapp_pilihan") == "soalpembahasan") {
			window.location.href = 'pilihantahun.html';
		} else if (localStorage.getItem("lulusapp_pilihan") == "latihan") {
			localStorage.setItem("lulusapp_tahun", "2000");
			window.location.href = 'pilihanmapel.html';
		} else {
			window.location.href = 'home.html';
		}
		
	};
	
	tipe_sbmptn.onclick=function(){
		localStorage.setItem("lulusapp_tipe", "sbmptn");
		
		if (localStorage.getItem("lulusapp_pilihan") == "soalpembahasan") {
			window.location.href = 'pilihantahun.html';
		} else if (localStorage.getItem("lulusapp_pilihan") == "latihan") {
			localStorage.setItem("lulusapp_tahun", "2000");
			window.location.href = 'pilihanmapel.html';
		} else {
			window.location.href = 'home.html';
		}
	};
	
});