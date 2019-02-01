// 计算提交审核页面li标签的宽度
window.onload = function () {
	var cacl = function () {
		var ul = document.getElementById('img_warpper');
		var lis = ul.getElementsByClassName('left');
		var w = lis[0].offsetWidth;
		alert(w);
		console.log(w);
		for(let i = 0; i<lis.length; i++) {
			lis[i].style.height = w + 'px';
		}
	};
	cacl();
};