var app = new Vue({
	el: '#app',
	data: function() {
		return {
			date: new Date(),
			choiceDate: '',
			chartOptions: {
				title: {
					text: 'ECharts 入门示例'
				},
				tooltip: {},
				legend: {
					data: ['销量']
				},
				xAxis: {
					data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			}

		}
	},
	mounted() {
		this.init();
	},
	methods: {
		charts() {
			console.log(this);
			var _this = this;
			var canvas = this.$refs.myChart;
			var myChart = echarts.init(canvas);
			myChart.setOptions(_this.chartOptions);
		},
		init: function() {
			this.initDate();
			this.charts();
		},
		getTotalMoney: function() {
			var _this = this;
			var data = _this.orderList;
			var len = data.length;
		},
		initDate() {
			var now = new Date();
			var years = now.getFullYear();
			var month = now.getMonth() + 1;
			this.choiceDate = years + '月' + month + '日';
		},
		openPicker() {
			var rootDOM = this.$el;
			var targetDOM = rootDOM.getElementsByClassName('picker-slot picker-slot-center');
			targetDOM[targetDOM.length - 1].style.display = 'none';
			this.$refs.picker.open();
			this.$el.style.position = "fixed";
		},
		handleConfirm(e) {
			var years = e.getFullYear();
			var month = e.getMonth() + 1;
			this.choiceDate = years + '月' + month + '日';
			this.$el.style.position = "relative";
		},
		cancal() {
			this.$el.style.position = "relative";
		},

	},
	components: {
		// draggable
	}
});
