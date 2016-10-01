window.onload = function () 
{
	var aUl = document.getElementsByTagName('ul');
	var aLi = document.getElementsByTagName('li');
	var aImg = document.getElementsByTagName('img');

	var array = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.gif','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg']

	for ( var i=0; i<12; i++ ) 
	{
		aUl[0].innerHTML += '<li><a href=""><img></a></li>';
		aImg[i].src = array[i];
	}

	for ( var i=0; i<aLi.length; i++)
	{
		aLi[i].onmouseover = function () 
		{
			aA[i].style.display = 'block';
		}

		aLi[i].onmouseout = function () 
		{
			this.getElementsByTagName('a')[0].style.display = 'none';
		}
	};
};