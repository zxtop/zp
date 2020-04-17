window.onload=function(){
	var music=document.getElementById('music');
	var audio=document.getElementsByTagName('audio')[0];
	var page1=document.getElementById('page1');
	var page2=document.getElementById('page2');
	var page3=document.getElementById('page3');
    // 当音乐播放完停止时候，自动停止光盘旋转效果
    audio.addEventListener('ended',function(event){
    	music.setAttribute('class','');
    },false)
    //点击音乐图标，控制音乐播放效果
	// music.onclick=function(){
	// 	if (audio.paused) {
	// 		audio.play();
	// 		//this.style.animationPlayState='running';//andriod4版本以下不兼容，iphone6以上才兼容，兼容性不是很好
	// 		 this.setAttribute('class','play');
	// 	}else{
	// 	    audio.pause();			
	// 	    //this.style.animationPlayState='paused';//andriod4版本以下不兼容，iphone6以上才兼容，兼容性不是很好
	// 	     this.setAttribute('class','');
	// 	}
	// }
	music.addEventListener('touchstart',function(event){
			if (audio.paused) {
			audio.play();
			//this.style.animationPlayState='running';//andriod4版本以下不兼容，iphone6以上才兼容，兼容性不是很好
			 this.setAttribute('class','play');
		    }else{
		    audio.pause();			
		    //this.style.animationPlayState='paused';//andriod4版本以下不兼容，iphone6以上才兼容，兼容性不是很好
		     this.setAttribute('class','');
		    }
	    },false)
// 翻页效果
	page1.addEventListener('touchstart',function(event){
		page1.style.display='none';
		page2.style.display='block';
		page3.style.display='block';
		page3.style.top    ='100%';

		setTimeout(function(){
			page2.setAttribute('class','page fadeout');
		},5500);

		setTimeout(function(){
			page3.setAttribute('class','page fadein');
		},5500)
	},false)



	console.log('网页可见区域宽：'+document.body.clientWidth);
	console.log('网页可见区域高：'+document.body.clientHeight);
	console.log('网页可见区域宽（包括边线的宽）：'+document.body.offsetWidth);
	console.log('网页可见区域高（包括边线的宽）：'+document.body.offsetHeight);
	console.log('网页正文全文宽：'+document.body.scrollWidth)

	console.log('网页正文全文宽：'+document.body.scrollHeight)
	console.log('网页正文全文宽：'+document.body.scrollTop)
	console.log('屏幕分辨率的宽'+window.screen.height)

}