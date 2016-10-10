window.onload = function () 
{
	var oDiv = document.getElementById('Banner');
	var aUl = oDiv.getElementsByTagName('ul');
	var oDiv1 = oDiv.getElementsByTagName('div')[0];
	var aDiv = oDiv1.getElementsByTagName('div');
	var oDiv2 = aUl[0].getElementsByTagName('div')[0];
	var oLi = aUl[0].getElementsByTagName('li')[0];
	var aLi = oDiv.getElementsByTagName('li');
	var aA = oLi.getElementsByTagName('a');
	
	//初始化
	oDiv2.style.background = 'white';
	oLi.style.display = 'block';
	for ( var i=0; i<aA.length; i++ ) 
	{
		aA[i].style.display = 'inline-block';
	}

	//主题切换
	for ( var i=0; i<aDiv.length; i++ ) 
	{
		aDiv[i].index = i;
		aDiv[i].onclick = function () 
		{
			this.style.background = 'white';
			aLi[this.index].style.display = 'block';
			for ( var i=0; i<aDiv.length; i++ ) 
			{
				if ( aDiv[i].index != this.index ) 
				{
					aDiv[i].style.background = '';
					aLi[i].style.display= 'none';
				}
			}
		}
	}

	//函数传参
	fn1 (aUl[0],['img/1-1.jpg','img/1-2.jpg','img/1-3.jpg','img/1-4.jpg'],['女孩','婆婆','白龙','鼠鼠']);
	fn1 (aUl[1],['img/2-1.jpg','img/2-2.jpg','img/2-3.jpg'],['庙宇','村落','庄园']);
	fn1 (aUl[2],['img/3-1.jpg','img/3-2.jpg','img/3-3.jpg','img/3-4.jpg','img/3-5.jpg'],['路飞','艾斯','梅利号','成员','LOGO']);
	fn1 (aUl[3],['img/4-1.jpg','img/4-2.jpg','img/4-3.jpg','img/4-4.jpg'],['勒布朗','科比','哈登','库里']);

	//主程序
	function fn1 (Ul,arrPic,arrText) 
	{
		var aLi1 = Ul.getElementsByTagName('li')[0];
		var aA1 = aLi1.getElementsByTagName('a');

		aA1[0].style.background = '#F6366C';
		for ( var i=0; i<arrPic.length; i++ ) 
		{
			aA1[i].index = i;
			aA1[i].innerHTML = arrText[i];
			aA1[i].onmouseover = function () 
			{
				for ( var i=0; i<arrPic.length; i++ ) 
				{
					this.style.background = '#F6366C';
					aLi1.style.display = 'block';
					aLi1.style.background = 'url('+ arrPic[this.index] +')';
					if ( aA1[i].index != this.index ) 
					{
						aA1[i].style.background = '';
					}
				}
			}
		}
	}
};