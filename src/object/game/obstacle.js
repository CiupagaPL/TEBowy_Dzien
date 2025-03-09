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
    _player.base.x+=context.move(4);
    _player.text.x+=context.move(4);

    _player.collisionTop.x+=context.move(4);
    _player.collisionBottom.x+=context.move(4);
    _player.collisionLeft.x+=context.move(4);
    _player.collisionRight.x+=context.move(4);

    _player.cloud.x+=context.move(4);
    _player.gun.x+=context.move(4);

    _player.touched=true;
  } if(context.collision(_currentCorner.base,_player.collisionRight)&&!_player.touched&&_currentCorner.base.rotate==2){
    _player.base.x-=context.move(4);
    _player.text.x-=context.move(4);

    _player.collisionTop.x-=context.move(4);
    _player.collisionBottom.x-=context.move(4);
    _player.collisionLeft.x-=context.move(4);
    _player.collisionRight.x-=context.move(4);

    _player.cloud.x-=context.move(4);
    _player.gun.x-=context.move(4);

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
      _player.base.y=_currentPlatform.y+context.scale(8);
      _player.text.y=_player.base.y-context.scale(12);

      _player.collisionLeft.y=_player.base.y+context.scale(8);
      _player.collisionRight.y=_player.base.y+context.scale(8);
      _player.collisionTop.y=_player.base.y;
      if(_player.skin==0||_player.skin==2){ _player.collisionBottom.y=(_player.base.y+context.scale(81))+_player.vy; }
      else{ _player.collisionBottom.y=(_player.base.y+context.scale(75))+_player.vy; }

      _player.cloud.y=_player.base.y+_player.cloud.height;
      _player.gun.y=_player.base.y+context.scale(40);
    }
  } if(context.collision(_currentPlatform,_player.collisionBottom)&&!_player.touched){
    if(_player.base.y<=_currentPlatform.y){ scene.score=_currentPlatform.level+1; }

    if(!_player.cloudFly){
      _player.base.y=_currentPlatform.y-_player.base.height;
      _player.text.y=_player.base.y-context.scale(12);

      _player.collisionLeft.y=_player.base.y+context.scale(8);
      _player.collisionRight.y=_player.base.y+context.scale(8);
      _player.collisionTop.y=_player.base.y;
      if(_player.skin==0||_player.skin==2){ _player.collisionBottom.y=(_player.base.y+context.scale(81))+_player.vy; }
      else{ _player.collisionBottom.y=(_player.base.y+context.scale(75))+_player.vy; }

      _player.cloud.y=_player.base.y+_player.cloud.height;
      _player.gun.y=_player.base.y+context.scale(40);
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
