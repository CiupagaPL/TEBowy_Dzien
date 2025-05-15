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

window.addEventListener("click",function(){
  if(!scene.blocked&&!canvas.error){
    if((context.collision(_title.base,mouse)||context.collision(_title.teb,mouse))&&(scene.value==1||scene.value>=2&&global.pause)){
      if(global.sfx){ audio.click1_sfx.play(); }
      window.open("https://teb.pl/oddzialy/d/torun","_blank").focus();
    } if(context.collision(_footer.github,mouse)&&(scene.value==1||scene.value>=2&&global.pause)){
      if(global.sfx){ audio.click1_sfx.play(); }
      window.open("https://github.com/ciupagapl/tebowy_dzien","_blank").focus();
    } if(context.collision(_footer.pastebin,mouse)&&(scene.value==1||scene.value>=2&&global.pause)){
      if(global.sfx){ audio.click1_sfx.play(); }
      window.open("https://pastebin.com/czx0T7u1","_blank").focus();
    }

    if(context.collision(_start.base,mouse)&&scene.value==0&&!render.error&&scene.timer<context.time(100)){
      scene.timer=context.time(100);
      _start.base.alpha=100;
    }

    if(context.collision(_indicator,mouse)&&scene.value<2&&!scene.change){
      if(global.sfx){ audio.click1_sfx.play(); }

      if(document.fullscreenElement){ document.exitFullscreen(); }
      else{
        if(document.documentElement.webkitRequestFullscreen){ document.documentElement.webkitRequestFullscreen(); }
        else if(document.documentElement.msRequestFullscreen){ document.documentElement.msRequestFullscreen(); }
        else{ document.documentElement.requestFullscreen(); }
      }
    }

    if(scene.value==1||global.pause){
      if((context.collision(_button.start.base,mouse)||context.collision(_button.start.text,mouse))&&!scene.blocked&&
         (scene.value==1||scene.value>=2&&!global.currentTutorial&&!global.currentTeacher&&!global.currentReward)){
        scene.blocked=true;
        if(global.sfx){
          if(scene.value==1){ audio.click3_sfx.play(); }
          else{ audio.click1_sfx.play(); }
        }

        if(scene.value==1){
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
        } else{
          if(_clipboard.on){
            global.autoUnpause=true;
            _clipboard.close=true;

            if(_button.setting.on){ _button.setting.animation=true; }
            else if(_button.about0.on){ _button.about0.animation=true; }
            else{ _button.about1.animation=true; }
          } else{
            global.pauseChange=true;
            global.pauseAnimation=false;
          }
        }
      }

      else if((context.collision(_button.level.base,mouse)||context.collision(_button.level.text,mouse))&&scene.value==1){
        scene.blocked=true;
        if(global.sfx){ audio.click1_sfx.play(); }

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
            else if(_button.about0.on){ _button.about0.animation=true; }
            else{ _button.about1.animation=true; }
          }
        }
      }

      else if((context.collision(_button.menu.base,mouse)||context.collision(_button.menu.text,mouse))&&scene.value>=2&&
              global.pause&&!global.currentTutorial&&!global.currentTeacher&&!global.currentReward){
        scene.blocked=true;
        if(global.sfx){ audio.click4_sfx.play(); }

        if(_clipboard.on){
          scene.auto=true;
          scene.nextAuto=1;
          _clipboard.close=true;
        
          if(_button.setting.on){ _button.setting.animation=true; } 
          else if(_button.about0.on){ _button.about0.animation=true; }
          else{ _button.about1.animation=true; }
        } else{
          scene.next=1;
          scene.change=true;
          global.pauseChange=true;
        }
      }

      else if((context.collision(_button.custom.base,mouse)||context.collision(_button.custom.text,mouse))&&scene.value==1){
        scene.blocked=true;
        if(global.sfx){ audio.click1_sfx.play(); }

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
            else if(_button.about0.on){ _button.about0.animation=true; }
            else{ _button.about1.animation=true; }
          }
        }
      }

      else if((context.collision(_button.restart.base,mouse)||context.collision(_button.restart.text,mouse))&&
              global.pause&&!global.currentTutorial&&!global.currentTeacher&&!global.currentReward){
        scene.blocked=true;
        if(global.sfx){ audio.click4_sfx.play(); }

        if(_clipboard.on){
          global.autoRestart=true;
          _clipboard.close=true;

          if(_button.setting.on){ _button.setting.animation=true; }
          else if(_button.about0.on){ _button.about0.animation=true; }
          else{ _button.about1.animation=true; }
        } else{
          global.restart=true;
          scene.change=true;
        }
      }

      else if((context.collision(_button.setting.base,mouse)||context.collision(_button.setting.text,mouse))&&(scene.value==1||scene.value>=2&&
              global.pause&&!global.currentTutorial&&!global.currentTeacher&&!global.currentReward)){
        scene.blocked=true;
        if(global.sfx){ audio.click1_sfx.play(); }

        if(_button.setting.on){
          _clipboard.close=true;
          _button.setting.animation=true;
        } else{
          _button.about0.on=false;
          _button.about0.animation=false;
          _button.about1.on=false;
          _button.about1.animation=false;

          if(!_blueprint.on){ _button.setting.animation=true; }
          else if(_button.about0.on){ _button.about0.animation=true; }
          else if(_button.about1.on){ _button.about1.animation=true; }
          else{
            _blueprint.close=true;
            _blueprint.change=true;
            _button.setting.animation=true;

            if(_button.level.on){ _button.level.animation=true; }
            else{ _button.custom.animation=true; }
          }
        }
      }

      else if((context.collision(_button.about0.base,mouse)||context.collision(_button.about0.text,mouse))&&(scene.value==1||scene.value>=2&&
              global.pause&&!global.currentTutorial&&!global.currentTeacher&&!global.currentReward)){
        scene.blocked=true;
        if(global.sfx){ audio.click1_sfx.play(); }

        if(_button.about0.on){
          _clipboard.close=true;
          _button.about0.animation=true;
        } else{
          _button.setting.on=false;
          _button.setting.animation=false;
          _button.about1.on=false;
          _button.about1.animation=false;

          if(!_blueprint.on){ _button.about0.animation=true; }
          else if(_button.setting.on){ _button.setting.animation=true; }
          else if(_button.about1.on){ _button.about1.animation=true; }
          else{
            _blueprint.close=true;
            _blueprint.change=true;
            _button.about0.animation=true;

            if(_button.level.on){ _button.level.animation=true; }
            else{ _button.custom.animation=true; }
          }
        }
      }

      else if((context.collision(_button.about1.base,mouse)||context.collision(_button.about1.text,mouse))&&(scene.value==1||scene.value>=2&&
              global.pause&&!global.currentTutorial&&!global.currentTeacher&&!global.currentReward)){
        scene.blocked=true;
        if(global.sfx){ audio.click1_sfx.play(); }

        if(_button.about1.on){
          _clipboard.close=true;
          _button.about1.animation=true;
        } else{
          _button.setting.on=false;
          _button.setting.animation=false;
          _button.about0.on=false;
          _button.about0.animation=false;

          if(!_blueprint.on){ _button.about1.animation=true; }
          else if(_button.setting.on){ _button.setting.animation=true; }
          else if(_button.about0.on){ _button.about0.animation=true; }
          else{
            _blueprint.close=true;
            _blueprint.change=true;
            _button.about1.animation=true;

            if(_button.level.on){ _button.level.animation=true; }
            else{ _button.custom.animation=true; }
          }
        }
      }
    }

    if(context.collision(_clipboard.back,mouse)&&_clipboard.on){
      if(global.sfx){ audio.click1_sfx.play(); }

      _clipboard.close=true;
      scene.blocked=true;

      if(_button.setting.on){ _button.setting.animation=true; }
      else if(_button.about0.on){ _button.about0.animation=true; }
      else{ _button.about1.animation=true; }
    }

    if(context.collision(_footer.next,mouse)&&(global.currentReward||global.currentTeacher||global.currentTutorial)){
      scene.blocked=true;
      if(global.sfx){ audio.click1_sfx.play(); }

      global.pauseChange=true;
      global.pauseAnimation=false;
    }

    if(context.collision(_account.background,mouse)&&(scene.value==1||scene.value>=2&&global.pause)){ if(global.sfx){ audio.click1_sfx.play(); } }

    if(_blueprint.on){
      if(context.collision(_blueprint.back,mouse)&&_blueprint.on){
        if(global.sfx){ audio.click1_sfx.play(); }

        _blueprint.close=true;
        scene.blocked=true;

        if(_button.level.on){ _button.level.animation=true; }
        else{ _button.custom.animation=true; }
      } else if(context.collision(_blueprint.left,mouse)&&_button.custom.on){
        if(global.sfx){ audio.click1_sfx.play(); }

        _player.skin=0;
        _blueprint.text.value0=Number(_player.skin+1)+"/2";
      } else if(context.collision(_blueprint.right,mouse)&&_button.custom.on){
        if(global.sfx){ audio.click1_sfx.play(); }

        _player.skin=1;
        _blueprint.text.value0=Number(_player.skin+1)+"/2";
      }
    }

    if(_button.level.on&&(context.collision(_blueprint.level.button1,mouse)||
       context.collision(_blueprint.level.button1,mouse)||context.collision(_blueprint.level.button2,mouse)||
       context.collision(_blueprint.level.button3,mouse)||context.collision(_blueprint.level.button4,mouse)||
       context.collision(_blueprint.level.button5,mouse)||context.collision(_blueprint.level.button6,mouse)||
       context.collision(_blueprint.level.button7,mouse)||context.collision(_blueprint.level.button8,mouse)||
       context.collision(_blueprint.level.buttonF,mouse))){
      scene.blocked=true;
      if(global.sfx){ audio.click2_sfx.play(); }

      if(context.collision(_blueprint.level.button1,mouse)){ scene.nextAuto=2; }
      else if(context.collision(_blueprint.level.button2,mouse)){ scene.nextAuto=3; }
      else if(context.collision(_blueprint.level.button3,mouse)){ scene.nextAuto=4; }
      else if(context.collision(_blueprint.level.button4,mouse)){ scene.nextAuto=5; }
      else if(context.collision(_blueprint.level.button5,mouse)){ scene.nextAuto=6; }
      else if(context.collision(_blueprint.level.button6,mouse)){ scene.nextAuto=7; }
      else if(context.collision(_blueprint.level.button7,mouse)){ scene.nextAuto=8; }
      else if(context.collision(_blueprint.level.button8,mouse)){ scene.nextAuto=9; }
      else if(context.collision(_blueprint.level.buttonF,mouse)){ scene.nextAuto=scene.count; }

      scene.auto=true;
      _blueprint.close=true;

      if(_blueprint.on){
        if(_button.level.on){ _button.level.animation=true; }
        else{ _button.custom.animation=true; }
      }
    }

    if(_button.setting.on){
      if(context.collision(_clipboard.setting.sfx.base,mouse)){
        if(global.sfx){
          global.sfx=false;
          localStorage.setItem("sfx",false);
        } else{
          global.sfx=true;
          localStorage.setItem("sfx",true);

          audio.click2_sfx.play();
        }
      } else if(context.collision(_clipboard.setting.music.base,mouse)){
        if(global.sfx){ audio.click2_sfx.play(); }

        if(global.music){
          global.music=false;
          localStorage.setItem("music",false);
        } else{
          global.music=true;
          localStorage.setItem("music",true);
        }
      }
    }

    if(scene.value>=2&&!global.pause&&_ui.show){
      if(context.collision(_ui.game.heart.background,mouse)&&_ui.game.heart.icon.time==0){
        if(global.sfx){ audio.click2_sfx.play(); }

        _ui.game.heart.icon.time=1;
        _ui.game.heart.icon.width=context.scale(15);
        _ui.game.heart.icon.height=context.scale(15);
      } else if(context.collision(_ui.game.ammo.background,mouse)&&_ui.game.ammo.icon.time==0){
        if(global.sfx){ audio.click2_sfx.play(); }

        _ui.game.ammo.icon.time=1;
        _ui.game.ammo.icon.width=context.scale(15);
        _ui.game.ammo.icon.height=context.scale(15);
      } else if(context.collision(_ui.game.key.background,mouse)&&_ui.game.key.icon.time==0){
        if(global.sfx){ audio.click2_sfx.play(); }

        _ui.game.key.icon.time=1;
        _ui.game.key.icon.width=context.scale(17);
        _ui.game.key.icon.height=context.scale(17);
      } else if(context.collision(_ui.game.pause.background,mouse)&&!global.pause){
        if(global.sfx){ audio.click2_sfx.play(); }

        global.pause=true;
        global.pauseChange=true;
        global.pauseAnimation=true;
      } else if(context.collision(_ui.game.info.background,mouse)&&_ui.game.info.icon.time==0){
        if(global.sfx){ audio.click2_sfx.play(); }

        _ui.game.info.icon.time=1;
        _ui.game.info.icon.width=context.scale(21);
        _ui.game.info.icon.height=context.scale(21);
      } else if(context.collision(_ui.game.notification.background,mouse)&&_ui.game.notification.icon.time==0){
        if(global.sfx){ audio.click2_sfx.play(); }

        _ui.game.notification.icon.time=1;
        _ui.game.notification.icon.size=context.scale(29);
      } else if(context.collision(_ui.game.teacher.background,mouse)&&_ui.game.teacher.icon.time==0){
        if(global.sfx){ audio.click2_sfx.play(); }

        _ui.game.teacher.icon.time=1;
        _ui.game.teacher.icon.width=context.scale(17);
        _ui.game.teacher.icon.height=context.scale(17);
      }
    }
  }
});
