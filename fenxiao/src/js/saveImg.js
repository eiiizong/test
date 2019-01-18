// 点击保存图片
;function saveImg(id, imgName='img') {
    var img = document.getElementById(id);
    var alink = document.createElement("a");
    alink.href = img.src;
	alink.download = imgName + '.jpg';
	if (alink.download) {
		alink.click();
	} else {
		console.log(alink.download);
	}
}