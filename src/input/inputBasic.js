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

document.addEventListener("visibilitychange",function(_event){
  document.title="TEBowy Dzień: Minimized";
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
  mouse.x=event.clientX-((window.innerWidth-canvas.width)/2);
  mouse.y=event.clientY-((window.innerHeight-canvas.height)/2);

  if(context.collision(_indicator,mouse)&&!scene.change&&scene.value<2){ _indicator.alpha=50; }
  else{ _indicator.alpha=100; }

  if(scene.value>=1){
    if(context.collision(_title.base,mouse)||context.collision(_title.teb,mouse)){ _title.base.alpha=50; }
    else{ _title.base.alpha=100; }

    if(context.collision(_footer.github,mouse)){ _footer.github.alpha=50; }
    else{ _footer.github.alpha=100; }
    if(context.collision(_footer.pastebin,mouse)){ _footer.pastebin.alpha=50; }
    else{ _footer.pastebin.alpha=100; }
    if(context.collision(_footer.next,mouse)){ _footer.next.alpha=50; }
    else{ _footer.next.alpha=100; }
    if(context.collision(_account.background,mouse)){ _account.background.alpha=50; }
    else{ _account.background.alpha=100; }

    if(scene.value==1||global.pause){
      if(context.collision(_button.start.base,mouse)||context.collision(_button.start.text,mouse)){ _button.start.text.alpha=50; }
      else{ _button.start.text.alpha=100; }
      if(context.collision(_button.level.base,mouse)||context.collision(_button.level.text,mouse)){ _button.level.text.alpha=50; }
      else{ _button.level.text.alpha=100; }
      if(context.collision(_button.menu.base,mouse)||context.collision(_button.menu.text,mouse)){ _button.menu.text.alpha=50; }
      else{ _button.menu.text.alpha=100; }
      if(context.collision(_button.custom.base,mouse)||context.collision(_button.custom.text,mouse)){ _button.custom.text.alpha=50; }
      else{ _button.custom.text.alpha=100; }
      if(context.collision(_button.restart.base,mouse)||context.collision(_button.restart.text,mouse)){ _button.restart.text.alpha=50; }
      else{ _button.restart.text.alpha=100; }
      if(context.collision(_button.setting.base,mouse)||context.collision(_button.setting.text,mouse)){ _button.setting.text.alpha=50; }
      else{ _button.setting.text.alpha=100; }
      if(context.collision(_button.about0.base,mouse)||context.collision(_button.about0.text,mouse)){ _button.about0.text.alpha=50; }
      else{ _button.about0.text.alpha=100; }
      if(context.collision(_button.about1.base,mouse)||context.collision(_button.about1.text,mouse)){ _button.about1.text.alpha=50; }
      else{ _button.about1.text.alpha=100; }

      if(scene.value==1){
        if(context.collision(_blueprint.level.button1,mouse)){ _blueprint.level.button1.alpha=50; }
        else{ _blueprint.level.button1.alpha=100; }
        if(context.collision(_blueprint.level.button2,mouse)){ _blueprint.level.button2.alpha=50; }
        else{ _blueprint.level.button2.alpha=100; }
        if(context.collision(_blueprint.level.button3,mouse)){ _blueprint.level.button3.alpha=50; }
        else{ _blueprint.level.button3.alpha=100; }
        if(context.collision(_blueprint.level.button4,mouse)){ _blueprint.level.button4.alpha=50; }
        else{ _blueprint.level.button4.alpha=100; }
        if(context.collision(_blueprint.level.button5,mouse)){ _blueprint.level.button5.alpha=50; }
        else{ _blueprint.level.button5.alpha=100; }
        if(context.collision(_blueprint.level.button6,mouse)){ _blueprint.level.button6.alpha=50; }
        else{ _blueprint.level.button6.alpha=100; }
        if(context.collision(_blueprint.level.button7,mouse)){ _blueprint.level.button7.alpha=50; }
        else{ _blueprint.level.button7.alpha=100; }
        if(context.collision(_blueprint.level.button8,mouse)){ _blueprint.level.button8.alpha=50; }
        else{ _blueprint.level.button8.alpha=100; }
        if(context.collision(_blueprint.level.buttonF,mouse)){ _blueprint.level.buttonF.alpha=50; }
        else{ _blueprint.level.buttonF.alpha=100; }
      }
    } else{
      if(context.collision(_ui.game.heart.background,mouse)){ _ui.game.heart.background.alpha=50; }
      else{ _ui.game.heart.background.alpha=100; }
      if(context.collision(_ui.game.ammo.background,mouse)){ _ui.game.ammo.background.alpha=50; }
      else{ _ui.game.ammo.background.alpha=100; }
      if(context.collision(_ui.game.key.background,mouse)){ _ui.game.key.background.alpha=50; }
      else{ _ui.game.key.background.alpha=100; }
      if(context.collision(_ui.game.pause.background,mouse)){ _ui.game.pause.background.alpha=50; }
      else{ _ui.game.pause.background.alpha=100; }
      if(context.collision(_ui.game.info.background,mouse)){ _ui.game.info.background.alpha=50; }
      else{ _ui.game.info.background.alpha=100; }
      if(context.collision(_ui.game.notification.background,mouse)){ _ui.game.notification.background.alpha=50; }
      else{ _ui.game.notification.background.alpha=100; }
      if(context.collision(_ui.game.teacher.background,mouse)){ _ui.game.teacher.background.alpha=50; }
      else{ _ui.game.teacher.background.alpha=100; }
    }

    if(context.collision(_clipboard.back,mouse)){ _clipboard.back.hover=true; }
    else{ _clipboard.back.hover=false; }

    if(_blueprint.on){
      if(context.collision(_blueprint.back,mouse)){ _blueprint.back.hover=true; }
      else{ _blueprint.back.hover=false; }

      if(context.collision(_blueprint.left,mouse)){ _blueprint.left.hover=true; }
      else{ _blueprint.left.hover=false; }
      if(context.collision(_blueprint.right,mouse)){ _blueprint.right.hover=true; }
      else{ _blueprint.right.hover=false; }
    }
  }
});
