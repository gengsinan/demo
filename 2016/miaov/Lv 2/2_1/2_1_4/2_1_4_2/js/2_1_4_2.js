window.onload = function () 
{
	var aInput = document.getElementsByTagName('input');
	var aSpan = document.getElementsByTagName('span');

	aInput[1].onclick = function () 
	{
			if ( aInput[0].value == '' )
			{
				aSpan[0].innerHTML = '请输入QQ号';
				aSpan[0].style.color = 'red';
			} else if ( isNaN(aInput[0].value) ) 
			{
				aSpan[0].innerHTML = '请输入正确格式(数字格式)';
				aSpan[0].style.color = 'red';
			} else if ( aInput[0].value.charAt(0) == '0' )		
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
			} else if ( aInput[0].value.charAt(0) != 1 && aInput[0].value.charAt(0) != 2 && aInput[0].value.charAt(0) != 3 && aInput[0].value.charAt(0) != 4 && aInput[0].value.charAt(0) != 5 && aInput[0].value.charAt(0) != 6 && aInput[0].value.charAt(0) != 7 && aInput[0].value.charAt(0) != 8 && aInput[0].value.charAt(0) != 9 ) 			
			{
				aSpan[0].innerHTML = '请输入正确格式(开头输入数字)';		
				aSpan[0].style.color = 'red';
			} else
			{
				aSpan[0].innerHTML = '输入成功';
				aSpan[0].style.color = 'green';
			}
	}
/*
1、有没有输入<br />
2、输入的是不是数字<br />
3、不能有0在前面<br />
4、不能是小数<br />
5、输入的数字必须在5位以上、10位以内<br />
6、开头必须是数字
*/
};