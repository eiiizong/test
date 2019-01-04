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
			clickFalse: false,
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
			foodTypes: [{
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
			deleteSizePopup: false,
			index: 0,
			selectedFoodTypes: [],
			selectDefaultSizePopup: true,
			defaultSizes: [{
					name: '中餐厅',
					children: [{
							sizeName: '大',
							checked: false
						},
						{
							sizeName: '中',
							checked: false
						},
						{
							sizeName: '小',
							checked: false
						}
					],
					selected: true
				},
				{
					name: '中餐厅',
					children: [{
							sizeName: '大',
							checked: false
						},
						{
							sizeName: '中',
							checked: false
						},
						{
							sizeName: '小',
							checked: false
						}
					],
					selected: false
				},
				{
					name: '中餐厅',
					children: [{
							sizeName: '大',
							checked: false
						},
						{
							sizeName: '中',
							checked: false
						},
						{
							sizeName: '小',
							checked: false
						}
					],
					selected: false
				}
			]
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
		// 显示分类
		showFoodTypePopup: function() {
			this.foodTypePopup = !this.foodTypePopup;
			this.calcFoodTypePopupScorllWarpperHeight();
		},
		// 分类确认
		foodTypeOK: function() {
			var data = this.foodTypes;
			var arr = [];
			data.map((v, i) => {
				if (v.checked) {
					arr.push(v.name);
				}
			});
			this.selectedFoodTypes = arr;
			this.foodTypePopup = !this.foodTypePopup;
			console.log(this.selectedFoodTypes);
		},
		// 分类取消
		foodTypeCancel: function() {
			this.foodTypePopup = !this.foodTypePopup;
		},
		// 分类选择
		foodTypeOnValuesChange: function(picker, values) {
			this.TS = values[0];
		},
		changeFoodTypeCheckBox: function(index) {
			var data = this.foodTypes;
			data.map((v, i) => {
				if (i == index) {
					data[index].checked = !data[index].checked;
				}
			});
		},
		// 显示偏好选择的弹窗
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
		},
		// 显示 删除规格弹窗
		showDeleteSizePopup: function(index) {
			this.index = index;
			this.deleteSizePopup = !this.deleteSizePopup;
		},
		// 取消删除规格
		deleteSizeCancel: function() {
			this.deleteSizePopup = !this.deleteSizePopup;
		},
		// 确认删除规格
		deleteSizeOK: function() {
			this.sizePrices.splice(this.index, 1);
			this.$forceUpdate();
			this.deleteSizePopup = !this.deleteSizePopup;
		},
		// 计算选择分类弹窗的高度
		calcFoodTypePopupScorllWarpperHeight: function() {
			var totalHeight = document.body.clientHeight;
			var DOM = this.$refs.foodTypePopupScorllWarpper;
			DOM.style.height = totalHeight / 2 - 41 + "px";
		},
		// 店铺类型
		storeType(index) {
			this.defaultSizes[this.index].children.map((v, i) => {
				this.defaultSizes[this.index].children[i].checked = false;
			});
			this.index = index;
			var data = this.defaultSizes;
			data.map((v, i) => {
				if (i == index) {
					data[i].selected = true;
				} else {
					data[i].selected = false;
				}
			});
		},
		sizeChange(index) {
			var data = this.defaultSizes[this.index].children;
			data.map((v, i) => {
				if (i == index) {
					data[i].checked = !data[i].checked;
				}
			});
		},
		isShowSelectDefaultSizePopup: function() {
			this.selectDefaultSizePopup = !this.selectDefaultSizePopup;
		},
		checkedSizeOK: function() {
			var arr = [];
			var data = this.defaultSizes[this.index].children;
			data.map((v, i) => {
				if (data[i].checked) {
					arr.push(data[i].sizeName);
				}
			});
			this.checkedSizes = arr;
			this.isShowSelectDefaultSizePopup();
			console.log(this.checkedSizes);
		}

	},
	components: {
		// draggable
	}
});
