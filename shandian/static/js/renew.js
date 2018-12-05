var app = new Vue({
	el: '#app',
	data: function() {
		return {
			buyDetails: [{
					time: '一年',
					nowPrice: '0723.00',
					oldPrice: '1115.00',
					isRecommend: true
				},
				{
					time: '两年',
					nowPrice: '723.00',
					oldPrice: '1115.00',
					isRecommend: false
				},
				{
					time: '三年',
					nowPrice: '723.00',
					oldPrice: '1115.00',
					isRecommend: false
				},
				{
					time: '四年',
					nowPrice: '723.00',
					oldPrice: '1115.00',
					isRecommend: false
				},
				{
					time: '五年',
					nowPrice: '723.00',
					oldPrice: '1115.00',
					isRecommend: false
				},
			],
			height: ''
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		init: function() {
			this.setHeight();
			this.resize();
		},
		setHeight() {
			var arr = this.$refs.buyBox;
			var w = arr[0].offsetWidth;
			for (let i = 0; i < arr.length; i++) {
				arr[i].style.height = w + 'px';
			}
		},
		resize() {
			var _this = this;
			window.onresize = function () {
				_this.setHeight();
			};
		}
	}
});
