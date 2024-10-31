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
      } if(musicTimer>=1148){
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
      } if(musicTimer>=1148){
        musicTimer=0;
      }
    }
  } else if(!musicOn){
    _audio.game.load();
    _audio.boss.load();
    musicTimer=0;
  }

  animateclipboard();

  _clipboardSettingText.x=_clipboard.x+42*scale;
  _clipboardAboutText.x=_clipboard.x+38*scale;

  _clipboardSetting1.x=_clipboard.x+24*scale;
  _clipboardSetting2.x=_clipboard.x+88*scale;
  _clipboardSetting3.x=_clipboard.x+24*scale;
  _clipboardSetting4.x=_clipboard.x+42*scale;
  _clipboardSetting5.x=_clipboard.x+46*scale;
  _clipboardSetting6.x=_clipboard.x+42*scale;

  _clipboardAbout1.x=_clipboard.x+18*scale;

  _menuTitle.y=-32*scale;
  _menuStart.y=_render.height-168*scale;
  _menuLevel.y=_render.height-128*scale;
  _menuSetting.y=_render.height-88*scale;
  _menuAbout.y=_render.height-48*scale;
  _menuCustom.y=312*scale;

  _context.drawShortImage(_background.img1,_background);
  _html.style.backgroundColor=_background.color0;

  if(boss){ handleboss(); }

  handlePlayer();

  _context.fillShortRect(_gameUI.color,_gameUI);
  _gameLevel.value="Poziom: "+Number(scene-1)+"-"+round;
  _context.fillShortText(_gameLevel.color,_gameLevel);
  _gameScore.value="Wynik: "+score;
  _context.fillShortText(_gameScore.color,_gameScore);
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
  if(bossHp==0){ boss=false; defeat=true; }

  if(dead){
    if(hp==0){
      transitiondead();
    } else if(hp==6){
      transitionoff();
    }
  }

  if(autoScene&&!_clipboard.on&&!_menuLevel.on&&!_menuSetting.on&&!_menuAbout.on){ nextScene=nextAutoScene; changeScene=true; canClick=false; }
  if(autoUnpause&&!_clipboard.on&&!_menuLevel.on&&!_menuSetting.on&&!_menuAbout.on){ pauseChange=true; canClick=false; }
  if(nextScene!=scene){ transitionshorton(); }

  if(pauseChange){
    if(!pauseAnimation){
      transitionPauseon();
    } else if(pauseAnimation){
      transitionPauseoff();
    }
  }

  if(pauseAnimation&&nextScene!=1){
    if(!pauseChange){ _context.drawShortImage(_change.img3,_change); }

    _context.drawShortImage(_menuTitle.img,_menuTitle);

    if(!tutorial){
      _context.drawShortImage(_clipboard.img,_clipboard);
      if(!_clipboardBack.hover){ _context.drawShortImage(_clipboardBack.img,_clipboardBack); }
      else if(_clipboardBack.hover){ _context.drawShortImage(_clipboardBack.imgOn,_clipboardBack); }

      if(!_menuStart.hover){ _context.drawShortImage(_menuStart.img,_menuStart); }
      else if(_menuStart.hover){ _context.drawShortImage(_menuStart.imgOn,_menuStart); } 
      _context.fillShortText(_menuStartText.color,_menuStartText);
      if(!_menuMenu.hover){ _context.drawShortImage(_menuMenu.img,_menuMenu); }
      else if(_menuMenu.hover){ _context.drawShortImage(_menuMenu.imgOn,_menuMenu); } 
      _context.fillShortText(_menuMenuText.color,_menuMenuText);
      if(!_menuSetting.hover){ _context.drawShortImage(_menuSetting.img,_menuSetting); }
      else if(_menuSetting.hover){ _context.drawShortImage(_menuSetting.imgOn,_menuSetting); } 
      _context.fillShortText(_menuSettingText.color,_menuSettingText);
      if(!_menuAbout.hover){ _context.drawShortImage(_menuAbout.img,_menuAbout); }
      else if(_menuAbout.hover){ _context.drawShortImage(_menuAbout.imgOn,_menuAbout); } 
      _context.fillShortText(_menuAboutText.color,_menuAboutText);
    } else if(tutorial){
      _context.drawShortImage(_wideClipboard.img,_wideClipboard);
      if(!_wideClipboardForward.hover){ _context.drawShortImage(_wideClipboardForward.img,_wideClipboardForward); }
      else if(_wideClipboardForward.hover){ _context.drawShortImage(_wideClipboardForward.imgOn,_wideClipboardForward); }

      _context.fillShortText(_tutorialTitle.color,_tutorialTitle);
      _context.fillShortText(_tutorialText.color,_tutorialText);
    }
  }

  if(_menuSetting.animation||_menuSetting.on){
    _context.fillShortText(_clipboardSettingText.color,_clipboardSettingText);

    if(!sfxOn){
      _context.drawShortImage(_clipboardSetting1.img,_clipboardSetting1);
    } else if(sfxOn){
      _context.drawShortImage(_clipboardSetting1.imgOn,_clipboardSetting1);
    } if(!musicOn){
      _context.drawShortImage(_clipboardSetting2.img,_clipboardSetting2);
    } else if(musicOn){
      _context.drawShortImage(_clipboardSetting2.imgOn,_clipboardSetting2);
    } if(!fullscreenOn){
      _context.drawShortImage(_clipboardSetting3.img,_clipboardSetting3);
    } else if(fullscreenOn){
      _context.drawShortImage(_clipboardSetting3.imgOn,_clipboardSetting3);
    }
    _context.fillShortText(_clipboardSetting4.color,_clipboardSetting4);
    _context.fillShortText(_clipboardSetting5.color,_clipboardSetting5);
    _context.fillShortText(_clipboardSetting6.color,_clipboardSetting6);
  } if(_menuAbout.animation||_menuAbout.on){
    _context.fillShortText(_clipboardAboutText.color,_clipboardAboutText);

    _context.fillShortText(_clipboardAbout1.color,_clipboardAbout1);
  }

  if(changeScene){ transitionoff(); }
  if(defeat&&round!=7){ transitiondead(); }
  if(defeat&&round==7&&scene!=9){ nextScene=scene+1; round=1; transitionmenu(); }
  if(defeat&&round==7&&scene==9){ nextScene=1; round=1; transitionmenu(); }
}
