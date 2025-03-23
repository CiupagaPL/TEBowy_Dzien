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
    if(_teacher.invisible<_teacher.max/2){ _teacher.base.alpha-=context.frame(8); }
    else{ _teacher.base.alpha+=context.frame(8); }
  } else{ _teacher.base.alpha=100; }

  if(scene.value==2){ context.render(_teacher.base,_teacher.base.img0); }
  else if(scene.value==3){ context.render(_teacher.base,_teacher.base.img1); }
  else if(scene.value==4){ context.render(_teacher.base,_teacher.base.img2); }
  else if(scene.value==5){ context.render(_teacher.base,_teacher.base.img3); }
  else if(scene.value==6){ context.render(_teacher.base,_teacher.base.img4); }
  else if(scene.value==7){ context.render(_teacher.base,_teacher.base.img5); }
  else if(scene.value==8){ context.render(_teacher.base,_teacher.base.img6); }
  else if(scene.value==9){ context.render(_teacher.base,_teacher.base.img7); }
  else if(scene.value==10){ context.render(_teacher.base,_teacher.base.img1); }
  else if(scene.value==11&&_teacher.round==0){ context.render(_teacher.base,_teacher.base.imgAdd0); }
  else if(scene.value==11&&_teacher.round==1){ context.render(_teacher.base,_teacher.base.imgAdd1); }
  else{ context.render(_teacher.base,_teacher.base.imgAdd2); }
}

_teacher.textRender=function(){
  if(_teacher.hp!=0&&_teacher.invisible!=0&&global.addon){
    if(_teacher.invisible<_teacher.max/2){ _teacher.text.alpha+=context.frame(8); }
    else if(_teacher.invisible==_teacher.max/2){ _teacher.text.alpha=100; }
    else{ _teacher.text.alpha-=context.frame(8); }

    context.text(_teacher.text,_teacher.text.color0,_teacher.text.value0);
  }
}

_teacher.update=function(){
  if(!global.pause&&_player.hp!=0){
    scene.timer++;

    if(scene.timer==context.time(1)){
      html.classList.remove("black-cyan"); 
      html.classList.remove("black-red"); 
      html.classList.add("cyan-red");
    } else if(scene.timer<context.time(60)){
      _player.cloud.y=canvas.height+_player.cloud.height;
      audio.current=0;
    } else if(scene.timer==context.time(60)&&global.sfx){
      audio.entrance_sfx.load();
      audio.entrance_sfx.play();
    } else if(scene.timer>=context.time(60)&&scene.timer<context.time(99)){
      _teacher.base.x-=context.move(5);
      _teacher.cloud.x-=context.move(5);
      if(_teacher.round==0){ _player.cloud.y-=context.scale(2); }
    } else if(scene.timer==context.time(100)){
      if(global.teacher){
        global.pause=true;
        global.pauseChange=true;
        global.pauseAnimation=true;
        global.currentTeacher=true;
      }

      _player.cloudFly=true;
    } else if(scene.timer>=context.time(100)&&scene.timer<context.time(126)){
      _teacher.base.y-=context.move(4);
      _teacher.cloud.y-=context.move(4);

      _teacher.load=false;
    } else if(scene.timer>=context.time(126)&&scene.timer<context.time(140)){
      if(!_teacher.load){ _attack.handle(); }

      _teacher.load=true;
    } else if(scene.timer>=context.time(140)&&scene.timer<context.time(166)){
      _teacher.base.y+=context.move(4);
      _teacher.cloud.y+=context.move(4);

      _teacher.load=false;
    } else if(scene.timer>=context.time(166)&&scene.timer<context.time(180)){
      if(!_teacher.load){ _attack.handle(); }

      _teacher.load=true;
    } else if(scene.timer>=context.time(180)&&scene.timer<context.time(206)){
      _teacher.base.y+=context.move(4);
      _teacher.cloud.y+=context.move(4);

      _teacher.load=false;
    } else if(scene.timer>=context.time(206)&&scene.timer<context.time(220)){
      if(!_teacher.load){ _attack.handle(); }

      _teacher.load=true;
    } else if(scene.timer>=context.time(220)&&scene.timer<context.time(246)){
      _teacher.base.y-=context.move(4);
      _teacher.cloud.y-=context.move(4);

      _teacher.load=false;
    } else if(scene.timer>=context.time(246)&&scene.timer<context.time(260)){
      if(!_teacher.load){ _attack.handle(); }

      _teacher.load=true;
    } else if(scene.timer==context.time(260)){
      _teacher.base.y-=context.move(4);
      _teacher.cloud.y-=context.move(4);

      scene.timer=context.time(100);
    } else if(scene.timer>=context.time(300)&&scene.timer<context.time(330)){
      _teacher.base.x+=context.move(6);
      _teacher.cloud.x+=context.move(6);
    } else if(scene.timer>=context.time(330)&&scene.timer<context.time(360)&&scene.value==11&&_teacher.round==2){
      global.pause=true;
      global.pauseChange=true;
      global.pauseAnimation=true;
      global.currentReward=true;
      scene.timer=context.time(360);
    } else if(scene.timer>=context.time(330)&&scene.timer<context.time(360)&&scene.value==11&&_teacher.round<=1){
      _teacher.round++;
      _teacher.hp=10;

      scene.timer=context.time(60);

      _teacher.base.y=context.scale(104); 
      _teacher.base.x=canvas.width+_teacher.base.width+context.scale(32);
      _teacher.cloud.y=context.scale(174);
      _teacher.cloud.x=canvas.width+_teacher.base.width+context.scale(16);
    } else if(scene.timer>=context.time(360)&&scene.value==11&&_teacher.round==2&&!global.pause){
      scene.win=true;
      global.currentReward=false;
      _teacher.on=false;
    }
  }

  if(context.collision(_teacher.base,_player.ammo)&&_teacher.invisible==0){
    if(!_player.ammo.power){
      _teacher.hp-=1;
      _teacher.text.value0="-25 punktów\nz zachowania";
    } else{
      _teacher.hp-=2;
      _teacher.text.value0="-50 punktów\nz zachowania";
    }

    if(global.sfx){
      if(_teacher.hp>0){ audio.damage2_sfx.play(); }
      else{ audio.lost2_sfx.play(); }
    }

    if(_teacher.hp>0){ _teacher.invisible=1; }
    else{ scene.timer=context.time(300); }
  }
}
