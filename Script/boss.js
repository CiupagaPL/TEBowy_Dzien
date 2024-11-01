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

  if(!pauseOn&&hp!=0){
    _tebulinek.y+=_tebulinek.vy;
    if(_tebulinek.side==0){ _tebulinek.vy+=_tebulinek.gravity; }
    else if(_tebulinek.side!=0){ _tebulinek.vy+=_tebulinek.gravity/2; }
    _tebulinek.x+=_tebulinek.vx;
    if(_tebulinek.side==0){ _tebulinek.vx=0; }
    if(_tebulinek.side==1){ _tebulinek.vx+=_tebulinek.gravity; }
    if(_tebulinek.side==2){ _tebulinek.vx-=_tebulinek.gravity; }
  } if(!pauseOn&&hp!=0){
    _computer.y+=_computer.vy;
    if(_computer.side==0){ _computer.vy+=_computer.gravity; }
    else if(_computer.side!=0){ _computer.vy+=_computer.gravity/2; }
    _computer.x+=_computer.vx;
    if(_computer.side==0){ _computer.vx=0; }
    if(_computer.side==1){ _computer.vx+=_computer.gravity; }
    if(_computer.side==2){ _computer.vx-=_computer.gravity; }
  } if(!pauseOn&&hp!=0){
    _keyboard.y+=_keyboard.vy;
    if(_keyboard.side==0){ _keyboard.vy+=_keyboard.gravity; }
    else if(_keyboard.side!=0){ _keyboard.vy+=_keyboard.gravity/2; }
    _keyboard.x+=_keyboard.vx;
    if(_keyboard.side==0){ _keyboard.vx=0; }
    if(_keyboard.side==1){ _keyboard.vx+=_keyboard.gravity; }
    if(_keyboard.side==2){ _keyboard.vx-=_keyboard.gravity; }
  } if(!pauseOn&&hp!=0){
    _coffe.y+=_coffe.vy;
    if(_coffe.side==0){ _coffe.vy+=_coffe.gravity; }
    else if(_coffe.side!=0){ _coffe.vy+=_coffe.gravity/2; }
    _coffe.x+=_coffe.vx;
    if(_coffe.side==0){ _coffe.vx=0; }
    if(_coffe.side==1){ _coffe.vx+=_coffe.gravity; }
    if(_coffe.side==2){ _coffe.vx-=_coffe.gravity; }
  } if(!pauseOn&&hp!=0){
    _dove.y+=_dove.vy;
    if(_dove.side==0){ _dove.vy+=_dove.gravity; }
    else if(_dove.side!=0){ _dove.vy+=_dove.gravity/2; }
    _dove.x+=_dove.vx;
    if(_dove.side==0){ _dove.vx=0; }
    if(_dove.side==1){ _dove.vx+=_dove.gravity; }
    if(_dove.side==2){ _dove.vx-=_dove.gravity; }
  }

  if(!pauseOn&&hp!=0){
    if(sceneTimer>=60&&sceneTimer<61&&sfxOn){
      _audio.bossStart.load();
      _audio.bossStart.play();
    } if(sceneTimer>=60&&sceneTimer<89){
      _boss.y+=6*scale;
      _cloud.y+=6*scale;
    } if(sceneTimer>=89&&sceneTimer<90){
      pauseChange=true;
      pauseOn=true;
      teacher=true;
    } if(sceneTimer>=90&&sceneTimer<141){
      teacher=false;
      _boss.x+=5*scale;
      _cloud.x+=5*scale;
      _boss.load=false;
      _boss.left=false;
    } if(sceneTimer>=141&&sceneTimer<170){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
    } if(sceneTimer>=170&&sceneTimer<221){
      _boss.x+=5*scale;
      _cloud.x+=5*scale;
      _boss.load=false;
      _boss.left=false;
    } if(sceneTimer>=221&&sceneTimer<250){
      if(!_boss.load){
        handleattacks();
        if(!_cloud.attack){
          _cloud.random=Math.floor(Math.random()*4);
          if(_cloud.random==0){ _cloud.attack=true; }
        } else if(_cloud.attack){ _cloud.attack=false; _cloud.timer=0; }
      } _boss.load=true;
    } if(sceneTimer>=250&&sceneTimer<301){
      _boss.x-=5*scale;
      _cloud.x-=5*scale;
      _boss.load=false;
      _boss.left=true;
    } if(sceneTimer>=301&&sceneTimer<330){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
    } if(sceneTimer>=330&&sceneTimer<381){
      _boss.x-=5*scale;
      _cloud.x-=5*scale;
      _boss.load=false;
      _boss.left=true;
    } if(sceneTimer>=381&&sceneTimer<410){
      if(!_boss.load){
        handleattacks();
        if(!_cloud.attack){
          _cloud.random=Math.floor(Math.random()*4);
          if(_cloud.random==0){ _cloud.attack=true; }
        } else if(_cloud.attack){ _cloud.attack=false; _cloud.timer=0; }
      } _boss.load=true;
    } if(sceneTimer>=410&&sceneTimer<440){ _boss.x+=5*scale; _cloud.x+=5*scale; sceneTimer=90; }
    if(sceneTimer>=440&&sceneTimer<470){
      _boss.y-=6*scale;
      _cloud.y-=6*scale;
      _lightning.unused=true;
    } if(sceneTimer>=470){ boss=false; defeat=true; }
  }

  if(_lightning.unused){ _lightning.x=-_lightning.width; _lightning.y=-_lightning.height; }

  drawattack(_computer);
  drawattack(_keyboard);
  drawattack(_coffe);
  drawattack(_dove);
  drawattack(_tebulinek);
  drawboss();
  drawbosstext();
  drawcloud();

  if(window.detectcollision(_player,_lightning)&&_player.invisible==0){
    hp--;
    _playerText.value="-25 punktów\nz zachowania";
    _player.invisible=1;
    if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
  }

  if(window.detectcollision(_player,_tebulinek)&&_boss.invisible==0){
    bossHp-=2;
    _bossText.value="-50 punktów\nz zachowania";
    if(sfxOn&&bossHp!=0){ _audio.bossHit.load(); _audio.bossHit.play(); }
    if(sfxOn&&bossHp==0){ _audio.bossDie.load(); _audio.bossDie.play(); }
    if(bossHp>0){ _boss.invisible=1; }
    if(bossHp<=0){ sceneTimer=440; }
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
  _boss.random1=Math.floor(Math.random()*5);
  switch(_boss.random1){
    case 0:
      _tebulinek.x=_cloud.x+_cloud.width/2-_tebulinek.width/2;
      _tebulinek.y=_cloud.y+4*scale;
      _tebulinek.vy=0;
      _tebulinek.vx=0;
      _tebulinek.side=0;
      _tebulinek.timer=0;
      break;
    case 1:
      _computer.x=_cloud.x+_cloud.width/2-_computer.width/2;
      _computer.y=_cloud.y+4*scale;
      _computer.vy=0;
      _computer.vx=0;
      _computer.side=0;
      _computer.timer=0;
      break;
    case 2:
      _keyboard.x=_cloud.x+_cloud.width/2-_keyboard.width/2;
      _keyboard.y=_cloud.y+4*scale;
      _keyboard.vy=0;
      _keyboard.vx=0;
      _keyboard.side=0;
      _keyboard.timer=0;
      break;
    case 3:
      _coffe.x=_cloud.x+_cloud.width/2-_coffe.width/2;
      _coffe.y=_cloud.y+4*scale;
      _coffe.vy=0;
      _coffe.vx=0;
      _coffe.side=0;
      _coffe.timer=0;
      break;
    case 4:
      _dove.x=_cloud.x+_cloud.width/2-_dove.width/2;
      _dove.y=_cloud.y+4*scale;
      _dove.vy=0;
      _dove.vx=0;
      _dove.side=0;
      _dove.timer=0;
      break;
  } while(_boss.random2==_boss.random1){ _boss.random2=Math.floor(Math.random()*5); }
  if(sceneTimer<220||sceneTimer>250){
    switch(_boss.random2){
      case 0:
        _tebulinek.x=_cloud.x+_cloud.width/2-_tebulinek.width/2;
        _tebulinek.y=_cloud.y+4*scale;
        _tebulinek.vy=0;
        _tebulinek.vx=0;
        _tebulinek.side=1;
        _tebulinek.timer=0;
        break;
      case 1:
        _computer.x=_cloud.x+_cloud.width/2-_computer.width/2;
        _computer.y=_cloud.y+4*scale;
        _computer.vy=0;
        _computer.vx=0;
        _computer.side=1;
        _computer.timer=0;
        break;
      case 2:
        _keyboard.x=_cloud.x+_cloud.width/2-_keyboard.width/2;
        _keyboard.y=_cloud.y+4*scale;
        _keyboard.vy=0;
        _keyboard.vx=0;
        _keyboard.side=1;
        _keyboard.timer=0;
        break;
      case 3:
        _coffe.x=_cloud.x+_cloud.width/2-_coffe.width/2;
        _coffe.y=_cloud.y+4*scale;
        _coffe.vy=0;
        _coffe.vx=0;
        _coffe.side=1;
        _coffe.timer=0;
        break;
      case 4:
        _dove.x=_cloud.x+_cloud.width/2-_dove.width/2;
        _dove.y=_cloud.y+4*scale;
        _dove.vy=0;
        _dove.vx=0;
        _dove.side=1;
        _dove.timer=0;
        break;
    }
  } while(_boss.random3==_boss.random1||_boss.random3==_boss.random2){ _boss.random3=Math.floor(Math.random()*5); }
  if(sceneTimer<380||sceneTimer>410){
    switch(_boss.random3){
      case 0:
        _tebulinek.x=_cloud.x+_cloud.width/2-_tebulinek.width/2;
        _tebulinek.y=_cloud.y+4*scale;
        _tebulinek.vy=0;
        _tebulinek.vx=0;
        _tebulinek.side=2;
        _tebulinek.timer=0;
        break;
      case 1:
        _computer.x=_cloud.x+_cloud.width/2-_computer.width/2;
        _computer.y=_cloud.y+4*scale;
        _computer.vy=0;
        _computer.vx=0;
        _computer.side=2;
        _computer.timer=0;
        break;
      case 2:
        _keyboard.x=_cloud.x+_cloud.width/2-_keyboard.width/2;
        _keyboard.y=_cloud.y+4*scale;
        _keyboard.vy=0;
        _keyboard.vx=0;
        _keyboard.side=2;
        _keyboard.timer=0;
        break;
      case 3:
        _coffe.x=_cloud.x+_cloud.width/2-_coffe.width/2;
        _coffe.y=_cloud.y+4*scale;
        _coffe.vy=0;
        _coffe.vx=0;
        _coffe.side=2;
        _coffe.timer=0;
        break;
      case 4:
        _dove.x=_cloud.x+_cloud.width/2-_dove.width/2;
        _dove.y=_cloud.y+4*scale;
        _dove.vy=0;
        _dove.vx=0;
        _dove.side=2;
        _dove.timer=0;
        break;
    }
  }
}
