var app = new Vue({
	el: '#app',
	data: function() {
		return {
			menus: [{
					name: '推荐',
					icon: true,
					iconClassName: 'icon-recommend'
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
					description: '脆皮鸭的分支北脆皮脆皮鸭的分支北脆皮脆皮鸭的分支北脆皮脆皮鸭的分支北脆皮脆皮鸭的分支北脆皮脆皮鸭的分支北脆皮脆皮鸭的分支北脆皮',
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
			this.height();
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
		},
		height: function () {
			var bannerDOM = this.$refs.banner;
			var btnDOM = this.$refs.btn;
			var foodDOM = this.$refs.food;
			var putawayBtnDOM = this.$refs.putawayBtn;
			var foodsDOM = this.$refs.foods;
			var windowHeight = window.screen.height;
			var bannerHeight = bannerDOM.offsetHeight;
			var btnHeight = btnDOM.offsetHeight;
			var putawayBtnHeight = putawayBtnDOM.offsetHeight;
			var foodHeight = windowHeight - 94 - bannerHeight - btnHeight;
			var foodsHeight = foodHeight - putawayBtnHeight;
			foodDOM.style.height = foodHeight + 'px';
			foodsDOM.style.height = foodsHeight + 'px';
		}
	},
	components: {
		// draggable
	},

});
