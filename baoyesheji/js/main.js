window.onload=function(){
    $(window).scroll(function(){
        welcome();
        footer();
        
    })
    
    // welcome();
    xm();
    btns();
    // footer();
}
function current(i){
    $(".nav li").eq(i).addClass('current');
}
function xm(){
    var li=$(".over li");
    li.on("mouseenter",function(){
        var $_this=$(this),fath=$_this.index();
        $_this.find('i').stop().fadeIn("fast", function() {
            show(fath);
            
        })
    })
    li.on("mouseleave",function(){
        var $_this=$(this),fath=$_this.index();
        $_this.find("i").stop().fadeOut('fast', function() {
            hide(fath);
        })
    })

    var $br=$(".brown"),$href=$(".href");
    function show(o){
        $href.eq(o).animate({
            opacity:"1",
            bottom:"121px"
        },200)

        $br.eq(o).animate({
            opacity:"1",
            top:"110px"
        },500)
    }

    function hide(o){
        $href.eq(o).animate({
            opacity:"0",
            bottom:"91px"
        },1)
        $br.eq(o).animate({
            opacity:"0",
            top:"90px"
        },1)
    }
}


function welcome(){
    var $li=$(".over li"),tit=$(".tits");
    var hei=$(window).scrollTop();
    if(hei>tit.eq(0).offset().top-600){
        tit.eq(0).find("h2").animate({
            marginLeft:"0px",
            opacity:1
        },800)

        tit.eq(0).animate({
            marginTop:"47px",
            opacity:1
        },600,"linear")

        $li.delay(200).animate({
            marginLeft:"0px",
            opacity:1
        },700,"linear")
    }

    if (hei>tit.eq(1).offset().top-400) {
        tit.eq(1).find('h2').animate({
            marginLeft:"0px",
            opacity:1
        },800)
        tit.eq(1).animate({
            marginTop:"70px",
            opacity:1
        },600,"linear",function(){
            $(".lf").animate({
                marginLeft:"0px",
                opacity:1
            },600,"linear",function(){
                lf();
            })
        })
    }

    if (hei>tit.eq(2).offset().top) {
        tit.eq(2).find('h2').animate({
            marginLeft:"0px",
            opacity:1
        },800)
        jj();
    }

    function jj(){
        tit.eq(2).animate({
            paddingTop:"66px",
            opacity:1
        },600,"linear",function(){
            $(".news li").animate({
                opacity:1,
                marginLeft:"0px"
            },1500)
            $(".boxs .btns").fadeIn(400)
        })
    }




    function lf(){
        $(".say").fadeIn(800);
        var p=$(".pic-com .lf");
        p.find('span').fadeIn(600,"linear",function(){
            $(this).find('img').fadeIn()
        });
        $(".blue").delay(300).fadeIn(600,"linear",function(){
            $(this).find('b').animate({
                marginTop:"54px",
                opacity:1
            },500,"linear")
        });

        $(".brw").fadeIn()
        $(".img").delay(400).animate({
            opacity:1,
            left:"155px"
        },600,"linear")

        $(".yq").animate({
            opacity:1,
            marginTop:"56px"
        },500,"linear")
    }


}

function btns(){

    $(".abtn a").click(function(){
        var url=$(this).data("url");
        $(this).addClass('hoves').siblings().removeClass('hoves');
        $(".wrap").load(url,function(){
            j();
            $(".news li").animate({
                opacity:1,
                marginLeft:"0px"
            },1500)
            $(".boxs .btns").fadeIn(400)
        })
    })

    $(".wrap").load($(".abtn .hoves").data("url"));

    $(".btns a").click(function(){
        var index=$(this).index();
        $(this).addClass('hoves').siblings().removeClass('hoves');
        $(".boxs ul").animate({
            marginLeft:index*-1066+"px"
        },600,function(){
            j();
        })
    })

    

    function j(){
        var btns=$(".btns");
        var len=btns.children().length;
        btns.css({
            width:len*34+"px"
        })
    }

    j();
}

function footer(){
    var hei=$(window).scrollTop();
    if (hei>$(".foot").offset().top-600) {
        lf($(".tits h2"),0);
        lf($(".footer img"),200);
        lf($(".foot .tel"),400);
        lf($(".foot .email"),600);

        fd($(".foot .fx"),800);
        fd($(".foot .last"),800);

    }

    function lf(e,lt){
        e.delay(lt).animate({
            marginLeft:0,
            opacity:1
        },800,"linear")
    }

    function fd(e,lt){
        e.delay(lt).fadeIn(600);
    }
}

// 产品
function width(){
    var width=document.documentElement.clientWidth ||document.body.clientWidth,$li=$(".fath li");
    var wid=width/4-width*0.003125;
    var mag=width*0.003125;
    $li.css({
        width:wid+"px",
        height:wid/1.52+"px",
        marginRight:mag+"px",
        marginBottom:mag/0.75+"px",
        marginTop:0,
        opacity:1
    })

    var h=$(".go").height();
    $li.find(".go span").css({
        lineHeight:h+"px"
    })

    var hei=$(".outbox").height();
    if(width<=1100){
        $li.find(".go span").css("fontSize","12px")
    }else{
        $li.find('.go span').css("fontSize","16px")
    }
    $("body").css({
        overflowX:"hidden",
        minWidth:"auto"
    })
    var fath=$(".list li").height(),$over=$(".oversay")
}



