var app = new Vue({
	el: '#app',
	data: function() {
		return {
			slots: [
				'餐饮类',
				'服务类',
				'其他'
			],
			arr: [
				{
				flex: 1,
				values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
				className: 'type',
				textAlign: 'center'
				},
			],
			tag: '',
			type: '',
			readonly: true
		}
	},
	methods: {
		init: function() {

		},
		onValuesChange(picker, values) {
			if (values[0] > values[1]) {
				picker.setSlotValue(1, values[0]);
			}
		}
	}
});
