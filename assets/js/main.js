
/* If click on layer than layer pops up

$("img.layer-image").click(function(){
    if ($(this).hasClass('active')) {
        // Rotate layer until its skewed
        $(this).closest('.layer').css({'transform' : 'rotateX(75deg)'});
        
        //Check the layer to set the z-index
        if($(this).hasClass('layer1')) {
            $(this).closest('.layer').css({ 'z-index' : '3'}); 
        } else if($(this).hasClass('layer2')) {
            $(this).closest('.layer').css({ 'z-index' : '2'}); 
        } else if($(this).hasClass('layer3')) {
            $(this).closest('.layer').css({ 'z-index' : '1'}); 
        } else {
            //else code n/a
        }
        
        // set background slightly transparent
        $(this).css({'background' : 'rgba(255, 255, 255, 0.65)'});
        //remove active class
        $(this).removeClass("active");
        
    } else {
        if ($(".layer1").hasClass('active')) {
            $(".layer1").closest('.layer').css({'transform' : 'rotateX(75deg)'});
            $(".layer1").closest('.layer').css({ 'z-index' : '3'}); 
            $(".layer1").removeClass("active");
        } else if ($(".layer2").hasClass('active')) {
            $(".layer2").closest('.layer').css({'transform' : 'rotateX(75deg)'});
            $(".layer2").closest('.layer').css({ 'z-index' : '2'}); 
            $(".layer2").removeClass("active");
        } else if ($(".layer3").hasClass('active')) {
            $(".layer3").closest('.layer').css({'transform' : 'rotateX(75deg)'});
            $(".layer3").closest('.layer').css({ 'z-index' : '1'}); 
            $(".layer3").removeClass("active");
        }
        // make flat and change z-index
        $(this).closest('.layer').css({'transform' : 'rotateX(0deg)', 'z-index' : '10000'});
        //make background opaque
        $(this).css({'background' : '#fff'});
        //add active class
        $(this).addClass("active");
    }
});
*/

$(window).on('load',function() {
    $('#preloader-gif').remove();
});

$(".layer").click(function(){
    if ($( this ).hasClass("layer-active")) {
        $('.layer').removeClass('layer-active');
        $('.pulse_holder').css({
            'opacity' : '0',
            'display' : 'none', 
        });
        $('.layer').removeClass('layer-active');
    } else {
        $('.layer').removeClass('layer-active');
        $('.pulse_holder').css({
            'opacity' : '0',
            'display' : 'none', 
        });
        $( this ).addClass('layer-active');
    }
    
});

$(".dropdown-item").click(function(){
    $('.layer').removeClass('layer-active');
    $('.map-info').removeClass('map-display');
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'none', 
    });
});

$("a.bio").click(function(){
    $('.third-layer').addClass('layer-active');
    $('.map-bio').addClass('map-display');
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '425px', 
        'left' : '92px'
    }).show().animate({opacity:1});
});

$("a.chem").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-chem').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '550px', 
        'left' : '235px'
    }).show().animate({opacity:1});
});

$("a.psy").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-psy').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '450px', 
        'left' : '240px'
    }).show().animate({opacity:1});
});

$("a.dcbio").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-dcbio').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '425px', 
        'left' : '92px'
    }).show().animate({opacity:1});
});

$("a.dcchem").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-dcchem').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '490px', 
        'left' : '150px'
    }).show().animate({opacity:1});
});

$("a.ied").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-ied').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '315px', 
        'left' : '285px'
    }).show().animate({opacity:1});
});

$("a.civ").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-civ').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '450px', 
        'left' : '240px'
    }).show().animate({opacity:1});
});

$("a.poe").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-poe').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '375px', 
        'left' : '285px'
    }).show().animate({opacity:1});
});

$("a.robo").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-robo').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '550px', 
        'left' : '275px'
    }).show().animate({opacity:1});
});

$("a.cim").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-cim').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '200px', 
        'left' : '220px'
    }).show().animate({opacity:1});
});

$("a.elec").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-elec').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '200px', 
        'left' : '220px'
    }).show().animate({opacity:1});
});

$("a.alg").click(function(){
    $('.second-layer').addClass('layer-active')
    $('.map-alg').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '460px', 
        'left' : '80px'
    }).show().animate({opacity:1});
});

$("a.geo").click(function(){
    $('.second-layer').addClass('layer-active')
    $('.map-geo').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '340px', 
        'left' : '58px'
    }).show().animate({opacity:1});
});

$("a.trig").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-trig').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '500px', 
        'left' : '375px'
    }).show().animate({opacity:1});
});

$("a.calc").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-calc').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '500px', 
        'left' : '375px'
    }).show().animate({opacity:1});
});

$("a.stat").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-stat').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '500px', 
        'left' : '375px'
    }).show().animate({opacity:1});
});

$("a.pit").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-pit').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '425px', 
        'left' : '150px'
    }).show().animate({opacity:1});
});

$("a.net").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-net').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '370px', 
        'left' : '330px'
    }).show().animate({opacity:1});
});

$("a.main").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-main').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '370px', 
        'left' : '330px'
    }).show().animate({opacity:1});
});

$("a.prog").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-prog').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '315px', 
        'left' : '285px'
    }).show().animate({opacity:1});
});

$("a.anim").click(function(){
    $('.third-layer').addClass('layer-active')
    $('.map-anim').addClass('map-display')
    $('.pulse_holder').css({
        'opacity' : '0',
        'display' : 'block', 
        'top' : '315px', 
        'left' : '285px'
    }).show().animate({opacity:1});
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

/*
    Hamburger transition tutorial
    By Nick
    http://callmenick.com/2015/01/25/animating-css-only-hamburger-menu-icons/
*/
$(document).ready(function(){

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
});


           

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
    $('#nav-expand').css('background-image', 'url(assets/img/nav1.JPG)');
});
$(".nav-two").mouseover(function(){
    $('#nav-expand').css('background-image', 'url(assets/img/nav2.JPG)');
});
$(".nav-three").mouseover(function(){
    $('#nav-expand').css('background-image', 'url(assets/img/nav3.JPG)');
});
$(".nav-four").mouseover(function(){
    $('#nav-expand').css('background-image', 'url(assets/img/nav6.JPG)');
});
$(".nav-five").mouseover(function(){
    $('#nav-expand').css('background-image', 'url(assets/img/nav4.JPG)');
});
$(".nav-six").mouseover(function(){
    $('#nav-expand').css('background-image', 'url(assets/img/nav10.JPG)');
});

$(".nav-list a").mouseout(function(){
    $('#nav-expand').css('background-image', 'url(assets/img/nav.JPG)');
});

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

$('.one img').click(function(){
    $(".officer-info").removeClass("active");
    $(".levi").addClass("active");
});
$('.two img').click(function(){
    $(".officer-info").removeClass("active");
    $(".sam").addClass("active");
});
$('.three img').click(function(){
    $(".officer-info").removeClass("active");
    $(".jessica").addClass("active");
});
$('.four img').click(function(){
    $(".officer-info").removeClass("active");
    $(".michael").addClass("active");
});
$('.five img').click(function(){
    $(".officer-info").removeClass("active");
    $(".isabell").addClass("active");
});
$('.six img').click(function(){
    $(".officer-info").removeClass("active");
    $(".jenna").addClass("active");
});
$('.seven img').click(function(){
    $(".officer-info").removeClass("active");
    $(".luke").addClass("active");
});