var app = new Vue({
	el: '#app',
	data: function() {
		return {
			showPopup: true
		}
	},
	mounted: function() {
		this.init();
	},
	methods: {
		init: function() {
			
		},
		print() {
			if (!!window.ActiveXObject || "ActiveXObject" in window) {
				this.remove_ie_header_and_footer();
			}
			window.print();
		},
		remove_ie_header_and_footer() {
			// IE 设置去除页眉页脚  
			var hkey_root, hkey_path, hkey_key;
			hkey_path = "HKEY_CURRENT_USER\\Software\\Microsoft\\Internet Explorer\\PageSetup\\";
			try {
				var RegWsh = new ActiveXObject("WScript.Shell");
				RegWsh.RegWrite(hkey_path + "header", "");
				RegWsh.RegWrite(hkey_path + "footer", "");
			} catch (e) {}
		}
	},
	components: {
		// draggable
	}
});
