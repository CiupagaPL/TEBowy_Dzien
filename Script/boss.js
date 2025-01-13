/*
 *    ,-----,
 *    |     |    ,--------------------------------------------------------,
 *    |     |   ( Projekt objęty jest licencją. Przeczytasz o niej na:     )
 *   (|-----|)  < github.com/CiupagaPL/Tebowy_Dzien/blob/stable/LICENSE.md )
 *   |\_____/|   "--------------------------------------------------------"
 *   |       |    __---.
 *   ( o   o )   /      )
 *   \ = . = \__/    --"
 *   /              /
 *  |              |
 *   \ \    \ \   |
 *    | |    | | /
 *   (_(_)--(_(_)
*/

handleboss=function(){
  if(!pause&&_player.hp>0){
    sceneTimer++;

    if(sceneTimer<60){ _playerCloud.y=_render.height+_playerCloud.height; }
    if(sceneTimer>=60&&sceneTimer<61&&sfxOn){
      _audio.bossStart.load();
      _audio.bossStart.play();
    } if(sceneTimer>=60&&sceneTimer<99){
      _boss.x-=5*scale;
      _bossCloud.x-=5*scale;
      if(_boss.round==0){
        _playerCloud.y-=2*scale;
        _playerCloud.x=_player.x-(8*scale);
      }
    } if(sceneTimer>=99&&sceneTimer<100){
      if(teacherOn){
        pauseChange=true;
        pause=true;
        pauseAnimation=true;
        teacher=true;
      }
      _player.cloud=true;
      _playerCloud.y=_player.y+_playerCloud.height;
      _playerGun.x=_player.x+(36*scale);
      _playerGun.y=_player.y+(40*scale);
    } if(sceneTimer>=100&&sceneTimer<126){
      _boss.y-=4*scale;
      _bossCloud.y-=4*scale;
      _boss.load=false;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=126&&sceneTimer<140){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=140&&sceneTimer<166){
      _boss.y+=4*scale;
      _bossCloud.y+=4*scale;
      _boss.load=false;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=166&&sceneTimer<180){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=180&&sceneTimer<206){
      _boss.y+=4*scale;
      _bossCloud.y+=4*scale;
      _boss.load=false;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=206&&sceneTimer<220){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=220&&sceneTimer<246){
      _boss.y-=4*scale;
      _bossCloud.y-=4*scale;
      _boss.load=false;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=246&&sceneTimer<260){
      if(!_boss.load){
        handleattacks();
      } _boss.load=true;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=260&&sceneTimer<261){ _boss.y-=4*scale; _bossCloud.y-=4*scale; sceneTimer=100; }
    if(sceneTimer>=300&&sceneTimer<330){
      _boss.x+=6*scale;
      _bossCloud.x+=6*scale;
      _playerCloud.y=_player.y+_playerCloud.height;
    } if(sceneTimer>=330&&sceneTimer<360&&scene!=11){
      defeat=true;
      boss=false;
    } if(sceneTimer>=330&&sceneTimer<360&&scene==11&&_boss.round==2){
      pause=true;
      pauseChange=true;
      pauseAnimation=true;
      reward=true;
      sceneTimer=360;
    } if(sceneTimer>=330&&sceneTimer<360&&scene==11&&_boss.round<2){
      _boss.round++;
      _boss.hp=250;
      sceneTimer=60;
      _boss.y=104*scale; 
      _boss.x=_render.width+_boss.width+(32*scale);
      _bossCloud.y=174*scale;
      _bossCloud.x=_render.width+_boss.width+(16*scale);
    } if(sceneTimer>=360&&scene==11&&_boss.round==2&&!pause){
      reward=false;
      defeat=true;
      boss=false;
    }

    if(_tebulinek.unused){ _tebulinek.x=-_tebulinek.width; }
    if(!_tebulinek.unused){ _tebulinek.x-=8*scale; }
    if(_tebulinek.x<=-_tebulinek.width){ _tebulinek.unused=true; }

    if(_attack1.unused){ _attack1.x=-_attack1.width; }
    if(!_attack1.unused){ _attack1.x-=8*scale; }
    if(_attack1.x<=-_attack1.width){ _attack1.unused=true; }

    if(_attack2.unused){ _attack2.x=-_attack2.width; }
    if(!_attack2.unused){ _attack2.x-=8*scale; }
    if(_attack2.x<=-_attack2.width){ _attack2.unused=true; }

    if(_playerAmmo.unused){
      _playerAmmo.x=-_playerAmmo.width;
      _playerAmmo.y=-_playerAmmo.height;
      _playerAmmo.power=false;
    } if(!_playerAmmo.unused){ _playerAmmo.x+=32; }
    if(_playerAmmo.x+_playerAmmo.width>=_render.width){ _playerAmmo.unused=true; }
  }

  drawattack(_tebulinek,_tebulinek.img0,_tebulinek.img1,_tebulinek.img2,_tebulinek.img3);

  if(_attack1.current==0){ drawattack(_attack1,_attack1.imgComputer0,_attack1.imgComputer1,_attack1.imgComputer2,_attack1.imgComputer3); }
  if(_attack1.current==1){ drawattack(_attack1,_attack1.imgKeyboard0,_attack1.imgKeyboard1,_attack1.imgKeyboard2,_attack1.imgKeyboard3); }

  if(_attack2.current==0){ drawattack(_attack2,_attack2.imgCoffe0,_attack2.imgCoffe1,_attack2.imgCoffe2,_attack2.imgCoffe3); }
  if(_attack2.current==1){ drawattack(_attack2,_attack2.imgDove0,_attack2.imgDove1,_attack2.imgDove2,_attack2.imgDove3); }

  drawboss();
  if(addonOn){ drawbosstext(); }

  _context.drawShortImage(_bossCloud.img,_bossCloud);

  if(_player.left){ _context.drawShortImage(_playerCloud.img0,_playerCloud); }
  else if(!_player.left){ _context.drawShortImage(_playerCloud.img1,_playerCloud); }

  if(sceneTimer>=99&&!_playerGun.power||_boss.round>=1&&!_playerGun.power){ _context.drawShortImage(_playerGun.img0,_playerGun); }
  else if(sceneTimer>=99&&_playerGun.power||_boss.round>=1&&_playerGun.power){ _context.drawShortImage(_playerGun.img1,_playerGun); }

  if(sceneTimer>=99&&!_playerAmmo.power||_boss.round>=1&&!_playerAmmo.power){ _context.drawShortImage(_playerAmmo.img0,_playerAmmo); }
  else if(sceneTimer>=99&&_playerAmmo.power||_boss.round>=1&&_playerAmmo.power){ _context.drawShortImage(_playerAmmo.img1,_playerAmmo); }

  if(sceneTimer>=99){
    if(!_playerGun.on){ _playerGun.timer++; }
    if(_playerGun.timer>=120){ _playerGun.on=true; }
  }

  if(window.detectcollision(_player,_tebulinek)){ _playerGun.power=true; }

  if(window.detectcollision(_boss,_playerAmmo)&&_boss.invisible==0&&!_playerAmmo.power){
    _boss.hp-=25;
    _bossText.value="-25 punktów\nz zachowania";
    if(sfxOn&&_boss.hp>0){ _audio.bossHit.load(); _audio.bossHit.play(); }
    if(sfxOn&&_boss.hp<=0){ _audio.bossDie.load(); _audio.bossDie.play(); }
    if(_boss.hp>0){ _boss.invisible=1; }
    if(_boss.hp<=0){ sceneTimer=300; }
  }
  if(window.detectcollision(_boss,_playerAmmo)&&_boss.invisible==0&&_playerAmmo.power){
    _boss.hp-=50;
    _bossText.value="-50 punktów\nz zachowania";
    if(sfxOn&&_boss.hp>0){ _audio.bossHit.load(); _audio.bossHit.play(); }
    if(sfxOn&&_boss.hp<=0){ _audio.bossDie.load(); _audio.bossDie.play(); }
    if(_boss.hp>0){ _boss.invisible=1; }
    if(_boss.hp<=0){ sceneTimer=300; }
  }

  if(window.detectcollision(_player,_attack1)&&_player.invisible==0||window.detectcollision(_player,_attack2)&&_player.invisible==0){
    _player.hp-=25;
    _playerText.value="-25 punktów\nz zachowania";
    _player.invisible=1;
    if(sfxOn){ _audio.hit.load(); _audio.hit.play(); }
  }
}

handleattacks=function(){
  while(!_boss.attack){
    _boss.random=Math.floor(Math.random()*8);

    if(_boss.random==0){
      if(_boss.random==0&&_tebulinek.unused){
        _tebulinek.x=_bossCloud.x+_bossCloud.width/2-_tebulinek.width/2;
        _tebulinek.y=_bossCloud.y+4*scale;
        _tebulinek.timer=0;
        _tebulinek.unused=false;
        _boss.attack=true;
      }
    } else if(_boss.random!=0){
      _boss.random=Math.floor(Math.random()*4);

      if(_boss.random==0&&_attack1.unused||_boss.random==1&&_attack1.unused){
        _attack1.x=_bossCloud.x+_bossCloud.width/2-_attack1.width/2;
        _attack1.y=_bossCloud.y+4*scale;
        _attack1.timer=0;
        _attack1.unused=false;
        _boss.attack=true;

        if(_boss.random==0){ _attack1.current=0; }
        if(_boss.random==1){ _attack1.current=1; }
      } else if(_boss.random==2&&_attack2.unused||_boss.random==3&&_attack2.unused){
        _attack2.x=_bossCloud.x+_bossCloud.width/2-_attack2.width/2;
        _attack2.y=_bossCloud.y+4*scale;
        _attack2.timer=0;
        _attack2.unused=false;
        _boss.attack=true;

        if(_boss.random==2){ _attack2.current=0; }
        if(_boss.random==3){ _attack2.current=1; }
      }
    }
  } _boss.attack=false;
}

