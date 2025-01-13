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

drawplayer=function(){
  if(_player.invisible==0||_player.hp==0){
    if(_player.skin==0&&!_player.left){ _context.drawShortImage(_player.img0,_player); }
    if(_player.skin==1&&!_player.left){ _context.drawShortImage(_player.img1,_player); }
    if(_player.skin==2&&!_player.left){ _context.drawShortImage(_player.img2,_player); }
    if(_player.skin==3&&!_player.left){ _context.drawShortImage(_player.img3,_player); }
    if(_player.skin==0&&_player.left){ _context.drawShortImage(_player.img0left,_player); }
    if(_player.skin==1&&_player.left){ _context.drawShortImage(_player.img1left,_player); }
    if(_player.skin==2&&_player.left){ _context.drawShortImage(_player.img2left,_player); }
    if(_player.skin==3&&_player.left){ _context.drawShortImage(_player.img3left,_player); }
  } if(_player.invisible!=0){
    if(!pause&&_player.hp>0){ _player.invisible++; }
    if(_player.invisible%2==0||pause){
      if(_player.skin==0&&!_player.left){ _context.drawShortImage(_player.img0,_player); }
      if(_player.skin==1&&!_player.left){ _context.drawShortImage(_player.img1,_player); }
      if(_player.skin==2&&!_player.left){ _context.drawShortImage(_player.img2,_player); }
      if(_player.skin==3&&!_player.left){ _context.drawShortImage(_player.img3,_player); }
      if(_player.skin==0&&_player.left){ _context.drawShortImage(_player.img0left,_player); }
      if(_player.skin==1&&_player.left){ _context.drawShortImage(_player.img1left,_player); }
      if(_player.skin==2&&_player.left){ _context.drawShortImage(_player.img2left,_player); }
      if(_player.skin==3&&_player.left){ _context.drawShortImage(_player.img3left,_player); }
    } if(_player.invisible>=_player.max){ _player.invisible=0; }
  }
}

drawplayertext=function(){
  _playerText.x=_player.x-2*scale;
  _playerText.y=_player.y-12*scale;
  if(_player.invisible>=1&&_player.invisible<30&&_player.hp>0){ _context.fillShortText(_playerText.color0,_playerText,_playerText.value); }
  if(_player.invisible>=30&&_player.invisible<35&&_player.hp>0){ _context.fillShortText(_playerText.color1,_playerText,_playerText.value); }
  if(_player.invisible>=35&&_player.invisible<40&&_player.hp>0){ _context.fillShortText(_playerText.color2,_playerText,_playerText.value); }
  if(_player.invisible>=40&&_player.invisible<45&&_player.hp>0){ _context.fillShortText(_playerText.color3,_playerText,_playerText.value); }
}

drawbosstext=function(){
  _bossText.x=_boss.x+6*scale;
  _bossText.y=_boss.y+52*scale;
  if(_boss.invisible>=1&&_boss.invisible<30&&_boss.hp!=0){ _context.fillShortText(_bossText.color0,_bossText,_bossText.value); }
  if(_boss.invisible>=30&&_boss.invisible<35&&_boss.hp!=0){ _context.fillShortText(_bossText.color1,_bossText,_bossText.value); }
  if(_boss.invisible>=35&&_boss.invisible<40&&_boss.hp!=0){ _context.fillShortText(_bossText.color2,_bossText,_bossText.value); }
  if(_boss.invisible>=40&&_boss.invisible<45&&_boss.hp!=0){ _context.fillShortText(_bossText.color3,_bossText,_bossText.value); }
}

drawlight=function(){
  if(_laser.timer>=_laser.max-20&&_laser.timer<_laser.max){ _context.fillShortRect(_light.color2,_currentLight); }
  if(_laser.timer>=_laser.max&&_laser.timer<_laser.max+5){ _context.fillShortRect(_light.color1,_currentLight); }
  if(_laser.timer>=_laser.max+5&&_laser.timer<_laser.max+15){ _context.fillShortRect(_light.color0,_currentLight); }
  if(_laser.timer>=_laser.max+15&&_laser.timer<_laser.max+20){ _context.fillShortRect(_light.color1,_currentLight); }
  if(_laser.timer>=_laser.max+20&&_laser.timer<_laser.max+25){ _context.fillShortRect(_light.color2,_currentLight); }
}

drawattack=function(_object,_img0,_img1,_img2,_img3){
  if(!pause&&_player.hp>0){ _object.timer++; }
  
  if(_object.timer<10){ _context.drawShortImage(_img0,_object); }
  if(_object.timer>=10&&_object.timer<20){ _context.drawShortImage(_img1,_object); }
  if(_object.timer>=20&&_object.timer<30){ _context.drawShortImage(_img2,_object); }
  if(_object.timer>=30&&_object.timer<40){ _context.drawShortImage(_img3,_object); }
  if(_object.timer>=40){
    _context.drawShortImage(_img0,_object);
    _object.timer=0;
  }
}

drawboss=function(){
  if(_boss.invisible==0||_boss.hp==0){
      if(scene==2){ _context.drawShortImage(_boss.img0,_boss); }
      if(scene==3){ _context.drawShortImage(_boss.img1,_boss); }
      if(scene==4){ _context.drawShortImage(_boss.img2,_boss); }
      if(scene==5){ _context.drawShortImage(_boss.img3,_boss); }
      if(scene==6){ _context.drawShortImage(_boss.img4,_boss); }
      if(scene==7){ _context.drawShortImage(_boss.img5,_boss); }
      if(scene==8){ _context.drawShortImage(_boss.img6,_boss); }
      if(scene==9){ _context.drawShortImage(_boss.img7,_boss); }
      if(scene==10){ _context.drawShortImage(_boss.img1,_boss); }
      if(scene==11&&_boss.round==0){ _context.drawShortImage(_boss.imgAdd0,_boss); }
      if(scene==11&&_boss.round==1){ _context.drawShortImage(_boss.imgAdd1,_boss); }
      if(scene==11&&_boss.round==2){ _context.drawShortImage(_boss.imgAdd2,_boss); }
  } if(_boss.invisible!=0){
    if(!pause&&_player.hp>0){ _boss.invisible++; }
    if(_boss.invisible%2==0||pause){
      if(scene==2){ _context.drawShortImage(_boss.img0,_boss); }
      if(scene==3){ _context.drawShortImage(_boss.img1,_boss); }
      if(scene==4){ _context.drawShortImage(_boss.img2,_boss); }
      if(scene==5){ _context.drawShortImage(_boss.img3,_boss); }
      if(scene==6){ _context.drawShortImage(_boss.img4,_boss); }
      if(scene==7){ _context.drawShortImage(_boss.img5,_boss); }
      if(scene==8){ _context.drawShortImage(_boss.img6,_boss); }
      if(scene==9){ _context.drawShortImage(_boss.img7,_boss); }
      if(scene==10){ _context.drawShortImage(_boss.img1,_boss); }
      if(scene==11&&_boss.round==0){ _context.drawShortImage(_boss.imgAdd0,_boss); }
      if(scene==11&&_boss.round==1){ _context.drawShortImage(_boss.imgAdd1,_boss); }
      if(scene==11&&_boss.round==2){ _context.drawShortImage(_boss.imgAdd2,_boss); }
    } if(_boss.invisible>=_boss.max){
      _boss.invisible=0;
    }
  }
}

