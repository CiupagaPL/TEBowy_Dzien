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
  context.render(_background.base,_background.imgMenu);
  context.render(_background.bottom,_background.imgMenu);
  context.render(_background.left,_background.imgMenu);
  context.render(_background.bottomLeft,_background.imgMenu);

  context.render(_ui.menu.main,"rgb(0,0,65)");
  context.render(_ui.menu.left,"rgb(255,255,255)");
  context.render(_ui.menu.right,"rgb(255,255,255)");

  if(_title.base.alpha==100){ context.render(_title.teb,_title.teb.imgOff); }
  else{ context.render(_title.teb,_title.teb.imgOn); }
  context.render(_title.base,_title.base.img);

  context.text(_account.name,"rgb(255,255,255)",_account.name.value);
  context.render(_account.background,"rgb(255,255,255)");
  if(_player.skin==0){ context.render(_account.profile,_account.profile.img0); }
  else{ context.render(_account.profile,_account.profile.img1); }

  context.text(_footer.version,"rgb(255,255,255)",_footer.version.value);
  context.render(_footer.github,_footer.imgGit);
  context.render(_footer.pastebin,_footer.imgPaste);

  if(_button.start.text.alpha==100){ context.render(_button.start.base,_button.start.base.imgOff); }
  else{ context.render(_button.start.base,_button.start.base.imgOn); }
  context.text(_button.start.text,"rgb(255,255,255)",_button.start.text.value);
  if(_button.level.text.alpha==100){ context.render(_button.level.base,_button.level.base.imgOff); }
  else{ context.render(_button.level.base,_button.level.base.imgOn); }
  context.text(_button.level.text,"rgb(255,255,255)",_button.level.text.value);
  if(_button.custom.text.alpha==100){ context.render(_button.custom.base,_button.custom.base.imgOff); }
  else{ context.render(_button.custom.base,_button.custom.base.imgOn); }
  context.text(_button.custom.text,"rgb(255,255,255)",_button.custom.text.value);
  if(_button.setting.text.alpha==100){ context.render(_button.setting.base,_button.setting.base.imgOff); }
  else{ context.render(_button.setting.base,_button.setting.base.imgOn); }
  context.text(_button.setting.text,"rgb(255,255,255)",_button.setting.text.value);
  if(_button.about0.text.alpha==100){ context.render(_button.about0.base,_button.about0.base.imgOff); }
  else{ context.render(_button.about0.base,_button.about0.base.imgOn); }
  context.text(_button.about0.text,"rgb(255,255,255)",_button.about0.text.value);
  if(_button.about1.text.alpha==100){ context.render(_button.about1.base,_button.about1.base.imgOff); }
  else{ context.render(_button.about1.base,_button.about1.base.imgOn); }
  context.text(_button.about1.text,"rgb(255,255,255)",_button.about1.text.value);

  if(_button.setting.animation||_button.setting.on||_button.about0.animation||_button.about0.on||_button.about1.animation||_button.about1.on){
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
    } else if(_button.about0.animation||_button.about0.on){
      context.render(_clipboard.icon,_clipboard.icon.img1);
      context.text(_clipboard.title,"rgb(0,0,0)",_clipboard.title.value1);
      context.text(_clipboard.text,"rgb(0,0,0)",_clipboard.text.value0);
    } else if(_button.about1.animation||_button.about1.on){
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
      context.text(_blueprint.level.buttonF,"rgb(255,255,255)",_blueprint.level.buttonF.value0);
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
    if(!canvas.error){
      if(!global.menuLoad){
        html.classList.remove("red-blue");
        html.classList.remove("black-blue");
        html.classList.add("blue-black");
      } else{
        html.classList.remove("cyan-black");
        html.classList.remove("red-black");
        html.classList.add("black-blue");
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
  } else{
    if(!document.fullscreenElement){ context.render(_indicator,_indicator.imgMax); }
    else{ context.render(_indicator,_indicator.imgMin); }
  }
}
