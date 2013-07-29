function is_retina(t){if(t){var i="@2x",e=t.substr(0,t.lastIndexOf(".")),r=e.slice(-3);return r===i?!0:!1}}function getRetinaUrl(t){if(t){var i=t.split(".").pop(),e=t.substr(0,t.lastIndexOf(".")),r=e+"@2x."+i;return r}}function singleLarge(){if(retina){var t=$("#imageblock-link").attr("href");if(!is_retina(t)){var i=getRetinaUrl(t);$.ajax({url:i,type:"HEAD",error:function(){},success:function(){$("#imageblock-link").attr("href",i)}})}$("#filmstrip a").each(function(){var t=$(this),i=$(this).attr("href"),e=$(this).children("img").attr("data-medium");if(!is_retina(i)){var r=getRetinaUrl(i);$.ajax({url:r,type:"HEAD",error:function(){},success:function(){$(t).attr("href",r)}})}if(!is_retina(e)){var a=getRetinaUrl(e);$.ajax({url:a,type:"HEAD",error:function(){},success:function(){$(t).children("img").attr("data-medium",a)}})}})}}function swapBackgroundImgs(){retina&&$(".portfolio__item__visual").each(function(){var t=$(this),i=$(t).css("backgroundImage"),e=i.substring(4).slice(0,-1),r=getRetinaUrl(e);$.ajax({url:r,type:"HEAD",error:function(){},success:function(){$(t).css({backgroundImage:"url("+r+")"})}})})}function toggleTextarea(t){t?($("textarea").addClass("active"),$("input[type='submit']").addClass("active")):""===$("textarea").val()&&($("textarea").removeClass("active"),$("input[type='submit']").removeClass("active"))}function bindFlexorder(){$(".single__filmstrip").flexorder({breakpoint:1024,targetContainer:$(".single__imageblock"),targetPosition:"end"}),$(".single--404__block1 .contact").flexorder({breakpoint:768,targetContainer:$(".single--404__block2"),targetPosition:"end"})}function bindPlaceholder(){$("input, textarea").placeholder()}function bindSvgeezy(){svgeezy.init(!1,"png")}function lightboxVCenter(){var t=$(window).height(),i=$(".lightbox__img").outerHeight(),e=Math.floor((t-i)/2);$(".lightbox__content").css("top",e+"px")}function lightboxAction(t){"close"===t&&$(".lightbox").fadeOut("fast")}function lightbox(t){var i=$("#filmstrip a[href='"+t+"']").next().attr("href"),e=$("#filmstrip a[href='"+t+"']").prev().attr("href");if(i||(i=$("#filmstrip a:first").attr("href")),e||(e=$("#filmstrip a:last").attr("href")),$(".lightbox").length>0)$(".lightbox__img").html('<img src="'+t+'" id="lightbox-img">'),$(".lightbox").fadeIn("fast");else{if(e===i)var r='<div class="lightbox"><div class="lightbox__content"><div class="lightbox__img"><img src="'+t+'" id="lightbox-img">'+"</div>"+"</div>"+"</div>";else var r='<div class="lightbox"><div class="lightbox__content"><div class="lightbox__img"><img src="'+t+'" id="lightbox-img">'+"</div>"+'<div class="lightbox__controls">'+'<a class="lightbox__control--left"></a>'+'<a class="lightbox__control--right"></a>'+"</div>"+"</div>"+"</div>";$("body").append(r)}$(".lightbox__control--right").attr("href",i),$(".lightbox__control--left").attr("href",e)}function updateSingleView(t,i){if(retina){var e=getRetinaUrl(t),r=getRetinaUrl(i);$.ajax({url:r,type:"HEAD",error:function(){$("#imageblock-link").attr("href",i)},success:function(){$("#imageblock-link").attr("href",r)}}),$.ajax({url:e,type:"HEAD",error:function(){$("#imageblock-link img").attr("src",t)},success:function(){$("#imageblock-link img").attr("src",e)}})}else $("#imageblock-link").attr("href",i),$("#imageblock-link img").attr("src",t)}function preloadImages(){$("#filmstrip a").each(function(){var t=$(this).attr("href"),i=$(this).children("img").attr("data-medium"),e=new Image,r=new Image;if(retina){if(!is_retina(t)){var a=getRetinaUrl(t);$.ajax({url:a,type:"HEAD",success:function(){t=a,e.src=t}})}if(!is_retina(i)){var n=getRetinaUrl(i);$.ajax({url:n,type:"HEAD",success:function(){i=n,r.src=t}})}}else e.src=t,r.src=t})}var retina=window.devicePixelRatio>=1.5,waitOnEvent=function(){var t={};return function(i,e,r){r||(r="1"),t[r]&&clearTimeout(t[r]),t[r]=setTimeout(i,e)}}();$("#menu-trigger").click(function(){$("html").toggleClass("nav-open")}),$("textarea").focusin(function(){toggleTextarea(!0)}),$("textarea").focusout(function(){toggleTextarea()}),$(".portfolio__item").bind("touchstart",function(){$(".portfolio__item.active").removeClass("active"),$(this).addClass("active")}),$("body").on("click",".lightbox__controls a",function(t){t.preventDefault();var i=$(this).attr("href");lightbox(i),$.preload(i,{interval:200}).progress(function(){lightboxVCenter()})}),$("#imageblock").on("click","a#imageblock-link",function(t){t.preventDefault();var i=$("#imageblock a").attr("href");lightbox(i),$.preload(i,{interval:200}).progress(function(){lightboxVCenter()})}),$("body").on("click touchstart",".lightbox, .lightbox__controls",function(t){t.stopPropagation(),"lightbox__controls"!==$(this).attr("class")&&lightboxAction("close")}),$("#filmstrip").on("click","a",function(t){t.preventDefault();var i=$(this).attr("href"),e=$(this).children("img").attr("data-medium");updateSingleView(e,i)}),$(window).resize(function(){waitOnEvent(function(){lightboxVCenter()},500,"reset1")}),swapBackgroundImgs(),singleLarge(),bindFlexorder(),bindSvgeezy(),bindPlaceholder(),preloadImages();
;