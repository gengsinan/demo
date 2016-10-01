window.onload = function () 
{
	var aSpan = document.getElementsByTagName('span');
	var aDiv = document.getElementsByTagName('div');

	var a = 0;
	
	for ( var i=0; i<++a && i<=99; i++ )	//a++ && i<=99 的值就是i<100;提前预习运算符:与\或\逻辑非
	{
		aSpan[0].innerHTML += "<div></div>";
	}

	for ( var i=0; i<aDiv.length; i++)
	{
		aDiv[i].onmouseover = function () 
		{
			this.style.background = 'none';
			this.style.border = '#DBDBDB;';
		}
	};
};