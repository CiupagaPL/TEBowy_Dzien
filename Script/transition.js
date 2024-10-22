/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

transitionOn=function(){
  changeTimer++;

  if(changeTimer<5){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=15&&changeTimer<20){ _context.drawShortImage(_change.img4,_change); }
  if(changeTimer>=20){
    _context.drawShortImage(_change.img4,_change);

    canClick=true;
    changeTimer=0;

    if(nextScene!=scene){
      scene=nextScene;
      sceneTimer=0;
    }
  }
}

transitionOff=function(){
  changeTimer++;

  if(changeTimer<5){ _context.drawShortImage(_change.img4,_change); }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=15&&changeTimer<20){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=20){
    changeTimer=0;
    changeScene=false;
    dead=false;
  }
}

transitionPauseOn=function(){
  changeTimer++;

  if(changeTimer<5){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=15){
    _context.drawShortImage(_change.img3,_change);

    changeTimer=0;
    pauseChange=false;
    pauseAnimation=true;
  }
}

transitionPauseOff=function(){
  changeTimer++;

  if(changeTimer<5){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=15){
    pauseOn=false;
    pauseAnimation=false;
    changeTimer=0;
    canClick=true;
    pauseChange=false;
  }
}

transitionShortOn=function(){
  changeTimer++;

  if(changeTimer<10){ _context.drawShortImage(_change.img4,_change); }
  if(changeTimer>=10){
    _context.drawShortImage(_change.img4,_change);

    canClick=true;
    changeTimer=0;
    pauseOn=false;
    pauseChange=false;
    pauseAnimation=false;
    canStart=false;
    changeScene=false;

    score=0;
    round=0;
    _player.x=_render.width/2-_player.width/2;
    _player.y=_render.height/2-_player.height/2;
    hp=6;

    if(nextScene!=scene){
      scene=nextScene;
      sceneTimer=0;
    }
  }
}

transitionDead=function(){
  changeTimer++;

  if(changeTimer<10){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=15&&changeTimer<20){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=20&&changeTimer<25){ _context.drawShortImage(_change.img4,_change); }
  if(changeTimer>=25){
    _context.drawShortImage(_change.img4,_change);

    score=0;
    round=0;
    _player.x=_render.width/2-_player.width/2;
    _player.y=_render.height/2-_player.height/2;
    hp=6;

    canClick=true;
    changeTimer=0;
  }
}
