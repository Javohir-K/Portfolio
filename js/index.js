$(document).ready(function(){

  $('.middle-sec').addClass('transform-y')
  $('.middle-btn').addClass('transform-y')
  $('.myimage').addClass('transform-y')
 $('.socials').addClass('transform-y')
 $('.sec2-middle').addClass('transform-y')
  // $('.section').addClass('transform-x')
 $('.navbar').addClass('transform-y')
 $('.sec3toptitle').addClass('transform-y')
 $('.sec2toptitle').addClass('transform-y')
 $('.skills').addClass('transform-y')
 $('.imageprg').addClass('transform-y')
 $('.textbc1').addClass('transform-y-op-zero')
 $('.textbc2').addClass('transform-y-op-zero')
  $('.swiper').addClass('transform-x-swiper')
 $('.sec3-text').addClass('transform-y')
 $('.lang').addClass('transform-y')
  $('.bigtext').addClass('bigtxt-translate-y')
})

$(document).mousemove(function (e) {
  $('.pointer').css({ left: e.pageX, top: e.pageY })

})

$('img').attr('draggable', false);

$('span').attr('draggable',false);

$('div').click(function (e) {
  $('.ripple').remove()

  var posX = $(this).offset().left,
    posY = $(this).offset().top,
    buttonWidth = $(this).width(),
    buttonHeight = $(this).height();

  $(this).prepend("<span class='ripple'></span>");

  if (buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight;
  }
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;
  $('.ripple').css({
      width: buttonWidth,
      height: buttonHeight,
      top: y + 'px',
      left: x + 'px'
    }).addClass('rippleEffect');
})


$('.nav-menu-little').click(function(){
  if($('.nav-menu').hasClass('nav-active')){
    $('.nav-menu').css({left:'0'})
    $('.nav-menu').removeClass('nav-active')
  }
  else{
    $('.nav-menu').css({left:'-100%'})
    $('.nav-menu').addClass('nav-active')

  }
})