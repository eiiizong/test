
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			orderList: [
				{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					orderNum: 236,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: true,
					foodPrice: '11.15'
				},{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					orderNum: 239,
					orderPeople: 'Eiiizong',
					orderTime: '今天  12:34',
					isHelpOrder: false,
					foodPrice: '11.15'
				},{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
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
		},
		handleConfirm: function(e) {
			var years = e.getFullYear();
			var month = e.getMonth() + 1;
			this.deta = years + '-' + month;
		},
		cancal: function() {
			
		}

	},
	components: {
		// draggable
	}
});