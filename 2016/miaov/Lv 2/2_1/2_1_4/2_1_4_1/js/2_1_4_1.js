window.onload = function () 
{
	var arr = [ '100px', 'abc'-6, [], -98765, 34, -2, 0, '300', , function(){alert(1);}, null, document, [], true, '200px'-30,'23.45元', 5, Number('abc'), function(){ alert(3); }, 'xyz'-90 ];
	var oBody = document.getElementsByTagName('body');
	var aDiv = document.getElementsByTagName('div');
	var vs = [];


	///第一题
	for ( var i=0; i<arr.length; i++ ) 
	{
		if ( typeof arr[i] != 'number')
		{

		} else if ( isNaN(arr[i]) ) 
		{

		} else
		{
			aDiv[0].innerHTML += arr[i] + '、';
		}
	}

	//第二题
	for ( var i=0; i<arr.length; i++ ) 
	{
		if ( typeof arr[i] == 'object' )
		{

		} else if ( typeof arr[i] == 'function' ) 
		{

		} else if ( typeof arr[i] == 'boolean' ) 
		{

		} else if ( typeof arr[i] == 'undefined' ) 
		{

		} else if ( typeof arr[i] == 'string' )
		{
			aDiv[1].innerHTML += arr[i] + '、';
			vs.push(arr[i]);
		} else if ( isNaN(arr[i]) ) 
		{

		} else 
		{
			aDiv[2].innerHTML += arr[i] + '、';
			vs.push(arr[i]);					//把数据都存入一个数组，第三题需要
		}
	}

	//第三题
	var max = parseFloat(vs[0]);
	for ( var i=1; i<vs.length; i++ ) 
	{
		if ( max < parseFloat(vs[i]) ) 
		{
			max = parseFloat(vs[i])
		}
		aDiv[3].innerHTML = max;	
	}

	//第四题		个人觉得命题不严谨  应该是找到number类型中的NaN在arr数组中的位置;
	for ( var i=0; i<arr.length; i++ ) 
	{
		if ( typeof arr[i] == 'number' ) 
		{
			if ( isNaN(arr[i]) ) 
			{
				aDiv[4].innerHTML += i + '、';
			}
		}
	};
	
/*
	1、找到arr里所有的数字：-98765, 34, -2, 0, 5
	2、找到可以转成数字的：'100px', -98765, 34, -2, 0, '300', '23.45元',  5 
	3、把转成数字以后，最大值判断出来：300
	4、把 NaN 所在的位置找出来：1 14 17  19
*/
};