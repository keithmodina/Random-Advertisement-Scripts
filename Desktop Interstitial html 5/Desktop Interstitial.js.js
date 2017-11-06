/* Author: Edward Ballesteros, revised by Marlon Guerra  */
var FloatingAdvertisement =  function(data){
    if(typeof escKeyUp !== "undefined"){
        $(document).unbind("keyup", escKeyUp); 
    }
    $('.floating_container').remove();
    var string = '';
    string = string + '<div id="videoAdsFloating" style="display:none;" class="floating_container">';
    
    if(typeof data.withOverlay == 'undefined' ||  data.withOverlay){
        string = string + '<div style="';
        string = string + 'background-color: rgba(0,0,0,0.8);';
        string = string + '-webkit-background-size: cover;';
        string = string + '-moz-background-size: cover;';
        string = string + '-o-background-size: cover;';
        string = string + 'background-size: cover;';
        string = string + 'position:fixed; top:0px; left:0px; height: 100%; width:100%; z-index:1000;"></div>';
    }
    
    string = string + '<div style="position:fixed; top:20%; left:50%; z-index:99999999;">';
    string = string + '<div style="position: relative; left: -50%; ">';
    string = string + '<div id="videoAds_btn_close" style="cursor:pointer; background-color: black; color: white; text-align: center; padding: 10px; display: none;" class="floating_close">Close this Ad</div>';

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

    setTimeout(function(){
        $('#videoAds_btn_close').show();
    },5000);
    
    var escKeyUp = function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
           $('.floating_close').click();
           $(document).unbind("keyup", escKeyUp); 
       }
    }
    $(document).keyup(escKeyUp);
}