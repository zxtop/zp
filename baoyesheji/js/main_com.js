

function comp(){
    var hei=$(window).scrollTop();
    var $tit=$(".tits");
    if (hei>$tit.eq(0).offset().top-600) {
        $tit.eq(0).animate({
            opacity:1,
            marginTop:"104px"
        },800,"linear")
        $(".comp .say").delay(800).fadeIn("slow",function(){
            $(".comp .blue").fadeIn("slow")
        })
    }

    if (hei>$tit.eq(1).offset().top-400) {
        $tit.eq(1).animate({
            opacity:1,
            marginTop:"102px"
        },800,"linear")
    }


    if (hei>$tit.eq(2).offset().top-400) {
    	$tit.eq(2).animate({
    		opacity:1,
    		marginTop:"102px"
    	},800,"linear")

    	$(".honor .clear li").delay(800).animate({
    		opacity:1,
    		marginLeft:"0px"
    	},1200,"linear")
    }

    if (hei>$tit.eq(3).offset().top-400) {
    	$tit.eq(3).animate({
    		opacity:1,
    		marginTop:"116px"
    	},800,"linear")

    	$(".pep .clear li").delay(800).animate({
    		opacity:1,
    		marginLeft:"0px"
    	},1200,"linear")
    }
}

function num(){
	var $li=$(".year li");
	var $dd=$(".development .say");
	$li.on("click",function(){
		var say=$(this).find("a").data("say");
		$(this).addClass("hoves").siblings().removeClass("hoves");
		$(".circs").html($(this).find("a").text());

		$dd.stop().animate({
			marginLeft:"-1000px"
		},400,function(){
			$(this).css({
				marginLeft:"1200px"
			})
			$dd.html(say)
		})

		$dd.animate({
			marginLeft:"156px"
		},400)

	})

		var index=$(".hoves").index();
		var last=$(".year li:last").index();
		var newpos=index==last?0:index+1;
		var len=$li.length;
		
	$(".rt").click(function(){
		if(newpos<=15){
			var left=-newpos*110;
			$li.eq(newpos).addClass('hoves').siblings().removeClass('hoves');
			$(".year ul").stop().animate({marginLeft:left+"px"},600)
			$(".circs").html($li.eq(newpos).find("a").text());
			load();
			newpos++;
			// console.log(newpos);
		}
		else{
			newpos=0;
			var left=0
			$li.eq(newpos).addClass('hoves').siblings().removeClass('hoves');
			$(".year ul").stop().animate({marginLeft:left+"px"},600)
	    	$(".circs").html($li.eq(newpos).find("a").text());
	    	load();
		}

	})
		var n=7
		$(".lf").click(function(){
		
			if (newpos>=0&&newpos<=16) {

				var left=-n*110;
				$li.eq(len-newpos).addClass("hoves").siblings().removeClass("hoves");
				$(".year ul").stop().animate({marginLeft:left+"px"},600)
				$(".circs").html($li.eq(len-newpos).find("a").text());
				newpos++;//14
				n--;
				console.log(newpos);
			}else{

			newpos=0;
			var left=0
			$li.eq(newpos).addClass('hoves').siblings().removeClass('hoves');
			$(".year ul").stop().animate({marginLeft:left+"px"},600)
	    	$(".circs").html($li.eq(newpos).find("a").text());
	    	load();
			}	
		})


	function load(){
		var say=$li.eq(newpos).find("a").data("say");
		$dd.stop().animate({
			marginLeft:"-1000px"
		},400,function(){
			$(this).css({
				marginLeft:"1200px"
			})
			$dd.html(say)
		})

		$dd.animate({
			marginLeft:"156px"
		},400)

	}
}

// 资质荣誉
function zhizi(){

	var $lf=$(".h-lf"),$rt=$(".h-rt");
	$(".honor .clear li").on("click",function(){
		var img=$(this).find("img").attr("src");
		$(".jzz img").attr("src",img);
		$(".black").fadeIn("fast",function(){
			$(".jzz").fadeIn("fast")
		})
	})

	$(".jzz").on("click",function(){
		$(this).fadeOut("fast",function(){
			$(".black").fadeOut("fast")
		})
	})

	$rt.on("click",function(){
		var $_this=$(this);
		var len=$_this.parent().find("i").length-1,$i=$_this.parent().find("i");
		var box=$_this.parents(".content").find("ul");
		var index=$_this.parent().find(".on").index();
		var newpos=index==len?0:index+1;
		$i.eq(newpos).addClass("on").siblings().removeClass("on");
		box.animate({marginLeft:-1065*newpos+"px"},400)
	})
	$lf.on("click",function(){
		var $_this=$(this);
		var len=$_this.parent().find("i").length-1,$i=$_this.parent().find("i");
		var box=$_this.parents(".content").find("ul");
		var index=$_this.parent().find(".on").index();
		var newpos=index==0?len:index-1;
		$i.eq(newpos).addClass("on").siblings().removeClass("on");
		box.animate({marginLeft:-1065*newpos+"px"},400)
	})

// 人才招聘
	$(".pep .clear li .xx").on("click",function(){
		var url=$(this).data("url");
		$(".black").fadeIn("fast",function(){
			$(".hurry").load(url)
		})
	})


	$(".de-put .close").click(function(){
		$(this).parent().fadeOut('fast', function() {
			$(".black").fadeOut("fast")
		})
	})


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
    console.log(hei)

    function lf(e,lt){
        e.delay(lt).animate({
            marginLeft:"0px",
            opacity:1
        },800,"linear")
    }

    function fd(e,lt){
        e.delay(lt).fadeIn(600);
    }
}
