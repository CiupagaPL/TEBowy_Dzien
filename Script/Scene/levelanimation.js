/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

drawplayer=function(){
  if(_player.invisible==0||_player.hp==0){
    if(skin==0&&!_player.left){ _context.drawShortImage(_player.img0,_player); }
    if(skin==1&&!_player.left){ _context.drawShortImage(_player.img1,_player); }
    if(skin==2&&!_player.left){ _context.drawShortImage(_player.img2,_player); }
    if(skin==3&&!_player.left){ _context.drawShortImage(_player.img3,_player); }
    if(skin==0&&_player.left){ _context.drawShortImage(_player.img0left,_player); }
    if(skin==1&&_player.left){ _context.drawShortImage(_player.img1left,_player); }
    if(skin==2&&_player.left){ _context.drawShortImage(_player.img2left,_player); }
    if(skin==3&&_player.left){ _context.drawShortImage(_player.img3left,_player); }
  } if(_player.invisible!=0){
    if(!pauseOn&&hp!=0){ _player.invisible++; }
    if(_player.invisible%2==0||pauseOn){
      if(skin==0&&!_player.left){ _context.drawShortImage(_player.img0,_player); }
      if(skin==1&&!_player.left){ _context.drawShortImage(_player.img1,_player); }
      if(skin==2&&!_player.left){ _context.drawShortImage(_player.img2,_player); }
      if(skin==3&&!_player.left){ _context.drawShortImage(_player.img3,_player); }
      if(skin==0&&_player.left){ _context.drawShortImage(_player.img0left,_player); }
      if(skin==1&&_player.left){ _context.drawShortImage(_player.img1left,_player); }
      if(skin==2&&_player.left){ _context.drawShortImage(_player.img2left,_player); }
      if(skin==3&&_player.left){ _context.drawShortImage(_player.img3left,_player); }
    } if(_player.invisible>=_player.max){
      _player.invisible=0;
    }
  }
}

drawplayertext=function(){
  _playerText.x=_player.x-2*scale;
  _playerText.y=_player.y-12*scale;
  if(_player.invisible>=1&&_player.invisible<30&&hp!=0){
    _context.fillShortText(_playerText.color0,_playerText);
  } if(_player.invisible>=30&&_player.invisible<35&&hp!=0){
    _context.fillShortText(_playerText.color1,_playerText);
  } if(_player.invisible>=35&&_player.invisible<40&&hp!=0){
    _context.fillShortText(_playerText.color2,_playerText);
  } if(_player.invisible>=40&&_player.invisible<45&&hp!=0){
    _context.fillShortText(_playerText.color3,_playerText);
  }
}

drawlight=function(){
  if(_laser.timer>=_laser.max-20&&_laser.timer<_laser.max){
    _context.fillShortRect(_light.color2,_currentLight);
  } if(_laser.timer>=_laser.max&&_laser.timer<_laser.max+5){
    _context.fillShortRect(_light.color1,_currentLight);
  } if(_laser.timer>=_laser.max+5&&_laser.timer<_laser.max+15){
    _context.fillShortRect(_light.color0,_currentLight);
  } if(_laser.timer>=_laser.max+15&&_laser.timer<_laser.max+20){
    _context.fillShortRect(_light.color1,_currentLight);
  } if(_laser.timer>=_laser.max+20&&_laser.timer<_laser.max+25){
    _context.fillShortRect(_light.color2,_currentLight);
  }
}

drawattack=function(_object){
  if(!pauseOn&&hp!=0){ _object.timer++; }
  
  if(_object.timer<10){
    _context.drawShortImage(_object.img0,_object);
  } if(_object.timer>=10&&_object.timer<20){
    _context.drawShortImage(_object.img1,_object);
  } if(_object.timer>=20&&_object.timer<30){
    _context.drawShortImage(_object.img2,_object);
  } if(_object.timer>=30&&_object.timer<40){
    _context.drawShortImage(_object.img3,_object);
  } if(_object.timer>=40){ _context.drawShortImage(_object.img0,_object); _object.timer=0; }
}

drawboss=function(){
  if(_boss.invisible==0||bossHp==0){
    if(_boss.left){
      _context.drawShortImage(_boss.img1,_boss);
    } else if(!_boss.left){
      _context.drawShortImage(_boss.img0,_boss);
    }
  } if(_boss.invisible!=0){
    if(!pauseOn&&hp!=0){ _boss.invisible++; }
    if(_boss.invisible%2==0||pauseOn){
      if(_boss.left){
        _context.drawShortImage(_boss.img1,_boss);
      } else if(!_boss.left){
        _context.drawShortImage(_boss.img0,_boss);
      }
    } if(_boss.invisible>=_boss.max){
      _boss.invisible=0;
    }
  }
}

drawplayer=function(){
  if(_player.invisible==0||_player.hp==0){
    if(skin==0&&!_player.left){ _context.drawShortImage(_player.img0,_player); }
    if(skin==1&&!_player.left){ _context.drawShortImage(_player.img1,_player); }
    if(skin==2&&!_player.left){ _context.drawShortImage(_player.img2,_player); }
    if(skin==3&&!_player.left){ _context.drawShortImage(_player.img3,_player); }
    if(skin==0&&_player.left){ _context.drawShortImage(_player.img0left,_player); }
    if(skin==1&&_player.left){ _context.drawShortImage(_player.img1left,_player); }
    if(skin==2&&_player.left){ _context.drawShortImage(_player.img2left,_player); }
    if(skin==3&&_player.left){ _context.drawShortImage(_player.img3left,_player); }
  } if(_player.invisible!=0){
    if(!pauseOn&&hp!=0){ _player.invisible++; }
    if(_player.invisible%2==0||pauseOn){
      if(skin==0&&!_player.left){ _context.drawShortImage(_player.img0,_player); }
      if(skin==1&&!_player.left){ _context.drawShortImage(_player.img1,_player); }
      if(skin==2&&!_player.left){ _context.drawShortImage(_player.img2,_player); }
      if(skin==3&&!_player.left){ _context.drawShortImage(_player.img3,_player); }
      if(skin==0&&_player.left){ _context.drawShortImage(_player.img0left,_player); }
      if(skin==1&&_player.left){ _context.drawShortImage(_player.img1left,_player); }
      if(skin==2&&_player.left){ _context.drawShortImage(_player.img2left,_player); }
      if(skin==3&&_player.left){ _context.drawShortImage(_player.img3left,_player); }
    } if(_player.invisible>=_player.max){
      _player.invisible=0;
    }
  }
}
