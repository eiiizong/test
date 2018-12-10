var app = new Vue({
	el: '#app',
	data: function() {
		return {
			serviceType: [{
				flex: 1,
				values: ['餐饮类', '服务类', '其他'],
				className: 'serviceType',
				textAlign: 'center'
			}, ],
			tag: '',
			type: '',
			readonly: true,
			popupVisible: false
		}
	},
	methods: {
		init: function() {
			
		},
		onValuesChange(picker, values) {
// 			console.log(picker);
// 			console.log(values);
			if (values[0]) {
				this.type = values[0];
			}
		}
	}
});
