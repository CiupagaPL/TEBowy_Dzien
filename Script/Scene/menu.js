/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

start=function(){
  sceneTimer++;

  animateloading();
  if(nextScene!=scene){
    scene=nextScene;
    sceneTimer=0;
  }
}

menu=function(){
  sceneTimer++;

  if(musicOn){
    musicTimer++;
    if(musicTimer>=1&&musicTimer<2){
      _audio.menu.load();
      _audio.menu.play();
    } if(musicTimer>=1107){
      musicTimer=0;
    }
  } else if(!musicOn){
    _audio.menu.load();
    musicTimer=0;
  }

  animatemenu();
  animateblueprint();
  animateclipboard();

  animatemenubackground();
  if(!changeScene){
    _html.style.backgroundColor=_background.color0a;
    _about.style.backgroundColor=_background.color0b;
  }

  if(skin==0||skin==2){
    _blueprintSkin.height=122*scale;
    _blueprintSkin.y=_blueprint.y+58*scale;
  } else if(skin==1||skin==3){
    _blueprintSkin.height=113*scale;
    _blueprintSkin.y=_blueprint.y+67*scale;
  }

  _context.fillShortRect(_menuUI.color,_menuUI);

  if(!_menuTitle.hover){ _context.drawShortImage(_menuTitle.img,_menuTitle); }
  else if(_menuTitle.hover){ _context.drawShortImage(_menuTitle.imgOn,_menuTitle); }

  if(!_menuStart.hover){ _context.drawShortImage(_menuStart.img,_menuStart); }
  else if(_menuStart.hover){ _context.drawShortImage(_menuStart.imgOn,_menuStart); } 
  _context.fillShortText(_menuStartText.color,_menuStartText,_menuStartText.value);
  if(!_menuLevel.hover){ _context.drawShortImage(_menuLevel.img,_menuLevel); }
  else if(_menuLevel.hover){ _context.drawShortImage(_menuLevel.imgOn,_menuLevel); } 
  _context.fillShortText(_menuLevelText.color,_menuLevelText,_menuLevelText.value);
  if(!_menuSetting.hover){ _context.drawShortImage(_menuSetting.img,_menuSetting); }
  else if(_menuSetting.hover){ _context.drawShortImage(_menuSetting.imgOn,_menuSetting); } 
  _context.fillShortText(_menuSettingText.color,_menuSettingText,_menuSettingText.value);
  if(!_menuAbout.hover){ _context.drawShortImage(_menuAbout.img,_menuAbout); }
  else if(_menuAbout.hover){ _context.drawShortImage(_menuAbout.imgOn,_menuAbout); } 
  _context.fillShortText(_menuAboutText.color,_menuAboutText,_menuAboutText.value);
  if(!_menuCustom.hover){ _context.drawShortImage(_menuCustom.img,_menuCustom); }
  else if(_menuCustom.hover){ _context.drawShortImage(_menuCustom.imgOn,_menuCustom); } 
  _context.fillShortText(_menuCustomText.color,_menuCustomText,_menuCustomText.value);

  _context.drawShortImage(_clipboard.img,_clipboard);
  if(!_clipboardBack.hover){ _context.drawShortImage(_clipboardBack.img,_clipboardBack); }
  else if(_clipboardBack.hover){ _context.drawShortImage(_clipboardBack.imgOn,_clipboardBack); }

  if(_menuCustom.on||_menuCustom.animation){ _context.drawShortImage(_blueprint.img0,_blueprint); }
  else if(_menuLevel.on||_menuLevel.animation){ _context.drawShortImage(_blueprint.img1,_blueprint); }
  
  if(!_blueprintBack.hover){ _context.drawShortImage(_blueprintBack.img,_blueprintBack); }
  else if(_blueprintBack.hover){ _context.drawShortImage(_blueprintBack.imgOn,_blueprintBack); }

  if(_menuCustom.animation||_menuCustom.on){
    if(skin==0){ _context.drawShortImage(_blueprintSkin.img0,_blueprintSkin); }
    if(skin==1){ _context.drawShortImage(_blueprintSkin.img1,_blueprintSkin); }
    if(skin==2){ _context.drawShortImage(_blueprintSkin.img2,_blueprintSkin); }
    if(skin==3){ _context.drawShortImage(_blueprintSkin.img3,_blueprintSkin); }

    if(!_blueprintLeft.hover){ _context.drawShortImage(_blueprintLeft.img,_blueprintLeft); }
    else if(_blueprintLeft.hover){ _context.drawShortImage(_blueprintLeft.imgOn,_blueprintLeft); }
    if(!_blueprintRight.hover){ _context.drawShortImage(_blueprintRight.img,_blueprintRight); }
    else if(_blueprintRight.hover){ _context.drawShortImage(_blueprintRight.imgOn,_blueprintRight); }

    _context.fillShortText(_blueprintCustomText.color,_blueprintCustomText,_blueprintCustomText.value);
    _context.fillShortText(_blueprintCustom1.color,_blueprintCustom1,_blueprintCustom1.value);
  }

  if(_menuLevel.animation||_menuLevel.on){
    _context.fillShortText(_blueprintLevelText.color,_blueprintLevelText,_blueprintLevelText.value);

    _context.drawShortImage(_blueprintLevel1.img,_blueprintLevel1);
    _context.drawShortImage(_blueprintLevel2.img,_blueprintLevel2);
    _context.drawShortImage(_blueprintLevel3.img,_blueprintLevel3);
    _context.drawShortImage(_blueprintLevel4.img,_blueprintLevel4);
    _context.drawShortImage(_blueprintLevel5.img,_blueprintLevel5);
    _context.drawShortImage(_blueprintLevel6.img,_blueprintLevel6);
    _context.drawShortImage(_blueprintLevel7.img,_blueprintLevel7);
    _context.drawShortImage(_blueprintLevel8.img,_blueprintLevel8);
    _context.drawShortImage(_blueprintLevel9.img,_blueprintLevel9);
    _context.drawShortImage(_blueprintLevel10.img,_blueprintLevel10);
  } level=function(){
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
    } else if(!musicOn){
      _audio.game.load();
      _audio.boss.load();
      musicTimer=0;
    }
    
    _context.drawShortImage(_background.img2,_background);
    _context.drawShortImage(_backgroundTop.img2,_backgroundTop);
    
    if(_background.y>=_render.height){ _background.y=_backgroundTop.y-_render.height; }
    if(_backgroundTop.y>=_render.height){ _backgroundTop.y=_background.y-_render.height; }
    
    _html.style.backgroundColor=_background.color0;
    
    animateclipboard();
    
    handleplayer();
    if(boss){ handleboss(); }
    
    _context.fillShortRect(_gameUI.color,_gameUI);
    _gameLevel.value="Poziom: "+Number(scene-1);
    _context.fillShortText(_gameLevel.color,_gameLevel,_gameLevel.value);
    _gameScore.value="Wynik: "+score;
    _context.fillShortText(_gameScore.color,_gameScore,_gameScore.value);
    if(hp>=2){ _context.drawShortImage(_gameHP1.img0,_gameHP1); }
    if(hp==1){ _context.drawShortImage(_gameHP1.img1,_gameHP1); }
    if(hp==0){ _context.drawShortImage(_gameHP1.img2,_gameHP1); }
    if(hp>=4){ _context.drawShortImage(_gameHP2.img0,_gameHP2); }
    if(hp==3){ _context.drawShortImage(_gameHP2.img1,_gameHP2); }
    if(hp<=2){ _context.drawShortImage(_gameHP2.img2,_gameHP2); }
    if(hp==6){ _context.drawShortImage(_gameHP3.img0,_gameHP3); }
    if(hp==5){ _context.drawShortImage(_gameHP3.img1,_gameHP3); }
    if(hp<=4){ _context.drawShortImage(_gameHP3.img2,_gameHP3); }
    if(boss){
      if(bossHp>=2){ _context.drawShortImage(_gameBossHP1.img0,_gameBossHP1); }
      if(bossHp==1){ _context.drawShortImage(_gameBossHP1.img1,_gameBossHP1); }
      if(bossHp==0){ _context.drawShortImage(_gameBossHP1.img2,_gameBossHP1); }
      if(bossHp>=4){ _context.drawShortImage(_gameBossHP2.img0,_gameBossHP2); }
      if(bossHp==3){ _context.drawShortImage(_gameBossHP2.img1,_gameBossHP2); }
      if(bossHp<=2){ _context.drawShortImage(_gameBossHP2.img2,_gameBossHP2); }
      if(bossHp>=6){ _context.drawShortImage(_gameBossHP3.img0,_gameBossHP3); }
      if(bossHp==5){ _context.drawShortImage(_gameBossHP3.img1,_gameBossHP3); }
      if(bossHp<=4){ _context.drawShortImage(_gameBossHP3.img2,_gameBossHP3); }
      if(bossHp>=8){ _context.drawShortImage(_gameBossHP4.img0,_gameBossHP4); }
      if(bossHp==7){ _context.drawShortImage(_gameBossHP4.img1,_gameBossHP4); }
      if(bossHp<=6){ _context.drawShortImage(_gameBossHP4.img2,_gameBossHP4); }
      if(bossHp==10){ _context.drawShortImage(_gameBossHP5.img0,_gameBossHP5); }
      if(bossHp==9){ _context.drawShortImage(_gameBossHP5.img1,_gameBossHP5); }
      if(bossHp<=8){ _context.drawShortImage(_gameBossHP5.img2,_gameBossHP5); }
    }
    _context.drawShortImage(_gamePause.img,_gamePause);
    
    if(hp<0){ hp=0; }
    if(hp==0){ dead=true; if(sfxOn){ _audio.die.play(); } }
    if(bossHp<0){ bossHp=0; }
    
    if(dead){
      if(hp==0){
        sceneoff();
      } else if(hp==6){
        sceneon();
      }
    }
    
    if(autoScene&&!_clipboard.on){
      nextScene=nextAutoScene;
      changeScene=true;
      canClick=false;
    } if(autoUnpause&&!_clipboard.on){
      pauseChange=true;
      canClick=false;
      autoUnpause=false;
    } if(autoRestart&&!_clipboard.on){
      restart=true;
      canClick=false;
    }
    
    if(nextScene!=scene){ transitionshorton(); }
    
    console.log(pauseChange,pauseAnimation);
    if(pauseChange){
      if(pauseAnimation){
        pauseon();
      } else if(!pauseAnimation){
        pauseoff();
      }
    }
    
    if(pauseAnimation&&nextScene!=1){
      if(!pauseChange){ _context.drawShortImage(_change.img3,_change); }
      
      if(!_menuTitle.hover){ _context.drawShortImage(_menuTitle.img,_menuTitle); }
      else if(_menuTitle.hover){ _context.drawShortImage(_menuTitle.imgOn,_menuTitle); }
      
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
          _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value0);
          _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value0);
        } if(scene==8){
          _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value1);
          _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value1);
        } if(scene==9){
          _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value2);
          _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value2);
        } if(scene==10){
          _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value3);
          _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value3);
        } if(scene==11){
          _context.fillShortText(_bossTitle.color,_bossTitle,_bossTitle.value4);
          _context.fillShortText(_bossDescription.color,_bossDescription,_bossDescription.value4);
        }
      }
    }
    
  if(_menuLevel.animation||_menuLevel.on){
    _context.fillShortText(_blueprintLevelText.color,_blueprintLevelText,_blueprintLevelText.value);

    _context.drawShortImage(_blueprintLevel1.img,_blueprintLevel1);
    _context.drawShortImage(_blueprintLevel2.img,_blueprintLevel2);
    _context.drawShortImage(_blueprintLevel3.img,_blueprintLevel3);
    _context.drawShortImage(_blueprintLevel4.img,_blueprintLevel4);
    _context.drawShortImage(_blueprintLevel5.img,_blueprintLevel5);
    _context.drawShortImage(_blueprintLevel6.img,_blueprintLevel6);
    _context.drawShortImage(_blueprintLevel7.img,_blueprintLevel7);
    _context.drawShortImage(_blueprintLevel8.img,_blueprintLevel8);
    _context.drawShortImage(_blueprintLevel9.img,_blueprintLevel9);
    _context.drawShortImage(_blueprintLevel10.img,_blueprintLevel10);
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
  }

  if(autoScene&&!_clipboard.on&&!_menuLevel.on&&!_menuSetting.on&&!_menuAbout.on&&!_menuCustom.on){ nextScene=nextAutoScene; changeScene=true; canClick=false; }
  if(changeScene&&!menuLoad){ transitionon(); }
  if(changeScene&&menuLoad){ transitionoff(); }
}
