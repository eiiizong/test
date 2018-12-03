var app = new Vue({
	el: '#app',
	data: function() {
		return {
			menus: [{
					name: '推荐',
					icon: true,
					iconClassName: 'icon-tuijian'
				},
				{
					name: '滋味灌汤',
					icon: false,
					iconClassName: ''
				},
				{
					name: '口味干锅',
					icon: false,
					iconClassName: ''
				},
				{
					name: '美味盖饭',
					icon: false,
					iconClassName: ''
				},
				{
					name: '极品鸭舌',
					icon: false,
					iconClassName: ''
				},
				{
					name: '有道有味',
					icon: false,
					iconClassName: ''
				},
				{
					name: '宜宾燃面',
					icon: false,
					iconClassName: ''
				},
				{
					name: '宜宾燃面',
					icon: false,
					iconClassName: ''
				},
				{
					name: '宜宾燃面',
					icon: false,
					iconClassName: ''
				},
				{
					name: '宜宾燃面',
					icon: false,
					iconClassName: ''
				},
				{
					name: '宜宾燃面',
					icon: false,
					iconClassName: ''
				},
				{
					name: '宜宾燃面10',
					icon: false,
					iconClassName: ''
				}
			],
			foods: [{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					name: '川道口碑红油脆',
					description: '脆皮鸭的分支北脆皮',
					price: 22,
					id: 0,
					isRecommend: false,
					isPutAway: true
				},
				{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					name: '川道口碑红油脆',
					description: '脆皮鸭的分支北',
					price: 22,
					id: 0,
					isRecommend: false,
					isPutAway: false
				},
				{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					name: '川道口碑红油脆',
					description: '脆皮鸭的分支北',
					price: 22,
					id: 0,
					isRecommend: false,
					isPutAway: false
				},
				{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					name: '川道口碑红油脆',
					description: '脆皮鸭的分支北',
					price: 22,
					id: 0,
					isRecommend: false,
					isPutAway: false
				},
				{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					name: '川道口碑红油脆',
					description: '脆皮鸭的分支北',
					price: 22,
					id: 0,
					isRecommend: false,
					isPutAway: false
				},
				{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					name: '川道口碑红油脆',
					description: '脆皮鸭的分支北',
					price: 22,
					id: 0,
					isRecommend: false,
					isPutAway: false
				},
				{
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim',
					name: '川道口碑红油脆',
					description: '脆皮鸭的分支北',
					price: 22,
					id: 0,
					isRecommend: false,
					isPutAway: false
				},
			],
			current: 0
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		init: function() {
			// this.allPutaway();
		},
		allPutaway: function() {
			console.log(this.foods);
			var arr = this.foods;
			for (let i = 0; i < arr.length; i++) {
				if (!arr[i].isPutAway) {
					arr[i].isPutAway = true;
				}
			}
			this.foods = arr;
			console.log(this.foods);
		},
		changeMenu: function(e, a) {
			var index = a;
			this.current = a;
		}
	},
	components: {
		// draggable
	},

});
