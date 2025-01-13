/*
 *    ,-----,
 *    |     |    ,--------------------------------------------------------,
 *    |     |   ( Projekt objęty jest licencją. Przeczytasz o niej na:     )
 *   (|-----|)  < github.com/CiupagaPL/Tebowy_Dzien/blob/stable/LICENSE.md )
 *   |\_____/|   "--------------------------------------------------------"
 *   |       |    __---.
 *   ( o   o )   /      )
 *   \ = . = \__/    --"
 *   /              /
 *  |              |
 *   \ \    \ \   |
 *    | |    | | /
 *   (_(_)--(_(_)
*/

animateloading=function(){
  if(!canStart){
    _context.fillShortRect(_background.color0,_background);
    if(!resolutionError){ _html.style.backgroundColor=_background.color0; }

    _context.drawShortImage(_startTEB.img0,_startTEB);

    if(fullScreen){ _context.drawShortImage(_menuResolution.imgOn,_menuResolution); }
    else if(!fullScreen){ _context.drawShortImage(_menuResolution.img,_menuResolution); }

    if(sceneTimer<20){
      _context.fillShortText(_startText.color0,_startText,_startText.value);
    } if(sceneTimer>=20&&sceneTimer<25){
      _context.fillShortText(_startText.color1,_startText,_startText.value);
    } if(sceneTimer>=25&&sceneTimer<30){
      _context.fillShortText(_startText.color2,_startText,_startText.value);
    } if(sceneTimer>=50&&sceneTimer<55){
      _context.fillShortText(_startText.color2,_startText,_startText.value);
    } if(sceneTimer>=55&&sceneTimer<60){
      _context.fillShortText(_startText.color1,_startText,_startText.value);
    } if(sceneTimer>=60&&sceneTimer<65){
      _context.fillShortText(_startText.color0,_startText,_startText.value);
    } if(sceneTimer>=65){
      _context.fillShortText(_startText.color0,_startText,_startText.value);
      sceneTimer=0;
    }
  } else if(canStart){
    if(sceneTimer>0&&sceneTimer<=20){
      _context.fillShortRect(_background.color1,_background);
      if(!resolutionError){ _html.style.backgroundColor=_background.color1; }

      _context.drawShortImage(_startTEB.img1,_startTEB);

      if(fullScreen){ _context.drawShortImage(_menuResolution.imgOn,_menuResolution); }
      else if(!fullScreen){ _context.drawShortImage(_menuResolution.img,_menuResolution); }

      if(sceneTimer>=2&&sceneTimer<3){
        _audio.load1.load();
        _audio.load1.play();
      }
    } if(sceneTimer>20&&sceneTimer<=40){
      _context.fillShortRect(_background.color2,_background);
      if(!resolutionError){ _html.style.backgroundColor=_background.color2; }

      _context.drawShortImage(_startTEB.img2,_startTEB);

      if(fullScreen){ _context.drawShortImage(_menuResolution.imgOn,_menuResolution); }
      else if(!fullScreen){ _context.drawShortImage(_menuResolution.img,_menuResolution); }

      if(sceneTimer>=22&&sceneTimer<23){
        _audio.load2.load();
        _audio.load2.play();
      }
    } if(sceneTimer>40){
      _audio.load3.load();
      _audio.load3.play();

      sceneTimer=0;
      nextScene=1;
    }
  }
}

animatemenubackground=function(){
  if(!_background.change){
    _context.drawShortImage(_background.img0,_background);
    _context.drawShortImage(_backgroundTop.img1,_backgroundTop);
    _context.drawShortImage(_backgroundRight.img0,_backgroundRight);
    _context.drawShortImage(_backgroundTopRight.img1,_backgroundTopRight);
  } else if(_background.change){
    _context.drawShortImage(_background.img1,_background);
    _context.drawShortImage(_backgroundTop.img0,_backgroundTop);
    _context.drawShortImage(_backgroundRight.img1,_backgroundRight);
    _context.drawShortImage(_backgroundTopRight.img0,_backgroundTopRight);
  }

  _background.x-=(16*scale)/6;
  _background.y+=(9*scale)/6;
  _backgroundTop.x-=(16*scale)/6;
  _backgroundTop.y+=(9*scale)/6;
  _backgroundRight.x-=(16*scale)/6;
  _backgroundRight.y+=(9*scale)/6;
  _backgroundTopRight.x-=(16*scale)/6;
  _backgroundTopRight.y+=(9*scale)/6;

  if(_backgroundTopRight.x<=(16*scale)/6&&_backgroundTopRight.y<=(9*scale)/6){
    _background.x=0;
    _background.y=0;
    _backgroundTop.x=0;
    _backgroundTop.y=-_render.height;
    _backgroundRight.x=_render.width;
    _backgroundRight.y=0;
    _backgroundTopRight.x=_render.width;
    _backgroundTopRight.y=-_render.height;

    if(_background.change){ _background.change=false; }
    else if(!_background.change){ _background.change=true; }
  }
}

animatemenu=function(){
  if(sceneTimer<10){
  _menuTitle.y=24*scale;

  _menuStart.y=_render.height-(192*scale);
  _menuStartText.y=_menuStart.y+(30*scale);

  _menuLevel.y=_render.height-(128*scale);
  _menuLevelText.y=_menuLevel.y+(30*scale);

  _menuSetting.y=_render.height-(192*scale);
  _menuSettingText.y=_menuSetting.y+(30*scale);

  _menuAbout.y=_render.height-(128*scale);
  _menuAboutText.y=_menuAbout.y+(30*scale);

  _menuVersion.y=_render.height-(64*scale);
  _menuVersionText.y=_menuVersion.y+(18*scale);

  _menuCustom.y=_render.height-(64*scale);
  _menuCustomText.y=_menuCustom.y+(30*scale);
  } if(sceneTimer>=10&&sceneTimer<20){
  _menuTitle.y=26*scale;

  _menuStart.y=_render.height-(194*scale);
  _menuStartText.y=_menuStart.y+(30*scale);

  _menuLevel.y=_render.height-(130*scale);
  _menuLevelText.y=_menuLevel.y+(30*scale);

  _menuSetting.y=_render.height-(194*scale);
  _menuSettingText.y=_menuSetting.y+(30*scale);

  _menuAbout.y=_render.height-(130*scale);
  _menuAboutText.y=_menuAbout.y+(30*scale);

  _menuVersion.y=_render.height-(66*scale);
  _menuVersionText.y=_menuVersion.y+(18*scale);

  _menuCustom.y=_render.height-(66*scale);
  _menuCustomText.y=_menuCustom.y+(30*scale);
  } if(sceneTimer>=20&&sceneTimer<30){
  _menuTitle.y=28*scale;

  _menuStart.y=_render.height-(196*scale);
  _menuStartText.y=_menuStart.y+(30*scale);

  _menuLevel.y=_render.height-(132*scale);
  _menuLevelText.y=_menuLevel.y+(30*scale);

  _menuSetting.y=_render.height-(196*scale);
  _menuSettingText.y=_menuSetting.y+(30*scale);

  _menuAbout.y=_render.height-(132*scale);
  _menuAboutText.y=_menuAbout.y+(30*scale);

  _menuVersion.y=_render.height-(68*scale);
  _menuVersionText.y=_menuVersion.y+(18*scale);

  _menuCustom.y=_render.height-(68*scale);
  _menuCustomText.y=_menuCustom.y+(30*scale);
  } if(sceneTimer>=30&&sceneTimer<40){
  _menuTitle.y=26*scale;

  _menuStart.y=_render.height-(194*scale);
  _menuStartText.y=_menuStart.y+(30*scale);

  _menuLevel.y=_render.height-(130*scale);
  _menuLevelText.y=_menuLevel.y+(30*scale);

  _menuSetting.y=_render.height-(194*scale);
  _menuSettingText.y=_menuSetting.y+(30*scale);

  _menuAbout.y=_render.height-(130*scale);
  _menuAboutText.y=_menuAbout.y+(30*scale);

  _menuVersion.y=_render.height-(66*scale);
  _menuVersionText.y=_menuVersion.y+(18*scale);

  _menuCustom.y=_render.height-(66*scale);
  _menuCustomText.y=_menuCustom.y+(30*scale);
  } if(sceneTimer>=40&&sceneTimer<50){
  _menuTitle.y=24*scale;

  _menuStart.y=_render.height-(192*scale);
  _menuStartText.y=_menuStart.y+(30*scale);

  _menuLevel.y=_render.height-(128*scale);
  _menuLevelText.y=_menuLevel.y+(30*scale);

  _menuSetting.y=_render.height-(192*scale);
  _menuSettingText.y=_menuSetting.y+(30*scale);

  _menuAbout.y=_render.height-(128*scale);
  _menuAboutText.y=_menuAbout.y+(30*scale);

  _menuVersion.y=_render.height-(64*scale);
  _menuVersionText.y=_menuVersion.y+(18*scale);

  _menuCustom.y=_render.height-(64*scale);
  _menuCustomText.y=_menuCustom.y+(30*scale);
  } if(sceneTimer>=50&&sceneTimer<60){
  _menuTitle.y=22*scale;

  _menuStart.y=_render.height-(190*scale);
  _menuStartText.y=_menuStart.y+(30*scale);

  _menuLevel.y=_render.height-(126*scale);
  _menuLevelText.y=_menuLevel.y+(30*scale);

  _menuSetting.y=_render.height-(190*scale);
  _menuSettingText.y=_menuSetting.y+(30*scale);

  _menuAbout.y=_render.height-(126*scale);
  _menuAboutText.y=_menuAbout.y+(30*scale);

  _menuVersion.y=_render.height-(62*scale);
  _menuVersionText.y=_menuVersion.y+(18*scale);

  _menuCustom.y=_render.height-(62*scale);
  _menuCustomText.y=_menuCustom.y+(30*scale);
  } if(sceneTimer>=60&&sceneTimer<70){
  _menuTitle.y=20*scale;

  _menuStart.y=_render.height-(188*scale);
  _menuStartText.y=_menuStart.y+(30*scale);

  _menuLevel.y=_render.height-(124*scale);
  _menuLevelText.y=_menuLevel.y+(30*scale);

  _menuSetting.y=_render.height-(188*scale);
  _menuSettingText.y=_menuSetting.y+(30*scale);

  _menuAbout.y=_render.height-(124*scale);
  _menuAboutText.y=_menuAbout.y+(30*scale);

  _menuVersion.y=_render.height-(60*scale);
  _menuVersionText.y=_menuVersion.y+(18*scale);

  _menuCustom.y=_render.height-(60*scale);
  _menuCustomText.y=_menuCustom.y+(30*scale);
  } if(sceneTimer>=70&&sceneTimer<80){
  _menuTitle.y=22*scale;

  _menuStart.y=_render.height-(190*scale);
  _menuStartText.y=_menuStart.y+(30*scale);

  _menuLevel.y=_render.height-(126*scale);
  _menuLevelText.y=_menuLevel.y+(30*scale);

  _menuSetting.y=_render.height-(190*scale);
  _menuSettingText.y=_menuSetting.y+(30*scale);

  _menuAbout.y=_render.height-(126*scale);
  _menuAboutText.y=_menuAbout.y+(30*scale);

  _menuVersion.y=_render.height-(62*scale);
  _menuVersionText.y=_menuVersion.y+(18*scale);

  _menuCustom.y=_render.height-(62*scale);
  _menuCustomText.y=_menuCustom.y+(30*scale);
  } if(sceneTimer>=80){ sceneTimer=0; }
}

animateblueprint=function(){
  if(_menuCustom.animation||_menuLevel.animation){
    if(_blueprint.on&&_blueprint.close){
      if(_blueprint.x<(_render.width+_blueprint.width)){
        _blueprint.x+=20*scale;
        _blueprintBack.x+=20*scale;
        _blueprintLeft.x+=20*scale;
        _blueprintRight.x+=20*scale;

        _blueprintSkin.x+=20*scale;
        _blueprintLevelText.x+=20*scale;

        _blueprintLevel1.x+=20*scale;
        _blueprintLevel2.x+=20*scale;
        _blueprintLevel3.x+=20*scale;
        _blueprintLevel4.x+=20*scale;
        _blueprintLevel5.x+=20*scale;
        _blueprintLevel6.x+=20*scale;
        _blueprintLevel7.x+=20*scale;
        _blueprintLevel8.x+=20*scale;
        _blueprintLevel9.x+=20*scale;
        _blueprintLevel10.x+=20*scale;

        _blueprintCustomText.x+=20*scale;
        _blueprintCustom1.x+=20*scale;
      } else if(_blueprint.x>=(_render.width+_blueprint.width)){
        _blueprint.x=_render.width+_blueprint.width;
        _blueprintBack.x=_blueprint.x+124*scale;
        _blueprintLeft.x=_blueprint.x+8*scale;
        _blueprintRight.x=_blueprint.x+124*scale;

        _blueprintSkin.x=_blueprint.x+42*scale;
        _blueprintLevelText.x=_blueprint.x+42*scale;

        _blueprintLevel1.x=_blueprint.x+20*scale;
        _blueprintLevel2.x=_blueprint.x+20*scale;
        _blueprintLevel3.x=_blueprint.x+20*scale;
        _blueprintLevel4.x=_blueprint.x+20*scale;
        _blueprintLevel5.x=_blueprint.x+20*scale;
        _blueprintLevel6.x=_blueprint.x+118*scale;
        _blueprintLevel7.x=_blueprint.x+118*scale;
        _blueprintLevel8.x=_blueprint.x+118*scale;
        _blueprintLevel9.x=_blueprint.x+118*scale;
        _blueprintLevel10.x=_blueprint.x+118*scale;

        _blueprintCustomText.x=_blueprint.x+50*scale;
        _blueprintCustom1.x=_blueprint.x+68*scale;

        _menuLevel.on=false;
        _blueprint.on=false;
        _blueprint.close=false;
        canClick=true;

        if(_menuCustom.animation){
          _menuCustom.animation=false;
          _menuCustom.on=false;
        } if(_menuLevel.animation){
          _menuLevel.animation=false;
          _menuLevel.on=false;
        }

        if(_blueprint.change){
          _clipboard.on=true;
          _blueprint.change=false;
        }
      }
    } if(_blueprint.on&&!_blueprint.close){
      if(_menuCustom.animation){
        _menuLevel.on=false;
        _menuCustom.on=true;
        _menuLevel.animation=false;
        _menuCustom.animation=false;
      } else if(_menuLevel.animation){
        _menuLevel.on=true;
        _menuCustom.on=false;
        _menuLevel.animation=false;
        _menuCustom.animation=false;
      }
      canClick=true;
    } 

    if(!_blueprint.on&&!_blueprint.close){
      if(_blueprint.x>(_render.width-_blueprint.width)-(32*scale)){
        _blueprint.x-=20*scale;
        _blueprintBack.x-=20*scale;
        _blueprintLeft.x-=20*scale;
        _blueprintRight.x-=20*scale;

        _blueprintSkin.x-=20*scale;
        _blueprintLevelText.x-=20*scale;

        _blueprintLevel1.x-=20*scale;
        _blueprintLevel2.x-=20*scale;
        _blueprintLevel3.x-=20*scale;
        _blueprintLevel4.x-=20*scale;
        _blueprintLevel5.x-=20*scale;
        _blueprintLevel6.x-=20*scale;
        _blueprintLevel7.x-=20*scale;
        _blueprintLevel8.x-=20*scale;
        _blueprintLevel9.x-=20*scale;
        _blueprintLevel10.x-=20*scale;

        _blueprintCustomText.x-=20*scale;
        _blueprintCustom1.x-=20*scale;
      } else if(_blueprint.x<=(_render.width-_blueprint.width)-(32*scale)){
        _blueprint.on=true;
        _blueprint.close=false;
        canClick=true;

        if(_menuCustom.animation){
          _menuCustom.animation=false;
          _menuCustom.on=true;
        } if(_menuLevel.animation){
          _menuLevel.animation=false;
          _menuLevel.on=true;
        }
      }
    }
  }
}

animateclipboard=function(){
  if(_menuSetting.animation||_menuAbout.animation||_menuVersion.animation){
    if(_clipboard.on&&_clipboard.close){
      if(_clipboard.x<(_render.width+_clipboard.width)){
        _clipboard.x+=20*scale;
        _clipboardBack.x+=20*scale;

        _clipboardSettingText.x+=20*scale;
        _clipboardAboutText.x+=20*scale;
        _clipboardVersionText.x+=20*scale;

        _clipboardSetting1.x+=20*scale;
        _clipboardSetting2.x+=20*scale;
        _clipboardSetting3.x+=20*scale;
        _clipboardSetting4.x+=20*scale;
        _clipboardSetting5.x+=20*scale;
        _clipboardSetting6.x+=20*scale;
        _clipboardSetting7.x+=20*scale;
        _clipboardSetting8.x+=20*scale;
        _clipboardSetting9.x+=20*scale;
        _clipboardSetting10.x+=20*scale;

        _clipboardAbout1.x+=20*scale;

        _clipboardVersion1.x+=20*scale;
      } else if(_clipboard.x>=(_render.width+_clipboard.width)){
        _clipboard.x=_render.width+_clipboard.width;
        _clipboardBack.x=_clipboard.x+(_clipboard.width-(36*scale));

        _clipboardSettingText.x=_clipboard.x+54*scale;
        _clipboardAboutText.x=_clipboard.x+60*scale;
        _clipboardVersionText.x=_clipboard.x+46*scale;

        _clipboardSetting1.x=_clipboard.x+24*scale;
        _clipboardSetting2.x=_clipboard.x+24*scale;
        _clipboardSetting3.x=_clipboard.x+24*scale;
        _clipboardSetting4.x=_clipboard.x+24*scale;
        _clipboardSetting5.x=_clipboard.x+24*scale;
        _clipboardSetting6.x=_clipboard.x+42*scale;
        _clipboardSetting7.x=_clipboard.x+42*scale;
        _clipboardSetting8.x=_clipboard.x+42*scale;
        _clipboardSetting9.x=_clipboard.x+42*scale;
        _clipboardSetting10.x=_clipboard.x+42*scale;

        _clipboardAbout1.x=_clipboard.x+24*scale;

        _clipboardVersion1.x=_clipboard.x+24*scale;

        _clipboard.on=false;
        _clipboard.close=false;
        canClick=true;

        if(_menuSetting.animation){
          _menuSetting.animation=false;
          _menuSetting.on=false;
        } if(_menuAbout.animation){
          _menuAbout.animation=false;
          _menuAbout.on=false;
        } if(_menuVersion.animation){
          _menuVersion.animation=false;
          _menuVersion.on=false;
        }

        if(_clipboard.change){
          _blueprint.on=true;
          _clipboard.change=false;
        }
      }
    } if(_clipboard.on&&!_clipboard.close){
      if(_menuSetting.animation){
        _menuAbout.on=false;
        _menuSetting.on=true;
        _menuVersion.on=false;
      } if(_menuAbout.animation){
        _menuAbout.on=true;
        _menuSetting.on=false;
        _menuVersion.on=false;
      } if(_menuVersion.animation){
        _menuAbout.on=false;
        _menuSetting.on=false;
        _menuVersion.on=true;
      }

      _menuAbout.animation=false;
      _menuSetting.animation=false;
      _menuVersion.animation=false;
      canClick=true;
    } if(!_clipboard.on&&!_clipboard.close){
        if(_clipboard.x>(_render.width-_clipboard.width)-(32*scale)){
        _clipboard.x-=20*scale;
        _clipboardBack.x-=20*scale;

        _clipboardSettingText.x-=20*scale;
        _clipboardAboutText.x-=20*scale;
        _clipboardVersionText.x-=20*scale;

        _clipboardSetting1.x-=20*scale;
        _clipboardSetting2.x-=20*scale;
        _clipboardSetting3.x-=20*scale;
        _clipboardSetting4.x-=20*scale;
        _clipboardSetting5.x-=20*scale;
        _clipboardSetting6.x-=20*scale;
        _clipboardSetting7.x-=20*scale;
        _clipboardSetting8.x-=20*scale;
        _clipboardSetting9.x-=20*scale;
        _clipboardSetting10.x-=20*scale;

        _clipboardAbout1.x-=20*scale;

        _clipboardVersion1.x-=20*scale;
      } else if(_clipboard.x<=(_render.width-_clipboard.width)-(32*scale)){
        _clipboard.on=true;
        canClick=true;

        if(_menuSetting.animation){
          _menuSetting.animation=false;
          _menuSetting.on=true;
        } if(_menuAbout.animation){
          _menuAbout.animation=false;
          _menuAbout.on=true;
        } if(_menuVersion.animation){
          _menuVersion.animation=false;
          _menuVersion.on=true;
        }
      }
    }
  }
}

