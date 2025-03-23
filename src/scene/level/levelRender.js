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

scene.levelRender=function(){
  context.render(_background.base,_background.img2);
  context.render(_background.bottom,_background.img3);

  _player.render();

  if(_teacher.on){
    _teacher.render();

    context.render(_attack.tebulinek,_attack.tebulinek.img0);
    
    if(_attack.object1.current==0){ context.render(_attack.object1,_attack.object1.img0Computer); }
    else{ context.render(_attack.object1,_attack.object1.img0Keyboard); }
    if(_attack.object2.current==0){ context.render(_attack.object2,_attack.object2.img0Coffe); }
    else{ context.render(_attack.object2,_attack.object2.img0Pigeon); }

    context.render(_teacher.cloud,_teacher.cloud.img0);

    if(_player.left){ context.render(_player.cloud,_player.cloud.img0); }
    else{ context.render(_player.cloud,_player.cloud.img1); }

    if(scene.timer>=context.time(99)&&!_player.gun.power||_teacher.round>=1&&!_player.gun.power){ context.render(_player.gun,_player.gun.img0); }
    else if(_player.gun.power){ context.render(_player.gun,_player.gun.img1); }
  
    if(scene.timer>=context.time(99)&&!_player.ammo.power||_teacher.round>=1&&!_player.ammo.power){ context.render(_player.ammo,_player.ammo.img0); }
    else if(_player.ammo.power){ context.render(_player.ammo,_player.ammo.img1); }
  }

  if(scene.generated){
    _player.update();

    while(_platform.lenght>=_platform.currentLenght){
      _currentPlatform=_platform.array[_platform.currentLenght];

      if(_currentPlatform.y<canvas.height+context.scale(32)&&_currentPlatform.y>=-context.scale(92)){
        context.render(_currentPlatform,_platform.img0);
        if(!global.pause){ _platform.update(); }
      }

      _currentPlatform.y+=scene.vy;
      _currentPlatform.x+=scene.vx;
      _platform.currentLenght+=1;
    }

    while(_corner.lenght>=_corner.currentLenght){
      _currentCorner=_corner.array[_corner.currentLenght];

      if(_currentCorner.base.y<canvas.height+context.scale(32)&&_currentCorner.base.y>=-context.scale(32)){
        context.render(_currentCorner.base,_corner.img0);

        if(_currentCorner.laser!=undefined){
          if(_corner.timer>=_corner.max-context.time(20)&&_corner.timer<_corner.max-context.time(10)){ _currentCorner.laser.alpha+=context.frame(4); }
          else if(_corner.timer==_corner.max-context.time(10)){ _currentCorner.laser.alpha=40; }
          else if(_corner.timer>=_corner.max&&_corner.timer<_corner.max+context.time(10)){ _currentCorner.laser.alpha+=context.frame(6); }
          else if(_corner.timer==_corner.max+context.time(10)){ _currentCorner.laser.alpha=100; }
          else if(_corner.timer>_corner.max+context.time(10)){ _currentCorner.laser.alpha-=context.frame(8); }

          context.render(_currentCorner.laser,_corner.color0);
        } if(!global.pause&&_player.hp>0){ _corner.localUpdate(); }
      }

      if(_currentCorner.laser!=undefined){
        _currentCorner.laser.y+=scene.vy;
        _currentCorner.laser.x+=scene.vx;
      }
      _currentCorner.base.y+=scene.vy;
      _currentCorner.base.x+=scene.vx;

      _corner.currentLenght+=1;
    }

    while(_spike.lenght>=_spike.currentLenght){
      _currentSpike=_spike.array[_spike.currentLenght];

      if(_currentSpike.y<canvas.height+context.scale(32)&&_currentSpike.y>=-context.scale(32)){
        context.render(_currentSpike,_spike.img0);
        if(!global.pause){ _spike.update(); }
      }

      _currentSpike.y+=scene.vy;
      _currentSpike.x+=scene.vx;
      _spike.currentLenght+=1;
    }

    _player.midUpdate();
    _player.lateUpdate();
  }

  _player.textRender();
  if(_teacher.on){ _teacher.textRender(); }

  context.render(_ui.game.hp.background,_ui.color1);
  context.render(_ui.game.hp.main,_ui.color0);
  if(_player.hp==0){ context.render(_ui.game.hp.heart,_ui.game.hp.heart.img0); }
  else if(_player.hp==1){ context.render(_ui.game.hp.heart,_ui.game.hp.heart.img1); }
  else if(_player.hp==2){ context.render(_ui.game.hp.heart,_ui.game.hp.heart.img2); }
  else if(_player.hp==3){ context.render(_ui.game.hp.heart,_ui.game.hp.heart.img3); }
  else if(_player.hp==4){ context.render(_ui.game.hp.heart,_ui.game.hp.heart.img4); }
  else{ context.render(_ui.game.hp.heart,_ui.game.hp.heart.img5); }
  context.text(_ui.game.hp.text,_ui.color1,_ui.game.hp.text.value0);

  context.render(_ui.game.pause.background,_ui.color1);
  context.render(_ui.game.pause.main,_ui.color0);
  context.text(_ui.game.pause.icon,_ui.color1,_ui.game.pause.icon.value0);
  context.text(_ui.game.pause.text,_ui.color1,_ui.game.pause.text.value0);

  context.render(_ui.game.info.background,_ui.color1);
  context.render(_ui.game.info.main,_ui.color0);
  context.render(_ui.game.info.icon,_ui.game.info.icon.img0);
  context.text(_ui.game.info.text,_ui.color1,_ui.game.info.text.value0);
  context.text(_ui.game.info.score,_ui.color1,_ui.game.info.score.value0);
  context.text(_ui.game.info.level,_ui.color1,_ui.game.info.level.value0);

  if(_teacher.on){
    context.render(_ui.game.teacher.background,_ui.color1);
    context.render(_ui.game.teacher.main,_ui.color0);
    if(_teacher.hp==0){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img0); }
    else if(_teacher.hp==1){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img1); }
    else if(_teacher.hp==2){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img2); }
    else if(_teacher.hp==3){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img3); }
    else if(_teacher.hp==4){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img4); }
    else if(_teacher.hp==5){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img5); }
    else if(_teacher.hp==6){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img6); }
    else if(_teacher.hp==7){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img7); }
    else if(_teacher.hp==8){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img8); }
    else if(_teacher.hp==9){ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img9); }
    else{ context.render(_ui.game.teacher.heart,_ui.game.teacher.heart.img10); }
    context.text(_ui.game.teacher.text,_ui.color1,_ui.game.teacher.text.value0);

    context.render(_ui.game.ammo.background,_ui.color1);
    context.render(_ui.game.ammo.main,_ui.color0);
    if(_player.gun.on&&!_player.gun.power){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img2); }
    if(_player.gun.timer>=context.time(60)&&!_player.gun.on&&!_player.gun.power){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img1); }
    if(_player.gun.timer<context.time(60)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img0); }
    if(_player.gun.on&&_player.gun.power){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img4); }
    if(_player.gun.timer>=context.time(60)&&!_player.gun.on&&_player.gun.power){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img3); }
    context.text(_ui.game.ammo.text,_ui.color1,_ui.game.ammo.text.value0);
  }

  if(global.pauseAnimation&&!global.pauseChange&&global.pause&&_transition.timer==0&&scene.next!=1&&_player.hp>0&&_teacher.hp>0){
    if(!global.pauseChange){ context.render(_transition.base,_transition.base.color0); }

    context.render(_ui.menu.main,_ui.color0);
    context.render(_ui.menu.left,_ui.color1);
    context.render(_ui.menu.right,_ui.color1);

    if(_title.base.alpha==100){ context.render(_title.teb,_title.teb.img0); }
    else{ context.render(_title.teb,_title.teb.img1); }
    context.render(_title.base,_title.base.img0);

    context.text(_account.name,_account.color0,_account.name.value0);
    context.render(_account.background,_account.color0);
    context.render(_account.profile,_account.profile.img0);

    context.text(_footer.version,_footer.color0,_footer.version.value0);
    context.render(_footer.github,_footer.github.img0);
    context.render(_footer.pastebin,_footer.pastebin.img0);

    if(!global.currentTutorial&&!global.currentTeacher&&!global.currentReward){
      if(_button.start.text.alpha==100){ context.render(_button.start.base,_button.start.base.img0); }
      else{ context.render(_button.start.base,_button.start.base.img1); }
      context.text(_button.start.text,_button.color0,_button.start.text.value0);
      if(_button.menu.text.alpha==100){ context.render(_button.menu.base,_button.menu.base.img0); }
      else{ context.render(_button.menu.base,_button.menu.base.img1); }
      context.text(_button.menu.text,_button.color0,_button.menu.text.value0);
      if(_button.restart.text.alpha==100){ context.render(_button.restart.base,_button.restart.base.img0); }
      else{ context.render(_button.restart.base,_button.restart.base.img1); }
      context.text(_button.restart.text,_button.color0,_button.restart.text.value0);
      if(_button.setting.text.alpha==100){ context.render(_button.setting.base,_button.setting.base.img0); }
      else{ context.render(_button.setting.base,_button.setting.base.img1); }
      context.text(_button.setting.text,_button.color0,_button.setting.text.value0);
      if(_button.about.text.alpha==100){ context.render(_button.about.base,_button.about.base.img0); }
      else{ context.render(_button.about.base,_button.about.base.img1); }
      context.text(_button.about.text,_button.color0,_button.about.text.value0);
      if(_button.version.text.alpha==100){ context.render(_button.version.base,_button.version.base.img0); }
      else{ context.render(_button.version.base,_button.version.base.img1); }
      context.text(_button.version.text,_button.color0,_button.version.text.value0);

      if(_button.setting.animation||_button.setting.on||_button.about.animation||_button.about.on||_button.version.animation||_button.version.on){
        context.render(_clipboard.base,_clipboard.base.img0);
        if(!_clipboard.back.hover){ context.render(_clipboard.back,_clipboard.back.img0); }
        else{ context.render(_clipboard.back,_clipboard.back.img1); }

        if(_button.setting.animation||_button.setting.on){
          context.text(_clipboard.setting.title,_clipboard.color0,_clipboard.setting.title.value0);

          if(!global.sfx){ context.render(_clipboard.setting.sfx.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.sfx.base,_clipboard.setting.img1); }
          context.text(_clipboard.setting.sfx.text,_clipboard.color0,_clipboard.setting.sfx.text.value0);
          if(!global.music){ context.render(_clipboard.setting.music.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.music.base,_clipboard.setting.img1); }
          context.text(_clipboard.setting.music.text,_clipboard.color0,_clipboard.setting.music.text.value0);
          if(!global.tutorial){ context.render(_clipboard.setting.tutorial.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.tutorial.base,_clipboard.setting.img1); }
          context.text(_clipboard.setting.tutorial.text,_clipboard.color0,_clipboard.setting.tutorial.text.value0);
          if(!global.teacher){ context.render(_clipboard.setting.teacher.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.teacher.base,_clipboard.setting.img1); }
          context.text(_clipboard.setting.teacher.text,_clipboard.color0,_clipboard.setting.teacher.text.value0);
          if(!global.addon){ context.render(_clipboard.setting.addon.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.addon.base,_clipboard.setting.img1); }
          context.text(_clipboard.setting.addon.text,_clipboard.color0,_clipboard.setting.addon.text.value0);
        }
  
        if(_button.about.animation||_button.about.on){
          context.text(_clipboard.about.title,_clipboard.color0,_clipboard.about.title.value0);
          context.text(_clipboard.about.text,_clipboard.color0,_clipboard.about.text.value0);
        } else if(_button.version.animation||_button.version.on){
          context.text(_clipboard.version.title,_clipboard.color0,_clipboard.version.title.value0);
          context.text(_clipboard.version.text,_clipboard.color0,_clipboard.version.text.value0);
        }
      }
    }

    if(global.currentTutorial||global.currentReward){
      context.render(_clipboard.wide,_clipboard.wide.img0);
      if(!_clipboard.wideBack.hover){ context.render(_clipboard.wideBack,_clipboard.wideBack.img0); }
      else{ context.render(_clipboard.wideBack,_clipboard.wideBack.img1); }

      if(global.currentTutorial){
        context.text(_clipboard.tutorial.title,_clipboard.color0,_clipboard.tutorial.title.value0);
        context.text(_clipboard.tutorial.text,_clipboard.color0,_clipboard.tutorial.text.value0);
      } else if(global.currentReward){
        context.text(_clipboard.reward.title,_clipboard.color0,_clipboard.reward.title.value0);
        context.text(_clipboard.reward.text,_clipboard.color0,_clipboard.reward.text.value0);
        context.render(_clipboard.reward.icon,_clipboard.reward.icon.img0);
      }
    } else if(global.currentTeacher){
      context.render(_blueprint.wide,_blueprint.wide.img0);
      if(!_blueprint.wideBack.hover){ context.render(_blueprint.wideBack,_blueprint.wideBack.img0); }
      else{ context.render(_blueprint.wideBack,_blueprint.wideBack.img1); }

      if(scene.value==2){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value0);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value0);
      } else if(scene.value==3){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value1);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value1);
      } else if(scene.value==4){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value2);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value2);
      } else if(scene.value==5){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value3);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value3);
      } else if(scene.value==6){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value4);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value4);
      } else if(scene.value==7){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value5);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value5);
      } else if(scene.value==8){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value6);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value6);
      } else if(scene.value==9){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value7);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value7);
      } else if(scene.value==10){
        context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value1);
        context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value1);
      } else if(scene.value==11){
        if(_teacher.round==0){
          context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.valueAdd0);
          context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.valueAdd0);
        } else if(_teacher.round==1){
          context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.valueAdd1);
          context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.valueAdd1);
        } else{
          context.text(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.valueAdd2);
          context.text(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.valueAdd2);
        }
      }
    }
  }

  if(scene.change&&!global.restart&&scene.next!=1){
    if(_player.hp==0){
      if(_teacher.on){
        html.classList.remove("black-red");
        html.classList.add("red-black");
      } else{
        html.classList.remove("black-cyan");
        html.classList.add("cyan-black");
      }

      _transition.base.alpha+=context.time(8);
      context.render(_transition.base,_transition.base.color0);
    } else if(_teacher.hp>0){
      if(_transition.timer>=context.time(65)){
        html.classList.remove("blue-black");
        html.classList.add("black-cyan");
      }

      if(_transition.timer>=context.time(65)){ _transition.base.alpha-=context.frame(8); }
      context.render(_transition.base,_transition.base.color0);

      if(_transition.timer<context.time(65)){ context.render(_start.arrow,_start.arrow.img0); }

      if(_transition.timer<context.time(10)){ _transition.text.alpha+=context.frame(8); }
      else if(_transition.timer>=context.time(55)){ _transition.text.alpha-=context.frame(8); }
      context.text(_transition.text,_transition.text.color0,_transition.text.value0);
    }
  }

  if(scene.next!=scene.value&&global.pauseChange||global.restart){
    _transition.base.alpha+=context.frame(4);
    context.render(_transition.base,_transition.base.color0);
  } else if(global.pauseChange&&!global.restart){
    if(!global.pauseAnimation){
      if(_teacher.on){
        html.classList.remove("red-black");
        html.classList.add("black-red");
      } else{
        html.classList.remove("cyan-black");
        html.classList.add("black-cyan");
      }

      _transition.base.alpha-=context.frame(4);
      context.render(_transition.base,_transition.base.color0);
    } else{
      if(_teacher.on){
        html.classList.remove("cyan-red");
        html.classList.remove("black-red");
        html.classList.add("red-black");
      } else{
        html.classList.remove("red-black");
        html.classList.remove("black-cyan");
        html.classList.add("cyan-black");
      }

      _transition.base.alpha+=context.frame(4);
      context.render(_transition.base,_transition.base.color0);
    }
  }
}
