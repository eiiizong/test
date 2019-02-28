// 创建地图实例  
var map = new BMap.Map("baiduMap");

// 创建点坐标  
var point = new BMap.Point(116.404, 39.915);

// 初始化地图，设置中心点坐标和地图级别 
map.centerAndZoom(point, 15);

// 开启鼠标滚轮滚动
map.enableScrollWheelZoom(true);
var opts = {
	width: 250, // 信息窗口宽度    
	height: 100, // 信息窗口高度    
	title: "四川省成都市高新区蜀锦路88号新中泰大厦604" // 信息窗口标题   
}
var myGeo = new BMap.Geocoder();

// 将地址解析结果显示在地图上，并调整地图视野    
myGeo.getPoint(opts.title, function(point) {
		if (point) {
			map.centerAndZoom(point, 16);
			map.addOverlay(new BMap.Marker(point));
		}
	},
	"四川省");
