
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
			deta: '11-2',
			totalSale: '854453.22',
			pickerValue: ''
		} 
	},
	methods: {
		init: function () {
			
		},
		getTotalMoney: function () {
			var _this = this;
			var data = _this.orderList;
			var len = data.length;
		},
		openPicker() {
			this.$refs.picker.open();
		},
		handleConfirm(e) {
			console.log(e)
		}

	},
	components: {
		// draggable
	}
});