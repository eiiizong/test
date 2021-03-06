var app = new Vue({
	el: '#app',
	data: function () {
		return {
			date: new Date(),
			choiceDate: '',
			daysDate: [],
			lineOnData: [100, 12, 21, 54, 260, 830, 710, 10, 12, 21, 54, 260, 830, 710, 10, 12, 21, 54, 260, 830, 710, 10, 12, 21, 54, 260, 830, 710, 100, 20, 31],
			lineOffData: [12, 21, 54, 260, 830, 710, 10, 12, 21, 54, 260, 830,],
			years: '',
			month: ''
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			this.calcHeight();
			this.initDate();
			this.charts();
		},
		// 图表
		charts() {
			var _this = this;
			var chartDOM = this.$refs.myChart;
			var mychart = echarts.init(chartDOM);
			var options = {
				title: {
					text: '',
					subtext: ''
				},
				tooltip: {
					trigger: 'item'
				},
				legend: {
					data: ['线上支付', '线下支付'],
					show: true,
					orient: 'vertical',
					right: 0,
					itemWidth: 10,

				},
				toolbox: {
					show: false
				},
				calculable: true,
				xAxis: [{
					name: '日期',
					type: 'category',
					axisLabel: {
						interval: 0
					},
					show: true,
					boundaryGap: false,
					data: _this.daysDate,
					axisLine: {
						show: true
					},
					//y轴刻度线
					axisTick: {
						show: false
					},
					splitLine: { //网格线
						show: false
					},

				}],
				yAxis: [{
					name: '单位(千)',
					show: true,
					type: 'value',
					//y轴
					axisLine: {
						show: false
					},
					//y轴刻度线
					axisTick: {
						show: false
					},
					splitLine: { //网格线
						show: false
					},
					slient: false
				}],
				//网格线
				splitLine: {
					show: false
				},
				dataZoom: [{
					type: 'inside',
					xAxisIndex: [0],
					left: '9%', //滚动条靠左侧的百分比 
					bottom: -5,
					start: 0, //滚动条的起始位置 
					end: 20, //滚动条的截止位置（按比例分割你的柱状图x轴长度） 
				}],
				series: [{
					name: '线上支付',
					type: 'line',
					smooth: true,
					itemStyle: {
						normal: {
							areaStyle: {
								type: 'default'
							},
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{ offset: 0, color: '#f00' },
								{ offset: 1, color: '#fff' }
							]),
							lineStyle: {
								width: 2,
								type: 'solid',
								color: "#f00"
							}
						}
					},
					symbolSize: 8, //折线点的大小
					data: _this.lineOnData
				},
				{
					name: '线下支付',
					type: 'line',
					smooth: true,
					itemStyle: {
						normal: {
							areaStyle: {
								type: 'default'
							},
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{ offset: 0, color: '#ffc80b' },
								{ offset: 1, color: '#fff' }
							]),
							lineStyle: {
								width: 2,
								type: 'solid',
								color: "#ffc80b"
							}
						}
					},
					symbolSize: 8, //折线点的大小
					data: _this.lineOffData
				},
				]
			};
			mychart.setOption(options);
			mychart.on('click', function(param) {
				console.log(param);
				var url = param.data.url;
				// window.location.href = url;
			});
		},
		// 计算总价
		getTotalMoney() {
			var _this = this;
			var data = _this.orderList;
			var len = data.length;
		},
		// 初始化年月
		initDate() {
			var now = new Date();
			var years = now.getFullYear();
			var month = now.getMonth() + 1;
			this.years = years;
			this.month = month;
			this.choiceDate = years + '年' + month + '月';
			this.calcDays(years, month);
		},
		openPicker() {
			var rootDOM = this.$el;
			var targetDOM = rootDOM.getElementsByClassName('picker-slot picker-slot-center');
			targetDOM[targetDOM.length - 1].style.display = 'none';
			this.$refs.picker.open();
		},
		handleConfirm(e) {
			var years = e.getFullYear();
			var month = e.getMonth() + 1;
			this.years = years;
			this.month = month;
			this.choiceDate = years + '月' + month + '日';
			this.calcDays(years, month);
		},
		cancal() {
		},
		calcDays: function (y, m) {
			var day = new Date(y, m, 0).getDate();
			console.log(day);
			var arr = [];
			for (var i = 0; i < day; i++) {
				arr.push((i + 1) + '号');
			}
			this.daysDate = arr;
			this.charts();
		},
		calcHeight() {
			var recordBoxH = this.$refs.recordBox.offsetHeight;
			var dataBoxH = this.$refs.dataBox.offsetHeight;
			var chartBoxDOM = this.$refs.chartBox;
			var h = document.body.clientHeight - recordBoxH - dataBoxH - 94;
			chartBoxDOM.style.height = h + 'px';
		}
	},
});
