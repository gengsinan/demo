window.onload = function () 
{
	var aBtn = document.getElementsByTagName('button');
	var aDiv = document.getElementsByTagName('div');
	var aP = document.getElementsByTagName('p');

	var quantity = 0;
	
	function merge ()	//合并同类项
	{
		for (var i=0; i<3; i++) 
			{
				aDiv[0].innerHTML += '<p></p>';
				aP[i].innerHTML = i;				
				aP[i].style.top = i*50 + 'px';
				aP[i].style.left = i*50 + 'px';
			}
	}

	function radical ()	//初始化
	{
		for (var i=0; i<3; i++) 
			{
				aDiv[0].innerHTML += '<p></p>';
				aP[i].innerHTML = i;
				aP[i].style.top = (2-i)*50 + 'px';
				aP[i].style.left = i*50 + 'px';
			}

			for (var i=3; i<5; i++)
			{
				aDiv[0].innerHTML += '<p></p>';
				aP[i].innerHTML = i;
				aP[i].style.top = (i-2)*50 + 'px';
				aP[i].style.left = i*50 + 'px';
			}
	};

	aBtn[0].onclick = function ()	//正式开始循环
	{
		aDiv[0].innerHTML = '';
		if ( quantity == 0 ) 
		{
			quantity ++;
			radical ();
		} else if ( quantity == 1 )
		{
			quantity ++;
			merge ()

			for (var i=3; i<5; i++)
			{
				aDiv[0].innerHTML += '<p></p>';
				aP[i].innerHTML = i;
				aP[i].style.top = i*50 + 'px';
				aP[i].style.left = (4-i)*50 + 'px';
			}
		} else if ( quantity ==2 )
		{
			quantity ++;
			merge ()

			for (var i=3; i<5; i++)
			{
				aDiv[0].innerHTML += '<p></p>';
				aP[i].innerHTML = i;
				aP[i].style.top = (4-i)*50 + 'px';
				aP[i].style.left = i*50 + 'px';				
			}
		} else if ( quantity == 3 )
		{
			quantity ++;
			for (var i=0; i<3; i++) 
			{
				aDiv[0].innerHTML += '<p></p>';
				aP[i].innerHTML = i;
				aP[i].style.top = i*50 + 'px';
				aP[i].style.left = (2-i)*50 + 'px';
			}

			for (var i=3; i<5; i++)
			{
				aDiv[0].innerHTML += '<p></p>';
				aP[i].innerHTML = i;
				aP[i].style.top = i*50 + 'px';
				aP[i].style.left = (i-2)*50 + 'px';
			}
		} else
		{
			radical ();
			quantity = 1;
		}
	};
};