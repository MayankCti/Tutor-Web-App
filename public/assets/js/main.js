$(document).ready(function(){
  $('.ct_toggle_bar').click(function(){
    $('main').toggleClass('ct_collapsed_sidebar')
});
$('.ct_close_menu').click(function(){
    $('main').removeClass('ct_collapsed_sidebar')
});
AOS.init();

})
jQuery(document).ready(function() {

  $(".chat-list a").click(function() {
      $(".chatbox").addClass('showbox');
      return false;
  });

  $(".chat-icon").click(function() {
      $(".chatbox").removeClass('showbox');
  });


});



const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["A promising future", "Self confidenc", "a journey", "LIFE"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan?.classList?.contains("typing"))
      cursorSpan?.classList?.add("typing");
    typedTextSpan?.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan?.classList?.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan?.classList?.contains("typing"))
      cursorSpan?.classList?.add("typing");
    typedTextSpan?.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan?.classList?.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});


$(document).ready(function(){
  $('.ct_tutor_slider').owlCarousel({
    loop:true,
    margin:24,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
$('.ct_category_slider').owlCarousel({
  loop:true,
  margin:24,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:5
      }
  }
})

$('.ct_testimonial_slider').owlCarousel({
  loop:true,
  margin:125,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
// variables 
var toTop = $('.ct_bottom_to_top');
// logic
toTop.on('click', function() {
  $('html, body').animate({
    scrollTop: $('html, body').offset().top,
  });
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 300) {
      $("header").addClass("sticky_header");
  } else {
      $("header").removeClass("sticky_header");
  }
});

})
var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;
$(".next").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  next_fs.show();
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        scale = 1 - (1 - now) * 0.2;
        left = now * 50 + "%";
        opacity = 1 - now;
        current_fs.css({
          transform: "scale(" + scale + ")",
          position: "absolute"
        });
        next_fs.css({ left: left, opacity: opacity });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      easing: "easeInOutBack"
    }
  );
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  previous_fs.show();
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        scale = 0.8 + (1 - now) * 0.2;
        left = (1 - now) * 50 + "%";
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity
        });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      easing: "easeInOutBack"
    }
  );
});

$(".submit").click(function () {
  return false;
});


jQuery(document).ready(function() {
  jQuery('.ct_loader_main').fadeOut();
});

AOS.init();



// Step form Js E



