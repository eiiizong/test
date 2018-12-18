

var app = new Vue({
	el: '#app',
	data: function () {
		return {
			changText: '川道小炒',
		}
	},
		
	mounted: function () {
		this.init();
	},
	methods: {
		init: function () {
			this.onfocus();
		},
		onfocus: function () {
	
		}
	},
	components: {
		// draggable
	}
});

