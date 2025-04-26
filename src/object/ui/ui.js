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

_ui.update=function(){
  if(global.pause&&_ui.show){
    _ui.game.heart.background.alpha=100;
    _ui.game.ammo.background.alpha=100;
    _ui.game.key.background.alpha=100;
    _ui.game.pause.background.alpha=100;
    _ui.game.info.background.alpha=100;
    _ui.game.teacher.background.alpha=100;

    if(_ui.game.key.background.y+_ui.game.key.background.height>0){
      _ui.game.heart.main.y-=context.move(10);
      _ui.game.heart.background.y-=context.move(10);
      _ui.game.heart.icon.y-=context.move(10);
      _ui.game.heart.text.y-=context.move(10);
      _ui.game.ammo.main.y-=context.move(10);
      _ui.game.ammo.background.y-=context.move(10);
      _ui.game.ammo.icon.y-=context.move(10);
      _ui.game.ammo.text.y-=context.move(10);
      _ui.game.key.main.y-=context.move(10);
      _ui.game.key.background.y-=context.move(10);
      _ui.game.key.icon.y-=context.move(10);
      _ui.game.key.text.y-=context.move(10);
      _ui.game.pause.main.y-=context.move(10);
      _ui.game.pause.background.y-=context.move(10);
      _ui.game.pause.icon.y-=context.move(10);
      _ui.game.pause.text.y-=context.move(10);
      _ui.game.info.main.y-=context.move(10);
      _ui.game.info.background.y-=context.move(10);
      _ui.game.info.icon.y-=context.move(10);
      _ui.game.info.text.y-=context.move(10);
      _ui.game.info.score.y-=context.move(10);
      _ui.game.info.level.y-=context.move(10);
      _ui.game.info.time.y-=context.move(10);
      _ui.game.teacher.main.y-=context.move(10);
      _ui.game.teacher.background.y-=context.move(10);
      _ui.game.teacher.icon.y-=context.move(10);
      _ui.game.teacher.text.y-=context.move(10);
    } else{ _ui.show=false; }
  } else if(!global.pause&&!_ui.show){
    if(_ui.game.key.background.y<=context.scale(30)){
      _ui.game.heart.main.y+=context.move(10);
      _ui.game.heart.background.y+=context.move(10);
      _ui.game.heart.icon.y+=context.move(10);
      _ui.game.heart.text.y+=context.move(10);
      _ui.game.ammo.main.y+=context.move(10);
      _ui.game.ammo.background.y+=context.move(10);
      _ui.game.ammo.icon.y+=context.move(10);
      _ui.game.ammo.text.y+=context.move(10);
      _ui.game.key.main.y+=context.move(10);
      _ui.game.key.background.y+=context.move(10);
      _ui.game.key.icon.y+=context.move(10);
      _ui.game.key.text.y+=context.move(10);
      _ui.game.pause.main.y+=context.move(10);
      _ui.game.pause.background.y+=context.move(10);
      _ui.game.pause.icon.y+=context.move(10);
      _ui.game.pause.text.y+=context.move(10);
      _ui.game.info.main.y+=context.move(10);
      _ui.game.info.background.y+=context.move(10);
      _ui.game.info.icon.y+=context.move(10);
      _ui.game.info.text.y+=context.move(10);
      _ui.game.info.score.y+=context.move(10);
      _ui.game.info.level.y+=context.move(10);
      _ui.game.info.time.y+=context.move(10);
      _ui.game.teacher.main.y+=context.move(10);
      _ui.game.teacher.background.y+=context.move(10);
      _ui.game.teacher.icon.y+=context.move(10);
      _ui.game.teacher.text.y+=context.move(10);
    } else{
      _ui.game.heart.main.y=context.scale(6);
      _ui.game.heart.background.y=context.scale(4);
      _ui.game.heart.icon.y=context.scale(10);
      _ui.game.heart.text.y=context.scale(36);
      _ui.game.ammo.main.y=context.scale(6);
      _ui.game.ammo.background.y=context.scale(4);
      _ui.game.ammo.icon.y=context.scale(10);
      _ui.game.ammo.text.y=context.scale(35);
      _ui.game.key.main.y=context.scale(44);
      _ui.game.key.background.y=context.scale(42);
      _ui.game.key.icon.y=context.scale(47);
      _ui.game.key.text.y=context.scale(73);
      _ui.game.pause.main.y=context.scale(6);
      _ui.game.pause.background.y=context.scale(4);
      _ui.game.pause.icon.y=context.scale(26);
      _ui.game.pause.text.y=context.scale(36);
      _ui.game.info.main.y=context.scale(6);
      _ui.game.info.background.y=context.scale(4);
      _ui.game.info.icon.y=context.scale(8);
      _ui.game.info.text.y=context.scale(36);
      _ui.game.info.score.y=context.scale(16);
      _ui.game.info.level.y=context.scale(26);
      _ui.game.info.time.y=context.scale(36);
      _ui.game.teacher.main.y=context.scale(44);
      _ui.game.teacher.background.y=context.scale(42);
      _ui.game.teacher.icon.y=context.scale(47);
      _ui.game.teacher.text.y=context.scale(73);

      _ui.show=true;
    }
  }

  if(_player.damage||_player.heal||_ui.message){
    if(!_ui.message){
      if(_player.damage){ _ui.game.notification.info.value0="-25 punktów z\nzachowania!"; }
      else if(_player.heal){ _ui.game.notification.info.value0="+25 punktów z\nzachowania!"; }

      if(_ui.game.notification.main.x<context.scale(-5)&&!global.pause&&_player.hp>0){
        _ui.game.notification.main.x+=context.move(10);
        _ui.game.notification.background.x+=context.move(10);
        _ui.game.notification.icon.x+=context.move(10);
        _ui.game.notification.text.x+=context.move(10);
        _ui.game.notification.info.x+=context.move(10);
      } else if(_ui.game.notification.main.x<context.scale(-5)&&(global.pause||_player.hp==0)){
        if(_ui.game.notification.main.x>context.scale(-130)){
          _ui.game.notification.main.x-=context.move(10);
          _ui.game.notification.background.x-=context.move(10);
          _ui.game.notification.icon.x-=context.move(10);
          _ui.game.notification.text.x-=context.move(10);
          _ui.game.notification.info.x-=context.move(10);
        } else{
          _ui.message=false;
          if(_ui.game.notification.info.value0=="-25 punktów z\nzachowania!"){ _player.damage=false; }
          if(_ui.game.notification.info.value0=="+25 punktów z\nzachowania!"){ _player.heal=false; }
        }  
      } else if(_ui.game.notification.main.x>=context.scale(-5)&&!global.pause&&_player.hp>0){
        _ui.game.notification.main.x=context.scale(6);
        _ui.game.notification.background.x=context.scale(4);
        _ui.game.notification.icon.x=context.scale(18);
        _ui.game.notification.text.x=context.scale(14);
        _ui.game.notification.info.x=context.scale(38);

        _ui.message=true;
        _ui.time=context.time(60);
      }
    } else{ 
      if(_ui.time>0){ _ui.time--; }
      if(global.pause||_player.hp==0){ _ui.time=0; }

      if(_ui.game.notification.info.value0=="-25 punktów z\nzachowania!"&&_player.heal&&_ui.time>context.time(15)){ _ui.time=context.time(15); }
      if(_ui.game.notification.info.value0=="+25 punktów z\nzachowania!"&&_player.damage&&_ui.time>context.time(15)){ _ui.time=context.time(15); }

      if(_ui.time<=0){
        if(_ui.game.notification.main.x>context.scale(-130)){
          _ui.game.notification.main.x-=context.move(10);
          _ui.game.notification.background.x-=context.move(10);
          _ui.game.notification.icon.x-=context.move(10);
          _ui.game.notification.text.x-=context.move(10);
          _ui.game.notification.info.x-=context.move(10);
        } else{
          _ui.message=false;
          if(_ui.game.notification.info.value0=="-25 punktów z\nzachowania!"){ _player.damage=false; }
          if(_ui.game.notification.info.value0=="+25 punktów z\nzachowania!"){ _player.heal=false; }
        }  
      }
    }
  }

  if(!global.pause&&_player.hp>0){
    _ui.elapsed++;
    _ui.game.info.time.value0="Czas: "+Math.round(_ui.elapsed/context.time(40))+"s";

    if(_ui.game.heart.icon.timer>=1){
      _ui.game.heart.icon.timer++;

      if(_ui.game.heart.icon.timer==context.time(5)){
        _ui.game.heart.icon.x+=context.scale(1);
        _ui.game.heart.icon.y+=context.scale(1);
        _ui.game.heart.icon.width=context.scale(14);
        _ui.game.heart.icon.height=context.scale(14);
        _ui.game.heart.icon.timer=0;
      }
    } if(_ui.game.ammo.icon.timer>=1){
      _ui.game.ammo.icon.timer++;

      if(_ui.game.ammo.icon.timer==context.time(5)){
        _ui.game.ammo.icon.x+=context.scale(1);
        _ui.game.ammo.icon.y+=context.scale(1);
        _ui.game.ammo.icon.width=context.scale(14);
        _ui.game.ammo.icon.height=context.scale(14);
        _ui.game.ammo.icon.timer=0;
      }
    } if(_ui.game.key.icon.timer>=1){
      _ui.game.key.icon.timer++;

      if(_ui.game.key.icon.timer==context.time(5)){
        _ui.game.key.icon.x+=context.scale(1);
        _ui.game.key.icon.y+=context.scale(1);
        _ui.game.key.icon.width=context.scale(16);
        _ui.game.key.icon.height=context.scale(16);
        _ui.game.key.icon.timer=0;
      }
    } if(_ui.game.pause.icon.timer>=1){
      _ui.game.pause.icon.timer++;

      if(_ui.game.pause.icon.timer==context.time(5)){
        _ui.game.pause.icon.size=context.scale(34);
        _ui.game.pause.icon.timer=0;
      }
    } if(_ui.game.info.icon.timer>=1){
      _ui.game.info.icon.timer++;

      if(_ui.game.info.icon.timer==context.time(5)){
        _ui.game.info.icon.x+=context.scale(1);
        _ui.game.info.icon.y+=context.scale(1);
        _ui.game.info.icon.width=context.scale(20);
        _ui.game.info.icon.height=context.scale(20);

        _ui.game.info.icon.timer=0;
      }
    } if(_ui.game.notification.icon.timer>=1){
      _ui.game.notification.icon.timer++;

      if(_ui.game.notification.icon.timer==context.time(5)){
        _ui.game.notification.icon.size=context.scale(28);
        _ui.game.notification.icon.timer=0;
      }
    } if(_ui.game.teacher.icon.timer>=1){
      _ui.game.teacher.icon.timer++;

      if(_ui.game.teacher.icon.timer==context.time(5)){
        _ui.game.teacher.icon.x+=context.scale(1);
        _ui.game.teacher.icon.y+=context.scale(1);
        _ui.game.teacher.icon.width=context.scale(14);
        _ui.game.teacher.icon.height=context.scale(14);
        _ui.game.teacher.icon.timer=0;
      }
    }
  }
}
