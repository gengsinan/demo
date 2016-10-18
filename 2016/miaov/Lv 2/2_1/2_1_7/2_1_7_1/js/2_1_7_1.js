window.onload = function () 
{
	var aOl = document.getElementsByTagName('ol');				//传参头标签
	var oCase = document.getElementById('case');
	var fixed1 = -1;
	var fixed2 = -1;
	var fixed3 = -1;
	
	fn1(aOl[0],fixed1,['卖家态度很差，还骂人、说脏话，简直不把顾客当回事','卖家有点不耐烦，承诺的服务也兑现不了','卖家回复问题很慢，态度一般，谈不上沟通顺畅','卖家服务挺好的，沟通挺顺畅的，总体满意','卖家的服务太棒了，考虑非常周到，完全超出期望值']);
	fn1(aOl[1],fixed2,['卖家态度很差，还骂人、说脏话，简直不把顾客当回事','卖家有点不耐烦，承诺的服务也兑现不了','卖家回复问题很慢，态度一般，谈不上沟通顺畅','卖家服务挺好的，沟通挺顺畅的，总体满意','卖家的服务太棒了，考虑非常周到，完全超出期望值']);
	fn1(aOl[2],fixed3,['再三提醒下，卖家超过一天才发货，耽误我的时间','卖家发货有点慢的，催了几次终于发货了','卖家发货速度一般，提醒后才发货的','卖家发货还算及时','卖家发货速度非常快']);

	//主程序
	function fn1 (ol,fixed,arrText) 
	{
		var oLi0 = ol.getElementsByTagName('li')[0];		//星星父级标签
		var oLi1 = ol.getElementsByTagName('li')[1];		//弹出描述1父级标签
		var oLi2 = ol.getElementsByTagName('li')[2];		//分数及右侧描述2父级标签
		var aA = ol.getElementsByTagName('a');				//获取所有星星标签
		var aDiv = ol.getElementsByTagName('div');
		var oSpan = oLi2.getElementsByTagName('span')[0];
		var oP = oLi2.getElementsByTagName('p')[0];
		var arrStar = ['url(img/criticism.png)','url(img/satisfaction.png)'];

		function merge (transform) 
		{
			if ( transform<2 ) 
				{
					for ( var i=0; i<transform+1; i++ ) 
					{
						aA[i].style.background = arrStar[0];
					}
				} else 
				{
					for ( var i=0; i<transform+1; i++ ) 
					{
						aA[i].style.background = arrStar[1];
					}
				}
				for ( var i=transform+1; i<aA.length; i++ ) 
				{
					aA[i].style.background = '';
				}
		}

		for ( var i=0; i<aA.length; i++ ) 
		{
			aA[i].index = i;
			aA[i].onmouseover = function () 
			{
				merge(this.index);
				for ( var i=0; i<aDiv.length; i++ ) 
				{
					aDiv[this.index].style.display = 'block';
				}
			}

			aA[i].onclick = function () 
			{
				fixed = this.index;
				oCase.style.display = 'none';
				oLi2.style.display = 'block';
				oSpan.innerHTML = this.index+1;
				oP.innerHTML = arrText[this.index];
			}

			aA[i].onmouseout = function () 
			{
				merge(fixed);
				for ( var i=0; i<aDiv.length; i++ ) 
				{
					aDiv[this.index].style.display = '';
				}
			}
		}
	}
};

// 仅实现星星的JS
// window.onload = function () 
// {
// 	var aOl = document.getElementsByTagName('ol');				//传参头标签
// 	var fixed = -1;
	
// 	fn1(aOl[0]);
// 	fn1(aOl[1]);
// 	fn1(aOl[2]);

// 	//主程序
// 	function fn1 (ol) 
// 	{
// 		var oLi0 = ol.getElementsByTagName('li')[0];		//星星父级标签
// 		var oLi1 = ol.getElementsByTagName('li')[1];		//弹出描述1父级标签
// 		var oLi2 = ol.getElementsByTagName('li')[2];		//分数及右侧描述2父级标签
// 		var aA = ol.getElementsByTagName('a');				//获取所有星星标签
// 		var arrStar = ['url(img/criticism.png)','url(img/satisfaction.png)'];

// 		function fn2 (transform) 
// 		{
// 			if ( transform<2 ) 
// 			{
// 				for ( var i=0; i<transform+1; i++ ) 
// 				{
// 					aA[i].style.background = arrStar[0];
// 				}
// 			} else
// 			{
// 				for ( var i=0; i<transform+1; i++ ) 
// 				{
// 					aA[i].style.background = arrStar[1];
// 				}
// 			}
// 			for ( var i=transform+1; i<aA.length; i++ ) 
// 			{
// 				aA[i].style.background = '';
// 			}

// 		}

// 		for ( var i=0; i<aA.length; i++ ) 
// 		{
// 			aA[i].index = i;
// 			aA[i].onmouseover = function () 
// 			{
// 				fn2(this.index);
// 			}

// 			aA[i].onmouseout = function () 
// 			{
// 				fn2(fixed);				
// 			}

// 			aA[i].onclick = function () 
// 			{
// 				fixed = this.index;		
// 			}
// 		}
// 	}
// };