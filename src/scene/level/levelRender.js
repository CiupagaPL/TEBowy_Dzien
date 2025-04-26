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
  if(!scene.teacher){
    context.render(_background.base,_background.imgLevel);
    context.render(_background.bottom,_background.imgLevel);
    context.render(_background.left,_background.imgLevel);
    context.render(_background.bottomLeft,_background.imgLevel);
  } else{
    context.render(_background.base,_background.imgTeacher);

    if(!_attack.tebulinek.unused){ context.render(_attack.tebulinek,_attack.tebulinek.img0); }
    if(!_attack.object0.unused){
      if(_attack.object0.current==0){ context.render(_attack.object0,_attack.object0.img0Computer); }
      else{ context.render(_attack.object0,_attack.object0.img0Keyboard); }
    } if(!_attack.object1.unused){
      if(_attack.object1.current==0){ context.render(_attack.object1,_attack.object1.img0Coffe); }
      else{ context.render(_attack.object1,_attack.object1.img0Pigeon); }
    }

    _teacher.render();
  }

  if(scene.generated){
    while(_decoration.lenght>=_decoration.currentLenght&&!scene.teacher){
      _currentDecoration=_decoration.array[_decoration.currentLenght];

      if(_currentDecoration.current==0&&_currentDecoration.base.y<canvas.height*1.5&&_currentDecoration.base.y>=-canvas.height*0.5){
        if(_currentDecoration.type==0){ context.render(_currentDecoration.base,_decoration.img0Door); }
        else if(_currentDecoration.type==1){ context.render(_currentDecoration.base,_decoration.img1Door); }
        else if(_currentDecoration.type==2){ context.render(_currentDecoration.base,_decoration.img2Door); }
        else if(_currentDecoration.type==3){ context.render(_currentDecoration.base,_decoration.img3Door); }
        else{ context.render(_currentDecoration.base,_decoration.img4Door); }

        if(_currentDecoration.text.value0!="Finał"){ context.text(_currentDecoration.text,_decoration.color0,_currentDecoration.text.value0); }
        else{ context.text(_currentDecoration.text,"rgb(255,255,255)",_currentDecoration.text.value0); }

        if(!global.pause&&_player.hp>0){ _decoration.update(); }
      } else if(_currentDecoration.current==1&&_currentDecoration.base.y<canvas.height*1.5&&_currentDecoration.base.y>=-canvas.height*0.5){
        if(_currentDecoration.base.type==0){ context.render(_currentDecoration.base,_decoration.img1Locker); }
          else if(_currentDecoration.base.type==1){ context.render(_currentDecoration.base,_decoration.img2Locker); }
          else if(_currentDecoration.base.type==2){ context.render(_currentDecoration.base,_decoration.img3Locker); }
          else if(_currentDecoration.base.type==3){ context.render(_currentDecoration.base,_decoration.img4Locker); }
          else{ context.render(_currentDecoration.base,_decoration.img0Locker); }
        if(_currentDecoration.bottom.type==0){ context.render(_currentDecoration.bottom,_decoration.img1Locker); }
          else if(_currentDecoration.bottom.type==1){ context.render(_currentDecoration.bottom,_decoration.img2Locker); }
          else if(_currentDecoration.bottom.type==2){ context.render(_currentDecoration.bottom,_decoration.img3Locker); }
          else if(_currentDecoration.bottom.type==3){ context.render(_currentDecoration.bottom,_decoration.img4Locker); }
          else{ context.render(_currentDecoration.bottom,_decoration.img0Locker); }
        if(_currentDecoration.left.type==0){ context.render(_currentDecoration.left,_decoration.img1Locker); }
          else if(_currentDecoration.left.type==1){ context.render(_currentDecoration.left,_decoration.img2Locker); }
          else if(_currentDecoration.left.type==2){ context.render(_currentDecoration.left,_decoration.img3Locker); }
          else if(_currentDecoration.left.type==3){ context.render(_currentDecoration.left,_decoration.img4Locker); }
          else{ context.render(_currentDecoration.left,_decoration.img0Locker); }
        if(_currentDecoration.bottomLeft.type==0){ context.render(_currentDecoration.bottomLeft,_decoration.img1Locker); }
          else if(_currentDecoration.bottomLeft.type==1){ context.render(_currentDecoration.bottomLeft,_decoration.img2Locker); }
          else if(_currentDecoration.bottomLeft.type==2){ context.render(_currentDecoration.bottomLeft,_decoration.img3Locker); }
          else if(_currentDecoration.bottomLeft.type==3){ context.render(_currentDecoration.bottomLeft,_decoration.img4Locker); }
          else{ context.render(_currentDecoration.bottomLeft,_decoration.img0Locker); }

        if(_currentDecoration.first.active){
          if(_currentDecoration.first.type==0){ context.render(_currentDecoration.first,_decoration.img0Close); }
          else if(_currentDecoration.first.type==1){ context.render(_currentDecoration.first,_decoration.img1Close); }
          else if(_currentDecoration.first.type==2){ context.render(_currentDecoration.first,_decoration.img2Close); }
          else{ context.render(_currentDecoration.first,_decoration.img3Close); }
        } if(_currentDecoration.second.active){
          if(_currentDecoration.second.type==0){ context.render(_currentDecoration.second,_decoration.img0Close); }
          else if(_currentDecoration.second.type==1){ context.render(_currentDecoration.second,_decoration.img1Close); }
          else if(_currentDecoration.second.type==2){ context.render(_currentDecoration.second,_decoration.img2Close); }
          else{ context.render(_currentDecoration.second,_decoration.img3Close); }
        }

        if(!global.pause&&_player.hp>0){ _decoration.update(); }
	    } else if(_currentDecoration.current==2&&_currentDecoration.y<canvas.height*1.5&&_currentDecoration.y>=-canvas.height*0.5){
        if(_currentDecoration.type==0){ context.render(_currentDecoration,_decoration.img0Board); }
        else if(_currentDecoration.type==1){ context.render(_currentDecoration,_decoration.img1Board); }
        else if(_currentDecoration.type==2){ context.render(_currentDecoration,_decoration.img2Board); }
        else{ context.render(_currentDecoration,_decoration.img3Board); }

        if(!global.pause&&_player.hp>0){ _decoration.update(); }
      } else if(_currentDecoration.current==3&&_currentDecoration.light.y<canvas.height*1.5&&_currentDecoration.light.y>=-canvas.height*0.5){
        context.render(_currentDecoration.base,"rgb(255,255,255)");
        context.render(_currentDecoration.light,_decoration.img0Light);

        if(!global.pause&&_player.hp>0){ _decoration.update(); }
      }

      if(_currentDecoration.current==0){
        _currentDecoration.base.y+=scene.vy;
        _currentDecoration.text.y+=scene.vy;
        _currentDecoration.base.x+=scene.vx;
        _currentDecoration.text.x+=scene.vx;
      } else if(_currentDecoration.current==1){
        _currentDecoration.base.y+=scene.vy;
        _currentDecoration.bottom.y+=scene.vy;
        _currentDecoration.left.y+=scene.vy;
        _currentDecoration.bottomLeft.y+=scene.vy;
        _currentDecoration.first.y+=scene.vy;
        _currentDecoration.second.y+=scene.vy;
        _currentDecoration.base.x+=scene.vx;
        _currentDecoration.bottom.x+=scene.vx;
        _currentDecoration.left.x+=scene.vx;
        _currentDecoration.bottomLeft.x+=scene.vx;
        _currentDecoration.first.x+=scene.vx;
        _currentDecoration.second.x+=scene.vx;
      } else if(_currentDecoration.current==2){
        _currentDecoration.y+=scene.vy;
        _currentDecoration.x+=scene.vx;
      } else if(_currentDecoration.current==3){
        _currentDecoration.base.y+=scene.vy;
        _currentDecoration.light.y+=scene.vy;
        _currentDecoration.base.x+=scene.vx;
        _currentDecoration.light.x+=scene.vx;
      } _decoration.currentLenght+=1;
    }

    _player.update();
    _player.render();

    if(_loot.current!=-1){
      if(_loot.current==0){ context.render(_loot,_loot.img0); }
      else if(_loot.current==1){ context.render(_loot,_loot.img1); }
      else if(_loot.current==2){ context.render(_loot,_loot.img2); }
      else{ context.render(_loot,_loot.img3); }
    }

    while(_tebox.lenght>=_tebox.currentLenght&&!scene.teacher){
      _currentTebox=_tebox.array[_tebox.currentLenght];
      if(_currentTebox.y<canvas.height*1.5&&_currentTebox.y>=-canvas.height*0.5){
        if(_currentTebox.third!=-1||_tebox.useLenght==_tebox.currentLenght&&_tebox.third!=-1){ context.render(_currentTebox,_tebox.img1); }
        else{ context.render(_currentTebox,_tebox.img0); }

        if(!global.pause&&_player.hp>0){ _tebox.update(); }
      }

      _currentTebox.y+=scene.vy;
      _currentTebox.x+=scene.vx;
      _tebox.currentLenght+=1;
    }

    while(_spike.lenght>=_spike.currentLenght&&!scene.teacher){
      _currentSpike=_spike.array[_spike.currentLenght];
      if(_currentSpike.y<canvas.height+context.scale(32)&&_currentSpike.y>=-context.scale(32)&&!_currentSpike.disable){
        context.render(_currentSpike,_spike.img0);
        if(!global.pause&&_player.hp>0){ _spike.update(); }
      }

      _currentSpike.y+=scene.vy;
      _currentSpike.x+=scene.vx;
      _spike.currentLenght+=1;
    }

    while(_platform.lenght>=_platform.currentLenght){
      _currentPlatform=_platform.array[_platform.currentLenght];
      if(_currentPlatform.y<canvas.height*1.5&&_currentPlatform.y>=-canvas.height*0.5){
        context.render(_currentPlatform,_platform.img0);
        if(!global.pause&&_player.hp>0){ _platform.update(); }
      }

      _currentPlatform.y+=scene.vy;
      _currentPlatform.x+=scene.vx;
      _platform.hy=scene.vy;
      _platform.currentLenght+=1;
    }

    while(_corner.lenght>=_corner.currentLenght&&!scene.teacher){
      _currentCorner=_corner.array[_corner.currentLenght];
      context.render(_currentCorner.base,_corner.img0);
      if(_currentCorner.laser!=undefined){ context.render(_currentCorner.laser,_corner.color0); }
      else if(_currentCorner.lock!=undefined){ context.render(_currentCorner.lock,_corner.img1); }

      if(!global.pause&&_player.hp>0){ _corner.update(); }

      if(_currentCorner.laser!=undefined){
        _currentCorner.laser.y+=scene.vy;
        _currentCorner.laser.x+=scene.vx;
      } else if(_currentCorner.lock!=undefined){
        _currentCorner.lock.y+=scene.vy;
        _currentCorner.lock.x+=scene.vx;
      }
      _currentCorner.base.y+=scene.vy;
      _currentCorner.base.x+=scene.vx;
      _corner.currentLenght+=1;
    } if(!global.pause&&_player.hp>0){ _corner.timer++; }

    while(_foreground.lenght>=_foreground.currentLenght&&!scene.teacher){
      _currentForeground=_foreground.array[_foreground.currentLenght];
      context.render(_currentForeground,"rgb(0,0,55)");
      if(!global.pause&&_player.hp>0){ _foreground.update(); }

      _currentForeground.y+=scene.vy;
      _currentForeground.x+=scene.vx;
      _foreground.currentLenght+=1;
    } _player.lateUpdate();
  }

  context.render(_ui.game.heart.background,_ui.color1);
  context.render(_ui.game.heart.main,_ui.color0);
  if(_player.hp==0){ context.render(_ui.game.heart.icon,_ui.game.heart.icon.img0); }
  else if(_player.hp==1){ context.render(_ui.game.heart.icon,_ui.game.heart.icon.img1); }
  else if(_player.hp==2){ context.render(_ui.game.heart.icon,_ui.game.heart.icon.img2); }
  else if(_player.hp==3){ context.render(_ui.game.heart.icon,_ui.game.heart.icon.img3); }
  else if(_player.hp==4){ context.render(_ui.game.heart.icon,_ui.game.heart.icon.img4); }
  else{ context.render(_ui.game.heart.icon,_ui.game.heart.icon.img5); }
  context.text(_ui.game.heart.text,_ui.color1,_ui.game.heart.text.value0);

  context.render(_ui.game.ammo.background,_ui.color1);
  context.render(_ui.game.ammo.main,_ui.color0);
  if(_player.gun.type==0){
    if(_player.gun.timer<context.time(18)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img0); }
    else if(_player.gun.timer>=context.time(18)&&_player.gun.timer<context.time(36)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img1Normal); }
    else if(_player.gun.timer>=context.time(36)&&_player.gun.timer<context.time(54)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img2Normal); }
    else if(_player.gun.timer>=context.time(54)&&_player.gun.timer<context.time(72)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img3Normal); }
    else if(_player.gun.timer>=context.time(72)&&_player.gun.timer<context.time(90)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img4Normal); }
    else{ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img5Normal); }
  } else if(_player.gun.type==1){
    if(_player.gun.timer<context.time(24)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img0); }
    else if(_player.gun.timer>=context.time(24)&&_player.gun.timer<context.time(48)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img1Strong); }
    else if(_player.gun.timer>=context.time(48)&&_player.gun.timer<context.time(72)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img2Strong); }
    else if(_player.gun.timer>=context.time(72)&&_player.gun.timer<context.time(96)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img3Strong); }
    else if(_player.gun.timer>=context.time(96)&&_player.gun.timer<context.time(120)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img4Strong); }
    else{ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img5Strong); }
  } else{
    if(_player.gun.timer<context.time(12)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img0); }
    else if(_player.gun.timer>=context.time(12)&&_player.gun.timer<context.time(24)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img1Fast); }
    else if(_player.gun.timer>=context.time(24)&&_player.gun.timer<context.time(36)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img2Fast); }
    else if(_player.gun.timer>=context.time(36)&&_player.gun.timer<context.time(48)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img3Fast); }
    else if(_player.gun.timer>=context.time(48)&&_player.gun.timer<context.time(60)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img4Fast); }
    else{ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img5Fast); }
  } context.text(_ui.game.ammo.text,_ui.color1,_ui.game.ammo.text.value0);

  if(!scene.teacher){
    context.render(_ui.game.key.background,_ui.color1);
    context.render(_ui.game.key.main,_ui.color0);
    if(!scene.key){ context.render(_ui.game.key.icon,_ui.game.key.icon.img0); }
    else{ context.render(_ui.game.key.icon,_ui.game.key.icon.img1); }
    context.text(_ui.game.key.text,_ui.color1,_ui.game.key.text.value0);
  }

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
  context.text(_ui.game.info.time,_ui.color1,_ui.game.info.time.value0);

  context.render(_ui.game.notification.background,_ui.color1);
  context.render(_ui.game.notification.main,_ui.color0);
  context.text(_ui.game.notification.icon,_ui.color1,_ui.game.notification.icon.value0);
  context.text(_ui.game.notification.text,_ui.color1,_ui.game.notification.text.value0);
  context.text(_ui.game.notification.info,_ui.color1,_ui.game.notification.info.value0);

  if(scene.teacher){
    context.render(_ui.game.teacher.background,_ui.color1);
    context.render(_ui.game.teacher.main,_ui.color0);
    if(_teacher.hp==0){ context.render(_ui.game.teacher.icon,_ui.game.teacher.icon.img0); }
    else if(_teacher.hp>0&&_teacher.hp<=4){ context.render(_ui.game.teacher.icon,_ui.game.teacher.icon.img1); }
    else if(_teacher.hp>4&&_teacher.hp<=8){ context.render(_ui.game.teacher.icon,_ui.game.teacher.icon.img2); }
    else if(_teacher.hp>8&&_teacher.hp<=12){ context.render(_ui.game.teacher.icon,_ui.game.teacher.icon.img3); }
    else if(_teacher.hp>12&&_teacher.hp<=16){ context.render(_ui.game.teacher.icon,_ui.game.teacher.icon.img4); }
    else{ context.render(_ui.game.teacher.icon,_ui.game.teacher.icon.img5); }
    context.text(_ui.game.teacher.text,_ui.color1,_ui.game.teacher.text.value0);
  }

  if(global.pauseAnimation&&(!global.pauseChange||scene.next!=scene.value)&&global.pause&&_player.hp>0&&!global.gameLoad&&!global.restart){
    context.render(_transition.overlay,_transition.color0);

    context.render(_ui.menu.main,_ui.color0);
    context.render(_ui.menu.left,_ui.color1);
    context.render(_ui.menu.right,_ui.color1);

    if(_title.base.alpha==100){ context.render(_title.teb,_title.teb.img0); }
    else{ context.render(_title.teb,_title.teb.img1); }
    context.render(_title.base,_title.base.img0);

    context.text(_account.name,_account.color0,_account.name.value0);
    context.render(_account.background,_account.color0);
    if(_player.skin==0){ context.render(_account.profile,_account.profile.img0); }
    else{ context.render(_account.profile,_account.profile.img1); }

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
          context.text(_clipboard.title,"rgb(0,0,0)",_clipboard.title.value0);
          context.render(_clipboard.icon,_clipboard.icon.img0);

          if(!global.sfx){ context.render(_clipboard.setting.sfx.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.sfx.base,_clipboard.setting.img1); }
          context.text(_clipboard.setting.sfx.text,"rgb(0,0,0)",_clipboard.setting.sfx.text.value0);
          if(!global.music){ context.render(_clipboard.setting.music.base,_clipboard.setting.img0); }
          else{ context.render(_clipboard.setting.music.base,_clipboard.setting.img1); }
          context.text(_clipboard.setting.music.text,"rgb(0,0,0)",_clipboard.setting.music.text.value0);
        } else if(_button.about.animation||_button.about.on){
          context.render(_clipboard.icon,_clipboard.icon.img1);
          context.text(_clipboard.title,"rgb(0,0,0)",_clipboard.title.value1);
          context.text(_clipboard.text,"rgb(0,0,0)",_clipboard.text.value0);
        } else if(_button.version.animation||_button.version.on){
          context.render(_clipboard.icon,_clipboard.icon.img2);
          context.text(_clipboard.title,"rgb(0,0,0)",_clipboard.title.value2);
          context.text(_clipboard.text,"rgb(0,0,0)",_clipboard.text.value1);
        }
      }
    }

    if(global.currentTutorial||global.currentReward||global.currentTeacher){
      context.render(_footer.next,_footer.next.img0);

      if(global.currentTutorial){
        context.text(_description.title,"rgb(255,255,255)",_description.title.value0);
        context.text(_description.text,"rgb(255,255,255)",_description.text.value0);
        context.render(_description.icon,_description.icon.img0);
      } else if(global.currentReward){
        context.text(_description.title,"rgb(255,255,255)",_description.title.value1);
        context.text(_description.text,"rgb(255,255,255)",_description.text.value1);
        context.render(_description.icon,_description.icon.img1);
      } else{
        context.text(_description.title,"rgb(255,255,255)",_description.title.value2);
        context.render(_description.icon,_description.icon.img2);
        if(scene.value==2){ context.text(_description.text,"rgb(255,255,255)",_description.text.value0Teacher); }
        else if(scene.value==3){ context.text(_description.text,"rgb(255,255,255)",_description.text.value1Teacher); }
        else if(scene.value==4){ context.text(_description.text,"rgb(255,255,255)",_description.text.value2Teacher); }
        else if(scene.value==5){ context.text(_description.text,"rgb(255,255,255)",_description.text.value3Teacher); }
        else if(scene.value==6){ context.text(_description.text,"rgb(255,255,255)",_description.text.value4Teacher); }
        else if(scene.value==7){ context.text(_description.text,"rgb(255,255,255)",_description.text.value5Teacher); }
        else if(scene.value==8){ context.text(_description.text,"rgb(255,255,255)",_description.text.value6Teacher); }
        else if(scene.value==9){ context.text(_description.text,"rgb(255,255,255)",_description.text.value7Teacher); }
        else{
          if(_teacher.round==0){ context.text(_description.text,"rgb(255,255,255)",_description.text.value8Teacher); }
          else if(_teacher.round==1){ context.text(_description.text,"rgb(255,255,255)",_description.text.value9Teacher); }
          else{ context.text(_description.text,"rgb(255,255,255)",_description.text.value10Teacher); }
        }
      }
    }
  }

  if(scene.change&&scene.next!=1||scene.change&&_teacher.round>=2){
    if(_player.hp==0||global.load){
      if(scene.teacher){
        html.classList.remove("black-red");
        html.classList.add("red-black");
      } else{
        html.classList.remove("black-cyan");
        html.classList.add("cyan-black");
      }
    } else if(_transition.base.y>=canvas.height*1.5){
      html.classList.remove("blue-black");
      html.classList.remove("red-black");
      html.classList.add("black-cyan");
    }

    context.render(_transition.base,_transition.color0);
    context.render(_transition.top,_transition.img0);
    context.render(_transition.bottom,_transition.img1);
    context.text(_transition.text,"rgb(255,255,255)",_transition.text.value0);

    if(_indicator.timer<context.time(5)){ context.render(_indicator,_indicator.img0); }
    else if(_indicator.timer>=context.time(5)&&_indicator.timer<context.time(10)){ context.render(_indicator,_indicator.img1); }
    else if(_indicator.timer>=context.time(10)&&_indicator.timer<context.time(15)){ context.render(_indicator,_indicator.img2); }
    else if(_indicator.timer>=context.time(15)&&_indicator.timer<context.time(20)){ context.render(_indicator,_indicator.img3); }
    else if(_indicator.timer>=context.time(20)&&_indicator.timer<context.time(25)){ context.render(_indicator,_indicator.img4); }
    else if(_indicator.timer>=context.time(25)&&_indicator.timer<context.time(30)){ context.render(_indicator,_indicator.img5); }
    else{ context.render(_indicator,_indicator.img0Resolution); }
  } if(scene.next!=scene.value&&global.pauseChange||global.restart||scene.load){
    if(scene.load){
      if(scene.teacher){
        html.classList.remove("cyan-black");
        html.classList.add("black-red");
      } else{
        html.classList.remove("black-cyan");
        html.classList.add("cyan-black");
      }
    }

    context.render(_transition.base,_transition.color0);
    context.render(_transition.top,_transition.img0);
    context.render(_transition.bottom,_transition.img1);
    context.text(_transition.text,"rgb(255,255,255)",_transition.text.value0);

    if(_indicator.timer<context.time(5)){ context.render(_indicator,_indicator.img0); }
    else if(_indicator.timer>=context.time(5)&&_indicator.timer<context.time(10)){ context.render(_indicator,_indicator.img1); }
    else if(_indicator.timer>=context.time(10)&&_indicator.timer<context.time(15)){ context.render(_indicator,_indicator.img2); }
    else if(_indicator.timer>=context.time(15)&&_indicator.timer<context.time(20)){ context.render(_indicator,_indicator.img3); }
    else if(_indicator.timer>=context.time(20)&&_indicator.timer<context.time(25)){ context.render(_indicator,_indicator.img4); }
    else if(_indicator.timer>=context.time(25)&&_indicator.timer<context.time(30)){ context.render(_indicator,_indicator.img5); }
    else{ context.render(_indicator,_indicator.img0Resolution); }
  } else if(global.pauseChange&&!global.restart){
    if(!global.pauseAnimation){
      if(scene.teacher){
        html.classList.remove("red-black");
        html.classList.add("black-red");
      } else{
        html.classList.remove("cyan-black");
        html.classList.add("black-cyan");
      }
    } else if(!global.currentTutorial){
      if(scene.teacher){
        html.classList.remove("cyan-red");
        html.classList.remove("black-red");
        html.classList.add("red-black");
      } else{
        html.classList.remove("red-black");
        html.classList.remove("black-cyan");
        html.classList.add("cyan-black");
      }
    } context.render(_transition.overlay,_transition.color0);
  }
}
