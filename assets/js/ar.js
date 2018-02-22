$(window).on('load',function() {
    $('#preloader-gif').remove();
});/*
Hamburger transition tutorial
By Nick
http://callmenick.com/2015/01/25/animating-css-only-hamburger-menu-icons/
*/
(function() {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }

})();

// Navbar Code


$("#nav").click(function() {
    var width = $(window).width() - 68;

    if ($(".c-hamburger").hasClass("is-active")) {
        $(".c-hamburger").animate({
            right: "20px", 
        }, {
            duration: 150,
            easing: 'easeInOutQuint'
        });
        $("#nav-expand").animate({
            width: "100%"
        }, {
            duration: 1500,
            easing: 'easeInOutQuint'
        });
        $(".nav-list").animate({
            left: "0%"
        }, {
            duration: 300,
            easing: 'easeInOutQuint'
        });
        $(".c-hamburger").css({'transform' : 'rotate(180deg)'});

    } else {
        $(".c-hamburger").animate({right: width + "px"}, {
            duration: 150,
            easing: 'easeInOutQuint'
        });
        $("#nav-expand").animate({
            width: "0%"
        }, {
            duration: 1500,
            easing: 'easeInOutQuint'
        });
        $(".nav-list").animate({
            left: "-100%"
        }, {
            duration: 400,
            easing: 'easeInOutQuint'
        });
        $(".c-hamburger").css({'transform' : 'rotate(0deg)'});
    }
});

$(".nav-one").mouseover(function(){
    $('#nav-expand').css('background-image', 'url(assets/img/nav11.JPG)');
});
$(".nav-two").mouseover(function(){
    $('#nav-expand').css('background-image', 'url(assets/img/nav12.JPG)');
});
$(".nav-three").mouseover(function(){
    $('#nav-expand').css('background-image', 'url(assets/img/nav13.JPG)');
});
$(".nav-four").mouseover(function(){
    $('#nav-expand').css('background-image', 'url(assets/img/nav4.JPG)');
});
$(".nav-five").mouseover(function(){
    $('#nav-expand').css('background-image', 'url(assets/img/nav.JPG)');
});

$(".nav-list a").mouseout(function(){
    $('#nav-expand').css('background-image', 'url(assets/img/nav10.JPG)');
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 400) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});





/* 
Script to make objects scroll at a differnt pace
By Josh Parrett 
http://codepen.io/JTParrett/pen/BkDie?editors=1010 
*/
$.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];

    $(this).each(function(){
        instances.push(new moveItItem($(this)));
    });

    window.onscroll = function(){
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst){
            inst.update(scrollTop);
        });
    }
}

var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
    var pos = scrollTop / this.speed;
    this.el.css('transform', 'translateY(' + -pos + 'px)');
};

$(function() {
    $('[data-scroll-speed]').moveIt();
});





/* 
Script to force no horizontal scroll javascript in Safari
By Dylan Cope
http://stackoverflow.com/questions/17756649/disable-the-horizontal-scroll
*/

var scrollEventHandler = function()
{
    window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);


function parallax(e) {
    window.webkitRequestAnimationFrame(function() {
        var offset = window.pageYOffset;
        a.style.top = (offset / 2) + "px";
        b.style.top = (offset / 2) + "px";
        textbox.style.top =- (offset * 0.7) + "px";
        textbox2.style.top =- (offset * 0.7) + "px";
    });
}






// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 400) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(window).scroll(function() {
    if ($(".header-logo").offset().top > 400) {
        $(".header-logo").addClass("logo-collapse", 1000, "easeInOutQuad");
    } else {
        $(".header-logo").removeClass("logo-collapse", 1000, "easeInOutQuad");
    }
});





/*
JS to show/hide extra information on the ar buyer guide
MADE FROM SCRATCH BY LEVI VILLARREAL
*/
$(".more-button").click(function(){
    $(this).parents(".left-ar-option").find("#hidden-block").animate({"right": "115%"},1000);
    $(this).parents(".right-ar-option").find("#hidden-block").animate({"left": "115%"},1000);
    $(this).parents(".ar-option").find('.ar-buttons').fadeOut(500);
    $(this).parents(".ar-option").find('.ar-hide').delay(1000).fadeOut(0);
    $(this).parents(".ar-option").find('.ar-reveal').delay(1000).fadeIn(500);
});

$(".side-arrow").click(function(){
    $(this).parents(".ar-option").find('.ar-reveal').fadeOut(500);
    $(this).parents(".ar-option").find('.ar-hide').delay(505).fadeIn(500);
    $(this).parents(".ar-option").find('.ar-buttons').delay(510).fadeIn(500);
    $(this).parents(".left-ar-option").find("#hidden-block").delay(720).animate({"right": "18%"},1000);
    $(this).parents(".right-ar-option").find("#hidden-block").delay(720).animate({"left": "18%"},1000);
});




/*
 Color animation 1.6.0
 http://www.bitstorm.org/jquery/color-animation/
 Copyright 2011, 2013 Edwin Martin
 Released under the MIT and GPL licenses.
*/
'use strict';(function(d){function h(a,b,e){var c="rgb"+(d.support.rgba?"a":"")+"("+parseInt(a[0]+e*(b[0]-a[0]),10)+","+parseInt(a[1]+e*(b[1]-a[1]),10)+","+parseInt(a[2]+e*(b[2]-a[2]),10);d.support.rgba&&(c+=","+(a&&b?parseFloat(a[3]+e*(b[3]-a[3])):1));return c+")"}function f(a){var b;return(b=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(a))?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16),1]:(b=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(a))?[17*parseInt(b[1],16),17*parseInt(b[2],
16),17*parseInt(b[3],16),1]:(b=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a))?[parseInt(b[1]),parseInt(b[2]),parseInt(b[3]),1]:(b=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(a))?[parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3],10),parseFloat(b[4])]:l[a]}d.extend(!0,d,{support:{rgba:function(){var a=d("script:first"),b=a.css("color"),e=!1;if(/^rgba/.test(b))e=!0;else try{e=b!=a.css("color","rgba(0, 0, 0, 0.5)").css("color"),
    a.css("color",b)}catch(c){}return e}()}});var k="color backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor outlineColor".split(" ");d.each(k,function(a,b){d.Tween.propHooks[b]={get:function(a){return d(a.elem).css(b)},set:function(a){var c=a.elem.style,g=f(d(a.elem).css(b)),m=f(a.end);a.run=function(a){c[b]=h(g,m,a)}}}});d.Tween.propHooks.borderColor={set:function(a){var b=a.elem.style,e=[],c=k.slice(2,6);d.each(c,function(b,c){e[c]=f(d(a.elem).css(c))});var g=f(a.end);
a.run=function(a){d.each(c,function(d,c){b[c]=h(e[c],g,a)})}}};var l={aqua:[0,255,255,1],azure:[240,255,255,1],beige:[245,245,220,1],black:[0,0,0,1],blue:[0,0,255,1],brown:[165,42,42,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgrey:[169,169,169,1],darkgreen:[0,100,0,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkviolet:[148,0,211,1],fuchsia:[255,
0,255,1],gold:[255,215,0,1],green:[0,128,0,1],indigo:[75,0,130,1],khaki:[240,230,140,1],lightblue:[173,216,230,1],lightcyan:[224,255,255,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],magenta:[255,0,255,1],maroon:[128,0,0,1],navy:[0,0,128,1],olive:[128,128,0,1],orange:[255,165,0,1],pink:[255,192,203,1],purple:[128,0,128,1],violet:[128,0,128,1],red:[255,0,0,1],silver:[192,192,192,1],white:[255,255,255,1],yellow:[255,255,
0,1],transparent:[255,255,255,0]}})(jQuery);


/*
JS to transition slides on the main ar page
*/
$(".right-slideshow").click(function(){


    if ($(this).parents(".ar-slideshow").find('.slide-button1').hasClass("active")) {

        $(this).parents(".ar-slideshow").animate({"background-position": "33%"},800);  
        $(this).parents(".ar-slideshow").find('#slides').animate({"right": "100%"},800);    
        $(this).parents(".ar-slideshow").find('.slide-button').removeClass("active"); 
        $(this).parents(".ar-slideshow").find('.slide-button2').addClass("active"); 
        $(this).parents(".ar-slideshow").find('.custom-slide').animate({"background-color": "rgba(255, 255, 255, 0.6)"},800);

    } else if ($(this).parents(".ar-slideshow").find('.slide-button2').hasClass("active")) {

        $(this).parents(".ar-slideshow").animate({"background-position": "66%"},800);  
        $(this).parents(".ar-slideshow").find('#slides').animate({"right": "200%"},800);    
        $(this).parents(".ar-slideshow").find('.slide-button').removeClass("active"); 
        $(this).parents(".ar-slideshow").find('.slide-button3').addClass("active"); 

    } else if ($(this).parents(".ar-slideshow").find('.slide-button3').hasClass("active")) {

        $(this).parents(".ar-slideshow").animate({"background-position": "100%"},800);  
        $(this).parents(".ar-slideshow").find('#slides').animate({"right": "300%"},800);    
        $(this).parents(".ar-slideshow").find('.slide-button').removeClass("active"); 
        $(this).parents(".ar-slideshow").find('.slide-button4').addClass("active"); 

    } else if ($(this).parents(".ar-slideshow").find('.slide-button4').hasClass("active")) {
        $(this).parents(".ar-slideshow").animate({"background-position": "0%"},800);  
        $(this).parents(".ar-slideshow").find('#slides').animate({"right": "0%"},800);    
        $(this).parents(".ar-slideshow").find('.slide-button').removeClass("active"); 
        $(this).parents(".ar-slideshow").find('.slide-button1').addClass("active"); 
        $(this).parents(".ar-slideshow").find('.custom-slide').animate({"background-color": "rgba(0, 0, 0, 0)"},800);
    }

});



$(".left-slideshow").click(function(){


    if ($(this).parents(".ar-slideshow").find('.slide-button1').hasClass("active")) {

        $(this).parents(".ar-slideshow").animate({"background-position": "100%"},800);  
        $(this).parents(".ar-slideshow").find('#slides').animate({"right": "300%"},800);    
        $(this).parents(".ar-slideshow").find('.slide-button').removeClass("active"); 
        $(this).parents(".ar-slideshow").find('.slide-button4').addClass("active"); 
        $(this).parents(".ar-slideshow").find('.custom-slide').animate({"background-color": "rgba(255, 255, 255, 0.6)"},800);

    } else if ($(this).parents(".ar-slideshow").find('.slide-button2').hasClass("active")) {

        $(this).parents(".ar-slideshow").animate({"background-position": "0%"},800);  
        $(this).parents(".ar-slideshow").find('#slides').animate({"right": "0%"},800);    
        $(this).parents(".ar-slideshow").find('.slide-button').removeClass("active"); 
        $(this).parents(".ar-slideshow").find('.slide-button1').addClass("active"); 
        $(this).parents(".ar-slideshow").find('.custom-slide').animate({"background-color": "rgba(0, 0, 0, 0)"},800);

    } else if ($(this).parents(".ar-slideshow").find('.slide-button3').hasClass("active")) {

        $(this).parents(".ar-slideshow").animate({"background-position": "33%"},800);  
        $(this).parents(".ar-slideshow").find('#slides').animate({"right": "100%"},800);    
        $(this).parents(".ar-slideshow").find('.slide-button').removeClass("active"); 
        $(this).parents(".ar-slideshow").find('.slide-button2').addClass("active"); 

    } else if ($(this).parents(".ar-slideshow").find('.slide-button4').hasClass("active")) {
        $(this).parents(".ar-slideshow").animate({"background-position": "66%"},800);  
        $(this).parents(".ar-slideshow").find('#slides').animate({"right": "200%"},800);    
        $(this).parents(".ar-slideshow").find('.slide-button').removeClass("active"); 
        $(this).parents(".ar-slideshow").find('.slide-button3').addClass("active"); 
    }

});



/*
Tabbable content
By Nick
http://callmenick.com/2014/02/11/simple-tabbed-content-area-with-css-and-jquery/
 */
// Tabbable Content
$(document).ready(function(){
    $("ul#tabs li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#tab li.active").removeClass("active");
            $("ul#tab li:nth-child("+nthChild+")").addClass("active");
        }
    });
});





$(document).ready(function () {
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});


var angle = 0;

window.setInterval(function(){
    angle += 180;
        $('#box img').css('webkitTransition', '-webkit-transform 1.0s cubic-bezier(0,.75,.25,1)');
        $('#box img').css('webkitTransform', 'rotateY(' + angle + 'deg)'); 
}, 5000);







var ar_pos = (pos / -100) + 1

if(ar_pos == 2) {
        $("#floating-ar").animate({"left": "10%"},800);  
} else if(ar_pos == 3) {
    $("#floating-ar").animate({"left": "90%"},800); 
}
setTimeout(yourFunction, 500);
   
