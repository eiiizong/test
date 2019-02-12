
//根据屏幕大小改变根元素字体大小
function resize(){
		var docEl = document.documentElement;
		var clientWidth = window.innerWidth;
		if(clientWidth <= 320){
			docEl.style.fontSize = '29.62px';
		}else if(clientWidth >= 640){
			docEl.style.fontSize = '59.25px';
		}else{
			docEl.style.fontSize = 100 * (clientWidth / 1080) + 'px';
		}
	}
resize();


window.onresize=function(){
resize();
$('.news_img').autoIMG();
autoimg();
	
} 


 //tabs选项卡
window.onload = function() {
	var H = $(".content-slide").eq(0).height();
	var w = $(".content-slide").eq(0).width();

	$("#tabs-container .swiper-slide").css('height', H + 'px');
	$("#tabs-container .swiper-wrapper").css('height', H + 'px');	
    var tabsSwiper = new Swiper('#tabs-container',						
		{
        speed: 500,	
	
        on: {
        slideChangeTransitionStart: function() {
		var H = $("#tabs-container .content-slide").eq(this.activeIndex).height();
		$("#tabs-container .swiper-slide-active").css('width', 100 + '%');
		$("#tabs-container .swiper-slide").css('height', H + 'px');
		$("#tabs-container .swiper-wrapper").css('height', H + 'px');	
        $(".tabs .active").removeClass('active');
        $(".tabs a").eq(this.activeIndex).addClass('active');
		$('html,body').animate({scrollTop:0},'0');
            }
        }

    })

	$("#tabs-container .swiper-slide").css('width', 100 + '%');

$(".tabs a").on('click', function(e) {
        e.preventDefault();
        var H = $(".content-slide").eq($(this).index()).height();
	   $("#tabs-container .swiper-slide").css('width', 100 + '%');
		$("#tabs-container .swiper-slide").css('height', H + 'px');
		$("#tabs-container .swiper-wrapper").css('height', H + 'px');	
        $(".tabs .active").removeClass('active');
        $(this).addClass('active');
        tabsSwiper.slideTo($(this).index());
	   $('html,body').animate({scrollTop:0},'0');
		
    })


 //禅意体验图片切换
   var swiper_a = new Swiper('.chanyi_pic .swiper-container', {
       loop: true,
       pagination: {
            el: '.swiper-pagination',

        }

    });
 //书画图片切换
 var swiper_b = new Swiper('.shuhua_view .swiper-container', {
       loop: true,
       pagination: {
            el: '.swiper-pagination',

        }

    });

}


$(document).ready(function(){
	//追加内容
$(".addbtn").click(function(){
	$("#content-slide1").append(" <li><a href='view.html'><span class='news_img'><img src='images/01.jpg' /></span><span class='news_title'><p>测试测测试测试测试测试测试测试试</p><p class='news_info'>观世音菩萨，现千手千眼，以慈悲心寻声救苦，普渡众生。峨眉山大佛禅院观音殿中供奉的是世界上最独特的四面千手千眼观世音菩萨。</p></span></a></li>");
	var H = $("#content-slide1").height();
	$("#tabs-container .swiper-slide").css('height', H + 'px');
	$("#tabs-container .swiper-wrapper").css('height', H + 'px');		
});
$(".pop_btn").click(function(){
  $(".pop_bg").hide();
  $(".pop_bg_body").hide();
  $(".pop_box").hide();
  $("body").css('overflow','auto');
  });
$(".wl_id").click(function(){
  $(".pop_bg").show();
  $(".pop_box").show();
  $("body").css('overflow','hidden');
  });
$(".buy_btn").click(function(){
  $(".pop_bg").fadeIn();
  $(".cyxj_box").fadeIn();
  });
$(".cyxj_box").click(function(){

  });
$(".pop_bg").click(function(){
  $(this).hide();
  $("body").css('overflow','auto');
  $(".cyxj_box").hide();
  });

	
	//禅院修建选中框样式
$(".cy_text").click(function(){
$(".cy_text2").removeClass('on');
  $(this).addClass('on');
  });
$(".cy_text2").click(function(){
	$(".cy_text").removeClass('on');
	$(".cy_text").val("");
	$(".cy_text2").removeClass('on');
   $(this).addClass('on');
   $('.cyxj_box').css({'position':'fixed','bottom':'0'});
   $('.pop_bg').show();
  });
	//感应灵验显示评论框
$(".icon-pinglun").click(function(){
  $(".gy_on").toggle();
  $(this).parent().parent().parent().parent().find(".gy_input").toggle();
 
  });
	//规格颜色选择样式
$(".choose_a span.choose").click(function(){
	$(".choose_a .choose").removeClass('choose_on');
    $(this).addClass('choose_on');
  });
$(".choose_b span.choose").click(function(){
	$(".choose_b .choose").removeClass('choose_on');
    $(this).addClass('choose_on');
  });
});




// 图片等比缩放
$(document).ready(function(){
	
$('.news_img').autoIMG();
autoimg();
});
	
function autoimg(){
var imgheight=$(".news_img").height();	
$(".news_img").css('line-height',imgheight+'px');
$(".news_img img").css('max-height',imgheight+'px');
}



