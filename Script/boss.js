/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

handleBoss=function(){
  if(!pauseOn&&hp!=0){ sceneTimer++; }

  if(!pauseOn&&hp!=0&&!_tebulinek.unused){
    _tebulinek.y+=_tebulinek.vy;
    _tebulinek.vy+=_tebulinek.gravity;
  }

  drawattack(_tebulinek);
  _context.drawShortImage(_boss.img0,_boss);
  _context.drawShortImage(_cloud.img,_cloud);

  if(_tebulinek.unsued){ _tebulinek.x=-_tebulinek.width; _tebulinek.y=-_tebulinek.height; }

  if(!pauseOn&&hp!=0){
    if(sceneTimer<60){
      _boss.y=-128*scale;
      _cloud.y=-52*scale;
    } if(sceneTimer>=60&&sceneTimer<90){
      _boss.y+=5*scale;
      _cloud.y+=5*scale;
    } if(sceneTimer>=90&&sceneTimer<140){
      _boss.x+=5*scale;
      _cloud.x+=5*scale;
      _boss.load=false;
    } if(sceneTimer>=140&&sceneTimer<170){
      if(!_boss.load){
        _tebulinek.x=_boss.x;
        _tebulinek.y=_boss.y+_boss.height;
        _tebulinek.vy=0;
        _tebulinek.timer=0;
        _tebulinek.unused=false;
      }
      _boss.load=true;
    } if(sceneTimer>=170&&sceneTimer<220){
      _boss.x+=5*scale;
      _cloud.x+=5*scale;
      _boss.load=false;
    } if(sceneTimer>=220&&sceneTimer<250){
      if(!_boss.load){
        _tebulinek.x=_boss.x;
        _tebulinek.y=_boss.y+_boss.height;
        _tebulinek.vy=0;
        _tebulinek.timer=0;
        _tebulinek.unused=false;
      }
      _boss.load=true;
    } if(sceneTimer>=250&&sceneTimer<300){
      _boss.x-=5*scale;
      _cloud.x-=5*scale;
      _boss.load=false;
    } if(sceneTimer>=300&&sceneTimer<330){
      if(!_boss.load){
        _tebulinek.x=_boss.x;
        _tebulinek.y=_boss.y+_boss.height;
        _tebulinek.vy=0;
        _tebulinek.timer=0;
        _tebulinek.unused=false;
      }
      _boss.load=true;
    } if(sceneTimer>=330&&sceneTimer<380){
      _boss.x-=5*scale;
      _cloud.x-=5*scale;
      _boss.load=false;
    } if(sceneTimer>=380&&sceneTimer<410){
      if(!_boss.load){
        _tebulinek.x=_boss.x;
        _tebulinek.y=_boss.y+_boss.height;
        _tebulinek.vy=0;
        _tebulinek.timer=0;
        _tebulinek.unused=false;
      }
      _boss.load=true;
    } if(sceneTimer>=410){ _boss.x+=5*scale; _cloud.x+=5*scale; sceneTimer=90; }
  }

  if(window.detectcollision(_player,_tebulinek)){ bossHp=0; }
}
