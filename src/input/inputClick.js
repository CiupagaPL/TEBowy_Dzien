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

window.addEventListener("click",function(){
  if(!scene.blocked&&!canvas.error){
    if(context.collision(_title,mouse)&&(scene.value==1||scene.value>=2&&
       global.pause)){ window.open("https://github.com/CiupagaPL/Tebowy_Dzien","_blank").focus(); }

    if(context.collision(_start.base,mouse)&&scene.value==0&&!render.error&&scene.timer<70){ scene.timer=70; }

    if(context.collision(_resolution,mouse)&&(scene.value<=1||scene.value>=2&&global.pause)){
      if(document.fullscreenElement){ document.exitFullscreen(); }
      else{
        if(document.documentElement.webkitRequestFullscreen){ document.documentElement.webkitRequestFullscreen(); }
        else if(document.documentElement.msRequestFullscreen){ document.documentElement.msRequestFullscreen(); }
        else{ document.documentElement.requestFullscreen(); }
      }
    }

    if(scene.value==1||global.pause){
      if(context.collision(_button.start.base,mouse)&&!scene.blocked&&(scene.value==1||scene.value>=2&&
         !global.currentTutorial&&!global.currentTeacher&&!global.currentReward)){
        scene.blocked=true;
        if(global.sfx){
          // _audio.click.load();
          // _audio.click.play();
        }

        if(scene.value==1){
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
        } else{
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
        }

        return true;
      }

      else if(context.collision(_button.level.base,mouse)&&scene.value==1){
        scene.blocked=true;
        if(global.sfx){
          // _audio.click.load();
          // _audio.click.play();
        }

        if(_button.level.on){
          _blueprint.close=true;
          _button.level.animation=true;
        } else{
          _button.custom.on=false;
          _button.custom.animation=false;

          if(!_clipboard.on){ _button.level.animation=true; }
          else if(_button.custom.on){ _button.custom.animation=true; } 
          else{
            _clipboard.close=true;
            _clipboard.change=true;
            _button.level.animation=true;

            if(_button.setting.on){ _button.setting.animation=true; }
            else if(_button.about.on){ _button.about.animation=true; }
            else{ _button.version.animation=true; }
          }
        }

        return true;
      }

      else if(context.collision(_button.menu.base,mouse)&&scene.value>=2&&global.pause&&!global.currentTutorial&&
         !global.currentTeacher&&!global.currentReward){
        scene.blocked=true;
        if(global.sfx){
          // _audio.click.load();
          // _audio.click.play();
        }

        if(_clipboard.on){
          scene.auto=true;
          scene.nextAuto=1;
          _clipboard.close=true;
        
          if(_button.setting.on){ _button.setting.animation=true; } 
          else if(_button.about.on){ _button.about.animation=true; }
          else{ _button.version.animation=true; }
        } else{
          scene.next=1;
          scene.change=true;
          global.pauseChange=true;
        }

        return true;
      }

      else if(context.collision(_button.custom.base,mouse)&&scene.value==1){
        scene.blocked=true;
        if(global.sfx){
          // _audio.click.load();
          // _audio.click.play();
        }

        if(_button.custom.on){
          _blueprint.close=true;
          _button.custom.animation=true;
        } else{
          _button.level.on=false;
          _button.level.animation=false;

          if(!_clipboard.on){ _button.custom.animation=true; }
          else if(_button.level.on){ _button.level.animation=true; }
          else{
            _clipboard.close=true;
            _clipboard.change=true;
            _button.custom.animation=true;

            if(_button.setting.on){ _button.setting.animation=true; }
            else if(_button.about.on){ _button.about.animation=true; }
            else{ _button.version.animation=true; }
          }
        }

        return true;
      }

      else if(context.collision(_button.restart.base,mouse)&&global.pause&&!global.currentTutorial&&
         !global.currentTeacher&&!global.currentReward){
        scene.blocked=true;
        if(global.sfx){
          // _audio.click.load();
          // _audio.click.play();
        }

        if(_clipboard.on){
          global.autoRestart=true;
          _clipboard.close=true;

          if(_button.setting.on){ _button.setting.animation=true; }
          else if(_button.about.on){ _button.about.animation=true; }
          else if(_button.version.on){ _button.version.animation=true; }
        } else{ global.restart=true; }

        return true;
      }

      else if(context.collision(_button.setting.base,mouse)&&(scene.value==1||scene.value>=2&&global.pause&&
         !global.currentTutorial&&!global.currentTeacher&&!global.currentReward)){
        scene.blocked=true;
        if(global.sfx){
          // _audio.click.load();
          // _audio.click.play();
        }

        if(_button.setting.on){
          _clipboard.close=true;
          _button.setting.animation=true;
        } else{
          _button.about.on=false;
          _button.about.animation=false;
          _button.version.on=false;
          _button.version.animation=false;

          if(!_blueprint.on){ _button.setting.animation=true; }
          else if(_button.about.on){ _button.setting.animation=true; }
          else if(_button.version.on){ _button.version.animation=true; }
          else{
            _blueprint.close=true;
            _blueprint.change=true;
            _button.setting.animation=true;

            if(_button.level.on){ _button.level.animation=true; }
            else{ _button.custom.animation=true; }
          }
        }

        return true;
      }

      else if(context.collision(_button.about.base,mouse)&&(scene.value==1||scene.value>=2&&global.pause&&
         !global.currentTutorial&&!global.currentTeacher&&!global.currentReward)){
        scene.blocked=true;
        if(global.sfx){
          // _audio.click.load();
          // _audio.click.play();
        }

        if(_button.about.on){
          _clipboard.close=true;
          _button.about.animation=true;
        } else{
          _button.setting.on=false;
          _button.setting.animation=false;
          _button.version.on=false;
          _button.version.animation=false;

          if(!_blueprint.on){ _button.about.animation=true; }
          else if(_button.setting.on){ _button.setting.animation=true; }
          else if(_button.version.on){ _button.version.animation=true; }
          else{
            _blueprint.close=true;
            _blueprint.change=true;
            _button.about.animation=true;

            if(_button.level.on){ _button.level.animation=true; }
            else{ _button.custom.animation=true; }
          }
        }

        return true;
      }

      else if(context.collision(_button.version.base,mouse)&&(scene.value==1||scene.value>=2&&global.pause&&
         !global.currentTutorial&&!global.currentTeacher&&!global.currentReward)){
        scene.blocked=true;
        if(global.sfx){
          // _audio.click.load();
          // _audio.click.play();
        }

        if(_button.version.on){
          _clipboard.close=true;
          _button.version.animation=true;
        } else{
          _button.setting.on=false;
          _button.setting.animation=false;
          _button.about.on=false;
          _button.about.animation=false;

          if(!_blueprint.on){ _button.version.animation=true; }
          else if(_button.setting.on){ _button.setting.animation=true; }
          else if(_button.about.on){ _button.about.animation=true; }
          else{
            _blueprint.close=true;
            _blueprint.change=true;
            _button.version.animation=true;

            if(_button.level.on){ _button.level.animation=true; }
            else{ _button.custom.animation=true; }
          }
        }

        return true;
      }
    }

    if(context.collision(_clipboard.back,mouse)&&_clipboard.on){
      if(global.sfx){
        // _audio.paper.load();
        // _audio.paper.play();
      }

      _clipboard.close=true;
      scene.blocked=true;

      if(_button.setting.on){ _button.setting.animation=true; }
      else if(_button.about.on){ _button.about.animation=true; }
      else{ _button.version.animation=true; }

      return true;
    }

    if(context.collision(_clipboard.wideBack,mouse)&&global.pause&&(global.currentTutorial||global.currentReward)){
      scene.blocked=true;
      if(global.sfx){
        // _audio.paper.load();
        // _audio.paper.play();
      }

      global.pauseChange=true;
      global.pauseAnimation=false;

      if(global.currentTutorial){ global.currentTutorial=false; }
      else{ global.currentReward=false; }

      return true;
    }

    if(_blueprint.on){
      if(context.collision(_blueprint.back,mouse)&&_blueprint.on){
        if(global.sfx){
          // _audio.paper.load();
          // _audio.paper.play();
        }

        _blueprint.close=true;
        scene.blocked=true;

        if(_button.level.on){ _button.level.animation=true; }
        else{ _button.custom.animation=true; }

        return true;
      } else if(context.collision(_blueprint.left,mouse)&&_button.custom.on){
        if(global.sfx){
          // _audio.paper.load();
          // _audio.paper.play();
        }

        if(_player.skin>=1){
          _player.skin--;
          _blueprint.custom.text.value0=Number(_player.skin+1)+"/4";
        }

        return true;
      } else if(context.collision(_blueprint.right,mouse)&&_button.custom.on){
        if(global.sfx){
          // _audio.paper.load();
          // _audio.paper.play();
        }

        if(_player.skin<=2){
          _player.skin++;
          _blueprint.custom.text.value0=Number(_player.skin+1)+"/4";
        }

        return true;
      }
    }

    if(context.collision(_blueprint.wideBack,mouse)&&global.pause&&global.currentTeacher){
      scene.blocked=true;
      if(global.sfx){
        // _audio.paper.load();
        // _audio.paper.play();
      }

      global.pauseChange=true;
      global.pauseAnimation=false;

      return true;
    }

    if(_button.level.on&&(context.collision(_blueprint.level.button1,mouse)||
       context.collision(_blueprint.level.button1,mouse)||context.collision(_blueprint.level.button2,mouse)||
       context.collision(_blueprint.level.button3,mouse)||context.collision(_blueprint.level.button4,mouse)||
       context.collision(_blueprint.level.button5,mouse)||context.collision(_blueprint.level.button6,mouse)||
       context.collision(_blueprint.level.button7,mouse)||context.collision(_blueprint.level.button8,mouse)||
       context.collision(_blueprint.level.button9,mouse)||context.collision(_blueprint.level.button10,mouse))){
      scene.blocked=true;
      if(global.sfx){
        // _audio.paper.load();
        // _audio.paper.play();
      }

      if(context.collision(_blueprint.level.button1,mouse)){ scene.nextAuto=2; }
      else if(context.collision(_blueprint.level.button2,mouse)){ scene.nextAuto=3; }
      else if(context.collision(_blueprint.level.button3,mouse)){ scene.nextAuto=4; }
      else if(context.collision(_blueprint.level.button4,mouse)){ scene.nextAuto=5; }
      else if(context.collision(_blueprint.level.button5,mouse)){ scene.nextAuto=6; }
      else if(context.collision(_blueprint.level.button6,mouse)){ scene.nextAuto=7; }
      else if(context.collision(_blueprint.level.button7,mouse)){ scene.nextAuto=8; }
      else if(context.collision(_blueprint.level.button8,mouse)){ scene.nextAuto=9; }
      else if(context.collision(_blueprint.level.button9,mouse)){ scene.nextAuto=10; }
      else if(context.collision(_blueprint.level.button10,mouse)){ scene.nextAuto=11; }

      scene.auto=true;
      _blueprint.close=true;

      if(_blueprint.on){
        if(_button.level.on){ _button.level.animation=true; }
        else{ _button.custom.animation=true; }
      }

      return true;
    }

    if(_button.setting.on){
      if(context.collision(_clipboard.setting.sfx.base,mouse)){
        if(global.sfx){ global.sfx=false; }
        else{
          global.sfx=true;

          // _audio.paper.load();
          // _audio.paper.play();
        }

        return true;
      } else if(context.collision(_clipboard.setting.music.base,mouse)){
        if(global.sfx){
          // _audio.paper.load();
          // _audio.paper.play();
        }

        if(global.music){ global.music=false; }
        else{ global.music=true; }

        return true;
      } else if(context.collision(_clipboard.setting.tutorial.base,mouse)){
        if(global.sfx){
          // _audio.paper.load();
          // _audio.paper.play();
        }

        if(global.tutorial){ global.tutorial=false; }
        else{ global.tutorial=true; }

        return true;
      } else if(context.collision(_clipboard.setting.teacher.base,mouse)){
        if(global.sfx){
          // _audio.paper.load();
          // _audio.paper.play();
        }

        if(global.teacher){ global.teacher=false; }
        else{ global.teacher=true; }

        return true;
      } else if(context.collision(_clipboard.setting.addon.base,mouse)){
        if(global.sfx){
          // _audio.paper.load();
          // _audio.paper.play();
        }

        if(global.addon){ global.addon=false; }
        else{ global.addon=true; }

        return true;
      }
    }

    if(context.collision(_hud.icon.pause,mouse)&&!global.pause&&scene.value>=2){
      if(global.sfx){
        // _audio.click.load();
        // _audio.click.play();
      }

      global.pause=true;
      global.pauseChange=true;
      global.pauseAnimation=true;
    }
  }
});

