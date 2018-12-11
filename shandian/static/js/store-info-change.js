var app = new Vue({
	el: '#app',
	data: function () {
		return {
			storeInfo: {
				headImgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
				name: '川道小炒',
				address: '成都市青羊区牧电路23号',
				merchant: '洋富柜',
				tel: '18482160080',
			},
			text: '',
			popupVisible: false
		}
	},
	methods: {
		init: function () {
			
		},
		changeInfo(e) {
			this.text = e;
			this.popupVisible = true;
			console.log(e);
		},
		saveInfo() {
			var val = this.text;
			this.popupVisible = false;
		}
	}
});