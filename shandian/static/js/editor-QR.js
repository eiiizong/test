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
			isShowAddQR: true,
			addNum: ''
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		init: function() {},
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
		// 显示修改坐位号弹窗
		showEditorSeatNamePopup: function(index) {
			this.index = index;
			this.editorSeatNamePopup = !this.editorSeatNamePopup;
		},
		addQR: function() {
			this.isShowAddQR = !this.isShowAddQR;
		},
		createQR: function() {
			this.isShowAddQR = !this.isShowAddQR;
		}
	},
	components: {
		// draggable
	}
});
