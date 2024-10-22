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
  _context.drawShortImage(_player.img,_player);

  // _context.fillShortRect(_platform.color,_platform);

  _context.fillShortRect(_spike.color,_spike);

  _playerTop.width=36*scale;
  _playerTop.height=12*scale;
  _playerTop.x=_player.x+16*scale+_player.vx;
  _playerTop.y=_player.y+_player.vy;
  _playerBottom.width=36*scale;
  _playerBottom.height=12*scale;
  _playerBottom.x=_player.x+16*scale+_player.vx;
  _playerBottom.y=_player.y+84*scale+_player.vy;
  _playerLeft.width=12*scale;
  _playerLeft.height=96*scale;
  _playerLeft.x=_player.x+_player.vx;
  _playerLeft.y=_player.y+_player.vy;
  _playerRight.width=12*scale;
  _playerRight.height=96*scale;
  _playerRight.x=_player.x+84*scale+_player.vx;
  _playerRight.y=_player.y+_player.vy;

  if(!pauseOn&&hp!=0){ _player.checkTimer+=1; }
  if(_player.checkTimer>=4){ _player.checked=false; }

  if(_player.side==0){ _player.vx=0; }
  if(_player.side==1){ _player.vx=4*scale; }
  if(_player.side==2){ _player.vx=-4*scale; }

  if(!pauseOn){
    _player.y+=_player.vy;
    _player.x+=_player.vx;
    _player.vy+=_player.gravity;
  }

  window.generatelevel();
  _platform.currentlenght=0;

  while(_platform.lenght>=_platform.currentlenght){
    _currentPlatform=_platform.array[_platform.currentlenght];
    _context.fillShortRect(_currentPlatform.color,_currentPlatform);

    if(window.detectcollision(_currentPlatform,_playerTop)&&!_player.touched){
      _player.vy=8*scale;
      _player.touched=true;
    } if(window.detectcollision(_currentPlatform,_playerBottom)&&!_player.touched){
      _player.vy=0;
      _player.touched=true;
    } if(window.detectcollision(_currentPlatform,_playerLeft)&&!_player.touched){
      _player.side=1;
      _player.touched=true;
    } if(window.detectcollision(_currentPlatform,_playerRight)&&!_player.touched){
      _player.side=2;
      _player.touched=true;
    }

    _platform.currentlenght+=1;
    _player.touched=false;
  }

  if(_player.checkTimer>=4){
    if(window.detectcollision(_platform,_playerBottom)){
      _player.grounded=true;
      _player.checked=true;
      _player.jumped=false;
      _player.checktimer=0;
    } else if(!window.detectcollision(_platform,_playerBottom)){
      _player.grounded=false;
      _player.checked=false;
      _player.checktimer=0;
    }
  }

  if(window.detectcollision(_spike,_player)){ hp=0; _player.side=0; }

  if(_player.x<=0){
    _player.side=1;
  } if(_player.x>=_currentResolution.width-_player.width){
    _player.side=2;
  }

  if(_player.y-_player.height>=_currentResolution.height){ hp=0; _player.side=0; }
}
