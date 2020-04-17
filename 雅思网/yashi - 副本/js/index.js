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
        autoHover:true,
        controls:true
    });

    // 网站导航
    $(".li_hover").hover(function(){
        $(this).children(".ul_block").stop().slideToggle();
    })

    // nav导航
    $(".nav_cont li").click(function(){
        $(this).children("a").addClass("active").parent().siblings().children().removeClass("active");
        $(".more-menu").addClass("menu-bg").children("span").removeClass("hover");
    })
    $(".more-menu").hover(function(){
        // $(this).siblings().children().removeClass("active")
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
        // 拉到底部出现广告
        //if ($(document).scrollTop() >= ($(document).height() - $(window).height()) && width_>1200) {
        //     // alert("0")
        //     $(".ys-mf").show();
        // }
    })

    $(".sp-yskc-right ul li").hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })


    // 分享
    $(".wz-cont .wz-cont-tit span").hover(function(){
        $(this).children(".b-share").stop().slideToggle();
    })
    $(".ul-cont li p.tit-rq b").hover(function(){
        $(this).children(".b-share").stop().slideToggle();
    })
    $(".cont-tit .span-share").hover(function(){
        $(this).children(".b-share").stop().slideToggle();
    })


    // 考试地点
    $(".tit-cont").hide().first().show();
    $(".li5-tit li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".tit-cont").hide().eq($(this).index()).show();
    })
    // 评分标准
    $(".li7 .li-cont-7").hide().first().show();
    $(".li7 ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".li-cont-7").hide().eq($(this).index()).show();
    })
    

    // 手机导航
    $(".navt li").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
   
    // 雅思备考 list
    $(".ul-cont ul li").hover(function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
    $(".ul-cont").hide().first().show();
    $("ul.list-left-tit li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".ul-cont").hide().eq($(this).index()).show();
    })
    // 院校排名 list
    $("ul.yx-cont").hide().first().show();
    $(".yx-tit li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $("ul.yx-cont").hide().eq($(this).index()).show();
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
         $("h3 a span").text('查看更多');
         $(".ys-kc h3 a span").text('更多');
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
        // 限制手机端字数
        $(".ul-cont li p.tit-text span").each(function(){
            var maxwidth=45;
            if($(this).text().length>maxwidth){
                $(this).text($(this).text().substring(0,maxwidth));
                $(this).html($(this).html()+'...')
            }
        })
        // yasi备考
        $(".ul-cont ul li:even").css({"background":"#f7f8fa"})
        
    }else{
        // 注册
        $(".ys-mf").show();
        $(".ys-mf-close").hide();
        var timout=setTimeout(function(){
            $(".ys-mf").hide();
            $(".ys-mf-close").show();

        },5000)
        
        $(".ys-mf span").click(function(){
            $(".ys-mf").animate({"left":"-100%","display":"none"},200);
            $(".ys-mf-close").show();
        })

        $(".ys-mf-close").click(function(){
            $(this).hide();
            $(".ys-mf").show();
            $(".ys-mf").animate({"left":"0px","display":"block"},200);
        })

         
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
        
        // 搜索焦点
        $("#txtKeyWord").bind('input propertychange',function(){
            if($("#txtKeyWord").val()==''){
                
                $(".form-rm").show();
            }else{
                    $(".form-rm").hide();
            }
        })
    
    }



})(window.jQuery)
