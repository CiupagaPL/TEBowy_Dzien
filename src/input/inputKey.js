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

window.addEventListener("keydown",function(event){
  if(!global.pause&&_player.hp>0&&scene.value>=2){
    if(event.key=="a"||event.key=="A"||event.key=="ArrowLeft"){
      keyDown.left=true;
      keyDown.right=false;

      _player.left=true;
      _player.vx=-4*canvas.scale;
    } else if(event.key=="d"||event.key=="D"||event.key=="ArrowRight"){
      keyDown.right=true;
      keyDown.left=false;

      _player.left=false;
      _player.vx=4*canvas.scale;
    } else if((event.key=="w"||event.key=="W"||event.key=="ArrowUp"||event.key==" ")&&_player.cloudFly){
      keyDown.up=true;
      keyDown.down=false;
      _player.vy=-4*canvas.scale;
    } else if((event.key=="s"||event.key=="S"||event.key=="ArrowDown")&&_player.cloudFly){
      keyDown.down=true;
      keyDown.up=false;
      _player.vy=4*canvas.scale;
    }
  }
});

window.addEventListener("keyup",function(event){
  if(!scene.blocked&&!canvas.error){
    if(scene.value==0&&event.key=="Enter"&&scene.timer<70){ scene.timer=70; }
    else if(scene.value==1){
      if(event.key=="Enter"){
        scene.blocked=true;
        if(global.sfx){
          // _audio.click.load();
          // _audio.click.play();
        }

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

        return true;
      }

      else if(event.key=="Escape"&&(_clipboard.on||_blueprint.on)){
        scene.blocked=true;
        if(global.sfx){
          // _audio.click.load();
          // _audio.click.play();
        }

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
          scene.blocked=true;
          if(global.sfx&&!_clipboard.on&&!global.currentTutorial&&!global.currentReward){
            // _audio.click.load();
            // _audio.click.play();
          } else if(global.sfx&&(_clipboard.on||global.currentTutorial||global.currentReward)){
            // _audio.paper.load();
            // _audio.paper.play();
          }

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
        } else{
          if(global.sfx){
            // _audio.click.load();
            // _audio.click.play();
          }

          global.pauseChange=true;
          global.pauseAnimation=true;
        }

        return true;
      }

      if(!global.pause){
        if(_player.hp>0){
          if(event.key=="a"||event.key=="A"||event.key=="ArrowLeft"){
            keyDown.left=false;

            if(!keyDown.right){ _player.vx=0; }
            else{ _player.vx=4*canvas.scale; }
          } if(event.key=="d"||event.key=="D"||event.key=="ArrowRight"){
            keyDown.right=false;

            if(!keyDown.left){ _player.vx=0; }
            else{ _player.vx=-4*canvas.scale; }
          } if((event.key=="w"||event.key=="W"||event.key=="ArrowUp"||event.key==" ")&&_player.cloudFly){
            keyDown.up=false;

            if(!keyDown.down){ _player.vy=0; }
            else{ _player.vy=4*canvas.scale; }
          } if((event.key=="s"||event.key=="S"||event.key=="ArrowDown")&&_player.cloudFly){
            keyDown.down=false;

            if(!keyDown.up){ _player.vy=0; }
            else{ _player.vy=-4*canvas.scale; }
          }
        }

        if((event.key==" "||event.key=="ArrowUp"||event.key=="w"||event.key=="W")&&
           _player.hp>0&&_player.grounded&&!_player.cloudFly){
          if(global.sfx){
            // _audio.jump.load();
            // _audio.jump.play();
          }

          _player.jumped=true;
          _player.vy=_player.ivy;

          return true;
        }

        if(event.key=="Shift"&&_teacher.on&&_player.gun.on){
          if(global.sfx){
            // _audio.laser.load();
            // _audio.laser.play();
          }

          _player.ammo.x=_player.base.x+(20*canvas.scale);
          _player.ammo.y=_player.base.y+(20*canvas.scale);
          _player.ammo.unused=false;

          _player.gun.timer=0;
          _player.gun.on=false;

          if(_player.gun.power){
            _player.ammo.power=true;
            _player.gun.power=false;
          }
        }
      }
    }
  }
});

