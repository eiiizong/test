var app = new Vue({
	el: '#app',
	data: function() {
		return {
			date: '',
			price: '',
			workTimes: [],
			tag: '',
			index: 0
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		// 初始化
		init() {
			if (this.workTimes.length === 0) {
				this.addPeriod();
			}
		},
		// 打开选择时间 picker 
		openSelectTime(tag, index) {
			this.tag = tag;
			this.index = index;
			this.$refs.picker.open();
		},
		// 选择时间 点击确定按钮
		handleConfirm(date) {
			var arr = this.tag.split('');
			var data = this.workTimes;
			var index = this.index;
			if (arr.length !== 0) {
				if (arr[0] === 's') {
					data[index].startTime = date;
				} else {
					data[index].endTime = date;
				}
			}
		},
		// 选择时间 点击取消按钮
		cancal() {

		},
		// 添加时间段
		addPeriod() {
			var _this = this;
			var newData = _this.workTimes;
			var createPeriodItem = function(arr) {
				var newItem = {};
				newItem.name = '时间段' + (arr.length + 1);
				newItem.startTime = '';
				newItem.endTime = '';
				return newItem;
			};
			newData.push(createPeriodItem(newData));
			this.$forceUpdate();
		},
		// 删除时间段
		deletePeriod(index) {
			this.workTimes.splice(index, 1);
			this.$forceUpdate();
		}
	},
});
