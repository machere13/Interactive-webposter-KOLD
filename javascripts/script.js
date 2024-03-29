$(document).ready(function() {
  $(function(){

    for(let i = 0; i < 3; i++){
      $('.star').clone().appendTo('#starField')
    }

    $('.star').each(function(){
      let star = $(this);
      for(let i = 0; i < star.length; i++){
        star.appendTo('#starField').css({left: Math.random()*120 + 'vw', top: Math.random()*60 + 'vh'});
      }
      
    })
  })

  $('.actionTwoStar').hover(function(){
    $(this).css({
      opacity: 1,
    })
    $('#starHover')[0].play();    
  })

  $('body').mousemove(function() {
    $(document).mousemove(function(e) {
      $('#starField').css({
        left: - (e.pageX / 5),
        top: - (e.pageY / 5)
      })
    })
  })

  $('#buttonToSecondScreen').click(function(){
    $('#toSecondScreen')[0].play();
    $('#iceberg').css({
      transform: 'scale(' + 3 + ') rotate(45deg)',
    });
    $('#secondScreen').fadeIn(1000);
    $('#firstScreen').fadeOut(1000);
    $('#secondScreen').css({display: 'block'})
  })

  $('#buttonToFirstScreen').click(function(){
      $('#moveScreen')[0].play();
      $('#firstScreen').fadeIn(1000);
      $('#secondScreen').fadeOut(1000);
    $('#iceberg').css({
      transform: 'scale(' + 1 + ') rotate(0deg)',
    });
  })

  $('#buttonToThirdScreenNext').click(function(){
    $('#moveScreen')[0].play();
    $('#thirdScreen').fadeIn(1000);
    $('#secondScreen').fadeOut(1000);
  })

  $('#buttonToThirdScreenPrev').click(function(){
    $('#moveScreen')[0].play();
    $('#thirdScreen').fadeIn(1000);
    $('#fourthScreen').fadeOut(1000);
  })
  
  $('#buttonToSecondScreenPrev').click(function(){
    $('#moveScreen')[0].play();
    $('#secondScreen').fadeIn(1000);
    $('#thirdScreen').fadeOut(1000);
  })

  $('#buttonToFourthScreenNext').click(function(){
    $('#moveScreen')[0].play();
    $('#fourthScreen').fadeIn(1000);
    $('#thirdScreen').fadeOut(1000);
  })

  let blockActionThree = $('.blockActionThreeBlock');
  for(let i = 0; i < 24; i++){
    blockActionThree.clone().appendTo('#blockActionThree')
  }

  $('.blockActionThreeBlock').click(function(){
    $(this).toggleClass('blockActionThreeBlockFilled')
    $('#blockPlace')[0].play();
  })

  $(function(){
    $('.actionFourItem').draggable()
	});

  $('#buttonToFourthScreenPrev').click(function(){
    $('#moveScreen')[0].play();
    $('#fourthScreen').fadeIn(1000);
    $('#sixthScreen').fadeOut(1000);
  })
  
  $('#buttonToSixthScreenNext').click(function(){
    $('#moveScreen')[0].play();
    $('#sixthScreen').fadeIn(1000);
    $('#fourthScreen').fadeOut(1000);
  })

  $('#returnButton').click(function(){
    $('#moveScreen')[0].play();
    $('#firstScreen').fadeIn(1000);
    $('#sixthScreen').fadeOut(1000);
    $('#iceberg').css({
      transform: 'scale(' + 1 + ') rotate(0deg)',
    });
  })

  $(function(){

    for(let i = 0; i < 3; i++){
      $('.starSixScreen').clone().appendTo('#starFieldSixScreen')
    }

    $('.starSixScreen').each(function(){
      let starSixScreen = $(this);
      for(let i = 0; i < starSixScreen.length; i++){
        starSixScreen.appendTo('#starFieldSixScreen').css({left: Math.random()*120 + 'vw', top: Math.random()*60 + 'vh'});
      }
      
    })
  })

  $('body').mousemove(function() {
    $(document).mousemove(function(e) {
      $('#starFieldSixScreen').css({
        left: - (e.pageX / 7),
        top: - (e.pageY / 7)
      })
    })
  })

  $('.sixScreenIgloo').hover(function(){
    $(this).css({
      'animation-play-state': 'running'
    }).mouseleave(function(){
      $(this).css({
        'animation-play-state': 'paused'
      })
    })
  })

});