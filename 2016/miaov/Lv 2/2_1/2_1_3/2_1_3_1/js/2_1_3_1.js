window.onload = function () 
{
	var oUl = document.getElementById('whole');
	var aH2 = document.getElementsByTagName('h2');
	var aUl = oUl.getElementsByTagName('ul');

	var aLi = null;
	var array = [];

	for ( var i=0; i<aH2.length; i++ )
	{
		aH2[i].index = i;
		aH2[i].onclick = function () 
		{
			for ( var i=0; i<aH2.length; i++ ) 
			{
				if ( i != this.index )				//超纲内容，“！”是逻辑非运算符，取逻辑的反面
				{
					aUl[i].style.display = 'none';
					aH2[i].className = '';
				}
			}

			if ( this.className == '' ) 
			{
				this.className = 'active';
				aUl[this.index].style.display = 'block';
			} else 
			{
				this.className = '';
				aUl[this.index].style.display = 'none';
			}
		}
	}

	for ( var i=0; i<aUl.length; i++ ) 
			{
				aLi = aUl[i].getElementsByTagName('li');
				for ( var j=0; j<aLi.length; j++ ) 
				{
					array.push( aLi[j] );
				}
			}

	for ( var i=0; i<array.length; i++ ) 
	{
		array[i].onclick = function () 
		{
			for ( var i=0; i<array.length; i++ ) 
			{
				if ( array[i] != this )
				{
					array[i].className = '';
				}
			}

		if ( this.className == '' ) 
			{
				this.className = 'hover';
			} else 
			{
				this.className = '';
			}
		}
	};
};