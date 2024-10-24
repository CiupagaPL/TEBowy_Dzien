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

  // _context.fillShortRect(_playerTop.color,_playerTop);
  // _context.fillShortRect(_playerBottom.color,_playerBottom);
  // _context.fillShortRect(_playerLeft.color,_playerLeft);
  // _context.fillShortRect(_playerRight.color,_playerRight);
  // _context.fillShortRect(_playerCheckTop.color,_playerCheckTop);
  // _context.fillShortRect(_playerCheckBottom.color,_playerCheckBottom);

  _playerTop.x=_player.x+12*scale+_player.vx;
  _playerTop.y=_player.y+_player.vy;
  _playerBottom.x=_player.x+12*scale+_player.vx;
  _playerBottom.y=_player.y+69*scale+_player.vy;
  _playerLeft.x=_player.x+_player.vx;
  _playerLeft.y=_player.y+_player.vy;
  _playerRight.x=_player.x+36*scale+_player.vx;
  _playerRight.y=_player.y+_player.vy;
  _playerCheckTop.x=_player.x+12*scale+_player.vx;
  _playerCheckTop.y=_player.y-4*scale+_player.vy;
  _playerCheckBottom.x=_player.x+12*scale+_player.vx;
  _playerCheckBottom.y=_player.y+65*scale+_player.vy;

  if(!pauseOn&&hp!=0){ _player.checkTimer+=1; }
  if(_player.checkTimer>=4){ _player.checked=false; }

  if(!pauseOn&&_player.hp!=0&&_player.y<_currentResolution.height*3/8){ globalMove=3*scale; }
  if(!pauseOn&&_player.hp!=0&&_player.y+_player.height-3*scale>_currentResolution.height){ globalMove=-3*scale; }
  else if(pauseOn||_player.hp==0||_player.y>=_currentResolution.height*3/8||_player.y>=_currentResolution.height){ globalMove=0; }

  if(!pauseOn&&hp!=0){
    _player.y+=_player.vy;
    _player.x+=_player.vx;
    _player.vy+=_player.gravity+globalMove/8;
  }

  window.generatelevel();
  _platform.currentlenght=0;
  _corner.currentlenght=0;
  _spike.currentlenght=0;

  while(_platform.lenght>=_platform.currentlenght){
    _currentPlatform=_platform.array[_platform.currentlenght];
    _context.drawShortImage(_platform.img,_currentPlatform);

    _currentPlatform.y+=globalMove;

    if(window.detectcollision(_currentPlatform,_playerCheckTop)&&!_player.touched){
      _player.upTimer++;
      if(_player.upTimer<20){
        _player.vy=globalMove;
        _player.y=_currentPlatform.y+_platform.height;
      } else if(_player.upTimer>=20){
        _player.vy=globalMove+_player.vy;
      }
      _player.touched=true;
    } if(window.detectcollision(_currentPlatform,_playerBottom)&&!_player.touched){
      if(_player.y<=_currentPlatform.y&&_currentPlatform.level+1>score){ score+=1; }

      _player.vy=globalMove;
      _player.touched=true;
    } if(window.detectcollision(_currentPlatform,_playerLeft)&&!_player.touched){
      _player.x+=4*scale;
      _player.touched=true;
    } if(window.detectcollision(_currentPlatform,_playerRight)&&!_player.touched){
      _player.x-=4*scale;
      _player.touched=true;
    }

    if(_player.checkTimer>=4&&window.detectcollision(_currentPlatform,_playerCheckBottom)){ _player.stay=true; }

    _platform.currentlenght+=1;
    _player.touched=false;
  }

  while(_corner.lenght>=_corner.currentlenght){
    _currentCorner=_corner.array[_corner.currentlenght];
    if(_currentCorner.left){ _context.drawShortImage(_corner.img0,_currentCorner); }
    else if(!_currentCorner.left){ _context.drawShortImage(_corner.img1,_currentCorner); }

    _currentCorner.y+=globalMove;

    _corner.currentlenght+=1;
  }

  while(_spike.lenght>=_spike.currentlenght){
    _currentSpike=_spike.array[_spike.currentlenght];
    _context.drawShortImage(_spike.img,_currentSpike);

    if(window.detectcollision(_currentSpike,_player)&&_player.invisible==0){ hp-=1; _player.invisible=1; }

    _currentSpike.y+=globalMove;

    _spike.currentlenght+=1;
  }

  if(window.detectcollision(_tebulinek,_player)&&_player.invisible==0){ hp-=1; _player.invisible=1; }

  if(_player.x<=0){ _player.x+=4*scale; }
  if(_player.x>=_currentResolution.width-_player.width){ _player.x-=4*scale; }

  if(_player.checkTimer>=4){
    if(_player.stay){
      _player.grounded=true;
      _player.checked=true;
      _player.jumped=false;
      _player.upTimer=0;
    } else if(!_player.stay){
      _player.grounded=false;
      _player.checked=false;
    }
    _player.stay=false;
    _player.checkTimer=0;
  }
}
