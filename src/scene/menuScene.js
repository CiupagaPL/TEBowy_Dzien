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

  _ui.render();
  _clipboard.render();
  _blueprint.render();

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

scene.menuUpdate=function(){
  scene.time++;

  if(global.music&&audio.menu1_music.volume>=0.03){
    if(audio.menu1_music.currentTime>audio.menu1_music.duration-0.2&&audio.menu1_music.volume>=0.1){
      audio.menu1_music.load();
      audio.menu1_music.play();
      audio.current++;
      if(audio.current==5){ audio.current=0; }

      if(audio.current>=3&&(audio.menu2_music.paused||audio.menu2_music.currentTime>audio.menu2_music.duration-0.2)){
        audio.menu2_music.load();
        audio.menu2_music.play();
      }
    } else if(audio.menu1_music.paused){
      audio.menu1_music.load();
      audio.menu1_music.play();
    }
  } else{
    audio.menu1_music.pause();
    audio.menu2_music.pause();
  }

  if(scene.change){
    audio.menu1_music.volume=0;
    audio.menu2_music.volume=0;
  } else{
    audio.menu1_music.volume=0.25;
    audio.menu2_music.volume=0.15;
  }

  _background.base.x+=context.move(16)/7;
  _background.base.y-=context.move(9)/7;
  _background.bottom.x+=context.move(16)/7;
  _background.bottom.y-=context.move(9)/7;
  _background.left.x+=context.move(16)/7;
  _background.left.y-=context.move(9)/7;
  _background.bottomLeft.x+=context.move(16)/7;
  _background.bottomLeft.y-=context.move(9)/7;

  if(_background.bottomLeft.y<=context.scale(9)/7){
    _background.base.x=context.move(16)/7;
    _background.base.y=-context.move(9)/7;
    _background.bottom.x=context.move(16)/7;
    _background.bottom.y=-(context.move(9)/7)+canvas.height;
    _background.left.x=(context.move(16)/9)-canvas.width;
    _background.left.y=-context.move(9)/7;
    _background.bottomLeft.x=(context.move(16)/7)-canvas.width;
    _background.bottomLeft.y=-(context.move(9)/7)+canvas.height;
  }

  if(scene.time<context.time(20)||scene.time>=context.time(60)){
    _title.base.y+=context.move(0.25);
    _title.teb.y+=context.move(0.25);

    _button.start.base.y+=context.move(0.25);
    _button.start.text.y+=context.move(0.25);
    _button.level.base.y+=context.move(0.25);
    _button.level.text.y+=context.move(0.25);
    _button.setting.base.y+=context.move(0.25);
    _button.setting.text.y+=context.move(0.25);
    _button.about0.base.y+=context.move(0.25);
    _button.about0.text.y+=context.move(0.25);
    _button.about1.base.y+=context.move(0.25);
    _button.about1.text.y+=context.move(0.25);
    _button.custom.base.y+=context.move(0.25);
    _button.custom.text.y+=context.move(0.25);
    _button.overlay.y+=context.move(0.25);

    if(scene.time>=context.time(80)){ scene.time=0; }
  } else{
    _title.base.y-=context.move(0.25);
    _title.teb.y-=context.move(0.25);

    _button.start.base.y-=context.move(0.25);
    _button.start.text.y-=context.move(0.25);
    _button.level.base.y-=context.move(0.25);
    _button.level.text.y-=context.move(0.25);
    _button.setting.base.y-=context.move(0.25);
    _button.setting.text.y-=context.move(0.25);
    _button.about0.base.y-=context.move(0.25);
    _button.about0.text.y-=context.move(0.25);
    _button.about1.base.y-=context.move(0.25);
    _button.about1.text.y-=context.move(0.25);
    _button.custom.base.y-=context.move(0.25);
    _button.custom.text.y-=context.move(0.25);
    _button.overlay.y-=context.move(0.25);
  }

  _blueprint.update();
  _clipboard.update();

  if(scene.auto&&!_clipboard.on&&!_blueprint.on){
    scene.next=scene.nextAuto;
    scene.auto=false;
    scene.change=true;
  } if(scene.change){
    if(!global.menuLoad){ _transition.sceneOff(); }
    else{ _transition.sceneOn(); }
  }
}
