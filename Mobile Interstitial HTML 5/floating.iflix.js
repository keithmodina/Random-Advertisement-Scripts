var FloatingAdvertisement =  function(data){

    var string = '';
    string = string + '<div id="videoAdsFloating" style="display:none;">';
    string = string + '<div style="';
    string = string + 'background-color: rgba(0,0,0,0.8);';
    string = string + '-webkit-background-size: cover;';
    string = string + '-moz-background-size: cover;';
    string = string + '-o-background-size: cover;';
    string = string + 'background-size: cover;';
    string = string + 'position:fixed; top:0px; left:0px; height: 100%; width:100%; z-index:1000;"></div>';
    string = string + '<div style="position:fixed; top:'+data.top+'%; left:50%; z-index:99999999;">';
    string = string + '<div style="position: relative; left: -50%; ">';
    string = string + '<div id="videoAds_btn_close" style="cursor:pointer; background-color: black; color: white; text-align: center; padding: 10px;">Close this Ad</div>';

    string = string + '<iframe id="floating_iframe" frameBorder="0" style="width: '+ data.width  +'; height: '+ data.height  +';">Browser not compatible.</iframe>';

    string = string + '</div>';
    string = string + '</div>';
    string = string + '</div>';

    string = string + '';
    
    $('body').append(string);
    $.ajax({
        url: 'http://adcontent1.allaccess.com.ph/gmanetwork/'+data.iframe+'/'+data.filename,
        success: function(d){
            console.log(data.link);
            iframe = document.getElementById('floating_iframe');
            d = d.replace(/float_link/g, data.link);
            iframe.contentWindow.contents = d;
            iframe.src = 'javascript:window["contents"]';
        }
      });

    $("#videoAds_btn_close").click(function() {
        FloatingAds.fadeOut(100);
        //playPause();
        setTimeout(function(){
            FloatingAds.remove();
        },1000);
    });

    var FloatingAds = $("#videoAdsFloating");

    $(document).ready(function(e) {

        FloatingAds.fadeIn(100);
    })


}