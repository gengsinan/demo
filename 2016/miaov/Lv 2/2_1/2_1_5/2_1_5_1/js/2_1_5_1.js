window.onload = function () 			//根据妙味视频课序,此方法不超纲;
{
	var oOl = document.getElementsByTagName('ol');
	var aLi = oOl[0].getElementsByTagName('li');
	var oDiv = document.getElementsByTagName('div')[0];
	var aPiece = oDiv.getElementsByTagName('span')[0]; 
	var aCost = oDiv.getElementsByTagName('span')[1]; 
	var aExpensive = oDiv.getElementsByTagName('span')[2];
	var piece = parseInt(aPiece.innerHTML);
	var cost = parseFloat(aCost.innerHTML);
	var expensive = parseFloat(aExpensive.innerHTML);
	var arr = [];
	var max = 0;

	for ( var i=0; i<aLi.length; i++ ) 		//function传参
	{
		aLi[i].index = i;
		arr[i] = 0;
		fnCount (aLi[i]);
	}

	function fnCount (Li) 					//主程序
	{
		var aBtn = Li.getElementsByTagName('button');
		var oQuantity = Li.getElementsByTagName('span')[0];
		var oPrice = Li.getElementsByTagName('span')[1];
		var oTotal = Li.getElementsByTagName('span')[2];
		var quantity = parseInt(oQuantity.innerHTML);
		var price = parseFloat(oPrice.innerHTML); 

		function merge () 
		{
			oQuantity.innerHTML = quantity;
			oTotal.innerHTML = quantity*price;
			aPiece.innerHTML = piece;
			aCost.innerHTML = cost;
			aExpensive.innerHTML = max;
		}				

		aBtn[0].onclick = function () 
		{
			quantity --;
			if ( quantity < 0 ) 
			{
				quantity = 0;
				price = 0;
			} else 
			{
				piece -= 1;
				cost -= price;
			}
			if ( quantity == 0 ) 
			{
				arr[Li.index] = 0;
			}
			max = 0;
			for( var i=0; i<arr.length; i++ )
			{
			    if ( max < arr[i] ) 
			    {
			    	max = arr[i]
			    }
			}
			merge ();
		}

		aBtn[1].onclick = function () 		
		{									
			quantity ++;					
			piece += 1;						
			cost += price;
			arr[Li.index] = price;
			if ( max < price ) 
			{
				max = price;
			}
			merge ();
		}
	}
};

/* 方法二（根据妙味视频课序,此方法超纲,涉及三元【三目】运算及return值;）
window.onload = function () 
{
	var oOl = document.getElementsByTagName('ol');
	var aLi = oOl[0].getElementsByTagName('li');
	var oDiv = document.getElementsByTagName('div')[0];
	var aPiece = oDiv.getElementsByTagName('span')[0]; 
	var aCost = oDiv.getElementsByTagName('span')[1]; 
	var aExpensive = oDiv.getElementsByTagName('span')[2];
	var piece = parseInt(aPiece.innerHTML);
	var cost = parseFloat(aCost.innerHTML);
	var expensive = parseFloat(aExpensive.innerHTML);
	var arr = [];
	var max = 0;

	//function传参
	for ( var i=0; i<aLi.length; i++ ) 
	{
		aLi[i].index = i;
		arr[i] = 0;
		fnCount (aLi[i]);
	}

	//主程序
	function fnCount (Li) 
	{
		var aBtn = Li.getElementsByTagName('button');
		var oQuantity = Li.getElementsByTagName('span')[0];
		var oPrice = Li.getElementsByTagName('span')[1];
		var oTotal = Li.getElementsByTagName('span')[2];
		var quantity = parseInt(oQuantity.innerHTML);
		var price = parseFloat(oPrice.innerHTML); 

		function merge () 
		{
			oQuantity.innerHTML = quantity;
			oTotal.innerHTML = quantity*price;
			aPiece.innerHTML = piece;
			aCost.innerHTML = cost;

			max = 0;
			for(var i=0;i<arr.length;i++){
			    max = maxFn(max,arr[i]);
			}
			
			aExpensive.innerHTML = max;
		}

		function maxFn(a,b)		// a = max    b = arr[i]
		{					
	  		return a>b?a:b;		
		}						


		aBtn[0].onclick = function () 
		{
			quantity --;
			if ( quantity < 0 ) 
			{
				quantity = 0;
				price = 0;
			} else 
			{
				piece -= 1;
				cost -= price;
			}
			if ( quantity == 0 ) 
			{
				arr[Li.index] = 0;
			}
			merge ();
		}

		aBtn[1].onclick = function () 		
		{									                 
			quantity ++;					
			piece += 1;						
			cost += price;
			arr[Li.index] = price;
			merge ();
		}
	}
};
*/