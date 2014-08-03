window.addEventListener('load',function() {
	
	for (var year = 2000; year < 2014; year++) {
		$("#menu_button").append("<button type=\"button\" id=\"tahun_soal\" value=\"" + year + "\" onclick=\"direct(this.value)\">" + year + "</button><br />");
	}
});

function direct(year) {
	//alert(year);
	window.location.href = 'pilihanmapel.html';
	localStorage.setItem("lulusapp_tahun", year);
}