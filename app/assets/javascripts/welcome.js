$(function(){

  initAnimation();

  setTimeout(function(){
      $('header').addClass('show')
    },1300);
})


function initAnimation() {
  var timeline = new TimelineMax().stop();


  timeline.add(TweenLite.fromTo($('#welcomepage .sky'), 600, p({ x : 100, ease : Power4.easeOut}), p({x : -1500, ease : Power4.easeOut})), 0)
  timeline.add(TweenLite.fromTo($('#welcomepage .sky.high'), 600, p({ x : 200, ease : Power4.easeOut}), p({x : -1500, ease : Power4.easeOut})), 100)
  timeline.add(TweenLite.from($('#welcomepage .car-container'), 6, p({ x : -2000, ease : Power4.easeOut,})), 0)
  timeline.add(TweenLite.from($('#welcomepage .car'), 6, p({ x : -2000, ease : Power4.easeOut,})), 0)
  timeline.add(TweenLite.from($('#welcomepage .car-wheels'), 6, p({ x : -2000, ease : Power4.easeOut,})), 0)
  timeline.add(TweenLite.from($('#welcomepage .back-wheels'), 6, p({ x : -2000, ease : Power4.easeOut,})), 0)
  timeline.add(TweenLite.from($('#welcomepage .car-wheels-rolling'), 6, p({ x : -2000, rotation : -1600, ease : Power4.easeOut,})), 0)
  timeline.add(TweenLite.from($('#welcomepage .truck'), 6, p({ x : -2000, ease : Power4.easeOut,})), 0)
  timeline.add(TweenLite.from($('#welcomepage .truck-wheels'), 6, p({ x : -2000, ease : Power4.easeOut,})), 0)
  timeline.add(TweenLite.from($('#welcomepage .truck-wheels-rolling'), 6, p({ x : -2000, rotation : -1600, ease : Power4.easeOut,})), 0)
  timeline.add(TweenLite.from($('#welcomepage .mangal-top'), 6, p({ x : -2000, ease : Power4.easeOut,})), 0)
  timeline.add(TweenLite.from($('#welcomepage .back-foot'), 6, p({ x : -2000, ease : Power4.easeOut,})), 0)
  timeline.add(TweenLite.from($('#welcomepage .foot-container'), 6, p({ x : -2000, ease : Power4.easeOut,})), 0)
  timeline.add(TweenLite.from($('#welcomepage .city'), 6, p({ x : 30, ease : Power2.easeOut,})), 0.1)
  timeline.add(TweenLite.to($('#welcomepage .back-foot'), 0.5, p({ y : 19, ease : Power2.easeOut,})), 5.5)
  timeline.add(TweenLite.to($('#welcomepage .front-foot'), 0.5, p({ y : 36, ease : Power2.easeOut,})), 5.5)
  timeline.add(TweenLite.to($('#welcomepage .mangal-top'), 0.5, p({ y : -5, ease : Power2.easeInOut,})), 6.5)
  timeline.add(TweenLite.to($('#welcomepage .car-container'), 3, p({ x : 2000, ease : Power2.easeIn,})), 7)
  timeline.add(TweenLite.to($('#welcomepage .back-wheels'), 3, p({ x : 2000, ease : Power2.easeIn,})), 7)
  timeline.add(TweenLite.to($('#welcomepage .car'), 3, p({ x : 2000, ease : Power2.easeIn,})), 7)
  timeline.add(TweenLite.to($('#welcomepage .car-wheels'), 3, p({ x : 2000, ease : Power2.easeIn,})), 7)
  timeline.add(TweenLite.to($('#welcomepage .car-wheels-rolling'), 3, p({ x : 2000, rotation : 2600, ease : Power2.easeIn,})), 7)
  timeline.add(TweenLite.to($('#welcomepage .truck'), 3, p({ x : 2000, ease : Power2.easeIn,})), 7)
  timeline.add(TweenLite.to($('#welcomepage .truck-wheels'), 3, p({ x : 2000, ease : Power2.easeIn,})), 7)
  timeline.add(TweenLite.to($('#welcomepage .truck-wheels-rolling'), 3, p({ x : 2000, rotation : 2600, ease : Power2.easeIn,})), 7)
  timeline.add(TweenLite.from($('#welcomepage .mangal-shadow'), .5, p({ opacity : 0, ease : Power4.easeIn, })), 6.5)
  timeline.add(TweenLite.from($('#welcomepage .flame-shadow'), .5, p({ opacity : 0, ease : Power4.easeOut,})), 8)
  timeline.add(TweenLite.from($('#welcomepage .text'), 1, p({ opacity : 0, y : 20, ease : Power4.easeOut,})), 6.5)
  timeline.add(TweenMax.to($('#welcomepage .car'), 3.3, p({ rotation : .7, transformOrigin : "center center", ease : Power4.easeInOut, repeat: 1, yoyo: true})), .3)
  timeline.add(TweenMax.to($('#welcomepage .car'), 3, p({ rotation : -1, transformOrigin : "center center", ease : Power4.easeInOut, repeat: 1, yoyo: true})), 6.5)


  // timeline.add(TweenLite.to($('#content .slide:last'), 2, p({ rotationX : 180, transformOrigin:"center top" })), 0)
  // timeline.add(TweenLite.fromTo($('#content .slide.backface'), 2, p({ rotationX : -180 }), p({ rotationX : 0, transformOrigin:"center bottom" })), 0)


  setTimeout(function(){
    timeline.play();
  }, 500)
  var lights = $('.flame-shadow');
  
  setTimeout(function(){
    blink($('.flame-shadow'), 0, 100);
  }, 8000)
}


function random(min, max) {
  var rand = min - 0.5 + Math.random()*(max-min+1)
  return  Math.round(rand);

}

function blink(el, min, max) {
  if (!el.length) return
  var rnd = random(400, 400);
  var op = random(min, max);
  
  var v = '';
    v+= '-webkit-transition : opacity '+rnd/1000+'s ease-in-out;';
    v+= '-moz-transition : opacity '+rnd/1000+'s ease-in-out;';
    v+= '-o-transition : opacity '+rnd/1000+'s ease-in-out;';
    v+= 'transition : opacity '+rnd/1000+'s ease-in-out;';
    v+= 'opacity : '+op/100;
  el.attr('style',v);
  setTimeout(function(){
    blink(el, min, max)
  }, rnd)
}

function p(params) {
  if (params.x !== undefined && typeof params.x == "string" && params.x.indexOf('%')!= -1) {
    params.left = params.x;
    delete params.x;
  }

  if (params.y !== undefined && typeof params.y == "string" && params.y.indexOf('%')!= -1) {
    params.top = params.y;
    delete params.y;
  }
  
  if (params.opacity !== undefined) {
    params.autoAlpha = params.opacity;
    delete params.opacity;
  }

  if (!params.ease) params.ease = Power3.easeInOut
  params.force3D = true
  return params;
}