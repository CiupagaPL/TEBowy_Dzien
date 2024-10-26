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
  if(musicOn){
    musicTimer++;
    if(musicTimer==10){
      _audio.game.play();
    } if(musicTimer>=1135){
      _audio.game.load();
      musicTimer=0;
    }
  } else if(!musicOn){
    _audio.game.load();
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

  _context.drawShortImage(_background.img1,_background);
  _html.style.backgroundColor=_background.color0;

  handlePlayer();

  if(score==24){ handleBoss(); }

  _context.fillShortRect(_gameUI.color,_gameUI);
  _gameLevel.value="Poziom: "+Number(scene-1)+"-"+round;
  _gameLevel.debug=_gameLevel.size+"px "+_gameLevel.font;
  _context.fillSingleText(_gameLevel);
  _gameScore.value="Wynik: "+score;
  _gameScore.debug=_gameScore.size+"px "+_gameScore.font;
  _context.fillSingleText(_gameScore);
  if(hp>=2){ _context.drawShortImage(_gameHP1.img0,_gameHP1); }
  if(hp==1){ _context.drawShortImage(_gameHP1.img1,_gameHP1); }
  if(hp==0){ _context.drawShortImage(_gameHP1.img2,_gameHP1); }
  if(hp>=4){ _context.drawShortImage(_gameHP2.img0,_gameHP2); }
  if(hp==3){ _context.drawShortImage(_gameHP2.img1,_gameHP2); }
  if(hp<=2){ _context.drawShortImage(_gameHP2.img2,_gameHP2); }
  if(hp==6){ _context.drawShortImage(_gameHP3.img0,_gameHP3); }
  if(hp==5){ _context.drawShortImage(_gameHP3.img1,_gameHP3); }
  if(hp<=4){ _context.drawShortImage(_gameHP3.img2,_gameHP3); }
  _context.drawShortImage(_gamePause.img,_gamePause);

  if(hp==0){ dead=true; }
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

    _context.drawShortImage(_clipboard.img,_clipboard);
    if(!_clipboardBack.hover){ _context.drawShortImage(_clipboardBack.img,_clipboardBack); }
    else if(_clipboardBack.hover){ _context.drawShortImage(_clipboardBack.imgOn,_clipboardBack); }

    if(!_menuStart.hover){ _context.drawShortImage(_menuStart.img,_menuStart); }
    else if(_menuStart.hover){ _context.drawShortImage(_menuStart.imgOn,_menuStart); } 
    _context.fillSingleText(_menuStartText);
    if(!_menuMenu.hover){ _context.drawShortImage(_menuMenu.img,_menuMenu); }
    else if(_menuMenu.hover){ _context.drawShortImage(_menuMenu.imgOn,_menuMenu); } 
    _context.fillSingleText(_menuMenuText);
    if(!_menuSetting.hover){ _context.drawShortImage(_menuSetting.img,_menuSetting); }
    else if(_menuSetting.hover){ _context.drawShortImage(_menuSetting.imgOn,_menuSetting); } 
    _context.fillSingleText(_menuSettingText);
    if(!_menuAbout.hover){ _context.drawShortImage(_menuAbout.img,_menuAbout); }
    else if(_menuAbout.hover){ _context.drawShortImage(_menuAbout.imgOn,_menuAbout); } 
    _context.fillSingleText(_menuAboutText);
  }

  if(_menuSetting.animation||_menuSetting.on){
    _context.fillSingleText(_clipboardSettingText);

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
    _context.fillSingleText(_clipboardSetting4);
    _context.fillSingleText(_clipboardSetting5);
    _context.fillSingleText(_clipboardSetting6);
  } if(_menuAbout.animation||_menuAbout.on){
    _context.fillSingleText(_clipboardAboutText);

    _context.fillMultiText(_clipboardAbout1);
  }

  if(changeScene){ transitionoff(); }
}
