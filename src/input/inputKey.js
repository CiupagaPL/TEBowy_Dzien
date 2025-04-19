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

window.addEventListener("keydown",function(event){
  if(!global.pause&&_player.hp>0&&scene.value>=2){
    if(event.key=="a"||event.key=="A"||event.key=="ArrowLeft"){
      keyDown.left=true;
      keyDown.right=false;

      _player.left=true;
      _player.vx=-context.move(4);
    } else if(event.key=="d"||event.key=="D"||event.key=="ArrowRight"){
      keyDown.right=true;
      keyDown.left=false;

      _player.left=false;
      _player.vx=context.move(4);
    } else if((event.key=="w"||event.key=="W"||event.key=="ArrowUp"||event.key==" ")&&_player.cloudFly){
      keyDown.up=true;
      keyDown.down=false;
      _player.vy=-context.move(4);
    } else if((event.key=="s"||event.key=="S"||event.key=="ArrowDown")&&_player.cloudFly){
      keyDown.down=true;
      keyDown.up=false;
      _player.vy=context.move(4);
    }
  }
});

window.addEventListener("keyup",function(event){
  if(!scene.blocked&&!canvas.error){
    if(event.key=="Enter"&&scene.value==0&&!render.error&&scene.timer<context.time(100)){
      scene.timer=context.time(100);
      _start.base.alpha=100;
    }

    else if(scene.value==1){
      if(event.key=="Enter"){
        scene.blocked=true;
        if(global.sfx){ audio.click3_sfx.play(); }

        if(_clipboard.on){
          scene.auto=true;
          scene.nextAuto=2;
          _clipboard.close=true;

          if(_button.setting.on){ _button.setting.animation=true; }
          else if(_button.about.on){ _button.about.animation=true; }
          else{ _button.version.animation=true; }
        } else if(_blueprint.on){
          scene.auto=true;
          scene.nextAuto=2;
          _blueprint.close=true;

          if(_button.level.on){ _button.level.animation=true; } 
          else{ _button.custom.animation=true; }
        } else{
          scene.next=2;
          scene.change=true;
        }
      }

      else if(event.key=="Escape"&&(_clipboard.on||_blueprint.on)){
        scene.blocked=true;
        if(global.sfx){ audio.click2_sfx.play(); }

        if(_clipboard.on){ _clipboard.close=true; }
        else if(_blueprint.on){ _blueprint.close=true; }

        if(_button.level.on){ _button.level.animation=true; }
        else if(_button.setting.on){ _button.setting.animation=true; }
        else if(_button.about.on){ _button.about.animation=true; }
        else{ _button.custom.animation=true; }
      }
    } else{
      if(event.key=="Escape"){
        if(global.pause){
          if(global.sfx){ audio.click1_sfx.play(); }
          scene.blocked=true;

          if(_clipboard.on){
            global.autoUnpause=true;
            _clipboard.close=true;

            if(_button.setting.on){ _button.setting.animation=true; }
            else if(_button.about.on){ _button.about.animation=true; }
            else{ _button.version.animation=true; }
          } else{
            global.pauseChange=true;
            global.pauseAnimation=false;
          }
        } else if(_ui.show){
          if(global.sfx){ audio.click1_sfx.play(); }

          global.pauseChange=true;
          global.pauseAnimation=true;
        }
      }

      if(!global.pause){
        if(_player.hp>0){
          if(event.key=="a"||event.key=="A"||event.key=="ArrowLeft"){
            keyDown.left=false;

            if(!keyDown.right){ _player.vx=0; }
            else{ _player.vx=context.move(4); }
          } if(event.key=="d"||event.key=="D"||event.key=="ArrowRight"){
            keyDown.right=false;

            if(!keyDown.left){ _player.vx=0; }
            else{ _player.vx=-context.move(4); }
          } if((event.key=="w"||event.key=="W"||event.key=="ArrowUp"||event.key==" ")&&_player.cloudFly){
            keyDown.up=false;

            if(!keyDown.down){ _player.vy=0; }
            else{ _player.vy=context.move(4); }
          } if((event.key=="s"||event.key=="S"||event.key=="ArrowDown")&&_player.cloudFly){
            keyDown.down=false;

            if(!keyDown.up){ _player.vy=0; }
            else{ _player.vy=-context.move(4); }
          }
        }

        if((event.key==" "||event.key=="ArrowUp"||event.key=="w"||event.key=="W")&&
           _player.hp>0&&_player.grounded&&!_player.cloudFly){
          if(global.sfx){ audio.jump_sfx.play(); }

          _player.jumped=true;
          _player.vy=_player.ivy;
        }

        if((event.key=="r"||event.key=="R")){
          _player.gun.timer=0;
          _player.gun.type++;
          if(_player.gun.type==3){ _player.gun.type=0; }
        }

        if(_player.touchTebox&&(event.key=="e"||event.key=="E")&&_loot.timer==0){
          if(_tebox.first!=-1){
            _loot.current=_tebox.first;
            if(_loot.current==3&&_player.hp==5){ _loot.current=Math.floor(Math.random()*2)+1; }

            if(_loot.current==1&&_player.gun.ammo1<50){ _player.gun.ammo1++; }
            else if(_loot.current==2&&_player.gun.ammo2<50){ _player.gun.ammo2++; }
            else{
              _player.hp++;
              _player.heal=true;
            }

            _loot.alpha=100;
            _tebox.first=-1;
          } else if(_tebox.second!=-1){
            _loot.current=_tebox.second;
            if(_loot.current==1&&_player.gun.ammo1<50){ _player.gun.ammo1++; }
            else if(_loot.current==2&&_player.gun.ammo2<50){ _player.gun.ammo2++; }

            _loot.alpha=100;
            _tebox.second=-1;
          } else if(_tebox.third!=-1){
            _loot.current=_tebox.third;
            if(_loot.current==0){ scene.key=true; }
            else if(_loot.current==1&&_player.gun.ammo1<50){ _player.gun.ammo1++; }
            else if(_loot.current==2&&_player.gun.ammo2<50){ _player.gun.ammo2++; }

            _loot.alpha=100;
            _tebox.third=-1;
          }
        }

        if((event.key=="q"||event.key=="Q")&&(_player.gun.type==0&&_player.gun.timer>=context.time(90)||_player.gun.type==1&&_player.gun.timer>=context.time(120)&&
           _player.gun.ammo1>0||_player.gun.type==2&&_player.gun.timer>=context.time(60)&&_player.gun.ammo2>0)){
          if(global.sfx){ audio.fire1_sfx.play(); }

          _player.ammo.x=_player.base.x+context.scale(32);
          _player.ammo.y=_player.base.y+context.scale(44);

          _player.ammo.unused=false;
          _player.gun.timer=0;
          if(!_player.left){ _player.ammo.left=false; }
          else{ _player.ammo.left=true; }
          _player.ammo.type=_player.gun.type;
          if(_player.ammo.type==1){ _player.gun.ammo1--; }
          else if(_player.ammo.type==2){ _player.gun.ammo2--; }
        }
      }
    }
  }
});
