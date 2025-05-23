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

context.collision=function(object0,object1){
  if(object0.size==undefined){
    return object0.x<object1.x+object1.width&&
           object0.x+object0.width>object1.x&&
           object0.y<object1.y+object1.height&&
           object0.y+object0.height>object1.y;
  } else{
    return object0.x<object1.x+object1.width&&
           object0.x+object0.width>object1.x&&
           object0.y-object0.size<object1.y+object1.height&&
           object0.y+(object0.size*(object0.line-1))>object1.y;
  }
}

context.scale=function(value){ return value*canvas.scale; }
context.time=function(value){ return Math.round(value*canvas.timeScale); }
context.frame=function(value){ return Math.round(value/canvas.timeScale); }
context.move=function(value){ return Math.floor((context.scale(value)/canvas.timeScale)*100)/100; }
context.limit=function(value){ return Math.round(Math.floor(((value*canvas.timeScale)/canvas.prevTimeScale)*100)/100); }

context.setup=function(object){
  if(object.x!=undefined&&object.y!=undefined){
    object.x=Math.round((context.scale(object.x)/canvas.prevScale)*100)/100;
    object.y=Math.round((context.scale(object.y)/canvas.prevScale)*100)/100;
  }

  if(object.width!=undefined){ object.width=Math.round((context.scale(object.width)/canvas.prevScale)*100)/100; }
  if(object.height!=undefined){ object.height=Math.round((context.scale(object.height)/canvas.prevScale)*100)/100; }
  if(object.size!=undefined){ object.size=Math.round((context.scale(object.size)/canvas.prevScale)*100)/100; }
}

context.render=function(object,fill){
  if(object.alpha==undefined){ context.globalAlpha=1; }
  else{
    if(object.alpha>100){ object.alpha=100; }
    else if(object.alpha<0){ object.alpha=0; }
    context.globalAlpha=object.alpha/100;
  }

  if(Array.from(fill)[0]==null){
    if(object.rotation==undefined||object.rotation==0){
      if(object.width==undefined||object.height==undefined){ context.drawImage(fill,object.x,object.y,canvas.width,canvas.height); }
      else{ context.drawImage(fill,object.x,object.y,object.width,object.height); }
    } else{
      if(object.rotation>360){ object.rotation-=360; }
      context.save();
      context.translate(object.x+(object.width/2),object.y+(object.height/2));
      context.rotate(object.rotation*3.14/180);
      context.drawImage(fill,-object.width/2,-object.height/2,object.width,object.height);
      context.restore();
    }
  } else{
    context.fillStyle=fill;

    if(object.rotation==undefined||object.rotation==0){
      if(object.width==undefined||object.height==undefined){ context.fillRect(object.x,object.y,canvas.width,canvas.height); }
      else{ context.fillRect(object.x,object.y,object.width,object.height); }
    } else{
      if(object.rotation>360){ object.rotation-=360; }
      context.save();
      context.translate(object.x+(object.width/2),object.y+(object.height/2));
      context.rotate(object.rotation*3.14/180);
      context.fillRect(-object.width/2,-object.height/2,object.width,object.height);
      context.restore();
    }
  }
}

context.text=function(object,fill,value){
  if(object.alpha==undefined){ context.globalAlpha=1; }
  else{
    if(object.alpha>100){ object.alpha=100; }
    if(object.alpha<0){ object.alpha=0; }
    context.globalAlpha=object.alpha/100;
  }
  context.fillStyle=fill;
  context.font=object.size+"px orangeKid";

  if(object.rotation==undefined||object.rotation==0){
    value.split("\n").forEach((line,current)=>{ context.fillText(line,object.x,object.y+(current*object.size),canvas.width); });
  } else{
    if(object.rotation>360){ object.rotation-=360; }

    context.save();
    context.translate(object.x+(object.size/2),object.y+(object.size/2));
    context.rotate(object.rotation*3.14/180);
    value.split("\n").forEach((line,current)=>{ context.fillText(line,-object.x/2,-object.y/2+(current*object.size),canvas.width); });
    context.restore();
  }
}

context.default=function(){
  _title.base.y=context.scale(28);
  _title.teb.y=context.scale(28);
  _button.start.base.y=context.scale(150);
  _button.start.text.y=context.scale(168);
  _button.level.base.y=context.scale(214);
  _button.level.text.y=context.scale(232);
  _button.custom.base.y=context.scale(278);
  _button.custom.text.y=context.scale(296);
  _button.setting.base.y=context.scale(150);
  _button.setting.text.y=context.scale(178);
  _button.about0.base.y=context.scale(214);
  _button.about0.text.y=context.scale(232);
  _button.about1.base.y=context.scale(278);
  _button.about1.text.y=context.scale(296);
  if(scene.value==1){ _button.start.text.value="Rozpocznij\nNową Grę"; }
  else{ _button.start.text.value="Kontynuuj\nRozgrywkę"; }

  if(scene.value<2){
    _background.base.y=0;
    _background.bottom.y=canvas.height;
    _background.left.y=0;
    _background.bottomLeft.y=canvas.height;
  } else{
    _background.base.y=-context.scale(16);
    _background.bottom.y=canvas.height-context.scale(16);
    _background.left.y=-context.scale(16);
    _background.bottomLeft.y=canvas.height-context.scale(16);
  }
  _background.base.x=0;
  _background.bottom.x=0;
  _background.left.x=-canvas.width;
  _background.bottomLeft.x=-canvas.width;

  scene.section1=0;
  scene.section2=0;
  scene.section3=0;
  scene.section4=0;
  scene.current=0;
  scene.score=0;
  scene.time=0;
  scene.load=false;
  scene.teacher=false;
  scene.generate=false;
  scene.key=false;
  scene.auto=false;
  scene.boss=false;

  if(scene.value!=scene.count){ _platform.load=6; }
  else{ _platform.load=11; }

  audio.jump=0;
  audio.damage1=0;
  audio.damage2=0;
  audio.fire1=0;
  audio.fire2=0;
  audio.laser=0;

  global.currentTeacher=false;
  global.currentReward=false;

  keyDown.left=false;
  keyDown.right=false;
  keyDown.up=false;
  keyDown.down=false;

  _player.base.x=context.scale(320)-(_player.base.width/2);
  _player.base.y=(canvas.height-context.scale(14))-_player.base.height;
  _player.action.x=_player.base.x+_player.base.width;
  _player.action.y=_player.base.y;
  _player.collisionLeft.x=_player.base.x+context.scale(4);
  _player.collisionLeft.y=_player.base.y+context.scale(12);
  _player.collisionRight.x=_player.base.x+context.scale(52);
  _player.collisionRight.y=_player.base.y+context.scale(12);
  _player.collisionTop.x=_player.base.x+context.scale(14);
  _player.collisionTop.y=_player.base.y-context.scale(4);
  _player.collisionBottom.x=_player.base.x+context.scale(12);
  _player.collisionBottom.y=_player.base.y+context.scale(90);
  _player.invisible=0;
  _player.base.vx=0;
  _player.base.vy=0;
  _player.hp=5;
  _player.base.alpha=100;
  _player.cloud.on=false;
  _player.left=false;
  _player.gun.x=_player.base.x;
  _player.gun.y=_player.base.y+context.scale(32);
  _player.gun.time=0;
  _player.gun.type=0;
  _player.gun.ammo1=0;
  _player.gun.ammo2=0;
  _player.ammo.unused=true;
  _player.cloud.x=(canvas.width/2)-(_player.cloud.width/2);
  _player.cloud.y=context.scale(220);
  _player.damage=false;
  _player.heal=false;
  _player.touchTebox=false;
  _player.touchDoor=false;
  _player.touchLock=false;

  _corner.time=0;

  _ui.elapsed=0;
  _ui.game.info.time.value0="Czas: 0s";
  _ui.game.notification.main.x=-context.scale(132);
  _ui.game.notification.background.x=-context.scale(134);
  _ui.game.notification.icon.x=-context.scale(120);
  _ui.game.notification.text.x=-context.scale(124);
  _ui.game.notification.info.x=-context.scale(100);

  _tebox.useLenght=-1;
  _tebox.loot.time=0;
  _tebox.base.loop=0;
  _tebox.base.ammo=false;
  _tebox.base.hp=false;
  _tebox.base.key=false;

  _teacher.base.y=context.scale(188);
  _teacher.base.x=canvas.width+_teacher.base.width+context.scale(40);
  _teacher.hp=30;
  _teacher.round=0;
  _teacher.cloud.y=context.scale(274);
  _teacher.cloud.x=canvas.width+_teacher.base.width+context.scale(30);
  _teacher.left=true;

  _attack.tebulinek.use=false;
  _attack.object0.current=-1;
  _attack.object1.current=-1;
  _attack.tebulinek.alpha=100;
  _attack.object0.alpha=100;
  _attack.object1.alpha=100;
}

context.reset=function(){
  context.setup(_mouse.base);
  context.setup(_mouse.collision);

  context.setup(_background.base);
  context.setup(_background.bottom);
  context.setup(_background.left);
  context.setup(_background.bottomLeft);

  context.setup(_transition.base);
  context.setup(_transition.top);
  context.setup(_transition.bottom);
  context.setup(_transition.overlay);
  context.setup(_transition.text);

  context.setup(_indicator);
  context.setup(_info);
  context.setup(_start.base);
  context.setup(_start.arrow);

  context.setup(_title.base);
  context.setup(_title.teb);
  context.setup(_account.name);
  context.setup(_account.profile);
  context.setup(_account.background);
  context.setup(_footer.version);
  context.setup(_footer.github);
  context.setup(_footer.pastebin);
  context.setup(_footer.next);

  context.setup(_description.title);
  context.setup(_description.text);
  context.setup(_description.icon);

  context.setup(_ui.menu.main);
  context.setup(_ui.menu.left);
  context.setup(_ui.menu.right);
  context.setup(_ui.game.heart.main);
  context.setup(_ui.game.heart.background);
  context.setup(_ui.game.heart.icon);
  context.setup(_ui.game.heart.text);
  context.setup(_ui.game.ammo.main);
  context.setup(_ui.game.ammo.background);
  context.setup(_ui.game.ammo.icon);
  context.setup(_ui.game.ammo.text);
  context.setup(_ui.game.key.main);
  context.setup(_ui.game.key.background);
  context.setup(_ui.game.key.icon);
  context.setup(_ui.game.key.text);
  context.setup(_ui.game.pause.main);
  context.setup(_ui.game.pause.background);
  context.setup(_ui.game.pause.icon);
  context.setup(_ui.game.pause.text);
  context.setup(_ui.game.info.main);
  context.setup(_ui.game.info.background);
  context.setup(_ui.game.info.icon);
  context.setup(_ui.game.info.text);
  context.setup(_ui.game.info.score);
  context.setup(_ui.game.info.level);
  context.setup(_ui.game.info.time);
  context.setup(_ui.game.notification.main);
  context.setup(_ui.game.notification.background);
  context.setup(_ui.game.notification.icon);
  context.setup(_ui.game.notification.text);
  context.setup(_ui.game.notification.info);
  context.setup(_ui.game.teacher.main);
  context.setup(_ui.game.teacher.background);
  context.setup(_ui.game.teacher.icon);
  context.setup(_ui.game.teacher.text);

  context.setup(_button.start.base);
  context.setup(_button.start.text);
  context.setup(_button.level.base);
  context.setup(_button.level.text);
  context.setup(_button.menu.base);
  context.setup(_button.menu.text);
  context.setup(_button.custom.base);
  context.setup(_button.custom.text);
  context.setup(_button.restart.base);
  context.setup(_button.restart.text);
  context.setup(_button.setting.base);
  context.setup(_button.setting.text);
  context.setup(_button.about0.base);
  context.setup(_button.about0.text);
  context.setup(_button.about1.base);
  context.setup(_button.about1.text);
  context.setup(_button.overlay);

  context.setup(_clipboard.base);
  context.setup(_clipboard.back);
  context.setup(_clipboard.icon);
  context.setup(_clipboard.title);
  context.setup(_clipboard.text);
  context.setup(_clipboard.setting.sfx.base);
  context.setup(_clipboard.setting.music.base);
  context.setup(_clipboard.setting.sfx.text);
  context.setup(_clipboard.setting.music.text);

  context.setup(_blueprint.base);
  context.setup(_blueprint.skin);
  context.setup(_blueprint.back);
  context.setup(_blueprint.left);
  context.setup(_blueprint.right);
  context.setup(_blueprint.title);
  context.setup(_blueprint.text);
  context.setup(_blueprint.icon);
  context.setup(_blueprint.level.button1);
  context.setup(_blueprint.level.button2);
  context.setup(_blueprint.level.button3);
  context.setup(_blueprint.level.button4);
  context.setup(_blueprint.level.button5);
  context.setup(_blueprint.level.button6);
  context.setup(_blueprint.level.button7);
  context.setup(_blueprint.level.button8);
  context.setup(_blueprint.level.buttonF);

  context.setup(_player.base);
  _player.base.ivy=-context.scale(13.5);
  _player.base.gravity=context.scale(0.5);
  context.setup(_player.cloud);
  context.setup(_player.gun);
  context.setup(_player.ammo);
  context.setup(_player.action);
  context.setup(_player.collisionTop);
  context.setup(_player.collisionBottom);
  context.setup(_player.collisionLeft);
  context.setup(_player.collisionRight);

  context.setup(_tebox.loot);

  context.setup(_teacher.base);
  context.setup(_teacher.cloud);
  context.setup(_attack.tebulinek);
  context.setup(_attack.object0);
  context.setup(_attack.object1);
}
