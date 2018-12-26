var app = new Vue({
	el: '#app',
	data: function() {
		return {
			serviceType: [{
				flex: 1,
				values: ['餐饮类', '服务类', '服务类','服务类','其他',],
				className: 'serviceType',
				textAlign: 'center'
			}, ],
			tag: '',
			type: '',
			readonly: true,
			serviceTypePopup: false,
			TS: ''
		}
	},
	methods: {
		init: function() {
			
		},
		showServiceTypePopup: function () {
			this.serviceTypePopup = !this.serviceTypePopup;
		},
		serviceTypeCancel: function () {
			this.serviceTypePopup = !this.serviceTypePopup;
		},
		serviceTypeOK: function () {
			this.serviceTypePopup = !this.serviceTypePopup;
			this.type = this.TS;
		},
		serviceTypeOnValuesChange(picker, values) {
			this.TS = values[0];
		}
	}
});
