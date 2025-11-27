// sticky header

$(window).on("scroll touchmove", function() {

    if ($(document).scrollTop() > $(".header-area").position().top) {
      $('.header-area').css('background', '#000');
  
    }
    else{
    $('.header-area').removeAttr('style');
  
    }
  });

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


//mobile menu

        $(document).ready(function () {
  $(".cross").hide();
  $(".menu").hide();

  $(".canva_expander").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".canva_expander").hide();
      $(".cross").show();
    });
  });

  $(".cross").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".cross").hide();
      $(".canva_expander").show();
    });
  });

  // Close menu when a link is clicked
  $(".menu ul li a").click(function () {
    $(".menu").slideUp("slow", function () {
      $(".cross").hide();
      $(".canva_expander").show();
    });
  });

  // Close out sub menu
  $(".sub__close").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().removeClass("is-active");
  });

  // Trigger sub menu
  $(".menu ul .nav__submenu").click(function (e) {
    e.preventDefault();
    $(this).siblings().addClass("is-active");
  });
});


// mobile sticky header

$(window).on("scroll touchmove", function() {

  if ($(document).scrollTop() > $("#mobile-sticky-wrapper").position().top) {
    $('.mobile-sticky-area').css('width', '100%');
    $('.mobile-sticky-area').css('max-width', '1600px');
    $('.mobile-sticky-area').css('margin', '0 auto');
    $('.mobile-sticky-area').css('position', 'fixed');
    $('.mobile-sticky-area').css('top', '0px');
    $('.mobile-sticky-area').css('background', '#000000');
    $('.mobile-sticky-area').css('border-bottom', '1px solid #1e3a8a33');
    $('.mobile-sticky-area').css('z-index', '1');
    $('#mobile-sticky-wrapper').addClass('is-sticky');

  }
  else{
  $('.mobile-sticky-area').removeAttr('style');

  }
  
});


 // faq

  let questionButton = document.querySelectorAll('.question button');


questionButton.forEach((elem)=>{
  elem.addEventListener("click",()=>{
    elem.classList.toggle("show");
  })
})




document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Show Thank You popup when ?success=1 is returned
    if (urlParams.get("success") === "1") {
        document.getElementById("thankYouBox").style.display = "flex";
    }

    // Close popup
    document.getElementById("closeThankYou").onclick = function () {
        document.getElementById("thankYouBox").style.display = "none";
    };
});
