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

scene.menuRender=function(){
  context.render(_background.base,_background.img0Menu);
  context.render(_background.bottom,_background.img0Menu);
  context.render(_background.left,_background.img0Menu);
  context.render(_background.bottomLeft,_background.img0Menu);

  context.render(_ui.menu.main,_ui.color0);
  context.render(_ui.menu.left,_ui.color1);
  context.render(_ui.menu.right,_ui.color1);

  if(_title.base.alpha==100){ context.render(_title.teb,_title.teb.img0); }
  else{ context.render(_title.teb,_title.teb.img1); }
  context.render(_title.base,_title.base.img0);

  context.text(_account.name,_account.color0,_account.name.value0);
  context.render(_account.background,_account.color0);
  if(_player.skin==0){ context.render(_account.profile,_account.profile.img0); }
  else{ context.render(_account.profile,_account.profile.img1); }

  context.text(_footer.version,_footer.color0,_footer.version.value0);
  context.render(_footer.github,_footer.github.img0);
  context.render(_footer.pastebin,_footer.pastebin.img0);

  if(_button.start.text.alpha==100){ context.render(_button.start.base,_button.start.base.img0); }
  else{ context.render(_button.start.base,_button.start.base.img1); }
  context.text(_button.start.text,_button.color0,_button.start.text.value0);
  if(_button.level.text.alpha==100){ context.render(_button.level.base,_button.level.base.img0); }
  else{ context.render(_button.level.base,_button.level.base.img1); }
  context.text(_button.level.text,_button.color0,_button.level.text.value0);
  if(_button.custom.text.alpha==100){ context.render(_button.custom.base,_button.custom.base.img0); }
  else{ context.render(_button.custom.base,_button.custom.base.img1); }
  context.text(_button.custom.text,_button.color0,_button.custom.text.value0);
  if(_button.setting.text.alpha==100){ context.render(_button.setting.base,_button.setting.base.img0); }
  else{ context.render(_button.setting.base,_button.setting.base.img1); }
  context.text(_button.setting.text,_button.color0,_button.setting.text.value0);
  if(_button.about.text.alpha==100){ context.render(_button.about.base,_button.about.base.img0); }
  else{ context.render(_button.about.base,_button.about.base.img1); }
  context.text(_button.about.text,_button.color0,_button.about.text.value0);
  if(_button.version.text.alpha==100){ context.render(_button.version.base,_button.version.base.img0); }
  else{ context.render(_button.version.base,_button.version.base.img1); }
  context.text(_button.version.text,_button.color0,_button.version.text.value0);

  if(_button.setting.animation||_button.setting.on||_button.about.animation||_button.about.on||_button.version.animation||_button.version.on){
    context.render(_clipboard.base,_clipboard.base.img0);
    if(!_clipboard.back.hover){ context.render(_clipboard.back,_clipboard.back.img0); }
    else{ context.render(_clipboard.back,_clipboard.back.img1); }

    if(_button.setting.animation||_button.setting.on){
      context.text(_clipboard.title,"rgb(0,0,0)",_clipboard.title.value0);
      context.render(_clipboard.icon,_clipboard.icon.img0);

      if(!global.sfx){ context.render(_clipboard.setting.sfx.base,_clipboard.setting.img0); }
      else{ context.render(_clipboard.setting.sfx.base,_clipboard.setting.img1); }
      context.text(_clipboard.setting.sfx.text,"rgb(0,0,0)",_clipboard.setting.sfx.text.value0);
      if(!global.music){ context.render(_clipboard.setting.music.base,_clipboard.setting.img0); }
      else{ context.render(_clipboard.setting.music.base,_clipboard.setting.img1); }
      context.text(_clipboard.setting.music.text,"rgb(0,0,0)",_clipboard.setting.music.text.value0);
      if(!global.tutorial){ context.render(_clipboard.setting.tutorial.base,_clipboard.setting.img0); }
      else{ context.render(_clipboard.setting.tutorial.base,_clipboard.setting.img1); }
      context.text(_clipboard.setting.tutorial.text,"rgb(0,0,0)",_clipboard.setting.tutorial.text.value0);
      if(!global.teacher){ context.render(_clipboard.setting.teacher.base,_clipboard.setting.img0); }
      else{ context.render(_clipboard.setting.teacher.base,_clipboard.setting.img1); }
      context.text(_clipboard.setting.teacher.text,"rgb(0,0,0)",_clipboard.setting.teacher.text.value0);
      if(!global.addon){ context.render(_clipboard.setting.addon.base,_clipboard.setting.img0); }
      else{ context.render(_clipboard.setting.addon.base,_clipboard.setting.img1); }
      context.text(_clipboard.setting.addon.text,"rgb(0,0,0)",_clipboard.setting.addon.text.value0);
    } else if(_button.about.animation||_button.about.on){
      context.render(_clipboard.icon,_clipboard.icon.img1);
      context.text(_clipboard.title,"rgb(0,0,0)",_clipboard.title.value1);
      context.text(_clipboard.text,"rgb(0,0,0)",_clipboard.text.value0);
    } else if(_button.version.animation||_button.version.on){
      context.render(_clipboard.icon,_clipboard.icon.img2);
      context.text(_clipboard.title,"rgb(0,0,0)",_clipboard.title.value2);
      context.text(_clipboard.text,"rgb(0,0,0)",_clipboard.text.value1);
    }
  }

  if(_button.level.animation||_button.level.on||_button.custom.animation||_button.custom.on){
    if(_button.custom.on||_button.custom.animation){ context.render(_blueprint.base,_blueprint.base.img0); }
    else if(_button.level.on||_button.level.animation){ context.render(_blueprint.base,_blueprint.base.img1); }
    if(!_blueprint.back.hover){ context.render(_blueprint.back,_blueprint.back.img0); }
    else{ context.render(_blueprint.back,_blueprint.back.img1); }

    if(_button.level.animation||_button.level.on){
      context.text(_blueprint.title,"rgb(255,255,255)",_blueprint.title.value0);
      context.render(_blueprint.icon,_blueprint.icon.img0);

      context.text(_blueprint.level.button1,"rgb(255,255,255)",_blueprint.level.button1.value0);
      context.text(_blueprint.level.button2,"rgb(255,255,255)",_blueprint.level.button2.value0);
      context.text(_blueprint.level.button3,"rgb(255,255,255)",_blueprint.level.button3.value0);
      context.text(_blueprint.level.button4,"rgb(255,255,255)",_blueprint.level.button4.value0);
      context.text(_blueprint.level.button5,"rgb(255,255,255)",_blueprint.level.button5.value0);
      context.text(_blueprint.level.button6,"rgb(255,255,255)",_blueprint.level.button6.value0);
      context.text(_blueprint.level.button7,"rgb(255,255,255)",_blueprint.level.button7.value0);
      context.text(_blueprint.level.button8,"rgb(255,255,255)",_blueprint.level.button8.value0);
      context.text(_blueprint.level.button9,"rgb(255,255,255)",_blueprint.level.button9.value0);
      context.text(_blueprint.level.button10,"rgb(255,255,255)",_blueprint.level.button10.value0);
    } else if(_button.custom.animation||_button.custom.on){
      context.text(_blueprint.title,"rgb(255,255,255)",_blueprint.title.value1);
      context.text(_blueprint.text,"rgb(255,255,255)",_blueprint.text.value0);
      context.render(_blueprint.icon,_blueprint.icon.img1);

      if(_player.skin==0){ context.render(_blueprint.skin,_blueprint.skin.img0); }
      else if(_player.skin==1){ context.render(_blueprint.skin,_blueprint.skin.img1); }
      else if(_player.skin==2){ context.render(_blueprint.skin,_blueprint.skin.img2); }
      else{ context.render(_blueprint.skin,_blueprint.skin.img3); }

      if(!_blueprint.left.hover){ context.render(_blueprint.left,_blueprint.left.img0); }
      else{ context.render(_blueprint.left,_blueprint.left.img1); }
      if(!_blueprint.right.hover){ context.render(_blueprint.right,_blueprint.right.img0); }
      else{ context.render(_blueprint.right,_blueprint.right.img1); }
    }
  }

  if(scene.change){
    if(!global.menuLoad){
      html.classList.remove("red-blue");
      html.classList.remove("black-blue");
      html.classList.add("blue-black");
    } else{
      html.classList.remove("cyan-black");
      html.classList.remove("red-black");
      html.classList.add("black-blue");
    }

    context.render(_transition.base,_transition.color0);
    context.render(_transition.top,_transition.img0);
    context.render(_transition.bottom,_transition.img1);
    context.text(_transition.text,"rgb(255,255,255)",_transition.text.value0);

    if(_indicator.timer<context.time(5)){ context.render(_indicator,_indicator.img0); }
    else if(_indicator.timer>=context.time(5)&&_indicator.timer<context.time(10)){ context.render(_indicator,_indicator.img1); }
    else if(_indicator.timer>=context.time(10)&&_indicator.timer<context.time(15)){ context.render(_indicator,_indicator.img2); }
    else if(_indicator.timer>=context.time(15)&&_indicator.timer<context.time(20)){ context.render(_indicator,_indicator.img3); }
    else if(_indicator.timer>=context.time(20)&&_indicator.timer<context.time(25)){ context.render(_indicator,_indicator.img4); }
    else if(_indicator.timer>=context.time(25)&&_indicator.timer<context.time(30)){ context.render(_indicator,_indicator.img5); }
    else{ context.render(_indicator,_indicator.img0Resolution); }
  } else{
    if(!document.fullscreenElement){ context.render(_indicator,_indicator.img0Resolution); }
    else{ context.render(_indicator,_indicator.img1Resolution); }
  }
}
