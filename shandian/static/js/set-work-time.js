var app = new Vue({
	el: '#app',
	data: function() {
		return {
			date: '',
			price: '',
			workTimes: [],
			tag: ''
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
		open(tag) {
			var _this = this;
			this.tag = tag;
			console.log(window)
			// this.$el.style.position = "fixed";
			this.$refs.picker.open();
			
// 			var mask = this.$el.getElementsByClassName('v-modal');
// 			console.log(mask);
// 			mask.onclick = function () {
// 				_this.$el.style.position = "relative";
// 			}
		},
		// 选择时间 点击确定按钮
		handleConfirm(date) {
			var tag = this.tag;
			var arr = tag.split('');
			var data = this.workTimes;
			var index = 0;
			// 三位数
			if (arr.length) {
				console.log(arr);
				var num = '';
				for (var i = 1; i < arr.length; i++) {
					num = num + arr[i];
					console.log(num);
				}
				index = parseInt(num);
			}
			if (arr[0] === 's') {
				data[index].startTime = date;
			} else {
				data[index].endTime = date;
			}
			this.$el.style.position = "relative";
		},
		// 选择时间 点击取消按钮
		cancal() {
			this.$el.style.position = "relative";
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
		},
		// 删除时间段
		deletePeriod(index) {
			this.workTimes.splice(index, 1);
		}
	},
});
