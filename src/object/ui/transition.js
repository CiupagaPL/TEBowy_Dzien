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
  scene.blocked=true;
  scene.change=true;
  _indicator.timer++;
  _indicator.alpha=100;
  if(_indicator.timer>=context.time(35)){ _indicator.timer=0; }

  _transition.base.y+=context.move(20);
  _transition.top.y+=context.move(20);
  _transition.bottom.y+=context.move(20);
  _transition.text.y+=context.move(20);

  if(scene.next==1){
    _transition.text.value0="Menu Główne";
    _transition.text.x=context.scale(225);
  } else{
    if(scene.next<=10){ _transition.text.value0="Poziom 0"+String(Number(scene.next-1)); }
    else{ _transition.text.value0="Poziom "+String(Number(scene.next-1)); } 
    _transition.text.x=context.scale(250);
  }

  if(_transition.base.y>=context.scale(8)){
    _transition.base.y=context.scale(2);
    _transition.top.y=-canvas.height+context.scale(4);
    _transition.bottom.y=canvas.height;
    _transition.text.y=context.scale(175);

    scene.timer=0;
    audio.current=0;

    if(scene.value==1){
      global.gameLoad=true;
      if(_player.hp==0){
        scene.next=scene.value;
        _player.hp=5;
      } scene.value=scene.next;
    } else{
      global.pause=false;
      global.pauseChange=false;
      global.changeScene=true;
      global.autoScene=false;
      global.menuLoad=true;
      scene.value=scene.next;
      _transition.overlay.alpha=0;
    }
  }
}

_transition.sceneOn=function(){
  global.pause=true;
  _indicator.timer++;
  _indicator.alpha=100;
  if(_indicator.timer>=context.time(35)){ _indicator.timer=0; }

  if(_transition.base.y>=-context.scale(8)&&_transition.base.y<context.scale(8)){
    scene.resetLevel();
    context.default();
    scene.generateLevel();
	global.load=false;
  } if(_transition.base.y>=-context.scale(8)){ global.load=false; }
  else if(_transition.base.y<-context.scale(8)&&global.restart){ global.load=true; }

  _transition.base.y+=context.move(20);
  _transition.top.y+=context.move(20);
  _transition.bottom.y+=context.move(20);
  _transition.text.y+=context.move(20);

  if(_transition.top.y>=context.scale(290)&&scene.value>=2){ _indicator.alpha=0; }
  if(_transition.top.y>=context.scale(340)){
    _transition.base.y=-(canvas.height*2)+context.scale(2);
    _transition.top.y=-(canvas.height*3)+context.scale(4);
    _transition.bottom.y=-canvas.height;
    _transition.text.y=-context.scale(550);

    scene.change=false;
    scene.blocked=false;
    audio.current=0;
    _indicator.timer=0;

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
      global.gameLoad=false;
      global.restart=false;
      global.autoRestart=false;
      _transition.overlay.alpha=0;
    }
  }
}

_transition.pauseOff=function(){
  scene.blocked=true;
  _transition.overlay.alpha-=context.frame(5);

  if(_transition.overlay.alpha<=0){
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
  scene.blocked=true;
  global.pause=true;
  _transition.overlay.alpha+=context.frame(5);

  if(_transition.overlay.alpha>=60){
    scene.blocked=false;
    global.pauseChange=false;
    keyDown.up=false;
    keyDown.down=false;
    keyDown.left=false;
    keyDown.right=false;

    _player.vx=0;
    _transition.overlay.alpha=60;
    if(_player.cloud){ _player.vy=0; }
  }
}
