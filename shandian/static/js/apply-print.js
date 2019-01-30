var app = new Vue({
	el: '#app',
	data: function() {
		return {
			popupSelectSeatNum: true,
			seatNumList: [{
					name: '1号桌',
					isChecked: true
				},
				{
					name: '1号桌',
					isChecked: true
				},
				{
					name: '1号桌',
					isChecked: true
				},
				{
					name: '1号桌',
					isChecked: true
				},
				{
					name: '1号桌',
					isChecked: true
				},
				{
					name: '1号桌',
					isChecked: true
				},
				{
					name: '1号桌',
					isChecked: true
				},
				{
					name: '1号桌',
					isChecked: true
				},
				{
					name: '11号桌',
					isChecked: true
				},
			],
			seatNumListChecked: [],
			QT: true
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		init: function() {
			this.caclScrollHeight();
		},
		caclScrollHeight: function() {
			var popupDOM = this.$refs.popup.$el;
			console.log(popupDOM);
			var scrollDOM = this.$refs.scrollDOM;
			this.$nextTick(function() {
				scrollDOM.style.height = (popupDOM.offsetHeight - 40) + 'px';
			});
		},
		changeRadio: function() {
			this.QT = !this.QT;
		},
		triggerPopup: function() {
			this.popupSelectSeatNum = !this.popupSelectSeatNum;
		},
		selectSeatNumOK: function() {
			var data = this.seatNumList;
			var arr = [];
			data.map(function(item, i) {
				console.log(data[i].isChecked);
				if (data[i].isChecked) {
					arr.push(data[i].name);
				}
			});
			this.triggerPopup();
			this.seatNumListChecked = arr;
		},
		changeSeatNum: function(index) {
			var data = this.seatNumList;
			data.map(function(item, i) {
				if (index == i) {
					data[i].isChecked = !data[i].isChecked;
				}
			});
		}
	},
	components: {
		// draggable
	}
});
