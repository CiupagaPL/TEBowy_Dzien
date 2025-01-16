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

_player.render=function(){
  if(((_player.invisible==0||_player.hp==0)&&!global.pause)||((_player.invisible%2==0||global.pause)&&_player.hp!=0)){
    if(!_player.left){
      if(_player.skin==0){ context.render(_player.base,_player.base.img0); }
      else if(_player.skin==1){ context.render(_player.base,_player.base.img1); }
      else if(_player.skin==2){ context.render(_player.base,_player.base.img2); }
      else{ context.render(_player.base,_player.base.img3); }
    } else{
      if(_player.skin==0){ context.render(_player.base,_player.base.img0Left); }
      else if(_player.skin==1){ context.render(_player.base,_player.base.img1Left); }
      else if(_player.skin==2){ context.render(_player.base,_player.base.img2Left); }
      else{ context.render(_player.base,_player.base.img3Left); }
    }
  }
}

_player.textRender=function(){
  if(_player.hp!=0&&_player.invisible!=0&&global.addon){
    if(_player.invisible<5){ context.render(_player.text,_player.text.color0,_player.text.value0); }
    else if(_player.invisible>=5&&_player.invisible<10){ context.render(_player.text,_player.text.color1,_player.text.value0); }
    else if(_player.invisible>=10&&_player.invisible<_player.max-10){ context.render(_player.text,_player.text.color2,_player.text.value0); }
    else if(_player.invisible>=_player.max-10&&_player.invisible<_player.max-5){ context.render(_player.text,_player.text.color1,_player.text.value0); }
    else{ context.render(_player.text,_player.text.color0,_player.text.value0); }
  }
}

_player.update=function(){
  if(!global.pause&&_player.hp>0){
    _player.base.y+=_player.vy;
    _player.text.y+=_player.vy;

    _player.collisionTop.y+=_player.vy;
    _player.collisionBottom.y+=_player.vy;
    _player.collisionLeft.y+=_player.vy;
    _player.collisionRight.y+=_player.vy;

    _player.cloud.y+=_player.vy;
    _player.gun.y+=_player.vy;

    if(!_player.cloudFly){ _player.vy+=_player.gravity; }

    if(_player.ammo.unused){
      _player.ammo.x=-_player.ammo.width;
      _player.ammo.y=-_player.ammo.height;
      _player.ammo.power=false;
    } else{ _player.ammo.x+=32; }
    if(_player.ammo.x+_player.ammo.width>=canvas.width){ _player.ammo.unused=true; }
  }
}

_player.midUpdate=function(){
  if(!global.pause&&_player.hp>0&&_player.base.y<canvas.height*3/8&&
     _platform.array[_platform.lenght].y+(3*canvas.scale)<0){ scene.vy=3*canvas.scale; }

  else if(!global.pause&&_player.hp>0&&_player.base.y+_player.base.height>canvas.height-(8*canvas.scale)){ scene.vy=-3*canvas.scale; }

  else if(global.pause||_player.hp==0||_player.base.y>=canvas.height*3/8||_platform.array[_platform.lenght].y+(3*canvas.scale)>0){ scene.vy=0; }

  if(!global.pause&&_player.hp>0){
    if(!_player.grounded&&!_player.cloudFly){
      _player.base.y+=scene.vy;
      _player.text.y+=scene.vy;

      _player.collisionTop.y+=scene.vy;
      _player.collisionBottom.y+=scene.vy;
      _player.collisionLeft.y+=scene.vy;
      _player.collisionRight.y+=scene.vy;

      _player.cloud.y+=scene.vy;
      _player.gun.y+=scene.vy;
    }

    _player.base.x+=scene.vx+_player.vx;
    _player.text.x+=scene.vx+_player.vx;

    _player.collisionTop.x+=scene.vx+_player.vx;
    _player.collisionBottom.x+=scene.vx+_player.vx;
    _player.collisionLeft.x+=scene.vx+_player.vx;
    _player.collisionRight.x+=scene.vx+_player.vx;

    _player.cloud.x+=scene.vx+_player.vx;
    _player.gun.x+=scene.vx+_player.vx;
  }
}

_player.lateUpdate=function(){
  if(_player.cloudFly&&!global.pause&&_player.hp>0){
    if(_player.base.x+_player.base.width>=canvas.width*4/5){
      _player.base.x-=4*canvas.scale;
      _player.text.x-=4*canvas.scale;

      _player.collisionTop.x-=4*canvas.scale;
      _player.collisionBottom.x-=4*canvas.scale;
      _player.collisionLeft.x-=4*canvas.scale;
      _player.collisionRight.x-=4*canvas.scale;

      _player.cloud.x-=4*canvas.scale;
      _player.gun.x-=4*canvas.scale;
    }

    if(_player.base.y<=canvas.height*1/16){
      _player.base.y+=4*canvas.scale;
      _player.text.y+=4*canvas.scale;

      _player.collisionTop.y+=4*canvas.scale;
      _player.collisionBottom.y+=4*canvas.scale;
      _player.collisionLeft.y+=4*canvas.scale;
      _player.collisionRight.y+=4*canvas.scale;

      _player.cloud.y+=4*canvas.scale;
      _player.gun.y+=4*canvas.scale;
    }


    if(_player.base.y+_player.base.height>=canvas.height*15/16){
      _player.base.y-=4*canvas.scale;
      _player.text.y-=4*canvas.scale;

      _player.collisionTop.y-=4*canvas.scale;
      _player.collisionBottom.y-=4*canvas.scale;
      _player.collisionLeft.y-=4*canvas.scale;
      _player.collisionRight.y-=4*canvas.scale;

      _player.cloud.y-=4*canvas.scale;
      _player.gun.y-=4*canvas.scale;
    }
  }

  if(_player.base.x<=0){
    _player.base.x+=4*canvas.scale;
    _player.text.x+=4*canvas.scale;

    _player.collisionTop.x+=4*canvas.scale;
    _player.collisionBottom.x+=4*canvas.scale;
    _player.collisionLeft.x+=4*canvas.scale;
    _player.collisionRight.x+=4*canvas.scale;

    _player.cloud.x+=4*canvas.scale;
    _player.gun.x+=4*canvas.scale;
  }

  if(_player.base.x>=canvas.width-_player.base.width&&(scene.score!=_platform.load+1||_teacher.on)){
    _player.base.x-=4*canvas.scale;
    _player.text.x-=4*canvas.scale;

    _player.collisionTop.x-=4*canvas.scale;
    _player.collisionBottom.x-=4*canvas.scale;
    _player.collisionLeft.x-=4*canvas.scale;
    _player.collisionRight.x-=4*canvas.scale;

    _player.cloud.x-=4*canvas.scale;
    _player.gun.x-=4*canvas.scale;
  }

  if(_player.base.x>=canvas.width&&scene.score==_platform.load+1&&!_teacher.on){
    scene.vx-=canvas.width;
    scene.vy=0;

    _platform.array[_platform.lenght-1].y=canvas.height-_platform.height;

    _player.base.y=_platform.array[_platform.lenght-1].y-_player.base.height;
    _player.text.y=_player.base.y-(12*canvas.scale);

    _player.collisionLeft.y=_player.base.y+(8*canvas.scale);
    _player.collisionRight.y=_player.base.y+(8*canvas.scale);
    _player.collisionTop.y=_player.base.y;
    if(_player.skin==0||_player.skin==2){ _player.collisionBottom.y=(_player.base.y+(81*canvas.scale))+_player.vy; }
    else{ _player.collisionBottom.y=(_player.base.y+(75*canvas.scale))+_player.vy; }

    _player.cloud.y=_player.base.y+_player.cloud.height;
    _player.gun.y=_player.base.y+(40*canvas.scale);

    _teacher.on=true;
  } else if(_player.base.x<canvas.width&&scene.score==_platform.load+1&&_teacher.on){ scene.vx=0; }

  if(_player.active){
    _player.upTimer=0;
    _player.gravity=0.5*canvas.scale;

    _player.grounded=true;
    _player.jumped=false;
    _player.vy=0;
  } else{ _player.grounded=false; }

  if(_player.fly){
    _player.upTimer++;

    if(_player.upTimer<12){
      _player.gravity=0;
      _player.vy=0;
    } else{ _player.gravity=0.5*canvas.scale; }
  } else{
    _player.upTimer=0;
    _player.gravity=0.5*canvas.scale;
  }

  _player.active=false;
  _player.fly=false;
  _player.touched=false;
}

