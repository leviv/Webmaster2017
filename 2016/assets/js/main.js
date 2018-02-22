$(document).ready(function(){
    $(window).load(function(){
        $('#preloader-gif').fadeOut('slow',function(){$(this).remove();});
    });

});

var clicked=true;
$(".home-slider").on('click', function(){
    if(clicked)
    {
        clicked=false;
        $(".homepage-footer").css({"top": 0});
        $(".homepage-footer").css({"overflow": 'visible'});
    }
});

var clicked1=true;
$(".footer-close").on('click', function(){
    if(clicked1)
    {
        clicked = true;
        clicked1=true;
        $(".homepage-footer").css({"top": '-110%'});
        $(".homepage-footer").css({"overflow": 'hidden'});
    }
});

/*
Play video on hover Javascript
By Gaby
http://stackoverflow.com/questions/26778714/video-play-on-hover
*/
var figure = $(".homepage-left");
var vid = figure.find("video");

[].forEach.call(figure, function (item,index) {
    item.addEventListener('mouseover', hoverVideo.bind(item,index), false);
    item.addEventListener('mouseout', hideVideo.bind(item,index), false);
});

function hoverVideo(index, e) {
    vid[index].play(); 
}

function hideVideo(index, e) {
    vid[index].pause(); 
}


var figure1 = $(".homepage-right");
var vid1 = figure.find("video");

[].forEach.call(figure1, function (item,index) {
    item.addEventListener('mouseover', hoverVideo.bind(item,index), false);
    item.addEventListener('mouseout', hideVideo.bind(item,index), false);
});

function hoverVideo(index, e) {
    vid1[index].play(); 
}

function hideVideo(index, e) {
    vid1[index].pause(); 
}


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



var targetOffset = $("#teched").offset().top;
var targetOffset1 = $("#tsa-officers").offset().top;
var targetOffset2 = $("#tsa-undertakings").offset().top;
var targetOffset3 = $("#tsa-summary").offset().top;
var targetOffset4 = $("#tsa-hero").offset().top;


var $w = $(window).scroll(function(){
    if ( $w.scrollTop() >= targetOffset ) {   
        $('#bubble1').removeClass("active");
        $('#bubble2').removeClass("active");
        $('#bubble3').removeClass("active");
        $('#bubble4').removeClass("active");
        $('#bubble5').addClass("active");
    } else if ( $w.scrollTop() >= targetOffset1 ) {
        $('#bubble1').removeClass("active");
        $('#bubble2').removeClass("active");
        $('#bubble3').removeClass("active");
        $('#bubble5').removeClass("active");
        $('#bubble4').addClass("active");
    } else if ( $w.scrollTop() >= targetOffset2 ) {
        $('#bubble1').removeClass("active");
        $('#bubble2').removeClass("active");
        $('#bubble4').removeClass("active");
        $('#bubble5').removeClass("active");
        $('#bubble3').addClass("active");
    } else if ( $w.scrollTop() >= targetOffset3 ) {
        $('#bubble1').removeClass("active");
        $('#bubble3').removeClass("active");
        $('#bubble4').removeClass("active");
        $('#bubble5').removeClass("active");
        $('#bubble2').addClass("active");
    } else  if ( $w.scrollTop() >= targetOffset4 ) {
        $('#bubble2').removeClass("active");
        $('#bubble3').removeClass("active");
        $('#bubble54').removeClass("active");
        $('#bubble5').removeClass("active");
        $('#bubble1').addClass("active");
    }
});



/*
This is the class for the head-image object. Per rotating head one headImage
object has to be instanciated.
By Jan Dellsperger
*/
var className;
var imageTop;
var imageLeft;
var imageBottom;
var imageRight;

function HeadImage(className){

    /* Setting the global instance of classname to the given parameter*/
    this.className = className;

    /* Calculating the borders of the image */
    this.imageLeft = $("."+this.className+">.head-image").offset().left;
    this.imageRight = this.imageLeft + $("."+this.className+">.head-image").width();
    this.imageTop = $("."+this.className+">.head-image").offset().top;
    this.imageBottom = this.imageTop + $("."+this.className+">.head-image").height();

    /* This function determines where the mouse pointer is relative to the image
     * and displays the correct image accordingly. */
    this.setImageDirection = function(){
        $("."+this.className+">.head-image").css("z-index","0");
        if(mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY <= this.imageTop){
            $("."+this.className+">.up").css("z-index","1");
        } else if(mouseX < this.imageLeft && mouseY < this.imageTop){
            $("."+this.className+">.up-left").css("z-index","1");
        } else if(mouseX <= this.imageLeft && mouseY >= this.imageTop && mouseY <= this.imageBottom){
            $("."+this.className+">.left").css("z-index","1");
        } else if(mouseX < this.imageLeft && mouseY > this.imageBottom){
            $("."+this.className+">.down-left").css("z-index","1");
        } else if(mouseX >= this.imageLeft && mouseX <= this.imageRight && mouseY >= this.imageBottom){
            $("."+this.className+">.down").css("z-index","1");
        } else if(mouseX > this.imageRight && mouseY > this.imageBottom){
            $("."+this.className+">.down-right").css("z-index","1");
        } else if(mouseX >= this.imageRight && mouseY >= this.imageTop && mouseY <= this.imageBottom){
            $("."+this.className+">.right").css("z-index","1");
        } else if(mouseX > this.imageRight && mouseY < this.imageTop){
            $("."+this.className+">.up-right").css("z-index","1");
        } else{
            $("."+this.className+">.front").css("z-index","1");
            $(".text-holder").css("display","none");
            $("."+this.className+".text-holder").css("display","block");
        }
    };
}

jQuery('.one').click(function(){
    $(".officer-info").removeClass("active");
    $(".levi").addClass("active");
});
jQuery('.two').click(function(){
    $(".officer-info").removeClass("active");
    $(".sam").addClass("active");
});
jQuery('.three').click(function(){
    $(".officer-info").removeClass("active");
    $(".chris").addClass("active");
});
jQuery('.four').click(function(){
    $(".officer-info").removeClass("active");
    $(".michael").addClass("active");
});
jQuery('.five').click(function(){
    $(".officer-info").removeClass("active");
    $(".brittany").addClass("active");
});
jQuery('.six').click(function(){
    $(".officer-info").removeClass("active");
    $(".jenna").addClass("active");
});
jQuery('.seven').click(function(){
    $(".officer-info").removeClass("active");
    $(".luke").addClass("active");
});


/*
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


var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
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


