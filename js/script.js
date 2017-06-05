$(document).ready(function(){
    $('.slide').click(function(){
      var lien = $(this).attr('href');
     console.log($(lien).offset().top);
     $('html,body').animate({
         scrollTop:$(lien).offset().top - 50
     }, 1000);
    })
});
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
        if(width >= 70){
            clearInterval(id);
        }else{
            width++;
            element.style.width = width + '%';
            element.innerHTML = width *1 + '%';
        }
    }
 }

 function progress(){
    var element = document.getElementById('barre2');
    var width = 10;
    var id = setInterval(frame, 10);
    function frame(){
        if(width >= 70){
            clearInterval(id);
        }else{
            width++;
            element.style.width = width + '%';
            element.innerHTML = width *1 + '%';
        }
    }
 }
// jquery navbar
$win = $(window);
$win.on('scroll',function(){
  console.log($win.scrollTop());
})
$win.scroll(function(){
if($(document).scrollTop() > 650) {
   $('nav').css("background","white");
   $('.navbar').css("position","fixed");
}
if($(document).scrollTop() < 650){
  $('.navbar').css("background-color","transparent");
}
});

// slides carousel

var init = 0;
Carousel();

function Carousel(){
  var i;
  var images = document.getElementsByClassName("slides");
  for(i = 0; i < images.length; i++){
    images[i].style.display = "none";
  }
  init++;
  if(init > images.length){
    init = 1
  }
    images[init-1].style.display = "block";
    setTimeout(Carousel,5000);
  }
// popup formulaire

$(document).ready(function(){
  $('#contactMe').on('click',function(){
    $('#toutesSection').show('slow');
    $('#contactMe').hide();
  })
})
$(document).ready(function(){
  $("#close").on('click',function(){
    $("#toutesSection").hide('slow');
    $("#contactMe").show('slow');
  })
})
