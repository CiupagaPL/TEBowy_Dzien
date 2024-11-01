/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

document.addEventListener("visibilitychange",function(_event){
  if(document.visibilityState=="visible"){
    if(tempSfxOn){ sfxOn=true; }
    if(tempMusicOn){ musicOn=true; }
  } else if(document.visibilityState!="visible"){
    sfxOn=false;
    musicOn=false;
    musicTimer=0;
  } if(!pauseOn&&scene!=0&&scene!=1){
    pauseChange=true;
    pauseOn=true;
  }
});

document.addEventListener("keydown",function(_event){
  if(!pauseOn&&hp!=0&&scene>=2){
    if(_event.key=="a"||_event.key=="ArrowLeft"){
      _keyState.left=true;
      _player.vx=-4*scale;
      _player.left=true;
    } if(_event.key=="d"||_event.key=="ArrowRight"){
      _keyState.right=true;
      _player.vx=4*scale;
      _player.left=false;
    }
  }
});

document.addEventListener("keyup",function(_event){
  if(_event.key=="F11"){
    if(fullscreenOn){ fullscreenOn=false; }
    else if(!fullscreenOn){ fullscreenOn=true; }
  } switch(scene){
    case 0:
      if(_event.key=="Enter"&&!canStart&&!resolutionError){ canStart=true; sceneTimer=0; round=1; }
      break;
    case 1:
      if(_event.key=="Enter"&&canClick){
        if(sfxOn){ _audio.click.load(); _audio.click.play(); }
        if(_clipboard.on){
        autoScene=true;
        nextAutoScene=2;
           if(_menuLevel.on){
            _menuLevel.animation=true;
            _clipboard.close=true;
            canClick=false;
          } if(_menuSetting.on){
            _menuSetting.animation=true;
            _clipboard.close=true;
            canClick=false;
          } if(_menuAbout.on){
            _menuAbout.animation=true;
            _clipboard.close=true;
            canClick=false;
          }
        } if(_blueprint.on){
            autoScene=true;
            nextAutoScene=2;
            _menuCustom.animation=true;
            _blueprint.close=true;
            canClick=false;
        } else if(!_clipboard.on&&!_blueprint.on){
          canClick=false;
          nextScene=2;
          changeScene=true;
        }
      }
      if(_event.key=="Escape"&&canClick&&_clipboard.on||_event.key=="Escape"&&canClick&&_blueprint.on){ 
        if(sfxOn){ _audio.click.load(); _audio.click.play(); }
        if(_clipboard.on){ _clipboard.close=true; }
        if(_blueprint.on){ _blueprint.close=true; }
        if(_menuLevel.on){ _menuLevel.animation=true; }
        if(_menuSetting.on){ _menuSetting.animation=true; }
        if(_menuAbout.on){ _menuAbout.animation=true; }
        if(_menuCustom.on){ _menuCustom.animation=true; }
        canClick=false;
      }
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      if(_event.key=="Escape"&&canClick&&pauseOn){
        if(sfxOn){ _audio.click.load(); _audio.click.play(); }
        if(_clipboard.on){
          autoUnpause=true;
          if(_menuSetting.on){
            _menuSetting.animation=true;
            _clipboard.close=true;
            canClick=false;
          } if(_menuAbout.on){
            _menuAbout.animation=true;
            _clipboard.close=true;
            canClick=false;
          }
        } else if(!_clipboard.on){
          pauseChange=true;
          canClick=false;
        }
      }
      if(_event.key=="Escape"&&canClick&&!pauseOn){
        if(sfxOn){ _audio.click.load(); _audio.click.play(); }
        pauseOn=true;
        pauseChange=true;
      } if(!pauseOn&&hp!=0){
        if(_event.key=="a"||_event.key=="ArrowLeft"){
          _keyState.left=false;
          if(!_keyState.right){
            _player.vx=0;
          } else if(_keyState.right){
            _player.left=false;
            _player.vx=4*scale;
          }
        } if(_event.key=="d"||_event.key=="ArrowRight"){
          _keyState.right=false;
          if(!_keyState.left){
            _player.vx=0;
          } else if(_keyState.left){
            _player.left=true;
            _player.vx=-4*scale;
          }
        }
      }
      if(_event.key==" "&&!pauseOn&&hp!=0&&_player.grounded||_event.key=="ArrowUp"&&!pauseOn&&hp!=0&&_player.grounded){
        _player.jumped=true;
        _player.vy=_player.initialvy;
        if(sfxOn){ _audio.jump.load(); _audio.jump.play(); }
      }
      break;
  }
});

document.addEventListener("mousemove",function(_event){
  _mouse.x=_event.clientX-((_window.width-_currentResolution.width)/2)-12;
  _mouse.y=_event.clientY-((_window.height-_currentResolution.height)/2)-12;

  if(window.detectcollision(_menuStart,_mouse)){ _menuStart.hover=true; }
  else if(!window.detectcollision(_menuStart,_mouse)){ _menuStart.hover=false; }
  if(window.detectcollision(_menuLevel,_mouse)){ _menuLevel.hover=true; }
  else if(!window.detectcollision(_menuLevel,_mouse)){ _menuLevel.hover=false; }
  if(window.detectcollision(_menuMenu,_mouse)){ _menuMenu.hover=true; }
  else if(!window.detectcollision(_menuMenu,_mouse)){ _menuMenu.hover=false; }
  if(window.detectcollision(_menuSetting,_mouse)){ _menuSetting.hover=true; }
  else if(!window.detectcollision(_menuSetting,_mouse)){ _menuSetting.hover=false; }
  if(window.detectcollision(_menuAbout,_mouse)){ _menuAbout.hover=true; }
  else if(!window.detectcollision(_menuAbout,_mouse)){ _menuAbout.hover=false; }
  if(window.detectcollision(_menuCustom,_mouse)){ _menuCustom.hover=true; }
  else if(!window.detectcollision(_menuCustom,_mouse)){ _menuCustom.hover=false; }

  if(window.detectcollision(_clipboardBack,_mouse)){ _clipboardBack.hover=true; }
  else if(!window.detectcollision(_clipboardBack,_mouse)){ _clipboardBack.hover=false; }

  if(window.detectcollision(_blueprintBack,_mouse)){ _blueprintBack.hover=true; }
  else if(!window.detectcollision(_blueprintBack,_mouse)){ _blueprintBack.hover=false; }
  if(window.detectcollision(_blueprintLeft,_mouse)){ _blueprintLeft.hover=true; }
  else if(!window.detectcollision(_blueprintLeft,_mouse)){ _blueprintLeft.hover=false; }
  if(window.detectcollision(_blueprintRight,_mouse)){ _blueprintRight.hover=true; }
  else if(!window.detectcollision(_blueprintRight,_mouse)){ _blueprintRight.hover=false; }

  if(window.detectcollision(_wideClipboardForward,_mouse)){ _wideClipboardForward.hover=true; }
  else if(!window.detectcollision(_wideClipboardForward,_mouse)){ _wideClipboardForward.hover=false; }

  if(window.detectcollision(_wideBlueprintForward,_mouse)){ _wideBlueprintForward.hover=true; }
  else if(!window.detectcollision(_wideBlueprintForward,_mouse)){ _wideBlueprintForward.hover=false; }
});

window.addEventListener("click",function(_event){
  if(window.detectcollision(_menuLevel,_mouse)&&_menuLevel.on&&canClick){
    if(sfxOn){ _audio.click.load(); _audio.click.play(); }
    _clipboard.close=true;
    _menuLevel.animation=true;
    canClick=false;
  } if(window.detectcollision(_menuSetting,_mouse)&&_menuSetting.on&&canClick){
    if(sfxOn){ _audio.click.load(); _audio.click.play(); }
    _clipboard.close=true;
    _menuSetting.animation=true;
    canClick=false;
  } if(window.detectcollision(_menuAbout,_mouse)&&_menuAbout.on&&canClick){
    if(sfxOn){ _audio.click.load(); _audio.click.play(); }
    _clipboard.close=true;
    _menuAbout.animation=true;
    canClick=false;
  } if(window.detectcollision(_menuCustom,_mouse)&&_menuCustom.on&&canClick){
    if(sfxOn){ _audio.click.load(); _audio.click.play(); }
    _blueprint.close=true;
    _menuCustom.animation=true;
    canClick=false;
  }

  if(window.detectcollision(_menuStart,_mouse)&&canClick&&scene==1){
    if(sfxOn){ _audio.click.load(); _audio.click.play(); }
    if(_clipboard.on){
      autoScene=true;
      nextAutoScene=2;
      if(_menuLevel.on){
        _menuLevel.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuSetting.on){
        _menuSetting.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuAbout.on){
        _menuAbout.animation=true;
        _clipboard.close=true;
        canClick=false;
      }
    } if(_blueprint.on){
        autoScene=true;
        nextAutoScene=2;
        _menuCustom.animation=true;
        _blueprint.close=true;
        canClick=false;
    } else if(!_clipboard.on&&!_blueprint.on){
      round=1;
      canClick=false;
      nextScene=2;
      changeScene=true;
    }
  } if(window.detectcollision(_menuLevel,_mouse)&&canClick&&scene==1){
    if(sfxOn){ _audio.click.load(); _audio.click.play(); }
    if(!_menuSetting.on&&!_menuAbout.on){ _menuLevel.animation=true; }
    else if(_menuSetting.on||_menuAbout.on){
      _menuLevel.lateanimation=true;
      if(_menuSetting.on){ _menuSetting.animation=true; }
      else if(_menuAbout.on){ _menuAbout.animation=true; }
    }
    canClick=false;
  } if(window.detectcollision(_menuSetting,_mouse)&&scene==1&&canClick||window.detectcollision(_menuSetting,_mouse)&&scene!=1&&scene!=0&&canClick&&pauseOn){
    if(sfxOn){ _audio.click.load(); _audio.click.play(); }
    if(!_menuLevel.on&&!_menuAbout.on){ _menuSetting.animation=true; }
    else if(_menuLevel.on||_menuAbout.on){
      _menuSetting.lateanimation=true;
      if(_menuLevel.on){ _menuLevel.animation=true; }
      else if(_menuAbout.on){ _menuAbout.animation=true; }
    }
    canClick=false;
  } if(window.detectcollision(_menuAbout,_mouse)&&canClick&&scene==1||window.detectcollision(_menuAbout,_mouse)&&scene!=1&&scene!=0&&canClick&&pauseOn){
    if(sfxOn){ _audio.click.load(); _audio.click.play(); }
    if(!_menuLevel.on&&!_menuSetting.on){ _menuAbout.animation=true; }
    else if(_menuLevel.on||_menuSetting.on){
      _menuAbout.lateanimation=true;
      if(_menuSetting.on){ _menuSetting.animation=true; }
      else if(_menuLevel.on){ _menuLevel.animation=true; }
    }
    canClick=false;
  } if(window.detectcollision(_menuCustom,_mouse)&&canClick&&scene==1){
    if(sfxOn){ _audio.click.load(); _audio.click.play(); }
    if(!_menuCustom.on&&!_menuCustom.on){ _menuCustom.animation=true; }
    else if(_menuCustom.on){
      _menuCustom.lateanimation=true;
      _menuSetting.animation=true;
    }
    canClick=false;
  }

  if(window.detectcollision(_clipboardBack,_mouse)){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    _clipboard.close=true;
    if(_menuLevel.on){ _menuLevel.animation=true; }
    if(_menuSetting.on){ _menuSetting.animation=true; }
    if(_menuAbout.on){ _menuAbout.animation=true; }
    canClick=false;
  }

  if(window.detectcollision(_blueprintBack,_mouse)){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    _blueprint.close=true;
    _menuCustom.animation=true;
    canClick=false;
  } if(window.detectcollision(_blueprintLeft,_mouse)&&canClick){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    if(skin>0){ skin--; }
  } if(window.detectcollision(_blueprintRight,_mouse)&&canClick){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    if(skin<3){ skin++; }
  }

  if(window.detectcollision(_wideClipboardForward,_mouse)){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    pauseChange=true;
  }

  if(window.detectcollision(_wideBlueprintForward,_mouse)){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    pauseChange=true;
  }

  if(window.detectcollision(_clipboardLevel1,_mouse)&&_menuLevel.on){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    autoScene=true;
    nextAutoScene=2;
    if(_clipboard.on){
      if(_menuLevel.on){
        _menuLevel.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuSetting.on){
        _menuSetting.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuAbout.on){
        _menuAbout.animation=true;
        _clipboard.close=true;
        canClick=false;
      }
    } if(_blueprint.on){
      _menuCustom.animation=true;
      _blueprint.close=true;
      canClick=false;
      round=1;
    }
  } if(window.detectcollision(_clipboardLevel2,_mouse)&&_menuLevel.on){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    autoScene=true;
    nextAutoScene=3;
    if(_clipboard.on){
      if(_menuLevel.on){
        _menuLevel.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuSetting.on){
        _menuSetting.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuAbout.on){
        _menuAbout.animation=true;
        _clipboard.close=true;
        canClick=false;
      }
    } if(_blueprint.on){
      _menuCustom.animation=true;
      _blueprint.close=true;
      canClick=false;
      round=1;
    }
  } if(window.detectcollision(_clipboardLevel3,_mouse)&&_menuLevel.on){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    autoScene=true;
    nextAutoScene=4;
    if(_clipboard.on){
      if(_menuLevel.on){
        _menuLevel.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuSetting.on){
        _menuSetting.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuAbout.on){
        _menuAbout.animation=true;
        _clipboard.close=true;
        canClick=false;
      }
    } if(_blueprint.on){
      _menuCustom.animation=true;
      _blueprint.close=true;
      canClick=false;
      round=1;
    }
  } if(window.detectcollision(_clipboardLevel4,_mouse)&&_menuLevel.on){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    autoScene=true;
    nextAutoScene=5;
    if(_clipboard.on){
      if(_menuLevel.on){
        _menuLevel.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuSetting.on){
        _menuSetting.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuAbout.on){
        _menuAbout.animation=true;
        _clipboard.close=true;
        canClick=false;
      }
    } if(_blueprint.on){
      _menuCustom.animation=true;
      _blueprint.close=true;
      canClick=false;
      round=1;
    }
  } if(window.detectcollision(_clipboardLevel5,_mouse)&&_menuLevel.on){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    autoScene=true;
    nextAutoScene=6;
    if(_clipboard.on){
      if(_menuLevel.on){
        _menuLevel.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuSetting.on){
        _menuSetting.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuAbout.on){
        _menuAbout.animation=true;
        _clipboard.close=true;
        canClick=false;
      }
    } if(_blueprint.on){
      _menuCustom.animation=true;
      _blueprint.close=true;
      canClick=false;
      round=1;
    }
  } if(window.detectcollision(_clipboardLevel6,_mouse)&&_menuLevel.on){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    autoScene=true;
    nextAutoScene=7;
    if(_clipboard.on){
      if(_menuLevel.on){
        _menuLevel.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuSetting.on){
        _menuSetting.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuAbout.on){
        _menuAbout.animation=true;
        _clipboard.close=true;
        canClick=false;
      }
    } if(_blueprint.on){
      _menuCustom.animation=true;
      _blueprint.close=true;
      canClick=false;
      round=1;
    }
  } if(window.detectcollision(_clipboardLevel7,_mouse)&&_menuLevel.on){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    autoScene=true;
    nextAutoScene=8;
    if(_clipboard.on){
      if(_menuLevel.on){
        _menuLevel.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuSetting.on){
        _menuSetting.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuAbout.on){
        _menuAbout.animation=true;
        _clipboard.close=true;
        canClick=false;
      }
    } if(_blueprint.on){
      _menuCustom.animation=true;
      _blueprint.close=true;
      canClick=false;
      round=1;
    }
  } if(window.detectcollision(_clipboardLevel8,_mouse)&&_menuLevel.on){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    autoScene=true;
    nextAutoScene=9;
    if(_clipboard.on){
      if(_menuLevel.on){
        _menuLevel.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuSetting.on){
        _menuSetting.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuAbout.on){
        _menuAbout.animation=true;
        _clipboard.close=true;
        canClick=false;
      }
    } if(_blueprint.on){
      _menuCustom.animation=true;
      _blueprint.close=true;
      canClick=false;
      round=1;
    }
  }

  if(window.detectcollision(_clipboardSetting1,_mouse)&&_menuSetting.on){
    if(sfxOn){ sfxOn=false; tempSfxOn=false; }
    else if(!sfxOn){ sfxOn=true; tempSfxOn=true; _audio.paper.load(); _audio.paper.play(); }
  } if(window.detectcollision(_clipboardSetting2,_mouse)&&_menuSetting.on){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    if(musicOn){ musicOn=false; tempMusicOn=false; }
    else if(!musicOn){ musicOn=true; tempMusicOn=true; }
  } if(window.detectcollision(_clipboardSetting3,_mouse)&&_menuSetting.on){
    if(sfxOn){ _audio.paper.load(); _audio.paper.play(); }
    if(fullscreenOn){ fullscreenOn=false; document.exitFullscreen(); }
    else if(!fullscreenOn){ fullscreenOn=true; document.documentElement.requestFullscreen(); }
  }

  if(window.detectcollision(_gamePause,_mouse)&&canClick&&!pauseOn){
    if(sfxOn){ _audio.click.load(); _audio.click.play(); }
    pauseOn=true;
    pauseChange=true;
  } if(window.detectcollision(_menuStart,_mouse)&&canClick&&scene!=1&&scene!=0&&pauseOn){
    if(sfxOn){ _audio.click.load(); _audio.click.play(); }
    if(_clipboard.on){
      autoUnpause=true;
      if(_menuSetting.on){
        _menuSetting.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuAbout.on){
        _menuAbout.animation=true;
        _clipboard.close=true;
        canClick=false;
      }
    } else if(!_clipboard.on){
      pauseChange=true;
      canClick=false;
    }
  } if(window.detectcollision(_menuMenu,_mouse)&&canClick&&pauseOn&&scene!=1&&scene!=0){
    if(sfxOn){ _audio.click.load(); _audio.click.play(); }
    if(_clipboard.on){
      autoScene=true;
      nextAutoScene=1;
      if(_menuSetting.on){
        _menuSetting.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuAbout.on){
        _menuAbout.animation=true;
        _clipboard.close=true;
        canClick=false;
      }
    } else if(!_clipboard.on){
      canClick=false;
      nextScene=1;
      changeScene=true;
    }
  }
});
