/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

handleboss=function(){
  if(!pauseOn&&hp!=0){ sceneTimer++; }

  if(!pauseOn&&hp!=0&&!_tebulinek.unused){
    _tebulinek.y+=_tebulinek.vy;
    _tebulinek.vy+=_tebulinek.gravity;
  } if(!pauseOn&&hp!=0&&!_computer.unused){
    _computer.y+=_computer.vy;
    _computer.vy+=_computer.gravity;
  } if(!pauseOn&&hp!=0&&!_keyboard.unused){
    _keyboard.y+=_keyboard.vy;
    _keyboard.vy+=_keyboard.gravity;
  } if(!pauseOn&&hp!=0&&!_coffe.unused){
    _coffe.y+=_coffe.vy;
    _coffe.vy+=_coffe.gravity;
  } if(!pauseOn&&hp!=0&&!_dove.unused){
    _dove.y+=_dove.vy;
    _dove.vy+=_dove.gravity;
  }

  drawattack(_computer);
  drawattack(_keyboard);
  drawattack(_coffe);
  drawattack(_dove);
  drawattack(_tebulinek);
  drawboss();
  _context.drawShortImage(_cloud.img,_cloud);

  if(_computer.unsued){ _tebulinek.x=-_tebulinek.width; _tebulinek.y=-_tebulinek.height; }
  if(_keyboard.unsued){ _keyboard.x=-_keyboard.width; _keyboard.y=-_keyboard.height; }
  if(_coffe.unsued){ _coffe.x=-_coffe.width; _coffe.y=-_coffe.height; }
  if(_dove.unsued){ _dove.x=-_dove.width; _dove.y=-_dove.height; }
  if(_tebulinek.unsued){ _tebulinek.x=-_tebulinek.width; _tebulinek.y=-_tebulinek.height; }

  if(!pauseOn&&hp!=0){
    if(sceneTimer<60){
      _boss.y=-128*scale;
      _cloud.y=-52*scale;
    } if(sceneTimer>=60&&sceneTimer<61&&sfxOn){
      _audio.bossStart.load();
      _audio.bossStart.play();
    } if(sceneTimer>=60&&sceneTimer<90){
      _boss.y+=5*scale;
      _cloud.y+=5*scale;
    } if(sceneTimer>=90&&sceneTimer<140){
      _boss.x+=5*scale;
      _cloud.x+=5*scale;
      _boss.load=false;
      _boss.left=false;
    } if(sceneTimer>=140&&sceneTimer<170){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
    } if(sceneTimer>=170&&sceneTimer<220){
      _boss.x+=5*scale;
      _cloud.x+=5*scale;
      _boss.load=false;
      _boss.left=false;
    } if(sceneTimer>=220&&sceneTimer<250){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
    } if(sceneTimer>=250&&sceneTimer<300){
      _boss.x-=5*scale;
      _cloud.x-=5*scale;
      _boss.load=false;
      _boss.left=true;
    } if(sceneTimer>=300&&sceneTimer<330){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
    } if(sceneTimer>=330&&sceneTimer<380){
      _boss.x-=5*scale;
      _cloud.x-=5*scale;
      _boss.load=false;
      _boss.left=true;
    } if(sceneTimer>=380&&sceneTimer<410){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
    } if(sceneTimer>=410){ _boss.x+=5*scale; _cloud.x+=5*scale; sceneTimer=90; }
  }

  if(window.detectcollision(_player,_tebulinek)&&_boss.invisible==0){
    bossHp--;
    if(sfxOn){ _audio.bossHit.load(); _audio.bossHit.play(); }
    _boss.invisible=1;
  }

  if(window.detectcollision(_player,_computer)&&_player.invisible==0){
    hp--;
    _playerText.value="-25 punktów\nz zachowania";
    _player.invisible=1;
    if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
  } if(window.detectcollision(_player,_keyboard)&&_player.invisible==0){
    hp--;
    _playerText.value="-25 punktów\nz zachowania";
    _player.invisible=1;
    if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
  } if(window.detectcollision(_player,_coffe)&&_player.invisible==0){
    hp--;
    _playerText.value="-25 punktów\nz zachowania";
    _player.invisible=1;
    if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
  } if(window.detectcollision(_player,_dove)&&_player.invisible==0){
    hp--;
    _playerText.value="-25 punktów\nz zachowania";
    _player.invisible=1;
    if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
  }
}

handleattacks=function(){
  _tebulinek.unused=true;
  _computer.unused=true;
  _keyboard.unused=true;
  _coffe.unused=true;
  _dove.unused=true;
  _boss.random=Math.floor(Math.random()*5);
  switch(_boss.random){
    case 0:
      _tebulinek.x=_boss.x;
      _tebulinek.y=_boss.y+_boss.height;
      _tebulinek.vy=0;
      _tebulinek.timer=0;
      _tebulinek.unused=false;
      break;
    case 1:
      _computer.x=_boss.x;
      _computer.y=_boss.y+_boss.height;
      _computer.vy=0;
      _computer.timer=0;
      _computer.unused=false;
      break;
    case 2:
      _keyboard.x=_boss.x;
      _keyboard.y=_boss.y+_boss.height;
      _keyboard.vy=0;
      _keyboard.timer=0;
      _keyboard.unused=false;
      break;
    case 3:
      _coffe.x=_boss.x;
      _coffe.y=_boss.y+_boss.height;
      _coffe.vy=0;
      _coffe.timer=0;
      _coffe.unused=false;
      break;
    case 4:
      _dove.x=_boss.x;
      _dove.y=_boss.y+_boss.height;
      _dove.vy=0;
      _dove.timer=0;
      _dove.unused=false;
      break;
  }
}
