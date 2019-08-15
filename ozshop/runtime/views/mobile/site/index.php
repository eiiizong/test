<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <title><?php echo $this->_siteConfig->name;?></title>
    <link type="image/x-icon" href="<?php echo IUrl::creatUrl("")."favicon.ico";?>" rel="icon">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">
    <link rel="apple-touch-icon-precomposed" href="<?php echo $this->getWebSkinPath()."image/logo.gif";?>">
    <script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/jquery/jquery-1.12.4.min.js"></script> <script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/form/form.js"></script> <script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/autovalidate/validate.js"></script><link rel="stylesheet" type="text/css" href="/runtime/_systemjs/autovalidate/style.css" /> <script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/artdialog/artDialog.js"></script><script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/artdialog/plugins/iframeTools.js"></script><link rel="stylesheet" type="text/css" href="/runtime/_systemjs/artdialog/skins/aero.css" /> <script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/artTemplate/artTemplate.js"></script><script type="text/javascript" charset="UTF-8" src="/runtime/_systemjs/artTemplate/artTemplate-plugin.js"></script>
    <script src="<?php echo $this->getWebViewPath()."javascript/common.js";?>"></script>
    <script src='<?php echo $this->getWebViewPath()."javascript/site.js";?>'></script>
    <script src='<?php echo $this->getWebViewPath()."javascript/mobile.js";?>'></script>
    <link rel="stylesheet" href="<?php echo $this->getWebSkinPath()."style/style.css";?>">
    <link rel="stylesheet" href="<?php echo $this->getWebSkinPath()."style/style_index.css";?>">
    <link rel="stylesheet" href="<?php echo $this->getWebSkinPath()."font/iconfont.css";?>">
    <link rel="stylesheet" href="<?php echo $this->getWebSkinPath()."style/swiper.css";?>">
    <link rel="stylesheet" href="<?php echo $this->getWebSkinPath()."style/swiper.min.css";?>">
    <script src='<?php echo $this->getWebViewPath()."javascript/jquery.js";?>'></script>
    <script src='<?php echo $this->getWebViewPath()."javascript/swiper.min.js";?>'></script>
    <script src='<?php echo $this->getWebViewPath()."javascript/swiper.animate.min.js";?>'></script>
</head>

<body>
    <!-- 顶部通栏 -->
            <?php if(IWeb::$app->getController()->getId() == 'site' && (IWeb::$app->getController()->getAction()->getId() == 'index'||IWeb::$app->getController()->getAction()->getId() == 'promotion_goods'||IWeb::$app->getController()->getAction()->getId() == 'recommend_goods'||IWeb::$app->getController()->getAction()->getId() == 'category_list')){?>
            <!-- <div class="header_home" onclick="window.location.href='/'"><i class="icon-home"></i></div>
            <h1 id="page_title" class="page_title"><?php echo $this->_siteConfig->name;?></h1>
            <div class="header_so_btn" onclick="$('.header_search').toggle();"><i class="icon-search"></i></div> -->
            <?php }else{?>
            <header class="header_box">
            <div class="header">
                <div class="header_back" onclick="window.history.back();"><i class="icon-chevron-left"></i></div>
                <h1 id="page_title" class="page_title"><?php echo $this->_siteConfig->name;?></h1>
                <div class="header_so_btn" onclick="window.location.href='/'"><i class="icon-home"></i></div>
            </div>
            </header>
            <?php }?> 
    <!-- 顶部搜索 -->
    <!-- <section class="header_search">
        <form method='get' action="<?php echo IUrl::creatUrl("/");?>">
            <input type='hidden' name='controller' value='site'>
            <input type='hidden' name='action' value='search_list'>
            <input class="keywords" type="text" name='word' autocomplete="off" placeholder="请输入关键词...">
            <input class="submit" type="submit" value="搜索">
        </form>
    </section> -->
    <!-- 引入内页 -->
    <link rel="stylesheet" href="<?php echo $this->getWebSkinPath()."font/iconfont.css";?>">
<link rel="stylesheet" href="<?php echo $this->getWebSkinPath()."style/swiper.css";?>">
<link rel="stylesheet" href="<?php echo $this->getWebSkinPath()."style/swiper.min.css";?>">
<script src='<?php echo $this->getWebViewPath()."javascript/jquery.js";?>'></script>
<script src='<?php echo $this->getWebViewPath()."javascript/swiper.min.js";?>'></script>
<script src='<?php echo $this->getWebViewPath()."javascript/swiper.animate.min.js";?>'></script>
<script src='<?php echo $this->getWebViewPath()."javascript/jQuery.autoIMG.js";?>'></script>
<div class="wrapper">
    <!--轮换图-->
    <div class="top-slide">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <?php foreach($this->index_slide as $key => $item){?>
                <div class="swiper-slide">
                    <a href="<?php echo isset($item['url'])?$item['url']:"";?>"><img src="<?php echo IUrl::creatUrl("/pic/thumb/img/".$item['img']."");?>" alt="<?php echo isset($item['name'])?$item['name']:"";?>"/></a>
                </div>
                <?php }?>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
    <!--搜索栏-->
    <div class="search-box">
        <form method='get' action="<?php echo IUrl::creatUrl("/");?>">
            <input type='hidden' name='controller' value='site'>
            <input type='hidden' name='action' value='search_list'>
            <input type="text" name='word' class="search-text" placeholder="搜索商品">
            <button class="search-btn" type="submit"></button>
        </form>
    </div>
    <!--每周特价 新品推荐-->
    <div class="sale-box">
        <ul>
            <li class="sale-left"><a href="<?php echo IUrl::creatUrl("site/promotion_goods");?>"><img src="<?php echo $this->getWebSkinPath()."image/sale-left.png";?>"/></a></li>
            <li class="sale-right"><a href="<?php echo IUrl::creatUrl("site/recommend_goods");?>"><img src="<?php echo $this->getWebSkinPath()."image/sale-right.png";?>"/></a></li>
            <div class="clearfix"></div>
        </ul>       
    </div>
    <!--热卖精选-->
    <div class="hot-sale">
        <h3><img src="<?php echo $this->getWebSkinPath()."image/hot_title.png";?>"/></h3>
        <ul>
            <?php foreach(Api::run('getCommendRecom') as $key => $item){?>
            <li>
                <a href="<?php echo IUrl::creatUrl("/site/products/id/".$item['id']."");?>"  class="hot-img">
                    <img src="<?php echo IUrl::creatUrl("/pic/thumb/img/".$item['img']."");?>"/>
                    <!--<span class="tag-icon"><img src="<?php echo $this->getWebSkinPath()."image/tag-icon.png";?>"/></span>-->
                    <span class="bq-icon"><img src="<?php echo $this->getWebSkinPath()."image/bq-icon.png";?>"/></span>
                </a>
                <div class="hot-info">
                    <h3 class="hot-title"><a href="<?php echo IUrl::creatUrl("/site/products/id/".$item['id']."");?>" ><?php echo isset($item['name'])?$item['name']:"";?></a></h3>  
                    <p class="hot-text"><?php echo isset($item['keywords'])?$item['keywords']:"";?></p>
                    <p class="hot-price">
                        <a href="<?php echo IUrl::creatUrl("/site/products/id/".$item['id']."");?>" class="hot-buy">点击购买&gt;</a>￥<strong><?php echo isset($item['sell_price'])?$item['sell_price']:"";?></strong>
                        <s>原价￥<?php echo isset($item['market_price'])?$item['market_price']:"";?></s>
                    </p>
                </div>
            </li>
            <?php }?>
        </ul>       
    </div>
    <!--分类商品-->
    <?php foreach($this->cateGoodsList as $key => $item){?>
    <div class="hfzc-box">
        <h3><img src="<?php echo IUrl::creatUrl("/pic/thumb/img/".$item['logo']."");?>"/></h3>
        <ul>
            <?php foreach($item['goods'] as $key => $second){?>
            <li>
                <div class="hfimg-box">
                    <div class="hfimg-main">
                        <a href="<?php echo IUrl::creatUrl("/site/products/id/".$second['id']."");?>" class="imgbox">
                            <img src="<?php echo IUrl::creatUrl("/pic/thumb/img/".$second['img']."");?>"/>
                            <?php if($second['store_nums']==0){?>
                            <div class="sale-over"></div>
                            <?php }?>
                        </a>
                        <p class="hf_title"><a href="<?php echo IUrl::creatUrl("/site/products/id/".$second['id']."");?>"><?php echo isset($second['name'])?$second['name']:"";?></a></p>
                        <p class="hf_price">¥<?php echo isset($second['sell_price'])?$second['sell_price']:"";?></p>
                        <a href="<?php echo IUrl::creatUrl("/site/products/id/".$second['id']."");?>" class="buy-icon"><img src="<?php echo $this->getWebSkinPath()."image/buy_icon.png";?>"/></a>
                    </div>
                </div>
            </li>
            <?php }?>  
        </ul>
        <div class="clearfix"></div>
    </div>
    <div class="more-box"><a href="<?php echo IUrl::creatUrl("/site/category_list/cate_id/".$item['id']."");?>" class="more-btn">查看更多</a></div>
    <?php }?>
    <div class="footer">
        <p>copyright@2015-2017蜀ICP备17006343号-1</p>
        <p>民航人自己的美妆购物平台-美空美集</p>
        <p><a href="http://www.air-alliance.cn">www.air-alliance.cn版权所有</a></p>
        <p>公司地址：中国 成都</p>
    </div>
    <img src="<?php echo $this->getWebSkinPath()."image/footer_img.png";?>"/>
    <!--导航栏-->
    <div class="tabbar border-top">
        <ul>
            <li class="active"><a href="<?php echo IUrl::creatUrl("/");?>"><span><i class="icon iconfont icon-icon"></i></span><p>首页</p></a></li>
            <li><a href="<?php echo IUrl::creatUrl("site/category_list");?>"><span><i class="icon iconfont icon-sort"></i></span><p>分类</p></a></li>
            <li><a href="http://mp.weixin.qq.com/s/QHbI5sZbM6HLKx3MkkNVFQ"><span><i class="icon iconfont icon-woshou"></i></span><p>加入我们</p></a></li>
            <li><a href="<?php echo IUrl::creatUrl("simple/cart");?>"><span><i class="icon iconfont icon-cart"></i></span><p>购物车</p></a></li>
            <li><a href="<?php echo IUrl::creatUrl("/ucenter/index");?>"><span><i class="icon iconfont icon-people"></i></span><p>个人中心</p></a></li>
        </ul>   
    </div>
</div>
<div class="kf kfon">
    <img src="<?php echo $this->getWebSkinPath()."image/kf.png";?>"/>
    <a class="weixin"><img src="<?php echo $this->getWebSkinPath()."image/weixin.png";?>"/></a>
    <a class="tel" href="tel:13077797152"><img src="<?php echo $this->getWebSkinPath()."image/tel.png";?>"/></a>
</div>
<div class=" ewmbox">
    <div class="js-cancel sku-cancel">
        <div class="cancel-img"></div>
    </div>
    <div class="ewm">
        <p>微信号：美空美集</p><img src="<?php echo $this->getWebSkinPath()."image/ewm.jpg";?>"/><p>长按二维码 立即关注</p>
    </div>
</div>
<script>
$(document).ready(function(){
  $(".weixin").click(function(){
    $(".ewmbox").fadeIn();
  });
    $(".cancel-img").click(function(){
    $(".ewmbox").fadeOut();
  });

$('.hot-img').autoIMG();    
$('.imgbox').autoIMG();
  
});
</script>
<script>
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});
</script>

<script>
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
    autoplay : 5000,
    });
</script>
</body>
</html>
