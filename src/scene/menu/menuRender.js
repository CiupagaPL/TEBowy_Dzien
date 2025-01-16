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

scene.menuRender=function(){
  if(!_background.change){
    context.render(_background.base,_background.img0);
    context.render(_background.bottom,_background.img1);
    context.render(_background.left,_background.img0);
    context.render(_background.bottomLeft,_background.img1);
  } else{
    context.render(_background.base,_background.img1);
    context.render(_background.bottom,_background.img0);
    context.render(_background.left,_background.img1);
    context.render(_background.bottomLeft,_background.img0);
  } if(!scene.change){ html.style.backgroundColor=_background.color0; }

  context.render(_ui.menu,_ui.color0);

  if(!_title.hover){ context.render(_title,_title.img0); }
  else{ context.render(_title,_title.img1); }

  if(!_button.start.hover){
    context.render(_button.start.base,_button.start.base.img0);
    context.render(_button.start.text,_button.color0,_button.start.text.value0);
  } else{
    context.render(_button.start.base,_button.start.base.img1);
    context.render(_button.start.text,_button.color1,_button.start.text.value0);
  }

  if(!_button.level.hover){
    context.render(_button.level.base,_button.level.base.img0);
    context.render(_button.level.text,_button.color0,_button.level.text.value0);
  } else{
    context.render(_button.level.base,_button.level.base.img1);
    context.render(_button.level.text,_button.color1,_button.level.text.value0);
  }

  if(!_button.custom.hover){
    context.render(_button.custom.base,_button.custom.base.img0);
    context.render(_button.custom.text,_button.color0,_button.custom.text.value0);
  } else{
    context.render(_button.custom.base,_button.custom.base.img1);
    context.render(_button.custom.text,_button.color1,_button.custom.text.value0);
  }

  if(!_button.setting.hover){
    context.render(_button.setting.base,_button.setting.base.img0);
    context.render(_button.setting.text,_button.color0,_button.setting.text.value0);
  } else{
    context.render(_button.setting.base,_button.setting.base.img1);
    context.render(_button.setting.text,_button.color1,_button.setting.text.value0);
  }

  if(!_button.about.hover){
    context.render(_button.about.base,_button.about.base.img0);
    context.render(_button.about.text,_button.color0,_button.about.text.value0);
  } else{
    context.render(_button.about.base,_button.about.base.img1);
    context.render(_button.about.text,_button.color1,_button.about.text.value0);
  }

  if(!_button.version.hover){
    context.render(_button.version.base,_button.version.base.img0);
    context.render(_button.version.text,_button.color0,_button.version.text.value0);
  } else{
    context.render(_button.version.base,_button.version.base.img1);
    context.render(_button.version.text,_button.color1,_button.version.text.value0);
  }

  if(_button.setting.animation||_button.setting.on||_button.about.animation||_button.about.on||_button.version.animation||_button.version.on){
    context.render(_clipboard.base,_clipboard.base.img0);

    if(!_clipboard.back.hover){ context.render(_clipboard.back,_clipboard.back.img0); }
    else{ context.render(_clipboard.back,_clipboard.back.img1); }

    if(_button.setting.animation||_button.setting.on){
      context.render(_clipboard.setting.title,_clipboard.color0,_clipboard.setting.title.value0);

      if(!global.sfx){ context.render(_clipboard.setting.sfx.base,_clipboard.setting.img0); }
      else{ context.render(_clipboard.setting.sfx.base,_clipboard.setting.img1); }
      context.render(_clipboard.setting.sfx.text,_clipboard.color0,_clipboard.setting.sfx.text.value0);

      if(!global.music){ context.render(_clipboard.setting.music.base,_clipboard.setting.img0); }
      else{ context.render(_clipboard.setting.music.base,_clipboard.setting.img1); }
      context.render(_clipboard.setting.music.text,_clipboard.color0,_clipboard.setting.music.text.value0);

      if(!global.tutorial){ context.render(_clipboard.setting.tutorial.base,_clipboard.setting.img0); }
      else{ context.render(_clipboard.setting.tutorial.base,_clipboard.setting.img1); }
      context.render(_clipboard.setting.tutorial.text,_clipboard.color0,_clipboard.setting.tutorial.text.value0);

      if(!global.teacher){ context.render(_clipboard.setting.teacher.base,_clipboard.setting.img0); }
      else{ context.render(_clipboard.setting.teacher.base,_clipboard.setting.img1); }
      context.render(_clipboard.setting.teacher.text,_clipboard.color0,_clipboard.setting.teacher.text.value0);

      if(!global.addon){ context.render(_clipboard.setting.addon.base,_clipboard.setting.img0); }
      else{ context.render(_clipboard.setting.addon.base,_clipboard.setting.img1); }
      context.render(_clipboard.setting.addon.text,_clipboard.color0,_clipboard.setting.addon.text.value0);
    }

    if(_button.about.animation||_button.about.on){
      context.render(_clipboard.about.title,_clipboard.color0,_clipboard.about.title.value0);
      context.render(_clipboard.about.text,_clipboard.color0,_clipboard.about.text.value0);
    }

    if(_button.version.animation||_button.version.on){
      context.render(_clipboard.version.title,_clipboard.color0,_clipboard.version.title.value0);
      context.render(_clipboard.version.text,_clipboard.color0,_clipboard.version.text.value0);
    }
  }

  if(_button.level.animation||_button.level.on||_button.custom.animation||_button.custom.on){
    if(_button.custom.on||_button.custom.animation){ context.render(_blueprint.base,_blueprint.base.img0); }
    else if(_button.level.on||_button.level.animation){ context.render(_blueprint.base,_blueprint.base.img1); }

    if(!_blueprint.back.hover){ context.render(_blueprint.back,_blueprint.back.img0); }
    else{ context.render(_blueprint.back,_blueprint.back.img1); }

    if(_button.custom.animation||_button.custom.on){
      if(_player.skin==0){ context.render(_blueprint.skin,_blueprint.skin.img0); }
      else if(_player.skin==1){ context.render(_blueprint.skin,_blueprint.skin.img1); }
      else if(_player.skin==2){ context.render(_blueprint.skin,_blueprint.skin.img2); }
      else{ context.render(_blueprint.skin,_blueprint.skin.img3); }

      if(!_blueprint.left.hover){ context.render(_blueprint.left,_blueprint.left.img0); }
      else{ context.render(_blueprint.left,_blueprint.left.img1); }

      if(!_blueprint.right.hover){ context.render(_blueprint.right,_blueprint.right.img0); }
      else{ context.render(_blueprint.right,_blueprint.right.img1); }

      context.render(_blueprint.custom.title,_blueprint.color0,_blueprint.custom.title.value0);

      context.render(_blueprint.custom.text,_blueprint.color0,_blueprint.custom.text.value0);
    }

    else if(_button.level.animation||_button.level.on){
      context.render(_blueprint.level.title,_blueprint.color0,_blueprint.level.title.value0);

      if(!_blueprint.level.button1.hover){ context.render(_blueprint.level.button1,_blueprint.color0,_blueprint.level.button1.value0); }
      else{ context.render(_blueprint.level.button1,_blueprint.color1,_blueprint.level.button1.value0); }
      if(!_blueprint.level.button2.hover){ context.render(_blueprint.level.button2,_blueprint.color0,_blueprint.level.button2.value0); }
      else{ context.render(_blueprint.level.button2,_blueprint.color1,_blueprint.level.button2.value0); }
      if(!_blueprint.level.button3.hover){ context.render(_blueprint.level.button3,_blueprint.color0,_blueprint.level.button3.value0); }
      else{ context.render(_blueprint.level.button3,_blueprint.color1,_blueprint.level.button3.value0); }
      if(!_blueprint.level.button4.hover){ context.render(_blueprint.level.button4,_blueprint.color0,_blueprint.level.button4.value0); }
      else{ context.render(_blueprint.level.button4,_blueprint.color1,_blueprint.level.button4.value0); }
      if(!_blueprint.level.button5.hover){ context.render(_blueprint.level.button5,_blueprint.color0,_blueprint.level.button5.value0); }
      else{ context.render(_blueprint.level.button5,_blueprint.color1,_blueprint.level.button5.value0); }
      if(!_blueprint.level.button6.hover){ context.render(_blueprint.level.button6,_blueprint.color0,_blueprint.level.button6.value0); }
      else{ context.render(_blueprint.level.button6,_blueprint.color1,_blueprint.level.button6.value0); }
      if(!_blueprint.level.button7.hover){ context.render(_blueprint.level.button7,_blueprint.color0,_blueprint.level.button7.value0); }
      else{ context.render(_blueprint.level.button7,_blueprint.color1,_blueprint.level.button7.value0); }
      if(!_blueprint.level.button8.hover){ context.render(_blueprint.level.button8,_blueprint.color0,_blueprint.level.button8.value0); }
      else{ context.render(_blueprint.level.button8,_blueprint.color1,_blueprint.level.button8.value0); }
      if(!_blueprint.level.button9.hover){ context.render(_blueprint.level.button9,_blueprint.color0,_blueprint.level.button9.value0); }
      else{ context.render(_blueprint.level.button9,_blueprint.color1,_blueprint.level.button9.value0); }
      if(!_blueprint.level.button10.hover){ context.render(_blueprint.level.button10,_blueprint.color0,_blueprint.level.button10.value0); }
      else{ context.render(_blueprint.level.button10,_blueprint.color1,_blueprint.level.button10.value0); }
    }
  }

  if(scene.change){
    if(!global.menuLoad){
      // if(changeTimer<=10){ _html.style.backgroundColor=_background.color3; }
      // if(changeTimer>10){ _html.style.backgroundColor=_background.color4; }

      if(_transition.timer<5){ context.render(_transition.base,_transition.base.color0); } 
      else if(_transition.timer>=5&&_transition.timer<10){ context.render(_transition.base,_transition.base.color1); }
      else{ context.render(_transition.base,_transition.base.color2); }
    } else{
      // if(_transition.timer<=50){ _html.style.backgroundColor=_background.color4; }
      // if(_transition.timer>50){ _html.style.backgroundColor=_background.color3; }

      if(_transition.timer<65){ context.render(_transition.base,_transition.base.color2); } 
      else if(_transition.timer>=65&&_transition.timer<70){ context.render(_transition.base,_transition.base.color1); }
      else{ context.render(_transition.base,_transition.base.color0); }

      if(_transition.timer<65){ context.render(_start.arrow,_start.arrow.img0); }

      if(_transition.timer<5){ context.render(_transition.text,_transition.text.color2,_transition.text.value0); }
      else if(_transition.timer>=5&&_transition.timer<10){ context.render(_transition.text,_transition.text.color1,_transition.text.value0); }
      else if(_transition.timer>=10&&_transition.timer<55){ context.render(_transition.text,_transition.text.color0,_transition.text.value0); }
      else if(_transition.timer>=55&&_transition.timer<60){ context.render(_transition.text,_transition.text.color1,_transition.text.value0); }
      else if(_transition.timer>=60&&_transition.timer<65){ context.render(_transition.text,_transition.text.color2,_transition.text.value0); }
    }
  }

  if(_resolution.hover){
    if(!document.fullscreenElement){ context.render(_resolution,_resolution.img2); }
    else{ context.render(_resolution,_resolution.img3); }
  } else{
    if(!document.fullscreenElement){ context.render(_resolution,_resolution.img0); }
    else{ context.render(_resolution,_resolution.img1); }
  }
}

