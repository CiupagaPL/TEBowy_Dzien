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
    } if(_player.invisible>=_player.max){
      _player.invisible=0;
    }
  }
}

drawattack=function(_object){
  if(!pauseOn&&hp!=0){ _object.timer++; }
  
  if(_object.timer<10){
    _context.drawShortImage(_object.img0,_object);
  } if(_object.timer>=10&&_object.timer<20){
    _context.drawShortImage(_object.img1,_object);
  } if(_object.timer>=20&&_object.timer<30){
    _context.drawShortImage(_object.img2,_object);
  } if(_object.timer>=30&&_object.timer<40){
    _context.drawShortImage(_object.img3,_object);
  } if(_object.timer>=40){ _context.drawShortImage(_object.img0,_object); _object.timer=0; }
}
