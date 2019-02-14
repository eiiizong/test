var app = new Vue({
	el: '#app',
	data: function() {
		return {
			buyDetails: [{
					name: '免费版',
					nowPrice: '0.00',
					QRnumber: '1个二维码',
					oldPrice: '',
					isRecommend: false
				},
				{
					name: '初级版',
					QRnumber: '5个二维码',
					nowPrice: '199.00',
					oldPrice: '400.00',
					isRecommend: false
				},
				{
					name: '中级版',
					QRnumber: '10个二维码',
					nowPrice: '299.00',
					oldPrice: '6000.00',
					isRecommend: false
				},
				{
					name: '高级版',
					QRnumber: '20个二维码',
					nowPrice: '599.00',
					oldPrice: '1200.00',
					isRecommend: true
				}
			],
			height: '',
			goodsDetail: false,
			currentDetail: {}
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
			window.onresize = function() {
				_this.setHeight();
			};
		},
		resolvePopup: function(index) {
			this.currentDetail = this.buyDetails[index];
			this.goodsDetail = !this.goodsDetail;
		}
	}
});
