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

_blueprint.update=function(){
  if(_button.custom.animation||_button.level.animation){
    if(_blueprint.on&&_blueprint.close){
      if(_blueprint.base.x<canvas.width+_blueprint.base.width){
        _blueprint.base.x+=20*canvas.scale;
        _blueprint.back.x+=20*canvas.scale;
        _blueprint.left.x+=20*canvas.scale;
        _blueprint.right.x+=20*canvas.scale;

        _blueprint.skin.x+=20*canvas.scale;
        _blueprint.level.title.x+=20*canvas.scale;

        _blueprint.level.button1.x+=20*canvas.scale;
        _blueprint.level.button2.x+=20*canvas.scale;
        _blueprint.level.button3.x+=20*canvas.scale;
        _blueprint.level.button4.x+=20*canvas.scale;
        _blueprint.level.button5.x+=20*canvas.scale;
        _blueprint.level.button6.x+=20*canvas.scale;
        _blueprint.level.button7.x+=20*canvas.scale;
        _blueprint.level.button8.x+=20*canvas.scale;
        _blueprint.level.button9.x+=20*canvas.scale;
        _blueprint.level.button10.x+=20*canvas.scale;

        _blueprint.custom.title.x+=20*canvas.scale;
        _blueprint.custom.text.x+=20*canvas.scale;
      } else{
        _blueprint.base.x=(640+160)*canvas.scale;
        _blueprint.back.x=_blueprint.base.x+(124*canvas.scale);
        _blueprint.left.x=_blueprint.base.x+(8*canvas.scale);
        _blueprint.right.x=_blueprint.base.x+(124*canvas.scale);

        _blueprint.skin.x=_blueprint.base.x+(42*canvas.scale);

        _blueprint.level.title.x=_blueprint.base.x+(42*canvas.scale);
        _blueprint.level.button1.x=_blueprint.base.x+(20*canvas.scale);
        _blueprint.level.button2.x=_blueprint.base.x+(20*canvas.scale);
        _blueprint.level.button3.x=_blueprint.base.x+(20*canvas.scale);
        _blueprint.level.button4.x=_blueprint.base.x+(20*canvas.scale);
        _blueprint.level.button5.x=_blueprint.base.x+(20*canvas.scale);
        _blueprint.level.button6.x=_blueprint.base.x+(88*canvas.scale);
        _blueprint.level.button7.x=_blueprint.base.x+(88*canvas.scale);
        _blueprint.level.button8.x=_blueprint.base.x+(88*canvas.scale);
        _blueprint.level.button9.x=_blueprint.base.x+(88*canvas.scale);
        _blueprint.level.button10.x=_blueprint.base.x+(88*canvas.scale);

        _blueprint.custom.title.x=_blueprint.base.x+(50*canvas.scale);
        _blueprint.custom.text.x=_blueprint.base.x+(68*canvas.scale);

        _button.level.on=false;
        _blueprint.on=false;
        _blueprint.close=false;
        scene.blocked=false;

        if(_button.custom.animation){
          _button.custom.animation=false;
          _button.custom.on=false;
        } else if(_button.level.animation){
          _button.level.animation=false;
          _button.level.on=false;
        }

        if(_blueprint.change){
          _clipboard.on=true;
          _blueprint.change=false;
        }
      }
    }

    else if(_blueprint.on&&!_blueprint.close){
      scene.blocked=false;

      if(_button.custom.animation){
        _button.level.on=false;
        _button.custom.on=true;
        _button.level.animation=false;
        _button.custom.animation=false;
      } else if(_button.level.animation){
        _button.level.on=true;
        _button.custom.on=false;
        _button.level.animation=false;
        _button.custom.animation=false;
      }
    } 

    else{
      if(_blueprint.base.x>(canvas.width-_blueprint.base.width)-(32*canvas.scale)){
        _blueprint.base.x-=20*canvas.scale;
        _blueprint.back.x-=20*canvas.scale;
        _blueprint.left.x-=20*canvas.scale;
        _blueprint.right.x-=20*canvas.scale;

        _blueprint.skin.x-=20*canvas.scale;

        _blueprint.level.title.x-=20*canvas.scale;
        _blueprint.level.button1.x-=20*canvas.scale;
        _blueprint.level.button2.x-=20*canvas.scale;
        _blueprint.level.button3.x-=20*canvas.scale;
        _blueprint.level.button4.x-=20*canvas.scale;
        _blueprint.level.button5.x-=20*canvas.scale;
        _blueprint.level.button6.x-=20*canvas.scale;
        _blueprint.level.button7.x-=20*canvas.scale;
        _blueprint.level.button8.x-=20*canvas.scale;
        _blueprint.level.button9.x-=20*canvas.scale;
        _blueprint.level.button10.x-=20*canvas.scale;

        _blueprint.custom.title.x-=20*canvas.scale;
        _blueprint.custom.text.x-=20*canvas.scale;
      } else{
        _blueprint.on=true;
        _blueprint.close=false;
        scene.blocked=false;

        if(_button.custom.animation){
          _button.custom.animation=false;
          _button.custom.on=true;
        } else if(_button.level.animation){
          _button.level.animation=false;
          _button.level.on=true;
        }
      }
    }
  }
}

