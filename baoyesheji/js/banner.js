function imgFull(imgParent) {
    /***** 图片尺寸自适应父级容器，不变形
    * 不固定尺寸图片，确保在父级撑满
    * 如：图片高度比例小，则高度撑满，宽度超出截取
    * imgParent: 需要自适应的图片的父容器，也可为一组图片的祖先容器
    * 图片只撑满父级，非祖先级别
    */

    // 获取图片，如未传入参数，则获取data-img=full的图片
    var $imgArr = imgParent ? $(imgParent).find("img") : $("[data-img=full]"),
        len = $imgArr.length,
        i = 0;

    // 图片压缩(拉伸)裁剪
    function init() {
        var width = $(this).width(),
            height = $(this).height(),
            $parent = imgParent,
            parentWidth = $parent.width(),
            parentHeight = $parent.height();
        // 判断长宽比例
        if (width/parentWidth < height/parentHeight) {
            $(this).width(parentWidth);
            $(this).height("auto");
            //alert(this.src);
            $(this).css({"position": "absolute", "left": "0", "top": -($(this).height() - parentHeight)/2});
        } else {
            $(this).width("auto");
            $(this).height(parentHeight);
            $(this).css({"position": "absolute", "top": "0", "left": -($(this).width()- parentWidth)/2});
        }
        //$(this).stop().animate({opacity: 1}, 500);    
    }
    $imgArr.each(function() {
        var img = new Image(),
            $self = $(this);
        // 初始化父级超出隐藏
        
        init.call($self[0]);
        // 图片加载完成执行压缩
        img.onload = img.onComplete = function() {
            init.call($self[0]); 
            this.onload = this.onerror = null;
            img = null;
        };
        img.onerror = function() {
            img.onload = img.onerror = null;
            img = null;
        }
        img.src = $(this).attr("src");
    });
}

//banner 切换
init2();
function init2(){
    winHeight = $(window).height();
    $(".banner").height(winHeight-83);
    imgFull($(".banner "));
}
banner(".banner",".ban-num");
$(window).on("resize", function() {
    init2();
});
 function banner(wrap,number){
    var $wrap = $(wrap),
        $number = $(number),
        $Li = $wrap.find("li"),
        $Ul = $wrap.find("Ul"),
        $prev = $wrap.find(".prev"),
        $next = $wrap.find(".next"),
        listN = $Li.length,
        sw = 0;

    for(i=0;i<listN;i++){
        $number.append('<span class="span'+i+' png"></span>');
    }
    if(listN==1){
        $number.hide();
    }

    $Li.eq(0).animate({
        opacity:1
    }).css({
        'z-index':1
    });
    $number.find("span").eq(0).addClass("on");
    $number.find("span").mouseover(function(){
        sw = $number.find("span").index(this);
        myShow(sw);
    });
    //执行效果
    function myShow(sw){
        $Li.eq(sw).stop().animate({
            opacity:1
        },450).css({
            'z-index':1
        }).siblings('li').animate({
            opacity:0
        },450).css({
            'z-index':''
        });
        $number.find("span").eq(sw).addClass("on").siblings("span").removeClass("on");
    }
    $next.click(function(){
        if(sw==listN-1){
            sw = -1;
        }
        myShow(sw+1);
        sw++;
    })
    $prev.click(function(){
        if(sw==0){
            sw = listN;
        }
         myShow(sw-1);
        sw--;
    })
    //滑入停止动画，滑出开始动画
    $wrap.hover(function(){
        if(myTime){
           clearInterval(myTime);
        }
    },function(){
        clearInterval(myTime);
        myTime = setInterval(function(){
          myShow(sw);
          sw++;
          if(sw==listN){sw=0;}
        } , 4000);
    });
    //自动开始
    var myTime = setInterval(function(){
       myShow(sw);
       sw++;
       if(sw==listN){sw=0;}
    } , 4000);

};