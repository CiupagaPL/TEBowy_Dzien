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

scene.levelUpdate=function(){
  if(global.music&&!scene.change&&!scene.blocked&&!global.pause){
    if(scene.teacher&&scene.timer>=context.time(60)){
      if(audio.teacher_music.currentTime>audio.teacher_music.duration-0.2){
        audio.teacher_music.load();
        audio.teacher_music.play();
      } else if(audio.teacher_music.paused){
        audio.teacher_music.load();
        audio.teacher_music.play();
      }
    } else if(!scene.teacher){
      if(audio.level1_music.currentTime>audio.level1_music.duration-0.2){
        audio.level1_music.load();
        audio.level1_music.play();
        audio.current++;
        if(audio.current==9){ audio.current=0; }

        if(audio.current>=3&&audio.current<5&&(audio.level2_music.paused||audio.level2_music.currentTime>audio.level2_music.duration-0.2)){
          audio.level2_music.load();
          audio.level2_music.play();
        } else if(audio.current==5){ audio.level2_music.pause(); }
        if(audio.current>=7&&audio.current<9&&(audio.level3_music.paused||audio.level3_music.currentTime>audio.level3_music.duration-0.2)){
          audio.level3_music.load();
          audio.level3_music.play();
        } else if(audio.current==0){ audio.level3_music.pause(); }
      } else if(audio.level1_music.paused){
        audio.level1_music.load();
        audio.level1_music.play();
      }
    }
  } else if(!global.music||global.pause||scene.change||scene.blocked){
    audio.level1_music.pause();
    audio.level2_music.pause();
    audio.level3_music.pause();
    audio.teacher_music.pause();
  } if(scene.teacher){
    audio.level1_music.pause();
    audio.level2_music.pause();
    audio.level3_music.pause();
  } else if(_teacher.hp==0){ audio.teacher_music.pause(); }
  if(global.pauseChange&&global.music){
    if(scene.teacher){ audio.teacher_music.volume=0; }
    else{
      audio.level1_music.volume=0;
      audio.level2_music.volume=0;
      audio.level3_music.volume=0;
    }
  } else if((!global.pause||global.pause&&!global.pauseAnimation)&&global.music){
    if(scene.teacher){ audio.teacher_music.volume=0.25; }
    else{
      audio.level1_music.volume=0.25;
      audio.level2_music.volume=0.075;
      audio.level3_music.volume=0.075;
    }
  }

  _clipboard.update();
  _ui.update();
  scene.generateLevel();

  if(scene.teacher){
    _teacher.update();
    _attack.update();
  }

  _platform.currentLenght=0;
  _corner.currentLenght=0;
  _foreground.currentLenght=0;
  _decoration.currentLenght=0;
  _tebox.currentLenght=0;
  _spike.currentLenght=0;

  _loot.iy+=scene.vy;
  _loot.y+=scene.vy;
  _loot.x+=scene.vx;

  if(_loot.current!=-1&&!global.pause&&_player.hp>0){
    _loot.timer++;

    if(_loot.timer<=context.time(30)){
      _loot.y-=context.move(4);
      if(_loot.timer>=context.time(15)){ _loot.alpha-=context.frame(10); }
    } else{
      _loot.y=_loot.iy;
      _loot.timer=0;
      _loot.alpha=0;
      _loot.current=-1;
    }
  }

  if(_platform.move&&_player.hp>0&&!global.pause){
    if(_platform.up){ scene.vy=context.move(4); }
    else{ scene.vy=-context.move(4); }
  } else{ scene.vy=0; }

  if(_corner.timer==context.time(70)&&!scene.teacher&&!global.pause&&_player.hp>0&&global.sfx){
    if(audio.laser==0){
      audio.laser_sfx.play();
      audio.laser++;
    } else{
      audio.laser_alt.play();
      audio.laser=0;
    }
  }

  if(!global.pause&&!scene.load&&!scene.teacher){
    if(_background.base.y>=canvas.height){ _background.base.y=_background.bottom.y-canvas.height; }
    else if(_background.base.y+context.scale(360)<0){ _background.base.y=_background.bottom.y+canvas.height; }
    if(_background.bottom.y>=canvas.height){ _background.bottom.y=_background.base.y-canvas.height; }
    else if(_background.bottom.y+context.scale(360)<0){ _background.bottom.y=_background.base.y+canvas.height; }
    if(_background.left.y>=canvas.height){ _background.left.y=_background.bottomLeft.y-canvas.height; }
    else if(_background.left.y+context.scale(360)<0){ _background.left.y=_background.bottomLeft.y+canvas.height; }
    if(_background.bottomLeft.y>=canvas.height){ _background.bottomLeft.y=_background.left.y-canvas.height; }
    else if(_background.bottomLeft.y+context.scale(360)<0){ _background.bottomLeft.y=_background.left.y+canvas.height; }

    if(_background.base.x>context.scale(640)){ _background.base.x-=context.scale(1280); }
    else if(_background.base.x+context.scale(640)<0){ _background.base.x+=context.scale(1280); }
    if(_background.bottom.x>context.scale(640)){ _background.bottom.x-=context.scale(1280); }
    else if(_background.bottom.x+context.scale(640)<0){ _background.bottom.x+=context.scale(1280); }
    if(_background.left.x>context.scale(640)){ _background.left.x-=context.scale(1280); }
    else if(_background.left.x+context.scale(640)<0){ _background.left.x+=context.scale(1280); }
    if(_background.bottomLeft.x>context.scale(640)){ _background.bottomLeft.x-=context.scale(1280); }
    else if(_background.bottomLeft.x+context.scale(640)<0){ _background.bottomLeft.x+=context.scale(1280); }

    _background.base.y+=scene.vy;
    _background.bottom.y+=scene.vy;
    _background.left.y+=scene.vy;
    _background.bottomLeft.y+=scene.vy;
    _background.base.x+=scene.vx;
    _background.bottom.x+=scene.vx;
    _background.left.x+=scene.vx;
    _background.bottomLeft.x+=scene.vx;
  }

  _ui.game.heart.text.value0=_player.hp+"/5";
  _ui.game.info.score.value0="Wynik: "+scene.score;
  if(scene.value<=10&&scene.value!=scene.count){ _ui.game.info.level.value0="Poziom: 0"+Number(scene.value-1); }
  else if(scene.value>10&&scene.value!=scene.count){ _ui.game.info.level.value0="Poziom: "+Number(scene.value-1); }
  else{ _ui.game.info.level.value0="Finał"; }
  if(_teacher.hp<10){ _ui.game.teacher.text.x=context.scale(611); }
  else{ _ui.game.teacher.text.x=context.scale(609); }
  _ui.game.teacher.text.value0=_teacher.hp+"/30";
  if(_player.gun.type==0){
    _ui.game.ammo.text.value0="∞";
    _ui.game.ammo.text.size=context.scale(16);
    _ui.game.ammo.text.x=context.scale(577);
  } else if(_player.gun.type==1){
    _ui.game.ammo.text.value0=String(_player.gun.ammo1);
    _ui.game.ammo.text.size=context.scale(13);
    if(_player.gun.ammo1<=9&&_player.gun.ammo1!=1){ _ui.game.ammo.text.x=context.scale(580); }
    else if(_player.gun.ammo1==1){ _ui.game.ammo.text.x=context.scale(581); }
    else if(_player.gun.ammo1>9){ _ui.game.ammo.text.x=context.scale(578); }
  } else{
    _ui.game.ammo.text.value0=String(_player.gun.ammo2);
    if(_player.gun.ammo2<=9&&_player.gun.ammo2!=1){ _ui.game.ammo.text.x=context.scale(580); }
    else if(_player.gun.ammo2==1){ _ui.game.ammo.text.x=context.scale(581); }
    else if(_player.gun.ammo2>9){ _ui.game.ammo.text.x=context.scale(578); }
  }

  if(_player.hp==0&&!global.pause){
    if(global.sfx){ audio.lost1_sfx.play(); }
    global.restart=true;
    scene.change=true;
    _player.hp=5;
  }

  if(scene.auto&&!_clipboard.on&&!global.pauseChange){
    scene.next=scene.nextAuto;
    scene.change=true;
    global.pauseAnimation=false;
    global.pauseChange=true;
  } if(global.autoUnpause&&!_clipboard.on){
    global.pauseChange=true;
    global.pauseAnimation=false;
  } if(global.autoRestart&&!_clipboard.on&&!global.pauseChange){
    global.restart=true;
    scene.change=true;
    _player.hp=5;
  } if(scene.next!=scene.value&&global.pauseChange){ _transition.sceneOff(); }
  else if(global.pauseChange){
    if(!global.pauseAnimation){ _transition.pauseOff(); }
    else{ _transition.pauseOn(); }
  } if(scene.change&&_player.hp>0&&scene.next==scene.value||scene.load){ _transition.sceneOn(); }
  else if(_teacher.hp==0&&!global.pause&&(scene.timer>=context.time(380)&&scene.value!=scene.count||scene.timer>=context.time(390)&&scene.value==scene.count)){
    if(scene.value<scene.count){ scene.nextAuto=scene.value+1; }
    else{
      scene.nextAuto=1;
      global.menuLoad=true;
      scene.change=true;
    } scene.auto=true;
  }
}
