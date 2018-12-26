var app = new Vue({
	el: '#app',
	data: function() {
		return {
			foodDesc: '',
			recommend: true,
			putaway: false,
			isAddStandard: true,
			price: '',
			foodName: '',
			foodUnit: '',
			foodType: '', //菜品分类
			sizePrices: [],
			TS: '',
			// 选择分类
			foodTypePopup: false,
			slotsFoodType: [{
				flex: 1,
				values: ['分类1', '分类2'],
				className: 'slotsFoodType',
				textAlign: 'center'
			}],
			// 选择偏好
			selectLikePopup: false,
			likes: [{
					name: '不要葱',
					checked: false
				},
				{
					name: '不要蒜',
					checked: false
				},
				{
					name: '不要辣',
					checked: false
				},
				{
					name: '不要肉',
					checked: false
				},

				{
					name: '不要饭',
					checked: false
				},
				{
					name: '不要菜',
					checked: false
				}
			],
			selectedLike: [],
		}
	},
	mounted: function() {
		this.init();
	},
	methods: {
		// 初始化
		init: function() {
			if (this.sizePrices.length === 0) {
				this.addSize();
			}
		},
		// 添加规格
		addSize: function() {
			var arr = this.sizePrices;
			var order = this.sizePrices.length;
			var item = {
				size: '',
				price: '',
				id: order
			};
			arr.push(item);
			this.$forceUpdate();
		},
		// 删除规格
		deleteSize: function(index) {
			this.sizePrices.splice(index, 1);
			this.$forceUpdate();
		},
		// 显示分类
		showFoodTypePopup: function() {
			this.foodTypePopup = !this.foodTypePopup;
		},
		// 分类确认
		foodTypeOK: function() {
			this.foodType = this.TS;
			this.foodTypePopup = !this.foodTypePopup;
		},
		// 分类取消
		foodTypeCancel: function() {
			this.foodTypePopup = !this.foodTypePopup;
		},
		// 分类选择
		foodTypeOnValuesChange: function(picker, values) {
			this.TS = values[0];
		},
		showSelectLikePopup: function() {
			this.selectLikePopup = !this.selectLikePopup;
		},
		// 取消选择偏好
		selectLikeCancel: function() {
			this.selectLikePopup = !this.selectLikePopup;
		},
		// 确认选择偏好
		selectLikeOK: function() {
			var data = this.likes;
			var arr = [];
			data.map((v, i) => {
				if (v.checked) {
					arr.push(v.name);
				}
			});
			this.selectedLike = arr;
			this.selectLikePopup = !this.selectLikePopup;
		},
		// 点击偏好选项
		changeCheckBox(index) {
			var data = this.likes
			data.map((v, i) => {
				if (i == index) {
					data[index].checked = !data[index].checked;
				}
			});
		}

	},
	components: {
		// draggable
	}
});
