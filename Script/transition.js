/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

sceneoff=function(){
  canClick=false;
  changeScene=true;
  changeTimer++;

  if(changeTimer<=10){ _html.style.backgroundColor=_background.color3; }
  if(changeTimer>10){ _html.style.backgroundColor=_background.color4; }

  if(changeTimer<5){ _context.drawShortImage(_change.img1,_change); } 
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10&&changeTimer<15){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=15){ _context.drawShortImage(_change.img4,_change); }

  if(changeTimer>=20){
    musicTimer=0;
    changeTimer=0;
    sceneTimer=0;
    defeat=false;

    if(_player.hp==0){
      nextScene=scene;
      _player.hp=150;
    } scene=nextScene;
  }
}

sceneon=function(){
  changeTimer++;

  if(changeTimer>=1&&changeTimer<2){
    resetlevel();
    window.defaultgame();
    generatelevel();

    if(scene==1){ _changeText.value="Menu"; }
    if(scene>=2){ _changeText.value="Poziom "+Number(scene-1); }

    _audio.menu.load();
    _audio.game.load();
    _audio.boss.load();
    musicTimer=0;
  }

  if(changeTimer<=50){ _html.style.backgroundColor=_background.color4; }
  if(changeTimer>50){ _html.style.backgroundColor=_background.color3; }

  if(changeTimer<45){ _context.drawShortImage(_change.img4,_change); } 
  if(changeTimer>=45&&changeTimer<50){ _context.drawShortImage(_change.img3,_change); }
  if(changeTimer>=50&&changeTimer<55){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=55){ _context.drawShortImage(_change.img1,_change); }

  if(changeTimer>=5&&changeTimer<10){ _context.fillShortText(_changeText.color2,_changeText,_changeText.value); }
  if(changeTimer>=10&&changeTimer<15){ _context.fillShortText(_changeText.color1,_changeText,_changeText.value); }
  if(changeTimer>=15&&changeTimer<30){ _context.fillShortText(_changeText.color0,_changeText,_changeText.value); }
  if(changeTimer>=30&&changeTimer<35){ _context.fillShortText(_changeText.color1,_changeText,_changeText.value); }
  if(changeTimer>=35&&changeTimer<40){ _context.fillShortText(_changeText.color2,_changeText,_changeText.value); }

  if(changeTimer>=60){
    changeTimer=0;

    canClick=true;
    changeScene=false;

    pauseChange=false;
    pause=false;
    autoUnpause=false;

    if(scene==1){ menuLoad=false; }
    if(scene!=1&&tutorialOn){
      pauseAnimation=true;
      pause=true;
      pauseChange=true;
      tutorial=true;
    } else if(scene!=1&&!tutorialOn){ tutorial=false; }
  }
}

pauseon=function(){
  canClick=false;
  pause=true;
  changeTimer++;

  if(changeTimer<=10){ _html.style.backgroundColor=_background.color3; }
  if(changeTimer>10){ _html.style.backgroundColor=_background.color4; }

  if(changeTimer<5){ _context.drawShortImage(_change.img1,_change); } 
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10){ _context.drawShortImage(_change.img3,_change); }

  if(changeTimer>=15){
    changeTimer=0;
    musicTimer=0;

    canClick=true;
    pauseChange=false;

    _keyState.up=false;
    _keyState.down=false;
    _keyState.left=false;
    _keyState.right=false;

    _player.vx=0;
    if(_player.cloud){ _player.vy=0; }
  }
}

pauseoff=function(){
  canClick=false;
  changeTimer++;

  if(changeTimer<=5){ _html.style.backgroundColor=_background.color4; }
  if(changeTimer>5){ _html.style.backgroundColor=_background.color3; }

  if(changeTimer<5){ _context.drawShortImage(_change.img3,_change); } 
  if(changeTimer>=5&&changeTimer<10){ _context.drawShortImage(_change.img2,_change); }
  if(changeTimer>=10){ _context.drawShortImage(_change.img1,_change); }

  if(changeTimer>15){
    changeTimer=0;

    canClick=true;
    pauseChange=false;
    pause=false;
    autoUnpause=false;
    if(tutorial){
      tutorialOn=false;
      tutorial=false;
    }
    teacher=false;
  }
}

pauseend=function(){
  canClick=false;
  changeTimer++;
  
  _html.style.backgroundColor=_background.color4;

  _context.drawShortImage(_change.img4,_change);

  if(changeTimer>=5){
    musicTimer=0;
    changeTimer=0;
    sceneTimer=0;

    pause=false;
    pauseChange=false;
    changeScene=true;
    autoScene=false;
    if(nextScene==1){ menuLoad=true; }
    restart=false;
    autoRestart=false;

    scene=nextScene;
  }
}
