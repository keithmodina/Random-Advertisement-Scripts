function thailand(param){
  $(document).ready(function(){
  $('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">');
  $('head').append('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>');
$(window).load(function(){
  $('#carousel-example-generic').remove();
var css = 
 "<style>\n\
    body, .ui-overlay-a, .ui-page-theme-a, .ui-page-theme-a .ui-panel-wrapper {\n\
        background: none !important;\n\
    }\n\
.img-responsive,\n\
.thumbnail > img,\n\
.thumbnail a > img,\n\
.carousel-inner > .item > img,\n\
.carousel-inner > .item > a > img {\n\
  display: block;\n\
  width: 100%;\n\
  height: auto;\n\
}\n\
\n\
.carousel-caption {\n\
  position: absolute;\n\
  left: 0;\n\
  right: 0;\n\
  bottom: 0;\n\
  z-index: 10;\n\
  padding: 0 0 20% 5%;\n\
  color: #fff;\n\
  text-align: left;\n\
  display: flex;\n\
}\n\
.carousel-inner{\n\
  max-width: 360px;\n\
}\n\
#carousel-example-generic{\n\
  max-width: 360px;\n\
  position: fixed;\n\
  top: 0;\n\
  bottom: 0;\n\
  left: 0;\n\
  right: 0;\n\
  margin: auto;\n\
  max-height: 360px;\n\
}\n\
.carousel-control.left,\n\
.carousel-control.right {\n\
  background-image: none;\n\
  height: 93%;\n\
  top: 7%;\n\
}\n\
.carousel-control{\n\
  opacity: 1 !important;\n\
}\n\
.left {\n\
  z-index:1;\n\
}\n\
.right {\n\
  z-index:1;\n\
}\n\
.section-white {\n\
   padding: 10px 0;\n\
}\n\
\n\
.section-white {\n\
  background-color: rgba(0, 0, 0, 0);\n\
  color: #555;\n\
  max-width: 360px;\n\
  text-align: -webkit-center;\n\
  position: absolute;\n\
}\n\
@media screen and (min-width: 768px) {\n\
  .section-white {\n\
     padding: 1.5em 0;\n\
  }\n\
}\n\
@media screen and (min-width: 992px) {\n\
  .container {\n\
    max-width: 100%;\n\
  }\n\
}\n\
@media screen and (max-width: 320px) {\n\
  .carousel-control.left, .carousel-control.right{\n\
    height: 76%;\n\
  }\n\
}\n\
@media screen and (max-width: 325px) {\n\
  img.start.img-responsive, img.call.img-responsive {\n\
    width: 145px;\n\
  }\n\
}\n\
  </style>";

  var content = '<div id="thailand-mobile-gallery" style="max-width: 360px; margin: auto; position: relative;">\n\
<section class="section-white">\n\
  <div class="container align-middle">\n\
    <div id="carousel-example-generic" class="carousel slide" data-wrap="true" data-ride="carousel" data-interval="false">\n\
      <div class="carousel-inner">\n\
        <div class="item active">\n\
          <img class="close" src="http://adcontent1.allaccess.com.ph/gmanetwork/mobilegallery/close.png" style="position: absolute;width: 25px;right: 0;z-index: 9;opacity: 1;">\n\
          <img class="img-responsive" src="http://adcontent1.allaccess.com.ph/gmanetwork/thailand_mg/PHETCHABUN.jpg" width="360px" height="360px">\n\
        </div>\n\
        <div class="item">\n\
          <img class="close" src="http://adcontent1.allaccess.com.ph/gmanetwork/mobilegallery/close.png" style="position: absolute;width: 25px;right: 0;z-index: 9;opacity: 1;">\n\
          <img class="img-responsive" src="http://adcontent1.allaccess.com.ph/gmanetwork/thailand_mg/buriram.jpg" width="360px" height="360px">\n\
        </div>\n\
        <div class="item">\n\
         <img class="close" src="http://adcontent1.allaccess.com.ph/gmanetwork/mobilegallery/close.png" style="position: absolute;width: 25px;right: 0;z-index: 9;opacity: 1;">\n\
          <img class="img-responsive" src="http://adcontent1.allaccess.com.ph/gmanetwork/thailand_mg/tom-yum-kung.jpg" height="360px">\n\
        </div>\n\
         <div class="item">\n\
          <img class="close" src="http://adcontent1.allaccess.com.ph/gmanetwork/mobilegallery/close.png" style="position: absolute;width: 25px;right: 0;z-index: 9;opacity: 1;">\n\
          <img class="img-responsive" src="http://adcontent1.allaccess.com.ph/gmanetwork/thailand_mg/intro-thialand.jpg" width="360px" height="360px">\n\
        </div>\n\
         <div class="carousel-caption">\n\
            <a id="change_link" href="float_link" target="_blank">\n\
            <img class="start img-responsive" src="http://adcontent1.allaccess.com.ph/gmanetwork/mobilegallery/explore.jpg" style="max-width: 155px; min-width: 80px; position: absolute; left: 2%; display: none;">\n\
            </a>\n\
            <a id="telno" style="text-decoration:none" href="tel:63-02-850-9821" onclick="window.open("[%contactnumber%]");">\n\
       <img class="call img-responsive" src="http://adcontent1.allaccess.com.ph/gmanetwork/mobilegallery/call.jpg" style="max-width: 155px; min-width: 80px; position: absolute; right: 2%;display: none;">\n\
            </a>\n\
          </div>\n\
      </div>\n\
      <div class="left carousel-control" href="#carousel-example-generic" data-slide="prev">\n\
        <img class="glyphicon-chevron-left img-responsive" src="http://adcontent1.allaccess.com.ph/gmanetwork/mobilegallery/prev_3.png" style="width:25px; height:25px; left: 13px;">\n\
      </div>\n\
       <div class="right carousel-control" href="#carousel-example-generic" data-slide="next">\n\
        <img class="glyphicon-chevron-right img-responsive" src="http://adcontent1.allaccess.com.ph/gmanetwork/mobilegallery/next_2.png" style="width:25px; height:25px; right: 13px;">\n\
      </div>\n\
    </div>\n\
  </div>\n\
</section>\n\
</div>';
    $('head').append(css);
    $('head').show();
    $('head').append(content);
    $('head').css({'display':'block', 'width':'100%', 'height':'100%', 'background-color':'rgba(0,0,0,0.5)', 'position':'fixed', 'top':'0', 'left':'0', 'z-index':'99999'});
    // $('#thailand-mobile-gallery iframe:eq(0), #thailand-mobile-gallery div', {'width':'100%', 'height':'100%'});
    $("#change_link").attr('href', param.link);
$("#carousel-example-generic").on("swipeleft",function(){
  $(".right").trigger("click");
  });  
   $("#carousel-example-generic").on("swiperight",function(){
    $(".left").trigger("click");
  }); 
  $(".right").click(function(){
    var hldr = $('.active img.img-responsive').attr('src');
    if(hldr == 'http://adcontent1.allaccess.com.ph/gmanetwork/thailand_mg/tom-yum-kung.jpg'){
      setTimeout(function(){
    $('.start').css("display","block");
    $('.call').css("display","block");
  },500);
  }
  });
  $(".left").click(function(){
   var hldr = $('.active img.img-responsive').attr('src');
  if(hldr == 'http://adcontent1.allaccess.com.ph/gmanetwork/thailand_mg/PHETCHABUN.jpg'){
     setTimeout(function(){
   $('.start').css("display","block");
   $('.call').css("display","block");
 },500);
 }
 });
  $(".close").click(function(){
   $('head').css('display','none');
$('head iframe').css({'width':'1', 'height':'1','display':'block'});
  });
});
});
}

  thailand(paramThailand);