
function $( v ){
	if( typeof v === 'function' ){
		window.onload = v;
	} else if ( typeof v === 'string' ) {
		return document.getElementById(v);
	} else if ( typeof v === 'object' ) {
		return v;
	}
}


function domove(obj,attr,dir,target,endFun){
	dir = parseInt(getStyle(obj,attr))<target ? dir : -dir;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		
		var speed=parseInt(getStyle(obj,attr))+dir;

		if(speed<target && dir<0 || speed>target && dir>0){
			speed=target
		}

		obj.style[attr]=speed+'px';

		if(speed==target){
			clearInterval(obj.timer);
			endFun&&endFun();
		}
		
	},30)
/*			if(endFun){
		endFun();
	}
*/
	
}
function getStyle(obj,atr){

		return obj.currentStyle ? obj.currentStyle[atr]:getComputedStyle(obj)[atr];
}
