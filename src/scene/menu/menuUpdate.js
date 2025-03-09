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

scene.menuUpdate=function(){
  scene.timer++;

  // if(musicOn){
  //   musicTimer++;
  //   if(musicTimer>=1&&musicTimer<2){
  //     _audio.menu.load();
  //     _audio.menu.play();
  //   } if(musicTimer>=1107){
  //     musicTimer=0;
  //   }
  // } else if(!musicOn||changeScene){
  //   _audio.menu.load();
  //   musicTimer=0;
  // }

  if(_player.skin==0||_player.skin==2){
    _blueprint.skin.height=context.scale(122);
    _blueprint.skin.y=_blueprint.base.y+context.scale(58);
  } else if(_player.skin==1||_player.skin==3){
    _blueprint.skin.height=context.scale(113);
    _blueprint.skin.y=_blueprint.base.y+context.scale(67);
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

    if(_background.change){ _background.change=false; }
    else{ _background.change=true; }
  }

  if(scene.timer<context.time(20)||scene.timer>=context.time(60)){
    _title.base.y+=context.move(0.25);
    _title.teb.y+=context.move(0.25);

    _button.start.base.y+=context.move(0.25);
    _button.start.text.y+=context.move(0.25);
    _button.level.base.y+=context.move(0.25);
    _button.level.text.y+=context.move(0.25);
    _button.setting.base.y+=context.move(0.25);
    _button.setting.text.y+=context.move(0.25);
    _button.about.base.y+=context.move(0.25);
    _button.about.text.y+=context.move(0.25);
    _button.version.base.y+=context.move(0.25);
    _button.version.text.y+=context.move(0.25);
    _button.custom.base.y+=context.move(0.25);
    _button.custom.text.y+=context.move(0.25);

    if(scene.timer==context.time(80)){ scene.timer=0; }
  } else{
    _title.base.y-=context.move(0.25);
    _title.teb.y-=context.move(0.25);

    _button.start.base.y-=context.move(0.25);
    _button.start.text.y-=context.move(0.25);
    _button.level.base.y-=context.move(0.25);
    _button.level.text.y-=context.move(0.25);
    _button.setting.base.y-=context.move(0.25);
    _button.setting.text.y-=context.move(0.25);
    _button.about.base.y-=context.move(0.25);
    _button.about.text.y-=context.move(0.25);
    _button.version.base.y-=context.move(0.25);
    _button.version.text.y-=context.move(0.25);
    _button.custom.base.y-=context.move(0.25);
    _button.custom.text.y-=context.move(0.25);
  }

  _blueprint.update();
  _clipboard.update();

  if(scene.auto&&!_clipboard.on&&!_button.level.on&&!_button.setting.on&&!_button.about.on&&!_button.custom.on){
    scene.next=scene.nextAuto;
    scene.auto=false;
    scene.change=true;
  } if(scene.change){
    if(!global.menuLoad){ _transition.sceneOff(); }
    else{ _transition.sceneOn(); }
  }
}
