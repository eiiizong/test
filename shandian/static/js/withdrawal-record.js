
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			withdrawalList: [
				{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					withdrawalNum: 236.00,
					withdrawalSuccess: false,
					bankCardNumber: '****   ****   ****   0983',
					ymd: '2018.11.16',
					hms: '12:23:12'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					withdrawalNum: 236.00,
					withdrawalSuccess: true,
					bankCardNumber: '****   ****   ****   0983',
					ymd: '2018.11.16',
					hms: '12:23:12'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					withdrawalNum: 236.00,
					withdrawalSuccess: true,
					bankCardNumber: '****   ****   ****   0983',
					ymd: '2018.11.16',
					hms: '12:23:12'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					withdrawalNum: 236.00,
					withdrawalSuccess: true,
					bankCardNumber: '****   ****   ****   0983',
					ymd: '2018.11.16',
					hms: '12:23:12'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					withdrawalNum: 236.00,
					withdrawalSuccess: true,
					bankCardNumber: '****   ****   ****   0983',
					ymd: '2018.11.16',
					hms: '12:23:12'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					withdrawalNum: 236.00,
					withdrawalSuccess: true,
					bankCardNumber: '****   ****   ****   0983',
					ymd: '2018.11.16',
					hms: '12:23:12'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					withdrawalNum: 236.00,
					withdrawalSuccess: true,
					bankCardNumber: '****   ****   ****   0983',
					ymd: '2018.11.16',
					hms: '12:23:12'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					withdrawalNum: 236.00,
					withdrawalSuccess: true,
					bankCardNumber: '****   ****   ****   0983',
					ymd: '2018.11.16',
					hms: '12:23:12'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					withdrawalNum: 236.00,
					withdrawalSuccess: true,
					bankCardNumber: '****   ****   ****   0983',
					ymd: '2018.11.16',
					hms: '12:23:12'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					withdrawalNum: 236.00,
					withdrawalSuccess: true,
					bankCardNumber: '****   ****   ****   0983',
					ymd: '2018.11.16',
					hms: '12:23:12'
				},
			],
			deta: '',
			totalSale: '854453.22',
			pickerValue: new Date()
		} 
	},
	mounted () {
		this.init();
	},
	methods: {
		init: function () {
			this.initDate();
		},
		getTotalMoney: function () {
			var _this = this;
			var data = _this.orderList;
			var len = data.length;
		},
		initDate() {
			var now = new Date();
			var years = now.getFullYear();
			var month = now.getMonth() + 1;
			this.deta = years + '-' + month
		},
		openPicker() {
			var rootDOM = this.$el;
			var targetDOM = rootDOM.getElementsByClassName('picker-slot picker-slot-center');
			targetDOM[targetDOM.length - 1].style.display = 'none';
			console.log(targetDOM);
			
			this.$refs.picker.open();
			console.log(this.$el);
			this.$el.style.position = "fixed";
		},
		handleConfirm(e) {
			var years = e.getFullYear();
			var month = e.getMonth() + 1;
			this.deta = years + '-' + month;
			this.$el.style.position = "relative";
		},
		cancal() {
			this.$el.style.position = "relative";
		}

	},
	components: {
		// draggable
	}
});