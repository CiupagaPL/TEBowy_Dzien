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

// window.addEventListener("visibilitychange",function(){
//   if(document.visibilityState=="visible"){
//     if(tempSfxOn){ sfxOn=true; }
//     if(tempMusicOn){ musicOn=true; }
//   } else if(document.visibilityState!="visible"){
//     sfxOn=false;
//     musicOn=false;
//     musicTimer=0;
//   } if(!pause&&scene!=0&&scene!=1){
//     pauseChange=true;
//     pause=true;
//     pauseAnimation=true;
//   }
// });

window.addEventListener("resize",function(){ canvas.resize=true; });

window.addEventListener("mousemove",function(event){
  mouse.x=event.clientX-((window.innerWidth-canvas.width)/2);
  mouse.y=event.clientY-((window.innerHeight-canvas.height)/2);

  if(context.collision(_resolution,mouse)){
    _resolution.hover=true;
    return true;
  }
  else{ _resolution.hover=false; }

  if(scene.value>=1){
    if(context.collision(_title,mouse)){
      _title.hover=true;
      return true;
    }
    else{ _title.hover=false; }

    if(scene.value==1||global.pause){
      if(context.collision(_button.start.base,mouse)){
        _button.start.hover=true;
        return true;
      }
      else{ _button.start.hover=false; }
      if(context.collision(_button.level.base,mouse)){
        _button.level.hover=true;
        return true;
      }
      else{ _button.level.hover=false; }
      if(context.collision(_button.menu.base,mouse)){
        _button.menu.hover=true;
        return true;
      }
      else{ _button.menu.hover=false; }
      if(context.collision(_button.custom.base,mouse)){
        _button.custom.hover=true;
        return true;
      }
      else{ _button.custom.hover=false; }
      if(context.collision(_button.restart.base,mouse)){
        _button.restart.hover=true;
        return true;
      }
      else{ _button.restart.hover=false; }
      if(context.collision(_button.setting.base,mouse)){
        _button.setting.hover=true;
        return true;
      }
      else{ _button.setting.hover=false; }
      if(context.collision(_button.about.base,mouse)){
        _button.about.hover=true;
        return true;
      }
      else{ _button.about.hover=false; }
      if(context.collision(_button.version.base,mouse)){
        _button.version.hover=true;
        return true;
      }
      else{ _button.version.hover=false; }
    }

    if(_clipboard.on){
      if(context.collision(_clipboard.back,mouse)){
        _clipboard.back.hover=true;
        return true;
      }
      else{ _clipboard.back.hover=false; }
    }

    if(global.currentTutorial||global.currentReward){
      if(context.collision(_clipboard.wideBack,mouse)){
        _clipboard.wideBack.hover=true;
        return true;
      }
      else{ _clipboard.wideBack.hover=false; }
    }

    if(global.currentTeacher){
      if(context.collision(_blueprint.wideBack,mouse)){
        _blueprint.wideBack.hover=true;
        return true;
      }
      else{ _blueprint.wideBack.hover=false; }
    }

    if(_blueprint.on){
      if(context.collision(_blueprint.back,mouse)){
        _blueprint.back.hover=true;
        return true;
      }
      else{ _blueprint.back.hover=false; }

      if(context.collision(_blueprint.left,mouse)){
        _blueprint.left.hover=true;
        return true;
      }
      else{ _blueprint.left.hover=false; }
      if(context.collision(_blueprint.right,mouse)){
        _blueprint.right.hover=true;
        return true;
      }
      else{ _blueprint.right.hover=false; }
    }

    if(_button.level.on){
      if(context.collision(_blueprint.level.button1,mouse)){
        _blueprint.level.button1.hover=true;
        return true;
      }
      else{ _blueprint.level.button1.hover=false; }
      if(context.collision(_blueprint.level.button2,mouse)){
        _blueprint.level.button2.hover=true;
        return true;
      }
      else{ _blueprint.level.button2.hover=false; }
      if(context.collision(_blueprint.level.button3,mouse)){
        _blueprint.level.button3.hover=true;
        return true;
      }
      else{ _blueprint.level.button3.hover=false; }
      if(context.collision(_blueprint.level.button4,mouse)){
        _blueprint.level.button4.hover=true;
        return true;
      }
      else{ _blueprint.level.button4.hover=false; }
      if(context.collision(_blueprint.level.button5,mouse)){
        _blueprint.level.button5.hover=true;
        return true;
      }
      else{ _blueprint.level.button5.hover=false; }
      if(context.collision(_blueprint.level.button6,mouse)){
        _blueprint.level.button6.hover=true;
        return true;
      }
      else{ _blueprint.level.button6.hover=false; }
      if(context.collision(_blueprint.level.button7,mouse)){
        _blueprint.level.button7.hover=true;
        return true;
      }
      else{ _blueprint.level.button7.hover=false; }
      if(context.collision(_blueprint.level.button8,mouse)){
        _blueprint.level.button8.hover=true;
        return true;
      }
      else{ _blueprint.level.button8.hover=false; }
      if(context.collision(_blueprint.level.button9,mouse)){
        _blueprint.level.button9.hover=true;
        return true;
      }
      else{ _blueprint.level.button9.hover=false; }
      if(context.collision(_blueprint.level.button10,mouse)){
        _blueprint.level.button10.hover=true;
        return true;
      }
      else{ _blueprint.level.button10.hover=false; }
    }

    if(scene.value>=2){
      if(context.collision(_hud.icon.pause,mouse)){ _hud.icon.pause.hover=true; }
      else{ _hud.icon.pause.hover=false; }
    }
  }
});

