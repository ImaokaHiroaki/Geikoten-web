// JavaScript Document

$(function () {
	var scroll = new SmoothScroll('a[href*="#"]');

	var $win = $(window);

	$win.on('load resize', function () {
		var windowWidth = $win.width();

		if (windowWidth > 768) {
			// PCの処理
			$("#mob_menu").css("display", "none");
			$("#mob_menu").removeClass("active");
		}
	});

	var nav = $('#for_pc_nav');
	var sp = $('#spaces');
	var offsetTop = nav.offset().top;

	var floatMenu = function () {
		if ($(window).scrollTop() > offsetTop - 10) {
			nav.addClass('kotei_pc');
			sp.addClass('space');
		} else {
			nav.removeClass('kotei_pc');
			sp.removeClass('space');
		}
	}
	$(window).scroll(floatMenu);
	$("#mob_menu").css("display", "none");
	$("#for_mob_menu").on("click", function () {
		$("#mob_menu").slideToggle(300);
		$(this).toggleClass("active");
	});

	$("#mob_menu").on("click", function () {
		$("#mob_menu").slideToggle(200);
		$(this).toggleClass("active");
	});
});