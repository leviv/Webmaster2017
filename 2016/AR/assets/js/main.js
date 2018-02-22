$(document).ready(function(){
    $(window).load(function(){
        $('#preloader-gif').fadeOut('slow',function(){$(this).remove();});
    });

});

//Scroll transition when click on link
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


function parallax(e) {
    window.webkitRequestAnimationFrame(function() {
        var offset = window.pageYOffset;
        a.style.top = (offset / 2) + "px";
        b.style.top = (offset / 2) + "px";
        textbox.style.top =- (offset * 0.7) + "px";
        textbox2.style.top =- (offset * 0.7) + "px";
    });
}


$( ".link1" ).hover(
    function() {
        $(".big-text").css("left", "50px");
        $(".big-text").text("Our Chapter");
    }, function() {
        $(".big-text").css("right", "50px");
        $(".big-text").css("left", "auto");
        $(".big-text").text("GHTSA");
    }
);

$( ".link2" ).hover(
    function() {
        $(".big-text").css("left", "50px");
        $(".big-text").text("TechEdu");
    }, function() {
        $(".big-text").css("right", "50px");
        $(".big-text").css("left", "auto");
        $(".big-text").text("GHTSA");
    }
);

$( ".link3" ).hover(
    function() {
        $(".big-text").css("left", "50px");
        $(".big-text").text("About");
    }, function() {
        $(".big-text").css("right", "50px");
        $(".big-text").css("left", "auto");
        $(".big-text").text("GHTSA");
    }
);

$( ".link4" ).hover(
    function() {
        $(".big-text").css("left", "50px");
        $(".big-text").text("Design Brief");
    }, function() {
        $(".big-text").css("right", "50px");
        $(".big-text").css("left", "auto");
        $(".big-text").text("GHTSA");
    }
);



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


// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 400) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});









// Rotating Officer Heads



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
    $(".jessica").addClass("active");
});
jQuery('.four').click(function(){
    $(".officer-info").removeClass("active");
    $(".michael").addClass("active");
});
jQuery('.five').click(function(){
    $(".officer-info").removeClass("active");
    $(".isabell").addClass("active");
});
jQuery('.six').click(function(){
    $(".officer-info").removeClass("active");
    $(".jenna").addClass("active");
});
jQuery('.seven').click(function(){
    $(".officer-info").removeClass("active");
    $(".luke").addClass("active");
});