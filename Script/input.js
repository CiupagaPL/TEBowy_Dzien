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

document.addEventListener("visibilitychange",function(_event){
  if(document.visibilityState=="visible"){
    if(tempSfxOn){ sfxOn=true; }
    if(tempMusicOn){ musicOn=true; }
  } else if(document.visibilityState!="visible"){
    sfxOn=false;
    musicOn=false;
    musicTimer=0;
  } if(!pause&&scene!=0&&scene!=1){
    pauseChange=true;
    pause=true;
    pauseAnimation=true;
  }
});

window.addEventListener("resize",function(_event){ screenCheckTimer=0; });

document.addEventListener("keydown",function(_event){
  if(!pause&&_player.hp>0&&scene>=2){
    if(_event.key=="a"||_event.key=="A"||_event.key=="ArrowLeft"){
      _keyState.left=true;
      _keyState.right=false;
      _player.vx=-4*scale;
      _player.left=true;
    } if(_event.key=="d"||_event.key=="D"||_event.key=="ArrowRight"){
      _keyState.right=true;
      _keyState.left=false;
      _player.vx=4*scale;
      _player.left=false;
    } if(_event.key=="w"&&_player.cloud||_event.key=="W"&&_player.cloud||_event.key=="ArrowUp"&&_player.cloud||_event.key==" "&&_player.cloud){
      _keyState.up=true;
      _keyState.down=false;
      _player.vy=-4*scale;
    } if(_event.key=="s"&&_player.cloud||_event.key=="S"&&_player.cloud||_event.key=="ArrowDown"&&_player.cloud){
      _keyState.down=true;
      _keyState.up=false;
      _player.vy=4*scale;
    }
  }
});

document.addEventListener("keyup",function(_event){
  switch(scene){
    case 0:
      if(_event.key=="Enter"&&!canStart&&!resolutionError){ canStart=true; sceneTimer=0; }
      break;
    case 1:
      if(_event.key=="Enter"&&canClick&&!resolutionError){
        if(sfxOn){
          _audio.click.load();
          _audio.click.play();
        }

        canClick=false;
        if(_clipboard.on){
          autoScene=true;
          nextAutoScene=2;
          _clipboard.close=true;
          canClick=false;
          if(_menuSetting.on){ _menuSetting.animation=true; }
          if(_menuAbout.on){ _menuAbout.animation=true; }
          if(_menuVersion.on){ _menuVersion.animation=true; }
        } if(_blueprint.on){
          autoScene=true;
          nextAutoScene=2;
          _blueprint.close=true;
          canClick=false;
          if(_menuLevel.on){ _menuLevel.animation=true; } 
          if(_menuCustom.on){ _menuCustom.animation=true; }
        } else if(!_clipboard.on&&!_blueprint.on){
          nextScene=2;
          changeScene=true;
        }
      }
      if(_event.key=="Escape"&&canClick&&_clipboard.on||_event.key=="Escape"&&canClick&&_blueprint.on){ 
        if(sfxOn){
          _audio.click.load();
          _audio.click.play();
        }

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
    case 10:
    case 11:
      if(_event.key=="Escape"&&canClick&&pause){
        if(sfxOn&&!_clipboard.on&&!tutorial&&!reward){
          _audio.click.load();
          _audio.click.play();
        } if(sfxOn&&_clipboard.on||sfxOn&&tutorial||sfxOn&&reward){
          _audio.paper.load();
          _audio.paper.play();
        }

        if(_clipboard.on){
          canClick=false;
          autoUnpause=true;
          _clipboard.close=true;
          if(_menuSetting.on){ _menuSetting.animation=true; }
          if(_menuAbout.on){ _menuAbout.animation=true; }
          if(_menuVersion.on){ _menuVersion.animation=true; }
        } else if(!_clipboard.on){
          pauseChange=true;
          pauseAnimation=false;
        }
      }
      if(_event.key=="Escape"&&canClick&&!pause){
        if(sfxOn){
          _audio.click.load();
          _audio.click.play();
        }

        pauseChange=true;
        pauseAnimation=true;
      } if(!pause&&_player.hp>0){
        if(_event.key=="a"||_event.key=="A"||_event.key=="ArrowLeft"){
          _keyState.left=false;
          if(!_keyState.right){
            _player.vx=0;
          } else if(_keyState.right){
            _player.left=false;
            _player.vx=4*scale;
          }
        } if(_event.key=="d"||_event.key=="D"||_event.key=="ArrowRight"){
          _keyState.right=false;
          if(!_keyState.left){
            _player.vx=0;
          } else if(_keyState.left){
            _player.right=false;
            _player.vx=-4*scale;
          }
        } if(_event.key=="w"&&_player.cloud||_event.key=="W"&&_player.cloud||_event.key=="ArrowUp"&&_player.cloud||_event.key==" "&&_player.cloud){
          _keyState.up=false;
          if(!_keyState.down){
            _player.vy=0;
          } else if(_keyState.down){
            _player.up=false;
            _player.vy=4*scale;
          }
        } if(_event.key=="s"&&_player.cloud||_event.key=="S"&&_player.cloud||_event.key=="ArrowDown"&&_player.cloud){
          _keyState.down=false;
          if(!_keyState.up){
            _player.vy=0;
          } else if(_keyState.up){
            _player.down=false;
            _player.vy=-4*scale;
          }
        }
      }
      if(_event.key==" "&&!pause&&_player.hp>0&&_player.grounded&&!boss||
         _event.key=="ArrowUp"&&!pause&&_player.hp>0&&_player.grounded&&!boss||
         _event.key=="w"&&!pause&&_player.hp>0&&_player.grounded&&!boss||
         _event.key=="W"&&!pause&&_player.hp>0&&_player.grounded&&!boss){
        _player.jumped=true;
        _player.vy=_player.initialvy;
        if(sfxOn){
          _audio.jump.load();
          _audio.jump.play();
        }
      }

      if(_event.key=="Shift"&&boss&&_playerGun.on){
        if(sfxOn){
          _audio.laser.load();
          _audio.laser.play();
        }

        _playerAmmo.x=_player.x+(20*scale);
        _playerAmmo.y=_player.y+(20*scale);
        _playerAmmo.unused=false;
        _playerGun.timer=0;
        _playerGun.on=false;
        if(_playerGun.power){
          _playerAmmo.power=true;
          _playerGun.power=false;
        }
      }

      break;
  }
});

document.addEventListener("mousemove",function(_event){
  _mouse.x=_event.clientX-((_window.width-_currentResolution.width)/2);
  _mouse.y=_event.clientY-((_window.height-_currentResolution.height)/2);

  if(window.detectcollision(_menuTitle,_mouse)){ _menuTitle.hover=true; }
  else if(!window.detectcollision(_menuTitle,_mouse)){ _menuTitle.hover=false; }

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
  if(window.detectcollision(_menuVersion,_mouse)){ _menuVersion.hover=true; }
  else if(!window.detectcollision(_menuVersion,_mouse)){ _menuVersion.hover=false; }
  if(window.detectcollision(_menuCustom,_mouse)){ _menuCustom.hover=true; }
  else if(!window.detectcollision(_menuCustom,_mouse)){ _menuCustom.hover=false; }
  if(window.detectcollision(_menuRestart,_mouse)){ _menuRestart.hover=true; }
  else if(!window.detectcollision(_menuRestart,_mouse)){ _menuRestart.hover=false; }

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
  if(window.detectcollision(_menuTitle,_mouse)&&scene==1&&canClick||
     window.detectcollision(_menuTitle,_mouse)&&scene!=0&&scene!=1&&canClick&&pause){ window.open("https://github.com/CiupagaPL/Tebowy_Dzien","_blank").focus(); }

  if(window.detectcollision(_menuResolution,_mouse)&&scene<2&&canClick||
     window.detectcollision(_menuResolution,_mouse)&&scene!=0&&scene!=1&&canClick&&pause){
    if(fullScreen){
      document.exitFullscreen();
    } else if(!fullScreen){
      if(document.documentElement.requestFullscreen){ document.documentElement.requestFullscreen(); }
      else if(document.documentElement.webkitRequestFullscreen){ document.documentElement.webkitRequestFullscreen(); }
      else if(document.documentElement.msRequestFullscreen){ document.documentElement.msRequestFullscreen(); }
    }
  }

  if(window.detectcollision(_menuStart,_mouse)&&canClick&&scene==1){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    if(_clipboard.on){
      autoScene=true;
      nextAutoScene=2;
      _clipboard.close=true;
      canClick=false;
      if(_menuSetting.on){ _menuSetting.animation=true; }
      if(_menuAbout.on){ _menuAbout.animation=true; }
      if(_menuVersion.on){ _menuVersion.animation=true; }
    } if(_blueprint.on){
      autoScene=true;
      nextAutoScene=2;
      _blueprint.close=true;
      canClick=false;
      if(_menuLevel.on){ _menuLevel.animation=true; }
      if(_menuCustom.on){ _menuCustom.animation=true; }
    } else if(!_clipboard.on&&!_blueprint.on){
      round=1;
      canClick=false;
      nextScene=2;
      changeScene=true;
    }
  }

  if(window.detectcollision(_menuLevel,_mouse)&&_menuLevel.on&&canClick){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    _blueprint.close=true;
    _menuLevel.animation=true;
    canClick=false;
  }
  if(window.detectcollision(_menuSetting,_mouse)&&_menuSetting.on&&canClick){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    _clipboard.close=true;
    _menuSetting.animation=true;
    canClick=false;
  }
  if(window.detectcollision(_menuAbout,_mouse)&&_menuAbout.on&&canClick){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    _clipboard.close=true;
    _menuAbout.animation=true;
    canClick=false;
  }
  if(window.detectcollision(_menuVersion,_mouse)&&_menuVersion.on&&canClick){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    _clipboard.close=true;
    _menuVersion.animation=true;
    canClick=false;
  }
  if(window.detectcollision(_menuLevel,_mouse)&&_menuLevel.on&&canClick){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    _clipboard.close=true;
    _menuLevel.animation=true;
    canClick=false;
  }
  if(window.detectcollision(_menuCustom,_mouse)&&_menuCustom.on&&canClick){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    _blueprint.close=true;
    _menuCustom.animation=true;
    canClick=false;
  }

  if(window.detectcollision(_menuLevel,_mouse)&&canClick&&scene==1){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    _menuCustom.on=false;
    _menuAbout.animation=false;
    if(!_menuCustom.on&&!_clipboard.on){ _menuLevel.animation=true; }
    if(_menuCustom.on){ _menuCustom.animation=true; } 
    else if(_clipboard.on){
      canClick=false;
      _clipboard.close=true;
      _clipboard.change=true;
      _menuLevel.animation=true;
      if(_menuSetting.on){ _menuSetting.animation=true; }
      if(_menuAbout.on){ _menuAbout.animation=true; }
      if(_menuVersion.on){ _menuVersion.animation=true; }
    }
    canClick=false;
  }
  if(window.detectcollision(_menuSetting,_mouse)&&scene==1&&canClick&&!_menuSetting.on||window.detectcollision(_menuSetting,_mouse)&&
     scene!=1&&scene!=0&&canClick&&pause&&!tutorial&&!teacher&&!reward&&!_menuSetting.on){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    _menuAbout.on=false;
    _menuAbout.animation=false;
    _menuVersion.on=false;
    _menuVersion.animation=false;
    if(!_menuAbout.on&&!_menuVersion.on&&!_blueprint.on){ _menuSetting.animation=true; }
    if(_menuAbout.on){ _menuSetting.animation=true; }
    if(_menuVersion.on){ _menuVersion.animation=true; }
    else if(_blueprint.on){
      canClick=false;
      _blueprint.close=true;
      _blueprint.change=true;
      _menuSetting.animation=true;
      if(_menuLevel.on){ _menuLevel.animation=true; }
      if(_menuCustom.on){ _menuCustom.animation=true; }
    }
    canClick=false;
  }
  if(window.detectcollision(_menuAbout,_mouse)&&canClick&&scene==1||window.detectcollision(_menuAbout,_mouse)&&
     scene!=1&&scene!=0&&canClick&&pause&&!tutorial&&!reward&&!teacher){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    _menuSetting.on=false;
    _menuSetting.animation=false;
    _menuVersion.on=false;
    _menuVersion.animation=false;
    if(!_menuSetting.on&&!_menuVersion.on&&!_blueprint.on){ _menuAbout.animation=true; }
    if(_menuSetting.on){ _menuSetting.animation=true; }
    if(_menuVersion.on){ _menuVersion.animation=true; }
    else if(_blueprint.on){
      canClick=false;
      _blueprint.close=true;
      _blueprint.change=true;
      _menuAbout.animation=true;
      if(_menuLevel.on){ _menuLevel.animation=true; }
      if(_menuCustom.on){ _menuCustom.animation=true; }
    }
    canClick=false;
  }
  if(window.detectcollision(_menuVersion,_mouse)&&canClick&&scene==1||window.detectcollision(_menuVersion,_mouse)&&
     scene!=1&&scene!=0&&canClick&&pause&&!tutorial&&!reward&&!teacher){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    _menuSetting.on=false;
    _menuSetting.animation=false;
    _menuAbout.on=false;
    _menuAbout.animation=false;
    if(!_menuSetting.on&&!_menuAbout.on&&!_blueprint.on){ _menuVersion.animation=true; }
    if(_menuSetting.on){ _menuSetting.animation=true; }
    if(_menuAbout.on){ _menuAbout.animation=true; }
    else if(_blueprint.on){
      canClick=false;
      _blueprint.close=true;
      _blueprint.change=true;
      _menuVersion.animation=true;
      if(_menuLevel.on){ _menuLevel.animation=true; }
      if(_menuCustom.on){ _menuCustom.animation=true; }
    }
    canClick=false;
  }
  if(window.detectcollision(_menuCustom,_mouse)&&canClick&&scene==1){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    _menuLevel.on=false;
    _menuLevel.animation=false;
    if(!_menuLevel.on&&!_clipboard.on){ _menuCustom.animation=true; }
    if(_menuLevel.on){ _menuLevel.animation=true; }
    else if(_clipboard.on){
      canClick=false;
      _clipboard.close=true;
      _clipboard.change=true;
      _menuCustom.animation=true;
      if(_menuSetting.on){ _menuSetting.animation=true; }
      if(_menuAbout.on){ _menuAbout.animation=true; }
      if(_menuVersion.on){ _menuVersion.animation=true; }
    }
    canClick=false;
  }

  if(window.detectcollision(_clipboardBack,_mouse)&&_clipboard.on){
    if(sfxOn){
      _audio.paper.load();
      _audio.paper.play();
    }

    _clipboard.close=true;
    if(_menuSetting.on){ _menuSetting.animation=true; }
    if(_menuAbout.on){ _menuAbout.animation=true; }
    if(_menuVersion.on){ _menuVersion.animation=true; }
    canClick=false;
  }

  if(window.detectcollision(_blueprintBack,_mouse)&&_blueprint.on){
    if(sfxOn){
      _audio.paper.load();
      _audio.paper.play();
    }

    _blueprint.close=true;
    if(_menuLevel.on){ _menuLevel.animation=true; }
    if(_menuCustom.on){ _menuCustom.animation=true; }
    canClick=false;
  }
  if(window.detectcollision(_blueprintLeft,_mouse)&&canClick&&_menuCustom.on){
    if(sfxOn){
      _audio.paper.load();
      _audio.paper.play();
    }

    if(_player.skin>0){
      _player.skin--;
      _blueprintCustom1.value=Number(_player.skin+1)+"/4";
    }
  }
  if(window.detectcollision(_blueprintRight,_mouse)&&canClick&&_menuCustom.on){
    if(sfxOn){
      _audio.paper.load();
      _audio.paper.play();
    }

    if(_player.skin<3){
      _player.skin++;
      _blueprintCustom1.value=Number(_player.skin+1)+"/4";
    }
  }
  if(window.detectcollision(_wideClipboardForward,_mouse)&&canClick&&pause&&tutorial||window.detectcollision(_wideClipboardForward,_mouse)&&canClick&&pause&&reward){
    if(sfxOn){
      _audio.paper.load();
      _audio.paper.play();
    }

    pauseChange=true;
    pauseAnimation=false;
    if(tutorial){ tutorial=false; }
    if(reward){ reward=false; }
    canClick=false;
  }
  if(window.detectcollision(_wideBlueprintForward,_mouse)&&canClick&&pause&&teacher){
    if(sfxOn){
      _audio.paper.load();
      _audio.paper.play();
    }

    pauseChange=true;
    pauseAnimation=false;
    canClick=false;
  }

  if(window.detectcollision(_blueprintLevel1,_mouse)&&_menuLevel.on&&canClick||
     window.detectcollision(_blueprintLevel2,_mouse)&&_menuLevel.on&&canClick||
     window.detectcollision(_blueprintLevel3,_mouse)&&_menuLevel.on&&canClick||
     window.detectcollision(_blueprintLevel4,_mouse)&&_menuLevel.on&&canClick||
     window.detectcollision(_blueprintLevel5,_mouse)&&_menuLevel.on&&canClick||
     window.detectcollision(_blueprintLevel6,_mouse)&&_menuLevel.on&&canClick||
     window.detectcollision(_blueprintLevel7,_mouse)&&_menuLevel.on&&canClick||
     window.detectcollision(_blueprintLevel8,_mouse)&&_menuLevel.on&&canClick||
     window.detectcollision(_blueprintLevel9,_mouse)&&_menuLevel.on&&canClick||
     window.detectcollision(_blueprintLevel10,_mouse)&&_menuLevel.on&&canClick){
    if(sfxOn){
      _audio.paper.load();
      _audio.paper.play();
    }

    if(window.detectcollision(_blueprintLevel1,_mouse)){ nextAutoScene=2; }
    if(window.detectcollision(_blueprintLevel2,_mouse)){ nextAutoScene=3; }
    if(window.detectcollision(_blueprintLevel3,_mouse)){ nextAutoScene=4; }
    if(window.detectcollision(_blueprintLevel4,_mouse)){ nextAutoScene=5; }
    if(window.detectcollision(_blueprintLevel5,_mouse)){ nextAutoScene=6; }
    if(window.detectcollision(_blueprintLevel6,_mouse)){ nextAutoScene=7; }
    if(window.detectcollision(_blueprintLevel7,_mouse)){ nextAutoScene=8; }
    if(window.detectcollision(_blueprintLevel8,_mouse)){ nextAutoScene=9; }
    if(window.detectcollision(_blueprintLevel9,_mouse)){ nextAutoScene=10; }
    if(window.detectcollision(_blueprintLevel10,_mouse)){ nextAutoScene=11; }
    autoScene=true;
    _blueprint.close=true;
    canClick=false;
    if(_blueprint.on){
      if(_menuLevel.on){ _menuLevel.animation=true; }
      if(_menuCustom.on){ _menuCustom.animation=true; }
    }
  } 

  if(window.detectcollision(_clipboardSetting1,_mouse)&&_menuSetting.on&&canClick){
    if(sfxOn){
      sfxOn=false;
      tempSfxOn=false;
    }
    else if(!sfxOn){
      sfxOn=true;
      tempSfxOn=true;
      _audio.paper.load();
      _audio.paper.play();
    }
  } if(window.detectcollision(_clipboardSetting2,_mouse)&&_menuSetting.on&&canClick){
    if(sfxOn){
      _audio.paper.load();
      _audio.paper.play();
    }

    if(musicOn){
      musicOn=false;
      tempMusicOn=false;
    }
    else if(!musicOn){
      musicOn=true;
      tempMusicOn=true;
    }
  } if(window.detectcollision(_clipboardSetting3,_mouse)&&_menuSetting.on&&canClick){
    if(sfxOn){
      _audio.paper.load();
      _audio.paper.play();
    }

    if(tutorialOn){ tutorialOn=false; }
    else if(!tutorialOn){ tutorialOn=true; }
  } if(window.detectcollision(_clipboardSetting4,_mouse)&&_menuSetting.on&&canClick){
    if(sfxOn){
      _audio.paper.load();
      _audio.paper.play();
    }

    if(teacherOn){ teacherOn=false; }
    else if(!teacherOn){ teacherOn=true; }
  } if(window.detectcollision(_clipboardSetting5,_mouse)&&_menuSetting.on&&canClick){
    if(sfxOn){
      _audio.paper.load();
      _audio.paper.play();
    }

    if(addonOn){ addonOn=false; }
    else if(!addonOn){ addonOn=true; }
  }

  if(window.detectcollision(_gamePause,_mouse)&&canClick&&!pause){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    pause=true;
    pauseChange=true;
    pauseAnimation=true;
  } if(window.detectcollision(_menuStart,_mouse)&&canClick&&scene!=1&&scene!=0&&pause&&!tutorial&&!teacher&&!reward){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    if(_clipboard.on){
      autoUnpause=true;
      _clipboard.close=true;
      canClick=false;
      if(_menuSetting.on){ _menuSetting.animation=true; }
      if(_menuAbout.on){ _menuAbout.animation=true; }
      if(_menuVersion.on){ _menuVersion.animation=true; }
    } else if(!_clipboard.on){
      pauseChange=true;
      pauseAnimation=false;
      canClick=false;
    }
  } if(window.detectcollision(_menuMenu,_mouse)&&canClick&&pause&&!tutorial&&!teacher&&!reward){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    if(_clipboard.on){
      autoScene=true;
      nextAutoScene=1;
      _clipboard.close=true;
      canClick=false;
      if(_menuSetting.on){ _menuSetting.animation=true; } 
      if(_menuAbout.on){ _menuAbout.animation=true; }
      if(_menuVersion.on){ _menuVersion.animation=true; }
    } else if(!_clipboard.on){
      nextScene=1;
      changeScene=true;
      pauseChange=true;
    }
  } if(window.detectcollision(_menuRestart,_mouse)&&canClick&&pause&&!tutorial&&!teacher&&!reward){
    if(sfxOn){
      _audio.click.load();
      _audio.click.play();
    }

    if(_clipboard.on){
      canClick=false;
      autoRestart=true;
      _clipboard.close=true;
      if(_menuSetting.on){ _menuSetting.animation=true; }
      if(_menuAbout.on){ _menuAbout.animation=true; }
      if(_menuVersion.on){ _menuVersion.animation=true; }
    } else if(!_clipboard.on){
      restart=true;
    }
  }
});

