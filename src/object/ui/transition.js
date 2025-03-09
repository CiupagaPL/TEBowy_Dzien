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

_transition.sceneOff=function(){
  _transition.timer++;

  scene.blocked=true;
  scene.change=true;

  if(_transition.timer>=context.time(15)){
    // audio.timer=0;
    _transition.timer=0;
    scene.timer=0;

    if(_player.hp==0){
      scene.next=scene.value;
      _player.hp=150;
    } scene.value=scene.next;

    _transition.base.alpha=100;
    if(scene.value==1){ _transition.text.value0="   Menu"; }
    else{ _transition.text.value0="Poziom "+Number(scene.value-1); }
  }
}

_transition.sceneOn=function(){
  _transition.timer++;
  global.pause=true;

  if(_transition.timer==1){
    scene.resetLevel();
    context.default();
    scene.generateLevel();

    // _audio.menu.load();
    // _audio.game.load();
    // _audio.boss.load();
    // audio.timer=0;
  }

  if(_transition.timer>=context.time(75)){
    _transition.timer=0;

    scene.blocked=false;
    scene.change=false;

    if(scene.value==1){ global.menuLoad=false; }
    else{
      if(global.tutorial){
        global.pauseAnimation=true;
        global.pause=true;
        global.pauseChange=true;
        global.currentTutorial=true;
      } else{
        global.pauseChange=false;
        global.pause=false;
        global.autoUnpause=false;
        global.currentTutorial=false;
      }
    }
  }
}

_transition.pauseOff=function(){
  _transition.timer++;
  scene.blocked=true;

  if(_transition.timer>=context.time(10)){
    _transition.timer=0;
    _transition.base.alpha=0;

    scene.blocked=false;
    global.pauseChange=false;
    global.pause=false;
    global.autoUnpause=false;
    if(global.currentTutorial){
      global.currentTutorial=false;
      global.tutorial=false;
    } if(global.currentTeacher){ global.currentTeacher=false; }
  }
}

_transition.pauseOn=function(){
  _transition.timer++;

  scene.blocked=true;
  global.pause=true;

  if(_transition.timer>=context.time(10)){
    _transition.timer=0;
    // audio.timer=0;

    scene.blocked=false;
    global.pauseChange=false;

    keyDown.up=false;
    keyDown.down=false;
    keyDown.left=false;
    keyDown.right=false;

    _player.vx=0;
    _transition.base.alpha=50;
    if(_player.cloud){ _player.vy=0; }
  }
}

_transition.pauseEnd=function(){
  _transition.timer++;

  scene.blocked=true;

  if(_transition.timer>=context.time(5)){
    // audio.timer=0;
    _transition.timer=0;
    scene.timer=0;

    global.pause=false;
    global.pauseChange=false;
    global.changeScene=true;
    global.autoScene=false;
    if(scene.next==1){ global.menuLoad=true; }
    global.restart=false;
    global.autoRestart=false;

    scene.value=scene.next;

    if(scene.value==1){ _transition.text.value0="   Menu"; }
    else{ _transition.text.value0="Poziom "+Number(scene.value-1); }
  }
}
