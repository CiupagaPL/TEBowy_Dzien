/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

transitionon=function(){
  changeTimer++;

  if(changeTimer<5){ _context.drawShortImage(_change.img1,_change); _audio.menu.volume=0.2; }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); _audio.menu.volume=0.15; }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img3,_change); _audio.menu.volume=0.1; }
  if(changeTimer>=15&&changeTimer<20){ _context.drawShortImage(_change.img4,_change); _audio.menu.volume=0.05; }
  if(changeTimer>=20){
    _context.drawShortImage(_change.img4,_change);

    _audio.menu.volume=0.25;
    _audio.menu.load();
    musicTimer=0;

    canClick=false;
    changeTimer=0;

    if(nextScene!=scene){
      scene=nextScene;
      sceneTimer=0;
    }
  }
}

transitionoff=function(){
  changeTimer++;

  if(changeTimer<5){
    _context.drawShortImage(_change.img4,_change);
  
    resetlevel();
    dead=false;
    _player.invisible=0;
    score=0;
    _player.x=_render.width/2-_player.width/2;
    _player.y=_render.height-12*scale-_player.height;
    hp=6;
    autoScene=false;
    nextAutoScene=0;
    _keyState.a=false;
    _keyState.d=false;
    _keyState.left=false;
    _keyState.right=false;
    _player.vx=0;
    _player.vy=0;
    boss=false;
    bossHp=10;
    if(defeat){ round=1; defeat=false; }
  }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=15&&changeTimer<20){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=20){
    changeTimer=0;
    changeScene=false;
    canClick=true;
    menuLoad=false;
  }
}

transitionPauseon=function(){
  changeTimer++;

  if(changeTimer<5){ _context.drawShortImage(_change.img1,_change); _audio.game.volume=0.2; }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); _audio.game.volume=0.15; }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img3,_change); _audio.game.volume=0.1; }
  if(changeTimer>=15){
    _context.drawShortImage(_change.img3,_change);

    changeTimer=0;
    canClick=true;
    pauseChange=false;
    pauseAnimation=true;
  }
}

transitionPauseoff=function(){
  changeTimer++;

  if(changeTimer<5){ _context.drawShortImage(_change.img3,_change); _audio.game.volume=0.1; }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); _audio.game.volume=0.15; }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img1,_change); _audio.game.volume=0.2; }
  if(changeTimer>=15){
    pauseOn=false;
    pauseAnimation=false;
    changeTimer=0;
    canClick=true;
    pauseChange=false;
    autoUnpause=false;
  }
}

transitionshorton=function(){
  changeTimer++;

  if(changeTimer<10){ _context.drawShortImage(_change.img4,_change); _audio.game.volume=0.05; }
  if(changeTimer>=10){
    _context.drawShortImage(_change.img4,_change);

    _audio.game.volume=0.25;
    _audio.game.load();
    musicTimer=0;

    canClick=false;
    changeTimer=0;
    pauseOn=false;
    pauseChange=false;
    pauseAnimation=false;
    changeScene=true;
    autoScene=false;
    menuLoad=true;
    round=1;

    if(nextScene!=scene){
      scene=nextScene;
      sceneTimer=0;
    }
  }
}

transitiondead=function(){
  changeTimer++;

  if(changeTimer<10){ _context.drawShortImage(_change.img1,_change); _audio.game.volume=0.2; }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img2,_change); _audio.game.volume=0.15; }
  if(changeTimer>=15&&changeTimer<20){ _context.drawShortImage(_change.img3,_change); _audio.game.volume=0.1; }
  if(changeTimer>=20&&changeTimer<25){ _context.drawShortImage(_change.img4,_change); _audio.game.volume=0.05; }
  if(changeTimer>=25){
    _context.drawShortImage(_change.img4,_change);

    _audio.game.volume=0.25;
    _audio.game.load();
    musicTimer=0;

    resetlevel();
    dead=false;
    _player.invisible=0;
    score=0;
    _player.x=_render.width/2-_player.width/2;
    _player.y=_render.height-12*scale-_player.height;
    hp=6;
    autoScene=false;
    nextAutoScene=0;
    _keyState.a=false;
    _keyState.d=false;
    _keyState.left=false;
    _keyState.right=false;
    _player.vx=0;
    _player.vy=0;
    changeScene=true;
    boss=false;
    bossHp=10;
    if(defeat){ round++; defeat=false; }

    canClick=true;
    changeTimer=0;
  }
}

transitionmenu=function(){
  changeTimer++;

  if(changeTimer<10){ _context.drawShortImage(_change.img1,_change); _audio.game.volume=0.2; }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img2,_change); _audio.game.volume=0.15; }
  if(changeTimer>=15&&changeTimer<20){ _context.drawShortImage(_change.img3,_change); _audio.game.volume=0.1; }
  if(changeTimer>=20&&changeTimer<25){ _context.drawShortImage(_change.img4,_change); _audio.game.volume=0.05; }
  if(changeTimer>=25){
    _context.drawShortImage(_change.img4,_change);

    _audio.game.volume=0.25;
    _audio.game.load();
    musicTimer=0;

    if(nextScene!=scene){
      scene=nextScene;
      sceneTimer=0;
    }

    canClick=true;
    changeTimer=0;
  }
}
