
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			phoneNumber: '',
			code: '',
			password: '',
		} 
	},
	methods: {
		init: function () {
			
		},
		btnOk: function () {
			this.showPopup = !this.showPopup;
		},
		btnCancel: function () {
			this.showPopup = !this.showPopup;
		},
		
	},
	components: {
		// draggable
	}
});