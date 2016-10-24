$(function(){		//引入了一个的库(miaov);	$(v)中v若是function类型,return值为window.onload = v;
	var oDiv = document.getElementsByTagName('div')[0];
	var aHeader = document.getElementsByTagName('header');
	var aUl = document.getElementsByTagName('ul');
	var oImg = document.getElementsByTagName('img')[0];
	var aLi = document.getElementsByTagName('li');
	var quantity = 0;
	var timer = null;
	var arrPic = ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png','img/6.png'];

	//初始化
	function origin(num1,num2)
	{
		aUl[num1].style.display = 'none';
		aHeader[num2].style.background = '#ABC0FA';
		aUl[num2].style.display = 'block';
		aHeader[num1].style.background = '';
		aLi[0].style.boxShadow = '0 0 30px';
	}
	origin(1,0);

	//side模块
	function fn() 
	{
		for ( var i=0; i<aLi.length; i++ ) 
		{
			aLi[i].index = i;
			aLi[i].onmouseover = function () 
			{
				quantity = this.index;
				oImg.src = arrPic[this.index];
				for ( var i=0; i<aLi.length; i++ ) 
				{
					aLi[i].style.boxShadow = i != this.index ?  '' : '0 0 30px';
				}
			}
		}
	}
	fn();

	//定时器模块
	function autoPlay() 
	{
		clearInterval ( timer );
		timer = setInterval 
		(
			function() 
			{
				quantity ++;
				quantity = quantity % arrPic.length;
				quantity < arrPic.length/2 ? origin(1,0) : origin(0,1);
				oImg.src = arrPic[quantity];

				for ( var i=0; i<aLi.length; i++ ) 
				{
					for ( var i=0; i<aLi.length; i++ ) 
					{
						aLi[i].style.boxShadow = i != quantity ? '' : '0 0 30px';
					}
				}
			}, 2000 )
	}
	autoPlay();

	oDiv.onmouseover = function()
	{
		clearTimeout( timer );
	};
	oDiv.onmouseout = autoPlay;

	//title模块
	for ( var i=0; i<aHeader.length; i++ )					
	{
		aHeader[i].index = i;
		aHeader[i].onclick = function () 
		{	
			function merge(num) 
			{
				oImg.src = arrPic[num];
				aLi[num].style.boxShadow = '0 0 30px';
			}
			this.index == 0 ? merge(0) : merge(3);

			for ( var i=0; i<aHeader.length; i++ )
			{
				aHeader[i].style.background = i !== this.index ? '' : '#ABC0FA';
				aUl[i].style.display = i !== this.index ? 'none' : 'block';
			}
		}
	}
});