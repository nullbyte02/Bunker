document.getElementById("prxyz_select").addEventListener("change", function(){
	if(localStorage.prxyzPreflight==1){
		goInternal("/apps/prxyz/get.html?id="+document.getElementById("prxyz_select").selectedIndex);
	} else {
		localStorage.prxyzPreflight=1;
		goInternal("/apps/prxyz/preflight.html?id="+document.getElementById("prxyz_select").selectedIndex);
	}
});