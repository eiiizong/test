
var app = new Vue({
	el: '#app',
	data: function () {
		return {
			cardList: [
				{	className: 'CCB',
					name: '建设银行',
					isDefault: true,
					type: '储蓄卡',
					cardNumber: '**** **** **** **** 479',
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim'
				},
				{
					className: 'ICBC',
					name: '工商银行',
					isDefault: false,
					type: '储蓄卡',
					cardNumber: '**** **** **** **** 479',
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim'
				},
				{
					className: 'ICCB',
					name: '工商银行',
					isDefault: false,
					type: '储蓄卡',
					cardNumber: '**** **** **** **** 479',
					imgUrl: 'http://oupo5zwub.bkt.clouddn.com/blog/170816/10IA3EL4IF.jpg?imageslim'
				}
			],
		} 
	},
	methods: {
		init: function () {
			
		},
		setDafultCard(index) {
			console.log(index);
			var data = this.cardList;
			for (var i = 0; i < data.length; i++) {
				data[i].isDefault = false;
			}
			data[index].isDefault = true;
		},
		deleteCard(index) {
			this.cardList.splice(index,1);
			var data = this.cardList;
			var num = 0;
			for (var i = 0; i < data.length; i++) {
				if(data[i].isDefault) {
					return false;
				} else {
					num++;
					if (num == data.length) {
						data[0].isDefault = true;
					}
				}
			}
		}
	},
	components: {
		// draggable
	}
});