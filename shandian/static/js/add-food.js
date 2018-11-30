
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
				{ size: '1', price: '2', id: 0},
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
		},
		deleteSize: function (e) {
			var id = parseInt(e.target.id);
			var arr = this.sizePrices;
			var a = arr.splice(id,1);
			console.log(a);
			console.log(arr);
		}
	},
	components: {
		// draggable
	}
});