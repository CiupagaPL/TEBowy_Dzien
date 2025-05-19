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
      _player.base.vx=-context.move(4);
    } else if(event.key=="d"||event.key=="D"||event.key=="ArrowRight"){
      keyDown.right=true;
      keyDown.left=false;

      _player.left=false;
      _player.base.vx=context.move(4);
    } else if((event.key=="w"||event.key=="W"||event.key=="ArrowUp"||event.key==" ")&&_player.cloud.on){
      keyDown.up=true;
      keyDown.down=false;
      _player.base.vy=-context.move(4);
    } else if((event.key=="s"||event.key=="S"||event.key=="ArrowDown")&&_player.cloud.on){
      keyDown.down=true;
      keyDown.up=false;
      _player.base.vy=context.move(4);
    }
  }
});

window.addEventListener("keyup",function(event){
  if(!scene.blocked&&!canvas.error){
    if(event.key=="Enter"&&scene.value==0&&!render.error&&scene.time<context.time(100)){
      scene.time=context.time(100);
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
          else if(_button.about0.on){ _button.about0.animation=true; }
          else{ _button.about1.animation=true; }
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
        else if(_button.about0.on){ _button.about0.animation=true; }
        else if(_button.about1.on){ _button.about1.animation=true; }
        else{ _button.custom.animation=true; }
      }
    } else{
      if(event.key=="Escape"&&!scene.change){
        if(global.pause){
          if(global.sfx){ audio.click1_sfx.play(); }
          scene.blocked=true;

          if(_clipboard.on){
            _clipboard.close=true;

            if(_button.setting.on){ _button.setting.animation=true; }
            else if(_button.about0.on){ _button.about0.animation=true; }
            else{ _button.about1.animation=true; }
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

            if(!keyDown.right){ _player.base.vx=0; }
            else{ _player.base.vx=context.move(4); }
          } if(event.key=="d"||event.key=="D"||event.key=="ArrowRight"){
            keyDown.right=false;

            if(!keyDown.left){ _player.base.vx=0; }
            else{ _player.base.vx=-context.move(4); }
          } if((event.key=="w"||event.key=="W"||event.key=="ArrowUp"||event.key==" ")&&_player.cloud.on){
            keyDown.up=false;

            if(!keyDown.down){ _player.base.vy=0; }
            else{ _player.base.vy=context.move(4); }
          } if((event.key=="s"||event.key=="S"||event.key=="ArrowDown")&&_player.cloud.on){
            keyDown.down=false;

            if(!keyDown.up){ _player.base.vy=0; }
            else{ _player.base.vy=-context.move(4); }
          }
        }

        if((event.key==" "||event.key=="ArrowUp"||event.key=="w"||event.key=="W")&&
           _player.hp>0&&_player.ground&&!scene.teacher){
          if(global.sfx){
            if(audio.jump==0){
              audio.jump_sfx.play();
              audio.jump=1;
            } else{
              audio.jump_alt.play();
              audio.jump=0;
            }
          } _player.base.vy=_player.base.ivy;
        }

        if((event.key=="r"||event.key=="R")){
          _player.gun.time=0;
          _player.gun.type++;
          if(_player.gun.type==3){ _player.gun.type=0; }
        }

        if(_player.touchTebox&&(event.key=="e"||event.key=="E")&&_tebox.loot.time==0){
          if(_tebox.base.first!=-1){
            if(global.sfx){ audio.chest_sfx.play(); }
            _player.action.time=1;

            _tebox.loot.current=_tebox.base.first;
            if(_tebox.loot.current==3&&_player.hp>=4){ _tebox.loot.current=Math.floor(Math.random()*3); }
            else if(_tebox.loot.current==3&&_player.hp<4){ _tebox.loot.current=Math.floor(Math.random()*6); }

            if(_tebox.loot.current==1){ _player.gun.ammo1++; }
            else if(_tebox.loot.current==2||_tebox.loot.current==0){
              _tebox.loot.current=2;
              _player.gun.ammo2++;
            } else{
              _player.hp++;
              _player.heal=true;
            }

            _tebox.loot.alpha=100;
            _tebox.base.first=-1;
          } else if(_tebox.base.second!=-1){
            if(global.sfx){ audio.chest_sfx.play(); }
            _player.action.time=1;

            _tebox.loot.current=_tebox.base.second;
            if(_tebox.loot.current==1){ _player.gun.ammo1++; }
            else if(_tebox.loot.current==2||_tebox.loot.current==0){
              _tebox.loot.current=2;
              _player.gun.ammo2++;
            }

            _tebox.loot.alpha=100;
            _tebox.base.second=-1;
          } else if(_tebox.base.third!=-1){
            if(global.sfx){ audio.chest_sfx.play(); }

            _tebox.loot.current=_tebox.base.third;
            if(_tebox.loot.current!=0){
              if(_tebox.loot.current==1&&_player.gun.ammo1-10>_player.gun.ammo2){ _tebox.loot.current=2 }
              else if(_tebox.loot.current==2&&_player.gun.ammo2-10>_player.gun.ammo1){ _tebox.loot.current=1; }
            } if(_tebox.loot.current==0){ scene.key=true; }
            else if(_tebox.loot.current==1){ _player.gun.ammo1++; }
            else if(_tebox.loot.current==2){ _player.gun.ammo2++; }

            _tebox.loot.alpha=100;
            _tebox.base.third=-1;
          }
        }

        if(_player.touchDoor&&(event.key=="e"||event.key=="E")&&!scene.load&&!global.pause&&scene.key){
          if(global.sfx){ audio.door_sfx.play(); }
          scene.blocked=true;
          scene.load=true;
        }

        if(context.collision(_player.base,_player.cloud)&&(event.key=="e"||event.key=="E")&&!scene.load&&scene.teacher&&!global.pause&&!_player.cloud.on){
          if(global.sfx){ audio.unlock_sfx.play(); }
          _player.cloud.on=true;
          _player.base.vy=0;

          _player.base.y=_player.cloud.y-context.scale(64);
          _player.collisionLeft.y=_player.base.y+context.scale(12);
          _player.collisionRight.y=_player.base.y+context.scale(12);
          _player.collisionTop.y=_player.base.y-context.scale(4);
          _player.collisionBottom.y=_player.base.y+context.scale(90);
          _player.gun.y=_player.base.y+context.scale(32);
        }

        if((event.key=="q"||event.key=="Q")&&(_player.gun.type==0&&_player.gun.time>=context.time(90)||_player.gun.type==1&&_player.gun.time>=context.time(120)&&
           _player.gun.ammo1>0||_player.gun.type==2&&_player.gun.time>=context.time(60)&&_player.gun.ammo2>0)&&(!scene.teacher||scene.teacher&&scene.time>=context.time(100))){
          if(global.sfx){
            if(audio.fire1==0){
              audio.fire1_sfx.play();
              audio.fire1++;
            } else{
              audio.fire1_alt.play();
              audio.fire1=0;
            }
          }

          _player.ammo.x=_player.base.x+context.scale(32);
          _player.ammo.y=_player.base.y+context.scale(44);

          _player.ammo.unused=false;
          _player.gun.time=0;
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
