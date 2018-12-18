
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			orderDetail: {
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
		}
	},
	mounted: function () {
		this.init();
	},
	methods: {
		init: function () {
			this.caclTotalNum();
			this.caclpalyMoney();
		},
		// 总计 点餐数
		caclTotalNum: function () {
			console.log(1)
			var foods = this.orderDetail.foods;
			var totalNum = 0;
			console.log(foods)
			for (var i = 0; i < foods.length; i++) {
				var item = parseFloat(foods[i].num);
				totalNum += item;
			}
			this.orderDetail.totalNum = totalNum;
			console.log(this.totalNum)
		},
		caclpalyMoney: function () {
			var foods = this.orderDetail.foods;
			var payMoney = 0;
			for (var i = 0; i < foods.length; i++) {
				var price = parseFloat(foods[i].price);
				var num = parseFloat(foods[i].num);
				payMoney += price * num;
				foods[i].allPrice = price * num;
			}
			this.orderDetail.payMoney = payMoney;
		}
	},
	components: {
		// draggable
	}
});