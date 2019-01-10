var app = new Vue({
	el: '#app',
	data: function() {
		return {
			defaultSizes: [{
					name: '小酒店',
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
						},
						{
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
				},
				{
					name: '西餐厅',
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
			],
			index: 0
		}
	},
	methods: {
		init: function() {

		},
		allChoice() {
			var data = this.defaultSizes[this.index].children;
			data.map(function(item, i) {
				data[i].checked = true;
			});
		},
		sizeChange(index) {
			console.log(index);
			var data = this.defaultSizes[this.index].children;
			data.map((item, i) => {
				if (i == index) {
					data[index].checked = !data[index].checked;
				}
			});
		},
		choiceMainType(index) {
			this.index = index;
			var data = this.defaultSizes;
			data.map(function(item, i) {
				if (i == index) {
					data[i].selected = true;
				} else {
					data[i].selected = false;
				}
			});
			this.allChoice();
		},
		save() {
			var data = this.defaultSizes[this.index].children;
			var type = this.defaultSizes[this.index].name;
			console.log('您选择的餐厅类型是：', type);
			var arr = [];
			data.map(function(item, i) {
				if (item.checked) {
					arr.push(data[i].sizeName);
				}
			});
			console.log('您选择的餐厅规格有：', arr.toString());
		}
	},
	components: {
		// draggable
	}
});
