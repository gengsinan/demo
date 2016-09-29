window.onload = function () 
{
	var oContinual = document.getElementById('continual');
	var oOrder = document.getElementById('order');
	var oRule = document.getElementById('rule');
	var oBanner = document.getElementById('banner');
	var oPrevious = document.getElementById('previous');
	var oNext = document.getElementById('next');
	var oPage = document.getElementById('page');
	var oDescription = document.getElementById('description');

	var arrimg = [ 'img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg' ];
	var arrdes = [ 'First','Second','Third','fouth' ];
	var quantity = 0;

	oContinual.onclick = continually;

	//初始化
	function radical () 
	{
		oPage.innerHTML = quantity+1 + " / " + arrimg.length;
		oDescription.innerHTML = arrdes[quantity];
		oBanner.src = arrimg[quantity];
	}
	continually ();

	//连续播放
	function continually () 
	{
		oRule.innerHTML = 'The pictures are continuing between the first and final';
		oPrevious.onclick = function () 
			{
				if ( quantity == 0 ) 
				{
					quantity = arrimg.length-1;
					radical (); 
				} else {
					quantity --;
					radical (); 
		}
			}
			
			oNext.onclick = function () 
			{	
				if ( quantity== arrimg.length-1 )
				{
					quantity = 0;
					radical ();
				} else {
					quantity ++;
					radical ();
				}
			}
	};
		
	//顺序播放
	oOrder.onclick = function () 
	{
		oRule.innerHTML = 'The pictures are confining between the first and final';
		oPrevious.onclick = function () 
		{
			if ( quantity == 0 ) 
			{

			} else 
				{
				quantity --;
				radical ();
			}
		} 

		oNext.onclick = function () 
		{	
			if ( quantity== arrimg.length-1 )
			{

			} else {
				quantity ++;
				radical ();
			}
		}
	};
};

/*	亦可以应用布尔值判断缩减代码（如下）
window.onload = function () 
{
	var oContinual = document.getElementById('continual');
	var oOrder = document.getElementById('order');
	var oRule = document.getElementById('rule');
	var oBanner = document.getElementById('banner');
	var oPrevious = document.getElementById('previous');
	var oNext = document.getElementById('next');
	var oPage = document.getElementById('page');
	var oDescription = document.getElementById('description');

	var arrimg = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
	var arrdes = ['First','Second','Third','fouth'];
	var quantity = 0;
	var oTurn = true;

	//true值为循环
	oContinual.onclick = function () 
	{
		oTurn = true;
		oRule.innerHTML = 'The pictures are continuing between the first and final';
	}

	//false值为顺序
	oOrder.onclick = function () 
	{
		oTurn = false;
		oRule.innerHTML = 'The pictures are confining between the first and final';
	}

	//判断循环
	function radical () 
	{
		oBanner.src = arrimg[quantity];
		oDescription.innerHTML = arrdes[quantity];
		oPage.innerHTML = quantity+1 + ' / ' + arrimg.length;
	}

	oPrevious.onclick = function () 
	{
		quantity --;
		if ( quantity == -1 ) 
		{
			if ( oTurn ) 
			{
				quantity = arrimg.length - 1;
			} else {
				quantity = 0;
			}
		}
		radical ();
	}

	oNext.onclick = function () 
	{
		quantity ++;
		if ( quantity == arrimg.length ) 
		{
			if ( oTurn ) 
			{
				quantity = 0;
			} else {
				quantity = arrimg.length - 1;
			}
		}
		radical ();			
	};
};	*/