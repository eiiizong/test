// 计算提交审核页面li标签的宽度
var cacl = function () {
	var ul = document.getElementById('img_warpper');
	var lis = ul.getElementsByClassName('left');
	var w = lis[0].offsetWidth;
	console.log(w);
	for(var i = 0; i<lis.length; i++) {
		lis[i].style.height = w + 'px';
	}
};
cacl();