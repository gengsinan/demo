window.onload = function () 
{
	var aBtn = document.getElementsByTagName('button');
	var aUl = document.getElementsByTagName('ul');
	var aLi = document.getElementsByTagName('li');

	var array = ['red','yellow','blue','green']
	var increase = 0;

	aBtn[0].onclick = function () 
	{
		for (var i=0; i<10; i++) 
		{
			increase ++;	//实现点击一次再增加9个同样格式的块块，戳！使劲戳！
			aUl[0].innerHTML +='<li></li>';
			aLi[increase-1].style.marginTop = 5 + 'px';
			aLi[increase-1].style.marginLeft = 10 + 'px';
			aLi[increase-1].innerHTML = increase-1;
			aLi[increase-1].style.background = array[i%4];	//不好意思，这里用了超纲的运算符，要不然用加减法做太他娘的尿性了，‘%’是求余运算符，举个栗子：6%4，输出结果为2；
		/*	这就是尿性的加减法
			if ( i<4 )
			{
				aLi[i].style.background = array[i]
			} else if ( i< 8)
			{
				aLi[i].style.background = array[i-4]

			} else 
			{
				aLi[i].style.background = array[i-8]
			}	
		*/
		}
	};
};