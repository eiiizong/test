
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			name: '',//姓名
			tel: '',//电话
			customerPhone: '',//客户电话
			storeAddress: '',//门店地址
			accountType: '',//账户类型
			accountBank: '',//开户银行
			accountName : '',//开户名称
			accountBankCity: '',//开户银行城市
			accountOpeningBranch: '',//开户支行
			bankCardNumber: '',//银行卡卡号
			accountPersonName: '',//开户人姓名
		} 
	},
	methods: {
		init: function () {
			
		}
	},
	components: {
		// draggable
	}
});