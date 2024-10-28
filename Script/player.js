/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

handlePlayer=function(){
  drawplayer();

  _playerLeft.x=_player.x+_player.vx;
  _playerLeft.y=_player.y+8*scale+_player.vy;
  _playerRight.x=_player.x+44*scale+_player.vx;
  _playerRight.y=_player.y+8*scale+_player.vy;
  _playerTop.x=_player.x+4*scale+_player.vx;
  _playerTop.y=_player.y+_player.vy;
  _playerBottom.x=_player.x+4*scale+_player.vx;
  _playerBottom.y=_player.y+81*scale+_player.vy;

  if(!pauseOn&&hp!=0){
    _player.y+=_player.vy;
    if(!_player.grounded){ _player.y+=globalMove; }
    _player.x+=localMove;
    _player.x+=_player.vx;
    _player.vy+=_player.gravity;
  }

  window.generatelevel();
  _platform.currentlenght=0;
  _corner.currentlenght=0;
  _laser.currentlenght=0;
  _light.currentlenght=0;
  _spike.currentlenght=0;
  _sign.currentlenght=0;

  while(_platform.lenght>=_platform.currentlenght){
    _currentPlatform=_platform.array[_platform.currentlenght];
    _context.drawShortImage(_platform.img,_currentPlatform);

    _currentPlatform.y+=globalMove;
    _currentPlatform.x+=localMove;

    if(window.detectcollision(_currentPlatform,_playerTop)&&!_player.touched){
      _player.fly=true;
      _player.touched=true;
      if(_player.upTimer<12){ _player.y=_currentPlatform.y+8*scale; }
    }
    if(window.detectcollision(_currentPlatform,_playerBottom)&&!_player.touched){
      if(_player.y<=_currentPlatform.y){ score=_currentPlatform.level+1; }

      _player.y=_currentPlatform.y-_player.height;
      _player.vy=globalMove;
      _player.touched=true;
    } if(window.detectcollision(_currentPlatform,_playerLeft)&&!_player.touched){
      _player.x+=4*scale;
      _player.touched=true;
    } if(window.detectcollision(_currentPlatform,_playerRight)&&!_player.touched){
      _player.x-=4*scale;
      _player.touched=true;
    }

    if(window.detectcollision(_currentPlatform,_playerBottom)){ _player.active=true; }

    _platform.currentlenght+=1;
  }

  while(_corner.lenght>=_corner.currentlenght){
    _currentCorner=_corner.array[_corner.currentlenght];
    if(_currentCorner.left){ _context.drawShortImage(_corner.img0,_currentCorner); }
    else if(!_currentCorner.left){ _context.drawShortImage(_corner.img1,_currentCorner); }

    _currentCorner.y+=globalMove;
    _currentCorner.x+=localMove;

    _corner.currentlenght+=1;
  }

  while(_sign.lenght>=_sign.currentlenght){
    _currentSign=_sign.array[_sign.currentlenght];
    if(_currentSign.boss){ _context.drawShortImage(_sign.img1,_currentSign); }
    else if(!_currentSign.boss){ _context.drawShortImage(_sign.img0,_currentSign); }

    _currentSign.y+=globalMove;
    _currentSign.x+=localMove;

    _sign.currentlenght+=1;
  }

  while(_laser.lenght>=_laser.currentlenght){
    _currentLaser=_laser.array[_laser.currentlenght];
    if(_currentLaser.left){ _context.drawShortImage(_laser.img1,_currentLaser); }
    else if(!_currentLaser.left){ _context.drawShortImage(_laser.img0,_currentLaser); }

    _currentLaser.y+=globalMove;
    _currentLaser.x+=localMove;

    if(!pauseOn&&hp!=0){ _laser.timer=_laser.timer+1/_laser.lenght; }

    if(_laser.timer>=_laser.max&&_laser.timer<_laser.max+3&&!pauseOn&&hp!=0&&sfxOn){ _audio.laser.play(); }
    if(_laser.timer>=_laser.max+20){ _laser.timer=0; }

    _laser.currentlenght+=1;
  }

  while(_light.lenght>=_light.currentlenght){
    _currentLight=_light.array[_light.currentlenght];
    if(_laser.timer>=_laser.max){
      _context.fillShortRect(_light.color,_currentLight);

      if(window.detectcollision(_currentLight,_player)&&_player.invisible==0&&!_player.touched){ 
        hp-=2;
        _player.invisible=1;
        _player.touched=true;
        if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
      }
    }

    _currentLight.y+=globalMove;
    _currentLight.x+=localMove;

    _light.currentlenght+=1;
  }

  while(_spike.lenght>=_spike.currentlenght){
    _currentSpike=_spike.array[_spike.currentlenght];
    _context.drawShortImage(_spike.img,_currentSpike);

    if(window.detectcollision(_currentSpike,_player)&&_player.invisible==0){
      hp-=1;
      _player.invisible=1;
      if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
    }

    _currentSpike.y+=globalMove;
    _currentSpike.x+=localMove;

    _spike.currentlenght+=1;
  }

  if(!pauseOn&&_player.hp!=0&&_player.y<_currentResolution.height*3/8){ globalMove=+3*scale; }
  if(!pauseOn&&_player.hp!=0&&_player.y+_player.height>_currentResolution.height-12*scale){ globalMove=-3*scale; }
  else if(pauseOn||_player.hp==0||_player.y>=_currentResolution.height*3/8||_player.y>=_currentResolution.height){ globalMove=0; }

  if(_player.x<=0){ _player.x+=4*scale; }
  if(_player.x>=_currentResolution.width-_player.width&&score!=14||_player.x>=_currentResolution.width-_player.width&&boss){ _player.x-=4*scale; }
  if(_player.x>=_currentResolution.width&&score==14&&!boss){ localMove-=_render.width; _currentPlatform.y=_render.height-_platform.height; _player.y=_currentPlatform.y-_player.height; boss=true; }
  else if(_player.x<_currentResolution.width&&score==14&&boss){ localMove=0; }

  if(_player.active){
    _player.grounded=true;
    _player.upTimer=0;
    _player.gravity=0.5*scale;
    _player.jumped=false;
  } else if(!_player.active){
    _player.grounded=false;
  } if(_player.fly){
    _player.upTimer++;
    if(_player.upTimer<12){
      _player.gravity=0;
      _player.vy=0;
    } if(_player.upTimer>=12){
      _player.gravity=0.5*scale;
    }
  } else if(!_player.fly){
    _player.upTimer=0;
    _player.gravity=0.5*scale;
  }

  _player.active=false;
  _player.fly=false;
  _player.touched=false;
}
