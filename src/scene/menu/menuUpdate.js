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
    _blueprint.skin.height=122*canvas.scale;
    _blueprint.skin.y=_blueprint.base.y+(58*canvas.scale);
  } else if(_player.skin==1||_player.skin==3){
    _blueprint.skin.height=113*canvas.scale;
    _blueprint.skin.y=_blueprint.base.y+(67*canvas.scale);
  }

  _background.base.x+=(16*canvas.scale)/7;
  _background.base.y-=(9*canvas.scale)/7;
  _background.bottom.x+=(16*canvas.scale)/7;
  _background.bottom.y-=(9*canvas.scale)/7;
  _background.left.x+=(16*canvas.scale)/7;
  _background.left.y-=(9*canvas.scale)/7;
  _background.bottomLeft.x+=(16*canvas.scale)/7;
  _background.bottomLeft.y-=(9*canvas.scale)/7;

  if(_background.bottomLeft.x<=(16*canvas.scale)/7&&_background.bottomLeft.y<=(9*canvas.scale)/7){
    _background.base.x=0;
    _background.base.y=0;
    _background.bottom.x=0;
    _background.bottom.y=canvas.height;
    _background.left.x=-canvas.width;
    _background.left.y=0;
    _background.bottomLeft.x=-canvas.width;
    _background.bottomLeft.y=canvas.height;

    if(_background.change){ _background.change=false; }
    else{ _background.change=true; }
  }

  if(scene.timer==10||scene.timer==20||scene.timer==70||scene.timer==80){
    _title.y+=2*canvas.scale;

    _button.start.base.y+=2*canvas.scale;
    _button.start.text.y+=2*canvas.scale;

    _button.level.base.y+=2*canvas.scale;
    _button.level.text.y+=2*canvas.scale;

    _button.setting.base.y+=2*canvas.scale;
    _button.setting.text.y+=2*canvas.scale;

    _button.about.base.y+=2*canvas.scale;
    _button.about.text.y+=2*canvas.scale;

    _button.version.base.y+=2*canvas.scale;
    _button.version.text.y+=2*canvas.scale;

    _button.custom.base.y+=2*canvas.scale;
    _button.custom.text.y+=2*canvas.scale;

    if(scene.timer==80){ scene.timer=0; }
  } else if(scene.timer==30||scene.timer==40||scene.timer==50||scene.timer==60){
    _title.y-=2*canvas.scale;

    _button.start.base.y-=2*canvas.scale;
    _button.start.text.y-=2*canvas.scale;

    _button.level.base.y-=2*canvas.scale;
    _button.level.text.y-=2*canvas.scale;

    _button.setting.base.y-=2*canvas.scale;
    _button.setting.text.y-=2*canvas.scale;

    _button.about.base.y-=2*canvas.scale;
    _button.about.text.y-=2*canvas.scale;

    _button.version.base.y-=2*canvas.scale;
    _button.version.text.y-=2*canvas.scale;

    _button.custom.base.y-=2*canvas.scale;
    _button.custom.text.y-=2*canvas.scale;
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

