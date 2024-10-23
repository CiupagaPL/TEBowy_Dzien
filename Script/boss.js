/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

handleBoss=function(){
  _context.drawShortImage(_boss.img0,_boss);
  _context.drawShortImage(_tebulinek.img,_tebulinek);

  _boss.y=0;

  if(!pauseOn&&hp!=0){
    _tebulinek.y+=_tebulinek.vy;
    _tebulinek.vy+=_tebulinek.gravity+globalMove/8;
  }

  if(!pauseOn&&hp!=0){ _boss.timer++; }
  if(_boss.timer>=60||!_boss.load){
    _boss.x=Math.floor(Math.random()*416*scale)+64*scale;
    _tebulinek.x=_boss.x;
    _tebulinek.y=_boss.y+_boss.height;
    _tebulinek.vy=0;

    _boss.timer=0;
    _boss.load=true;
  }
}
