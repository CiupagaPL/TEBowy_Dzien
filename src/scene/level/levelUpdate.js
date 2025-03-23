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
  if(global.music&&!scene.change&&!scene.blocked||global.pauseChange){
    if(_teacher.on){
      if(audio.teacher1_music.currentTime>audio.teacher1_music.duration-0.2){
        audio.teacher1_music.load();
        audio.teacher1_music.play();
        audio.current++;

        if(audio.current>=4&&audio.current<6&&(audio.teacher2_music.paused||audio.teacher2_music.currentTime>audio.teacher2_music.duration-0.2)){
          audio.teacher2_music.load();
          audio.teacher2_music.play();
        }

        if(audio.current==6){ audio.current=0; }
      } else if(audio.teacher1_music.paused){
        audio.teacher1_music.load();
        audio.teacher1_music.play();
      }
    } else{
      if(audio.level1_music.currentTime>audio.level1_music.duration-0.2){
        audio.level1_music.load();
        audio.level1_music.play();
        audio.current++;

        if(audio.current>=3&&audio.current<6&&(audio.level2_music.paused||audio.level2_music.currentTime>audio.level2_music.duration-0.2)){
          audio.level2_music.load();
          audio.level2_music.play();
        }
        if(audio.current>=8&&audio.current<10&&(audio.level3_music.paused||audio.level3_music.currentTime>audio.level3_music.duration-0.2)){
          audio.level3_music.load();
          audio.level3_music.play();
        }

        if(audio.current==10){ audio.current=0; }
      } else if(audio.level1_music.paused){
        audio.level1_music.load();
        audio.level1_music.play();
      }
    }
  } else if(!global.music&&!global.pauseChange){
    audio.level1_music.pause();
    audio.level2_music.pause();
    audio.level3_music.pause();
    audio.teacher1_music.pause();
    audio.teacher2_music.pause();
  }

  if(_teacher.on){
    audio.level1_music.pause();
    audio.level2_music.pause();
    audio.level3_music.pause();
  } else if(_teacher.hp==0){
    audio.teacher1_music.pause();
    audio.teacher2_music.pause();
  }

  if(global.pauseChange&&global.music){
    if(_teacher.on){
      if(audio.teacher1_music.volume>0.03){ audio.teacher1_music.volume-=0.02; }
      else{ audio.teacher1_music.volume=0; }
      if(audio.teacher2_music.volume>0.03){ audio.teacher2_music.volume-=0.02; }
      else{ audio.teacher2_music.volume=0; }
    } else{
      if(audio.level1_music.volume>0.03){ audio.level1_music.volume-=0.02; }
      else{ audio.level1_music.volume=0; }
      if(audio.level2_music.volume>0.03){ audio.level2_music.volume-=0.02; }
      else{ audio.level2_music.volume=0; }
      if(audio.level3_music.volume>0.03){ audio.level3_music.volume-=0.02; }
      else{ audio.level3_music.volume=0; }
    }
  } else if((!global.pause||global.pause&&!global.pauseAnimation)&&global.music){
    if(_teacher.on){
      if(audio.teacher1_music.volume<0.25){ audio.teacher1_music.volume+=0.02; }
      else{ audio.teacher1_music.volume=0.25; }
      if(audio.teacher2_music.volume<0.1){ audio.teacher2_music.volume+=0.02; }
      else{ audio.teacher2_music.volume=0.1; }
    } else{
      if(audio.level1_music.volume<0.25){ audio.level1_music.volume+=0.02; }
      else{ audio.level1_music.volume=0.25; }
      if(audio.level2_music.volume<0.075){ audio.level2_music.volume+=0.02; }
      else{ audio.level2_music.volume=0.075; }
      if(audio.level3_music.volume<0.075){ audio.level3_music.volume+=0.02; }
      else{ audio.level3_music.volume=0.075; }
    }
  }

  _corner.globalUpdate();
  _clipboard.update();
  scene.generateLevel();

  if(_teacher.on){
    _teacher.update();
    _attack.update();
  }

  _platform.currentLenght=0;
  _corner.currentLenght=0;
  _spike.currentLenght=0;

  if(_background.base.y>=canvas.height){ _background.base.y=_background.bottom.y-canvas.height; }
  if(_background.bottom.y>=canvas.height){ _background.bottom.y=_background.base.y-canvas.height; }

  _ui.game.hp.text.value0=_player.hp+"/5";
  _ui.game.info.score.value0="Wynik: "+scene.score;
  _ui.game.info.level.value0="Poziom: "+Number(scene.value-1);
  _ui.game.teacher.text.value0=_teacher.hp+"/10";

  if(_player.invisible!=0&&!global.pause&&_player.hp>0&&_player.invisible<_player.max){ _player.invisible++; }
  else if(_player.invisible>=_player.max){ _player.invisible=0; }

  if(!global.pause&&_teacher.invisible!=0&&_player.hp>0&&_teacher.invisible<_teacher.max){ _teacher.invisible++; }
  else if(_teacher.invisible>=_teacher.max){ _teacher.invisible=0; }

  if(_player.hp==0&&!global.pause){
    if(global.sfx){ audio.lost1_sfx.play(); }

    global.autoRestart=true;
    global.pause=true;
    global.pauseAnimation=true;
    global.pauseChange=true;
  }

  if(scene.timer>=context.time(99)){
    if(!_player.gun.on){ _player.gun.timer++; }
    if(_player.gun.timer>=context.time(120)){ _player.gun.on=true; }
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
  }

  if(scene.next!=scene.value&&global.pauseChange||global.restart){ _transition.pauseEnd(); }
  if(global.pauseChange){
    if(!global.pauseAnimation){ _transition.pauseOff(); }
    else{ _transition.pauseOn(); }
  }

  if(scene.change&&_player.hp>0&&scene.next==scene.value){ _transition.sceneOn(); }
  else if(_teacher.hp==0&&!global.pause){
    if(scene.value<11){ scene.nextAuto=scene.value+1; }
    else{
      scene.next=1;
      global.menuLoad=true;
    }

    global.pause=true;
    global.pauseAnimation=true;
    global.pauseChange=true;
    scene.auto=true;
  }
}
