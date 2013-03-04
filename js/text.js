window.onload = function(){
  //这里是绑定导航栏的
  $(document).ready(function() {
    $('#nav').onePageNav({
      scrollSpeed:700,
      scrollOffset:200
    });
  });

  //这里是图片切换的
  $("#slider4").responsiveSlides({
      auto: true,
      pager: false,
      nav: true,
      speed: 500,
      timeout: 3000,
      namespace: "callbacks",
      before: function () {
        $('.events').append("<li>before event fired.</li>");
      },
      after: function () {
        $('.events').append("<li>after event fired.</li>");
      }
    });

  /*Book.init();*/
  $(".project-more").click(function(e){
    e.preventDefault();
    Book.start();
  });
  $(".book-item").click(function(){
    Book.showOneBook();
  });
  $(".book-exit-btn").click(function(){
    Book.hideOneBook();
  });
  $(".back-menu").click(function(){
    Book.disappear();
  });
  
  /*loading*/
  $("#submit").click(function(){
    $(".point-container").css({
      "display":"block"
    });
  });

  /*登陆框的*/
  /*var count=0;*/
  $(".switch").click(LoginBox.clickBox);

  /*优秀队员动画*/
  $(".person-item").mouseover(function(){
    $(this).children(".lower").stop();
    $(this).children(".lower").animate({"top":"0"},250);
  });
  $(".person-item").mouseout(function(){
    $(this).children(".lower").stop();
    $(this).children(".lower").animate({"top":"250"},250);
  });
}

var Book = {
  start : function(){
    $(".prologue").animate({"opacity":"0","filter":"alpha(opacity=0)"},750,function(){
      $(".prologue").hide();
      Book.licensing();
    });
    Book.init();
  },
  init : function(){
    var items = $(".book-item");
    $(items).css({
      "top":parseInt(560-400*Math.sin(3*12*Math.PI/180))+"px",
      "left":parseInt(460-500*Math.cos(3*12*Math.PI/180))+"px",
      "-webkit-transform":"rotate("+parseInt(-90+(3*12))+"deg)",
      "-moz-transform":"rotate("+parseInt(-90+(3*12))+"deg)",
      "-o-transform":"rotate("+parseInt(-90+(3*12))+"deg)",
      "transform":"rotate("+parseInt(-90+(3*12))+"deg)"
    });
  },
  licensing : function (){
    var i=0,index=0;
    var items = $(".book-item");
    var time = setInterval(function(){
      if(i>=items.length){
        clearInterval(time);
      }
      var item = items[i];
      var index = i+3;
      $(item).attr("id","book-item"+i);
      $("#book-item"+i).css({
        "top":parseInt(560-400*Math.sin(index*12*Math.PI/180))+"px",
        "left":parseInt(460-500*Math.cos(index*12*Math.PI/180))+"px",
        "-webkit-transform":"rotate("+parseInt(-90+(index*12))+"deg)",
        "-moz-transform":"rotate("+parseInt(-90+(index*12))+"deg)",
        "-o-transform":"rotate("+parseInt(-90+(index*12))+"deg)",
        "transform":"rotate("+parseInt(-90+(index*12))+"deg)",
        "filter": "progid:DXImageTransform.Microsoft.Matrix(M11="+ Math.cos(parseInt(-90+(index*12))) +",M12 = "+ parseFloat(-Math.sin(parseInt(-90+(index*12)))) + ",M21 =" + Math.sin(parseInt(-90+(index*12))) + ",M22 =" +Math.cos(parseInt(-90+(index*12)))+ ",sizingMethod = 'auto expand')",
        "-ms-filter": "progid:DXImageTransform.Microsoft.Matrix(M11="+ Math.cos(parseInt(-90+(index*12))) +",M12 = "+ parseFloat(-Math.sin(parseInt(-90+(index*12)))) + ",M21 =" + Math.sin(parseInt(-90+(index*12))) + ",M22 =" +Math.cos(parseInt(-90+(index*12)))+ ",sizingMethod = 'auto expand')"
      });
      i++;
    },60);
  },
  showOneBook : function(){
    $("#book").css({
      "width" : "0px",
      "display": "block"
    });
    $("#book").animate({"width":"1100px"},800);
  },
  hideOneBook : function(){
    Book.init();
      $("#book").animate({"width":"0px"},800,function(){
        $("#book").hide();
        Book.licensing();
      });
  },
  disappear : function(){
    $(".prologue").show();
    $(".prologue").animate({"opacity":"1","filter":"alpha(opacity=100)"},750);
  }
};

var LoginBox = {
  count : 0,
  clickBox : function(){
    if(LoginBox.count%2==0)
    $(".login-box").animate({"margin-top":"0px"},800);
    else
      $(".login-box").animate({"margin-top":"-152px"},800);
    LoginBox.count++;
  }
}
