/*
 *    ,-----,
 *    |     |    ,---------------------------------------------------------,
 *    |     |   ( Projekt objęty jest licencją. Przeczytasz o niej na:      )
 *   (|-----|)  < github.com/CiupagaPL/Tebowy_Dzien/blob/release/LICENSE.md )
 *   |\_____/|   "---------------------------------------------------------"
 *   |       |    __---.
 *   ( o   o )   /      )
 *   \ = . = \__/    --"
 *   /              /
 *  |              |
 *   \ \    \ \   |
 *    | |    | | /
 *   (_(_)--(_(_)
*/

_clipboard.update=function(){
  if(_button.setting.animation||_button.about.animation||_button.version.animation){
    if(_clipboard.on&&_clipboard.close){
      if(_clipboard.base.x<canvas.width+_clipboard.base.width){
        _clipboard.base.x+=20*canvas.scale;
        _clipboard.back.x+=20*canvas.scale;

        _clipboard.setting.title.x+=20*canvas.scale;
        _clipboard.setting.sfx.base.x+=20*canvas.scale;
        _clipboard.setting.music.base.x+=20*canvas.scale;
        _clipboard.setting.tutorial.base.x+=20*canvas.scale;
        _clipboard.setting.teacher.base.x+=20*canvas.scale;
        _clipboard.setting.addon.base.x+=20*canvas.scale;
        _clipboard.setting.sfx.text.x+=20*canvas.scale;
        _clipboard.setting.music.text.x+=20*canvas.scale;
        _clipboard.setting.tutorial.text.x+=20*canvas.scale;
        _clipboard.setting.teacher.text.x+=20*canvas.scale;
        _clipboard.setting.addon.text.x+=20*canvas.scale;

        _clipboard.about.title.x+=20*canvas.scale;
        _clipboard.about.text.x+=20*canvas.scale;

        _clipboard.version.title.x+=20*canvas.scale;
        _clipboard.version.text.x+=20*canvas.scale;
      } else{
        _clipboard.base.x=(640+160)*canvas.scale;
        _clipboard.back.x=_clipboard.base.x+((160-36)*canvas.scale);

        _clipboard.setting.title.x=_clipboard.base.x+(54*canvas.scale);
        _clipboard.setting.sfx.base.x=_clipboard.base.x+(24*canvas.scale);
        _clipboard.setting.music.base.x=_clipboard.base.x+(24*canvas.scale);
        _clipboard.setting.tutorial.base.x=_clipboard.base.x+(24*canvas.scale);
        _clipboard.setting.teacher.base.x=_clipboard.base.x+(24*canvas.scale);
        _clipboard.setting.addon.base.x=_clipboard.base.x+(24*canvas.scale);
        _clipboard.setting.sfx.text.x=_clipboard.base.x+(42*canvas.scale);
        _clipboard.setting.music.text.x=_clipboard.base.x+(42*canvas.scale);
        _clipboard.setting.tutorial.text.x=_clipboard.base.x+(42*canvas.scale);
        _clipboard.setting.teacher.text.x=_clipboard.base.x+(42*canvas.scale);
        _clipboard.setting.addon.text.x=_clipboard.base.x+(42*canvas.scale);

        _clipboard.about.title.x=_clipboard.base.x+(60*canvas.scale);
        _clipboard.about.text.x=_clipboard.base.x+(24*canvas.scale);

        _clipboard.version.title.x=_clipboard.base.x+(46*canvas.scale);
        _clipboard.version.text.x=_clipboard.base.x+(24*canvas.scale);

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
      if(_clipboard.base.x>(canvas.width-_clipboard.base.width)-(32*canvas.scale)){
        _clipboard.base.x-=20*canvas.scale;
        _clipboard.back.x-=20*canvas.scale;

        _clipboard.setting.title.x-=20*canvas.scale;
        _clipboard.setting.sfx.base.x-=20*canvas.scale;
        _clipboard.setting.music.base.x-=20*canvas.scale;
        _clipboard.setting.tutorial.base.x-=20*canvas.scale;
        _clipboard.setting.teacher.base.x-=20*canvas.scale;
        _clipboard.setting.addon.base.x-=20*canvas.scale;
        _clipboard.setting.sfx.text.x-=20*canvas.scale;
        _clipboard.setting.music.text.x-=20*canvas.scale;
        _clipboard.setting.tutorial.text.x-=20*canvas.scale;
        _clipboard.setting.teacher.text.x-=20*canvas.scale;
        _clipboard.setting.addon.text.x-=20*canvas.scale;

        _clipboard.about.title.x-=20*canvas.scale;
        _clipboard.about.text.x-=20*canvas.scale;

        _clipboard.version.title.x-=20*canvas.scale;
        _clipboard.version.text.x-=20*canvas.scale;
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

