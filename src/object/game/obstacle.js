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
      if(_currentDecoration.text!=undefined){ _currentDecoration.text.x-=context.scale(1280); }
    } else if(_currentDecoration.base.x+_currentDecoration.base.width<0){
      _currentDecoration.base.x+=context.scale(1280);
      if(_currentDecoration.text!=undefined){ _currentDecoration.text.x+=context.scale(1280); }
    }

    if(context.collision(_currentDecoration.base,_player.base)&&_currentDecoration.type==4){
      if(!global.doorActivate){
        global.doorNotification=true;
        global.doorActivate=true;
      } _player.touchDoor=true;
    } else{ _player.touchDoor=false; }
  } else if(_currentDecoration.current==1){
    if(_currentDecoration.base.x>canvas.width){
      _currentDecoration.base.x-=context.scale(1280);
      _currentDecoration.bottom.x-=context.scale(1280);
      if(_currentDecoration.first!=undefined){ _currentDecoration.first.x-=context.scale(1280); }
    } else if(_currentDecoration.base.x+_currentDecoration.base.width<0){
      _currentDecoration.base.x+=context.scale(1280);
      _currentDecoration.bottom.x+=context.scale(1280);
      if(_currentDecoration.first!=undefined){ _currentDecoration.first.x+=context.scale(1280); }
    } if(_currentDecoration.left.x>canvas.width){
      _currentDecoration.left.x-=context.scale(1280);
      _currentDecoration.bottomLeft.x-=context.scale(1280);
      if(_currentDecoration.second!=undefined){ _currentDecoration.second.x-=context.scale(1280); }
    } else if(_currentDecoration.left.x+_currentDecoration.left.width<0){
      _currentDecoration.left.x+=context.scale(1280);
      _currentDecoration.bottomLeft.x+=context.scale(1280);
      if(_currentDecoration.second!=undefined){ _currentDecoration.second.x+=context.scale(1280); }
    }

    if(_currentDecoration.first!=undefined){
      if(context.collision(_currentDecoration.first,_player.collisionLeft)&&context.collision(_currentDecoration.first,_player.base)&&_player.left){
        if(!global.lockerActivate){
          global.lockerNotification=true;
          global.lockerActivate=true;
        }

        _player.base.x=_currentDecoration.first.x+_currentDecoration.first.width-context.move(8);
        _player.collisionLeft.x=_player.base.x+context.scale(4);
        _player.collisionRight.x=_player.base.x+context.scale(52);
        _player.collisionTop.x=_player.base.x+context.scale(14);
        _player.collisionBottom.x=_player.base.x+context.scale(12);

        _player.gun.x=_player.base.x;
        _player.cloud.x=_player.base.x-context.scale(6);
        _player.action.x=_player.base.x+_player.base.width;
      } else if(context.collision(_currentDecoration.first,_player.collisionRight)&&context.collision(_currentDecoration.first,_player.base)&&!_player.left){
        if(!global.lockerActivate){
          global.lockerNotification=true;
          global.lockerActivate=true;
        }

        _player.base.x=_currentDecoration.first.x-_player.base.width+context.move(8);
        _player.collisionLeft.x=_player.base.x+context.scale(4);
        _player.collisionRight.x=_player.base.x+context.scale(52);
        _player.collisionTop.x=_player.base.x+context.scale(14);
        _player.collisionBottom.x=_player.base.x+context.scale(12);

        _player.gun.x=_player.base.x;
        _player.cloud.x=_player.base.x-context.scale(6);
        _player.action.x=_player.base.x+_player.base.width;
      }

      if(context.collision(_currentDecoration.first,_player.ammo)&&!_player.ammo.unused){
        if(global.sfx&&_player.hp>0){ audio.locker_sfx.play(); }

        if(_currentDecoration.base.type==5){ _currentDecoration.base.type=_currentDecoration.first.type; }
        else{ _currentDecoration.bottom.type=_currentDecoration.first.type; }
        delete(_currentDecoration.first);
        _player.ammo.unused=true;
      }
    } if(_currentDecoration.second!=undefined){
      if(context.collision(_currentDecoration.second,_player.collisionLeft)&&context.collision(_currentDecoration.second,_player.base)&&_player.left){
        if(!global.lockerActivate){
          global.lockerNotification=true;
          global.lockerActivate=true;
        }

        _player.base.x=_currentDecoration.second.x+_currentDecoration.second.width-context.move(8);
        _player.collisionLeft.x=_player.base.x+context.scale(4);
        _player.collisionRight.x=_player.base.x+context.scale(52);
        _player.collisionTop.x=_player.base.x+context.scale(14);
        _player.collisionBottom.x=_player.base.x+context.scale(12);

        _player.gun.x=_player.base.x;
        _player.cloud.x=_player.base.x-context.scale(6);
        _player.action.x=_player.base.x+_player.base.width;
      } else if(context.collision(_currentDecoration.second,_player.collisionRight)&&context.collision(_currentDecoration.second,_player.base)&&!_player.left){
        if(!global.lockerActivate){
          global.lockerNotification=true;
          global.lockerActivate=true;
        }

        _player.base.x=_currentDecoration.second.x-_player.base.width+context.move(8);
        _player.collisionLeft.x=_player.base.x+context.scale(4);
        _player.collisionRight.x=_player.base.x+context.scale(52);
        _player.collisionTop.x=_player.base.x+context.scale(14);
        _player.collisionBottom.x=_player.base.x+context.scale(12);

        _player.gun.x=_player.base.x;
        _player.cloud.x=_player.base.x-context.scale(6);
        _player.action.x=_player.base.x+_player.base.width;
      }

      if(context.collision(_currentDecoration.second,_player.ammo)&&!_player.ammo.unused){
        if(global.sfx&&_player.hp>0){ audio.locker_sfx.play(); }

        if(_currentDecoration.left.type==5){ _currentDecoration.left.type=_currentDecoration.second.type; }
        else{ _currentDecoration.bottomLeft.type=_currentDecoration.second.type; }
        delete(_currentDecoration.second);
        _player.ammo.unused=true;
      }
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
    if(!global.teboxActivate){
      global.teboxNotification=true;
      global.teboxActivate=true;
    }

    _tebox.base.ammo=_currentTebox.ammo;
    _tebox.base.hp=_currentTebox.hp;
    _tebox.base.key=_currentTebox.key;
    _tebox.base.ammo1=-1;
    _tebox.base.ammo2=-1;
    _tebox.useLenght=_tebox.currentLenght;
    _tebox.loot.x=_currentTebox.x+context.scale(10);
    _tebox.loot.y=_currentTebox.y+_tebox.loot.height;
    _tebox.loot.iy=_currentTebox.y+_tebox.loot.height;
  } else if(!context.collision(_currentTebox,_player.base)&&_tebox.currentLenght==_tebox.useLenght){
    _player.touchTebox=false;
    _currentTebox.ammo=_tebox.base.ammo;
    _currentTebox.hp=_tebox.base.hp;
    _currentTebox.key=_tebox.base.key;
    _tebox.useLenght=-1;
  }
}

_spike.update=function(){
  if(_currentSpike.x>canvas.width){ _currentSpike.x-=context.scale(1280); }
  else if(_currentSpike.x+_currentSpike.width<0){ _currentSpike.x+=context.scale(1280); }

  if(_currentSpike.rotation==180&&_player.base.x+_player.base.width+context.scale(2)>=_currentSpike.x&&_player.base.x<=_currentSpike.x+_currentSpike.width-context.scale(2)&&
     _currentSpike.level==scene.score){ _currentSpike.active=true; }
  if(_currentSpike.active){
    if(!context.collision(_currentSpike,_player.base)&&_currentSpike.alpha==100){
      if(_currentSpike.vy==0){ _currentSpike.vy=context.move(2); }
      else{ _currentSpike.vy+=context.move(0.1); }
      _currentSpike.y+=_currentSpike.vy;
    } else{ _currentSpike.alpha-=context.frame(4); }
    if(_currentSpike.y>=context.scale(672)||_currentSpike.alpha<=0){
      _spike.array.splice(_spike.currentLenght,1);
      _spike.lenght--;
    }
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

  if(scene.score==_currentPlatform.level+1&&scene.score>0&&scene.score<_platform.load-1&&!scene.teacher){
    if(_currentPlatform.y<context.scale(254)||_currentPlatform.y>context.scale(274)){ _platform.move=true; }
    else if(_currentPlatform.y>=context.scale(254)&&_currentPlatform.y<=context.scale(274)){ _platform.move=false; }
    if(_currentPlatform.y<context.scale(254)){ _platform.up=true; }
    else if(_currentPlatform.y>context.scale(274)){ _platform.up=false; }
  } else if(scene.score==0&&!scene.teacher){
    if(_platform.array[0].y>context.scale(352)){ _platform.move=true; }
    else{ _platform.move=false; }
    _platform.up=false;
  } else if(scene.score==_platform.load-1&&!scene.teacher){
    if(_platform.array[_platform.lenght].y<context.scale(-4)){ _platform.move=true; }
    else{ _platform.move=false; }
    _platform.up=true;
  } else if(scene.score==_platform.load&&scene.vy<context.scale(5)){ _platform.move=false; }

  if(context.collision(_currentPlatform,_player.collisionTop)&&!_player.touchGround){
    _player.fly=true;
    _player.touchGround=true;

    if(_player.upTime<12){
      _player.base.y=_currentPlatform.y+context.scale(12);
      _player.collisionLeft.y=_player.base.y+context.scale(12);
      _player.collisionRight.y=_player.base.y+context.scale(12);
      _player.collisionTop.y=_player.base.y-context.scale(4);
      _player.collisionBottom.y=_player.base.y+context.scale(90);
      _player.gun.y=_player.base.y+context.scale(32);
      _player.action.y=_player.base.y;
    }
  } if((context.collision(_currentPlatform,_player.collisionBottom)||(context.collision(_currentPlatform,_player.cloud)&&_player.cloud.on))&&!_player.touchGround){
    if(_player.base.y<=_currentPlatform.y){ scene.score=_currentPlatform.level+1; }

    if(!_player.cloud.on){
      _player.base.y=_currentPlatform.y-_player.base.height;
      _player.collisionLeft.y=_player.base.y+context.scale(12);
      _player.collisionRight.y=_player.base.y+context.scale(12);
      _player.collisionTop.y=_player.base.y-context.scale(4);
      _player.collisionBottom.y=_player.base.y+context.scale(90);
      _player.gun.y=_player.base.y+context.scale(32);
      _player.action.y=_player.base.y;
    } else{
      _player.base.y=_currentPlatform.y-_player.base.height-context.scale(16);
      _player.collisionLeft.y=_player.base.y+context.scale(12);
      _player.collisionRight.y=_player.base.y+context.scale(12);
      _player.collisionTop.y=_player.base.y-context.scale(4);
      _player.collisionBottom.y=_player.base.y+context.scale(90);
      _player.gun.y=_player.base.y+context.scale(32);
      _player.cloud.y=_player.base.y+context.scale(64);
      _player.action.y=_player.base.y;
    }

    _player.base.vy=scene.vy;
    _player.touchGround=true;
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
    if(_currentCorner.laser.x>canvas.width){
      _currentCorner.laser.x-=context.scale(1280);
      _currentCorner.laser.ix-=context.scale(1280);
    } else if(_currentCorner.laser.x+_currentCorner.laser.width<0){
      _currentCorner.laser.x+=context.scale(1280);
      _currentCorner.laser.ix+=context.scale(1280);
    }

    if(context.collision(_currentCorner.laser,_player.base)&&_player.invisible==0&&(_player.base.x+_player.base.width>_currentCorner.base.x+context.scale(36)&&
       _player.base.x<_currentCorner.base.x+context.scale(120))&&_corner.time>=context.time(20)&&_corner.time<context.time(50)){
      _player.hp--;
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

    if(_corner.time==1){
      if(!_currentCorner.left){
        _currentCorner.left=true;
        _currentCorner.laser.x=_currentCorner.laser.ix;
      } else{
        _currentCorner.left=false;
        _currentCorner.laser.x=_currentCorner.laser.ix+context.scale(312);
      }
    } if(_corner.time>=context.time(20)&&_corner.currentLenght==_corner.useLenghtLaser){
      if(!_currentCorner.left){ _currentCorner.laser.x-=context.move(12); }
      else{ _currentCorner.laser.x+=context.move(12); }
    } if(_corner.time==context.time(70)){ _corner.time=0; }

    if((_player.base.x+_player.base.width>_currentCorner.base.x-context.scale(64)&&_player.base.x<_currentCorner.base.x+context.scale(220))&&
       (scene.score==_currentCorner.laser.level||scene.score==_currentCorner.laser.level+1)&&!_player.touchCorner){
      if(_corner.array[_corner.currentLenght+1].lock!=undefined&&_corner.array[_corner.currentLenght+1].lock.alpha!=100||_corner.array[_corner.currentLenght+1].lock==undefined){
        _player.touchCorner=true;
        _corner.useLenghtLaser=_corner.currentLenght;
        _corner.time=0;
      }
    } else if((_player.base.x+_player.base.width<_currentCorner.base.x-context.scale(64)||_player.base.x>_currentCorner.base.x+context.scale(220))&&
              _corner.currentLenght==_corner.useLenghtLaser&&_corner.time<context.time(20)){
      _player.touchCorner=false;
      _corner.useLenghtLaser=-1;
    }
  }

  if(_currentCorner.lock!=undefined&&_currentCorner.lock.alpha>0){
    if(_currentCorner.lock.x>canvas.width){ _currentCorner.lock.x-=context.scale(1280); }
    else if(_currentCorner.lock.x+_currentCorner.lock.width<0){ _currentCorner.lock.x+=context.scale(1280); }

    if(context.collision(_currentCorner.lock,_player.collisionTop)&&!_player.touchGround&&_currentCorner.lock.alpha>50){
      _player.fly=true;
      _player.touchGround=true;

      if(_player.upTime<12){
        _player.base.y=_currentCorner.lock.y+context.scale(14);
        _player.collisionLeft.y=_player.base.y+context.scale(12);
        _player.collisionRight.y=_player.base.y+context.scale(12);
        _player.collisionTop.y=_player.base.y-context.scale(4);
        _player.collisionBottom.y=_player.base.y+context.scale(90);
        _player.gun.y=_player.base.y+context.scale(32);
        _player.action.y=_player.base.y;
      } if(!_player.touchLock&&_currentCorner.lock.alpha==100&&!scene.key){
        _player.touchLock=true;
        if(!global.lockActivate){
          global.lockNotification=true;
          global.lockActivate=true;
        } _corner.useLenghtLock=_corner.currentLenght;
      }

      if(scene.key&&_currentCorner.lock.alpha==100){
        if(global.sfx){ audio.unlock_sfx.play(); }
        _currentCorner.lock.alpha=99;
        scene.key=false;
      }
    } else if(!context.collision(_currentCorner.lock,_player.base)&&_corner.currentLenght==_corner.useLenghtLock){
      _player.touchLock=false;
      _corner.useLenghtLock=-1;
    }

    if(_currentCorner.lock.alpha<100){
      _currentCorner.lock.alpha-=context.frame(7);
      _player.touchLock=false;
      _corner.useLenghtLock=-1;

      if(_currentCorner.lock.alpha<=0){ delete(_currentCorner.lock); }
    }
  }

  if(context.collision(_currentCorner.base,_player.collisionLeft)&&!_player.touchGround){
    _player.base.x+=context.move(4);
    _player.collisionTop.x+=context.move(4);
    _player.collisionBottom.x+=context.move(4);
    _player.collisionLeft.x+=context.move(4);
    _player.collisionRight.x+=context.move(4);
    _player.cloud.x+=context.move(4);
    _player.gun.x+=context.move(4);
    _player.action.x+=context.move(4);

    _player.touchGround=true;
  } if(context.collision(_currentCorner.base,_player.collisionRight)&&!_player.touchGround){
    _player.base.x-=context.move(4);
    _player.collisionTop.x-=context.move(4);
    _player.collisionBottom.x-=context.move(4);
    _player.collisionLeft.x-=context.move(4);
    _player.collisionRight.x-=context.move(4);
    _player.cloud.x-=context.move(4);
    _player.gun.x-=context.move(4);
    _player.action.x-=context.move(4);

    _player.touchGround=true;
  }
}

_foreground.update=function(){
  if(_currentForeground.x>_currentForeground.width){ _currentForeground.x-=_currentForeground.width*2; }
  else if(_currentForeground.x+_currentForeground.width<0){ _currentForeground.x+=_currentForeground.width*2; }

  if(_currentForeground.level==scene.score&&!_currentForeground.on){
    _currentForeground.on=true;
    _currentForeground.change=true;
  } else if(_currentForeground.level!=scene.score&&_currentForeground.on){
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
