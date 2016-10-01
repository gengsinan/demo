window.onload = function () 
{
	var oScreen = document.getElementById("screen");
	var oEmoji = document.getElementById("emoji");
	var oInput = document.getElementById("text_1");
	var oCommit = document.getElementById("btn_1");
	var array = [ 'img/emoji_1.gif','img/emoji_2.gif' ];
	var oTurn = 1;

	oCommit.onclick = function () 
	{

		if ( oInput.value == '' ) {

		} else if ( oTurn ) {
			oScreen.innerHTML = '<div class="left"><img src="img/emoji_1.gif"><p>说：' + oInput.value + '</p></div>' + oScreen.innerHTML;
			oInput.value = '';
		} else { 
			oScreen.innerHTML = '<div class="right"><img src="img/emoji_2.gif"><p>说：' + oInput.value + '</p></div>' + oScreen.innerHTML;
			oInput.value = '';
		}
	}

	oEmoji.onclick = function () {
		if ( oTurn ) {
			oEmoji.src = array[1];
			oTurn = 0;
		} else {
			oEmoji.src = array[0];
			oTurn = 1;
		}
	};
}