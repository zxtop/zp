/*
js DOCUMENT
code by zhangxing 2017.11.18
*/

(function($){
    var width_=$(window).width();
    // banner
    $('.slider').bxSlider({
        mode:"fade",
        captions: true,
        auto: true,
        autoControls: false,
        autoHover:true
    });

    // 网站导航
    $(".li_hover").hover(function(){
        $(this).children(".ul_block").stop().slideToggle();
    })

    // nav导航
    $(".nav_cont li").hover(function(){
        $(this).children("a").addClass("active").parent().siblings().children().removeClass("active");
        $(".more-menu").addClass("menu-bg").children("span").removeClass("hover");
    },function(){
        $(this).children("a").removeClass("active")
    }).click(function(){
        $(this).children("a").addClass("active").parent().siblings().children().removeClass("active");
        $(".more-menu").addClass("menu-bg").children("span").removeClass("hover");
    })
    $(".more-menu").hover(function(){
        $(this).siblings().children().removeClass("active")
        // $(this).css({"background":"#fff"}).children("span").addClass("hover");
        $(this).children(".menu-list").stop().slideToggle();
    })

    // 返回头部
    var goto_html='<div id="gotoTop"><span></span></div>';
    $("body").append(goto_html);
    var min_height=400;
    $("#gotoTop").click(function(){
        $("html,body").animate({scrollTop:0},700)
    }).hover(function(){
        $(this).addClass("hover")
    },function(){
        $(this).removeClass("hover")
    })
    $(window).scroll(function(){
        var s=$(window).scrollTop();
        if(s>min_height){
            // alert("a")
           $("#gotoTop").fadeIn(100)
        }else{
            $("#gotoTop").fadeOut(200)
        }
        if ($(document).scrollTop() >= ($(document).height() - $(window).height()) && width_>1200) {
            // alert("0")
            $(".ys-mf").show();
        }
    })
    // 注册
    
    $(".ys-mf-close").hide();
    
    $(".ys-mf span").click(function(){
        $(".ys-mf").animate({"left":"-100%","display":"none"},200);
        $(".ys-mf-close").show();
    })
    $(".ys-mf-close").click(function(){
        $(this).hide();
        $(".ys-mf").animate({"left":"0px","display":"block"},200);
    })


    // 手机导航
    $(".navt li").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
   
    if(width_<1100){
        // 搜索 
        $(".search-ico").click(function(){
            $(this).parent(".col-xs-8").removeClass("col-xs-8 col-sm-9").addClass("col-xs-12 col-sm-12");
            $(".ys-search").show();
            $(".nav .col-xs-4,.form-rm,.search-ico,.nav_cont").hide();
            $("#txtKeyWord").focus();
        })
        $(".search-close").click(function(event){
            $(".search-ico").parent(".col-xs-12").removeClass("col-xs-8 col-sm-9").addClass("col-xs-8 col-sm-9");
            $(".nav_cont,.ys-search").hide();
            $(".search-ico,.nav .col-xs-4").show();
         })
        //  msjd 名师解读
         $(".ms-right ul li").hide().slice(0,5).show();
         $("h3 a span").text('查看更多>');
         $(".ysks li").hide().slice(0,5).show();
         
        // yspx 雅思培训
        $('.slider-yspx').bxSlider({
            slideWidth: width_,
            mode:"fade",
            minSlides: 1,
            maxSlides: 2,
            controls: false,
            slideMargin: 0
  
        });
    }else{

         
        $(".search-ico").click(function(){
            $(".search-ico,.nav_cont").hide();
            $(".ys-search").show();
            $("#txtKeyWord").focus();
        })
        $(".search-close").click(function(event){
            $(".search-ico,.nav_cont").show();
            $(".ys-search").hide();
            event.stopPropagation();
        })
        $(document).click(function(e){
            var e = e || window.event; //浏览器兼容性   
            var elem = e.target || e.srcElement;  
            while (elem) { //循环判断至跟节点，防止点击的是div子元素   
                if (elem.id == 'test'||elem.id=='ys-search') {  
                    return;  
                }  
                elem = elem.parentNode;  
            }
            $(".search-ico,.nav_cont").show();
            $(".ys-search").hide();
        })
        // jpkc 精品课程
        
        $(".kc-table").hide().first().show();
        $(".kc-cont li").hover(function(){
            // alert($(this).index())
            $(this).addClass("active").siblings("li").removeClass("active");
            $(".kc-table").hide().eq($(this).index()).show();
        })
    
    }









})(window.jQuery)
