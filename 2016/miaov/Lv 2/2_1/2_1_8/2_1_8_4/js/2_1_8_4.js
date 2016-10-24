$(function(){		//引入了一个的库(miaov);	$(v)中v若是function类型,return值为window.onload = v;
	var timer = null;

	function clear() 
	{
		clearInterval ( timer );
	}		

	 $('topOnmousedown').onmousedown = function ()
	{	
	 	clearInterval ( timer );
	 	timer = setInterval (function () 
		{
			$('scroll').style.top = parseInt(getStyle($('scroll'),'top')) != -1060 ? parseInt(getStyle($('scroll'),'top')) - 10 +'px' : '-1060px';
		}, 20) 
	}

	 $('bottomOnmousedown').onmousedown = function ()
	 {	
	 	clearInterval ( timer );
	 	timer = setInterval (function () 
		{
			$('scroll').style.top = parseInt(getStyle($('scroll'),'top')) != 0 ? parseInt(getStyle($('scroll'),'top')) + 10 +'px' : '0';
		}, 20) 
	}

	$('topOnmousedown').onmouseup = clear;
	$('bottomOnmousedown').onmouseup = clear;
});