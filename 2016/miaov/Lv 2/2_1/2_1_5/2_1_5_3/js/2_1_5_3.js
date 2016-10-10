window.onload = function () 
{
	var oUl = document.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');

	for ( var i=0; i<aLi.length; i++) 
	{
		fn1 (aLi[i]);
	}
	

	function fn1 (Li) 
	{
		var oSpan = Li.getElementsByTagName('span')[0];
		var oInput = Li.getElementsByTagName('input')[0];
		var oA1 = Li.getElementsByTagName('a')[0];
		var oA2 = Li.getElementsByTagName('a')[1];
		var oImg = Li.getElementsByTagName('img')[0];

		oImg.onclick = function () 
		{
			oSpan.style.display = 'none';
			this.style.display = 'none';
			oInput.style.display = 'inline-block';
			oA1.style.display = 'inline-block';
			oA2.style.display = 'inline-block';
		}

		oA1.onclick = function () 
		{
			oSpan.innerHTML = oInput.value;
			oSpan.style.display = 'inline-block';
			oImg.style.display = 'inline-block';
			oInput.style.display = 'none';
			oA1.style.display = 'none';
			oA2.style.display = 'none';
		}

		oA2.onclick = function () 
		{
			oSpan.style.display = 'inline-block';
			oImg.style.display = 'inline-block';
			oInput.style.display = 'none';
			oA1.style.display = 'none';
			oA2.style.display = 'none';
		}
	}
};