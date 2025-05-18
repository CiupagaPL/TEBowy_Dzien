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

document.addEventListener("visibilitychange",function(){
  document.title="TEBowy Dzień: Minimized";
  _mouse.use=false;

  if(scene.value>=2&&!global.pause){
    _ui.game.heart.main.y=-context.scale(74);
    _ui.game.heart.background.y=-context.scale(76);
    _ui.game.heart.icon.y=-context.scale(70);
    _ui.game.heart.text.y=-context.scale(44);
    _ui.game.ammo.main.y=-context.scale(74);
    _ui.game.ammo.background.y=-context.scale(76);
    _ui.game.ammo.icon.y=-context.scale(70);
    _ui.game.ammo.text.y=-context.scale(45);
    _ui.game.key.main.y=-context.scale(44);
    _ui.game.key.background.y=-context.scale(38);
    _ui.game.key.icon.y=-context.scale(33);
    _ui.game.key.text.y=-context.scale(7);
    _ui.game.pause.main.y=-context.scale(74);
    _ui.game.pause.background.y=-context.scale(76);
    _ui.game.pause.icon.y=-context.scale(54);
    _ui.game.pause.text.y=-context.scale(44);
    _ui.game.info.main.y=-context.scale(74);
    _ui.game.info.background.y=-context.scale(76);
    _ui.game.info.icon.y=-context.scale(72);
    _ui.game.info.text.y=-context.scale(44);
    _ui.game.info.score.y=-context.scale(64);
    _ui.game.info.level.y=-context.scale(54);
    _ui.game.info.time.y=-context.scale(44);
    _ui.game.teacher.main.y=-context.scale(36);
    _ui.game.teacher.background.y=-context.scale(38);
    _ui.game.teacher.icon.y=-context.scale(33);
    _ui.game.teacher.text.y=-context.scale(7);

    _transition.overlay.alpha=60;
    global.pause=true;
    global.pauseChange=true;
    global.pauseAnimation=true;
  }
});

window.addEventListener("resize",function(){ canvas.resize=true; });

window.addEventListener("mousemove",function(event){
  _mouse.base.x=event.clientX-((window.innerWidth-canvas.width)/2)-context.scale(6);
  _mouse.base.y=event.clientY-((window.innerHeight-canvas.height)/2)-context.scale(6);
  _mouse.collision.x=_mouse.base.x+context.scale(2);
  _mouse.collision.y=_mouse.base.y+context.scale(2);
  _mouse.use=true;

  if(context.collision(_indicator,_mouse.collision)&&!scene.change&&scene.value<2){ _indicator.alpha=50; }
  else{ _indicator.alpha=100; }

  if(scene.value>=1){
    if(context.collision(_title.base,_mouse.collision)||context.collision(_title.teb,_mouse.collision)){ _title.base.alpha=50; }
    else{ _title.base.alpha=100; }

    if(context.collision(_footer.github,_mouse.collision)){ _footer.github.alpha=50; }
    else{ _footer.github.alpha=100; }
    if(context.collision(_footer.pastebin,_mouse.collision)){ _footer.pastebin.alpha=50; }
    else{ _footer.pastebin.alpha=100; }
    if(context.collision(_footer.next,_mouse.collision)){ _footer.next.alpha=50; }
    else{ _footer.next.alpha=100; }
    if(context.collision(_account.background,_mouse.collision)){ _account.background.alpha=50; }
    else{ _account.background.alpha=100; }

    if(scene.value==1||global.pause){
      _button.overlay.type=-1;

      if(context.collision(_button.start.base,_mouse.collision)||context.collision(_button.start.text,_mouse.collision)){
        _button.start.text.alpha=50;
        _button.overlay.type=0;
        _button.overlay.x=_button.start.base.x;
        _button.overlay.y=_button.start.base.y;
      } else{ _button.start.text.alpha=100; }
      if(context.collision(_button.level.base,_mouse.collision)||context.collision(_button.level.text,_mouse.collision)||context.collision(_button.menu.base,_mouse.collision)||
         context.collision(_button.menu.text,_mouse.collision)){
        _button.level.text.alpha=50;
        _button.menu.text.alpha=50;
        _button.overlay.type=1;
        _button.overlay.x=_button.level.base.x;
        _button.overlay.y=_button.level.base.y;
      } else{
        _button.level.text.alpha=100;
        _button.menu.text.alpha=100;
      } if(context.collision(_button.custom.base,_mouse.collision)||context.collision(_button.custom.text,_mouse.collision)||context.collision(_button.restart.base,_mouse.collision)||
           context.collision(_button.restart.text,_mouse.collision)){
        _button.custom.text.alpha=50;
        _button.restart.text.alpha=50;
        _button.overlay.type=2;
        _button.overlay.x=_button.custom.base.x;
        _button.overlay.y=_button.custom.base.y;
      } else{
        _button.custom.text.alpha=100;
        _button.restart.text.alpha=100;
      } if(context.collision(_button.setting.base,_mouse.collision)||context.collision(_button.setting.text,_mouse.collision)){
        _button.setting.text.alpha=50;
        _button.overlay.type=3;
        _button.overlay.x=_button.setting.base.x;
        _button.overlay.y=_button.setting.base.y;
      } else{ _button.setting.text.alpha=100; }
      if(context.collision(_button.about0.base,_mouse.collision)||context.collision(_button.about0.text,_mouse.collision)){
        _button.about0.text.alpha=50;
        _button.overlay.type=4;
        _button.overlay.x=_button.about0.base.x;
        _button.overlay.y=_button.about0.base.y;
      } else{ _button.about0.text.alpha=100; }
      if(context.collision(_button.about1.base,_mouse.collision)||context.collision(_button.about1.text,_mouse.collision)){
        _button.about1.text.alpha=50;
        _button.overlay.type=5;
        _button.overlay.x=_button.about1.base.x;
        _button.overlay.y=_button.about1.base.y;
      } else{ _button.about1.text.alpha=100; }

      if(scene.value==1){
        if(context.collision(_blueprint.level.button1,_mouse.collision)){ _blueprint.level.button1.alpha=50; }
        else{ _blueprint.level.button1.alpha=100; }
        if(context.collision(_blueprint.level.button2,_mouse.collision)){ _blueprint.level.button2.alpha=50; }
        else{ _blueprint.level.button2.alpha=100; }
        if(context.collision(_blueprint.level.button3,_mouse.collision)){ _blueprint.level.button3.alpha=50; }
        else{ _blueprint.level.button3.alpha=100; }
        if(context.collision(_blueprint.level.button4,_mouse.collision)){ _blueprint.level.button4.alpha=50; }
        else{ _blueprint.level.button4.alpha=100; }
        if(context.collision(_blueprint.level.button5,_mouse.collision)){ _blueprint.level.button5.alpha=50; }
        else{ _blueprint.level.button5.alpha=100; }
        if(context.collision(_blueprint.level.button6,_mouse.collision)){ _blueprint.level.button6.alpha=50; }
        else{ _blueprint.level.button6.alpha=100; }
        if(context.collision(_blueprint.level.button7,_mouse.collision)){ _blueprint.level.button7.alpha=50; }
        else{ _blueprint.level.button7.alpha=100; }
        if(context.collision(_blueprint.level.button8,_mouse.collision)){ _blueprint.level.button8.alpha=50; }
        else{ _blueprint.level.button8.alpha=100; }
        if(context.collision(_blueprint.level.buttonF,_mouse.collision)){ _blueprint.level.buttonF.alpha=50; }
        else{ _blueprint.level.buttonF.alpha=100; }
      }
    } else{
      if(context.collision(_ui.game.heart.background,_mouse.collision)){ _ui.game.heart.background.alpha=50; }
      else{ _ui.game.heart.background.alpha=100; }
      if(context.collision(_ui.game.ammo.background,_mouse.collision)){ _ui.game.ammo.background.alpha=50; }
      else{ _ui.game.ammo.background.alpha=100; }
      if(context.collision(_ui.game.key.background,_mouse.collision)){ _ui.game.key.background.alpha=50; }
      else{ _ui.game.key.background.alpha=100; }
      if(context.collision(_ui.game.pause.background,_mouse.collision)){ _ui.game.pause.background.alpha=50; }
      else{ _ui.game.pause.background.alpha=100; }
      if(context.collision(_ui.game.info.background,_mouse.collision)){ _ui.game.info.background.alpha=50; }
      else{ _ui.game.info.background.alpha=100; }
      if(context.collision(_ui.game.notification.background,_mouse.collision)){ _ui.game.notification.background.alpha=50; }
      else{ _ui.game.notification.background.alpha=100; }
      if(context.collision(_ui.game.teacher.background,_mouse.collision)){ _ui.game.teacher.background.alpha=50; }
      else{ _ui.game.teacher.background.alpha=100; }
    }

    if(context.collision(_clipboard.back,_mouse.collision)){ _clipboard.back.hover=true; }
    else{ _clipboard.back.hover=false; }

    if(_blueprint.on){
      if(context.collision(_blueprint.back,_mouse.collision)){ _blueprint.back.hover=true; }
      else{ _blueprint.back.hover=false; }

      if(context.collision(_blueprint.left,_mouse.collision)){ _blueprint.left.hover=true; }
      else{ _blueprint.left.hover=false; }
      if(context.collision(_blueprint.right,_mouse.collision)){ _blueprint.right.hover=true; }
      else{ _blueprint.right.hover=false; }
    }
  }
});
