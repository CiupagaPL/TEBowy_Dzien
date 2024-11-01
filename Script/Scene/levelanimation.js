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
    _context.fillShortText(_playerText.color0,_playerText,_playerText.value);
  } if(_player.invisible>=30&&_player.invisible<35&&hp!=0){
    _context.fillShortText(_playerText.color1,_playerText,_playerText.value);
  } if(_player.invisible>=35&&_player.invisible<40&&hp!=0){
    _context.fillShortText(_playerText.color2,_playerText,_playerText.value);
  } if(_player.invisible>=40&&_player.invisible<45&&hp!=0){
    _context.fillShortText(_playerText.color3,_playerText,_playerText.value);
  }
}

drawbosstext=function(){
  _bossText.x=_boss.x+6*scale;
  _bossText.y=_boss.y+52*scale;
  if(_boss.invisible>=1&&_boss.invisible<30&&bossHp!=0){
    _context.fillShortText(_bossText.color0,_bossText,_bossText.value);
  } if(_boss.invisible>=30&&_boss.invisible<35&&bossHp!=0){
    _context.fillShortText(_bossText.color1,_bossText,_bossText.value);
  } if(_boss.invisible>=35&&_boss.invisible<40&&bossHp!=0){
    _context.fillShortText(_bossText.color2,_bossText,_bossText.value);
  } if(_boss.invisible>=40&&_boss.invisible<45&&bossHp!=0){
    _context.fillShortText(_bossText.color3,_bossText,_bossText.value);
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

drawcloud=function(){
  if(_boss.left){
    if(!_cloud.attack){ _context.drawShortImage(_cloud.img0,_cloud); }
    else if(_cloud.attack){
      if(!pauseOn&&hp!=0){ _cloud.timer++; }
      if(_cloud.timer<15){ _context.drawShortImage(_cloud.img0,_cloud); }
      if(_cloud.timer>=15&&_cloud.timer<30){ _context.drawShortImage(_cloud.img1,_cloud); }
      if(_cloud.timer>=30&&_cloud.timer<145){ _context.drawShortImage(_cloud.img2,_cloud); }
      if(_cloud.timer>=145&&_cloud.timer<160){ _context.drawShortImage(_cloud.img1,_cloud); }
      if(_cloud.timer>=160){ _context.drawShortImage(_cloud.img0,_cloud); }

      if(_cloud.timer==30){
        if(sfxOn){ _audio.lightning.load(); _audio.lightning.play(); }
        _lightning.y=_cloud.y+_cloud.height-8*scale;
        _lightning.x=_cloud.width-16*scale+_cloud.x;
        _lightning.unused=false;
      } if(_cloud.timer==50){
        if(sfxOn){ _audio.lightning.load(); _audio.lightning.play(); }
        _lightning.y=_cloud.y+_cloud.height-8*scale;
        _lightning.x=16*scale+_cloud.x;
        _lightning.unused=false;
      } if(_cloud.timer==110){
        if(sfxOn){ _audio.lightning.load(); _audio.lightning.play(); }
        _lightning.y=_cloud.y+_cloud.height-8*scale;
        _lightning.x=16*scale+_cloud.x;
        _lightning.unused=false;
      } if(_cloud.timer==130){
        if(sfxOn){ _audio.lightning.load(); _audio.lightning.play(); }
        _lightning.y=_cloud.y+_cloud.height-8*scale;
        _lightning.x=16*scale+_cloud.x;
        _lightning.unused=false;
      }

      if(bossHp>0){
        if(_cloud.timer>=30&&_cloud.timer<35){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=35&&_cloud.timer<40){ _context.fillShortRect(_lightning.color0,_lightning); }
        if(_cloud.timer>=40&&_cloud.timer<45){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=45&&_cloud.timer<50){ _lightning.unused=true; }
        if(_cloud.timer>=50&&_cloud.timer<55){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=55&&_cloud.timer<60){ _context.fillShortRect(_lightning.color0,_lightning); }
        if(_cloud.timer>=60&&_cloud.timer<65){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=65&&_cloud.timer<110){ _lightning.unused=true; }
        if(_cloud.timer>=110&&_cloud.timer<115){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=115&&_cloud.timer<120){ _context.fillShortRect(_lightning.color0,_lightning); }
        if(_cloud.timer>=120&&_cloud.timer<125){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=125&&_cloud.timer<130){ _lightning.unused=true; }
        if(_cloud.timer>=130&&_cloud.timer<135){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=135&&_cloud.timer<140){ _context.fillShortRect(_lightning.color0,_lightning); }
        if(_cloud.timer>=140&&_cloud.timer<145){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=150){ _lightning.unused=true; }
      }
    }
  } else if(!_boss.left){
    if(!_cloud.attack){ _context.drawShortImage(_cloud.img0left,_cloud); }
    else if(_cloud.attack){
      if(!pauseOn&&hp!=0){ _cloud.timer++; }
      if(_cloud.timer<15){ _context.drawShortImage(_cloud.img0left,_cloud); }
      if(_cloud.timer>=15&&_cloud.timer<30){ _context.drawShortImage(_cloud.img1left,_cloud); }
      if(_cloud.timer>=30&&_cloud.timer<145){ _context.drawShortImage(_cloud.img2left,_cloud); }
      if(_cloud.timer>=145&&_cloud.timer<160){ _context.drawShortImage(_cloud.img1left,_cloud); }
      if(_cloud.timer>=160){ _context.drawShortImage(_cloud.img0left,_cloud); }

      if(_cloud.timer==30){
        if(sfxOn){ _audio.lightning.load(); _audio.lightning.play(); }
        _lightning.y=_cloud.y+_cloud.height-8*scale;
        _lightning.x=16*scale+_cloud.x;
        _lightning.unused=false;
      } if(_cloud.timer==50){
        if(sfxOn){ _audio.lightning.load(); _audio.lightning.play(); }
        _lightning.y=_cloud.y+_cloud.height-8*scale;
        _lightning.x=_cloud.width-16*scale+_cloud.x;
        _lightning.unused=false;
      } if(_cloud.timer==110){
        if(sfxOn){ _audio.lightning.load(); _audio.lightning.play(); }
        _lightning.y=_cloud.y+_cloud.height-8*scale;
        _lightning.x=_cloud.width-16*scale+_cloud.x;
        _lightning.unused=false;
      } if(_cloud.timer==130){
        if(sfxOn){ _audio.lightning.load(); _audio.lightning.play(); }
        _lightning.y=_cloud.y+_cloud.height-8*scale;
        _lightning.x=_cloud.width-16*scale+_cloud.x;
        _lightning.unused=false;
      }

      if(bossHp>0){
        if(_cloud.timer>=30&&_cloud.timer<35){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=35&&_cloud.timer<40){ _context.fillShortRect(_lightning.color0,_lightning); }
        if(_cloud.timer>=40&&_cloud.timer<45){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=45&&_cloud.timer<50){ _lightning.unused=true; }
        if(_cloud.timer>=50&&_cloud.timer<55){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=55&&_cloud.timer<60){ _context.fillShortRect(_lightning.color0,_lightning); }
        if(_cloud.timer>=60&&_cloud.timer<65){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=65&&_cloud.timer<110){ _lightning.unused=true; }
        if(_cloud.timer>=110&&_cloud.timer<115){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=115&&_cloud.timer<120){ _context.fillShortRect(_lightning.color0,_lightning); }
        if(_cloud.timer>=120&&_cloud.timer<125){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=125&&_cloud.timer<130){ _lightning.unused=true; }
        if(_cloud.timer>=130&&_cloud.timer<135){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=135&&_cloud.timer<140){ _context.fillShortRect(_lightning.color0,_lightning); }
        if(_cloud.timer>=140&&_cloud.timer<145){ _context.fillShortRect(_lightning.color1,_lightning); }
        if(_cloud.timer>=150){ _lightning.unused=true; }
      }
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
