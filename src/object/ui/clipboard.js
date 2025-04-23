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

_clipboard.update=function(){
  if(_button.setting.animation||_button.about.animation||_button.version.animation){
    if(_clipboard.on&&_clipboard.close){
      if(_clipboard.base.x<canvas.width+_clipboard.base.width){
        _clipboard.base.x+=context.move(20);
        _clipboard.back.x+=context.move(20);
        _clipboard.icon.x+=context.move(20);
        _clipboard.title.x+=context.move(20);
        _clipboard.text.x+=context.move(20);

        _clipboard.setting.sfx.base.x+=context.move(20);
        _clipboard.setting.music.base.x+=context.move(20);
        _clipboard.setting.tutorial.base.x+=context.move(20);
        _clipboard.setting.teacher.base.x+=context.move(20);
        _clipboard.setting.addon.base.x+=context.move(20);
        _clipboard.setting.sfx.text.x+=context.move(20);
        _clipboard.setting.music.text.x+=context.move(20);
        _clipboard.setting.tutorial.text.x+=context.move(20);
        _clipboard.setting.teacher.text.x+=context.move(20);
        _clipboard.setting.addon.text.x+=context.move(20);
      } else{
        _clipboard.base.x=context.scale(800);
        _clipboard.back.x=context.scale(924);
        _clipboard.icon.x=context.scale(820);
        _clipboard.title.x=context.scale(844);
        _clipboard.text.x=context.scale(824);

        _clipboard.setting.sfx.base.x=context.scale(824);
        _clipboard.setting.music.base.x=context.scale(824);
        _clipboard.setting.tutorial.base.x=context.scale(824);
        _clipboard.setting.teacher.base.x=context.scale(824);
        _clipboard.setting.addon.base.x=context.scale(824);
        _clipboard.setting.sfx.text.x=context.scale(842);
        _clipboard.setting.music.text.x=context.scale(842);
        _clipboard.setting.tutorial.text.x=context.scale(842);
        _clipboard.setting.teacher.text.x=context.scale(842);
        _clipboard.setting.addon.text.x=context.scale(842);

        _clipboard.on=false;
        _clipboard.close=false;
        scene.blocked=false;

        if(_button.setting.animation){
          _button.setting.animation=false;
          _button.setting.on=false;
        } else if(_button.about.animation){
          _button.about.animation=false;
          _button.about.on=false;
        } else if(_button.version.animation){
          _button.version.animation=false;
          _button.version.on=false;
        }

        if(_clipboard.change){
          _blueprint.on=true;
          _clipboard.change=false;
        }
      }
    }

    else if(_clipboard.on&&!_clipboard.close){
      if(_button.setting.animation){
        _button.about.on=false;
        _button.setting.on=true;
        _button.version.on=false;
      } else if(_button.about.animation){
        _button.about.on=true;
        _button.setting.on=false;
        _button.version.on=false;
      } else if(_button.version.animation){
        _button.about.on=false;
        _button.setting.on=false;
        _button.version.on=true;
      }

      _button.about.animation=false;
      _button.setting.animation=false;
      _button.version.animation=false;
      scene.blocked=false;
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
        _clipboard.setting.tutorial.base.x-=context.move(20);
        _clipboard.setting.teacher.base.x-=context.move(20);
        _clipboard.setting.addon.base.x-=context.move(20);
        _clipboard.setting.sfx.text.x-=context.move(20);
        _clipboard.setting.music.text.x-=context.move(20);
        _clipboard.setting.tutorial.text.x-=context.move(20);
        _clipboard.setting.teacher.text.x-=context.move(20);
        _clipboard.setting.addon.text.x-=context.move(20);
      } else{
        _clipboard.on=true;
        scene.blocked=false;

        if(_button.setting.animation){
          _button.setting.animation=false;
          _button.setting.on=true;
        } else if(_button.about.animation){
          _button.about.animation=false;
          _button.about.on=true;
        } else if(_button.version.animation){
          _button.version.animation=false;
          _button.version.on=true;
        }
      }
    }
  }
}
