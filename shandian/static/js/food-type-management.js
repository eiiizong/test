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
		ording() {
			this.isOrding = !this.isOrding;
		},
		moveUp(index) {
			var i = parseInt(index);
			var arr = this.myArray[i - 1];
			this.myArray[i - 1] = this.myArray[i];
			this.myArray[i] = arr;
			this.$forceUpdate();
		},
		moveDown(index) {
			var i = parseInt(index);
			console.log(i);
			var arr = this.myArray[i + 1];
			this.myArray[i + 1] = this.myArray[i];
			this.myArray[i] = arr;
			this.$forceUpdate();
		},
		addFood() {
			this.isAddFoodInputShow = !this.isAddFoodInputShow;
		},
		complete() {
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
		deleteOK() {
			var tag = this.index;
			this.myArray.splice(tag, 1);
			this.$forceUpdate();
			this.showPopup = !this.showPopup;
			this.allNum = this.myArray.length;
		},
		cancel() {
			var tag = this.index;
			this.showPopup = !this.showPopup;
		},
		clickShowInputPopup(index) {
			this.index = index;
			this.showInputPopup = !this.showInputPopup;
			this.oldTypeName = this.myArray[index].name;
			
			var DOM = this.$refs.inputDOM;;
			DOM.focus();
		},
		cancelChange() {
			this.showInputPopup = !this.showInputPopup;
		},
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
