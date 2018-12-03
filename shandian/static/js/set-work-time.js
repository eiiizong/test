
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			pickerVisible: new Date().getTime(),
			price: '',
			workTimes: [
				{ name: '时间段1', startTime: '1', endTime: ''},
			]
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