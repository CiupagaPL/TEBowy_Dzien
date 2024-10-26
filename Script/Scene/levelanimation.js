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
  if(_player.invisible==0){
    if(skin==0&&!_player.left){ _context.drawShortImage(_player.img0,_player); }
    if(skin==1&&!_player.left){ _context.drawShortImage(_player.img1,_player); }
    if(skin==2&&!_player.left){ _context.drawShortImage(_player.img2,_player); }
    if(skin==3&&!_player.left){ _context.drawShortImage(_player.img3,_player); }
    if(skin==0&&_player.left){ _context.drawShortImage(_player.img0left,_player); }
    if(skin==1&&_player.left){ _context.drawShortImage(_player.img1left,_player); }
    if(skin==2&&_player.left){ _context.drawShortImage(_player.img2left,_player); }
    if(skin==3&&_player.left){ _context.drawShortImage(_player.img3left,_player); }
  } if(_player.invisible!=0){
    if(!pauseOn&&hp!=0){ _player.invisible++; }

    if(_player.invisible%2==0){
      if(skin==0&&!_player.left){ _context.drawShortImage(_player.img0,_player); }
      if(skin==1&&!_player.left){ _context.drawShortImage(_player.img1,_player); }
      if(skin==2&&!_player.left){ _context.drawShortImage(_player.img2,_player); }
      if(skin==3&&!_player.left){ _context.drawShortImage(_player.img3,_player); }
      if(skin==0&&_player.left){ _context.drawShortImage(_player.img0left,_player); }
      if(skin==1&&_player.left){ _context.drawShortImage(_player.img1left,_player); }
      if(skin==2&&_player.left){ _context.drawShortImage(_player.img2left,_player); }
      if(skin==3&&_player.left){ _context.drawShortImage(_player.img3left,_player); }
    } if(_player.invisible>=60){
      _player.invisible=0;
    }
  }
}
