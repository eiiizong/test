var app = new Vue({
	el: '#app',
	data: function () {
		return {
			checkBoxData: [
				{ name: '微辣', checked: true, value: 0 },
				{ name: '中辣', checked: false, value: 1 },
				{ name: '特辣', checked: false, value: 2 },
				{ name: '不要葱', checked: false, value: 3 },
				{ name: '不要香菜', checked: false, value: 4 },
				{ name: '不要配菜', checked: false, value: 5 }
			]
		}
	},
	methods: {
		init: function () {
			
		}
	}
});