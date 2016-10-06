window.onload = function () 
{
	var aInput = document.getElementsByTagName('input');
	var aSpan = document.getElementsByTagName('span');

	aInput[1].onclick = function () 
	{
		for ( var i=1; i<10; i++)
		{
			if ( aInput[0].value == '' )
			{
				aSpan[0].innerHTML = '请输入QQ号';
				aSpan[0].style.color = 'red';
			} else if ( isNaN(aInput[0].value) ) 
			{
				aSpan[0].innerHTML = '请输入正确格式(数字格式)';
				aSpan[0].style.color = 'red';
			} else if ( aInput[0].value.charAt(0) == '0' )			//此句语法跟下面一句重复，可以省略;写此句主要是学会运用charAt属性;
			{
				aSpan[0].innerHTML = '请输入正确格式(前面不能有0)';
				aSpan[0].style.color = 'red';
			} else if ( parseInt(aInput[0].value) != parseFloat(aInput[0].value) ) 
			{
				aSpan[0].innerHTML = '请输入正确格式(不能是小数)';
				aSpan[0].style.color = 'red';
			} else if ( aInput[0].value.length<5 || aInput[0].value.length>10 )
			{
				aSpan[0].innerHTML = '请输入正确格式(范围在5-10位数之内)';
				aSpan[0].style.color = 'red';
			} else if ( aInput[0].value.charAt(0) != i ) 
			{
				aSpan[0].innerHTML = '请输入正确格式(开头输入数字)';		//上面的！你跟我重复了！而且我比你还严谨！！！此句需要for循环支持;
				aSpan[0].style.color = 'red';
			} else
			{
				aSpan[0].innerHTML = '输入成功';
				aSpan[0].style.color = 'green';
			}
		}
	}
/*
1、有没有输入<br />
2、输入的是不是数字<br />
3、不能有0在前面<br />
4、不能是小数<br />
5、输入的数字必须在5位以上、10位以内<br />
*/
};