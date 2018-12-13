
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			orderList: [
				{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					orderNum: 236,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: true,
					foodPrice: '11.15'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
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
		initDate: function() {
			var now = new Date();
			var years = now.getFullYear();
			var month = now.getMonth() + 1;
			this.deta = years + '-' + month
		},
		openPicker: function() {
			var rootDOM = this.$el;
			var targetDOM = rootDOM.getElementsByClassName('picker-slot picker-slot-center');
			targetDOM[targetDOM.length - 1].style.display = 'none';
			console.log(targetDOM);
			
			this.$refs.picker.open();
			console.log(this.$el);
			this.$el.style.position = "fixed";
		},
		handleConfirm: function(e) {
			var years = e.getFullYear();
			var month = e.getMonth() + 1;
			this.deta = years + '-' + month;
			this.$el.style.position = "relative";
		},
		cancal: function() {
			this.$el.style.position = "relative";
		}

	},
	components: {
		// draggable
	}
});