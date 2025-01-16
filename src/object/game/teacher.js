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

_teacher.render=function(){
  if((_teacher.invisible==0||_teacher.hp==0)||(_teacher.invisible>=1&&_teacher.invisible%2==0||global.pause)){
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
}

_teacher.textRender=function(){
  if(_teacher.hp!=0&&_teacher.invisible!=0&&global.addon){
    if(_teacher.invisible<5){ context.render(_teacher.text,_teacher.text.color0,_teacher.text.value0); }
    else if(_teacher.invisible>=5&&_teacher.invisible<10){ context.render(_teacher.text,_teacher.text.color1,_teacher.text.value0); }
    else if(_teacher.invisible>=10&&_teacher.invisible<_teacher.max-10){ context.render(_teacher.text,_teacher.text.color2,_teacher.text.value0); }
    else if(_teacher.invisible>=_teacher.max-10&&_teacher.invisible<_teacher.max-5){ context.render(_teacher.text,_teacher.text.color1,_teacher.text.value0); }
    else{ context.render(_teacher.text,_teacher.text.color0,_teacher.text.value0); }
  }
}

_teacher.update=function(){
  if(!global.pause&&_player.hp!=0){
    scene.timer++;

    if(scene.timer<60){ _player.cloud.y=canvas.height+_player.cloud.height; }
    if(scene.timer==60&&global.sfx){
      // _audio.bossStart.load();
      // _audio.bossStart.play();
    } if(scene.timer>=60&&scene.timer<99){
      _teacher.base.x-=5*canvas.scale;
      _teacher.cloud.x-=5*canvas.scale;
      if(_teacher.round==0){ _player.cloud.y-=2*canvas.scale; }
    } if(scene.timer==100){
      if(global.teacher){
        global.pause=true;
        global.pauseChange=true;
        global.pauseAnimation=true;
        global.currentTeacher=true;
      }

      _player.cloudFly=true;
    } if(scene.timer>=100&&scene.timer<126){
      _teacher.base.y-=4*canvas.scale;
      _teacher.cloud.y-=4*canvas.scale;

      _teacher.load=false;
    } if(scene.timer>=126&&scene.timer<140){
      if(!_teacher.load){ _attack.handle(); }

      _teacher.load=true;
    } if(scene.timer>=140&&scene.timer<166){
      _teacher.base.y+=4*canvas.scale;
      _teacher.cloud.y+=4*canvas.scale;

      _teacher.load=false;
    } if(scene.timer>=166&&scene.timer<180){
      if(!_teacher.load){ _attack.handle(); }

      _teacher.load=true;
    } if(scene.timer>=180&&scene.timer<206){
      _teacher.base.y+=4*canvas.scale;
      _teacher.cloud.y+=4*canvas.scale;

      _teacher.load=false;
    } if(scene.timer>=206&&scene.timer<220){
      if(!_teacher.load){ _attack.handle(); }

      _teacher.load=true;
    } if(scene.timer>=220&&scene.timer<246){
      _teacher.base.y-=4*canvas.scale;
      _teacher.cloud.y-=4*canvas.scale;

      _teacher.load=false;
    } if(scene.timer>=246&&scene.timer<260){
      if(!_teacher.load){ _attack.handle(); }

      _teacher.load=true;
    } if(scene.timer==260){
      _teacher.base.y-=4*canvas.scale;
      _teacher.cloud.y-=4*canvas.scale;

      scene.timer=100;
    } if(scene.timer>=300&&scene.timer<330){
      _teacher.base.x+=6*canvas.scale;
      _teacher.cloud.x+=6*canvas.scale;
    } if(scene.timer>=330&&scene.timer<360&&scene.value!=11){
      scene.win=true;
      _teacher.on=false;
    } if(scene.timer>=330&&scene.timer<360&&scene.value==11&&_teacher.round==2){
      global.pause=true;
      global.pauseChange=true;
      global.pauseAnimation=true;
      global.currentReward=true;
      scene.timer=360;
    } if(scene.timer>=330&&scene.timer<360&&scene.value==11&&_teacher.round<=1){
      _teacher.round++;
      _teacher.hp=250;

      scene.timer=60;

      _teacher.base.y=104*canvas.scale; 
      _teacher.base.x=canvas.width+_teacher.base.width+(32*canvas.scale);
      _teacher.cloud.y=174*canvas.scale;
      _teacher.cloud.x=canvas.width+_teacher.base.width+(16*canvas.scale);
    } if(scene.timer>=360&&scene.value==11&&_teacher.round==2&&!global.pause){
      scene.win=true;

      global.currentReward=false;
      _teacher.on=false;
    }
  }

  if(context.collision(_teacher.base,_player.ammo)&&_teacher.invisible==0&&!_player.ammo.power){
    if(!_player.ammo.power){
      _teacher.hp-=25;
      _teacher.text.value0="-25 punktów\nz zachowania";
    } else{
      _teacher.hp-=50;
      _teacher.text.value0="-50 punktów\nz zachowania";
    }

    if(global.sfx&&_teacher.hp>0){
      // _audio.bossHit.load();
      // _audio.bossHit.play();
    } else if(_teacher.hp<=0){
      // _audio.bossDie.load();
      // _audio.bossDie.play();
    }

    if(_teacher.hp>0){ _teacher.invisible=1; }
    else{ scene.timer=300; }
  }
}

