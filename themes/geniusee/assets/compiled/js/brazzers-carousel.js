/*!
* jQuery Brazzers Carousel v1.0.0 (http://webdesign-master.ru)
* Copyright 2015 WebDesign Master.
*/!function(a){a.fn.brazzersCarousel=function(){return this.addClass("brazzers-daddy").append("<div class='tmb-wrap'><div class='tmb-wrap-table'>").append("<div class='image-wrap'>").each(function(){var e=a(this);e.find("img").appendTo(e.find(".image-wrap")).each(function(){e.find(".tmb-wrap-table").append("<div>")})}).find(".tmb-wrap-table").bind("touchmove",function(e){e.preventDefault();var i=e.originalEvent.changedTouches[0],t=document.elementFromPoint(i.clientX,i.clientY),d=a(t).parent(".tmb-wrap-table").closest(".brazzers-daddy").find("img"),n=a(t).parent(".tmb-wrap-table").find("div");d.hide().eq(a(t).index()).css("display","block"),n.removeClass("active"),a(t).addClass("active")}).find("div").hover(function(){var e=a(this).parent(".tmb-wrap-table").closest(".brazzers-daddy").find("img"),i=a(this).parent(".tmb-wrap-table").find("div");e.hide().eq(a(this).index()).css("display","block"),i.removeClass("active"),a(this).addClass("active")}).parent().find(":first").addClass("active")}}(jQuery);