window.onload = function ()
{
	var oclick = document.getElementById('click');
	var screen_bg = document.getElementById('screen_bg');
	var set = document.getElementById('set');
	var seted = document.getElementById('seted');
	var red = document.getElementById('color_red');
	var orange = document.getElementById('color_orange');
	var blue = document.getElementById('color_blue');
	var wid200 = document.getElementById('num_wid_200');
	var wid300 = document.getElementById('num_wid_300');
	var wid400 = document.getElementById('num_wid_400');
	var hei200 = document.getElementById('num_hei_200');
	var hei300 = document.getElementById('num_hei_300');
	var hei400 = document.getElementById('num_hei_400');
	var restore = document.getElementById('restore');
	var commit = document.getElementById('commit');
	var circleshut = document.getElementById('circleshut');

	commit.onclick = shut;
	circleshut.onclick = shut;

	click.onclick = function () 
	{
		screen_bg.style.display = 'block';
		set.style.display = 'block';
	}

	red.onclick = function ()
	{
		seted.style.background = 'red';
	}

	orange.onclick = function ()
	{
		seted.style.background = 'orange';
	}

	blue.onclick = function ()
	{
		seted.style.background = 'blue';
	}

	wid200.onclick = function ()
	{
		seted.style.width = '200px';
	}

	wid300.onclick = function ()
	{
		seted.style.width = '300px';
	}

	wid400.onclick = function ()
	{
		seted.style.width = '400px';
	}

	hei200.onclick = function ()
	{
		seted.style.height = '200px';
	}

	hei300.onclick = function ()
	{
		seted.style.height = '300px';
	}

	hei400.onclick = function ()
	{
		seted.style.height = '400px';
	}

	restore.onclick = function ()
	{
		seted.style.background = 'white';
		seted.style.width = '100px';
		seted.style.height = '100px';
	}

	function shut()
	{
		screen_bg.style.display = 'none';
		set.style.display = 'none';
	};

};