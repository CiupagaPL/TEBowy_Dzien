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

scene.levelUpdate=function(){
  // if(musicOn&&!tutorial){
  //   if(sceneTimer<60){
  //     musicTimer++;
  //     _audio.boss.load();
  //     if(musicTimer>=1&&musicTimer<2){
  //       _audio.game.load();
  //       _audio.game.play();
  //     } if(musicTimer>=1147){
  //       musicTimer=0;
  //     }
  //   } if(sceneTimer>=60&&sceneTimer<80){
  //     _audio.game.load();
  //     musicTimer=0;
  //   } if(sceneTimer>=80){
  //     musicTimer++;
  //     if(musicTimer>=1&&musicTimer<2){
  //       _audio.boss.load();
  //       _audio.boss.play();
  //     } if(musicTimer>=1147){
  //       musicTimer=0;
  //     }
  //   }
  // } else if(!musicOn||pause||_player.hp<=0||changeScene){
  //   _audio.game.load();
  //   _audio.boss.load();
  //   musicTimer=0;
  // }

  if(_background.base.y>=canvas.height){ _background.base.y=_background.bottom.y-canvas.height; }
  if(_background.bottom.y>=canvas.height){ _background.bottom.y=_background.base.y-canvas.height; }

  _hud.level.value0="Poziom: "+Number(scene.value-1);
  _hud.score.value0="Wynik: "+scene.score;

  _clipboard.update();

  scene.generateLevel();

  _platform.currentLenght=0;
  _corner.currentLenght=0;
  _spike.currentLenght=0;

  if(!global.pause&&_player.hp>0){ _corner.timer++; }

  if(_corner.timer==_corner.max&&!global.pause&&_player.hp>0&&global.sfx&&!_teacher.on&&!scene.win){
    // _audio.laser.load();
    // _audio.laser.play();
  } if(_corner.timer>=_corner.max+25){ _corner.timer=0; }

  if(_player.invisible!=0&&!global.pause&&_player.hp>0&&_player.invisible<_player.max){ _player.invisible++; }
  else if(_player.invisible>=_player.max){ _player.invisible=0; }

  if(!global.pause&&_teacher.invisible!=0&&_player.hp>0&&_teacher.invisible<_teacher.max){ _teacher.invisible++; }
  else if(_teacher.invisible>=_teacher.max){ _teacher.invisible=0; }

  if(_teacher.on){
    _teacher.update();
    _attack.update();
  }

  if(_player.hp==0){
    // if(global.sfx&&!scene.defeat){ _audio.die.play(); }

    scene.defeat=true;
  }

  if(scene.defeat){
    if(_player.hp==0){ _transition.sceneOff(); }
    else if(_player.hp==150){ _transition.sceneOn(); }
  }

  if(scene.timer>=99){
    if(!_player.gun.on){ _player.gun.timer++; }
    if(_player.gun.timer>=120){ _player.gun.on=true; }
  }

  if(scene.auto&&!_clipboard.on){
    scene.next=scene.nextAuto;
    scene.change=true;

    global.pauseAnimation=false;
    global.pauseChange=true;
  } if(global.autoUnpause&&!_clipboard.on){
    global.pauseChange=true;
    global.pauseAnimation=false;
  } if(global.autoRestart&&!_clipboard.on){ global.restart=true; }

  if(scene.next!=scene.value&&global.pauseChange||global.restart){ _transition.pauseEnd(); }
  if(global.pauseChange){
    if(!global.pauseAnimation){ _transition.pauseOff(); }
    else{ _transition.pauseOn(); }
  }

  if(scene.change&&_player.hp>0&&!scene.win){ _transition.sceneOn(); }
  if(scene.win){
    if(scene.value<11){ scene.next=scene.value+1; }
    else{
      scene.next=1;
      global.menuLoad=true;
    }

    scene.change=true;
    _transition.sceneOff();
  }
}

