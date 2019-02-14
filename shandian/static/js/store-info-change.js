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
				tag: '',
			},
			text: '',
			popupVisible: false,
			code: '',
			canClick: true,
			number: 60,
		}
	},
	methods: {
		init: function () {
			
		},
		changeInfo: function(e,tag) {
			this.text = e;
			this.tag = tag;
			this.popupVisible = true;
			console.log(e);
			console.log(tag);
		},
		saveInfo: function() {
			var tag = this.tag;
			var val = this.text;
			this.storeInfo[tag] = val;
			this.popupVisible = false;
		}
	}
});