
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			myArray: [
				{ name: '滋味灌汤', fixed: true, order: 0 },
				{ name: '口味干锅', fixed: false, order: 1 },
				{ name: '美味盖饭', fixed: false, order: 2 },
				{ name: '极品鸭舌', fixed: false, order: 3 },
				{ name: '有道有味', fixed: false, order: 4 },
				{ name: '宜宾燃面', fixed: false, order: 5 }
			]
		}
	},
	methods: {
		init: function () {
			
		}
	},
	components: {
		// draggable
	}
});