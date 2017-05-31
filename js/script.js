$(document).ready(function(){
    $('.slide').click(function(){
      var lien = $(this).attr('href');
     console.log($(lien).offset().top);
     $('html,body').animate({
         scrollTop:$(lien).offset().top - 50
     }, 1000);
    })
})


// $(window).scroll(function(){
//     if($(this).scrollTop() > 650){
//         $('nav').addClass('opaque');
//     }
//     else {
//         $('nav').removeClass('opaque');
//     }
// })



// soleil rotation
var soleil = $('.soleil');
var $window = $(window);

$window.on('scroll',function(){
   var top = $window.scrollTop()/3;
   soleil.css('transform', 'rotate('+ top +'deg)');
});

// mes bars de progression
function move(){
    var element = document.getElementById('myBar');
    var width = 10;
    var id = setInterval(frame, 10);
    function frame(){
        if(width >= 65){
            clearInterval(id);
        }else{
            width++;
            element.style.width = width + '%';
            element.innerHTML = width *1 + '%';
        }
    }
}

// jquery
$win = $(window);
// $win.on('scroll',function(){
//   console.log($win.scrollTop());
// })
$win.scroll(function(){
if($(document).scrollTop() > 650) {
   $('.navbar').css("background-color","white");
}
if($(document).scrollTop() < 650){
  $('.navbar').css("background-color","transparent");
}
})
// parallax effect
$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  ('.biglol').css('top',  -(scrollTop * 5) + 'px');
})
