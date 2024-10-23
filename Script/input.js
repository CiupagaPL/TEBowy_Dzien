/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

document.addEventListener("keydown",function(_event){
  if(!pauseOn&&hp!=0){
    if(_event.key=="a"||_event.key=="ArrowLeft"){
      _keyState.a=true;
      _keyState.left=_event.key==="ArrowLeft";
      _player.vx=-4*scale; 
    } if(_event.key=="d"||_event.key=="ArrowRight"){
      _keyState.d=true;
      _keyState.right=_event.key==="ArrowRight";
      _player.vx=4*scale; 
    }
  }
});

document.addEventListener("keyup",function(_event){
  switch(scene){
    case 0:
      if(_event.key=="Enter"&&!canStart){ canStart=true; sceneTimer=0; }
      break;
    case 2:
      if(_event.key=="Escape"&&canClick&&pauseOn){
        if(_clipboard.on){
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
      if(_event.key=="Escape"&&canClick&&!pauseOn){ pauseOn=true; pauseChange=true; }
      if(!pauseOn&&hp!=0){
        if(_event.key=="a"||_event.key=="ArrowLeft"){
          _keyState.a=_keyState.left=false;
          if(!_keyState.d&&!_keyState.right){
            _player.vx=0;
          } else if(_keyState.d||_keyState.right){
            _player.vx =4*scale;
          }
        } if(_event.key=="d"||_event.key=="ArrowRight"){
          _keyState.d=_keyState.right=false;
          if(!_keyState.a&&!_keyState.left){
            _player.vx=0;
          } else if(_keyState.a||_keyState.left){
            _player.vx=-4*scale;
          }
        }
      }
      if(_event.key==" "&&!pauseOn&&hp!=0&&_player.grounded||_event.key=="ArrowUp"&&!pauseOn&&hp!=0&&_player.grounded){ _player.jumped=true; _player.vy=_player.initialvy; }
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

  if(window.detectcollision(_clipboardBack,_mouse)){ _clipboardBack.hover=true; }
  else if(!window.detectcollision(_clipboardBack,_mouse)){ _clipboardBack.hover=false; }
});

window.addEventListener("click",function(_event){
  if(window.detectcollision(_menuLevel,_mouse)&&_menuLevel.on&&canClick){
    _clipboard.close=true;
    _menuLevel.animation=true;
    canClick=false;
  } if(window.detectcollision(_menuSetting,_mouse)&&_menuSetting.on&&canClick){
    _clipboard.close=true;
    _menuSetting.animation=true;
    canClick=false;
  } if(window.detectcollision(_menuAbout,_mouse)&&_menuAbout.on&&canClick){
    _clipboard.close=true;
    _menuAbout.animation=true;
    canClick=false;
  }

  if(window.detectcollision(_menuStart,_mouse)&&canClick&&scene==1){
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
    } else if(!_clipboard.on){
      canClick=false;
      nextScene=2;
      changeScene=true;
    }
  } if(window.detectcollision(_menuLevel,_mouse)&&canClick&&scene==1){
    if(!_menuSetting.on&&!_menuAbout.on){ _menuLevel.animation=true; }
    else if(_menuSetting.on||_menuAbout.on){
      _menuLevel.lateanimation=true;
      if(_menuSetting.on){ _menuSetting.animation=true; }
      else if(_menuAbout.on){ _menuAbout.animation=true; }
    }
    canClick=false;
  } if(window.detectcollision(_menuSetting,_mouse)&&scene==1&&canClick||window.detectcollision(_menuSetting,_mouse)&&scene!=1&&scene!=0&&canClick&&pauseOn){
    if(!_menuLevel.on&&!_menuAbout.on){ _menuSetting.animation=true; }
    else if(_menuLevel.on||_menuAbout.on){
      _menuSetting.lateanimation=true;
      if(_menuLevel.on){ _menuLevel.animation=true; }
      else if(_menuAbout.on){ _menuAbout.animation=true; }
    }
    canClick=false;
  } if(window.detectcollision(_menuAbout,_mouse)&&canClick&&scene==1||window.detectcollision(_menuAbout,_mouse)&&scene!=1&&scene!=0&&canClick&&pauseOn){
    if(!_menuLevel.on&&!_menuSetting.on){ _menuAbout.animation=true; }
    else if(_menuLevel.on||_menuSetting.on){
      _menuAbout.lateanimation=true;
      if(_menuSetting.on){ _menuSetting.animation=true; }
      else if(_menuLevel.on){ _menuLevel.animation=true; }
    }
    canClick=false;
  }

  if(window.detectcollision(_clipboardBack,_mouse)){
    _clipboard.close=true;
    if(_menuLevel.on){ _menuLevel.animation=true; }
    if(_menuSetting.on){ _menuSetting.animation=true; }
    if(_menuAbout.on){ _menuAbout.animation=true; }
    canClick=false;
  }

  if(window.detectcollision(_clipboardLevel1,_mouse)&&_menuLevel.on){
  
  } if(window.detectcollision(_clipboardLevel2,_mouse)&&_menuLevel.on){
  
  } if(window.detectcollision(_clipboardLevel3,_mouse)&&_menuLevel.on){
  
  } if(window.detectcollision(_clipboardLevel4,_mouse)&&_menuLevel.on){
  
  } if(window.detectcollision(_clipboardLevel5,_mouse)&&_menuLevel.on){
  
  } if(window.detectcollision(_clipboardLevel6,_mouse)&&_menuLevel.on){
  
  } if(window.detectcollision(_clipboardLevel7,_mouse)&&_menuLevel.on){
  
  } if(window.detectcollision(_clipboardLevel8,_mouse)&&_menuLevel.on){
  
  }

  if(window.detectcollision(_clipboardSetting1,_mouse)&&_menuSetting.on){
    if(sfxOn){ sfxOn=false; }
    else if(!sfxOn){ sfxOn=true; }
  } if(window.detectcollision(_clipboardSetting2,_mouse)&&_menuSetting.on){
    if(musicOn){ musicOn=false; }
    else if(!musicOn){ musicOn=true; }
  } if(window.detectcollision(_clipboardSetting3,_mouse)&&_menuSetting.on){
    if(fullscreenOn){ fullscreenOn=false; document.exitFullscreen(); }
    else if(!fullscreenOn){ fullscreenOn=true; document.documentElement.requestFullscreen(); }
  }

  if(window.detectcollision(_gamePause,_mouse)&&canClick&&!pauseOn){
    pauseOn=true;
    pauseChange=true;
  } if(window.detectcollision(_menuStart,_mouse)&&canClick&&scene!=1&&scene!=0&&pauseOn){
    if(_clipboard.on){
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
  } if(window.detectcollision(_menuMenu,_mouse)&&canClick&&pauseOn){
    if(_clipboard.on){
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
      nextScene=0;
      changeScene=true;
    }
  }
});
