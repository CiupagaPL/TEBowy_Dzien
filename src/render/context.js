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
  } else if(object0.size!=undefined&&object0.line==undefined){
    return object0.x<object1.x+object1.width&&
           object0.x+object0.width>object1.x&&
           object0.y-object0.height<object1.y+object1.height&&
           object0.y-object0.height+object0.height>object1.y;
  } else{
    return object0.x<object1.x+object1.width&&
           object0.x+object0.width>object1.x&&
           object0.y-object0.height<object1.y+object1.height&&
           object0.y-object0.height+object0.height>object1.y;
  }
}

context.scale=function(value){ return value*canvas.scale; }
context.time=function(value){ return Math.round(value*canvas.timeScale); }
context.frame=function(value){ return Math.round(value/canvas.timeScale); }
context.move=function(value){ return Math.floor(((value*canvas.scale)/canvas.timeScale)*100)/100; }
context.limit=function(value){ return Math.round(Math.floor(((value*canvas.timeScale)/canvas.prevTimeScale)*100)/100); }

context.setup=function(object){
  if(object.x!=undefined&&object.y!=undefined){
    object.x=Math.round((context.scale(object.x)/canvas.prevScale)*100)/100;
    object.y=Math.round((context.scale(object.y)/canvas.prevScale)*100)/100;
  }

  if(object.width!=undefined&&object.height!=undefined){
    object.width=Math.round((context.scale(object.width)/canvas.prevScale)*100)/100;
    object.height=Math.round((context.scale(object.height)/canvas.prevScale)*100)/100;
  } if(object.size!=undefined){ object.size=Math.round((Math.round(context.scale(object.size)/canvas.prevScale))*100)/100; }
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
  _title.base.y=context.scale(24);
  _title.teb.y=context.scale(24);

  _button.start.base.y=context.scale(360-192);
  _button.start.text.y=_button.start.base.y+context.scale(18);
  _button.level.base.y=context.scale(360-128);
  _button.level.text.y=_button.level.base.y+context.scale(18);
  _button.custom.base.y=context.scale(360-64);
  _button.custom.text.y=_button.custom.base.y+context.scale(28);
  _button.setting.base.y=context.scale(360-192);
  _button.setting.text.y=_button.setting.base.y+context.scale(28);
  _button.about.base.y=context.scale(360-128);
  _button.about.text.y=_button.about.base.y+context.scale(18);
  _button.version.base.y=context.scale(360-64);
  _button.version.text.y=_button.version.base.y+context.scale(18);

  _player.base.x=context.scale(64);
  _player.base.y=(canvas.height-context.scale(12))-_player.base.height;

  _player.collisionLeft.x=_player.base.x;
  _player.collisionLeft.y=_player.base.y+context.scale(8);
  _player.collisionRight.x=_player.base.x+context.scale(44);
  _player.collisionRight.y=_player.base.y+context.scale(8);
  _player.collisionTop.x=_player.base.x+context.scale(4);
  _player.collisionTop.y=_player.base.y;
  _player.collisionBottom.x=_player.base.x+context.scale(4);

  if(_player.skin==0||_player.skin==2){
    _player.base.height=context.scale(81);
    _player.collisionLeft.height=context.scale(69);
    _player.collisionRight.height=context.scale(69);
    _player.collisionBottom.y=(_player.base.y+context.scale(81))+_player.vy;
  } else if(_player.skin==1||_player.skin==3){
    _player.base.height=context.scale(75);
    _player.collisionLeft.height=context.scale(63);
    _player.collisionRight.height=context.scale(63);
    _player.collisionBottom.y=(_player.base.y+context.scale(75))+_player.vy;
  }

  scene.win=false;
  scene.defeat=false;

  scene.generated=false;

  if(scene.value!=11){ _platform.load=13; }
  else{ _platform.load=3; }

  _player.text.x=_player.base.x-context.scale(2);
  _player.text.y=_player.base.y-context.scale(12);

  _player.hp=150;
  scene.score=0;
  scene.timer=0;

  _player.invisible=0;
  _player.vx=0;
  _player.vy=0;
  _player.cloudFly=false;
  _player.left=false;

  _player.gun.x=_player.base.x+context.scale(36);
  _player.gun.y=_player.base.y+context.scale(40);
  _player.gun.on=false;
  _player.gun.power=false;
  _player.gun.timer=0;

  _player.ammo.unused=true;
  _player.ammo.power=false;

  _player.cloud.x=_player.base.x-context.scale(8);
  _player.cloud.y=_player.base.y+_player.cloud.height;
  _player.gun.x=_player.base.x+context.scale(36);
  _player.gun.y=_player.base.y+context.scale(40);

  scene.auto=false;

  keyDown.left=false;
  keyDown.right=false;
  keyDown.up=false;
  keyDown.down=false;

  _background.base.x=0;
  _background.base.y=0;
  _background.bottom.x=0;
  _background.bottom.y=canvas.height;
  _background.left.x=-canvas.width;
  _background.left.y=0;
  _background.bottomLeft.x=-canvas.width;
  _background.bottomLeft.y=canvas.height;

  _attack.tebulinek.unused=true;
  _attack.object1.unused=true;
  _attack.object2.unused=true;

  scene.boss=false;
  _teacher.hp=250;
  _teacher.timer=0;
  _teacher.base.y=context.scale(104);
  _teacher.base.x=(canvas.width+_teacher.base.width)+context.scale(32);
  _teacher.round=0;
  _teacher.on=false;
  _teacher.max=context.time(60);

  _teacher.cloud.y=context.scale(174);
  _teacher.cloud.x=(canvas.width+_teacher.base.width)+context.scale(16);

  _teacher.text.x=_teacher.base.x+context.scale(6);
  _teacher.text.y=_teacher.base.y+context.scale(52);

  global.currentTeacher=false;
  global.currentReward=false;

  _corner.timer=0;

  if(scene.value>=2&&scene.value<=4){
    _corner.max=context.time(120);
    _player.max=context.time(90);
    _spike.count=1;
  } else if(scene.value>=5&&scene.value<=8){
    _corner.max=context.time(90);
    _player.max=context.time(75);
    _spike.count=2;
  } else if(scene.value>=9&&scene.value<=11){
    _corner.max=context.time(60);
    _player.max=context.time(60);
    _spike.count=3;
  }
}

context.reset=function(){
  mouse.width=context.scale(4);
  mouse.height=context.scale(4);

  context.setup(_background.base);
  context.setup(_background.bottom);
  context.setup(_background.left);
  context.setup(_background.bottomLeft);

  context.setup(_transition.base);
  context.setup(_transition.text);

  context.setup(_info);

  context.setup(_start.base);
  context.setup(_start.arrow);

  context.setup(_title.base);
  context.setup(_title.teb);

  context.setup(_resolution);

  context.setup(_ui.menu);
  context.setup(_ui.game);

  context.setup(_hud.level);
  context.setup(_hud.score);

  context.setup(_hud.icon.pause);
  
  context.setup(_hud.icon.water);

  context.setup(_hud.icon.hpPlayer.heart0);
  context.setup(_hud.icon.hpPlayer.heart1);
  context.setup(_hud.icon.hpPlayer.heart2);

  context.setup(_hud.icon.hpTeacher.heart0);
  context.setup(_hud.icon.hpTeacher.heart1);
  context.setup(_hud.icon.hpTeacher.heart2);
  context.setup(_hud.icon.hpTeacher.heart3);
  context.setup(_hud.icon.hpTeacher.heart4);

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
  context.setup(_button.about.base);
  context.setup(_button.about.text);
  context.setup(_button.version.base);
  context.setup(_button.version.text);

  context.setup(_clipboard.base);
  context.setup(_clipboard.back);
  context.setup(_clipboard.wide);
  context.setup(_clipboard.wideBack);

  context.setup(_clipboard.setting.title);
  context.setup(_clipboard.setting.sfx.base);
  context.setup(_clipboard.setting.music.base);
  context.setup(_clipboard.setting.tutorial.base);
  context.setup(_clipboard.setting.teacher.base);
  context.setup(_clipboard.setting.addon.base);
  context.setup(_clipboard.setting.sfx.text);
  context.setup(_clipboard.setting.music.text);
  context.setup(_clipboard.setting.tutorial.text);
  context.setup(_clipboard.setting.teacher.text);
  context.setup(_clipboard.setting.addon.text);

  context.setup(_clipboard.about.title);
  context.setup(_clipboard.about.text);

  context.setup(_clipboard.version.title);
  context.setup(_clipboard.version.text);

  context.setup(_clipboard.tutorial.title);
  context.setup(_clipboard.tutorial.text);

  context.setup(_clipboard.reward.title);
  context.setup(_clipboard.reward.text);
  context.setup(_clipboard.reward.icon);

  context.setup(_blueprint.base);
  context.setup(_blueprint.skin);
  context.setup(_blueprint.back);
  context.setup(_blueprint.left);
  context.setup(_blueprint.right);
  context.setup(_blueprint.wide);
  context.setup(_blueprint.wideBack);

  context.setup(_blueprint.level.title);
  context.setup(_blueprint.level.button1);
  context.setup(_blueprint.level.button2);
  context.setup(_blueprint.level.button3);
  context.setup(_blueprint.level.button4);
  context.setup(_blueprint.level.button5);
  context.setup(_blueprint.level.button6);
  context.setup(_blueprint.level.button7);
  context.setup(_blueprint.level.button8);
  context.setup(_blueprint.level.button9);
  context.setup(_blueprint.level.button10);

  context.setup(_blueprint.custom.title);
  context.setup(_blueprint.custom.text);

  context.setup(_blueprint.teacher.title);
  context.setup(_blueprint.teacher.text);
  
  context.setup(_player.base);
  _player.ivy=-context.scale(12);
  _player.gravity=context.scale(0.5);
  context.setup(_player.text);
  context.setup(_player.cloud);
  context.setup(_player.gun);
  context.setup(_player.ammo);

  context.setup(_player.collisionTop);
  context.setup(_player.collisionBottom);
  context.setup(_player.collisionLeft);
  context.setup(_player.collisionRight);

  _platform.height=context.scale(12);

  context.setup(_corner.base);
  context.setup(_corner.laser);

  context.setup(_spike);

  context.setup(_sign.base);
  context.setup(_sign.teacher);

  context.setup(_teacher.base);
  context.setup(_teacher.text);
  context.setup(_teacher.cloud);

  context.setup(_attack.tebulinek);
  context.setup(_attack.object1);
  context.setup(_attack.object2);
}
