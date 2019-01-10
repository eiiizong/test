var app = new Vue({
	el: '#app',
	data: function() {
		return {
			orderList: [{
				imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
				orderNum: 236,
				orderPeople: 'Eiiizong',
				orderTime: '今天  12:34',
				isHelpOrder: true,
				foodPrice: '11.15'
			}, {
				imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
				orderNum: 239,
				orderPeople: 'Eiiizong',
				orderTime: '今天  12:34',
				isHelpOrder: false,
				foodPrice: '11.15'
			}, {
				imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
				orderNum: 239,
				orderPeople: 'Eiiizong',
				orderTime: '今天  12:34',
				isHelpOrder: false,
				foodPrice: '11.15'
			}, {
				imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
				orderNum: 239,
				orderPeople: 'Eiiizong',
				orderTime: '今天  12:34',
				isHelpOrder: false,
				foodPrice: '11.15'
			}, {
				imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
				orderNum: 239,
				orderPeople: 'Eiiizong',
				orderTime: '今天  12:34',
				isHelpOrder: false,
				foodPrice: '11.15'
			}, {
				imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
				orderNum: 239,
				orderPeople: 'Eiiizong',
				orderTime: '今天  12:34',
				isHelpOrder: false,
				foodPrice: '11.15'
			}, {
				imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
				orderNum: 239,
				orderPeople: 'Eiiizong',
				orderTime: '今天  12:34',
				isHelpOrder: false,
				foodPrice: '11.15'
			}, {
				imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
				orderNum: 239,
				orderPeople: 'Eiiizong',
				orderTime: '今天  12:34',
				isHelpOrder: false,
				foodPrice: '11.15'
			}, {
				imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
				orderNum: 239,
				orderPeople: 'Eiiizong',
				orderTime: '今天  12:34',
				isHelpOrder: false,
				foodPrice: '11.15'
			}, {
				imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
				orderNum: 239,
				orderPeople: 'Eiiizong',
				orderTime: '今天  12:34',
				isHelpOrder: false,
				foodPrice: '11.15'
			}, ],
			deta: '',
			totalSale: '854453.22',
			pickerValue: new Date()
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		init: function() {
			this.calcDate(new Date());
		},
		getTotalMoney: function() {
			var _this = this;
			var data = _this.orderList;
			var len = data.length;
		},
		// 计算时间 格式化时间
		calcDate: function(date) {
			var years = date.getFullYear();
			var month = date.getMonth() + 1;
			if (month > 0 && month < 10) {
				month = '0' + month;
			}
			var day = date.getDate();
			if (day > 0 && day < 10) {
				day = '0' + day;
			}
			this.deta = years + '-' + month + '-' + day;
		},
		openPicker: function() {
			this.$refs.picker.open();
		},
		handleConfirm: function(e) {
			this.calcDate(e);
		},
		cancal: function() {

		}

	},
	components: {
		// draggable
	}
});
