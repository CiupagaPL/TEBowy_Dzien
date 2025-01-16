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

context.collision=function(object0,object1){
  if(object0.size==undefined){
    return object0.x<object1.x+object1.width&&
           object0.x+object0.width>object1.x&&
           object0.y<object1.y+object1.height&&
           object0.y+object0.height>object1.y;
  } else{
    return object0.x<object1.x+object1.width&&
           object0.x+object0.width>object1.x&&
           object0.y-object0.height<object1.y+object1.height&&
           object0.y-object0.height+object0.height>object1.y;
  }
}

context.rescale=function(object){
  if(object.x!=undefined&&object.y!=undefined){
    object.x=Number(((object.x*canvas.scale)/canvas.prevScale).toFixed(2));
    object.y=Number(((object.y*canvas.scale)/canvas.prevScale).toFixed(2));
  } if(object.fy!=undefined){ object.fy=Number(((object.fy*canvas.scale)/canvas.prevScale).toFixed(2)); }

  if(object.width!=undefined&&object.height!=undefined){
    object.width=Number(((object.width*canvas.scale)/canvas.prevScale).toFixed(2));
    object.height=Number(((object.height*canvas.scale)/canvas.prevScale).toFixed(2));
  } if(object.size!=undefined){ object.size=Number((Math.round((object.size*canvas.scale)/canvas.prevScale)).toFixed(2)); }
}

context.render=function(object,fill,value){
  if(value!=undefined){
    context.fillStyle=fill;
    context.font=object.size+"px "+canvas.font;

    value.split("\n").forEach((line,current)=>{ context.fillText(line,object.x,object.y+(current*object.size),canvas.width); });
  } else if(value==undefined&&Array.from(fill)[0]==null){
    if(object.rotate==undefined||object.rotate==0){
      if(object.width==undefined||object.height==undefined){ context.drawImage(fill,object.x,object.y,canvas.width,canvas.height); }
      else{ context.drawImage(fill,object.x,object.y,object.width,object.height); }
    } else{
      context.save();
      context.translate(object.x+(object.width/2),object.y+(object.height/2));
      context.rotate(object.rotate*3.14/2);
      context.drawImage(fill,-object.width/2,-object.height/2,object.width,object.height);
      context.restore();
    }
  } else{
    context.fillStyle=fill;

    if(object.rotate==undefined||object.rotate==0){
      if(object.width==undefined||object.height==undefined){ context.fillRect(object.x,object.y,canvas.width,canvas.height); }
      else{ context.fillRect(object.x,object.y,object.width,object.height); }
    } else{
      context.save();
      context.translate(object.x+(object.width/2),object.y+(object.height/2));
      context.rotate(object.rotate*3.14/2);
      context.fillRect(-object.width/2,-object.height/2,object.width,object.height);
      context.restore();
    }
  }
}

context.default=function(){
  _title.y=24*canvas.scale;

  _button.start.base.y=(360-192)*canvas.scale;
  _button.start.text.y=_button.start.base.y+(18*canvas.scale);

  _button.level.base.y=(360-128)*canvas.scale;
  _button.level.text.y=_button.level.base.y+(30*canvas.scale);

  _button.setting.base.y=(360-192)*canvas.scale;
  _button.setting.text.y=_button.setting.base.y+(30*canvas.scale);

  _button.about.base.y=(360-128)*canvas.scale;
  _button.about.text.y=_button.about.base.y+(30*canvas.scale);

  _button.version.base.y=(360-64)*canvas.scale;
  _button.version.text.y=_button.version.base.y+(18*canvas.scale);

  _button.custom.base.y=(360-64)*canvas.scale;
  _button.custom.text.y=_button.custom.base.y+(30*canvas.scale);

  _player.base.x=64*canvas.scale;
  _player.base.y=(canvas.height-(12*canvas.scale))-_player.base.height;

  _player.collisionLeft.x=_player.base.x;
  _player.collisionLeft.y=_player.base.y+(8*canvas.scale);
  _player.collisionRight.x=_player.base.x+(44*canvas.scale);
  _player.collisionRight.y=_player.base.y+(8*canvas.scale);
  _player.collisionTop.x=_player.base.x+(4*canvas.scale);
  _player.collisionTop.y=_player.base.y;
  _player.collisionBottom.x=_player.base.x+(4*canvas.scale);

  if(_player.skin==0||_player.skin==2){
    _player.base.height=81*canvas.scale;
    _player.collisionLeft.height=69*canvas.scale;
    _player.collisionRight.height=69*canvas.scale;
    _player.collisionBottom.y=(_player.base.y+(81*canvas.scale))+_player.vy;
  } else if(_player.skin==1||_player.skin==3){
    _player.base.height=75*canvas.scale;
    _player.collisionLeft.height=63*canvas.scale;
    _player.collisionRight.height=63*canvas.scale;
    _player.collisionBottom.y=(_player.base.y+(75*canvas.scale))+_player.vy;
  }

  scene.win=false;
  scene.defeat=false;

  scene.generated=false;

  if(scene.value!=11){ _platform.load=13; }
  else{ _platform.load=3; }

  _player.text.x=_player.base.x-(2*canvas.scale);
  _player.text.y=_player.base.y-(12*canvas.scale);

  _player.hp=150;
  scene.score=0;
  scene.timer=0;

  _player.invisible=0;
  _player.vx=0;
  _player.vy=0;
  _player.cloudFly=false;
  _player.left=false;

  _player.gun.x=_player.base.x+(36*canvas.scale);
  _player.gun.y=_player.base.y+(40*canvas.scale);
  _player.gun.on=false;
  _player.gun.power=false;
  _player.gun.timer=0;

  _player.ammo.unused=true;
  _player.ammo.power=false;

  _player.cloud.x=_player.base.x-(8*canvas.scale);
  _player.cloud.y=_player.base.y+_player.cloud.height;
  _player.gun.x=_player.base.x+(36*canvas.scale);
  _player.gun.y=_player.base.y+(40*canvas.scale);

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
  _teacher.base.y=104*canvas.scale;
  _teacher.base.x=(canvas.width+_teacher.base.width)+(32*canvas.scale);
  _teacher.round=0;
  _teacher.on=false;

  _teacher.cloud.y=174*canvas.scale;
  _teacher.cloud.x=(canvas.width+_teacher.base.width)+(16*canvas.scale);

  _teacher.text.x=_teacher.base.x+(6*canvas.scale);
  _teacher.text.y=_teacher.base.y+(52*canvas.scale);

  global.currentTeacher=false;
  global.currentReward=false;

  _corner.timer=0;

  if(scene.value>=2&&scene.value<=4){
    _corner.max=120;
    _player.max=90;
    _spike.count=1;
  } else if(scene.value>=5&&scene.value<=8){
    _corner.max=90;
    _player.max=75;
    _spike.count=2;
  } else if(scene.value>=9&&scene.value<=11){
    _corner.max=60;
    _player.max=60;
    _spike.count=3;
  }
}

context.reset=function(){
  mouse.width=4*canvas.scale;
  mouse.height=4*canvas.scale;

  context.rescale(_background.base);
  context.rescale(_background.bottom);
  context.rescale(_background.left);
  context.rescale(_background.bottomLeft);

  context.rescale(_transition.base);
  context.rescale(_transition.text);

  context.rescale(_start.base);
  context.rescale(_start.arrow);

  context.rescale(_title);

  context.rescale(_resolution);

  context.rescale(_ui.menu);
  context.rescale(_ui.game);

  context.rescale(_hud.level);
  context.rescale(_hud.score);

  context.rescale(_hud.icon.pause);
  
  context.rescale(_hud.icon.water);

  context.rescale(_hud.icon.hpPlayer.heart0);
  context.rescale(_hud.icon.hpPlayer.heart1);
  context.rescale(_hud.icon.hpPlayer.heart2);

  context.rescale(_hud.icon.hpTeacher.heart0);
  context.rescale(_hud.icon.hpTeacher.heart1);
  context.rescale(_hud.icon.hpTeacher.heart2);
  context.rescale(_hud.icon.hpTeacher.heart3);
  context.rescale(_hud.icon.hpTeacher.heart4);

  context.rescale(_button.start.base);
  context.rescale(_button.start.text);
  context.rescale(_button.level.base);
  context.rescale(_button.level.text);
  context.rescale(_button.menu.base);
  context.rescale(_button.menu.text);
  context.rescale(_button.custom.base);
  context.rescale(_button.custom.text);
  context.rescale(_button.restart.base);
  context.rescale(_button.restart.text);
  context.rescale(_button.setting.base);
  context.rescale(_button.setting.text);
  context.rescale(_button.about.base);
  context.rescale(_button.about.text);
  context.rescale(_button.version.base);
  context.rescale(_button.version.text);

  context.rescale(_clipboard.base);
  context.rescale(_clipboard.back);
  context.rescale(_clipboard.wide);
  context.rescale(_clipboard.wideBack);

  context.rescale(_clipboard.setting.title);
  context.rescale(_clipboard.setting.sfx.base);
  context.rescale(_clipboard.setting.music.base);
  context.rescale(_clipboard.setting.tutorial.base);
  context.rescale(_clipboard.setting.teacher.base);
  context.rescale(_clipboard.setting.addon.base);
  context.rescale(_clipboard.setting.sfx.text);
  context.rescale(_clipboard.setting.music.text);
  context.rescale(_clipboard.setting.tutorial.text);
  context.rescale(_clipboard.setting.teacher.text);
  context.rescale(_clipboard.setting.addon.text);

  context.rescale(_clipboard.about.title);
  context.rescale(_clipboard.about.text);

  context.rescale(_clipboard.version.title);
  context.rescale(_clipboard.version.text);

  context.rescale(_clipboard.tutorial.title);
  context.rescale(_clipboard.tutorial.text);

  context.rescale(_clipboard.reward.title);
  context.rescale(_clipboard.reward.text);
  context.rescale(_clipboard.reward.icon);

  context.rescale(_blueprint.base);
  context.rescale(_blueprint.skin);
  context.rescale(_blueprint.back);
  context.rescale(_blueprint.left);
  context.rescale(_blueprint.right);
  context.rescale(_blueprint.wide);
  context.rescale(_blueprint.wideBack);

  context.rescale(_blueprint.level.title);
  context.rescale(_blueprint.level.button1);
  context.rescale(_blueprint.level.button2);
  context.rescale(_blueprint.level.button3);
  context.rescale(_blueprint.level.button4);
  context.rescale(_blueprint.level.button5);
  context.rescale(_blueprint.level.button6);
  context.rescale(_blueprint.level.button7);
  context.rescale(_blueprint.level.button8);
  context.rescale(_blueprint.level.button9);
  context.rescale(_blueprint.level.button10);

  context.rescale(_blueprint.custom.title);
  context.rescale(_blueprint.custom.text);

  context.rescale(_blueprint.teacher.title);
  context.rescale(_blueprint.teacher.text);
  
  context.rescale(_player.base);
  _player.ivy=-12*canvas.scale;
  _player.gravity=0.5*canvas.scale;
  context.rescale(_player.text);
  context.rescale(_player.cloud);
  context.rescale(_player.gun);
  context.rescale(_player.ammo);

  context.rescale(_player.collisionTop);
  context.rescale(_player.collisionBottom);
  context.rescale(_player.collisionLeft);
  context.rescale(_player.collisionRight);

  _platform.height=12*canvas.scale;

  context.rescale(_corner.base);
  context.rescale(_corner.laser);

  context.rescale(_spike);

  context.rescale(_sign.base);
  context.rescale(_sign.teacher);

  context.rescale(_teacher.base);
  context.rescale(_teacher.text);
  context.rescale(_teacher.cloud);

  context.rescale(_attack.tebulinek);
  context.rescale(_attack.object1);
  context.rescale(_attack.object2);
}

