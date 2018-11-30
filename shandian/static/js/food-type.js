
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			menus: [
				{ name: '推荐', icon: true, iconClassName: 'icon-tuijian' },
				{ name: '滋味灌汤', icon: false, iconClassName: '' },
				{ name: '口味干锅', icon: false, iconClassName: '' },
				{ name: '美味盖饭', icon: false, iconClassName: '' },
				{ name: '极品鸭舌', icon: false, iconClassName: '' },
				{ name: '有道有味', icon: false, iconClassName: '' },
				{ name: '宜宾燃面', icon: false, iconClassName: '' },
				{ name: '宜宾燃面', icon: false, iconClassName: '' },
				{ name: '宜宾燃面', icon: false, iconClassName: '' },
				{ name: '宜宾燃面', icon: false, iconClassName: '' },
				{ name: '宜宾燃面', icon: false, iconClassName: '' },
				{ name: '宜宾燃面10', icon: false, iconClassName: '' }
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