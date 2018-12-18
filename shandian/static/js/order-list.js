
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			orderList: [
				{
					takeFoodNumber: 1115,
					userImg: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					isReplaceOrder: true,
					seatNum: 1115,
					foods: [
						{
							name: '川道口碑脆皮鸭',
							imgURl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
							size: '大',
							num: 3,
							price: '1115.00',
							allPrice: '1115.00',
							like: ['不要番茄', '不加肉']
						},
						{
							name: '川道口碑脆皮鸭',
							size: '大',
							num: 2,
							imgURl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
							price: '11.15',
							allPrice: '1115.00',
							like: []
						},
						{
							name: '川道口碑脆皮鸭',
							size: '大',
							num: 2,
							imgURl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
							price: '1115.00',
							allPrice: '1115.00',
							like: ['不要番茄', '不加肉']
						}
					],
					payMoney: '11.15',
					totalNum: '55',
					orderTime: '2018-11-07 12:18',
					orderPerson: 'Eiiizong',
					orderNumber: 'HSLD2831933847',
					more: false
				},
				{
					takeFoodNumber: 1115,
					userImg: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					isReplaceOrder: false,
					seatNum: 1115,
					foods: [
						{
							name: '川道口碑脆皮鸭',
							imgURl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
							size: '大',
							num: 3,
							price: '1115.00',
							allPrice: '1115.00',
							like: ['不要番茄', '不加肉']
						},
						{
							name: '川道口碑脆皮鸭',
							size: '大',
							num: 2,
							imgURl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
							price: '1115.00',
							allPrice: '1115.00',
							like: []
						},
						{
							name: '川道口碑脆皮鸭',
							size: '大',
							num: 2,
							imgURl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
							price: '1115.00',
							allPrice: '1115.00',
							like: ['不要番茄', '不加肉']
						}
					],
					payMoney: '11.15',
					totalNum: '55',
					orderTime: '2018-11-07 12:18',
					orderPerson: 'Eiiizong',
					orderNumber: 'HSLD2831933847'
				}
				, {
					takeFoodNumber: 1115,
					userImg: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					isReplaceOrder: false,
					seatNum: 1115,
					foods: [
						{
							name: '川道口碑脆皮鸭',
							imgURl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
							size: '大',
							num: 3,
							price: '1115.00',
							allPrice: '1115.00',
							like: ['不要番茄', '不加肉']
						},
						{
							name: '川道口碑脆皮鸭',
							size: '大',
							num: 2,
							imgURl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
							price: '1115.00',
							allPrice: '1115.00',
							like: []
						},
						{
							name: '川道口碑脆皮鸭',
							size: '大',
							num: 2,
							imgURl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
							price: '1115.00',
							allPrice: '1115.00',
							like: ['不要番茄', '不加肉']
						}
					],
					payMoney: '11.15',
					totalNum: '55',
					orderTime: '2018-11-07 12:18',
					orderPerson: 'Eiiizong',
					orderNumber: 'HSLD2831933847'
				},
				{
					takeFoodNumber: 1115,
					userImg: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					isReplaceOrder: false,
					seatNum: 1115,
					foods: [
						{
							name: '川道口碑脆皮鸭',
							imgURl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
							size: '大',
							num: 3,
							price: '1115.00',
							allPrice: '1115.00',
							like: ['不要番茄', '不加肉']
						},
						{
							name: '川道口碑脆皮鸭',
							size: '大',
							num: 2,
							imgURl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
							price: '1115.00',
							allPrice: '1115.00',
							like: []
						},
						{
							name: '川道口碑脆皮鸭',
							size: '大',
							num: 2,
							imgURl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
							price: '1115.00',
							allPrice: '1115.00',
							like: ['不要番茄', '不加肉']
						}
					],
					payMoney: '11.15',
					totalNum: '55',
					orderTime: '2018-11-07 12:18',
					orderPerson: 'Eiiizong',
					orderNumber: 'HSLD2831933847'
				}
			]
		}
	},
	mounted: function () {
		this.init();
	},
	methods: {
		init: function () {
			this.calaPrice();
		},
		more: function () {
			var arr = this.orderList;

		},
		calaPrice: function () {
			var _this = this;
			var foods = this.orderList;

			for (var i = 0; i < foods.length; i++) {
				var item = foods[i];
				var len = item.foods.length;
				var totalNum = 0;
				var payMoney = 0;
				for (var j = 0; j < len; j++) {
					var num = parseFloat(item.foods[j].num);
					totalNum += num;
					var price = parseFloat(item.foods[j].price);
					payMoney += num * price;
					item.foods[j].allPrice = num * price;
				}
				console.log(totalNum)
				item.totalNum = totalNum;
				item.payMoney = payMoney;
			}
		}
	},
	components: {
		// draggable
	}
});