var app = new Vue({
	el: '#app',
	data: function () {
		return {
			isworking: true,
			clerk: {
				cooker: [
					{
						imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
						name: 'EiiiZong'
					},
					{
						imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
						name: 'JD'
					}
				],
				waiter: [
					{
						imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
						name: 'EiiiZong'
					},
					{
						imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
						name: 'JD'
					},
					{
						imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
						name: 'JD'
					},
					{
						imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
						name: 'JD'
					},
					{
						imgUrl: 'https://avatars1.githubusercontent.com/u/30979753?s=400&u=1de5d828ea2597ca7618410665fcf23580c8f892&v=4',
						name: 'JD'
					},
				]
			},
			editorClerk: false,
			deleteTag: '',
			allClerk: '',
			deleteClerkName: '',
			showDeleteClerkPopup: false,
			index: ''
		}
	},
	mounted: function () {
		this.init();
	},
	methods: {
		init: function () {
			this.allClerkFunc();
		},
		// 店员管理编辑
		editor: function () {
			this.editorClerk = !this.editorClerk;
		},
		deleteClerk: function (tag, index) {
			var _this = this;
			this.tag = tag;
			this.index = index;
			if (tag === 1) {
				_this.deleteClerkName = _this.clerk.cooker[index].name;
			} else if (tag === 2) {
				_this.deleteClerkName = _this.clerk.waiter[index].name;
			}
			this.showDeleteClerkPopup = !this.showDeleteClerkPopup;
		},
		allClerkFunc: function () {
			this.allClerk = this.clerk.cooker.length + this.clerk.waiter.length;
		},
		deleteCancel: function () {
			this.showDeleteClerkPopup = !this.showDeleteClerkPopup;
		},
		deleteOk: function () {
			var _this = this;
			// 删除厨师
			if (_this.tag === 1) {
				_this.clerk.cooker.splice(_this.index, 1);
				console.log('删除厨师');
				_this.allClerkFunc();
				_this.$forceUpdate();
			}
			// 删除服务员
			else if (_this.tag === 2) {
				_this.clerk.waiter.splice(_this.index, 1);
				console.log('删除服务员');
				_this.allClerkFunc();
				_this.$forceUpdate();
			}
			this.showDeleteClerkPopup = !this.showDeleteClerkPopup;
		},
	}
});