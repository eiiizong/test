var app = new Vue({
	el: '#app',
	data: function() {
		return {
			showPopup: true
		}
	},
	mounted: function() {
		this.init();
	},
	methods: {
		init: function() {
			this.position();
		},
		position: function() {
			var _this = this;
			var func = function(newW, numDOM, QR) {
				var x = newW / 375;
				var numTop = 120 * x;
				var numLeft = 90 * x;
				var numFS = 54 * x;
				numDOM.style.top = numTop + 'px';
				numDOM.style.fontSize = numFS + 'px';
				numDOM.style.left = numLeft + 'px';

				var qrBottom = 40 * x;
				var qrLeft = 60 * x;
				var qrW = 108 * x;
				var qrH = 108 * x;

				QR.style.bottom = qrBottom + 'px';
				QR.style.width = qrW + 'px';
				QR.style.left = qrLeft + 'px';
				QR.style.height = qrH + 'px';
			};
			var resize = function() {
				var imgW = _this.$refs.bgImg.offsetWidth;
				var qrBox = _this.$refs.QRbox;
				var numDOM = _this.$refs.numDOM;
				console.log(numDOM);
				var screenWidth = window.screen.width;
				func(imgW, numDOM, qrBox);
			}
			resize();
			window.onresize = resize;
		}
	},
	components: {
		// draggable
	}
});
