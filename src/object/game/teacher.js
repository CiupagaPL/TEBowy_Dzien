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

_teacher.render=function(){
  if(_teacher.invisible>=1){
    if(_teacher.invisible<context.time(30)){ _teacher.base.alpha-=context.frame(8); }
    else{
      _teacher.base.alpha+=context.frame(8);
      if(_teacher.base.alpha>=100){ _teacher.invisible=0; }
    }
  } else{ _teacher.base.alpha=100; }

  if(_teacher.left){
    if(scene.value==2){ context.render(_teacher.base,_teacher.base.img0Left); }
    else if(scene.value==3){ context.render(_teacher.base,_teacher.base.img1Left); }
    else if(scene.value==4){ context.render(_teacher.base,_teacher.base.img2Left); }
    else if(scene.value==5){ context.render(_teacher.base,_teacher.base.img3Left); }
    else if(scene.value==6){ context.render(_teacher.base,_teacher.base.img4Left); }
    else if(scene.value==7){ context.render(_teacher.base,_teacher.base.img5Left); }
    else if(scene.value==8){ context.render(_teacher.base,_teacher.base.img6Left); }
    else if(scene.value==9){ context.render(_teacher.base,_teacher.base.img7Left); }
    else if(scene.value==scene.count&&_teacher.round==0){ context.render(_teacher.base,_teacher.base.img8Left); }
    else if(scene.value==scene.count&&_teacher.round==1){ context.render(_teacher.base,_teacher.base.img9Left); }
    else{ context.render(_teacher.base,_teacher.base.img10Left); }
  } else{
    if(scene.value==2){ context.render(_teacher.base,_teacher.base.img0); }
    else if(scene.value==3){ context.render(_teacher.base,_teacher.base.img1); }
    else if(scene.value==4){ context.render(_teacher.base,_teacher.base.img2); }
    else if(scene.value==5){ context.render(_teacher.base,_teacher.base.img3); }
    else if(scene.value==6){ context.render(_teacher.base,_teacher.base.img4); }
    else if(scene.value==7){ context.render(_teacher.base,_teacher.base.img5); }
    else if(scene.value==8){ context.render(_teacher.base,_teacher.base.img6); }
    else if(scene.value==9){ context.render(_teacher.base,_teacher.base.img7); }
    else if(scene.value==scene.count&&_teacher.round==0){ context.render(_teacher.base,_teacher.base.img8); }
    else if(scene.value==scene.count&&_teacher.round==1){ context.render(_teacher.base,_teacher.base.img9); }
    else{ context.render(_teacher.base,_teacher.base.img10); }
  }

  if(_teacher.hp>0){
    if(scene.value!=scene.count){
      if(_teacher.left){ context.render(_teacher.cloud,_teacher.cloud.img0); }
      else{ context.render(_teacher.cloud,_teacher.cloud.img1); }
    } else{
      if(_teacher.left){ context.render(_teacher.cloud,_teacher.cloud.img0Final); }
      else{ context.render(_teacher.cloud,_teacher.cloud.img1Final); }
    }
  } else{
    if(_teacher.left){ context.render(_teacher.cloud,_teacher.cloud.img0Lose); }
    else{ context.render(_teacher.cloud,_teacher.cloud.img1Lose); }
  }
}

_teacher.update=function(){
  if(!global.pause&&_player.hp!=0&&!scene.load){
    scene.timer++;
    if(_teacher.invisible>=1){ _teacher.invisible++; }

    if(scene.timer==context.time(60)&&global.sfx){ audio.entrance_sfx.play(); }
    else if(scene.timer>=context.time(60)&&scene.timer<context.time(100)){
      _teacher.base.x-=context.move(4);
      _teacher.cloud.x-=context.move(4);
    } else if(scene.timer==context.time(100)){
      global.pause=true;
      global.pauseChange=true;
      global.pauseAnimation=true;
      global.currentTeacher=true;
    } else if(scene.timer>context.time(100)&&scene.timer<context.time(125)){
      _teacher.base.y-=context.move(4);
      _teacher.cloud.y-=context.move(4);
    } else if(scene.timer==context.time(125)){ _attack.handle(); }
    else if(scene.timer>context.time(140)&&scene.timer<context.time(165)){
      _teacher.base.y-=context.move(4);
      _teacher.cloud.y-=context.move(4);
    } else if(scene.timer==context.time(165)){ _attack.handle(); }
    else if(scene.timer>context.time(180)&&scene.timer<context.time(215)){
      _teacher.base.y-=context.move(4);
      _teacher.cloud.y-=context.move(4);
    } else if(scene.timer==context.time(215)){
      if(_teacher.base.x>canvas.width/2){
        _teacher.base.x=context.scale(32);
        _teacher.cloud.x=context.scale(22);
        _teacher.left=false;
      } else{
        _teacher.base.x=context.scale(568);
        _teacher.cloud.x=context.scale(558);
        _teacher.left=true;
      }
    } else if(scene.timer>context.time(215)&&scene.timer<context.time(250)){
      _teacher.base.y+=context.move(4);
      _teacher.cloud.y+=context.move(4);
    } else if(scene.timer==context.time(250)){ _attack.handle(); }
    else if(scene.timer>context.time(265)&&scene.timer<context.time(290)){
      _teacher.base.y+=context.move(4);
      _teacher.cloud.y+=context.move(4);
    } else if(scene.timer==context.time(290)){ _attack.handle(); }
    else if(scene.timer>context.time(305)&&scene.timer<context.time(330)){
      _teacher.base.y+=context.move(4);
      _teacher.cloud.y+=context.move(4);
    } else if(scene.timer==context.time(330)){ _attack.handle(); }
    else if(scene.timer==context.time(345)){ scene.timer=context.time(100); }
    else if(scene.timer>=context.time(350)&&scene.timer<context.time(380)){
      if(_teacher.left){
        _teacher.base.x+=context.move(6);
        _teacher.cloud.x+=context.move(6);
      } else{
        _teacher.base.x-=context.move(6);
        _teacher.cloud.x-=context.move(6);
      }
    } else if(scene.timer==context.time(385)&&scene.value==scene.count&&_teacher.round==2){
      global.pause=true;
      global.pauseChange=true;
      global.pauseAnimation=true;
      global.currentReward=true;
      scene.timer=context.time(390);
    } else if(scene.timer==context.time(385)&&scene.value==scene.count&&_teacher.round<=1){
      _teacher.round++;
      _teacher.hp=30;
      _teacher.left=true;
      scene.timer=context.time(60);

      _teacher.base.y=context.scale(188);
      _teacher.base.x=canvas.width+_teacher.base.width+context.scale(40);
      _teacher.cloud.y=context.scale(274);
      _teacher.cloud.x=canvas.width+_teacher.base.width+context.scale(30);
    } else if(scene.timer==context.time(390)&&scene.value==scene.count&&_teacher.round==2&&!global.pause){
      scene.win=true;
      global.currentReward=false;
    }
  } if(_teacher.hp==0&&scene.timer<context.time(350)){ scene.timer=context.time(350); }

  if((context.collision(_teacher.base,_player.ammo)||context.collision(_teacher.cloud,_player.ammo))&&_teacher.invisible==0&&!_player.ammo.unused){
    if(_player.ammo.type==0){ _teacher.hp-=1; }
    else if(_player.ammo.type==1){ _teacher.hp-=4; }
    else{ _teacher.hp-=2; }
    _player.ammo.unused=true;

    if(global.sfx){
      if(_teacher.hp>0){
        if(audio.damage2==0){
          audio.damage2_sfx.play();
          audio.damage2++;
        } else{
          audio.damage2_alt.play();
          audio.damage2++;
        }
      } else{ audio.lost2_sfx.play(); }
    }

    if(_teacher.hp>0){ _teacher.invisible=1; }
    else{ _teacher.hp=0; }
  }
}
