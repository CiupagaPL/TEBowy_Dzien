/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

level=function(){
  if(musicOn&&!tutorial){
    if(sceneTimer<60){
      musicTimer++;
      _audio.boss.load();
      if(musicTimer>=1&&musicTimer<2){
        _audio.game.load();
        _audio.game.play();
      } if(musicTimer>=1147){
        musicTimer=0;
      }
    } if(sceneTimer>=60&&sceneTimer<80){
      _audio.game.load();
      musicTimer=0;
    } if(sceneTimer>=80){
      musicTimer++;
      if(musicTimer>=1&&musicTimer<2){
        _audio.boss.load();
        _audio.boss.play();
      } if(musicTimer>=1147){
        musicTimer=0;
      }
    }
  } else if(!musicOn||pause||_player.hp<=0||changeScene){
    _audio.game.load();
    _audio.boss.load();
    musicTimer=0;
  }

  if(!pause){
    _html.style.backgroundColor=_background.color0;
    _audio.game.volume=0.25;
    _audio.boss.volume=0.25;
  } else if(pause){
    _audio.game.volume=0;
    _audio.boss.volume=0;
  }

  _context.drawShortImage(_background.img2,_background);
  _context.drawShortImage(_backgroundTop.img2,_backgroundTop);

  if(_background.y>=_render.height){ _background.y=_backgroundTop.y-_render.height; }
  if(_backgroundTop.y>=_render.height){ _backgroundTop.y=_background.y-_render.height; }

  animateclipboard();

  handleplayer();
  if(boss){ handleboss(); }

  _context.fillShortRect(_gameUI.color,_gameUI);
  _gameLevel.value="Poziom: "+Number(scene-1);
  _context.fillShortText(_gameLevel.color,_gameLevel,_gameLevel.value);
  _gameScore.value="Wynik: "+score;
  _context.fillShortText(_gameScore.color,_gameScore,_gameScore.value);

  if(_player.hp<=0){ _context.drawShortImage(_gameHP1.img2,_gameHP1); }
  if(_player.hp==25){ _context.drawShortImage(_gameHP1.img1,_gameHP1); }
  if(_player.hp>=50){ _context.drawShortImage(_gameHP1.img0,_gameHP1); }

  if(_player.hp<75){ _context.drawShortImage(_gameHP2.img2,_gameHP2); }
  if(_player.hp==75){ _context.drawShortImage(_gameHP2.img1,_gameHP2); }
  if(_player.hp>=100){ _context.drawShortImage(_gameHP2.img0,_gameHP2); }

  if(_player.hp<125){ _context.drawShortImage(_gameHP3.img2,_gameHP3); }
  if(_player.hp==125){ _context.drawShortImage(_gameHP3.img1,_gameHP3); }
  if(_player.hp>=150){ _context.drawShortImage(_gameHP3.img0,_gameHP3); }

  if(boss){
    if(_boss.hp<=0){ _context.drawShortImage(_gameBossHP1.img2,_gameBossHP1); }
    if(_boss.hp<=25&&_boss.hp>0){ _context.drawShortImage(_gameBossHP1.img1,_gameBossHP1); }
    if(_boss.hp>25){ _context.drawShortImage(_gameBossHP1.img0,_gameBossHP1); }

    if(_boss.hp<=50){ _context.drawShortImage(_gameBossHP2.img2,_gameBossHP2); }
    if(_boss.hp<=75&&_boss.hp>50){ _context.drawShortImage(_gameBossHP2.img1,_gameBossHP2); }
    if(_boss.hp>75){ _context.drawShortImage(_gameBossHP2.img0,_gameBossHP2); }

    if(_boss.hp<=100){ _context.drawShortImage(_gameBossHP3.img2,_gameBossHP3); }
    if(_boss.hp<=125&&_boss.hp>100){ _context.drawShortImage(_gameBossHP3.img1,_gameBossHP3); }
    if(_boss.hp>125){ _context.drawShortImage(_gameBossHP3.img0,_gameBossHP3); }

    if(_boss.hp<=150){ _context.drawShortImage(_gameBossHP4.img2,_gameBossHP4); }
    if(_boss.hp<=175&&_boss.hp>150){ _context.drawShortImage(_gameBossHP4.img1,_gameBossHP4); }
    if(_boss.hp>175){ _context.drawShortImage(_gameBossHP4.img0,_gameBossHP4); }

    if(_boss.hp<=200){ _context.drawShortImage(_gameBossHP5.img2,_gameBossHP5); }
    if(_boss.hp<=225&&_boss.hp>200){ _context.drawShortImage(_gameBossHP5.img1,_gameBossHP5); }
    if(_boss.hp>225){ _context.drawShortImage(_gameBossHP5.img0,_gameBossHP5); }

    if(_playerGun.on&&!_playerGun.power){ _context.drawShortImage(_gameWater.img0,_gameWater); }
    if(_playerGun.timer>=60&&!_playerGun.on&&!_playerGun.power){ _context.drawShortImage(_gameWater.img1,_gameWater); }
    if(_playerGun.timer<60){ _context.drawShortImage(_gameWater.img2,_gameWater); }
    if(_playerGun.on&&_playerGun.power){ _context.drawShortImage(_gameWater.img3,_gameWater); }
    if(_playerGun.timer>=60&&!_playerGun.on&&_playerGun.power){ _context.drawShortImage(_gameWater.img4,_gameWater); }
  }

  _context.drawShortImage(_gamePause.img,_gamePause);

  if(_player.hp<=0&&sfxOn&&!dead){ _audio.die.play(); }
  if(_player.hp<=0){
    _player.hp=0;
    dead=true;
  }

  if(_boss.hp<=0){ _boss.hp=0; }

  if(dead){
    if(_player.hp<=0){ sceneoff(); }
    else if(_player.hp==150){ sceneon(); }
  }

  if(autoScene&&!_clipboard.on){
    nextScene=nextAutoScene;
    changeScene=true;
    pauseAnimation=false;
    pauseChange=true;
  } if(autoUnpause&&!_clipboard.on){
    pauseChange=true;
    pauseAnimation=false;
  } if(autoRestart&&!_clipboard.on){ restart=true; }

  if(nextScene!=scene&&pauseChange||restart){ pauseend(); }
  if(pauseChange){
    if(!pauseAnimation){ pauseoff(); }
    else if(pauseAnimation){ pauseon(); }
  }

  if(pauseAnimation&&!pauseChange&&pause&&changeTimer==0&&nextScene!=1){
    if(!pauseChange){ _context.drawShortImage(_change.img3,_change); }

    if(!_menuTitle.hover){ _context.drawShortImage(_menuTitle.img,_menuTitle); }
    else if(_menuTitle.hover){ _context.drawShortImage(_menuTitle.imgOn,_menuTitle); }

    if(fullScreen){ _context.drawShortImage(_menuResolution.imgOn,_menuResolution); }
    else if(!fullScreen){ _context.drawShortImage(_menuResolution.img,_menuResolution); }

    if(!tutorial&&!teacher){
      _context.drawShortImage(_clipboard.img,_clipboard);
      if(!_clipboardBack.hover){ _context.drawShortImage(_clipboardBack.img,_clipboardBack); }
      else if(_clipboardBack.hover){ _context.drawShortImage(_clipboardBack.imgOn,_clipboardBack); }

      if(!_menuStart.hover){ _context.drawShortImage(_menuStart.img,_menuStart); }
      else if(_menuStart.hover){ _context.drawShortImage(_menuStart.imgOn,_menuStart); } 
      _context.fillShortText(_menuStartText.color,_menuStartText,_menuStartText.value);
      if(!_menuMenu.hover){ _context.drawShortImage(_menuMenu.img,_menuMenu); }
      else if(_menuMenu.hover){ _context.drawShortImage(_menuMenu.imgOn,_menuMenu); } 
      _context.fillShortText(_menuMenuText.color,_menuMenuText,_menuMenuText.value);
      if(!_menuSetting.hover){ _context.drawShortImage(_menuSetting.img,_menuSetting); }
      else if(_menuSetting.hover){ _context.drawShortImage(_menuSetting.imgOn,_menuSetting); } 
      _context.fillShortText(_menuSettingText.color,_menuSettingText,_menuSettingText.value);
      if(!_menuAbout.hover){ _context.drawShortImage(_menuAbout.img,_menuAbout); }
      else if(_menuAbout.hover){ _context.drawShortImage(_menuAbout.imgOn,_menuAbout); } 
      _context.fillShortText(_menuAboutText.color,_menuAboutText,_menuAboutText.value);
      if(!_menuVersion.hover){ _context.drawShortImage(_menuVersion.img,_menuVersion); }
      else if(_menuVersion.hover){ _context.drawShortImage(_menuVersion.imgOn,_menuVersion); } 
      _context.fillShortText(_menuVersionText.color,_menuVersionText,_menuVersionText.value);
      if(!_menuRestart.hover){ _context.drawShortImage(_menuRestart.img,_menuRestart); }
      else if(_menuRestart.hover){ _context.drawShortImage(_menuRestart.imgOn,_menuRestart); } 
      _context.fillShortText(_menuRestartText.color,_menuRestartText,_menuRestartText.value);
    } if(tutorial){
      _context.drawShortImage(_wideClipboard.img,_wideClipboard);
      if(!_wideClipboardForward.hover){ _context.drawShortImage(_wideClipboardForward.img,_wideClipboardForward); }
      else if(_wideClipboardForward.hover){ _context.drawShortImage(_wideClipboardForward.imgOn,_wideClipboardForward); }

      _context.fillShortText(_tutorialTitle.color,_tutorialTitle,_tutorialTitle.value);
      _context.fillShortText(_tutorialText.color,_tutorialText,_tutorialText.value);
    } else if(teacher){
      _context.drawShortImage(_wideBlueprint.img,_wideBlueprint);
      if(!_wideBlueprintForward.hover){ _context.drawShortImage(_wideBlueprintForward.img,_wideBlueprintForward); }
      else if(_wideBlueprintForward.hover){ _context.drawShortImage(_wideBlueprintForward.imgOn,_wideBlueprintForward); }

      if(scene==2){
        _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value0);
        _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value0);
      } if(scene==3){
        _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value1);
        _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value1);
      } if(scene==4){
        _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value2);
        _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value2);
      } if(scene==5){
        _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value3);
        _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value3);
      } if(scene==6){
        _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value4);
        _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value4);
      } if(scene==7){
        _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value5);
        _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value5);
      } if(scene==8){
        _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value6);
        _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value6);
      } if(scene==9){
        _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value7);
        _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value7);
      } if(scene==10){
        _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value1);
        _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value1);
      } if(scene==11){
        if(_boss.round==0){
          _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.valueAdd0);
          _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.valueAdd0);
        } if(_boss.round==1){
          _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.valueAdd1);
          _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.valueAdd1);
        } else if(_boss.round==2){
          _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.valueAdd2);
          _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.valueAdd2);
        }
      }
    }
  }

  if(_menuSetting.animation||_menuSetting.on){
    _context.fillShortText(_clipboardSettingText.color,_clipboardSettingText,_clipboardSettingText.value);

    if(!sfxOn){ _context.drawShortImage(_clipboardSetting1.img,_clipboardSetting1); }
    else if(sfxOn){ _context.drawShortImage(_clipboardSetting1.imgOn,_clipboardSetting1); }
    if(!musicOn){ _context.drawShortImage(_clipboardSetting2.img,_clipboardSetting2); }
    else if(musicOn){ _context.drawShortImage(_clipboardSetting2.imgOn,_clipboardSetting2); }
    if(!tutorialOn){ _context.drawShortImage(_clipboardSetting3.img,_clipboardSetting3); }
    else if(tutorialOn){ _context.drawShortImage(_clipboardSetting3.imgOn,_clipboardSetting3); }
    if(!teacherOn){ _context.drawShortImage(_clipboardSetting4.img,_clipboardSetting4); }
    else if(teacherOn){ _context.drawShortImage(_clipboardSetting4.imgOn,_clipboardSetting4); }
    if(!addonOn){ _context.drawShortImage(_clipboardSetting5.img,_clipboardSetting5); }
    else if(addonOn){ _context.drawShortImage(_clipboardSetting5.imgOn,_clipboardSetting5); }

    _context.fillShortText(_clipboardSetting6.color,_clipboardSetting6,_clipboardSetting6.value);
    _context.fillShortText(_clipboardSetting7.color,_clipboardSetting7,_clipboardSetting7.value);
    _context.fillShortText(_clipboardSetting8.color,_clipboardSetting8,_clipboardSetting8.value);
    _context.fillShortText(_clipboardSetting9.color,_clipboardSetting9,_clipboardSetting9.value);
    _context.fillShortText(_clipboardSetting10.color,_clipboardSetting10,_clipboardSetting10.value);
  } if(_menuAbout.animation||_menuAbout.on){
    _context.fillShortText(_clipboardAboutText.color,_clipboardAboutText,_clipboardAboutText.value);
    _context.fillShortText(_clipboardAbout1.color,_clipboardAbout1,_clipboardAbout1.value);
  } if(_menuVersion.animation||_menuVersion.on){
    _context.fillShortText(_clipboardVersionText.color,_clipboardVersionText,_clipboardVersionText.value);
    _context.fillShortText(_clipboardVersion1.color,_clipboardVersion1,_clipboardVersion1.value);
  }

  if(changeScene&&_player.hp>0&&!defeat){ sceneon(); }
  if(defeat&&scene!=11){
    nextScene=scene+1;
    changeScene=true;
    sceneoff();
  } if(defeat&&scene==11){
    nextScene=1;
    changeScene=true;
    menuLoad=true;
    sceneoff();
  }
}
