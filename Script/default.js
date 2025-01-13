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

_context.fillShortText=function(_color,_text,value){
  let lines=value.split("\n");

  _context.fillStyle=_color;
  _context.font=_text.debug;

  lines.forEach((line,c)=>{
    _context.fillText(line,_text.x,_text.y+(c*_text.size),_currentResolution.width);
  });
}

_context.drawShortImage=function(_img,_object){ _context.drawImage(_img,_object.x,_object.y,_object.width,_object.height); }

_context.fillShortRect=function(_color,_object){
  _context.fillStyle=_color;
  _context.fillRect(_object.x,_object.y,_object.width,_object.height);
}

window.defaultgame=function(){
  if(scene!=11){ _platform.load=13; }
  else if(scene==11){ _platform.load=3; }

  dead=false;
  _player.hp=150;
  score=0;
  sceneTimer=0;

  _player.x=64*scale;
  _player.y=(_render.height-(12*scale))-_player.height;
  _player.invisible=0;
  _player.vx=0;
  _player.vy=0;
  _player.cloud=false;
  _player.left=false;

  _playerGun.x=_player.x+(36*scale);
  _playerGun.y=_player.y+(40*scale);
  _playerGun.on=false;
  _playerGun.power=false;
  _playerGun.timer=0;

  _playerAmmo.unused=true;
  _playerAmmo.power=false

  autoScene=false;

  _keyState.left=false;
  _keyState.right=false;
  _keyState.up=false;
  _keyState.down=false;

  _background.x=0;
  _background.y=0;
  _backgroundTop.x=0;
  _backgroundTop.y=-_render.height;
  _backgroundRight.x=_render.width;
  _backgroundRight.y=0;
  _backgroundTopRight.x=_render.width;
  _backgroundTopRight.y=-_render.height;

  _tebulinek.unused=true;
  _attack1.unused=true;
  _attack2.unused=true;

  boss=false;
  _boss.hp=250;
  _boss.timer=0;
  _boss.y=104*scale;
  _boss.x=_render.width+_boss.width+(32*scale);
  _boss.round=0;

  _bossCloud.y=174*scale;
  _bossCloud.x=_render.width+_boss.width+(16*scale);

  teacher=false;
  _laser.timer=0;

  reward=false;

  if(scene>=2&&scene<=4){
    _laser.max=120;
    _player.max=90;
    _spike.count=1;
  } if(scene>=5&&scene<=8){
    _laser.max=90;
    _player.max=75;
    _spike.count=2;
  } if(scene>=9&&scene<=11){
    _laser.max=60;
    _player.max=60;
    _spike.count=3;
  }
}

window.defaultvalue=function(){
  _mouse.width=4*scale;
  _mouse.height=4*scale;

  _background.width=_currentResolution.width;
  _background.height=_currentResolution.height;
  _background.x=0;
  _background.y=0;
  _backgroundTop.width=_currentResolution.width;
  _backgroundTop.height=_currentResolution.height;
  _backgroundTop.x=0;
  _backgroundTop.y=-_render.height;
  _backgroundRight.width=_currentResolution.width;
  _backgroundRight.height=_currentResolution.height;
  _backgroundRight.x=_render.width;
  _backgroundRight.y=0;
  _backgroundTopRight.width=_currentResolution.width;
  _backgroundTopRight.height=_currentResolution.height;
  _backgroundTopRight.x=_render.width;
  _backgroundTopRight.y=-_render.height;

  _change.width=_currentResolution.width;
  _change.height=_currentResolution.height;
  _change.x=0;
  _change.y=0;
  _changeText.x=96*scale;
  _changeText.y=(_render.height/2)+8*scale;
  _changeText.size=Math.ceil(42*scale);
  _changeText.debug=_changeText.size+"px "+_changeText.font;

  _startText.x=(_render.width/2)-116*scale;
  _startText.y=_render.height-32*scale;
  _startText.size=Math.ceil(24*scale);
  _startText.debug=_startText.size+"px "+_startText.font;

  _startTEB.width=192*scale;
  _startTEB.height=192*scale;
  _startTEB.x=(_render.width/2)-96*scale;
  _startTEB.y=(_render.height)/2-96*scale;

  _menuTitle.width=264*scale;
  _menuTitle.height=96*scale;
  _menuTitle.x=64*scale;
  _menuTitle.y=24*scale;

  _menuUI.width=296*scale;
  _menuUI.height=_render.height;
  _menuUI.x=_menuTitle.x-(16*scale);
  _menuUI.y=0;

  _menuResolution.x=_render.width-(24*scale);
  _menuResolution.y=_render.height-(24*scale);
  _menuResolution.width=(16*scale);
  _menuResolution.height=(16*scale);

  _menuStart.width=42*scale;
  _menuStart.height=42*scale;
  _menuStart.x=_menuTitle.x;
  _menuStart.y=_render.height-(192*scale);
  _menuStartText.x=_menuStart.x+(48*scale);
  _menuStartText.y=_menuStart.y+(30*scale);
  _menuStartText.size=Math.ceil(32*scale);
  _menuStartText.debug=_menuStartText.size+"px "+_menuStartText.font;
  _menuLevel.width=42*scale;
  _menuLevel.height=42*scale;
  _menuLevel.x=_menuTitle.x;
  _menuLevel.y=_render.height-(128*scale);
  _menuLevelText.x=_menuLevel.x+(48*scale);
  _menuLevelText.y=_menuLevel.y+(30*scale);
  _menuLevelText.size=Math.ceil(32*scale);
  _menuLevelText.debug=_menuLevelText.size+"px "+_menuLevelText.font;
  _menuMenu.width=42*scale;
  _menuMenu.height=42*scale;
  _menuMenu.x=_menuTitle.x;
  _menuMenu.y=_render.height-(128*scale);
  _menuMenuText.x=_menuMenu.x+(48*scale);
  _menuMenuText.y=_menuMenu.y+(30*scale);
  _menuMenuText.size=Math.ceil(32*scale);
  _menuMenuText.debug=_menuMenuText.size+"px "+_menuMenuText.font;
  _menuSetting.width=42*scale;
  _menuSetting.height=42*scale;
  _menuSetting.x=(_menuTitle.x+_menuTitle.width)-_menuSetting.width;
  _menuSetting.y=_render.height-(192*scale);
  _menuSettingText.x=_menuSetting.x-(64*scale);
  _menuSettingText.y=_menuSetting.y+(30*scale);
  _menuSettingText.size=Math.ceil(32*scale);
  _menuSettingText.debug=_menuSettingText.size+"px "+_menuSettingText.font;
  _menuAbout.width=42*scale;
  _menuAbout.height=42*scale;
  _menuAbout.x=(_menuTitle.x+_menuTitle.width)-_menuAbout.width;
  _menuAbout.y=_render.height-(128*scale);
  _menuAboutText.x=_menuAbout.x-(50*scale);
  _menuAboutText.y=_menuAbout.y+(30*scale);
  _menuAboutText.size=Math.ceil(32*scale);
  _menuAboutText.debug=_menuAboutText.size+"px "+_menuAboutText.font;
  _menuVersion.width=42*scale;
  _menuVersion.height=42*scale;
  _menuVersion.x=(_menuTitle.x+_menuTitle.width)-_menuVersion.width;
  _menuVersion.y=_render.height-(64*scale);
  _menuVersionText.x=_menuVersion.x-(60*scale);
  _menuVersionText.y=_menuVersion.y+(18*scale);
  _menuVersionText.size=Math.ceil(16*scale);
  _menuVersionText.debug=_menuVersionText.size+"px "+_menuVersionText.font;
  _menuCustom.width=42*scale;
  _menuCustom.height=42*scale;
  _menuCustom.x=_menuTitle.x;
  _menuCustom.y=_render.height-(64*scale);
  _menuCustomText.x=_menuCustom.x+(48*scale);
  _menuCustomText.y=_menuCustom.y+(30*scale);
  _menuCustomText.size=Math.ceil(32*scale);
  _menuCustomText.debug=_menuCustomText.size+"px "+_menuCustomText.font;
  _menuRestart.width=42*scale;
  _menuRestart.height=42*scale;
  _menuRestart.x=_menuTitle.x;
  _menuRestart.y=_render.height-(64*scale);
  _menuRestartText.x=_menuRestart.x+(48*scale);
  _menuRestartText.y=_menuRestart.y+(30*scale);
  _menuRestartText.size=Math.ceil(32*scale);
  _menuRestartText.debug=_menuRestartText.size+"px "+_menuRestartText.font;

  _clipboard.width=160*scale;
  _clipboard.height=240*scale;
  _clipboard.x=_render.width+_clipboard.width;
  _clipboard.y=(_render.height/2)-(_clipboard.height/2);
  _clipboardBack.width=32*scale;
  _clipboardBack.height=32*scale;
  _clipboardBack.x=_clipboard.x+(_clipboard.width-(36*scale));
  _clipboardBack.y=_clipboard.y+4*scale;

  _clipboardSettingText.x=_clipboard.x+54*scale;
  _clipboardSettingText.y=_clipboard.y+60*scale;
  _clipboardSettingText.size=Math.ceil(28*scale);
  _clipboardSettingText.debug=_clipboardSettingText.size+"px "+_clipboardSettingText.font;
  _clipboardAboutText.x=_clipboard.x+60*scale;
  _clipboardAboutText.y=_clipboard.y+60*scale;
  _clipboardAboutText.size=Math.ceil(28*scale);
  _clipboardAboutText.debug=_clipboardAboutText.size+"px "+_clipboardAboutText.font;
  _clipboardVersionText.x=_clipboard.x+46*scale;
  _clipboardVersionText.y=_clipboard.y+60*scale;
  _clipboardVersionText.size=Math.ceil(28*scale);
  _clipboardVersionText.debug=_clipboardVersionText.size+"px "+_clipboardVersionText.font;

  _clipboardSetting1.width=16*scale;
  _clipboardSetting1.height=16*scale;
  _clipboardSetting1.x=_clipboard.x+24*scale;
  _clipboardSetting1.y=_clipboard.y+78*scale;
  _clipboardSetting2.width=16*scale;
  _clipboardSetting2.height=16*scale;
  _clipboardSetting2.x=_clipboard.x+24*scale;
  _clipboardSetting2.y=_clipboard.y+108*scale;
  _clipboardSetting3.width=16*scale;
  _clipboardSetting3.height=16*scale;
  _clipboardSetting3.x=_clipboard.x+24*scale;
  _clipboardSetting3.y=_clipboard.y+138*scale;
  _clipboardSetting4.width=16*scale;
  _clipboardSetting4.height=16*scale;
  _clipboardSetting4.x=_clipboard.x+24*scale;
  _clipboardSetting4.y=_clipboard.y+168*scale;
  _clipboardSetting5.width=16*scale;
  _clipboardSetting5.height=16*scale;
  _clipboardSetting5.x=_clipboard.x+24*scale;
  _clipboardSetting5.y=_clipboard.y+198*scale;
  _clipboardSetting6.x=_clipboard.x+42*scale;
  _clipboardSetting6.y=_clipboard.y+91*scale;
  _clipboardSetting6.size=Math.ceil(16*scale);
  _clipboardSetting6.debug=_clipboardSetting6.size+"px "+_clipboardSetting6.font;
  _clipboardSetting7.x=_clipboard.x+42*scale;
  _clipboardSetting7.y=_clipboard.y+121*scale;
  _clipboardSetting7.size=Math.ceil(16*scale);
  _clipboardSetting7.debug=_clipboardSetting7.size+"px "+_clipboardSetting7.font;
  _clipboardSetting8.x=_clipboard.x+42*scale;
  _clipboardSetting8.y=_clipboard.y+151*scale;
  _clipboardSetting8.size=Math.ceil(16*scale);
  _clipboardSetting8.debug=_clipboardSetting8.size+"px "+_clipboardSetting8.font;
  _clipboardSetting9.x=_clipboard.x+42*scale;
  _clipboardSetting9.y=_clipboard.y+181*scale;
  _clipboardSetting9.size=Math.ceil(16*scale);
  _clipboardSetting9.debug=_clipboardSetting9.size+"px "+_clipboardSetting9.font;
  _clipboardSetting10.x=_clipboard.x+42*scale;
  _clipboardSetting10.y=_clipboard.y+211*scale;
  _clipboardSetting10.size=Math.ceil(16*scale);
  _clipboardSetting10.debug=_clipboardSetting10.size+"px "+_clipboardSetting10.font;

  _clipboardAbout1.x=_clipboard.x+24*scale;
  _clipboardAbout1.y=_clipboard.y+88*scale;
  _clipboardAbout1.size=Math.ceil(15*scale);
  _clipboardAbout1.debug=_clipboardAbout1.size+"px "+_clipboardAbout1.font;

  _clipboardVersion1.x=_clipboard.x+24*scale;
  _clipboardVersion1.y=_clipboard.y+88*scale;
  _clipboardVersion1.size=Math.ceil(15*scale);
  _clipboardVersion1.debug=_clipboardVersion1.size+"px "+_clipboardVersion1.font;

  _blueprint.width=160*scale;
  _blueprint.height=240*scale;
  _blueprint.x=_render.width+_blueprint.width;
  _blueprint.y=_render.height/2-_blueprint.height/2;
  _blueprintSkin.width=72*scale;
  _blueprintSkin.height=122*scale;
  _blueprintSkin.x=_blueprint.x+42*scale;
  _blueprintSkin.y=_blueprint.y+58*scale;
  _blueprintBack.width=28*scale;
  _blueprintBack.height=28*scale;
  _blueprintBack.x=_blueprint.x+124*scale;
  _blueprintBack.y=_blueprint.y+6*scale;
  _blueprintLeft.width=28*scale;
  _blueprintLeft.height=28*scale;
  _blueprintLeft.x=_blueprint.x+8*scale;
  _blueprintLeft.y=_blueprint.y+206*scale;
  _blueprintRight.width=28*scale;
  _blueprintRight.height=28*scale;
  _blueprintRight.x=_blueprint.x+124*scale;
  _blueprintRight.y=_blueprint.y+206*scale;

  _blueprintLevelText.x=_blueprint.x+42*scale;
  _blueprintLevelText.y=_blueprint.y+58*scale;
  _blueprintLevelText.size=Math.ceil(28*scale);
  _blueprintLevelText.debug=_blueprintLevelText.size+"px "+_blueprintLevelText.font;
  _blueprintCustomText.x=_blueprint.x+50*scale;
  _blueprintCustomText.y=_blueprint.y+58*scale;
  _blueprintCustomText.size=Math.ceil(28*scale);
  _blueprintCustomText.debug=_blueprintCustomText.size+"px "+_blueprintCustomText.font;

  _blueprintLevel1.width=24*scale;
  _blueprintLevel1.height=24*scale;
  _blueprintLevel1.x=_blueprint.x+20*scale;
  _blueprintLevel1.y=_blueprint.y+82*scale;
  _blueprintLevel2.width=24*scale;
  _blueprintLevel2.height=24*scale;
  _blueprintLevel2.x=_blueprint.x+20*scale;
  _blueprintLevel2.y=_blueprint.y+110*scale;
  _blueprintLevel3.width=24*scale;
  _blueprintLevel3.height=24*scale;
  _blueprintLevel3.x=_blueprint.x+20*scale;
  _blueprintLevel3.y=_blueprint.y+138*scale;
  _blueprintLevel4.width=24*scale;
  _blueprintLevel4.height=24*scale;
  _blueprintLevel4.x=_blueprint.x+20*scale;
  _blueprintLevel4.y=_blueprint.y+166*scale;
  _blueprintLevel5.width=24*scale;
  _blueprintLevel5.height=24*scale;
  _blueprintLevel5.x=_blueprint.x+20*scale;
  _blueprintLevel5.y=_blueprint.y+194*scale;
  _blueprintLevel6.width=24*scale;
  _blueprintLevel6.height=24*scale;
  _blueprintLevel6.x=_blueprint.x+118*scale;
  _blueprintLevel6.y=_blueprint.y+82*scale;
  _blueprintLevel7.width=24*scale;
  _blueprintLevel7.height=24*scale;
  _blueprintLevel7.x=_blueprint.x+118*scale;
  _blueprintLevel7.y=_blueprint.y+110*scale;
  _blueprintLevel8.width=24*scale;
  _blueprintLevel8.height=24*scale;
  _blueprintLevel8.x=_blueprint.x+118*scale;
  _blueprintLevel8.y=_blueprint.y+138*scale;
  _blueprintLevel9.width=24*scale;
  _blueprintLevel9.height=24*scale;
  _blueprintLevel9.x=_blueprint.x+118*scale;
  _blueprintLevel9.y=_blueprint.y+166*scale;
  _blueprintLevel10.width=24*scale;
  _blueprintLevel10.height=24*scale;
  _blueprintLevel10.x=_blueprint.x+118*scale;
  _blueprintLevel10.y=_blueprint.y+194*scale;

  _blueprintCustom1.x=_blueprint.x+68*scale;;
  _blueprintCustom1.y=_blueprint.y+200*scale;
  _blueprintCustom1.size=Math.ceil(20*scale);
  _blueprintCustom1.value=Number(_player.skin+1)+"/4";
  _blueprintCustom1.debug=_blueprintCustom1.size+"px "+_blueprintCustom1.font;

  _gameUI.width=_currentResolution.width;
  _gameUI.height=24*scale;
  _gameUI.x=0;
  _gameUI.y=0;
  _gameLevel.x=_currentResolution.width-70*scale;
  _gameLevel.y=18*scale;
  _gameLevel.size=Math.ceil(20*scale);
  _gameLevel.debug=_gameLevel.size+"px "+_gameLevel.font;
  _gameHP1.width=16*scale;
  _gameHP1.height=16*scale;
  _gameHP1.x=_currentResolution.width-132*scale;
  _gameHP1.y=4*scale;
  _gameHP2.width=16*scale;
  _gameHP2.height=16*scale;
  _gameHP2.x=_currentResolution.width-114*scale;
  _gameHP2.y=4*scale;
  _gameHP3.width=16*scale;
  _gameHP3.height=16*scale;
  _gameHP3.x=_currentResolution.width-96*scale;
  _gameHP3.y=4*scale;
  _gamePause.width=16*scale;
  _gamePause.height=16*scale;
  _gamePause.x=4*scale;
  _gamePause.y=4*scale;
  _gameScore.x=24*scale;
  _gameScore.y=18*scale;
  _gameScore.size=Math.ceil(20*scale);
  _gameScore.debug=_gameScore.size+"px "+_gameScore.font;
  _gameBossHP1.width=16*scale;
  _gameBossHP1.height=16*scale;
  _gameBossHP1.x=90*scale;
  _gameBossHP1.y=4*scale;
  _gameBossHP2.width=16*scale;
  _gameBossHP2.height=16*scale;
  _gameBossHP2.x=108*scale;
  _gameBossHP2.y=4*scale;
  _gameBossHP3.width=16*scale;
  _gameBossHP3.height=16*scale;
  _gameBossHP3.x=126*scale;
  _gameBossHP3.y=4*scale;
  _gameBossHP4.width=16*scale;
  _gameBossHP4.height=16*scale;
  _gameBossHP4.x=144*scale;
  _gameBossHP4.y=4*scale;
  _gameBossHP5.width=16*scale;
  _gameBossHP5.height=16*scale;
  _gameBossHP5.x=162*scale;
  _gameBossHP5.y=4*scale;
  _gameWater.width=16*scale;
  _gameWater.height=16*scale;
  _gameWater.x=_currentResolution.width-156*scale;
  _gameWater.y=4*scale;

  _wideClipboard.width=264*scale;
  _wideClipboard.height=184*scale;
  _wideClipboard.x=_menuTitle.x-(2*scale);
  _wideClipboard.y=152*scale;
  _wideClipboardForward.width=24*scale;
  _wideClipboardForward.height=24*scale;
  _wideClipboardForward.x=_wideClipboard.x+234*scale;
  _wideClipboardForward.y=_wideClipboard.y;
  _tutorialTitle.x=_wideClipboard.x+82*scale;
  _tutorialTitle.y=_wideClipboard.y+32*scale;
  _tutorialTitle.size=Math.ceil(28*scale);
  _tutorialTitle.debug=_tutorialTitle.size+"px "+_tutorialTitle.font;
  _tutorialText.x=_wideClipboard.x+18*scale;
  _tutorialText.y=_wideClipboard.y+50*scale;
  _tutorialText.size=Math.ceil(12*scale);
  _tutorialText.debug=_tutorialText.size+"px "+_tutorialText.font;

  _rewardTitle.x=_wideClipboard.x+62*scale;
  _rewardTitle.y=_wideClipboard.y+32*scale;
  _rewardTitle.size=Math.ceil(28*scale);
  _rewardTitle.debug=_tutorialTitle.size+"px "+_tutorialTitle.font;
  _rewardIcon.width=24*scale;
  _rewardIcon.height=24*scale;
  _rewardIcon.x=_wideClipboard.x+162*scale;
  _rewardIcon.y=_wideClipboard.y+12*scale;
  _rewardText.x=_wideClipboard.x+18*scale;
  _rewardText.y=_wideClipboard.y+50*scale;
  _rewardText.size=Math.ceil(12*scale);
  _rewardText.debug=_tutorialText.size+"px "+_tutorialText.font;

  _wideBlueprint.width=264*scale;
  _wideBlueprint.height=184*scale;
  _wideBlueprint.x=_menuTitle.x-(2*scale);
  _wideBlueprint.y=152*scale;
  _wideBlueprintForward.width=24*scale;
  _wideBlueprintForward.height=24*scale;
  _wideBlueprintForward.x=_wideBlueprint.x+238*scale;
  _wideBlueprintForward.y=_wideBlueprint.y+158*scale;
  _bossTitle.x=_wideBlueprint.x+12*scale;
  _bossTitle.y=_wideBlueprint.y+24*scale;
  _bossTitle.size=Math.ceil(20*scale);
  _bossTitle.debug=_bossTitle.size+"px "+_bossTitle.font;
  _bossDescription.x=_wideClipboard.x+14*scale;
  _bossDescription.y=_wideClipboard.y+64*scale;
  _bossDescription.size=Math.ceil(12*scale);
  _bossDescription.debug=_bossDescription.size+"px "+_bossDescription.font;

  _player.width=48*scale;
  _player.height=81*scale;
  _player.x=64*scale;
  _player.y=_render.height-12*scale-_player.height;
  _player.initialvy=-12*scale;
  _player.gravity=0.5*scale;
  _playerText.x=0;
  _playerText.y=0;
  _playerText.size=Math.ceil(12*scale);
  _playerText.debug=_playerText.size+"px "+_playerText.font;
  _playerCloud.width=64*scale;
  _playerCloud.height=48*scale;
  _playerCloud.x=16*scale;
  _playerCloud.y=0;
  _playerGun.width=20*scale;
  _playerGun.height=20*scale;
  _playerGun.x=36*scale;
  _playerGun.y=40*scale;
  _playerAmmo.width=16*scale;
  _playerAmmo.height=16*scale;
  _playerAmmo.x=36*scale;
  _playerAmmo.y=40*scale;
  _playerTop.width=40*scale;
  _playerTop.height=4*scale;
  _playerTop.x=0;
  _playerTop.y=0;
  _playerBottom.width=40*scale;
  _playerBottom.height=4*scale;
  _playerBottom.x=0;
  _playerBottom.y=0;
  _playerLeft.width=4*scale;
  _playerLeft.height=69*scale;
  _playerLeft.x=0;
  _playerLeft.y=0;
  _playerRight.width=4*scale;
  _playerRight.height=69*scale;
  _playerRight.x=0;
  _playerRight.y=0;

  _platform.width=0;
  _platform.height=12*scale;
  _platform.x=0;
  _platform.y=0;

  _corner.width=12*scale;
  _corner.height=12*scale;
  _corner.x=0;
  _corner.y=0;

  _laser.width=12*scale;
  _laser.height=12*scale;
  _laser.x=0;
  _laser.y=0;

  _light.width=120*scale;
  _light.height=6*scale;
  _light.x=0;
  _light.y=0;

  _spike.width=16*scale;
  _spike.height=14*scale;
  _spike.x=0;
  _spike.y=0;

  _sign.width=64*scale;
  _sign.height=48*scale;
  _sign.x=0;
  _sign.y=0;

  _boss.width=64*scale;
  _boss.height=98*scale;
  _boss.x=32*scale;
  _boss.y=0;
  _bossText.x=0;
  _bossText.y=0;
  _bossText.size=Math.ceil(12*scale);
  _bossText.debug=_bossText.size+"px "+_bossText.font;
  _bossCloud.width=96*scale;
  _bossCloud.height=72*scale;
  _bossCloud.x=16*scale;
  _bossCloud.y=0;

  _tebulinek.width=64*scale;
  _tebulinek.height=64*scale;
  _tebulinek.x=-_tebulinek.width;
  _tebulinek.y=-_tebulinek.height;
  _tebulinek.vx=0;
  _tebulinek.vy=0;
  _tebulinek.gravity=0.25*scale;

  _attack1.width=48*scale;
  _attack1.height=48*scale;
  _attack1.x=-_attack1.width;
  _attack1.y=-_attack1.height;
  _attack2.width=48*scale;
  _attack2.height=48*scale;
  _attack2.x=-_attack2.width;
  _attack2.y=-_attack2.height;
}

