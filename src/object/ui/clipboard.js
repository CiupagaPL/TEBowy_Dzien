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

_clipboard.render=function(){
  if(scene.value==1||scene.value>=2&&!global.currentTutorial&&!global.currentTeacher&&!global.currentReward&&(_button.setting.animation||_button.setting.on||_button.about0.animation
     ||_button.about0.on||_button.about1.animation||_button.about1.on)){
    context.render(_clipboard.base,_clipboard.base.img);
    if(!_clipboard.back.hover){ context.render(_clipboard.back,_clipboard.back.imgOff); }
    else{ context.render(_clipboard.back,_clipboard.back.imgOn); }

    if(_button.setting.animation||_button.setting.on){
      context.text(_clipboard.title,"rgb(0,0,0)",_clipboard.title.value0);
      context.render(_clipboard.icon,_clipboard.icon.imgSet);

      if(!global.sfx){ context.render(_clipboard.setting.sfx.base,_clipboard.setting.imgOff); }
      else{ context.render(_clipboard.setting.sfx.base,_clipboard.setting.imgOn); }
      context.text(_clipboard.setting.sfx.text,"rgb(0,0,0)",_clipboard.setting.sfx.text.value);
      if(!global.music){ context.render(_clipboard.setting.music.base,_clipboard.setting.imgOff); }
      else{ context.render(_clipboard.setting.music.base,_clipboard.setting.imgOn); }
      context.text(_clipboard.setting.music.text,"rgb(0,0,0)",_clipboard.setting.music.text.value);
    } else if(_button.about0.animation||_button.about0.on){
      context.render(_clipboard.icon,_clipboard.icon.imgInfo);
      context.text(_clipboard.title,"rgb(0,0,0)",_clipboard.title.value1);
      context.text(_clipboard.text,"rgb(0,0,0)",_clipboard.text.value0);
    } else{
      context.render(_clipboard.icon,_clipboard.icon.imgGen);
      context.text(_clipboard.title,"rgb(0,0,0)",_clipboard.title.value2);
      context.text(_clipboard.text,"rgb(0,0,0)",_clipboard.text.value1);
    }
  }
}

_clipboard.update=function(){
  if(_button.setting.animation||_button.about0.animation||_button.about1.animation){
    if(_clipboard.on&&_clipboard.close){
      if(_clipboard.base.x<canvas.width+_clipboard.base.width){
        _clipboard.base.x+=context.move(20);
        _clipboard.back.x+=context.move(20);
        _clipboard.icon.x+=context.move(20);
        _clipboard.title.x+=context.move(20);
        _clipboard.text.x+=context.move(20);

        _clipboard.setting.sfx.base.x+=context.move(20);
        _clipboard.setting.music.base.x+=context.move(20);
        _clipboard.setting.sfx.text.x+=context.move(20);
        _clipboard.setting.music.text.x+=context.move(20);
      } else{
        _clipboard.base.x=context.scale(800);
        _clipboard.back.x=context.scale(924);
        _clipboard.icon.x=context.scale(820);
        _clipboard.title.x=context.scale(844);
        _clipboard.text.x=context.scale(824);

        _clipboard.setting.sfx.base.x=context.scale(824);
        _clipboard.setting.music.base.x=context.scale(824);
        _clipboard.setting.sfx.text.x=context.scale(842);
        _clipboard.setting.music.text.x=context.scale(842);

        _clipboard.on=false;
        _clipboard.close=false;
        scene.block=false;

        if(_button.setting.animation){
          _button.setting.animation=false;
          _button.setting.on=false;
        } else if(_button.about0.animation){
          _button.about0.animation=false;
          _button.about0.on=false;
        } else if(_button.about1.animation){
          _button.about1.animation=false;
          _button.about1.on=false;
        }

        if(_clipboard.change){
          _blueprint.on=true;
          _clipboard.change=false;
        }
      }
    }

    else if(_clipboard.on&&!_clipboard.close){
      if(_button.setting.animation){
        _button.about0.on=false;
        _button.setting.on=true;
        _button.about1.on=false;
      } else if(_button.about0.animation){
        _button.about0.on=true;
        _button.setting.on=false;
        _button.about1.on=false;
      } else if(_button.about1.animation){
        _button.about0.on=false;
        _button.setting.on=false;
        _button.about1.on=true;
      }

      _button.about0.animation=false;
      _button.setting.animation=false;
      _button.about1.animation=false;
      scene.block=false;
    }

    else{
      if(_clipboard.base.x>(canvas.width-_clipboard.base.width)-context.scale(32)){
        _clipboard.base.x-=context.move(20);
        _clipboard.back.x-=context.move(20);
        _clipboard.icon.x-=context.move(20);
        _clipboard.title.x-=context.move(20);
        _clipboard.text.x-=context.move(20);

        _clipboard.setting.sfx.base.x-=context.move(20);
        _clipboard.setting.music.base.x-=context.move(20);
        _clipboard.setting.sfx.text.x-=context.move(20);
        _clipboard.setting.music.text.x-=context.move(20);
      } else{
        _clipboard.on=true;
        scene.block=false;

        if(_button.setting.animation){
          _button.setting.animation=false;
          _button.setting.on=true;
        } else if(_button.about0.animation){
          _button.about0.animation=false;
          _button.about0.on=true;
        } else if(_button.about1.animation){
          _button.about1.animation=false;
          _button.about1.on=true;
        }
      }
    }
  }
}
