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

_attack.update=function(){
  if(!global.pause&&_player.hp!=0){
    if(_attack.tebulinek.unused){ _attack.tebulinek.x=-_attack.tebulinek.width; }
    else{
      _attack.tebulinek.x-=context.move(8);
      _attack.tebulinek.rotation+=context.frame(4);
    }
    if(_attack.tebulinek.x<=-_attack.tebulinek.width){
      _attack.tebulinek.unused=true;
      _attack.tebulinek.rotation=0;
    }

    if(_attack.object1.unused){ _attack.object1.x=-_attack.object1.width; }
    else{
      _attack.object1.x-=context.move(8);
      _attack.object1.rotation+=context.frame(4);
    }
    if(_attack.object1.x<=-_attack.object1.width){
      _attack.object1.unused=true;
      _attack.object1.rotation=0;
    }

    if(_attack.object2.unused){ _attack.object2.x=-_attack.object2.width; }
    else{
      _attack.object2.x-=context.move(8);
      _attack.object2.rotation+=context.frame(4);
    }
    if(_attack.object2.x<=-_attack.object2.width){
      _attack.object2.unused=true;
      _attack.object2.rotation=0;
    }

    if(context.collision(_player.base,_attack.tebulinek)){ _player.gun.power=true; }

    if((context.collision(_player.base,_attack.object1)||context.collision(_player.base,_attack.object2))&&_player.invisible==0){
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
  }
}

_attack.handle=function(){
  if(global.sfx){ audio.fire2_sfx.play(); }

  while(!_teacher.attack){
    _teacher.random=Math.floor(Math.random()*4);

    if(_teacher.random==0&&_attack.tebulinek.unused){
      _attack.tebulinek.x=(_teacher.cloud.x+(_teacher.cloud.width/2))-(_attack.tebulinek.width/2);
      _attack.tebulinek.y=_teacher.cloud.y+context.scale(4);
      _attack.tebulinek.timer=0;
      _attack.tebulinek.unused=false;
      _teacher.attack=true;
    } else{
      _teacher.random=Math.floor(Math.random()*4);

      if((_teacher.random==0||_teacher.random==1)&&_attack.object1.unused){
        _attack.object1.x=(_teacher.cloud.x+(_teacher.cloud.width/2))-(_attack.object1.width/2);
        _attack.object1.y=_teacher.cloud.y+context.scale(4);
        _attack.object1.timer=0;
        _attack.object1.unused=false;
        _teacher.attack=true;

        if(_teacher.random==0){ _attack.object1.current=0; }
        else{ _attack.object1.current=1; }
      } else if((_teacher.random==2||_teacher.random==3)&&_attack.object2.unused){
        _attack.object2.x=(_teacher.cloud.x+(_teacher.cloud.width/2))-(_attack.object2.width/2);
        _attack.object2.y=_teacher.cloud.y+context.scale(4);
        _attack.object2.timer=0;
        _attack.object2.unused=false;
        _teacher.attack=true;

        if(_teacher.random==2){ _attack.object2.current=0; }
        else{ _attack.object2.current=1; }
      }
    }
  } _teacher.attack=false;
}
