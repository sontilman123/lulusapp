window.addEventListener('load',function() {
	
	var UN		= document.getElementById('mapel_UN');
	var SBMPTN	= document.getElementById('mapel_SBMPTN');
	
	if (localStorage.getItem("lulusapp_tipe") == "un") {
		SBMPTN.style.display = "none";
	} else if (localStorage.getItem("lulusapp_tipe") == "sbmptn") {
		UN.style.display 	 = "none";
	} else {
		window.location.href = 'home.html';
	} 

});

function direct(mapel) {
	alert(mapel);
	//window.location.href = 'pilihanmapel.html';
	localStorage.setItem("lulusapp_mapel", mapel);
}