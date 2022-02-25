const urlq = new URLSearchParams(
	(parent.document.getElementsByTagName("iframe")[0].src+"").split("?")[1]
);
const f = urlq.get("f");
const n = urlq.get("n");
window.onerror = function(message, source, lineno, colno, error) {
	document.getElementById("info").innerHTML = `Critical Exception with ruffle
	${message} in ${source}`;
};
if(n==undefined||f==undefined){
	document.getElementById("info").textContent = "missing id/title";
} else {
	document.getElementById("gamewrap").innerHTML = `<iframe src="https://cattn.github.io/games${f}"></iframe>`;
}