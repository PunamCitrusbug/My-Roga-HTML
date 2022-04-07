


function openNav2() {
    $("#mySidenav2").addClass("width-menu");
    $("#cd-shadow-layer").css("display", "flex");
    $("body").css("position", "relative");
    $("body").css("overflow", "hidden");
    $("body").css("height", "100vh");
    // $(".position-fixed-overlay").addClass("position-show");
    $(".closebtn2").css("position", "fixed");
}
  
function closeNav2() {
    $("#mySidenav2").removeClass("width-menu");
    $("#cd-shadow-layer").css("display", "none");
    $("body").css("position", "relative");
    $("body").css("overflow", "");
    $("body").css("height", "");
    $(".closebtn2").css("position", "relative");  
}


// var headertopoption = $(window);
// var headTop = $(".navbar-dark");

// headertopoption.on("scroll", function () {
//     if (headertopoption.scrollTop() > 100) {
//         headTop.addClass("fixed-top slideInDown animated");
//     } else {
//         headTop.removeClass("fixed-top slideInDown animated");
//     }
// });

  
// wow

$(document).ready(function(){

    var wow = new WOW(
    {  
        mobile:  false,
    }
).init();
    

/// smooth scroll

$("a.smoth-scroll").on("click", function (e) {
    var anchor = $(this);
    $("html, body").stop().animate({
        scrollTop: $(anchor.attr("href")).offset().top - 70
    }, 1500);
    e.preventDefault();
});

// menu click

$(".nav-link").click(function(){
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
});


$(".nav-link").click(function(){
    $(".navbar-collapse").removeClass("show");

    $("#mySidenav2").removeClass("width-menu");
    $("#cd-shadow-layer").css("display", "none");
    $("body").css("position", "relative");
    $("body").css("overflow", "");
    $("body").css("height", "");
    $(".closebtn2").css("position", "relative");
});

$(".title-link").click(function(){
    // alert("Hello Guys");
    $(".mr_result_list_wrapper").toggleClass("active");
    $(".mr_found_result_wrapper").toggleClass("active");
});

// Product mobile slider
// $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
// $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
$('.mr_product_info_details_slider_block .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        }
    }
})
$('.mr_product_slider_main .owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    slideBy: 2,
    navText : ["<span class='owl_left'></span>","<span class='owl_right'></span>"],
    responsive:{
        0:{
            items:2
        },
        768:{
            items:4
        },
        1200:{
            items:5
        },
    }
}).on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (event) {
    //alert("s");
    if (!event.namespace) return;
    var carousel = event.relatedTarget,
        element = event.target,
        current = carousel.current();

    if(current === carousel.maximum()){
        $('.mr_product_slider_main').addClass("last");
    }else{
        $('.mr_product_slider_main').removeClass("last");
    } 
    if(current === carousel.minimum()) {
        $('.mr_product_slider_main').addClass("first");
    }else{
        $('.mr_product_slider_main').removeClass("first");
    }

});

$('.mr_product_slider_main_mobile.mr_product_slider_main .owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    slideBy: 2,
    navText : ["<span class='owl_left'></span>","<span class='owl_right'></span>"],
    responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        },
        1200:{
            items:4
        },
    }
}).on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (event) {
    //alert("s");
    if (!event.namespace) return;
    var carousel = event.relatedTarget,
        element = event.target,
        current = carousel.current();

    if(current === carousel.maximum()){
        $('.mr_product_slider_main_sticky').addClass("last");
    }else{
        $('.mr_product_slider_main_sticky').removeClass("last");
    } 
    if(current === carousel.minimum()) {
        $('.mr_product_slider_main_sticky').addClass("first");
    }else{
        $('.mr_product_slider_main_sticky').removeClass("first");
    }

});

$('.mr_product_slider_main_sticky .owl-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    navText : ["<span class='owl_left'></span>","<span class='owl_right'></span>"],
    responsive:{
        0:{
            items:3
        },
        768:{
            items:4
        },
        1200:{
            items:5
        },
    }
}).on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (event) {
    //alert("s");
    if (!event.namespace) return;
    var carousel = event.relatedTarget,
        element = event.target,
        current = carousel.current();

    if(current === carousel.maximum()){
        $('.mr_product_slider_main_sticky').addClass("last");
    }else{
        $('.mr_product_slider_main_sticky').removeClass("last");
    } 
    if(current === carousel.minimum()) {
        $('.mr_product_slider_main_sticky').addClass("first");
    }else{
        $('.mr_product_slider_main_sticky').removeClass("first");
    }

});

// Mobile sticky slider
$('.mr_mobile_sticky_slider .owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    navText : ["<span class='owl_left'></span>","<span class='owl_right'></span>"],
    // autoWidth:true,
    responsive:{
        0:{
            items:2
        }
    }
}).on('initialized.owl.carousel changed.owl.carousel refreshed.owl.carousel', function (event) {
    //alert("s");
    if (!event.namespace) return;
    var carousel = event.relatedTarget,
        element = event.target,
        current = carousel.current();

    if(current === carousel.maximum()){
        $('.mr_mobile_sticky_slider').addClass("last");
    }else{
        $('.mr_mobile_sticky_slider').removeClass("last");
    } 
    if(current === carousel.minimum()) {
        $('.mr_mobile_sticky_slider').addClass("first");
    }else{
        $('.mr_mobile_sticky_slider').removeClass("first");
    }

});

// $(window).scroll(function() {

//     var scroll = $(window).scrollTop();
//     if (scroll >= 100) {
//         $(".mr_mobile_sticky_wrapper").addClass("active");
//         $(".mr_desktop_sticky_wrapper").addClass("active");
//     }
//     else{
//         $(".mr_mobile_sticky_wrapper").removeClass("active");
//         $(".mr_desktop_sticky_wrapper").removeClass("active");
//     }
// });
var blogSection = $("#blog1").offset().top - 200
var contactSection = $("#mr_contact").offset().top - 150
$(".blog_one").click(function() {
    $('html, body').animate({
        scrollTop: blogSection
    }, 0);
});
$(".ask_btn").click(function() {
    $('html, body').animate({
        scrollTop: contactSection
    }, 0);
});


var $window = $(window);
$window.scroll(function () {
    var distance = $('.product-info-new-section').offset().top - 100
    console.log("Distance" + distance);
  if ($window.scrollTop() >= distance) {
    $(".mr_mobile_sticky_wrapper").addClass("active");
    $(".mr_desktop_sticky_wrapper").addClass("active");
  }
  else {
    $(".mr_mobile_sticky_wrapper").removeClass("active");
    $(".mr_desktop_sticky_wrapper").removeClass("active");
  }
});  

$(".active_one").click(function() {
    $(".closed_content").show();
    $(".active_one").removeClass("visible_active");
});
$(".active_two").click(function() {
    $(".active_one").addClass("visible_active");
    $(".closed_content").hide();
});
$(".middle-section.mr_quiz_mid .page-title-new-section .title-link p .purp_txt").click(function() {
    $(".answer_moto").toggleClass("d-none");
});
// readmore

$("#toggle-read").click(function() {
    var elem = $("#toggle-read").text();
    $("#toggle-read").hide();
    $("#text_hide_show").show();
    // if (elem === "Read More") {
    //   $("#toggle-read").text("Read Less");
    //   $("#text_hide_show").show();
    // } else {
    //   $("#toggle-read").text("Read More");
    //   $("#text_hide_show").hide();
    // }
  });

  $("#toggle-read-2").click(function() {
    var elem = $("#toggle-read-2").text();
    $("#toggle-read").show();
    $("#text_hide_show").hide();
    // if (elem === "Read More") {
    //   $("#toggle-read-2").text("Read Less");
    //   $("#text_hide_show").show();
    // } else {
    //   $("#toggle-read-2").text("Read More");
    //   $("#text_hide_show").hide();
    // }
  });

// our service

$(".owl-carousel-popular").owlCarousel({
    loop:false,
    margin:0,
    autoplay:false,
    // autoplayTimeout:4000,
    // autoplayHoverPause:true,
    dots: false,
    rewind: false,
    responsiveClass:true,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
    ],
    responsive:{
        0:{
            items:2.8,
            nav:false
        },

        375:{
            items:2.8,
            nav:false   
        },
        768:{
            items:3,
            nav:false
        },

        1000:{
            items:5,
            nav:true
        },
        1024:{
            items:4,
            nav:true,
        },
        1200:{
            items:5,
            nav:true,
        },
        1300:{
            items:6,
            nav:true,
        }
    }
});

$(".owl-carousel-best").owlCarousel({
    loop:false,
    margin:27,
    autoplay:false,
    // autoplayTimeout:4000,
    rewind: false,
    // autoplayHoverPause:true,
    dots: false,
    responsiveClass:true,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
    ],
    responsive:{
        0:{
            items:2,
            nav:false,
            margin:20,
        },
        321:{
            items:2,
            margin:20,
            nav:false
        },
        375:{
            items:2,
            margin:20,
            nav:false
        },
        768:{
            items:3,
            nav:false
        },

        1024:{
            items:3,
            nav:true
        },
        1200:{
            items:5,
            nav:true,
        },
       
    }
});

$(".nav-toggle").click(function(){
    $(".nav-toggle").removeClass("active");
    $(".nav-toggle").parent().removeClass("active");
    $(this).addClass("active");
    $(this).parent().addClass("active");
});

});