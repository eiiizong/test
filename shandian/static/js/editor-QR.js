var app = new Vue({
	el: '#app',
	data: function() {
		return {
			isAddClerkPopup: true,
			tables: [{
					name: '1号桌',
					status: '修改中···'
				},
				{
					name: '2号桌',
					status: '修改中···'
				},
				{
					name: '3号桌',
					status: '修改中···'
				},
				{
					name: '4号桌',
					status: '修改中···'
				},
			],
			editorSeatNamePopup: false,
			index: 0,
			newSeatName: '',
			isShowAddQR: false,
			addNum: ''
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		init: function() {
			this.initIsShowAddQR();
		},
		// 确定修改坐位号
		editorSeatNameOK: function() {
			this.tables[this.index].name = this.newSeatName;
			this.editorSeatNamePopup = !this.editorSeatNamePopup;
			this.$forceUpdate();
		},
		// 取消修改坐位号
		editorSeatNameCancel: function() {
			this.editorSeatNamePopup = !this.editorSeatNamePopup;
		},
		// 初始化时是否显示弹窗
		initIsShowAddQR: function() {
			if (this.tables.length === 0) {
				this.isShowAddQR = true;
			}
		},
		// 显示修改坐位号弹窗
		showEditorSeatNamePopup: function(index) {
			this.index = index;
			this.editorSeatNamePopup = !this.editorSeatNamePopup;
		},
		addQR: function() {
			this.isShowAddQR = !this.isShowAddQR;
		},
		createItem: function() {
			var obj = {};
			obj.name = this.tables.length + 1 + '桌号';
			obj.status = '';
			this.tables.push(obj);
			this.$forceUpdate();
		},
		createQR: function() {
			var num = parseInt(this.addNum);
			if (!!num) {
				for (var i = 0; i < num; i++) {
					this.createItem();
				}
			}
			this.isShowAddQR = !this.isShowAddQR;
		},
		cancelCreateQR: function() {
			this.isShowAddQR = !this.isShowAddQR;
		}
	},
	components: {
		// draggable
	}
});
