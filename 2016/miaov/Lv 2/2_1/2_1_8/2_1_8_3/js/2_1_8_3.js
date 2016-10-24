$(function(){
	var aLi = document.getElementsByTagName('li');
	var arrPic = ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png','img/6.png','img/7.png','img/8.png','img/9.png','img/10.png','img/11.png','img/12.png','img/13.png','img/14.png']; 
	var order = 0;
	var reverse = 0;
	var timer = null;

	//初始化
	aLi[0].style.background = '#E7CCF7';

	//side滑过模块
	for ( var i=0; i<arrPic.length; i++ ) 
	{
		aLi[i].index = i;
		aLi[i].onmouseover = function () 
		{
			order = this.index;
			reverse = this.index;
			$('img').src = arrPic[this.index]
			for ( var i=0; i<arrPic.length; i++ ) 
			{
				aLi[i].style.background = i != this.index ? '' : '#E7CCF7';
			}
		}
	}

	//定时器模块
	function merge(value)
	{
		$('img').src = arrPic[value%aLi.length];
		for ( var i=0; i<aLi.length; i++ ) 
		{
			aLi[i].style.background = i != value%aLi.length ? '' : '#E7CCF7';
		}
	}

	function autoPlay () 
	{
		clearInterval ( timer )
		timer = setInterval (function()
		{
			if ( order >= 0 && order < aLi.length-1 ) 
			{
				order ++;
				merge(order);
				reverse = order;
			} else
			{
				reverse --;
				merge(reverse);
				order = reverse == 0 ? reverse : order;
			}
		}, 500 );
	}
	autoPlay ();

	$('oDiv').onmouseover = function () 
	{
		clearTimeout( timer );
	}
	$('oDiv').onmouseout = autoPlay;
});