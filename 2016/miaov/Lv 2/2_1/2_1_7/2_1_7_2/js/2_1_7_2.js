window.onload = function () 
{
	var oSing = document.getElementById('sing');
	var oUl = oSing.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var aInput = oUl.getElementsByTagName('input');
	var oDiv = oSing.getElementsByTagName('div')[0];
	var oInput = oDiv.getElementsByTagName('input')[0];
	var aBtn = oDiv.getElementsByTagName('button');
	var own = null;				//声明一个可以记录颜色变化的值
	var oTurn = null;			//声明一个储存歌曲层input选中个数(状态)的数值

	//歌曲层
	function fn1 () 
	{
		for ( var i=0; i<aLi.length; i++ ) 
		{
			aLi[i].style.background = i%2 == 0 ? '#E3EEF6' : '';		//每隔一行不同颜色

			aLi[i].onmouseover = function () 	//滑过事件
			{
				own = this.style.background;
				this.style.background = '#DFDFDF';
			}

			aInput[i].index = i;
			aInput[i].onclick = function () 	//点击(选中/取消)歌曲事件
			{
				for ( var i=0; i<aInput.length; i++ )		//用own记录onmouseout时的正确颜色值;
				{	
					own = aInput[this.index].checked == true ? aLi[this.index].style.background : this.index%2 == 0 ? '#E3EEF6' : 'white';
				}

				oTurn = 0;
				for ( var i=0; i<aInput.length; i++ ) 		//歌曲层全部选中时,全选按钮变为选中;歌曲层至少有一首未被选中,则全选按钮变为未选中状态;
				{
					oTurn += Number(aInput[i].checked);
				}

				oInput.checked = oTurn == aInput.length ? true : false;		//歌曲全被选中,全选按钮checked为true;反之,全选按钮checked为false;

				oTurn ? fn2 ('') : fn2 ('option');		//至少有一个歌曲按钮被选中时，则功能键显示;反之，则功能键隐藏;
			}

			aLi[i].onmouseout = function () 		//滑出事件
			{
				this.style.background = own;
			}
		}	
	}
	fn1 ();

	function fn2 (tagName)		//功能按钮显示或隐藏传参函数
	{
		for ( var i=0; i<aBtn.length; i++ ) 
		{
			aBtn[i].className = tagName;
		}	
	} 
		
	//功能层
	oInput.onclick = function ()	//全选按钮点击事件
	{
		if ( this.checked )			//如果歌曲层至少有一首没被选中，则点击全选按钮歌曲全部被选中，并且歌曲层背景变换;反之，点击全选按钮歌曲全部被取消，并且初始化歌曲层函数;
		{
			for (  var i=0; i<aInput.length; i++ )		
			{
				aInput[i].checked = true;
				aLi[i].style.background = '#DFDFDF';
			}
			fn2 ('');
		} else 
		{
			for (  var i=0; i<aInput.length; i++ ) 
			{
				aInput[i].checked = false;
				fn1 ();
			}
			fn2 ('option');
		}
	}
};