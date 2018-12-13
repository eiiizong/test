
var app = new Vue({
	el: '#app',
	data: function () {
		return {
		} 
	},
	mounted: function () {
		this.init();
	},
	methods: {
		init: function () {
			console.log('支付到款方式')
		},
		gotopage: function () {
			// console.log(window.location.origin + '/');
			// console.log(window.location.pathname);
			// window.open('http://baidu.com');
		}
	},
	components: {
		// draggable
	}
});