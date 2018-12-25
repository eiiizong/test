var app = new Vue({
	el: '#app',
	data: function() {
		return {
			name: '', //姓名
			tel: '', //电话
			customerPhone: '', //客户电话
			storeAddress: '', //门店地址
			accountType: '个人账户', //账户类型
			accountBank: '中国工商', //开户银行
			accountName: '', //开户名称
			accountBankCity: '', //开户银行城市
			accountOpeningBranch: '', //开户支行
			bankCardNumber: '', //银行卡卡号
			accountPersonName: '', //开户人姓名
			showHaveMiniApp: true,
			showImgInfo: false,
			checkBoxData: [{
					name: '《餐饮服务许可证》照片',
					hintInfo: '',
					checked: false,
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
				},
			],
			popupAccountType: false,
			slotsAccountType: [{
				flex: 1,
				values: ['个人账户', '法人账户'],
				className: 'slotsAccountType',
				textAlign: 'center'
			}],
			popupAccountBank: false,
			slotsAccountBank: [{
				flex: 1,
				values: ['中国银行', '中国农业银行', '中国工商银行', '中国建设银行'],
				className: 'slotsBankType',
				textAlign: 'center'
			}],
			attachmentInfo: '',
		}
	},
	methods: {
		init: function() {

		},
		btnOk: function() {
			this.showHaveMiniApp = !this.showHaveMiniApp;
		},
		btnCancel: function() {
			this.showHaveMiniApp = !this.showHaveMiniApp;
		},
		showSelecte: function() {
			this.showImgInfo = !this.showImgInfo;
		},
		selectCancel: function() {
			this.showImgInfo = !this.showImgInfo;
		},
		selectOK: function() {
			var _this = this;
			var arr = this.checkBoxData;
			for (var i = 0; i < arr.length; i++) {
				if (arr[i].checked) {
					arr[i].checked = true;
					_this.attachmentInfo = arr[i].name;
				} else {
					arr[i].checked = false;
				}
			}
			console.log(_this.attachmentInfo)
			this.showImgInfo = !this.showImgInfo;
		},
		showaAcountTypePopup: function() {
			this.popupAccountType = !this.popupAccountType;
		},
		accountTypeOnValuesChange: function(picker, value) {
			this.accountType = value[0];
		},
		showaAcountBankPopup: function() {
			this.popupAccountBank = !this.popupAccountBank;
		},
		accountBankOnValuesChange: function(picker, value) {
			this.accountBank = value[0];
		}
	},
	components: {
		// draggable
	}
});
