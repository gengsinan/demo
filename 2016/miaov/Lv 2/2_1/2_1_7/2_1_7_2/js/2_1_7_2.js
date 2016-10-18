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

	//歌曲选择部分
	function fn1 () 
	{
		for ( var i=0; i<aLi.length; i++ ) 
		{
			if ( i%2 == 0 ) 		//每隔一行不同颜色
			{
				aLi[i].style.background = '#E3EEF6';
			} else 
			{
				aLi[i].style.background = '';
			}

			aLi[i].onmouseover = function () 	//滑过事件
			{
				own = this.style.background;
				this.style.background = '#DFDFDF';
			}

			aInput[i].index = i;
			aInput[i].onclick = function () 	//点击(选中/取消)歌曲事件
			{
				for ( var i=0; i<aInput.length; i++ ) 
				{	
					if ( aInput[this.index].checked == true ) 
					{	
						aLi[this.index].style.background = '#DFDFDF';
						own = aLi[this.index].style.background;
					} else
					{
						own = this.index%2 == 0 ? '#E3EEF6' : 'white';
					}
				}

				//如果所有歌曲都被选中，全选按钮变为选中状态;如果有一首歌曲没被选中，全选按钮变为未选状态;
				if ( aInput[0].checked == true && aInput[1].checked == true && aInput[2].checked == true && aInput[3].checked == true && aInput[4].checked == true && aInput[5].checked == true  ) 
				{
					oInput.checked = true;
				} else 
				{
					oInput.checked = false;
				}

				//至少有一个歌曲按钮被选中时，则功能键显示;反之，则功能键隐藏;
				if ( aInput[0].checked == true || aInput[1].checked == true || aInput[2].checked == true || aInput[3].checked == true || aInput[4].checked == true || aInput[5].checked == true ) 
				{
					fn2 ('');
				} else 
				{
					fn2 ('option');
				}
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
		//如果歌曲层至少有一首没被选中，则点击全选按钮歌曲全部被选中，并且歌曲层背景变换;反之，点击全选按钮歌曲全部被取消，并且初始化歌曲层函数;
		if ( aInput[0].checked == false || aInput[1].checked == false || aInput[2].checked == false || aInput[3].checked == false || aInput[4].checked == false || aInput[5].checked == false ) 
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