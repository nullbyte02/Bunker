function ytSearch(){
	var q = document.getElementById("yt_term").value;
	if(q!=""){
		location.href="apps/yt-cl/pages/search.html?q="+q;
	}
}
function ytWatch(){
	var q = document.getElementById("yt_id").value;
	if(q!=""){
		location.href="apps/yt-cl/pages/watch.html?id="+q;
	}
}