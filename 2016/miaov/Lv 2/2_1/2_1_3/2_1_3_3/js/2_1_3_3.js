window.onload = function () 
{
	var oLeftImg = document.getElementById('left_img');
	var oRightImg = document.getElementById('right_img');
	var oPre = document.getElementById('previous');
	var oNext = document.getElementById('next');
	var oLeftPage = document.getElementById('left_page');
	var oRightPage = document.getElementById('right_page');

	var l = 0;
	var r = 0;
	var arrLeft = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
	var arrRight = ['img/r1.jpg','img/r2.jpg','img/r3.jpg'];

	//初始化
	function origin () 
	{
		oLeftImg.src = arrLeft[l];
		oLeftPage.innerHTML = l+1 + ' / ' + arrLeft.length;
		oRightImg.src = arrRight[r];
		oRightPage.innerHTML = r+1 + ' / ' + arrRight.length;
	}
	origin ();
	//单击左边图片
	oLeftImg.onclick = function () 
	{
		l ++;
		if ( l == arrLeft.length )
		{
			l = 0;
		}
		origin ();
	}
	//单击右边图片
	oRightImg.onclick = function () 
	{
		r ++;
		if ( r == arrRight.length )
		{
			r = 0;
		}
		origin ();
	}
	//单击上一组
	oPre.onclick = function () 
	{
		l --;
		r --;

		if ( l == -1 )
		{
			l = arrLeft.length -1;
		}

		if ( r == -1 )
		{
			r = arrRight.length -1;
		}
		origin ();
	}
	//单击下一组
	oNext.onclick = function () 
	{
		l ++;
		r ++;

		if ( l == arrLeft.length )
		{
			l = 0;
		}

		if ( r == arrRight.length )
		{
			r = 0;
		}
		origin ();
	}
};