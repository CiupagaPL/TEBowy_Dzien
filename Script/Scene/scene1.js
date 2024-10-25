/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

scene1=function(){
  sceneTimer++;

  _clipboardLevelText.x=_clipboard.x+30*scale;
  _clipboardSettingText.x=_clipboard.x+42*scale;
  _clipboardAboutText.x=_clipboard.x+38*scale;

  _clipboardLevel1.x=_clipboard.x+24*scale;
  _clipboardLevel2.x=_clipboard.x+24*scale;
  _clipboardLevel3.x=_clipboard.x+24*scale;
  _clipboardLevel4.x=_clipboard.x+24*scale;
  _clipboardLevel5.x=_clipboard.x+88*scale;
  _clipboardLevel6.x=_clipboard.x+88*scale;
  _clipboardLevel7.x=_clipboard.x+88*scale;
  _clipboardLevel8.x=_clipboard.x+88*scale;

  _clipboardSetting1.x=_clipboard.x+24*scale;
  _clipboardSetting2.x=_clipboard.x+88*scale;
  _clipboardSetting3.x=_clipboard.x+24*scale;
  _clipboardSetting4.x=_clipboard.x+42*scale;
  _clipboardSetting5.x=_clipboard.x+46*scale;
  _clipboardSetting6.x=_clipboard.x+42*scale;

  _clipboardAbout1.x=_clipboard.x+18*scale;

  _blueprintGeneral1.x=_blueprint.x+16*scale;
  _blueprintGeneral2.value=Number(skin+1)+"/4";
  _blueprintGeneral2.debug=_blueprintGeneral2.size+"px "+_blueprintGeneral2.font;
  _blueprintGeneral2.x=_blueprint.x+54*scale;

  animatemenu();
  animateblueprint();
  animateclipboard();

  _context.drawShortImage(_background.img0,_background);
  _html.style.backgroundColor=_background.color0;

  _context.drawShortImage(_menuTitle.img,_menuTitle);

  if(!_menuStart.hover){ _context.drawShortImage(_menuStart.img,_menuStart); }
  else if(_menuStart.hover){ _context.drawShortImage(_menuStart.imgOn,_menuStart); } 
  _context.fillSingleText(_menuStartText);
  if(!_menuLevel.hover){ _context.drawShortImage(_menuLevel.img,_menuLevel); }
  else if(_menuLevel.hover){ _context.drawShortImage(_menuLevel.imgOn,_menuLevel); } 
  _context.fillSingleText(_menuLevelText);
  if(!_menuSetting.hover){ _context.drawShortImage(_menuSetting.img,_menuSetting); }
  else if(_menuSetting.hover){ _context.drawShortImage(_menuSetting.imgOn,_menuSetting); } 
  _context.fillSingleText(_menuSettingText);
  if(!_menuAbout.hover){ _context.drawShortImage(_menuAbout.img,_menuAbout); }
  else if(_menuAbout.hover){ _context.drawShortImage(_menuAbout.imgOn,_menuAbout); } 
  _context.fillSingleText(_menuAboutText);
  if(!_menuCustom.hover){ _context.drawShortImage(_menuCustom.img,_menuCustom); }
  else if(_menuCustom.hover){ _context.drawShortImage(_menuCustom.imgOn,_menuCustom); } 
  _context.fillSingleText(_menuCustomText);

  _context.drawShortImage(_clipboard.img,_clipboard);
  if(!_clipboardBack.hover){ _context.drawShortImage(_clipboardBack.img,_clipboardBack); }
  else if(_clipboardBack.hover){ _context.drawShortImage(_clipboardBack.imgOn,_clipboardBack); }

  if(skin==0){ _context.drawShortImage(_blueprint.img0,_blueprint); }
  if(skin==1){ _context.drawShortImage(_blueprint.img1,_blueprint); }
  if(skin==2){ _context.drawShortImage(_blueprint.img2,_blueprint); }
  if(skin==3){ _context.drawShortImage(_blueprint.img3,_blueprint); }
  if(!_blueprintBack.hover){ _context.drawShortImage(_blueprintBack.img,_blueprintBack); }
  else if(_blueprintBack.hover){ _context.drawShortImage(_blueprintBack.imgOn,_blueprintBack); }
  if(!_blueprintLeft.hover){ _context.drawShortImage(_blueprintLeft.img,_blueprintLeft); }
  else if(_blueprintLeft.hover){ _context.drawShortImage(_blueprintLeft.imgOn,_blueprintLeft); }
  if(!_blueprintRight.hover){ _context.drawShortImage(_blueprintRight.img,_blueprintRight); }
  else if(_blueprintRight.hover){ _context.drawShortImage(_blueprintRight.imgOn,_blueprintRight); }

  _context.fillSingleText(_blueprintGeneral1);
  _context.fillSingleText(_blueprintGeneral2);

  if(_menuLevel.animation||_menuLevel.on){
    _context.fillSingleText(_clipboardLevelText);

    _context.drawShortImage(_clipboardLevel1.img,_clipboardLevel1);
    _context.drawShortImage(_clipboardLevel2.img,_clipboardLevel2);
    _context.drawShortImage(_clipboardLevel3.img,_clipboardLevel3);
    _context.drawShortImage(_clipboardLevel4.img,_clipboardLevel4);
    _context.drawShortImage(_clipboardLevel5.img,_clipboardLevel5);
    _context.drawShortImage(_clipboardLevel6.img,_clipboardLevel6);
    _context.drawShortImage(_clipboardLevel7.img,_clipboardLevel7);
    _context.drawShortImage(_clipboardLevel8.img,_clipboardLevel8);
  } if(_menuSetting.animation||_menuSetting.on){
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

  if(autoScene&&!_clipboard.on&&!_menuLevel.on&&!_menuSetting.on&&!_menuAbout.on){ nextScene=nextAutoScene; changeScene=true; canClick=false; }
  if(changeScene){ transitionOn(); }
}
