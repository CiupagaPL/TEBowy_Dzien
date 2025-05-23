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

_ui.levelRender=function(){
  if(_ui.show||!global.pause&&!_ui.show){
    context.render(_ui.game.heart.background,"rgb(255,255,255)");
    context.render(_ui.game.heart.main,"rgb(0,0,65)");
    if(_player.hp==0){ context.render(_ui.game.heart.icon,_ui.game.heart.icon.img0); }
    else if(_player.hp==1){ context.render(_ui.game.heart.icon,_ui.game.heart.icon.img1); }
    else if(_player.hp==2){ context.render(_ui.game.heart.icon,_ui.game.heart.icon.img2); }
    else if(_player.hp==3){ context.render(_ui.game.heart.icon,_ui.game.heart.icon.img3); }
    else if(_player.hp==4){ context.render(_ui.game.heart.icon,_ui.game.heart.icon.img4); }
    else{ context.render(_ui.game.heart.icon,_ui.game.heart.icon.img5); }
    context.text(_ui.game.heart.text,"rgb(255,255,255)",_ui.game.heart.text.value);

    context.render(_ui.game.ammo.background,"rgb(255,255,255)");
    context.render(_ui.game.ammo.main,"rgb(0,0,65)");
    if(_player.gun.type==0){
      if(_player.gun.time<context.time(18)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img0); }
      else if(_player.gun.time>=context.time(18)&&_player.gun.time<context.time(36)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img1Normal); }
      else if(_player.gun.time>=context.time(36)&&_player.gun.time<context.time(54)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img2Normal); }
      else if(_player.gun.time>=context.time(54)&&_player.gun.time<context.time(72)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img3Normal); }
      else if(_player.gun.time>=context.time(72)&&_player.gun.time<context.time(90)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img4Normal); }
      else{ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img5Normal); }
    } else if(_player.gun.type==1){
      if(_player.gun.time<context.time(24)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img0); }
      else if(_player.gun.time>=context.time(24)&&_player.gun.time<context.time(48)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img1Strong); }
      else if(_player.gun.time>=context.time(48)&&_player.gun.time<context.time(72)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img2Strong); }
      else if(_player.gun.time>=context.time(72)&&_player.gun.time<context.time(96)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img3Strong); }
      else if(_player.gun.time>=context.time(96)&&_player.gun.time<context.time(120)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img4Strong); }
      else{ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img5Strong); }
    } else{
      if(_player.gun.time<context.time(12)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img0); }
      else if(_player.gun.time>=context.time(12)&&_player.gun.time<context.time(24)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img1Fast); }
      else if(_player.gun.time>=context.time(24)&&_player.gun.time<context.time(36)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img2Fast); }
      else if(_player.gun.time>=context.time(36)&&_player.gun.time<context.time(48)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img3Fast); }
      else if(_player.gun.time>=context.time(48)&&_player.gun.time<context.time(60)){ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img4Fast); }
      else{ context.render(_ui.game.ammo.icon,_ui.game.ammo.icon.img5Fast); }
    } context.text(_ui.game.ammo.text,"rgb(255,255,255)",_ui.game.ammo.text.value);

    if(!scene.teacher){
      context.render(_ui.game.key.background,"rgb(255,255,255)");
      context.render(_ui.game.key.main,"rgb(0,0,65)");
      if(!scene.key){ context.render(_ui.game.key.icon,_ui.game.key.icon.imgOff); }
      else{ context.render(_ui.game.key.icon,_ui.game.key.icon.imgOn); }
      context.text(_ui.game.key.text,"rgb(255,255,255)",_ui.game.key.text.value);
    }

    context.render(_ui.game.pause.background,"rgb(255,255,255)");
    context.render(_ui.game.pause.main,"rgb(0,0,65)");
    context.text(_ui.game.pause.icon,"rgb(255,255,255)",_ui.game.pause.icon.value);
    context.text(_ui.game.pause.text,"rgb(255,255,255)",_ui.game.pause.text.value);

    context.render(_ui.game.info.background,"rgb(255,255,255)");
    context.render(_ui.game.info.main,"rgb(0,0,65)");
    context.render(_ui.game.info.icon,_ui.game.info.icon.img);
    context.text(_ui.game.info.text,"rgb(255,255,255)",_ui.game.info.text.value);
    context.text(_ui.game.info.score,"rgb(255,255,255)",_ui.game.info.score.value);
    context.text(_ui.game.info.level,"rgb(255,255,255)",_ui.game.info.level.value);
    context.text(_ui.game.info.time,"rgb(255,255,255)",_ui.game.info.time.value);

    if(_player.damage||_player.heal||_ui.message||global.teboxNotification||global.lockerNotification||global.lockNotification||global.doorNotification){
      context.render(_ui.game.notification.background,"rgb(255,255,255)");
      context.render(_ui.game.notification.main,"rgb(0,0,65)");
      context.text(_ui.game.notification.icon,"rgb(255,255,255)",_ui.game.notification.icon.value);
      context.text(_ui.game.notification.text,"rgb(255,255,255)",_ui.game.notification.text.value);
      context.text(_ui.game.notification.info,"rgb(255,255,255)",_ui.game.notification.info.value);
    }

    if(scene.teacher){
      context.render(_ui.game.teacher.background,"rgb(255,255,255)");
      context.render(_ui.game.teacher.main,"rgb(0,0,65)");
      if(_teacher.hp==0){ context.render(_ui.game.teacher.icon,_ui.game.teacher.icon.img0); }
      else if(_teacher.hp>0&&_teacher.hp<=4){ context.render(_ui.game.teacher.icon,_ui.game.teacher.icon.img1); }
      else if(_teacher.hp>4&&_teacher.hp<=8){ context.render(_ui.game.teacher.icon,_ui.game.teacher.icon.img2); }
      else if(_teacher.hp>8&&_teacher.hp<=12){ context.render(_ui.game.teacher.icon,_ui.game.teacher.icon.img3); }
      else if(_teacher.hp>12&&_teacher.hp<=16){ context.render(_ui.game.teacher.icon,_ui.game.teacher.icon.img4); }
      else{ context.render(_ui.game.teacher.icon,_ui.game.teacher.icon.img5); }
      context.text(_ui.game.teacher.text,"rgb(255,255,255)",_ui.game.teacher.text.value);
    }
  }
}

_ui.render=function(){
  if(scene.value>=2){ context.render(_transition.overlay,"rgb(0,27,69)"); }

  context.render(_ui.menu.main,"rgb(0,0,65)");
  context.render(_ui.menu.left,"rgb(255,255,255)");
  context.render(_ui.menu.right,"rgb(255,255,255)");

  if(_title.base.alpha==100){ context.render(_title.teb,_title.teb.imgOff); }
  else{ context.render(_title.teb,_title.teb.imgOn); }
  context.render(_title.base,_title.base.img);

  context.text(_account.name,"rgb(255,255,255)",_account.name.value);
  context.render(_account.background,"rgb(255,255,255)");
  if(_player.skin==0){ context.render(_account.profile,_account.profile.img0); }
  else{ context.render(_account.profile,_account.profile.img1); }

  context.text(_footer.version,"rgb(255,255,255)",_footer.version.value);
  context.render(_footer.github,_footer.imgGit);
  context.render(_footer.pastebin,_footer.imgPaste);

  if(scene.value==1||scene.value>=2&&!global.currentTutorial&&!global.currentTeacher&&!global.currentReward){
    context.render(_button.start.base,_button.start.base.img);
    context.text(_button.start.text,"rgb(255,255,255)",_button.start.text.value);
    if(scene.value==1){
      context.render(_button.level.base,_button.level.base.img);
      context.text(_button.level.text,"rgb(255,255,255)",_button.level.text.value);
      context.render(_button.custom.base,_button.custom.base.img);
      context.text(_button.custom.text,"rgb(255,255,255)",_button.custom.text.value);
    } else{
      context.render(_button.menu.base,_button.menu.base.img);
      context.text(_button.menu.text,"rgb(255,255,255)",_button.menu.text.value);
      context.render(_button.restart.base,_button.restart.base.img);
      context.text(_button.restart.text,"rgb(255,255,255)",_button.restart.text.value);
    }
    context.render(_button.setting.base,_button.setting.base.img);
    context.text(_button.setting.text,"rgb(255,255,255)",_button.setting.text.value);
    context.render(_button.about0.base,_button.about0.base.img);
    context.text(_button.about0.text,"rgb(255,255,255)",_button.about0.text.value);
    context.render(_button.about1.base,_button.about1.base.img);
    context.text(_button.about1.text,"rgb(255,255,255)",_button.about1.text.value);

    if(_button.overlay.type!=-1){ context.render(_button.overlay,_button.overlay.img); }

    if(scene.value>=2&&(_button.setting.animation||_button.setting.on||_button.about0.animation||_button.about0.on||_button.about1.animation||_button.about1.on)){
      context.render(_clipboard.base,_clipboard.base.img);
      if(_clipboard.back.hover){ context.render(_clipboard.back,_clipboard.back.imgOn); }
      else{ context.render(_clipboard.back,_clipboard.back.imgOff); }

      if(_button.setting.animation||_button.setting.on){
        context.text(_clipboard.title,"rgb(0,0,0)",_clipboard.title.value0);
        context.render(_clipboard.icon,_clipboard.icon.imgSet);

        if(!global.sfx){ context.render(_clipboard.setting.sfx.base,_clipboard.setting.imgOff); }
        else{ context.render(_clipboard.setting.sfx.base,_clipboard.setting.imgOn); }
        context.text(_clipboard.setting.sfx.text,"rgb(0,0,0)",_clipboard.setting.sfx.text.value);
        if(!global.music){ context.render(_clipboard.setting.music.base,_clipboard.setting.imgOff); }
        else{ context.render(_clipboard.setting.music.base,_clipboard.setting.imgOn); }
        context.text(_clipboard.setting.music.text,"rgb(0,0,0)",_clipboard.setting.music.text.value);
      } else if(_button.about0.animation||_button.about0.on){
        context.render(_clipboard.icon,_clipboard.icon.imgInfo);
        context.text(_clipboard.title,"rgb(0,0,0)",_clipboard.title.value1);
        context.text(_clipboard.text,"rgb(0,0,0)",_clipboard.text.value0);
      } else if(_button.about1.animation||_button.about1.on){
        context.render(_clipboard.icon,_clipboard.icon.imgGen);
        context.text(_clipboard.title,"rgb(0,0,0)",_clipboard.title.value2);
        context.text(_clipboard.text,"rgb(0,0,0)",_clipboard.text.value1);
      }
    }
  }
}

_ui.infoRender=function(){
  if(global.currentTutorial||global.currentReward||global.currentTeacher){
    context.render(_footer.next,_footer.imgNext);

    if(global.currentTutorial){
      context.text(_description.title,"rgb(255,255,255)",_description.title.value0);
      context.text(_description.text,"rgb(255,255,255)",_description.text.value0);
      context.render(_description.icon,_description.icon.imgGen);
    } else if(global.currentReward){
      context.text(_description.title,"rgb(255,255,255)",_description.title.value1);
      context.text(_description.text,"rgb(255,255,255)",_description.text.value1);
      context.render(_description.icon,_description.icon.imgWin);
    } else{
      context.text(_description.title,"rgb(255,255,255)",_description.title.value2);
      context.render(_description.icon,_description.icon.imgFight);
      if(scene.value==2){ context.text(_description.text,"rgb(255,255,255)",_description.text.value0Teacher); }
      else if(scene.value==3){ context.text(_description.text,"rgb(255,255,255)",_description.text.value1Teacher); }
      else if(scene.value==4){ context.text(_description.text,"rgb(255,255,255)",_description.text.value2Teacher); }
      else if(scene.value==5){ context.text(_description.text,"rgb(255,255,255)",_description.text.value3Teacher); }
      else if(scene.value==6){ context.text(_description.text,"rgb(255,255,255)",_description.text.value4Teacher); }
      else if(scene.value==7){ context.text(_description.text,"rgb(255,255,255)",_description.text.value5Teacher); }
      else if(scene.value==8){ context.text(_description.text,"rgb(255,255,255)",_description.text.value6Teacher); }
      else if(scene.value==9){ context.text(_description.text,"rgb(255,255,255)",_description.text.value7Teacher); }
      else{
        if(_teacher.round==0){ context.text(_description.text,"rgb(255,255,255)",_description.text.value8Teacher); }
        else if(_teacher.round==1){ context.text(_description.text,"rgb(255,255,255)",_description.text.value9Teacher); }
        else{ context.text(_description.text,"rgb(255,255,255)",_description.text.value10Teacher); }
      }
    }
  }
}

_ui.update=function(){
  if(global.pause&&_ui.show){
    _ui.game.heart.background.alpha=100;
    _ui.game.ammo.background.alpha=100;
    _ui.game.key.background.alpha=100;
    _ui.game.pause.background.alpha=100;
    _ui.game.info.background.alpha=100;
    _ui.game.teacher.background.alpha=100;

    if(_ui.game.key.background.y+_ui.game.key.background.height>0){
      _ui.game.heart.main.y-=context.move(10);
      _ui.game.heart.background.y-=context.move(10);
      _ui.game.heart.icon.y-=context.move(10);
      _ui.game.heart.text.y-=context.move(10);
      _ui.game.ammo.main.y-=context.move(10);
      _ui.game.ammo.background.y-=context.move(10);
      _ui.game.ammo.icon.y-=context.move(10);
      _ui.game.ammo.text.y-=context.move(10);
      _ui.game.key.main.y-=context.move(10);
      _ui.game.key.background.y-=context.move(10);
      _ui.game.key.icon.y-=context.move(10);
      _ui.game.key.text.y-=context.move(10);
      _ui.game.pause.main.y-=context.move(10);
      _ui.game.pause.background.y-=context.move(10);
      _ui.game.pause.icon.y-=context.move(10);
      _ui.game.pause.text.y-=context.move(10);
      _ui.game.info.main.y-=context.move(10);
      _ui.game.info.background.y-=context.move(10);
      _ui.game.info.icon.y-=context.move(10);
      _ui.game.info.text.y-=context.move(10);
      _ui.game.info.score.y-=context.move(10);
      _ui.game.info.level.y-=context.move(10);
      _ui.game.info.time.y-=context.move(10);
      _ui.game.teacher.main.y-=context.move(10);
      _ui.game.teacher.background.y-=context.move(10);
      _ui.game.teacher.icon.y-=context.move(10);
      _ui.game.teacher.text.y-=context.move(10);
    } else{ _ui.show=false; }
  } else if(!global.pause&&!_ui.show){
    if(_ui.game.key.background.y<=context.scale(30)){
      _ui.game.heart.main.y+=context.move(10);
      _ui.game.heart.background.y+=context.move(10);
      _ui.game.heart.icon.y+=context.move(10);
      _ui.game.heart.text.y+=context.move(10);
      _ui.game.ammo.main.y+=context.move(10);
      _ui.game.ammo.background.y+=context.move(10);
      _ui.game.ammo.icon.y+=context.move(10);
      _ui.game.ammo.text.y+=context.move(10);
      _ui.game.key.main.y+=context.move(10);
      _ui.game.key.background.y+=context.move(10);
      _ui.game.key.icon.y+=context.move(10);
      _ui.game.key.text.y+=context.move(10);
      _ui.game.pause.main.y+=context.move(10);
      _ui.game.pause.background.y+=context.move(10);
      _ui.game.pause.icon.y+=context.move(10);
      _ui.game.pause.text.y+=context.move(10);
      _ui.game.info.main.y+=context.move(10);
      _ui.game.info.background.y+=context.move(10);
      _ui.game.info.icon.y+=context.move(10);
      _ui.game.info.text.y+=context.move(10);
      _ui.game.info.score.y+=context.move(10);
      _ui.game.info.level.y+=context.move(10);
      _ui.game.info.time.y+=context.move(10);
      _ui.game.teacher.main.y+=context.move(10);
      _ui.game.teacher.background.y+=context.move(10);
      _ui.game.teacher.icon.y+=context.move(10);
      _ui.game.teacher.text.y+=context.move(10);
    } else{
      _ui.game.heart.main.y=context.scale(6);
      _ui.game.heart.background.y=context.scale(4);
      _ui.game.heart.icon.y=context.scale(10);
      _ui.game.heart.text.y=context.scale(36);
      _ui.game.ammo.main.y=context.scale(6);
      _ui.game.ammo.background.y=context.scale(4);
      _ui.game.ammo.icon.y=context.scale(10);
      _ui.game.ammo.text.y=context.scale(35);
      _ui.game.key.main.y=context.scale(44);
      _ui.game.key.background.y=context.scale(42);
      _ui.game.key.icon.y=context.scale(47);
      _ui.game.key.text.y=context.scale(73);
      _ui.game.pause.main.y=context.scale(6);
      _ui.game.pause.background.y=context.scale(4);
      _ui.game.pause.icon.y=context.scale(26);
      _ui.game.pause.text.y=context.scale(36);
      _ui.game.info.main.y=context.scale(6);
      _ui.game.info.background.y=context.scale(4);
      _ui.game.info.icon.y=context.scale(8);
      _ui.game.info.text.y=context.scale(36);
      _ui.game.info.score.y=context.scale(16);
      _ui.game.info.level.y=context.scale(26);
      _ui.game.info.time.y=context.scale(36);
      _ui.game.teacher.main.y=context.scale(44);
      _ui.game.teacher.background.y=context.scale(42);
      _ui.game.teacher.icon.y=context.scale(47);
      _ui.game.teacher.text.y=context.scale(73);

      _ui.show=true;
    }
  }

  _ui.game.heart.text.value=_player.hp+"/5";
  _ui.game.info.score.value="Wynik: "+scene.score;
  if(scene.value<=10&&scene.value!=scene.count){ _ui.game.info.level.value="Poziom: 0"+Number(scene.value-1); }
  else if(scene.value>10&&scene.value!=scene.count){ _ui.game.info.level.value="Poziom: "+Number(scene.value-1); }
  else{ _ui.game.info.level.value="Finał"; }
  if(_teacher.hp<10){ _ui.game.teacher.text.x=context.scale(611); }
  else{ _ui.game.teacher.text.x=context.scale(609); }
  _ui.game.teacher.text.value=_teacher.hp+"/30";
  if(_player.gun.type==0){
    _ui.game.ammo.text.value="∞";
    _ui.game.ammo.text.size=context.scale(16);
    _ui.game.ammo.text.x=context.scale(577);
  } else if(_player.gun.type==1){
    _ui.game.ammo.text.value=String(_player.gun.ammo1);
    _ui.game.ammo.text.size=context.scale(13);
    if(_player.gun.ammo1<=9&&_player.gun.ammo1!=1){ _ui.game.ammo.text.x=context.scale(580); }
    else if(_player.gun.ammo1==1){ _ui.game.ammo.text.x=context.scale(581); }
    else if(_player.gun.ammo1>9){ _ui.game.ammo.text.x=context.scale(578); }
  } else{
    _ui.game.ammo.text.value=String(_player.gun.ammo2);
    if(_player.gun.ammo2<=9&&_player.gun.ammo2!=1){ _ui.game.ammo.text.x=context.scale(580); }
    else if(_player.gun.ammo2==1){ _ui.game.ammo.text.x=context.scale(581); }
    else if(_player.gun.ammo2>9){ _ui.game.ammo.text.x=context.scale(578); }
  }

  if(_player.damage||_player.heal||_ui.message||global.teboxNotification||global.lockerNotification||global.lockNotification||global.doorNotification){
    if(!_ui.message){
      if(_player.damage){ _ui.game.notification.info.value="-25 punktów z\nzachowania! x.x"; }
      else if(_player.heal){ _ui.game.notification.info.value="+25 punktów z\nzachowania! ^.^"; }
      else if(global.teboxNotification){ _ui.game.notification.info.value="Użyj przycisku interakcji,\naby otworzyć TEBoxa! c.c"; }
      else if(global.lockerNotification){ _ui.game.notification.info.value="Użyj przycisku strzału,\naby zamknąć szafkę! c.c"; }
      else if(global.lockNotification){ _ui.game.notification.info.value="Zdobądź klucz w celu\notwarcia kłódki! c.c"; }
      else if(global.doorNotification){ _ui.game.notification.info.value="Użyj klucza w celu\notwarcia drzwi! c.c"; }

      if(_player.damage||_player.heal){ _ui.game.notification.icon.value="!"; }
      else{ _ui.game.notification.icon.value="?"; }

      if(_ui.game.notification.background.x<context.scale(-5)&&!global.pause&&_player.hp>0){
        _ui.game.notification.main.x+=context.move(10);
        _ui.game.notification.background.x+=context.move(10);
        _ui.game.notification.icon.x+=context.move(10);
        _ui.game.notification.text.x+=context.move(10);
        _ui.game.notification.info.x+=context.move(10);
      } else if(_ui.game.notification.background.x<context.scale(-5)&&(global.pause||_player.hp==0)){
        if(_ui.game.notification.main.x>context.scale(-130)){
          _ui.game.notification.main.x-=context.move(10);
          _ui.game.notification.background.x-=context.move(10);
          _ui.game.notification.icon.x-=context.move(10);
          _ui.game.notification.text.x-=context.move(10);
          _ui.game.notification.info.x-=context.move(10);
        } else{
          _ui.message=false;
          if(_ui.game.notification.info.value=="-25 punktów z\nzachowania! x.x"){ _player.damage=false; }
          else if(_ui.game.notification.info.value=="+25 punktów z\nzachowania! ^.^"){ _player.heal=false; }
          else if(_ui.game.notification.info.value=="Użyj przycisku interakcji,\naby otworzyć TEBoxa! c.c"){ global.teboxNotification=false; }
          else if(_ui.game.notification.info.value=="Użyj przycisku strzału,\naby zamknąć szafkę! c.c"){ global.lockerNotification=false; }
          else if(_ui.game.notification.info.value=="Zdobądź klucz w celu\notwarcia kłódki! c.c"){ global.lockNotification=false; }
          else if(_ui.game.notification.info.value=="Użyj klucza w celu\notwarcia drzwi! c.c"){ global.doorNotification=false; }
        }  
      } else if(_ui.game.notification.main.x>=context.scale(-5)&&!global.pause&&_player.hp>0){
        _ui.game.notification.main.x=context.scale(6);
        _ui.game.notification.background.x=context.scale(4);
        if(_ui.game.notification.icon.value=="!"){ _ui.game.notification.icon.x=context.scale(18); }
        else{ _ui.game.notification.icon.x=context.scale(16); }
        _ui.game.notification.text.x=context.scale(14);
        _ui.game.notification.info.x=context.scale(34);

        _ui.message=true;
        _ui.time=context.time(60);
      }
    } else{
      if(_ui.time>0){ _ui.time--; }
      if(global.pause||_player.hp==0){ _ui.time=0; }

      if(_ui.game.notification.info.value=="-25 punktów z\nzachowania! x.x"&&_player.heal&&_ui.time>context.time(15)){ _ui.time=context.time(15); }
      else if(_ui.game.notification.info.value=="+25 punktów z\nzachowania! ^.^"&&_player.damage&&_ui.time>context.time(15)){ _ui.time=context.time(15); }

      if(_ui.time<=0){
        if(_ui.game.notification.main.x>context.scale(-130)){
          _ui.game.notification.main.x-=context.move(10);
          _ui.game.notification.background.x-=context.move(10);
          _ui.game.notification.icon.x-=context.move(10);
          _ui.game.notification.text.x-=context.move(10);
          _ui.game.notification.info.x-=context.move(10);
        } else{
          _ui.message=false;
          if(_ui.game.notification.info.value=="-25 punktów z\nzachowania! x.x"){ _player.damage=false; }
          else if(_ui.game.notification.info.value=="+25 punktów z\nzachowania! ^.^"){ _player.heal=false; }
          else if(_ui.game.notification.info.value=="Użyj przycisku interakcji,\naby otworzyć TEBoxa! c.c"){ global.teboxNotification=false; }
          else if(_ui.game.notification.info.value=="Użyj przycisku strzału,\naby zamknąć szafkę! c.c"){ global.lockerNotification=false; }
          else if(_ui.game.notification.info.value=="Zdobądź klucz w celu\notwarcia kłódki! c.c"){ global.lockNotification=false; }
          else if(_ui.game.notification.info.value=="Użyj klucza w celu\notwarcia drzwi! c.c"){ global.doorNotification=false; }
        }  
      }
    }
  }

  if(!global.pause&&_player.hp>0){
    _ui.elapsed++;
    _ui.game.info.time.value="Czas: "+Math.round(_ui.elapsed/context.time(40))+"s";

    if(_ui.game.heart.icon.time>=1){
      _ui.game.heart.icon.time++;

      if(_ui.game.heart.icon.time==context.time(5)){
        _ui.game.heart.icon.width=context.scale(14);
        _ui.game.heart.icon.height=context.scale(14);
        _ui.game.heart.icon.time=0;
      }
    } if(_ui.game.ammo.icon.time>=1){
      _ui.game.ammo.icon.time++;

      if(_ui.game.ammo.icon.time==context.time(5)){
        _ui.game.ammo.icon.width=context.scale(14);
        _ui.game.ammo.icon.height=context.scale(14);
        _ui.game.ammo.icon.time=0;
      }
    } if(_ui.game.key.icon.time>=1){
      _ui.game.key.icon.time++;

      if(_ui.game.key.icon.time==context.time(5)){
        _ui.game.key.icon.width=context.scale(16);
        _ui.game.key.icon.height=context.scale(16);
        _ui.game.key.icon.time=0;
      }
    } if(_ui.game.info.icon.time>=1){
      _ui.game.info.icon.time++;

      if(_ui.game.info.icon.time==context.time(5)){
        _ui.game.info.icon.width=context.scale(20);
        _ui.game.info.icon.height=context.scale(20);
        _ui.game.info.icon.time=0;
      }
    } if(_ui.game.notification.icon.time>=1){
      _ui.game.notification.icon.time++;

      if(_ui.game.notification.icon.time==context.time(5)){
        _ui.game.notification.icon.size=context.scale(28);
        _ui.game.notification.icon.time=0;
      }
    } if(_ui.game.teacher.icon.time>=1){
      _ui.game.teacher.icon.time++;

      if(_ui.game.teacher.icon.time==context.time(5)){
        _ui.game.teacher.icon.width=context.scale(14);
        _ui.game.teacher.icon.height=context.scale(14);
        _ui.game.teacher.icon.time=0;
      }
    }
  }
}
