function delay(fn, scope) {
  scope =scope || window;
  window.requestAnimationFrame(function(){
   fn.call(scope);
  })
}

// init
$(function(){

  initSmoothScroll();

  $('.jcarousel').jcarousel({
    wrap : 'circular'
  });

  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });

  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    })
    .jcarouselPagination({
    item: function(page) {
      return '<a href="#' + page + '">' + page + '</a>';
    }
  });

  $('section .order').click(function(){
    callbackPopup();
  });
});

function openPopup(el, cls) {
  var popup = { el : $('<div class="popup"><div class="background"></div><div class="scroll"><div class="playout"></div></div>') }, 
    close = $('<div class="cross"></div>');
    
  popup.layout = popup.el.find('.playout'),
  popup.background = popup.el.find('.background')
  popup.scroll = popup.el.find('.scroll')
  
  if (cls) popup.el.addClass(cls)
  
  popup.layout.append(close);
  popup.layout.append(el);
  $('body').append(popup.el);
  
  popup.syncSize = function() {
    var 
      ph = popup.layout.height(),
      pw = popup.layout.width(),
      wh = $(window).height()
    
    if (wh > ph+100) {
      popup.layout.css({
        top : '50%',
        marginLeft : popup.layout.outerWidth()*-0.5,
        marginTop : popup.layout.outerHeight()*-0.5
      })
      popup.scroll.removeClass('active');
    } else {
      popup.layout.css({
        top : 10,
        marginLeft : popup.layout.width()*-0.5,
        marginTop : 50,
        marginBottom : 50,
      }) 
      popup.scroll.addClass('active');
    }
  }

  popup.syncSize();
  popup.el.find('img').load(function(){
    popup.syncSize();
  })
  $(window).bind('resize.popup', function(){
    popup.syncSize();
  })
  popup.close = function() {
    popup.el.remove();
    if (popup.onClose) popup.onClose();
    $(window).unbind('.popup');
  }
  
  close.click(function(){
    popup.close();
  })
  popup.scroll.click(function(e){
    var t = $(e.target);
    if (t.hasClass('playout') || t.parents('.playout').length) return;
    popup.close();
  });
  
  return popup;
}

function Load(el, action, cb) {
  $.ajax({
    url : '/popups?name='+action,
    cache : false,
    success : function(data) {
      el.html(data);
      if (cb) cb()
    }
  })
}

function callbackPopup() {
  var el = $('<div></div>');
  var popup = openPopup(el, 'callback');
  el.load('/popups/?name=callback', function(){
    popup.syncSize();

  $('#phonenumber').mask("(999) 999-99-99")

  $('input').groupinputs()

  var opts = {
  lines: 9, // The number of lines to draw
  length: 5, // The length of each line
  width: 3, // The line thickness
  radius: 8, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 30, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // #rgb or #rrggbb or array of colors
  speed: 2.2, // Rounds per second
  trail: 14, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: true, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: '50%', // Top position relative to parent
  left: '50%' // Left position relative to parent
  };
  var target = document.getElementById('spin-bg');
  var spinner = new Spinner(opts).spin(target);
  })
}


function gmapsready(){
  if (!$('#map-catering').length) return;
  var map = new google.maps.Map($('#map-catering')[0], {
    center: new google.maps.LatLng(55.780614, 37.583214),
    zoom: 15,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  new google.maps.Marker({
    position: new google.maps.LatLng(55.780614, 37.583214),
    map: map,
    icon: new google.maps.MarkerImage('http://'+document.location.hostname+'/public/images/global/marker'+(window.retina?'@2x':'')+'.png', new google.maps.Size(51, 68), new google.maps.Point(0,0), new google.maps.Point(19, 50), new google.maps.Size(51,68))
  });
}

var os = (/(win|linux|sunos|solaris|mac|iphone|ipad)/.exec(navigator.platform.toLowerCase()) || [u])[0].replace('sunos', 'solaris')
, win = $(window)
, scrollcontainer = $(($.browser.msie || $.browser.mozilla || $.browser.opera) ? 'html' : 'body');


// smoth mousescroll if not mac or iphone or ipad
function initSmoothScroll() {
  if ($.inArray(os, ['mac', 'iphone', 'iphone']) == -1)
  $(function () {
      var top = win.scrollTop(),
          step = 120,
          viewport = win.height(),
          wheel = false;
      window.scrolldisabled = false;
      
     scrollcontainer.mousewheel(function(event, delta) {
          wheel = true;
          if (window.scrolldisabled) return;
          if (delta < 0) {
              top = (top+viewport) >= $(document).height() ? top : top+=step;
              scrollcontainer.stop().animate({scrollTop: top}, 500, function () {
                  wheel = false;
              });
          } else {
              top = top <= 0 ? 0 : top-=step;
              scrollcontainer.stop().animate({scrollTop: top}, 500, function () {
                  wheel = false;
              });
          }
          return false;
      });

      $(window).on('resize', function (e) {
          viewport = $(this).height();
      });
      
      var bckp, tbckp;
      $('.scrollable')
        .live('mouseenter', function(){
          console.log('scrollzone enter');
          disabled = true;
          tbckp = top;
          top = $(this).scrollTop();
          bckp = scrollcontainer;
          scrollcontainer = $(this);
        })
        .live('mouseleave', function(){
          disabled = false;
          console.log('scrollzone leave');
          top = tbckp;
          scrollcontainer = bckp;
        })

      $(window).on('scroll', function (e) {
          if (!wheel) {
              top = $(this).scrollTop();
          }
      });
  });
  
  $('.scrolldisabled')
    .on('mouseenter', function(){ window.scrolldisabled = true; })
    .on('mouseleave', function(){ window.scrolldisabled = false; })
}