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

_blueprint.update=function(){
  if(_button.custom.animation||_button.level.animation){
    if(_blueprint.on&&_blueprint.close){
      if(_blueprint.base.x<canvas.width+_blueprint.base.width){
        _blueprint.base.x+=context.move(20);
        _blueprint.skin.x+=context.move(20);
        _blueprint.back.x+=context.move(20);
        _blueprint.left.x+=context.move(20);
        _blueprint.right.x+=context.move(20);
        _blueprint.title.x+=context.move(20);
        _blueprint.text.x+=context.move(20);
        _blueprint.icon.x+=context.move(20);

        _blueprint.level.button1.x+=context.move(20);
        _blueprint.level.button2.x+=context.move(20);
        _blueprint.level.button3.x+=context.move(20);
        _blueprint.level.button4.x+=context.move(20);
        _blueprint.level.button5.x+=context.move(20);
        _blueprint.level.button6.x+=context.move(20);
        _blueprint.level.button7.x+=context.move(20);
        _blueprint.level.button8.x+=context.move(20);
        _blueprint.level.buttonF.x+=context.move(20);
      } else{
        _blueprint.base.x=context.scale(800);
        _blueprint.skin.x=context.scale(846);
        _blueprint.back.x=context.scale(924);
        _blueprint.left.x=context.scale(808);
        _blueprint.right.x=context.scale(924);
        _blueprint.title.x=context.scale(842);
        _blueprint.text.x=context.scale(868);
        _blueprint.icon.x=context.scale(820);

        _blueprint.level.button1.x=context.scale(820);
        _blueprint.level.button2.x=context.scale(820);
        _blueprint.level.button3.x=context.scale(820);
        _blueprint.level.button4.x=context.scale(820);
        _blueprint.level.button5.x=context.scale(820);
        _blueprint.level.button6.x=context.scale(888);
        _blueprint.level.button7.x=context.scale(888);
        _blueprint.level.button8.x=context.scale(888);
        _blueprint.level.buttonF.x=context.scale(902);

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
      if(_blueprint.base.x>(canvas.width-_blueprint.base.width)-context.scale(32)){
        _blueprint.base.x-=context.move(20);
        _blueprint.skin.x-=context.move(20);
        _blueprint.back.x-=context.move(20);
        _blueprint.left.x-=context.move(20);
        _blueprint.right.x-=context.move(20);
        _blueprint.title.x-=context.move(20);
        _blueprint.text.x-=context.move(20);
        _blueprint.icon.x-=context.move(20);

        _blueprint.level.button1.x-=context.move(20);
        _blueprint.level.button2.x-=context.move(20);
        _blueprint.level.button3.x-=context.move(20);
        _blueprint.level.button4.x-=context.move(20);
        _blueprint.level.button5.x-=context.move(20);
        _blueprint.level.button6.x-=context.move(20);
        _blueprint.level.button7.x-=context.move(20);
        _blueprint.level.button8.x-=context.move(20);
        _blueprint.level.buttonF.x-=context.move(20);
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
