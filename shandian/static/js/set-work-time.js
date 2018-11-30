
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			pickerVisible: new Date().getTime(),
			price: '',
		} 
	},
	methods: {
		init: function () {
			
		},
		open: function () {
			this.$refs.picker.open();
		},
		handleConfirm: function (data) {
			let date = moment(data).format('YYYY.MM.DD')
			this.dateTime = date;
		}
	},
	components: {
		// draggable
	}
});