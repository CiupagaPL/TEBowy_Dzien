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

_player.render=function(){
  if(_player.invisible>=1){
    if(_player.invisible<context.time(45)){ _player.base.alpha-=context.frame(8); }
    else{
      _player.base.alpha+=context.frame(8);
      if(_player.base.alpha>=100){ _player.invisible=0; }
    }
  } if(!_player.ammo.unused){
    if(_player.ammo.type==0){ context.render(_player.ammo,_player.ammo.imgNormal); }
    else if(_player.ammo.type==1){ context.render(_player.ammo,_player.ammo.imgStrong); }
    else{ context.render(_player.ammo,_player.ammo.imgFast); }
  }

  if(_player.hp>0&&!global.load){
    if(!_player.left){
      if(_player.skin==0){
        context.render(_player.base,_player.base.imgBoy);

        if(_player.gun.type==0){
          if(_player.gun.time<context.time(45)||global.pause){ context.render(_player.gun,_player.gun.img0BoyNormal); }
          else if(_player.gun.time>=context.time(45)&&_player.gun.time<context.time(90)&&!global.pause){ context.render(_player.gun,_player.gun.img1BoyNormal); }
          else if(!global.pause){ context.render(_player.gun,_player.gun.img2BoyNormal); }
        } else if(_player.gun.type==1){
          if(_player.gun.time<context.time(60)||global.pause){ context.render(_player.gun,_player.gun.img0BoyStrong); }
          else if(_player.gun.time>=context.time(60)&&_player.gun.time<context.time(120)&&!global.pause){ context.render(_player.gun,_player.gun.img1BoyStrong); }
          else if(!global.pause){ context.render(_player.gun,_player.gun.img2BoyStrong); }
        } else{
          if(_player.gun.time<context.time(30)||global.pause){ context.render(_player.gun,_player.gun.img0BoyFast); }
          else if(_player.gun.time>=context.time(30)&&_player.gun.time<context.time(60)&&!global.pause){ context.render(_player.gun,_player.gun.img1BoyFast); }
          else if(!global.pause){ context.render(_player.gun,_player.gun.img2BoyFast); }
        }
      } else{
        context.render(_player.base,_player.base.imgGirl);

        if(_player.gun.type==0){
          if(_player.gun.time<context.time(45)||global.pause){ context.render(_player.gun,_player.gun.img0GirlNormal); }
          else if(_player.gun.time>=context.time(45)&&_player.gun.time<context.time(90)&&!global.pause){ context.render(_player.gun,_player.gun.img1GirlNormal); }
          else if(!global.pause){ context.render(_player.gun,_player.gun.img2GirlNormal); }
        } else if(_player.gun.type==1){
          if(_player.gun.time<context.time(60)||global.pause){ context.render(_player.gun,_player.gun.img0GirlStrong); }
          else if(_player.gun.time>=context.time(60)&&_player.gun.time<context.time(120)&&!global.pause){ context.render(_player.gun,_player.gun.img1GirlStrong); }
          else if(!global.pause){ context.render(_player.gun,_player.gun.img2GirlStrong); }
        } else{
          if(_player.gun.time<context.time(30)||global.pause){ context.render(_player.gun,_player.gun.img0GirlFast); }
          else if(_player.gun.time>=context.time(30)&&_player.gun.time<context.time(60)&&!global.pause){ context.render(_player.gun,_player.gun.img1GirlFast); }
          else if(!global.pause){ context.render(_player.gun,_player.gun.img2GirlFast); }
        }
      }
    } else{
      if(_player.skin==0){
        context.render(_player.base,_player.base.imgBoyLeft);

        if(_player.gun.type==0){
          if(_player.gun.time<context.time(45)||global.pause){ context.render(_player.gun,_player.gun.img0BoyNormalLeft); }
          else if(_player.gun.time>=context.time(45)&&_player.gun.time<context.time(90)&&!global.pause){ context.render(_player.gun,_player.gun.img1BoyNormalLeft); }
          else if(!global.pause){ context.render(_player.gun,_player.gun.img2BoyNormalLeft); }
        } else if(_player.gun.type==1){
          if(_player.gun.time<context.time(60)||global.pause){ context.render(_player.gun,_player.gun.img0BoyStrongLeft); }
          else if(_player.gun.time>=context.time(60)&&_player.gun.time<context.time(120)&&!global.pause){ context.render(_player.gun,_player.gun.img1BoyStrongLeft); }
          else if(!global.pause){ context.render(_player.gun,_player.gun.img2BoyStrongLeft); }
        } else{
          if(_player.gun.time<context.time(30)||global.pause){ context.render(_player.gun,_player.gun.img0BoyFastLeft); }
          else if(_player.gun.time>=context.time(30)&&_player.gun.time<context.time(60)&&!global.pause){ context.render(_player.gun,_player.gun.img1BoyFastLeft); }
          else if(!global.pause){ context.render(_player.gun,_player.gun.img2BoyFastLeft); }
        }
      } else{
        context.render(_player.base,_player.base.imgGirlLeft);

        if(_player.gun.type==0){
          if(_player.gun.time<context.time(45)||global.pause){ context.render(_player.gun,_player.gun.img0GirlNormalLeft); }
          else if(_player.gun.time>=context.time(45)&&_player.gun.time<context.time(90)&&!global.pause){ context.render(_player.gun,_player.gun.img1GirlNormalLeft); }
          else if(!global.pause){ context.render(_player.gun,_player.gun.img2GirlNormalLeft); }
        } else if(_player.gun.type==1){
          if(_player.gun.time<context.time(60)||global.pause){ context.render(_player.gun,_player.gun.img0GirlStrongLeft); }
          else if(_player.gun.time>=context.time(60)&&_player.gun.time<context.time(120)&&!global.pause){ context.render(_player.gun,_player.gun.img1GirlStrongLeft); }
          else if(!global.pause){ context.render(_player.gun,_player.gun.img2GirlStrongLeft); }
        } else{
          if(_player.gun.time<context.time(30)||global.pause){ context.render(_player.gun,_player.gun.img0GirlFastLeft); }
          else if(_player.gun.time>=context.time(30)&&_player.gun.time<context.time(60)&&!global.pause){ context.render(_player.gun,_player.gun.img1GirlFastLeft); }
          else if(!global.pause){ context.render(_player.gun,_player.gun.img2GirlFastLeft); }
        }
      }
    }
  }

  if(scene.teacher){
    if(!global.restart){
      if(_player.left){ context.render(_player.cloud,_player.cloud.imgLeft); }
      else{ context.render(_player.cloud,_player.cloud.img); }
    } else{
      if(_player.left){ context.render(_player.cloud,_player.cloud.imgLostLeft); }
      else{ context.render(_player.cloud,_player.cloud.imgLost); }
    }
  }
}

_player.update=function(){
  if(!global.pause&&_player.hp>0&&!scene.change){
    if(_player.invisible>=1){ _player.invisible++; }

    _player.base.y+=_player.base.vy;
    _player.collisionTop.y+=_player.base.vy;
    _player.collisionBottom.y+=_player.base.vy;
    _player.collisionLeft.y+=_player.base.vy;
    _player.collisionRight.y+=_player.base.vy;

    if(_player.cloud.on){ _player.cloud.y+=_player.base.vy; }
    _player.gun.y+=_player.base.vy;
    _player.ammo.y+=scene.vy;
    _player.action.y+=scene.vy;
    if(!_player.cloud.on){ _player.base.vy+=_player.base.gravity; }
    if(!_player.ammo.unused){
      if(!_player.ammo.left){ _player.ammo.x+=context.move(12); }
      else{ _player.ammo.x-=context.move(12); }

      if(_player.ammo.x+_player.ammo.width-scene.vx>=context.scale(800)||_player.ammo.x<-context.scale(160)){ _player.ammo.unused=true; }
    }

    if(!_player.ground){
      _player.base.y+=scene.vy;
      _player.collisionTop.y+=scene.vy;
      _player.collisionBottom.y+=scene.vy;
      _player.collisionLeft.y+=scene.vy;
      _player.collisionRight.y+=scene.vy;
      _player.gun.y+=scene.vy;
      _player.action.y+=scene.vy;
    }

    _player.base.x+=scene.vx+_player.base.vx;
    _player.collisionTop.x+=scene.vx+_player.base.vx;
    _player.collisionBottom.x+=scene.vx+_player.base.vx;
    _player.collisionLeft.x+=scene.vx+_player.base.vx;
    _player.collisionRight.x+=scene.vx+_player.base.vx;

    _player.cloud.x+=scene.vx+_player.base.vx;
    _player.gun.x+=scene.vx+_player.base.vx;
    if(!_player.ammo.unused){ _player.ammo.x+=scene.vx; }
    _player.action.x+=scene.vx+_player.base.vx;

    if((_player.gun.time<context.time(120)&&_player.gun.type==0)||(_player.gun.time<context.time(180)&&_player.gun.type==1&&_player.gun.ammo1>0)||
       (_player.gun.time<context.time(60)&&_player.gun.type==2&&_player.gun.ammo2>0)){ _player.gun.time++; }
  }
}

_player.lateUpdate=function(){
  if(!global.pause&&_player.hp>0){
    if(_player.base.x<=context.scale(124)){
      if(!scene.teacher){ scene.vx=context.move(4); }

      _player.base.x=context.scale(124);
      _player.collisionLeft.x=_player.base.x+context.scale(4);
      _player.collisionRight.x=_player.base.x+context.scale(52);
      _player.collisionTop.x=_player.base.x+context.scale(14);
      _player.collisionBottom.x=_player.base.x+context.scale(12);

      _player.gun.x=_player.base.x;
      _player.cloud.x=_player.base.x-context.scale(6);
      _player.action.x=_player.base.x+_player.base.width;
    } else if(_player.base.x>=context.scale(460)){
      if(!scene.teacher){ scene.vx=-context.move(4); }

      _player.base.x=context.scale(460);
      _player.collisionLeft.x=_player.base.x+context.scale(4);
      _player.collisionRight.x=_player.base.x+context.scale(52);
      _player.collisionTop.x=_player.base.x+context.scale(14);
      _player.collisionBottom.x=_player.base.x+context.scale(12);

      _player.gun.x=_player.base.x;
      _player.cloud.x=_player.base.x-context.scale(6);
      _player.action.x=_player.base.x+_player.base.width;
    } else{ scene.vx=0; }
  } else{ scene.vx=0; }
  if(_player.base.y<=context.scale(16)&&scene.teacher){
    _player.base.y=context.scale(16);
    _player.collisionLeft.y=_player.base.y+context.scale(12);
    _player.collisionRight.y=_player.base.y+context.scale(12);
    _player.collisionTop.y=_player.base.y-context.scale(4);
    _player.collisionBottom.y=_player.base.y+context.scale(90);

    _player.gun.y=_player.base.y+context.scale(32);
    _player.cloud.y=_player.base.y+context.scale(64);
    _player.action.y=_player.base.y;
  }

  if(!global.pause&&_player.hp>0){
    if(context.collision(_player.base,_player.cloud)&&!scene.load&&scene.teacher&&!_player.cloud.on||_player.touchDoor&&!scene.load&&_player.base.vy==0&&!_player.fly&&scene.key||
       _player.touchDoor&&!scene.load&&_player.base.vy==0&&!_player.fly&&!scene.key||_player.touchLock&&!scene.key){ _player.action.alpha=100; }
    else if(_player.touchTebox&&!_tebox.base.key&&_player.base.vy==0||_player.action.time>0){
      if(_player.action.time>=1){
        _player.action.time++;
        _player.action.alpha=100;
        _player.action.width=context.scale(21);
        _player.action.height=context.scale(17);
        if(_player.action.time==context.frame(20)){ _player.action.time=0; }
      } else{
        _player.action.alpha=75;
        _player.action.width=context.scale(20);
        _player.action.height=context.scale(16);
      }
    }

    if(_player.touchDoor&&!scene.load&&_player.base.vy==0&&!_player.fly&&!scene.key||_player.touchLock&&!scene.key){ _player.action.current=0; }
    else if(_player.touchTebox&&!_tebox.base.key&&_player.base.vy==0||context.collision(_player.base,_player.cloud)&&!scene.load&&
            scene.teacher&&!_player.cloud.on||_player.touchDoor&&!scene.load&&_player.base.vy==0&&!_player.fly&&scene.key){ _player.action.current=1; }
    else{ _player.action.current=-1; }
  } else{ _player.action.current=-1; }

  if(_player.active){
    _player.upTime=0;
    _player.base.gravity=context.scale(0.5);

    _player.ground=true;
    _player.base.vy=0;
  } else{ _player.ground=false; }

  if(_player.fly){
    _player.upTime++;

    if(_player.upTime<context.time(20)){
      _player.base.gravity=0;
      _player.base.vy=0;
    } else{ _player.base.gravity=context.scale(0.5); }
  } else{
    _player.upTime=0;
    _player.base.gravity=context.scale(0.5);
  }

  _player.active=false;
  _player.fly=false;
  _player.touchGround=false;
}
