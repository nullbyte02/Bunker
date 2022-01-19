function nodeScriptReplace(node) {
	if (nodeScriptIs(node) === true) {
		node.parentNode.replaceChild(nodeScriptClone(node), node);
	} else {
		var i = -1,
			children = node.childNodes;
		while (++i < children.length) {
			nodeScriptReplace(children[i]);
		}
	}

	return node;
}
function nodeScriptClone(node) {
	var script = document.createElement('script');
	script.text = node.innerHTML;

	var i = -1,
		attrs = node.attributes,
		attr;
	while (++i < attrs.length) {
		script.setAttribute((attr = attrs[i]).name, attr.value);
	}
	return script;
}

function nodeScriptIs(node) {
	return node.tagName === 'SCRIPT';
}
(async function () {
	var d = window._config;
	console.log(d);
	for (var i in d.apps) {
		var f = document.createElement("iframe");
		f.src="apps/"+d.apps[i]+"/tile.html";
		document.getElementsByClassName("applist")[0].appendChild(f);
	}
})();