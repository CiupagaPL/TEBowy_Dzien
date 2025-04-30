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
    if(!_attack.tebulinek.unused){
      if(!_attack.tebulinek.touch){
        if(_attack.tebulinek.left){ _attack.tebulinek.x-=context.move(8); }
        else{ _attack.tebulinek.x+=context.move(8); }
        _attack.tebulinek.rotation+=context.frame(4);
      } else{
        _attack.tebulinek.alpha-=context.frame(4);
        if(_attack.tebulinek.alpha<=0){ _attack.tebulinek.unused=true; }
      }
    } if(_attack.tebulinek.x<=-_attack.tebulinek.width||_attack.tebulinek.x>=canvas.width+_attack.tebulinek.width||_attack.tebulinek.unused&&_attack.tebulinek.touch){
      _attack.tebulinek.unused=true;
      _attack.tebulinek.touch=false;
      _attack.tebulinek.alpha=100;
      _attack.tebulinek.rotation=0;
    } if(!_attack.object0.unused){
      if(!_attack.object0.touch){
        if(_attack.object0.left){ _attack.object0.x-=context.move(8); }
        else{ _attack.object0.x+=context.move(8); }
        _attack.object0.rotation+=context.frame(4);
      } else{
        _attack.object0.alpha-=context.frame(8);
        if(_attack.object0.alpha<=0){ _attack.object0.unused=true; }
      }
    } if(_attack.object0.x<=-_attack.object0.width||_attack.object0.x>=canvas.width+_attack.object0.width||_attack.object0.unused&&_attack.object0.touch){
      _attack.object0.unused=true;
      _attack.object0.touch=false;
      _attack.object0.alpha=100;
      _attack.object0.rotation=0;
    } if(!_attack.object1.unused){
      if(!_attack.object1.touch){
        if(_attack.object1.left){ _attack.object1.x-=context.move(8); }
        else{ _attack.object1.x+=context.move(8); }
        _attack.object1.rotation+=context.frame(4);
      } else{
        _attack.object1.alpha-=context.frame(8);
        if(_attack.object1.alpha<=0){ _attack.object1.unused=true; }
      }
    } if(_attack.object1.x<=-_attack.object1.width||_attack.object1.x>=canvas.width+_attack.object1.width||_attack.object1.unused&&_attack.object1.touch){
      _attack.object1.unused=true;
      _attack.object1.touch=false;
      _attack.object1.alpha=100;
      _attack.object1.rotation=0;
    }

    if((context.collision(_player.base,_attack.tebulinek)||context.collision(_player.cloud,_attack.tebulinek))&&!_attack.tebulinek.touch&&!_attack.tebulinek.unused){
      if(global.sfx){ audio.chest_sfx.play(); }
      _loot.x=_attack.tebulinek.x+context.scale(15);
      _loot.y=_attack.tebulinek.y+_loot.height;
      _loot.alpha=100;

      if(_player.hp>=4){ _loot.current=Math.floor(Math.random()*3); }
      else{ _loot.current=Math.floor(Math.random()*6); }

      if(_loot.current==1){ _player.gun.ammo1++; }
      else if(_loot.current==2||_loot.current==0){
        _loot.current=2;
        _player.gun.ammo2++;
      } else{
        _player.hp++;
        _player.heal=true;
      } _attack.tebulinek.touch=true;
    }

    if((context.collision(_player.base,_attack.object0)&&!_attack.object0.unused||context.collision(_player.base,_attack.object1)&&!_attack.object1.unused||
       context.collision(_player.cloud,_attack.object0)&&!_attack.object0.unused||context.collision(_player.cloud,_attack.object1)&&!_attack.object1.unused)&&
       _player.invisible==0){
      if(global.sfx&&_player.hp>0){
        if(audio.damage1==0){
          audio.damage1_sfx.play();
          audio.damage1++;
        } else{
          audio.damage1_alt.play();
          audio.damage1=0;
        }
      }

      _player.hp-=1;
      _player.damage=true;
      _player.invisible=1;
      if(context.collision(_player.base,_attack.object0)||context.collision(_player.cloud,_attack.object0)){ _attack.object0.touch=true; }
      else{ _attack.object1.touch=true; }
    }
  }
}

_attack.handle=function(){
  if(global.sfx){
    if(audio.fire2==0){
      audio.fire2_sfx.play();
      audio.fire2++;
    } else{
      audio.fire2_alt.play();
      audio.fire2=0;
    }
  }

  while(!_teacher.attack){
    _teacher.random=Math.floor(Math.random()*8);

    if(_teacher.random==0&&_attack.tebulinek.unused){
      _attack.tebulinek.x=(_teacher.cloud.x+(_teacher.cloud.width/2))-(_attack.tebulinek.width/2);
      _attack.tebulinek.y=_teacher.cloud.y+context.scale(4);
      _attack.tebulinek.unused=false;
      _teacher.attack=true;
      if(_teacher.left){ _attack.tebulinek.left=true; }
      else{ _attack.tebulinek.left=false; }
    } else{
      _teacher.random=Math.floor(Math.random()*4);

      if((_teacher.random==0||_teacher.random==1)&&_attack.object0.unused){
        _attack.object0.x=(_teacher.cloud.x+(_teacher.cloud.width/2))-(_attack.object0.width/2);
        _attack.object0.y=_teacher.cloud.y+context.scale(4);
        _attack.object0.unused=false;
        _teacher.attack=true;
        if(_teacher.left){ _attack.object0.left=true; }
        else{ _attack.object0.left=false; }

        if(_teacher.random==0){ _attack.object0.current=0; }
        else{ _attack.object0.current=1; }
      } else if((_teacher.random==2||_teacher.random==3)&&_attack.object1.unused){
        _attack.object1.x=(_teacher.cloud.x+(_teacher.cloud.width/2))-(_attack.object1.width/2);
        _attack.object1.y=_teacher.cloud.y+context.scale(4);
        _attack.object1.unused=false;
        _teacher.attack=true;
        if(_teacher.left){ _attack.object1.left=true; }
        else{ _attack.object1.left=false; }

        if(_teacher.random==2){ _attack.object1.current=0; }
        else{ _attack.object1.current=1; }
      }
    }
  } _teacher.attack=false;
}
