/*
 *    ,-----,
 *    |     |    ,---------------------------------------------------------,
 *    |     |   ( Projekt objęty jest licencją. Przeczytasz o niej na:      )
 *   (|-----|)  < github.com/CiupagaPL/Tebowy_Dzien/blob/release/LICENSE.md )
 *   |\_____/|   "---------------------------------------------------------"
 *   |       |    __---.
 *   ( o   o )   /      )
 *   \ = . = \__/    --"
 *   /              /
 *  |              |
 *   \ \    \ \   |
 *    | |    | | /
 *   (_(_)--(_(_)
*/

_corner.update=function(){
  if(_currentCorner.laser!=undefined){
    if(context.collision(_currentCorner.laser,_player.base)&&_player.invisible==0&&
       !global.currentTeacher&&_corner.timer>=_corner.max&&!_player.touched){
      if(global.sfx){
        // _audio.hit.load();
        // _audio.hit.play();
      }

      _player.hp-=25;
      _player.text.value0="-25 punktów\nz zachowania";
      if(_player.hp>0){ _player.invisible=1; }
      _player.touched=true;
    }
  }

  if(context.collision(_currentCorner.base,_player.collisionLeft)&&!_player.touched&&_currentCorner.base.rotate!=2){
    _player.base.x+=4*canvas.scale;
    _player.text.x+=4*canvas.scale;

    _player.collisionTop.x+=4*canvas.scale;
    _player.collisionBottom.x+=4*canvas.scale;
    _player.collisionLeft.x+=4*canvas.scale;
    _player.collisionRight.x+=4*canvas.scale;

    _player.cloud.x+=4*canvas.scale;
    _player.gun.x+=4*canvas.scale;

    _player.touched=true;
  } if(context.collision(_currentCorner.base,_player.collisionRight)&&!_player.touched&&_currentCorner.base.rotate==2){
    _player.base.x-=4*canvas.scale;
    _player.text.x-=4*canvas.scale;

    _player.collisionTop.x-=4*canvas.scale;
    _player.collisionBottom.x-=4*canvas.scale;
    _player.collisionLeft.x-=4*canvas.scale;
    _player.collisionRight.x-=4*canvas.scale;

    _player.cloud.x-=4*canvas.scale;
    _player.gun.x-=4*canvas.scale;

    _player.touched=true;
  }
}

_platform.update=function(){
  _background.base.y+=scene.vy/72;
  _background.bottom.y+=scene.vy/72;

  if(context.collision(_currentPlatform,_player.collisionTop)&&!_player.touched){
    _player.fly=true;
    _player.touched=true;

    if(_player.upTimer<12){
      _player.base.y=_currentPlatform.y+(8*canvas.scale);
      _player.text.y=_player.base.y-(12*canvas.scale);

      _player.collisionLeft.y=_player.base.y+(8*canvas.scale);
      _player.collisionRight.y=_player.base.y+(8*canvas.scale);
      _player.collisionTop.y=_player.base.y;
      if(_player.skin==0||_player.skin==2){ _player.collisionBottom.y=(_player.base.y+(81*canvas.scale))+_player.vy; }
      else{ _player.collisionBottom.y=(_player.base.y+(75*canvas.scale))+_player.vy; }

      _player.cloud.y=_player.base.y+_player.cloud.height;
      _player.gun.y=_player.base.y+(40*canvas.scale);
    }
  } if(context.collision(_currentPlatform,_player.collisionBottom)&&!_player.touched){
    if(_player.base.y<=_currentPlatform.y){ scene.score=_currentPlatform.level+1; }

    if(!_player.cloudFly){
      _player.base.y=_currentPlatform.y-_player.base.height;
      _player.text.y=_player.base.y-(12*canvas.scale);

      _player.collisionLeft.y=_player.base.y+(8*canvas.scale);
      _player.collisionRight.y=_player.base.y+(8*canvas.scale);
      _player.collisionTop.y=_player.base.y;
      if(_player.skin==0||_player.skin==2){ _player.collisionBottom.y=(_player.base.y+(81*canvas.scale))+_player.vy; }
      else{ _player.collisionBottom.y=(_player.base.y+(75*canvas.scale))+_player.vy; }

      _player.cloud.y=_player.base.y+_player.cloud.height;
      _player.gun.y=_player.base.y+(40*canvas.scale);
    }

    _player.vy=scene.vy;
    _player.touched=true;
  } if(context.collision(_currentPlatform,_player.collisionBottom)){ _player.active=true; }
}

_spike.update=function(){
  if(context.collision(_currentSpike,_player.base)&&_player.invisible==0&&!global.currentTeacher){
    if(global.sfx){
      // _audio.hit.load();
      // _audio.hit.play();
    }

    _player.hp-=25;
    _player.text.value0="-25 punktów\nz zachowania";
    if(_player.hp!=0){ _player.invisible=1; }
  }
}

