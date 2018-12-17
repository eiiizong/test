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
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					name: '川道口碑红油脆',
					description: '脆皮鸭的分支北脆皮脆皮鸭的分支北脆皮脆皮鸭的分支北脆皮脆皮鸭的分支北脆皮脆皮鸭的分支北脆皮脆皮鸭的分支北脆皮脆皮鸭的分支北脆皮',
					price: 22,
					id: 0,
					isRecommend: false,
					isPutAway: true
				},
				{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					name: '川道口碑红油脆',
					description: '脆皮鸭的分支北',
					price: 22,
					id: 0,
					isRecommend: false,
					isPutAway: false
				},
				{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					name: '川道口碑红油脆',
					description: '脆皮鸭的分支北',
					price: 22,
					id: 0,
					isRecommend: false,
					isPutAway: false
				},
				{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					name: '川道口碑红油脆',
					description: '脆皮鸭的分支北',
					price: 22,
					id: 0,
					isRecommend: false,
					isPutAway: false
				},
				{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					name: '川道口碑红油脆',
					description: '脆皮鸭的分支北',
					price: 22,
					id: 0,
					isRecommend: false,
					isPutAway: false
				},
				{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
					name: '川道口碑红油脆',
					description: '脆皮鸭的分支北',
					price: 22,
					id: 0,
					isRecommend: false,
					isPutAway: false
				},
				{
					imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
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
			var _this = this;
			window.onload = function () {
				var bannerDOM = _this.$refs.banner;
				var btnDOM = _this.$refs.btn;
				var foodDOM = _this.$refs.food;
				var putawayBtnDOM = _this.$refs.putawayBtn;
				var foodsDOM = _this.$refs.foods;
				var windowHeight = window.screen.height;
				var bannerHeight = _this.$refs.bannerImg.offsetHeight;
				console.log(bannerHeight);
				var btnHeight = _this.$refs.btn.offsetHeight;
				console.log(btnHeight);
				var putawayBtnHeight = _this.$refs.putawayBtn.offsetHeight;
				console.log(putawayBtnHeight);
				var foodHeight = document.body.clientHeight - 94 - bannerHeight - btnHeight;
				console.log(document.body.clientHeight);
				console.log(foodHeight);
				var foodsHeight = foodHeight - putawayBtnHeight;
				foodDOM.style.height = foodHeight + 'px';
				foodsDOM.style.height = foodsHeight + 'px';
			};
			
		}
	},
	components: {
		// draggable
	},

});
