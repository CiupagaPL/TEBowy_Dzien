/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

handleplayer=function(){
  _playerLeft.x=_player.x+_player.vx;
  _playerLeft.y=_player.y+8*scale+_player.vy;
  _playerRight.x=_player.x+44*scale+_player.vx;
  _playerRight.y=_player.y+8*scale+_player.vy;
  _playerTop.x=_player.x+4*scale+_player.vx;
  _playerTop.y=_player.y+_player.vy;
  _playerBottom.x=_player.x+4*scale+_player.vx;

  if(_player.skin==0||_player.skin==2){
    _player.height=81*scale;
    _playerLeft.height=69*scale;
    _playerRight.height=69*scale;
    _playerBottom.y=_player.y+81*scale+_player.vy;
  } else if(_player.skin==1||_player.skin==3){
    _player.height=75*scale;
    _playerLeft.height=63*scale;
    _playerRight.height=63*scale;
    _playerBottom.y=_player.y+75*scale+_player.vy;
  }

  window.generatelevel();
  _platform.currentLenght=0;
  _corner.currentLenght=0;
  _laser.currentLenght=0;
  _light.currentLenght=0;
  _spike.currentLenght=0;
  _sign.currentLenght=0;

  while(_laser.lenght>=_laser.currentLenght){
    _currentLaser=_laser.array[_laser.currentLenght];
    if(_currentLaser.left){ _context.drawShortImage(_laser.img1,_currentLaser); }
    else if(!_currentLaser.left){ _context.drawShortImage(_laser.img0,_currentLaser); }

    _currentLaser.y+=globalMove;
    _currentLaser.x+=localMove;

    _laser.currentLenght+=1;
  }

  if(!pause&&_player.hp>0){ _laser.timer++; }

  if(_laser.timer>=_laser.max&&_laser.timer<_laser.max+1&&!pause&&_player.hp>0&&sfxOn&&!boss&&!defeat){
    _audio.laser.load();
    _audio.laser.play();
  } if(_laser.timer>=_laser.max+25){ _laser.timer=0; }

  drawplayer();

  if(!pause&&_player.hp>0){
    _player.y+=_player.vy;
    if(_player.cloud){ _playerCloud.y+=_player.vy; }
    if(boss&&sceneTimer>=99){ _playerGun.y+=_player.vy }

    if(!_player.cloud){ _player.vy+=_player.gravity; }

    if(!_player.grounded&&!_player.cloud&&!boss){ _player.y+=globalMove; }

    _player.x+=localMove;
    _player.x+=_player.vx;
    if(_player.cloud){ _playerCloud.x+=_player.vx; }
    if(boss&&sceneTimer>=99){ _playerGun.x+=_player.vx; }
  }

  while(_platform.lenght>=_platform.currentLenght){
    _currentPlatform=_platform.array[_platform.currentLenght];
    _context.drawShortImage(_platform.img,_currentPlatform);

    _currentPlatform.y+=globalMove;
    _currentPlatform.x+=localMove;

    _background.y+=globalMove/64;
    _backgroundTop.y+=globalMove/64;

    if(window.detectcollision(_currentPlatform,_playerTop)&&!_player.touched){
      _player.fly=true;
      _player.touched=true;
      if(_player.upTimer<12){ _player.y=_currentPlatform.y+8*scale; }
    }
    if(window.detectcollision(_currentPlatform,_playerBottom)&&!_player.touched){
      if(_player.y<=_currentPlatform.y){ score=_currentPlatform.level+1; }

      if(!_player.cloud){ _player.y=_currentPlatform.y-_player.height; }
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

    _platform.currentLenght+=1;
  }

  while(_corner.lenght>=_corner.currentLenght){
    _currentCorner=_corner.array[_corner.currentLenght];
    if(_currentCorner.left){ _context.drawShortImage(_corner.img0,_currentCorner); }
    else if(!_currentCorner.left){ _context.drawShortImage(_corner.img1,_currentCorner); }

    _currentCorner.y+=globalMove;
    _currentCorner.x+=localMove;

    _corner.currentLenght+=1;
  }

  while(_light.lenght>=_light.currentLenght){
    _currentLight=_light.array[_light.currentLenght];

    drawlight();

    if(window.detectcollision(_currentLight,_player)&&_player.invisible==0&&!boss&&_laser.timer>=_laser.max&&!_player.touched){ 
      _player.hp-=25;
      _playerText.value="-25 punktów\nz zachowania";
      if(_player.hp>0){ _player.invisible=1; }
      _player.touched=true;
      if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
    }

    _currentLight.y+=globalMove;
    _currentLight.x+=localMove;

    _light.currentLenght+=1;
  }

  while(_spike.lenght>=_spike.currentLenght){
    _currentSpike=_spike.array[_spike.currentLenght];
    _context.drawShortImage(_spike.img,_currentSpike);

    if(window.detectcollision(_currentSpike,_player)&&_player.invisible==0&&!boss){
      _player.hp-=25;
      _playerText.value="-25 punktów\nz zachowania";
      if(_player.hp>0){ _player.invisible=1; }
      if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
    }

    _currentSpike.y+=globalMove;
    _currentSpike.x+=localMove;

    _spike.currentLenght+=1;
  }

  while(_sign.lenght>=_sign.currentLenght){
    _currentSign=_sign.array[_sign.currentLenght];
    if(_currentSign.boss){ _context.drawShortImage(_sign.img1,_currentSign); }
    else if(!_currentSign.boss){ _context.drawShortImage(_sign.img0,_currentSign); }

    _currentSign.y+=globalMove;
    _currentSign.x+=localMove;

    _sign.currentLenght+=1;
  }

  if(addonOn){ drawplayertext(); }

  if(!pause&&_player.hp>0&&_player.y<_currentResolution.height*3/8&&_platform.array[_platform.lenght].y+3*scale<0){ globalMove=+3*scale; }
  if(!pause&&_player.hp>0&&_player.y+_player.height>_currentResolution.height-12*scale){ globalMove=-3*scale; }
  else if(pause||_player._playerhp==0||_player.y>=_currentResolution.height*3/8||_player.y>=_currentResolution.height||_platform.array[_platform.lenght].y+3*scale>0){ globalMove=0; }

  if(_player.cloud&&!pause&&_player.hp>0){
    if(_player.x+_player.width>=_render.width*4/5){ _player.x-=4*scale; if(_player.cloud){ _playerCloud.x-=4*scale; } if(boss&&sceneTimer>=99){ _playerGun.x-=4*scale; } }
    if(_player.y<=_render.height*1/16){ _player.y+=4*scale; if(_player.cloud){ _playerCloud.y+=4*scale; } if(boss&&sceneTimer>=99){ _playerGun.y+=4*scale; } }
    if(_player.y+_player.height>=_render.height*15/16){ _player.y-=4*scale; if(_player.cloud){ _playerCloud.y-=4*scale; } if(boss&&sceneTimer>=99){ _playerGun.y-=4*scale; } }
  }
  if(_player.x<=0){ _player.x+=4*scale; if(_player.cloud){ _playerCloud.x+=4*scale; } if(boss&&sceneTimer>=99){ _playerGun.x+=4*scale; } }
  if(_player.x>=_currentResolution.width-_player.width&&score!=_platform.load+1||
     _player.x>=_currentResolution.width-_player.width&&boss){ _player.x-=4*scale; if(_player.cloud){ _playerCloud.x-=4*scale; } if(boss&&sceneTimer>=99){ _playerGun.x-=4*scale; } }
  if(_player.x>=_currentResolution.width&&score==_platform.load+1&&!boss){
    localMove-=_render.width;
    globalMove=0;
    _platform.array[_platform.lenght-1].y=_render.height-_platform.height;
    _player.y=_platform.array[_platform.lenght-1].y-_player.height;
    boss=true;
  } else if(_player.x<_currentResolution.width&&score==_platform.load+1&&boss){ localMove=0; }

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
