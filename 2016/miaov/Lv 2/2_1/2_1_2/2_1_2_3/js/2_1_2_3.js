window.onload = function () 
{
	var aBtn = document.getElementsByTagName('button');
	var aDiv = document.getElementsByTagName('div');
	var aP = document.getElementsByTagName('p');

	var discreased = 2;

	aBtn[0].onclick = function () 
	{
		for (var i=0; i<3; i++) 
		{
			aDiv[0].innerHTML += '<p></p>';
			aP[i].style.marginTop = i*50 + 'px';
			aP[i].innerHTML = i;
		}

		for (var i=3; i<5; i++)
		{
			discreased --;
			aDiv[0].innerHTML += '<p></p>';
			aP[i].style.marginTop = discreased*50 + 'px';
			aP[i].innerHTML = i;
		}
	};
};