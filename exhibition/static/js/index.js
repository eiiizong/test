$(function() {
	$('#uploadContentBtn').on('click', function() {
		$('#MsVr').hide();
		$('#MSUploadContent').show();
	});
	$('#closeBtn').on('click', function() {
		$('#MSUploadContent').hide();
		$('#MsVr').show();
	});
	// 第二导航
	(function() {
		$('#menu').on('click', function() {
			var left = parseInt($('#menu ul').css('left'));
			if (left < 0) {
				$('#menu ul').animate({
					left: '0',
				}, 500);
			} else {
				$('#menu ul').animate({
					left: '-100px',
				}, 500);
			}
		});
	})();

	// 第三导航
	var thirdNav = function() {
		var ul = $('.third-nav ul');
		var nav = $('.third-nav nav');
		var ulWidth = 0;
		if (ul) {
			var li = ul.children();
			for (var i = 0; i < li.length; i++) {
				var item = $(li[i]).width() + 45;
				ulWidth = ulWidth + item;
			}
			if ($(window).width() >= 768) {
				ulWidth = ulWidth + 82 - 45;
			} else {
				ulWidth = ulWidth + 20 - 35;
			}
			ul.css('width', ulWidth + 'px');
		} else {
			return false;
		}
		if (nav.width() < ul.width()) {
			nav.css('overflow-x', 'scroll');
		} else {
			nav.css('overflow-x', 'hidden');
		}
	}
	thirdNav();
	$(window).on('resize', thirdNav);


	// 选择框动画
	$('.input-select').on('focus', function() {
		$(this).next().show().next().hide();
		$(this).next().css({
			transform: 'rotate(-90deg)'
		});
	});
	$('.input-select').on('blur', function() {
		$(this).next().hide().next().show();
		$(this).next().css({
			transform: 'rotate(0deg)'
		});
	});

	// 第三方-案例展示
	$('#MTeditorBtn').on('click', function() {
		$('#caseList').hide();
		$('#MTAddCase').show();
	});
	$('#MTAddCaseCloseBtn').on('click', function() {
		$('#MTAddCase').hide();
		$('#caseList').show();
	});



});
