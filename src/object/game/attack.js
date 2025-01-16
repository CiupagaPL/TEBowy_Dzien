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

_attack.render=function(object,fill){
  if(!object.unused){
    object.timer++;

    if(object.timer<5){ object.rotate=0; }
    else if(object.timer>=5&&object.timer<10){ object.rotate=1; }
    else if(object.timer>=10&&object.timer<15){ object.rotate=2; }
    else if(object.timer>=15&&object.timer<20){ object.rotate=3; }
    else if(object.timer>=20&&object.timer<25){ object.rotate=4; }
    else if(object.timer>=25&&object.timer<30){ object.rotate=5; }
    else if(object.timer>=30&&object.timer<35){ object.rotate=6; }
    else if(object.timer>=35&&object.timer<40){ object.rotate=7; }
    else{ object.timer=0; }

    context.render(object,fill);
  }
}

_attack.update=function(){
  if(!global.pause&&_player.hp!=0){
    if(_attack.tebulinek.unused){ _attack.tebulinek.x=-_attack.tebulinek.width; }
    else{ _attack.tebulinek.x-=8*canvas.scale; }
    if(_attack.tebulinek.x<=-_attack.tebulinek.width){ _attack.tebulinek.unused=true; }

    if(_attack.object1.unused){ _attack.object1.x=-_attack.object1.width; }
    else{ _attack.object1.x-=8*canvas.scale; }
    if(_attack.object1.x<=-_attack.object1.width){ _attack.object1.unused=true; }

    if(_attack.object2.unused){ _attack.object2.x=-_attack.object2.width; }
    else{ _attack.object2.x-=8*canvas.scale; }
    if(_attack.object2.x<=-_attack.object2.width){ _attack.object2.unused=true; }

    if(context.collision(_player.base,_attack.tebulinek)){ _player.gun.power=true; }

    if((context.collision(_player.base,_attack.object1)||context.collision(_player.base,_attack.object2))&&_player.invisible==0){
      _player.hp-=25;
      _player.text.value0="-25 punktów\nz zachowania";
      _player.invisible=1;
      if(global.sfx){
        // _audio.hit.load();
        // _audio.hit.play();
      }
    }
  }
}

_attack.handle=function(){
  while(!_teacher.attack){
    _teacher.random=Math.floor(Math.random()*4);

    if(_teacher.random==0&&_attack.tebulinek.unused){
      _attack.tebulinek.x=(_teacher.cloud.x+(_teacher.cloud.width/2))-(_attack.tebulinek.width/2);
      _attack.tebulinek.y=_teacher.cloud.y+(4*canvas.scale);
      _attack.tebulinek.timer=0;
      _attack.tebulinek.unused=false;
    } else{
      _teacher.random=Math.floor(Math.random()*4);

      if((_teacher.random==0||_teacher.random==1)&&_attack.object1.unused){
        _attack.object1.x=(_teacher.cloud.x+(_teacher.cloud.width/2))-(_attack.object1.width/2);
        _attack.object1.y=_teacher.cloud.y+(4*canvas.scale);
        _attack.object1.timer=0;
        _attack.object1.unused=false;

        if(_teacher.random==0){ _attack.object1.current=0; }
        else{ _attack.object1.current=1; }
      } else if((_teacher.random==2||_teacher.random==3)&&_attack.object2.unused){
        _attack.object2.x=(_teacher.cloud.x+(_teacher.cloud.width/2))-(_attack.object2.width/2);
        _attack.object2.y=_teacher.cloud.y+(4*canvas.scale);
        _attack.object2.timer=0;
        _attack.object2.unused=false;

        if(_teacher.random==2){ _attack.object2.current=0; }
        else{ _attack.object2.current=1; }
      }
    } _teacher.attack=true;
  } _teacher.attack=false;
}

