var app = new Vue({
	el: '#app',
	data: function () {
		return {
			checkBoxData: [],
			canClick: false,
			number: 59,
			code: ''
		}
	},
	mounted () {
		this.init();
	},
	methods: {
		init: function () {
			this.getCodeTimer();
		},
		getCodeTimer() {
			var _this = this;
			var num = this.number;
			var timer;
			timer = setInterval(function () {
				if (num == 1) {
					clearInterval(timer);
					_this.canClick = true;
					_this.number = 59;
				} else {
					num--;
					_this.number = num;
				}
			}, 1000);
		},
		clickBtn() {
			this.canClick = false;
			this.getCodeTimer();
		}
		
	}
});