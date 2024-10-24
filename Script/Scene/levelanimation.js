/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

drawplayer=function(){
  if(_player.invisible==0){ _context.drawShortImage(_player.img,_player); }

  if(_player.invisible!=0){
    if(!pauseOn&&hp!=0){ _player.invisible++; }

    if(_player.invisible%2==0){
      _context.drawShortImage(_player.img,_player);
    } if(_player.invisible>=60){
      _player.invisible=0;
    }
  }
}
