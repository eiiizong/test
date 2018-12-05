
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			orderList: [
				{
					takeFoodNumber: 1115,
					isReplaceOrder:false,
					seatNum: 1115,
					orderFoods: [
						{
							foodName: '川道口碑脆皮鸭',
							foodSize: '大',
							foodNumber: 2,
							price: '1115.00',
							allPrice: '1115.00'
						},
						{
							foodName: '川道口碑脆皮鸭',
							foodSize: '大',
							foodNumber: 2,
							price: '1115.00',
							allPrice: '1115.00'
						},
					],
					totalMoney: '',
					orderTime: ''
				}
			]
		} 
	},
	methods: {
		init: function () {
			
		}
	},
	components: {
		// draggable
	}
});