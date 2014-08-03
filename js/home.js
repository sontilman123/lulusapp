window.addEventListener('load',function() {
	var menu_belajar		= document.getElementById('menu_belajar');
	var menu_latihan		= document.getElementById('menu_latihan');
	var menu_search			= document.getElementById('menu_search');
	var menu_achievement	= document.getElementById('menu_achievement');
	
	//localStorage.removeItem("estudia_type");
	//localStorage.removeItem("estudia_course");
	
	localStorage.removeItem("lulusapp_pilihan");
	localStorage.removeItem("lulusapp_tipe");
	localStorage.removeItem("lulusapp_tahun");
	localStorage.removeItem("lulusapp_mapel");
	
	menu_belajar.onclick=function(){
		window.location.href = 'pilihantipe.html';
		localStorage.setItem("lulusapp_pilihan", "soalpembahasan");
	};
	
	menu_latihan.onclick=function(){
		window.location.href = 'pilihantipe.html';
		localStorage.setItem("lulusapp_pilihan", "latihan");
	};
	
	menu_search.onclick=function(){
		window.location.href = 'pilihantipe.html';
	};
	
	menu_achievement.onclick=function(){
		window.location.href = '3-achievement.html';
	};	

});