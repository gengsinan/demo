$( function()		//引入了一个的库(miaov);	$(v)中v若是function类型,return值为window.onload = v;
{
	var aDiv = $('nav').getElementsByTagName('div');		//引入了一个的库(miaov);	$(v)中v若是string类型,return值为getElementById(v);
	var aA = $('header').getElementsByTagName('a');

	for ( var i=0; i<aA.length; i++ )
	{
		function hide(aElements) 
		{
			timer = setTimeout		//这里并没有全局声明timer,原因是作用域;工程中一定要先声明timer一个数据类型;
			(
				function() 
				{
					aElements.style.display = 'none';
				}, 500
			)	
		}

		aA[i].index = i;
		aA[i].onmouseover = function() 
		{
			aDiv[this.index+1].style.display = 'inline-block';
			for ( var i=0; i<aA.length; i++ ) 
			{
				aDiv[i+1].style.display = i != this.index ? 'none' : 'inline-block';
			}
		}

		aA[i].onmouseout = function() 
		{
			that = this;		//this对象,忘记的同学去看leo老师的this指针视频;
			hide (aDiv[that.index+1]);
		}

		aDiv[i+1].index = i;
		aDiv[i+1].onmouseover = function() 
		{
			clearTimeout (timer);
			this.style.display = 'inline-block';
		}

		aDiv[i+1].onmouseout = function() 
		{
			that = this;
			hide (that);
		}
	}
} );