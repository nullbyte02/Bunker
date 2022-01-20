window.apps["info_apps"] = {};
window.apps["info_apps"]["tile"] = `<div class="box_widget">
	<div>
		<h3>How apps works</h3>
	</div>
	<div>
		<ul class="list">
			<li class="emph">What are apps?</li>
			<li>Each app is a different plugin to the home screen, and sometimes beyond (example: communication<br>has multiple back pages)</li>
			<li>Since this "site" is just files on a usb drive, users can install apps as they like, for example<br>a game list app, or a news/rss feed app</li>
			<li class="emph">How do I install apps?</li>
			<li>Download and extract the app's folder, then place it under the <code>apps</code> folder</li>
			<li>Be careful not to rename the folder, as it will break the app</li>
			<li>Then open config.json (in the root folder of this site) and add a item with the app's folder name</li>
			<li>The config.json file will have a few apps already on it, so follow the same pattern</li>
			<li><code>"apps":["app1", "app2", "app3"]</code> adding "app4" would look like <code>"apps":["app1", "app2", "app3", "app4"]</code></li>
			<li><a href="https://www.javatpoint.com/json-array" target="_blank" rel="no opener no referrer">More Info on JSON Array</a></li>
		</ul>
	</div>
</div>`;