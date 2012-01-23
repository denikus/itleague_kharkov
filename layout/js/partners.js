(function() {
	var cnt = [
		'<div class="pblock"><a href="http://www.zfort.com.ua" target="_blank"><img src="layout/parners/p_zf.jpg" width="180" height="90" alt="Zfort Group"/></a></div>',
		'<div class="pblock"><a href="http://www.globallogic.com.ua/?from=logofp" target="_blank"><img src="layout/parners/p_gl.png" width="180" height="90" alt="GlobalLogic"></a></div>',
		'<div class="pblock"><a href="http://umnicum.com" target="_blank"><img src="layout/parners/p_um.gif" width="180" height="90" alt="Umnicum"></a></div>',
		'<div class="pblock"><a href="http://javascript.ru/mk" target="_blank"><img src="layout/parners/js.gif" width="180" height="90" alt="Мастер-классы по JavaScript"></a></div>',
		'<div class="pblock"><a href="http://itleague.football.kharkov.ua" title="Харьков Футбольный - IT-Лига" target="_blank"><img src="layout/parners/p_s_fk.gif" width="180" height="45" alt="Харьков Футбольный - IT-Лига"/></a></div><div class="pblock"><a href="http://shop.football.kharkov.ua" title="Футбольный Магазин" target="_blank"><img src="layout/parners/p_s_fs.gif" width="180" height="45" alt="Футбольный Магазин"/></a></div>'
	];
	var rand = function(n){return (Math.floor(Math.random()*n+1));};
	var p1 = rand(cnt.length)-1;
	var p2 = rand(cnt.length)-1;
	if (p2 == p1) {
		if ((p2+1) > cnt.length-1)
			p2--;
		else
			p2++;
	}
	var result = (cnt[p1]) + (cnt[p2]);
	document.write(result);
})();