
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			date: '',
			price: '',
			workTimes: [
				{ name: '时间段1', startTime: '09:00', endTime: ''},
			]
		} 
	},
	methods: {
		init: function () {
			
		},
		open: function () {
			this.$refs.picker.open();
		},
		handleConfirm: function (date) {
			console.log(date);
		}
	},
	components: {
		// draggable
	}
});