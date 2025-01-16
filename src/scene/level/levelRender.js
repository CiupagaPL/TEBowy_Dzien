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

scene.levelRender=function(){
  context.render(_background.base,_background.img2);
  context.render(_background.bottom,_background.img3);

  _player.render();

  if(_teacher.on){
    _teacher.render();

    _attack.render(_attack.tebulinek,_attack.tebulinek.img0);
    
    if(_attack.object1.current==0){ _attack.render(_attack.object1,_attack.object1.img0Computer); }
    else{ _attack.render(_attack.object1,_attack.object1.img0Keyboard); }
    if(_attack.object2.current==0){ _attack.render(_attack.object2,_attack.object2.img0Coffe); }
    else{ _attack.render(_attack.object2,_attack.object2.img0Pigeon); }

    context.render(_teacher.cloud,_teacher.cloud.img0);

    if(_player.left){ context.render(_player.cloud,_player.cloud.img0); }
    else{ context.render(_player.cloud,_player.cloud.img1); }

    if(scene.timer>=99&&!_player.gun.power||_teacher.round>=1&&!_player.gun.power){ context.render(_player.gun,_player.gun.img0); }
    else if(_player.gun.power){ context.render(_player.gun,_player.gun.img1); }
  
    if(scene.timer>=99&&!_player.ammo.power||_teacher.round>=1&&!_player.ammo.power){ context.render(_player.ammo,_player.ammo.img0); }
    else if(_player.ammo.power){ context.render(_player.ammo,_player.ammo.img1); }
  }

  if(scene.generated){
    _player.update();

    while(_platform.lenght>=_platform.currentLenght){
      _currentPlatform=_platform.array[_platform.currentLenght];

      if(_currentPlatform.y<canvas.height+(32*canvas.scale)&&_currentPlatform.y>-64*canvas.scale){
        context.render(_currentPlatform,_platform.img0);

        if(!global.pause){ _platform.update(); }
      }

      _currentPlatform.y+=scene.vy;
      _currentPlatform.x+=scene.vx;

      _platform.currentLenght+=1;
    }

    while(_corner.lenght>=_corner.currentLenght){
      _currentCorner=_corner.array[_corner.currentLenght];

      if(_currentCorner.base.y<canvas.height+(32*canvas.scale)&&_currentCorner.base.y>-32*canvas.scale){
        context.render(_currentCorner.base,_corner.img0);

        if(_currentCorner.laser!=undefined){
          if(_corner.timer>=_corner.max-20&&_corner.timer<_corner.max){ context.render(_currentCorner.laser,_corner.color2); }
          else if(_corner.timer>=_corner.max&&_corner.timer<_corner.max+5){ context.render(_currentCorner.laser,_corner.color1); }
          else if(_corner.timer>=_corner.max+5&&_corner.timer<_corner.max+15){ context.render(_currentCorner.laser,_corner.color0); }
          else if(_corner.timer>=_corner.max+15&&_corner.timer<_corner.max+20){ context.render(_currentCorner.laser,_corner.color1); }
          else if(_corner.timer>=_corner.max+20&&_corner.timer<_corner.max+25){ context.render(_currentCorner.laser,_corner.color2); }
        }

        if(!global.pause){ _corner.update(); }
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

      if(_currentSpike.y<canvas.height+(32*canvas.scale)&&_currentSpike.y>-32*canvas.scale){
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

  context.render(_ui.game,_ui.color0);
  if(!_hud.icon.pause.hover||global.pause){ context.render(_hud.icon.pause,_hud.color0,_hud.icon.pause.value0); }
  else{ context.render(_hud.icon.pause,_hud.color1,_hud.icon.pause.value0); }

  context.render(_hud.level,_hud.color0,_hud.level.value0);
  context.render(_hud.score,_hud.color0,_hud.score.value0);

  if(_player.hp<=0){ context.render(_hud.icon.hpPlayer.heart0,_hud.icon.hpPlayer.img2); }
  else if(_player.hp==25){ context.render(_hud.icon.hpPlayer.heart0,_hud.icon.hpPlayer.img1); }
  else{ context.render(_hud.icon.hpPlayer.heart0,_hud.icon.hpPlayer.img0); }

  if(_player.hp<75){ context.render(_hud.icon.hpPlayer.heart1,_hud.icon.hpPlayer.img2); }
  else if(_player.hp==75){ context.render(_hud.icon.hpPlayer.heart1,_hud.icon.hpPlayer.img1); }
  else{ context.render(_hud.icon.hpPlayer.heart1,_hud.icon.hpPlayer.img0); }

  if(_player.hp<125){ context.render(_hud.icon.hpPlayer.heart2,_hud.icon.hpPlayer.img2); }
  else if(_player.hp==125){ context.render(_hud.icon.hpPlayer.heart2,_hud.icon.hpPlayer.img1); }
  else{ context.render(_hud.icon.hpPlayer.heart2,_hud.icon.hpPlayer.img0); }

  if(_teacher.on){
    if(_teacher.hp<=0){ context.render(_hud.icon.hpTeacher.heart0,_hud.icon.hpTeacher.img2); }
    else if(_teacher.hp<=25&&_teacher.hp>0){ context.render(_hud.icon.hpTeacher.heart0,_hud.icon.hpTeacher.img1); }
    else { context.render(_hud.icon.hpTeacher.heart0,_hud.icon.hpTeacher.img0); }

    if(_teacher.hp<=50){ context.render(_hud.icon.hpTeacher.heart1,_hud.icon.hpTeacher.img2); }
    else if(_teacher.hp<=75&&_teacher.hp>50){ context.render(_hud.icon.hpTeacher.heart1,_hud.icon.hpTeacher.img1); }
    else{ context.render(_hud.icon.hpTeacher.heart1,_hud.icon.hpTeacher.img0); }

    if(_teacher.hp<=100){ context.render(_hud.icon.hpTeacher.heart2,_hud.icon.hpTeacher.img2); }
    else if(_teacher.hp<=125&&_teacher.hp>100){ context.render(_hud.icon.hpTeacher.heart2,_hud.icon.hpTeacher.img1); }
    else{ context.render(_hud.icon.hpTeacher.heart2,_hud.icon.hpTeacher.img0); }

    if(_teacher.hp<=150){ context.render(_hud.icon.hpTeacher.heart3,_hud.icon.hpTeacher.img2); }
    else if(_teacher.hp<=175&&_teacher.hp>150){ context.render(_hud.icon.hpTeacher.heart3,_hud.icon.hpTeacher.img1); }
    else{ context.render(_hud.icon.hpTeacher.heart3,_hud.icon.hpTeacher.img0); }

    if(_teacher.hp<=200){ context.render(_hud.icon.hpTeacher.heart4,_hud.icon.hpTeacher.img2); }
    else if(_teacher.hp<=225&&_teacher.hp>200){ context.render(_hud.icon.hpTeacher.heart4,_hud.icon.hpTeacher.img1); }
    else{ context.render(_hud.icon.hpTeacher.heart4,_hud.icon.hpTeacher.img0); }

    if(_player.gun.on&&!_player.gun.power){ context.render(_hud.icon.water,_hud.icon.water.img0); }
    if(_player.gun.timer>=60&&!_player.gun.on&&!_player.gun.power){ context.render(_hud.icon.water,_hud.icon.water.img1); }
    if(_player.gun.timer<60){ context.render(_hud.icon.water,_hud.icon.water.img2); }
    if(_player.gun.on&&_player.gun.power){ context.render(_hud.icon.water,_hud.icon.water.img3); }
    if(_player.gun.timer>=60&&!_player.gun.on&&_player.gun.power){ context.render(_hud.icon.water,_hud.icon.water.img4); }
  }

  if(global.pauseAnimation&&!global.pauseChange&&global.pause&&_transition.timer==0&&scene.next!=1){
    if(!global.pauseChange){ context.render(_transition.base,_transition.base.color1); }

    if(!_title.hover){ context.render(_title,_title.img0); }
    else{ context.render(_title,_title.img1); }

    if(!global.currentTutorial&&!global.currentTeacher&&!global.currentReward){
      if(!_button.start.hover){
        context.render(_button.start.base,_button.start.base.img0);
        context.render(_button.start.text,_button.color0,_button.start.text.value0);
      } else{
        context.render(_button.start.base,_button.start.base.img1);
        context.render(_button.start.text,_button.color1,_button.start.text.value0);
      }

      if(!_button.menu.hover){
        context.render(_button.menu.base,_button.menu.base.img0);
        context.render(_button.menu.text,_button.color0,_button.menu.text.value0);
      } else{
        context.render(_button.menu.base,_button.menu.base.img1);
        context.render(_button.menu.text,_button.color1,_button.menu.text.value0);
      }

      if(!_button.restart.hover){
        context.render(_button.restart.base,_button.restart.base.img0);
        context.render(_button.restart.text,_button.color0,_button.restart.text.value0);
      } else{
        context.render(_button.restart.base,_button.restart.base.img1);
        context.render(_button.restart.text,_button.color1,_button.restart.text.value0);
      }

      if(!_button.setting.hover){
        context.render(_button.setting.base,_button.setting.base.img0);
        context.render(_button.setting.text,_button.color0,_button.setting.text.value0);
      } else{
        context.render(_button.setting.base,_button.setting.base.img1);
        context.render(_button.setting.text,_button.color1,_button.setting.text.value0);
      }

      if(!_button.about.hover){
        context.render(_button.about.base,_button.about.base.img0);
        context.render(_button.about.text,_button.color0,_button.about.text.value0);
      } else{
        context.render(_button.about.base,_button.about.base.img1);
        context.render(_button.about.text,_button.color1,_button.about.text.value0);
      }

      if(!_button.version.hover){
        context.render(_button.version.base,_button.version.base.img0);
        context.render(_button.version.text,_button.color0,_button.version.text.value0);
      } else{
        context.render(_button.version.base,_button.version.base.img1);
        context.render(_button.version.text,_button.color1,_button.version.text.value0);
      }

      if(_button.setting.animation||_button.setting.on||_button.about.animation||_button.about.on||_button.version.animation||_button.version.on){
        context.render(_clipboard.base,_clipboard.base.img0);
        if(!_clipboard.back.hover){ context.render(_clipboard.back,_clipboard.back.img0); }
        else{ context.render(_clipboard.back,_clipboard.back.img1); }

        if(_button.setting.animation||_button.setting.on){
          context.render(_clipboard.setting.title,_clipboard.color0,_clipboard.setting.title.value0);

          if(!global.sfx){ context.render(_clipboard.setting.sfx.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.sfx.base,_clipboard.setting.img1); }
          context.render(_clipboard.setting.sfx.text,_clipboard.color0,_clipboard.setting.sfx.text.value0);

          if(!global.music){ context.render(_clipboard.setting.music.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.music.base,_clipboard.setting.img1); }
          context.render(_clipboard.setting.music.text,_clipboard.color0,_clipboard.setting.music.text.value0);

          if(!global.tutorial){ context.render(_clipboard.setting.tutorial.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.tutorial.base,_clipboard.setting.img1); }
          context.render(_clipboard.setting.tutorial.text,_clipboard.color0,_clipboard.setting.tutorial.text.value0);

          if(!global.teacher){ context.render(_clipboard.setting.teacher.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.teacher.base,_clipboard.setting.img1); }
          context.render(_clipboard.setting.teacher.text,_clipboard.color0,_clipboard.setting.teacher.text.value0);

          if(!global.addon){ context.render(_clipboard.setting.addon.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.addon.base,_clipboard.setting.img1); }
          context.render(_clipboard.setting.addon.text,_clipboard.color0,_clipboard.setting.addon.text.value0);
        }
  
        if(_button.about.animation||_button.about.on){
          context.render(_clipboard.about.title,_clipboard.color0,_clipboard.about.title.value0);
          context.render(_clipboard.about.text,_clipboard.color0,_clipboard.about.text.value0);
        }

        if(_button.version.animation||_button.version.on){
          context.render(_clipboard.version.title,_clipboard.color0,_clipboard.version.title.value0);
          context.render(_clipboard.version.text,_clipboard.color0,_clipboard.version.text.value0);
        }
      }
    }

    if(global.currentTutorial||global.currentReward){
      context.render(_clipboard.wide,_clipboard.wide.img0);
      if(!_clipboard.wideBack.hover){ context.render(_clipboard.wideBack,_clipboard.wideBack.img0); }
      else{ context.render(_clipboard.wideBack,_clipboard.wideBack.img1); }

      if(global.currentTutorial){
        context.render(_clipboard.tutorial.title,_clipboard.color0,_clipboard.tutorial.title.value0);
        context.render(_clipboard.tutorial.text,_clipboard.color0,_clipboard.tutorial.text.value0);
      } else if(global.currentReward){
        context.render(_clipboard.reward.title,_clipboard.color0,_clipboard.reward.title.value0);
        context.render(_clipboard.reward.text,_clipboard.color0,_clipboard.reward.text.value0);
        context.render(_clipboard.reward.icon,_clipboard.reward.icon.img0);
      }
    } else if(global.currentTeacher){
      context.render(_blueprint.wide,_blueprint.wide.img0);
      if(!_blueprint.wideBack.hover){ context.render(_blueprint.wideBack,_blueprint.wideBack.img0); }
      else{ context.render(_blueprint.wideBack,_blueprint.wideBack.img1); }

      if(scene.value==2){
        context.render(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value0);
        context.render(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value0);
      } else if(scene.value==3){
        context.render(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value1);
        context.render(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value1);
      } else if(scene.value==4){
        context.render(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value2);
        context.render(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value2);
      } else if(scene.value==5){
        context.render(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value3);
        context.render(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value3);
      } else if(scene.value==6){
        context.render(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value4);
        context.render(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value4);
      } else if(scene.value==7){
        context.render(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value5);
        context.render(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value5);
      } else if(scene.value==8){
        context.render(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value6);
        context.render(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value6);
      } else if(scene.value==9){
        context.render(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value7);
        context.render(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value7);
      } else if(scene.value==10){
        context.render(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.value1);
        context.render(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.value1);
      } else if(scene.value==11){
        if(_boss.round==0){
          context.render(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.valueAdd0);
          context.render(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.valueAdd0);
        } else if(_boss.round==1){
          context.render(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.valueAdd1);
          context.render(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.valueAdd1);
        } else{
          context.render(_blueprint.teacher.title,_blueprint.color0,_blueprint.teacher.title.valueAdd2);
          context.render(_blueprint.teacher.text,_blueprint.color0,_blueprint.teacher.text.valueAdd2);
        }
      }
    }
  }

  if(scene.change){
    if(scene.change&&_player.hp==0){
      // if(changeTimer<=10){ _html.style.backgroundColor=_background.color3; }
      // if(changeTimer>10){ _html.style.backgroundColor=_background.color4; }

      if(_transition.timer<5){ context.render(_transition.base,_transition.base.color0); } 
      else if(_transition.timer>=5&&_transition.timer<10){ context.render(_transition.base,_transition.base.color1); }
      else{ context.render(_transition.base,_transition.base.color2); }
    } else if(!scene.win){
      // if(_transition.timer<=50){ _html.style.backgroundColor=_background.color4; }
      // if(_transition.timer>50){ _html.style.backgroundColor=_background.color3; }

      if(_transition.timer<65){ context.render(_transition.base,_transition.base.color2); } 
      else if(_transition.timer>=65&&_transition.timer<70){ context.render(_transition.base,_transition.base.color1); }
      else{ context.render(_transition.base,_transition.base.color0); }

      if(_transition.timer<65){ context.render(_start.arrow,_start.arrow.img0); }

      if(_transition.timer<5){ context.render(_transition.text,_transition.text.color2,_transition.text.value0); }
      else if(_transition.timer>=5&&_transition.timer<10){ context.render(_transition.text,_transition.text.color1,_transition.text.value0); }
      else if(_transition.timer>=10&&_transition.timer<55){ context.render(_transition.text,_transition.text.color0,_transition.text.value0); }
      else if(_transition.timer>=55&&_transition.timer<60){ context.render(_transition.text,_transition.text.color1,_transition.text.value0); }
      else if(_transition.timer>=60&&_transition.timer<65){ context.render(_transition.text,_transition.text.color2,_transition.text.value0); }
    }
  }

  if(scene.next!=scene.value&&global.pauseChange||global.restart){
    // _html.style.backgroundColor=_background.color4;

    context.render(_transition.base,_transition.base.color2);
  } if(global.pauseChange){
    if(!global.pauseAnimation){
      // if(_transition.timer<=5){ _html.style.backgroundColor=_background.color4; }
      // if(_transition.timer>5){ _html.style.backgroundColor=_background.color3; }

      if(_transition.timer<5){ context.render(_transition.base,_transition.base.color1); } 
      else{ context.render(_transition.base,_transition.base.color0); }
    } else{
      // if(_transition.timer<=10){ _html.style.backgroundColor=_background.color3; }
      // if(_transition.timer>10){ _html.style.backgroundColor=_background.color4; }

      if(_transition.timer<5){ context.render(_transition.base,_transition.base.color0); } 
      else{ context.render(_transition.base,_transition.base.color1); }
    }
  }

  if(scene.change||global.pauseAnimation&&(!global.pauseChange||global.currentTutorial||
     global.currentReward||global.currentTeacher)&&global.pause){
    if(_resolution.hover){
      if(!document.fullscreenElement){ context.render(_resolution,_resolution.img2); }
      else{ context.render(_resolution,_resolution.img3); }
    } else{
      if(!document.fullscreenElement){ context.render(_resolution,_resolution.img0); }
      else{ context.render(_resolution,_resolution.img1); }
    }
  }
}

