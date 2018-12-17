
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			foodDesc: '',
			recommend: true,
			putaway: false,
			isAddStandard: true,
			price: '',
			foodName: '',
			foodUnit: '',
			sizePrices: [
				{ size: '', price: '', id: 0},
			]
		}
	},
	methods: {
		init: function () {
			
		},
		addSize: function () {
			var arr = this.sizePrices;
			var order = this.sizePrices.length;
			var item = {size: '', price: '', id: order};
			arr.push(item);
			this.$forceUpdate();
		},
		deleteSize: function (e) {
			var id = parseInt(e.target.id);
			this.sizePrices.splice(id,1);
			this.$forceUpdate();
		}
	},
	components: {
		// draggable
	}
});