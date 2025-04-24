/*   ,-----,
 *   |     |    ,--------------------------------------,
 *   |     |   ( */"use strict"/* pastebin.com/zdg35gef )
 *  (|-----|) < The project is licensed under MIT -^    |
 *  |\_____/|  "---------------------------------------"
 *  |       |    __---.
 *  ( o   o )   /      )
 *  \ = . = \__/    --"
 *  /              /
 * |              |
 *  \ \    \ \   |
 *   | |    | | /
 *  (_(_)--(_(_) */

_decoration.update=function(){
  if(_currentDecoration.current==0){
    if(_currentDecoration.base.x>canvas.width){
      _currentDecoration.base.x-=context.scale(1280);
      _currentDecoration.text.x-=context.scale(1280);
    } else if(_currentDecoration.base.x+_currentDecoration.base.width<0){
      _currentDecoration.base.x+=context.scale(1280);
      _currentDecoration.text.x+=context.scale(1280);
    }

    if(context.collision(_currentDecoration.base,_player.base)&&_currentDecoration.text.value0=="Finał"){  }
  } else if(_currentDecoration.current==1){
    if(_currentDecoration.base.x>canvas.width){
      _currentDecoration.base.x-=context.scale(1280);
      _currentDecoration.bottom.x-=context.scale(1280);
      _currentDecoration.first.x-=context.scale(1280);
    } else if(_currentDecoration.base.x+_currentDecoration.base.width<0){
      _currentDecoration.base.x+=context.scale(1280);
      _currentDecoration.bottom.x+=context.scale(1280);
      _currentDecoration.first.x+=context.scale(1280);
    } if(_currentDecoration.left.x>canvas.width){
      _currentDecoration.left.x-=context.scale(1280);
      _currentDecoration.bottomLeft.x-=context.scale(1280);
      _currentDecoration.second.x-=context.scale(1280);
    } else if(_currentDecoration.left.x+_currentDecoration.left.width<0){
      _currentDecoration.left.x+=context.scale(1280);
      _currentDecoration.bottomLeft.x+=context.scale(1280);
      _currentDecoration.second.x+=context.scale(1280);
    }

    if(context.collision(_currentDecoration.first,_player.ammo)&&!_player.ammo.unused&&_currentDecoration.first.active){
      if(global.sfx&&_player.hp>0){ audio.locker_sfx.play(); }

      if(_currentDecoration.base.type==5){ _currentDecoration.base.type=_currentDecoration.first.type; }
      else{ _currentDecoration.bottom.type=_currentDecoration.first.type; }

      _currentDecoration.first.active=false;
      _player.ammo.unused=true;
    } if(context.collision(_currentDecoration.second,_player.ammo)&&!_player.ammo.unused&&_currentDecoration.second.active){
      if(global.sfx&&_player.hp>0){ audio.locker_sfx.play(); }

      if(_currentDecoration.left.type==5){ _currentDecoration.left.type=_currentDecoration.second.type; }
      else{ _currentDecoration.bottomLeft.type=_currentDecoration.second.type; }

      _currentDecoration.second.active=false;
      _player.ammo.unused=true;
    }

    if(context.collision(_currentDecoration.first,_player.collisionLeft)&&_currentDecoration.first.active&&_player.left){
      _player.base.x=_currentDecoration.first.x+_currentDecoration.first.width-context.move(8);
      _player.collisionLeft.x=_player.base.x+context.scale(4);
      _player.collisionRight.x=_player.base.x+context.scale(52);
      _player.collisionTop.x=_player.base.x+context.scale(14);
      _player.collisionBottom.x=_player.base.x+context.scale(12);

      _player.gun.x=_player.base.x;
      _player.cloud.x=_player.base.x-context.scale(8);
    } else if(context.collision(_currentDecoration.first,_player.collisionRight)&&_currentDecoration.first.active&&!_player.left){
      _player.base.x=_currentDecoration.first.x-_player.base.width+context.move(8);
      _player.collisionLeft.x=_player.base.x+context.scale(4);
      _player.collisionRight.x=_player.base.x+context.scale(52);
      _player.collisionTop.x=_player.base.x+context.scale(14);
      _player.collisionBottom.x=_player.base.x+context.scale(12);

      _player.gun.x=_player.base.x;
      _player.cloud.x=_player.base.x-context.scale(8);
    } else if(context.collision(_currentDecoration.second,_player.collisionLeft)&&_currentDecoration.second.active&&_player.left){
      _player.base.x=_currentDecoration.second.x+_currentDecoration.second.width-context.move(8);
      _player.collisionLeft.x=_player.base.x+context.scale(4);
      _player.collisionRight.x=_player.base.x+context.scale(52);
      _player.collisionTop.x=_player.base.x+context.scale(14);
      _player.collisionBottom.x=_player.base.x+context.scale(12);

      _player.gun.x=_player.base.x;
      _player.cloud.x=_player.base.x-context.scale(8);
    } else if(context.collision(_currentDecoration.second,_player.collisionRight)&&_currentDecoration.second.active&&!_player.left){
      _player.base.x=_currentDecoration.second.x-_player.base.width+context.move(8);
      _player.collisionLeft.x=_player.base.x+context.scale(4);
      _player.collisionRight.x=_player.base.x+context.scale(52);
      _player.collisionTop.x=_player.base.x+context.scale(14);
      _player.collisionBottom.x=_player.base.x+context.scale(12);

      _player.gun.x=_player.base.x;
      _player.cloud.x=_player.base.x-context.scale(8);
    }
  } else if(_currentDecoration.current==2){
    if(_currentDecoration.x>canvas.width){ _currentDecoration.x-=context.scale(1280); }
    else if(_currentDecoration.x+_currentDecoration.width<0){ _currentDecoration.x+=context.scale(1280); }
  } else if(_currentDecoration.current==3){
    if(_currentDecoration.light.x>canvas.width){
      _currentDecoration.base.x-=context.scale(1280);
      _currentDecoration.light.x-=context.scale(1280);
    } else if(_currentDecoration.light.x+_currentDecoration.light.width<0){
      _currentDecoration.base.x+=context.scale(1280);
      _currentDecoration.light.x+=context.scale(1280);
    }
  }
}

_tebox.update=function(){
  if(_currentTebox.x>canvas.width){ _currentTebox.x-=context.scale(1280); }
  else if(_currentTebox.x+_currentTebox.width<0){ _currentTebox.x+=context.scale(1280); }

  if(context.collision(_currentTebox,_player.base)&&!_player.touchTebox){
    _player.touchTebox=true;
    _tebox.first=_currentTebox.first;
    _tebox.second=_currentTebox.second;
    _tebox.third=_currentTebox.third;
    _currentTebox.first=-1;
    _currentTebox.second=-1;
    _currentTebox.third=-1;
    _tebox.useLenght=_tebox.currentLenght;
    _loot.x=_currentTebox.x+context.scale(15);
    _loot.y=_currentTebox.y+_loot.height;
    _loot.iy=_currentTebox.y+_loot.height;
  } else if(!context.collision(_currentTebox,_player.base)&&_tebox.currentLenght==_tebox.useLenght){
    _player.touchTebox=false;
    _currentTebox.first=_tebox.first;
    _currentTebox.second=_tebox.second;
    _currentTebox.third=_tebox.third;
    _tebox.useLenght=-1;
  }
}

_spike.update=function(){
  if(_currentSpike.x>canvas.width){ _currentSpike.x-=context.scale(1280); }
  else if(_currentSpike.x+_currentSpike.width<0){ _currentSpike.x+=context.scale(1280); }

  if(_currentSpike.rotation==180&&_player.base.x+_player.base.width>=_currentSpike.x&&_player.base.x<=_currentSpike.x+_currentSpike.width&&
     _currentSpike.score==scene.score){ _currentSpike.active=true; }
  if(_currentSpike.active){
    _currentSpike.y+=context.move(4);
    if(_currentSpike.y>=context.scale(672)){ _currentSpike.disable=true; }
  }

  if(context.collision(_currentSpike,_player.base)&&_player.invisible==0){
    _player.hp-=1;
    _player.damage=true;
    _player.invisible=1;
    if(global.sfx&&_player.hp>0){
      if(audio.damage1==0){
        audio.damage1_sfx.play();
        audio.damage1++;
      } else{
        audio.damage1_alt.play();
        audio.damage1=0;
      }
    }
  }
}

_platform.update=function(){
  if(_currentPlatform.x>canvas.width){ _currentPlatform.x-=context.scale(1280); }
  else if(_currentPlatform.x+_currentPlatform.width<0){ _currentPlatform.x+=context.scale(1280); }

  if(scene.score==_currentPlatform.level+1&&scene.score>0&&scene.score<_platform.load-1){
    if(_currentPlatform.y<context.scale(254)||_currentPlatform.y>context.scale(274)){ _platform.move=true; }
    else if(_currentPlatform.y>=context.scale(254)&&_currentPlatform.y<=context.scale(274)){ _platform.move=false; }
    if(_currentPlatform.y<context.scale(254)){ _platform.up=true; }
    else if(_currentPlatform.y>context.scale(274)){ _platform.up=false; }
  } else if(scene.score==0){
    if(_platform.array[0].y>context.scale(352)){ _platform.move=true; }
    else{ _platform.move=false; }
    _platform.up=false;
  } else if(scene.score==_platform.load-1){
    if(_platform.array[_platform.load*3].y<context.scale(-4)){ _platform.move=true; }
    else{ _platform.move=false; }
    _platform.up=true;
  }

  if(context.collision(_currentPlatform,_player.collisionTop)&&!_player.touched){
    _player.fly=true;
    _player.touched=true;

    if(_player.upTimer<12){
      _player.base.y=_currentPlatform.y+context.scale(12);
      _player.collisionLeft.y=_player.base.y+context.scale(12);
      _player.collisionRight.y=_player.base.y+context.scale(12);
      _player.collisionTop.y=_player.base.y-context.scale(4);
      _player.collisionBottom.y=_player.base.y+context.scale(90);

      _player.cloud.y=_player.base.y+_player.cloud.height;
      _player.gun.y=_player.base.y+context.scale(32);
    }
  } if(context.collision(_currentPlatform,_player.collisionBottom)&&!_player.touched){
    if(_player.base.y<=_currentPlatform.y){ scene.score=_currentPlatform.level+1; }

    if(!_player.cloudFly){
      _player.base.y=_currentPlatform.y-_player.base.height;
      _player.collisionLeft.y=_player.base.y+context.scale(12);
      _player.collisionRight.y=_player.base.y+context.scale(12);
      _player.collisionTop.y=_player.base.y-context.scale(4);
      _player.collisionBottom.y=_player.base.y+context.scale(90);

      _player.cloud.y=_player.base.y+_player.cloud.height;
      _player.gun.y=_player.base.y+context.scale(32);
    }

    _player.vy=scene.vy;
    _player.touched=true;
  } if(context.collision(_currentPlatform,_player.collisionBottom)){ _player.active=true; }
}

_corner.update=function(){
  if(_currentCorner.base.x>canvas.width){
    _currentCorner.base.x-=context.scale(1280);
    if(_currentCorner.laser!=undefined){ _currentCorner.laser.x-=context.scale(1280); }
    else if(_currentCorner.lock!=undefined){ _currentCorner.lock.x-=context.scale(1280); }
  } else if(_currentCorner.base.x+_currentCorner.base.width<0){
    _currentCorner.base.x+=context.scale(1280);
    if(_currentCorner.laser!=undefined){ _currentCorner.laser.x+=context.scale(1280); }
    else if(_currentCorner.lock!=undefined){ _currentCorner.lock.x+=context.scale(1280); }
  }

  if(_currentCorner.laser!=undefined){
    if(_currentCorner.laser.x>canvas.width){ _currentCorner.laser.x-=context.scale(1280); }
    else if(_currentCorner.laser.x+_currentCorner.laser.width<0){ _currentCorner.laser.x+=context.scale(1280); }

    if(context.collision(_currentCorner.laser,_player.base)&&_player.invisible==0&&_corner.timer>=context.time(60)&&!_player.touched){
      _player.hp-=1;
      _player.damage=true;
      _player.invisible=1;
      if(global.sfx&&_player.hp>0){
        if(audio.damage1==0){
          audio.damage1_sfx.play();
          audio.damage1++;
        } else{
          audio.damage1_sfx.alt();
          audio.damage1=0;
        }
      }
    }

    if(_corner.timer>=context.time(40)&&_corner.timer<context.time(50)){ _currentCorner.laser.alpha+=context.frame(4); }
    else if(_corner.timer==context.time(50)){ _currentCorner.laser.alpha=50; }
    else if(_corner.timer>=context.time(60)&&_corner.timer<context.time(70)){ _currentCorner.laser.alpha+=context.frame(6); }
    else if(_corner.timer==context.time(70)){ _currentCorner.laser.alpha=100; }
    else if(_corner.timer>context.time(70)){
      _currentCorner.laser.alpha-=context.frame(8);
      if(_currentCorner.laser.alpha<=0){ _corner.timer=0; }
    }
  }

  if(_currentCorner.lock!=undefined&&_currentCorner.lock.alpha>0){
    if(_currentCorner.lock.x>canvas.width){ _currentCorner.lock.x-=context.scale(1280); }
    else if(_currentCorner.lock.x+_currentCorner.lock.width<0){ _currentCorner.lock.x+=context.scale(1280); }

    if(context.collision(_currentCorner.lock,_player.collisionTop)&&!_player.touched&&_currentCorner.lock.alpha>50){
      _player.fly=true;
      _player.touched=true;

      if(_player.upTimer<12){
        _player.base.y=_currentCorner.lock.y+context.scale(14);
        _player.collisionLeft.y=_player.base.y+context.scale(12);
        _player.collisionRight.y=_player.base.y+context.scale(12);
        _player.collisionTop.y=_player.base.y-context.scale(4);
        _player.collisionBottom.y=_player.base.y+context.scale(90);

        _player.cloud.y=_player.base.y+_player.cloud.height;
        _player.gun.y=_player.base.y+context.scale(32);
      }

      if(scene.key&&_currentCorner.lock.alpha==100){
        if(global.sfx){ audio.unlock_sfx.play(); }
        _currentCorner.lock.alpha=99;
        scene.key=false;
      }
    } if(_currentCorner.lock.alpha<100){ _currentCorner.lock.alpha-=context.frame(7); }
  }

  if(context.collision(_currentCorner.base,_player.collisionLeft)&&!_player.touched){
    _player.base.x+=context.move(4);
    _player.collisionTop.x+=context.move(4);
    _player.collisionBottom.x+=context.move(4);
    _player.collisionLeft.x+=context.move(4);
    _player.collisionRight.x+=context.move(4);
    _player.cloud.x+=context.move(4);
    _player.gun.x+=context.move(4);

    _player.touched=true;
  } if(context.collision(_currentCorner.base,_player.collisionRight)&&!_player.touched){
    _player.base.x-=context.move(4);
    _player.collisionTop.x-=context.move(4);
    _player.collisionBottom.x-=context.move(4);
    _player.collisionLeft.x-=context.move(4);
    _player.collisionRight.x-=context.move(4);
    _player.cloud.x-=context.move(4);
    _player.gun.x-=context.move(4);

    _player.touched=true;
  }
}

_foreground.update=function(){
  if(_currentForeground.x>canvas.width){ _currentForeground.x-=context.scale(1280); }
  else if(_currentForeground.x+_currentForeground.width<0){ _currentForeground.x+=context.scale(1280); }

  if(_currentForeground.score==scene.score&&!_currentForeground.on){
    _currentForeground.on=true;
    _currentForeground.change=true;
  } else if(_currentForeground.score!=scene.score&&_currentForeground.on){
    _currentForeground.on=false;
    _currentForeground.change=true;
  }

  if(_currentForeground.change&&!_currentForeground.on){
    if(_currentForeground.alpha<50){ _currentForeground.alpha+=context.time(2); }
    else{
      _currentForeground.alpha=50;
      _currentForeground.change=false;
    }
  } else if(_currentForeground.change&&_currentForeground.on){
    if(_currentForeground.alpha>0){ _currentForeground.alpha-=context.time(2); }
    else{ _currentForeground.change=false; }
  }
}
