$(document).ready(function(){
	
	$(document).foundation();
	scroll();
});
var scroll = function(){
	$(window).scroll(function(){
		if($(window).width() >= 639){
			if($(window).scrollTop() >= 100){
				$("#nav").addClass("navbar-top");
				$(".menu").addClass("menu-top");
				$(".top-bar-left").addClass("top-bar-left-top");
			}else{
				$("#nav").removeClass("navbar-top");
				$("#nav").addClass("navbar");
				$(".menu").removeClass("menu-top");
				$(".top-bar-left").removeClass("top-bar-left-top");
			}
		}
	});
}

