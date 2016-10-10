window.onload = function () 
{
	var oDiv = document.getElementsByTagName('div')[0];
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var aA = oUl.getElementsByTagName('a');
	var oOl = oDiv.getElementsByTagName('ol');
	var directory = 1;
	var content = 1;

	//初始化
	aA[0].style.background = 'white';
	oOl[0].style.display = 'block';

	for ( var i=0; i<aA.length; i++ ) 
	{
		aA[i].index = i;
		aA[i].onclick = function () 
		{
			this.style.background = 'white';
			oOl[this.index].style.display = 'block';
			for ( var i=0; i<aA.length; i++ ) 
			{
				if ( aA[i].index != this.index ) 
				{
					aA[i].style.background = '';
					oOl[i].style.display = 'none';
				}
			}	
		}
	}

	//函数传参
	fn1 (oOl[0],['img/d1.jpg','img/d2.jpg','img/d3.jpg','img/d4.jpg','img/d5.jpg','img/d6.jpg','img/d7.jpg','img/d8.jpg','img/d9.jpg','img/d10.jpg']);
	fn1 (oOl[1],['img/w1.jpg','img/w2.jpg','img/w3.jpg','img/w4.jpg','img/w5.jpg','img/w6.jpg','img/w7.jpg','img/w8.jpg','img/w9.jpg','img/w10.jpg']);
	fn1 (oOl[2],['img/m1.jpg','img/m2.jpg','img/m3.jpg','img/m4.jpg','img/m5.jpg','img/m6.jpg','img/m7.jpg','img/m8.jpg','img/m9.jpg','img/m10.jpg']);

	//主程序
	function fn1 (ol,arrPic) 
	{
		for ( var i=0; i<arrPic.length; i++ ) 
		{
			ol.innerHTML += '<li><strong>' + directory++ + '</strong><span>第' + content++ + '名</span><img><a>播放</a></li>';
		}
		directory = 1;
		content = 1;

		var aLi = ol.getElementsByTagName('li');

		for ( var i=0; i<aLi.length; i++  ) 
		{
			aLi[i].index = i;
			aLi[i].getElementsByTagName('img')[0].src = arrPic[i];
			aLi[i].onmouseover = function () 
			{
				for ( var i=0; i<aLi.length; i++  ) 
				{
					if ( aLi[i].index === this.index ) 
					{
						this.style.background = 'white';
						this.getElementsByTagName('strong')[0].style.top = -46 + 'px';
						this.getElementsByTagName('span')[0].style.display = 'none';
						this.getElementsByTagName('img')[0].style.display = 'inline-block';
						this.getElementsByTagName('a')[0].style.display = 'inline-block';
					} else 
					{
						aLi[i].style.background = '';
						aLi[i].getElementsByTagName('strong')[0].style.top = '';
						aLi[i].getElementsByTagName('span')[0].style.display = '';
						aLi[i].getElementsByTagName('img')[0].style.display = '';
						aLi[i].getElementsByTagName('a')[0].style.display = '';
					}
				}
			}		
		}
	}
};