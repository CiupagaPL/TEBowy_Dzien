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

  if(changeTimer<5){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=15&&changeTimer<20){ _context.drawShortImage(_change.img4,_change); }
  if(changeTimer>=20){
    _context.drawShortImage(_change.img4,_change);

    if(musicOn){
      _audio.menu.volume=0.25;
      _audio.menu.load();
    } musicTimer=0;

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
  
    if(defeat){ round=1; defeat=false; }

    if(round==1||round==2){
      _laser.max=120;
      _player.max=90;
      _spike.count=1;
    } if(round==3||round==4||round==5){
      _laser.max=90;
      _player.max=75;
      _spike.count=2;
    } if(round==6||round==7){
      _laser.max=60;
      _player.max=60;
      _spike.count=3;
    }

    resetlevel();
    dead=false;
    _player.invisible=0;
    score=0;
    _player.x=64*scale;
    _player.y=_render.height-12*scale-_player.height;
    hp=6;
    autoScene=false;
    nextAutoScene=0;
    _keyState.left=false;
    _keyState.right=false;
    _player.vx=0;
    _player.vy=0;
    _boss.timer=0;
    _laser.timer=0;
    boss=false;
    bossHp=10;
    musicTimer=0;
    sceneTimer=0;
    _boss.y=-148*scale;
    _boss.x=32*scale;
    _cloud.y=-72*scale;
    _cloud.x=16*scale;
    _cloud.timer=0;
    _cloud.attack=false;
    _lightning.unused=true;
    _boss.left=false;
    teacher=false;
  }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=15&&changeTimer<20){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=20){
    changeTimer=0;
    changeScene=false;
    canClick=true;
    menuLoad=false;
    if(tutorial){ pauseOn=true; pauseChange=true; }
  }
}

transitionPauseon=function(){
  changeTimer++;

  if(changeTimer<5){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=15){
    _context.drawShortImage(_change.img3,_change);

    _audio.game.volume=0;
    _audio.boss.volume=0;
    changeTimer=0;
    canClick=true;
    pauseChange=false;
    pauseAnimation=true;
    musicTimer=0;
  }
}

transitionPauseoff=function(){
  changeTimer++;

  if(changeTimer<5){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=15){
    if(musicOn){
      _audio.game.volume=0.25;
      _audio.boss.volume=0.25;
    }
    pauseOn=false;
    pauseAnimation=false;
    changeTimer=0;
    canClick=true;
    pauseChange=false;
    autoUnpause=false;
    musicTimer=0;
    tutorial=false;
  }
}

transitionshorton=function(){
  changeTimer++;

  if(changeTimer<10){ _context.drawShortImage(_change.img4,_change); }
  if(changeTimer>=10){
    _context.drawShortImage(_change.img4,_change);

    if(musicOn){
      _audio.game.volume=0.25;
      _audio.game.load();
    } musicTimer=0;

    canClick=false;
    changeTimer=0;
    pauseOn=false;
    pauseChange=false;
    pauseAnimation=false;
    changeScene=true;
    autoScene=false;
    menuLoad=true;
    round=1;
    tutorial=false;

    if(nextScene!=scene){
      scene=nextScene;
      sceneTimer=0;
    }
  }
}

transitiondead=function(){
  changeTimer++;

  if(changeTimer<10){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=15&&changeTimer<20){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=20&&changeTimer<25){ _context.drawShortImage(_change.img4,_change); }
  if(changeTimer>=25){
    _context.drawShortImage(_change.img4,_change);

    if(musicOn){
      _audio.game.volume=0.25;
      _audio.game.load();
    } musicTimer=0;

    if(defeat){ round++; defeat=false; }

    if(round==1||round==2){
      _laser.max=120;
      _player.max=90;
      _spike.count=1;
    } if(round==3||round==4||round==5){
      _laser.max=90;
      _player.max=75;
      _spike.count=2;
    } if(round==6||round==7){
      _laser.max=60;
      _player.max=60;
      _spike.count=3;
    }

    resetlevel();
    dead=false;
    _player.invisible=0;
    score=0;
    _player.x=64*scale;
    _player.y=_render.height-12*scale-_player.height;
    hp=6;
    autoScene=false;
    nextAutoScene=0;
    _keyState.left=false;
    _keyState.right=false;
    _player.vx=0;
    _player.vy=0;
    _boss.timer=0;
    _laser.timer=0;
    changeScene=true;
    boss=false;
    bossHp=10;
    sceneTimer=0;
    _boss.y=-148*scale;
    _boss.x=32*scale;
    _cloud.y=-72*scale;
    _cloud.x=16*scale;
    _cloud.timer=0;
    _cloud.attack=false;
    _lightning.unused=true;
    _boss.left=false;
    teacher=false;

    canClick=true;
    changeTimer=0;
  }
}

transitionmenu=function(){
  changeTimer++;

  if(changeTimer<10){ _context.drawShortImage(_change.img1,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=15&&changeTimer<20){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=20&&changeTimer<25){ _context.drawShortImage(_change.img4,_change); }
  if(changeTimer>=25){
    _context.drawShortImage(_change.img4,_change);

    if(musicOn){
      _audio.game.volume=0.25;
      _audio.game.load();
    } musicTimer=0;

    if(nextScene!=scene){
      scene=nextScene;
      sceneTimer=0;
    }

    canClick=true;
    changeTimer=0;
  }
}
