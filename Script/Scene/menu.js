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
    _audio.menu.volume=0.25;
  } else if(changeScene){
    _audio.menu.volume=0;
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

  if(autoScene&&!_clipboard.on&&!_menuLevel.on&&!_menuSetting.on&&!_menuAbout.on&&!_menuCustom.on){ nextScene=nextAutoScene; autoScene=false; changeScene=true; }
  if(changeScene&&!menuLoad){ sceneoff(); }
  if(changeScene&&menuLoad){ sceneon(); }
}
