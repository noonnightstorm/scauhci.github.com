window.onload = function(){
  //这里是绑定导航栏的
  $(document).ready(function() {
    $('#nav').onePageNav({
      scrollSpeed:700,
      scrollOffset:160
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
  $(".book-item").click(Book.showOneBook);
  $(".book-exit-btn").click(Book.hideOneBook);
  $(".back-menu").click(Book.disappear);
  
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
    $(this).children(".lower").animate({"top":"215"},250);
  });

  /*加载优秀成员的图片*/
  initImg();

  /*加载优秀项目*/
  InitExcellentProject.init();
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
    if ( $.browser.msie && $.browser.version<9.0 ) {
      $(items).css({
        "top":parseInt(540-400*Math.sin(3*12*Math.PI/180))+"px",
        "left":parseInt(400-500*Math.cos(3*12*Math.PI/180))+"px",
        "filter": "progid:DXImageTransform.Microsoft.Matrix(M11="+ Math.cos(Math.PI/180*(-90+(3*12)))+",M12 = "+ parseFloat(-Math.sin(Math.PI/180*(-90+(3*12)))) + ",M21 =" + Math.sin(Math.PI/180*(-90+(3*12))) + ",M22 =" +Math.cos(Math.PI/180*(-90+(3*12)))+ ",sizingMethod = 'auto expand')",
        "-ms-filter": "progid:DXImageTransform.Microsoft.Matrix(M11="+ Math.cos(Math.PI/180*(-90+(3*12))) +",M12 = "+ parseFloat(-Math.sin(Math.PI/180*(-90+(3*12)))) + ",M21 =" + Math.sin(Math.PI/180*(-90+(3*12))) + ",M22 =" +Math.cos(Math.PI/180*(-90+(3*12)))+ ",sizingMethod = 'auto expand')"
      });
    }
    else {
      $(items).css({
        "top":parseInt(560-400*Math.sin(3*12*Math.PI/180))+"px",
        "left":parseInt(460-500*Math.cos(3*12*Math.PI/180))+"px",
        "-webkit-transform":"rotate("+parseInt(-90+(3*12))+"deg)",
        "-moz-transform":"rotate("+parseInt(-90+(3*12))+"deg)",
        "-o-transform":"rotate("+parseInt(-90+(3*12))+"deg)",
        "transform":"rotate("+parseInt(-90+(3*12))+"deg)",
        "-ms-transform":"rotate("+parseInt(-90+(3*12))+"deg)"
      });
    }
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
      //$(item).attr("id","book-item"+i);
      if ( $.browser.msie && $.browser.version<9.0 ) {
        $("#book-item"+i).css({
          "top":parseInt(540-400*Math.sin(index*12*Math.PI/180))+"px",
          "left":parseInt(400-500*Math.cos(index*12*Math.PI/180))+"px",
          "filter": "progid:DXImageTransform.Microsoft.Matrix(M11="+ Math.cos(Math.PI/180*(-90+(index*12)))+",M12 = "+ parseFloat(-Math.sin(Math.PI/180*(-90+(index*12)))) + ",M21 =" + Math.sin(Math.PI/180*(-90+(index*12))) + ",M22 =" +Math.cos(Math.PI/180*(-90+(index*12)))+ ",sizingMethod = 'auto expand')",
          "-ms-filter": "progid:DXImageTransform.Microsoft.Matrix(M11="+ Math.cos(Math.PI/180*(-90+(index*12))) +",M12 = "+ parseFloat(-Math.sin(Math.PI/180*(-90+(index*12)))) + ",M21 =" + Math.sin(Math.PI/180*(-90+(index*12))) + ",M22 =" +Math.cos(Math.PI/180*(-90+(index*12)))+ ",sizingMethod = 'auto expand')"
        });
      }
      else {
        $("#book-item"+i).css({
        "top":parseInt(560-400*Math.sin(index*12*Math.PI/180))+"px",
        "left":parseInt(460-500*Math.cos(index*12*Math.PI/180))+"px",
        "-webkit-transform":"rotate("+parseInt(-90+(index*12))+"deg)",
        "-moz-transform":"rotate("+parseInt(-90+(index*12))+"deg)",
        "-o-transform":"rotate("+parseInt(-90+(index*12))+"deg)",
        "transform":"rotate("+parseInt(-90+(index*12))+"deg)",
        "-ms-transform":"rotate("+parseInt(-90+(index*12))+"deg)"
        });
      }
      i++;
    },60);
  },
  showOneBook : function(){
    var book = $("#book");
    /*init data*/
    $(book).find(".book-title").text("Test");
    $(book).find(".book-feature").text("test");
    $(book).find(".book-date").text("test");
    $(book).find(".book-img").attr("src");
    $(book).find(".book-introduction-content").text("test");
    $(book).find(".book-impression-content").text("test");
    $(book).find(".book-participate-item").text("xxx xxx");

    /*begin animate*/
    $(book).css({
      "width" : "0px",
      "display": "block"
    });
    $(book).animate({"width":"1100px"},800);
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

var InitExcellentProject = {
  objs : [],
  init : function(){
    InitExcellentProject.resolveData(0);
  },
  sendRequest : function(){
    $.ajax({
      url : "",
      type : "get",
      dataType : "json",
      data : {},
      success : function(data){
        InitExcellentProject.objs = data;
        InitExcellentProject.resolveData(0);
      },
      error : function(err){
        alert("优秀项目加载失败");
      }
    });
  },
  resolveData : function(num,obj){
    var node = $("#book-item"+num);
    /*obj.url*/
    $(node).find(".book-item-aside").text("test");
    /*obj.author*/
    $(node).find(".book-item-author").text("test");
    /*obj.name*/
    $(node).find(".book-item-title").text("test");

    var character = $(node).find(".book-item-content");
    /*obj.character1*/
    $(character[0]).text("test");
    /*obj.character2*/
    $(character[1]).text("test");
    /*obj.character3*/
    $(character[2]).text("test");
    //objs.name
    for(var i=0,len=5;i<len;i++){
      var p_node = $("<p></p>");
      $(p_node).text("helloworld").appendTo($(".prologue-content-project"));
    }
  }
};


var LoginBox = {
  count : 0,
  clickBox : function(){
    if(LoginBox.count%2==0)
    $(".login-box").animate({"margin-top":"0px"},800);
    else
      $(".login-box").animate({"margin-top":"-130px"},800);
    LoginBox.count++;
  }
}

function initImg(){
  for(var i=1;i<=3;i++){
    $("#slider-0"+i).attr("src","image/slider_0"+ i +".png")
  }
  for(var i=1;i<=6;i++){
    $("#person"+i+"-img").attr("src","image/person"+i+".png");
  }
  $("#book-img").attr("src","image/book_leftpic.jpg");
  $("#point-container").attr("src","image/301.gif");
}
