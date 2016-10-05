window.onload = function ()
{
	var aLi = document.getElementsByTagName('li');
	var aA = document.getElementsByTagName('a');
	var oNext = document.getElementById('next');
	var oPrevious = document.getElementById('previous');
	var oStrong = document.getElementsByTagName('strong');
	var aImg = document.getElementsByTagName('img');

	var arrPic = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
	var arrPho = ['img/1-1.png','img/2-2.png','img/3-3.png','img/4-4.png','img/5-5.png'];
	var quantity = 0;

	for ( var i=0; i<arrPic.length; i++ ) 
	{
		oStrong[0].innerHTML += '<a><img src="" alt=""></a>';
	}

	for ( var i=0; i<arrPic.length; i++ ) 
	{
		aA[i].index = i;		//索引值域
		aA[i].onclick = function () 
		{
			for (  var j=0; j<arrPic.length; j++  ) 
				{
					aA[j].style.background = '#CFCFCF';
				}
			aLi[0].style.background = 'url(img/' + arrPic[this.index] + ')';
			this.style.background = '#FF8B00';
			quantity = this.index;
		}

		aA[i].onmouseover =function () 
		{
			aImg[this.index].src = arrPho[this.index];
		}	

		aA[i].onmouseout =function () 
		{
			aImg[this.index].src = '';
		}
	}

	//初始化
	function merge () 
	{
		aLi[0].style.background = 'url(img/' + arrPic[quantity] + ')';
		aA[quantity].style.background = '#FF8B00';
	}
	merge ();

	//循环播放
	oNext.onclick = function () 
	{
		if ( quantity == arrPic.length-1 ) 
		{
			quantity = 0;
			merge ();
			aA[arrPic.length-1].style.background = '#CFCFCF';
		} else 
		{
			quantity ++;
			merge ();
			aA[quantity-1].style.background = '#CFCFCF';
		}
	}

	oPrevious.onclick = function () 
	{
		if ( quantity === 0 ) 
		{
			quantity = arrPic.length-1 ;
			merge ();
			aA[0].style.background = '#CFCFCF';
		} else 
		{
			quantity --;
			merge ();
			aA[quantity+1].style.background = '#CFCFCF';
		}
	}
};