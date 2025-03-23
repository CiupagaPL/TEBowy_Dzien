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

window.addEventListener("resize",function(){ canvas.resize=true; });

window.addEventListener("mousemove",function(event){
  mouse.x=event.clientX-((window.innerWidth-canvas.width)/2);
  mouse.y=event.clientY-((window.innerHeight-canvas.height)/2);

  if(context.collision(_resolution,mouse)){ _resolution.alpha=50; }
  else{ _resolution.alpha=100; }

  if(scene.value>=1){
    if(context.collision(_title.base,mouse)||context.collision(_title.teb,mouse)){ _title.base.alpha=50; }
    else{ _title.base.alpha=100; }

    if(context.collision(_footer.github,mouse)){ _footer.github.alpha=50; }
    else{ _footer.github.alpha=100; }
    if(context.collision(_footer.pastebin,mouse)){ _footer.pastebin.alpha=50; }
    else{ _footer.pastebin.alpha=100; }

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
      if(context.collision(_button.about.base,mouse)||context.collision(_button.about.text,mouse)){ _button.about.text.alpha=50; }
      else{ _button.about.text.alpha=100; }
      if(context.collision(_button.version.base,mouse)||context.collision(_button.version.text,mouse)){ _button.version.text.alpha=50; }
      else{ _button.version.text.alpha=100; }
    } else{
      if(context.collision(_ui.game.hp.background,mouse)){ _ui.game.hp.background.alpha=50; }
      else{ _ui.game.hp.background.alpha=100; }
      if(context.collision(_ui.game.pause.background,mouse)){ _ui.game.pause.background.alpha=50; }
      else{ _ui.game.pause.background.alpha=100; }
      if(context.collision(_ui.game.info.background,mouse)){ _ui.game.info.background.alpha=50; }
      else{ _ui.game.info.background.alpha=100; }
      if(context.collision(_ui.game.teacher.background,mouse)){ _ui.game.teacher.background.alpha=50; }
      else{ _ui.game.teacher.background.alpha=100; }
      if(context.collision(_ui.game.ammo.background,mouse)){ _ui.game.ammo.background.alpha=50; }
      else{ _ui.game.ammo.background.alpha=100; }
    }

    if(context.collision(_clipboard.back,mouse)){ _clipboard.back.hover=true; }
    else{ _clipboard.back.hover=false; }

    if(context.collision(_clipboard.wideBack,mouse)){ _clipboard.wideBack.hover=true; }
    else{ _clipboard.wideBack.hover=false; }

    if(context.collision(_blueprint.wideBack,mouse)){ _blueprint.wideBack.hover=true; }
    else{ _blueprint.wideBack.hover=false; }

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
