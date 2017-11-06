var RoadblockAdvertisement = function(data){
$('#rb_container, #roadblock_css').remove();
        var css =
        '<style type="text/css" id="roadblock_css">#roadblock_container{\n\
            background-size: contain; \n\
            background-position-x: center; \n\
            background-position-y: top; \n\
            background-repeat: no-repeat; \n\
            width: 100%; \n\
            height: 95%; \n\
         }\n\
         #roadblock_close{\n\
            text-align: right; \n\
            display: block; \n\
            padding: 10px; \n\
            background-color: black; \n\
            color: white; \n\
         }body{\n\
            overflow: hidden; \n\
         }#rb_container{ \n\
            position: relative; \n\
            top: 0px;\n\
            width: 100%; \n\
            height: auto; \n\
            z-index: 20; \n\
            margin: auto;\n\
            background-color: white;\n\
          }#rb_main_container{ \n\
            position: fixed; \n\
            width: 100%; \n\
            height: 150%; \n\
            text-align: center; \n\
            top: 0; \n\
            left: 0; \n\
            z-index: 20; \n\
            background-color: rgba(0,0,0,0.7); \n\
          }#rb_container img{ \n\
            width: 100%; \n\
          }</style>';
        var content =
        '<div id="rb_main_container"><div id="rb_container">\n\
            <a href="javascript:" id="roadblock_close">Close</a>\n\
            <a href="' + data.link + '" target="_blank">\n\
                <img src="' + data.landscape + '"/>\n\
            </a>\n\
         </div></div>';
        $('head').append(css);
        $('body').prepend(content);
        $('#roadblock_container').css('height', $(window).height() - 40 + 'px');
        $('#rb_main_container').css('height', $(window).height() * 2 + 'px');
        $('#rb_main_container').css('overflow', 'hidden');
        if ($(window).height() > $(window).width()){
            $('#rb_container').css('width', $(window).width() + 'px');
            $('#rb_container').css('top', ($(window).height() - ($(window).width()+38))/2 + 'px');
        } else{
            $('#rb_container').css('width', $(window).height() - 40 + 'px');
            $('#rb_container').css('top', '0');
        }
        $(window).on("orientationchange", function(){
            setTimeout(function(){
            $('#roadblock_container').css('height', $(window).height() - 40 + 'px');
             if ($(window).height() > $(window).width()){
                $('#rb_container').css('width', $(window).width() + 'px');
                $('#rb_container').css('top', ($(window).height() - ($(window).width()+38))/2 + 'px');
            } else{
                $('#rb_container').css('width', $(window).height() - 40 + 'px');
                $('#rb_container').css('top', '0');
            }
            }, 50);      
        });
        $('#roadblock_close').click(function(){
        $('#rb_main_container').remove();
        $('body').css('overflow', 'scroll');
        });
        setTimeout(function(){
        $('#rb_main_container, #roadblock_css').remove();
        $('body').css('overflow', 'scroll');
        }, 10000);
}