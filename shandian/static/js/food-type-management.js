var app = new Vue({
	el: '#app',
	data: function() {
		return {
			myArray: [{
					name: '滋味灌汤',
				},
				{
					name: '口味干锅',
				},
				{
					name: '美味盖饭',
				},
				{
					name: '极品鸭舌',
				},
				{
					name: '有道有味',
				},
				{
					name: '宜宾燃面',
				},
				{
					name: '烤饭',
				}
			],
			isOrding: false,
			allNum: '',
			content: '',
			isAddFoodInputShow: false,
			index: '',
			showPopup: false,
			changeValue: '',
			showInputPopup: false,
			oldTypeName: ''
		}
	},
	mounted() {
		this.init()
	},
	methods: {
		init: function() {
			this.allNum = this.myArray.length;
		},
		// 排序
		ording: function() {
			this.isOrding = !this.isOrding;
		},
		// 上移
		moveUp: function(index) {
			var i = parseInt(index);
			var arr = this.myArray[i - 1];
			this.myArray[i - 1] = this.myArray[i];
			this.myArray[i] = arr;
			this.$forceUpdate();
		},
		// 下移
		moveDown: function(index) {
			var i = parseInt(index);
			console.log(i);
			var arr = this.myArray[i + 1];
			this.myArray[i + 1] = this.myArray[i];
			this.myArray[i] = arr;
			this.$forceUpdate();
		},
		// 添加分类
		addFood: function() {
			var _this = this;
			this.isAddFoodInputShow = !this.isAddFoodInputShow;

			setTimeout(() => {
				_this.$refs.inputAdd.focus();
			}, 200);
			console.log(this.$refs.inputAdd)
		},
		// 添加分类 完成
		complete: function() {
			this.isAddFoodInputShow = !this.isAddFoodInputShow;
			var text = this.content;
			if (text) {
				var obj = {};
				obj.name = text;
				this.myArray.push(obj);
				this.content = '';
				this.$forceUpdate();
			}
			this.allNum = this.myArray.length;
		},

		clickShowPopup(index) {
			console.log(index);
			this.index = index;
			this.showPopup = !this.showPopup;
		},
		// 确认删除
		deleteOK() {
			var tag = this.index;
			this.myArray.splice(tag, 1);
			this.$forceUpdate();
			this.showPopup = !this.showPopup;
			this.allNum = this.myArray.length;
		},
		// 取消删除
		cancel() {
			var tag = this.index;
			this.showPopup = !this.showPopup;
		},
		// 展示 修改输入框
		clickShowInputPopup(index) {
			this.index = index;
			this.showInputPopup = !this.showInputPopup;
			this.oldTypeName = this.myArray[index].name;
			setTimeout(() => {
				this.$refs.inputDOM.focus();
			}, 200);
		},
		// 取消修改
		cancelChange() {
			this.showInputPopup = !this.showInputPopup;
		},
		// 确认修改
		changeOK() {
			var index = this.index;
			this.myArray[index].name = this.changeValue;
			this.showInputPopup = !this.showInputPopup;
			this.$forceUpdate();
			this.changeValue = '';
		}
	},
	components: {
		// draggable
	},

});
