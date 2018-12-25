var app = new Vue({
	el: '#app',
	data: function() {
		return {
			checkBoxData: [{
					name: '《餐饮服务许可证》照片',
					hintInfo: '',
					checked: true,
					value: 0
				},
				{
					name: '实体店铺三张照片',
					hintInfo: '(门头照含店名、店内全景照、店内收银台照)',
					checked: false,
					value: 1
				},
				{
					name: '《卫生许可证》照片',
					hintInfo: '',
					checked: false,
					value: 2
				// },

			]
		}
	},
	methods: {
		init: function() {

		}
	}
});
