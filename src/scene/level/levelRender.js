/*   ,-----,
 *   |     |    ,--------------------------------------,
 *   |     |   ( */"use strict"/* pastebin.com/zdg35gef )
 *  (|-----|) < The project is licensed under MIT -^    |
 *  |\_____/|  "---------------------------------------"
 *  |       |    __---.
 *  ( o   o )   /      )
 *  \ = . = \__/    --"
 *  /              /
 * |              |
 *  \ \    \ \   |
 *   | |    | | /
 *  (_(_)--(_(_) */

scene.levelRender=function(){
  if(!scene.teacher){
    context.render(_background.base,_background.imgLevel);
    context.render(_background.bottom,_background.imgLevel);
    context.render(_background.left,_background.imgLevel);
    context.render(_background.bottomLeft,_background.imgLevel);
  } else{
    context.render(_background.base,_background.imgTeacher);

    _attack.render();
    _teacher.render();
  }

  if(scene.generated){
    while(_decoration.lenght>=_decoration.currentLenght&&!scene.teacher){
      _currentDecoration=_decoration.array[_decoration.currentLenght];

      if(_currentDecoration.current==0&&_currentDecoration.base.y<canvas.height*1.5&&_currentDecoration.base.y>=-canvas.height*0.5){
        if(_currentDecoration.type==0){ context.render(_currentDecoration.base,_decoration.img0Door); }
        else if(_currentDecoration.type==1){ context.render(_currentDecoration.base,_decoration.img1Door); }
        else if(_currentDecoration.type==2){ context.render(_currentDecoration.base,_decoration.img2Door); }
        else if(_currentDecoration.type==3){ context.render(_currentDecoration.base,_decoration.img3Door); }
        else{ context.render(_currentDecoration.base,_decoration.img4Door); }

        if(_currentDecoration.text.value0!="Finał"){ context.text(_currentDecoration.text,"rgb(140,140,196)",_currentDecoration.text.value0); }
        else{ context.text(_currentDecoration.text,"rgb(255,255,255)",_currentDecoration.text.value0); }

        if(!global.pause&&_player.hp>0){ _decoration.update(); }
      } else if(_currentDecoration.current==1&&_currentDecoration.base.y<canvas.height*1.5&&_currentDecoration.base.y>=-canvas.height*0.5){
        if(_currentDecoration.base.type==0){ context.render(_currentDecoration.base,_decoration.img1Locker); }
        else if(_currentDecoration.base.type==1){ context.render(_currentDecoration.base,_decoration.img2Locker); }
        else if(_currentDecoration.base.type==2){ context.render(_currentDecoration.base,_decoration.img3Locker); }
        else if(_currentDecoration.base.type==3){ context.render(_currentDecoration.base,_decoration.img4Locker); }
        else{ context.render(_currentDecoration.base,_decoration.img0Locker); }
        if(_currentDecoration.bottom.type==0){ context.render(_currentDecoration.bottom,_decoration.img1Locker); }
        else if(_currentDecoration.bottom.type==1){ context.render(_currentDecoration.bottom,_decoration.img2Locker); }
        else if(_currentDecoration.bottom.type==2){ context.render(_currentDecoration.bottom,_decoration.img3Locker); }
        else if(_currentDecoration.bottom.type==3){ context.render(_currentDecoration.bottom,_decoration.img4Locker); }
        else{ context.render(_currentDecoration.bottom,_decoration.img0Locker); }
        if(_currentDecoration.left.type==0){ context.render(_currentDecoration.left,_decoration.img1Locker); }
        else if(_currentDecoration.left.type==1){ context.render(_currentDecoration.left,_decoration.img2Locker); }
        else if(_currentDecoration.left.type==2){ context.render(_currentDecoration.left,_decoration.img3Locker); }
        else if(_currentDecoration.left.type==3){ context.render(_currentDecoration.left,_decoration.img4Locker); }
        else{ context.render(_currentDecoration.left,_decoration.img0Locker); }
        if(_currentDecoration.bottomLeft.type==0){ context.render(_currentDecoration.bottomLeft,_decoration.img1Locker); }
        else if(_currentDecoration.bottomLeft.type==1){ context.render(_currentDecoration.bottomLeft,_decoration.img2Locker); }
        else if(_currentDecoration.bottomLeft.type==2){ context.render(_currentDecoration.bottomLeft,_decoration.img3Locker); }
        else if(_currentDecoration.bottomLeft.type==3){ context.render(_currentDecoration.bottomLeft,_decoration.img4Locker); }
        else{ context.render(_currentDecoration.bottomLeft,_decoration.img0Locker); }

        if(_currentDecoration.first!=undefined){
          if(_currentDecoration.first.type==0){ context.render(_currentDecoration.first,_decoration.img0Close); }
          else if(_currentDecoration.first.type==1){ context.render(_currentDecoration.first,_decoration.img1Close); }
          else if(_currentDecoration.first.type==2){ context.render(_currentDecoration.first,_decoration.img2Close); }
          else{ context.render(_currentDecoration.first,_decoration.img3Close); }
        } if(_currentDecoration.second!=undefined){
          if(_currentDecoration.second.type==0){ context.render(_currentDecoration.second,_decoration.img0Close); }
          else if(_currentDecoration.second.type==1){ context.render(_currentDecoration.second,_decoration.img1Close); }
          else if(_currentDecoration.second.type==2){ context.render(_currentDecoration.second,_decoration.img2Close); }
          else{ context.render(_currentDecoration.second,_decoration.img3Close); }
        }

        if(!global.pause&&_player.hp>0){ _decoration.update(); }
	    } else if(_currentDecoration.current==2&&_currentDecoration.y<canvas.height*1.5&&_currentDecoration.y>=-canvas.height*0.5){
        if(_currentDecoration.type==0){ context.render(_currentDecoration,_decoration.img0Board); }
        else if(_currentDecoration.type==1){ context.render(_currentDecoration,_decoration.img1Board); }
        else if(_currentDecoration.type==2){ context.render(_currentDecoration,_decoration.img2Board); }
        else{ context.render(_currentDecoration,_decoration.img3Board); }

        if(!global.pause&&_player.hp>0){ _decoration.update(); }
      } else if(_currentDecoration.current==3&&_currentDecoration.light.y<canvas.height*1.5&&_currentDecoration.light.y>=-canvas.height*0.5){
        context.render(_currentDecoration.base,"rgb(255,255,255)");
        context.render(_currentDecoration.light,_decoration.img0Light);

        if(!global.pause&&_player.hp>0){ _decoration.update(); }
      }

      if(_currentDecoration.current==0){
        _currentDecoration.base.y+=scene.vy;
        _currentDecoration.text.y+=scene.vy;
        _currentDecoration.base.x+=scene.vx;
        _currentDecoration.text.x+=scene.vx;
      } else if(_currentDecoration.current==1){
        _currentDecoration.base.y+=scene.vy;
        _currentDecoration.bottom.y+=scene.vy;
        _currentDecoration.left.y+=scene.vy;
        _currentDecoration.bottomLeft.y+=scene.vy;
        if(_currentDecoration.first!=undefined){ _currentDecoration.first.y+=scene.vy; }
        if(_currentDecoration.second!=undefined){ _currentDecoration.second.y+=scene.vy; }
        _currentDecoration.base.x+=scene.vx;
        _currentDecoration.bottom.x+=scene.vx;
        _currentDecoration.left.x+=scene.vx;
        _currentDecoration.bottomLeft.x+=scene.vx;
        if(_currentDecoration.first!=undefined){ _currentDecoration.first.x+=scene.vx; }
        if(_currentDecoration.second!=undefined){ _currentDecoration.second.x+=scene.vx; }
      } else if(_currentDecoration.current==2){
        _currentDecoration.y+=scene.vy;
        _currentDecoration.x+=scene.vx;
      } else if(_currentDecoration.current==3){
        _currentDecoration.base.y+=scene.vy;
        _currentDecoration.light.y+=scene.vy;
        _currentDecoration.base.x+=scene.vx;
        _currentDecoration.light.x+=scene.vx;
      } _decoration.currentLenght+=1;
    }

    _player.update();
    _player.render();

    if(_tebox.loot.current!=-1){
      if(_tebox.loot.current==0){ context.render(_tebox.loot,_tebox.loot.imgKey); }
      else if(_tebox.loot.current==1){ context.render(_tebox.loot,_tebox.loot.imgStrong); }
      else if(_tebox.loot.current==2){ context.render(_tebox.loot,_tebox.loot.imgFast); }
      else{ context.render(_tebox.loot,_tebox.loot.imgHeart); }
    }

    while(_tebox.lenght>=_tebox.currentLenght&&!scene.teacher){
      _currentTebox=_tebox.array[_tebox.currentLenght];
      if(_currentTebox.y<canvas.height*1.5&&_currentTebox.y>=-canvas.height*0.5){
        if(_currentTebox.third!=-1||_tebox.useLenght==_tebox.currentLenght&&_tebox.base.third!=-1){ context.render(_currentTebox,_tebox.base.imgOn); }
        else{ context.render(_currentTebox,_tebox.base.imgOff); }

        if(!global.pause&&_player.hp>0){ _tebox.update(); }
      }

      _currentTebox.y+=scene.vy;
      _currentTebox.x+=scene.vx;
      _tebox.currentLenght+=1;
    }

    while(_spike.lenght>=_spike.currentLenght&&!scene.teacher){
      _currentSpike=_spike.array[_spike.currentLenght];
      if(_currentSpike.y<canvas.height+context.scale(32)&&_currentSpike.y>=-context.scale(32)){
        context.render(_currentSpike,_spike.img);
        if(!global.pause&&_player.hp>0){ _spike.update(); }
      }

      _currentSpike.y+=scene.vy;
      _currentSpike.x+=scene.vx;
      _spike.currentLenght+=1;
    }

    while(_foreground.lenght>=_foreground.currentLenght&&!scene.teacher){
      _currentForeground=_foreground.array[_foreground.currentLenght];
      context.render(_currentForeground,"rgb(0,0,55)");
      if(!global.pause&&_player.hp>0){ _foreground.update(); }

      _currentForeground.y+=scene.vy;
      _currentForeground.x+=scene.vx;
      _foreground.currentLenght+=1;
    }

    while(_corner.lenght>=_corner.currentLenght&&!scene.teacher){
      _currentCorner=_corner.array[_corner.currentLenght];
      if(_currentCorner.base.y<canvas.height*1.5&&_currentCorner.base.y>=-canvas.height*0.5){
        context.render(_currentCorner.base,_corner.imgCorner);
        if(_currentCorner.laser!=undefined&&_corner.time>=context.time(20)&&_corner.time<context.time(50)){ context.render(_currentCorner.laser,"rgb(255,255,255)"); }
        else if(_currentCorner.lock!=undefined){ context.render(_currentCorner.lock,_corner.imgLock); }
      } if(!global.pause&&_player.hp>0){ _corner.update(); }

      if(_currentCorner.laser!=undefined){
        _currentCorner.laser.y+=scene.vy;
        _currentCorner.laser.x+=scene.vx;
        _currentCorner.laser.ix+=scene.vx;
      } else if(_currentCorner.lock!=undefined){
        _currentCorner.lock.y+=scene.vy;
        _currentCorner.lock.x+=scene.vx;
      }
      _currentCorner.base.y+=scene.vy;
      _currentCorner.base.x+=scene.vx;
      _corner.currentLenght+=1;
    } if(!global.pause&&_player.hp>0&&!(_corner.time<context.time(20)&&!_player.touchCorner)){ _corner.time++; }

    while(_platform.lenght>=_platform.currentLenght){
      _currentPlatform=_platform.array[_platform.currentLenght];
      if(_currentPlatform.y<canvas.height*1.5&&_currentPlatform.y>=-canvas.height*0.5){
        context.render(_currentPlatform,_platform.img);
        if(!global.pause&&_player.hp>0){ _platform.update(); }
      }

      _currentPlatform.y+=scene.vy;
      _currentPlatform.x+=scene.vx;
      _platform.hy=scene.vy;
      _platform.currentLenght+=1;
    }

    _player.lateUpdate();
    if(_player.action.current!=-1){
      if(_player.action.current==0){ context.render(_player.action,_player.action.imgKey); }
      else{ context.render(_player.action,_player.action.imgUse); }
    }
  }

  _ui.levelRender();
  if(global.pauseAnimation&&(!global.pauseChange||scene.next!=scene.value)&&global.pause&&_player.hp>0&&!global.gameLoad&&!global.restart&&!scene.load){
    _ui.render();
    _clipboard.render();
    _ui.infoRender();
  }

  if(scene.change&&scene.next!=1||scene.change&&_teacher.round>=2){
    if(!canvas.error){
      if(_player.hp==0||_teacher.hp==0||global.load){
        if(scene.teacher){
          html.classList.remove("black-red");
          html.classList.add("red-black");
        } else{
          html.classList.remove("black-cyan");
          html.classList.add("cyan-black");
        }
      } else if(_transition.base.y>=canvas.height*1.5){
        html.classList.remove("blue-black");
        html.classList.remove("red-black");
        html.classList.add("black-cyan");
      }
    }

    context.render(_transition.base,"rgb(0,27,69)");
    context.render(_transition.top,_transition.imgTop);
    context.render(_transition.bottom,_transition.imgBottom);
    context.text(_transition.text,"rgb(255,255,255)",_transition.text.value);

    if(_indicator.time<context.time(5)){ context.render(_indicator,_indicator.img0); }
    else if(_indicator.time>=context.time(5)&&_indicator.time<context.time(10)){ context.render(_indicator,_indicator.img1); }
    else if(_indicator.time>=context.time(10)&&_indicator.time<context.time(15)){ context.render(_indicator,_indicator.img2); }
    else if(_indicator.time>=context.time(15)&&_indicator.time<context.time(20)){ context.render(_indicator,_indicator.img3); }
    else if(_indicator.time>=context.time(20)&&_indicator.time<context.time(25)){ context.render(_indicator,_indicator.img4); }
    else if(_indicator.time>=context.time(25)&&_indicator.time<context.time(30)){ context.render(_indicator,_indicator.img5); }
    else{ context.render(_indicator,_indicator.imgMax); }
  } if(scene.next!=scene.value&&global.pauseChange||scene.load){
    if(!canvas.error){
      if(scene.teacher){
        html.classList.remove("cyan-black");
        html.classList.add("black-red");
      } else{
        html.classList.remove("black-cyan");
        html.classList.add("cyan-black");
      }
    }

    context.render(_transition.base,"rgb(0,27,69)");
    context.render(_transition.top,_transition.imgTop);
    context.render(_transition.bottom,_transition.imgBottom);
    context.text(_transition.text,"rgb(255,255,255)",_transition.text.value);

    if(_indicator.time<context.time(5)){ context.render(_indicator,_indicator.img0); }
    else if(_indicator.time>=context.time(5)&&_indicator.time<context.time(10)){ context.render(_indicator,_indicator.img1); }
    else if(_indicator.time>=context.time(10)&&_indicator.time<context.time(15)){ context.render(_indicator,_indicator.img2); }
    else if(_indicator.time>=context.time(15)&&_indicator.time<context.time(20)){ context.render(_indicator,_indicator.img3); }
    else if(_indicator.time>=context.time(20)&&_indicator.time<context.time(25)){ context.render(_indicator,_indicator.img4); }
    else if(_indicator.time>=context.time(25)&&_indicator.time<context.time(30)){ context.render(_indicator,_indicator.img5); }
    else{ context.render(_indicator,_indicator.imgMax); }
  } else if(global.pauseChange){
    if(!canvas.error){
      if(!global.pauseAnimation){
        if(scene.teacher){
          html.classList.remove("red-black");
          html.classList.add("black-red");
        } else{
          html.classList.remove("cyan-black");
          html.classList.add("black-cyan");
        }
      } else{
        if(scene.teacher){
          html.classList.remove("cyan-red");
          html.classList.remove("black-red");
          html.classList.add("red-black");
        } else{
          html.classList.remove("red-black");
          html.classList.remove("black-cyan");
          html.classList.add("cyan-black");
        }
      }
    } context.render(_transition.overlay,"rgb(0,27,69)");
  }
}
