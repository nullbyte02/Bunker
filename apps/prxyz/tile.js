document.getElementById("prxyz_select").addEventListener("change", function(){
	location.href="apps/prxyz/get.html?id="+document.getElementById("prxyz_select").selectedIndex;
});