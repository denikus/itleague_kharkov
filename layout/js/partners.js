(function() {
	var cnt = [
		'<div class="pblock"><a href="http://itleague.football.kharkov.ua" title="Харьков Футбольный - IT-Лига" target="_blank"><img src="layout/partners/p_s_fk.gif" width="180" height="45" alt="Харьков Футбольный - IT-Лига"/></a></div><div class="pblock"><a href="http://shop.football.kharkov.ua" title="Футбольный Магазин" target="_blank"><img src="layout/partners/p_s_fs.gif" width="180" height="45" alt="Футбольный Магазин"/></a></div>'
	];
//	var rand = function(n){return (Math.floor(Math.random()*n+1));};
//	var p1 = rand(cnt.length)-1;
//	var p2 = rand(cnt.length)-1;
//	if (p2 == p1) {
//		if ((p2+1) > cnt.length-1)
//			p2--;
//		else
//			p2++;
//	}
	var result = (cnt[1]) + (cnt[0]);
	document.write(result);
})();