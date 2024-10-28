/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

window.defaultvalue=function(){
  _background.width=_currentResolution.width;
  _background.height=_currentResolution.height;
  _background.x=0;
  _background.y=0;

  _change.width=_currentResolution.width;
  _change.height=_currentResolution.height;
  _change.x=0;
  _change.y=0;

  _versionText.x=32*scale;
  _versionText.y=48*scale;
  _versionText.size=Math.ceil(36*scale);
  _versionText.debug=_versionText.size+"px "+_versionText.font;

  _startText.x=_render.width/2-116*scale;
  _startText.y=_background.height-32*scale;
  _startText.size=Math.ceil(24*scale);
  _startText.debug=_startText.size+"px "+_startText.font;

  _startTEB.width=128*scale;
  _startTEB.height=128*scale;
  _startTEB.x=_render.width/2-_startTEB.width/2;
  _startTEB.y=_render.height/2-_startTEB.height/2;

  _menuTitle.width=480*scale;
  _menuTitle.height=270*scale;
  _menuTitle.x=_render.width/2-_menuTitle.width/2;
  _menuTitle.y=-32*scale;

  _menuStart.width=32*scale;
  _menuStart.height=32*scale;
  _menuStart.x=_render.width/2-_menuStart.width/2+32*scale;
  _menuStart.y=_render.height-168*scale;
  _menuStartText.x=_menuStart.x-48*scale;
  _menuStartText.y=_menuStart.y+24*scale;
  _menuStartText.size=Math.ceil(24*scale);
  _menuStartText.debug=_menuStartText.size+"px "+_menuStartText.font;
  _menuLevel.width=32*scale;
  _menuLevel.height=32*scale;
  _menuLevel.x=_render.width/2-_menuStart.width/2-32*scale;
  _menuLevel.y=_render.height-128*scale;
  _menuLevelText.x=_menuLevel.x+38*scale;
  _menuLevelText.y=_menuLevel.y+24*scale;
  _menuLevelText.size=Math.ceil(24*scale);
  _menuLevelText.debug=_menuLevelText.size+"px "+_menuLevelText.font;
  _menuMenu.width=32*scale;
  _menuMenu.height=32*scale;
  _menuMenu.x=_render.width/2-_menuStart.width/2-32*scale;
  _menuMenu.y=_render.height-128*scale;
  _menuMenuText.x=_menuLevelText.x;
  _menuMenuText.y=_menuLevelText.y;
  _menuMenuText.size=Math.ceil(24*scale);
  _menuMenuText.debug=_menuMenuText.size+"px "+_menuMenuText.font;
  _menuSetting.width=32*scale;
  _menuSetting.height=32*scale;
  _menuSetting.x=_render.width/2-_menuStart.width/2+32*scale;
  _menuSetting.y=_render.height-88*scale;
  _menuSettingText.x=_menuSetting.x-48*scale;
  _menuSettingText.y=_menuSetting.y+24*scale;
  _menuSettingText.size=Math.ceil(24*scale);
  _menuSettingText.debug=_menuSettingText.size+"px "+_menuSettingText.font;
  _menuAbout.width=32*scale;
  _menuAbout.height=32*scale;
  _menuAbout.x=_render.width/2-_menuStart.width/2-32*scale;
  _menuAbout.y=_render.height-48*scale;
  _menuAboutText.x=_menuAbout.x+38*scale;
  _menuAboutText.y=_menuAbout.y+24*scale;
  _menuAboutText.size=Math.ceil(24*scale);
  _menuAboutText.debug=_menuAboutText.size+"px "+_menuAboutText.font;
  _menuCustom.width=32*scale;
  _menuCustom.height=32*scale;
  _menuCustom.x=592*scale;
  _menuCustom.y=312*scale;
  _menuCustomText.x=_menuCustom.x-60*scale;
  _menuCustomText.y=_menuCustom.y+24*scale;
  _menuCustomText.size=Math.ceil(24*scale);
  _menuCustomText.debug=_menuCustomText.size+"px "+_menuCustomText.font;

  _clipboard.width=128*scale;
  _clipboard.height=184*scale;
  _clipboard.x=-280*scale;
  _clipboard.y=_render.height/2-_clipboard.height/2;
  _clipboardBack.width=24*scale;
  _clipboardBack.height=24*scale;
  _clipboardBack.x=_clipboard.x+4*scale;
  _clipboardBack.y=_clipboard.y+4*scale;

  _clipboardLevelText.x=0;
  _clipboardLevelText.y=_clipboard.y+48*scale;
  _clipboardLevelText.size=Math.ceil(24*scale);
  _clipboardLevelText.debug=_clipboardLevelText.size+"px "+_clipboardLevelText.font;
  _clipboardSettingText.x=0;
  _clipboardSettingText.y=_clipboard.y+48*scale;
  _clipboardSettingText.size=Math.ceil(24*scale);
  _clipboardSettingText.debug=_clipboardSettingText.size+"px "+_clipboardSettingText.font;
  _clipboardAboutText.x=0;
  _clipboardAboutText.y=_clipboard.y+48*scale;
  _clipboardAboutText.size=Math.ceil(24*scale);
  _clipboardAboutText.debug=_clipboardAboutText.size+"px "+_clipboardAboutText.font;

  _clipboardLevel1.width=16*scale;
  _clipboardLevel1.height=16*scale;
  _clipboardLevel1.x=0;
  _clipboardLevel1.y=_clipboard.y+70*scale;
  _clipboardLevel2.width=16*scale;
  _clipboardLevel2.height=16*scale;
  _clipboardLevel2.x=0;
  _clipboardLevel2.y=_clipboard.y+92*scale;
  _clipboardLevel3.width=16*scale;
  _clipboardLevel3.height=16*scale;
  _clipboardLevel3.x=0;
  _clipboardLevel3.y=_clipboard.y+114*scale;
  _clipboardLevel4.width=16*scale;
  _clipboardLevel4.height=16*scale;
  _clipboardLevel4.x=0;
  _clipboardLevel4.y=_clipboard.y+136*scale;
  _clipboardLevel5.width=16*scale;
  _clipboardLevel5.height=16*scale;
  _clipboardLevel5.x=0;
  _clipboardLevel5.y=_clipboard.y+70*scale;
  _clipboardLevel6.width=16*scale;
  _clipboardLevel6.height=16*scale;
  _clipboardLevel6.x=0;
  _clipboardLevel6.y=_clipboard.y+92*scale;
  _clipboardLevel7.width=16*scale;
  _clipboardLevel7.height=16*scale;
  _clipboardLevel7.x=0;
  _clipboardLevel7.y=_clipboard.y+114*scale;
  _clipboardLevel8.width=16*scale;
  _clipboardLevel8.height=16*scale;
  _clipboardLevel8.x=0;
  _clipboardLevel8.y=_clipboard.y+136*scale;

  _clipboardSetting1.width=16*scale;
  _clipboardSetting1.height=16*scale;
  _clipboardSetting1.x=0;
  _clipboardSetting1.y=_clipboard.y+70*scale;
  _clipboardSetting2.width=16*scale;
  _clipboardSetting2.height=16*scale;
  _clipboardSetting2.x=0;
  _clipboardSetting2.y=_clipboard.y+102*scale;
  _clipboardSetting3.width=16*scale;
  _clipboardSetting3.height=16*scale;
  _clipboardSetting3.x=0;
  _clipboardSetting3.y=_clipboard.y+134*scale;
  _clipboardSetting4.x=0;
  _clipboardSetting4.y=_clipboard.y+83*scale;
  _clipboardSetting4.size=Math.ceil(16*scale);
  _clipboardSetting4.debug=_clipboardSetting4.size+"px "+_clipboardSetting4.font;
  _clipboardSetting5.x=0;
  _clipboardSetting5.y=_clipboard.y+115*scale;
  _clipboardSetting5.size=Math.ceil(16*scale);
  _clipboardSetting5.debug=_clipboardSetting5.size+"px "+_clipboardSetting5.font;
  _clipboardSetting6.x=0;
  _clipboardSetting6.y=_clipboard.y+147*scale;
  _clipboardSetting6.size=Math.ceil(16*scale);
  _clipboardSetting6.debug=_clipboardSetting6.size+"px "+_clipboardSetting6.font;

  _clipboardAbout1.x=0;
  _clipboardAbout1.y=_clipboard.y+68*scale;
  _clipboardAbout1.size=Math.ceil(12*scale);
  _clipboardAbout1.debug=_clipboardAbout1.size+"px "+_clipboardAbout1.font;

  _blueprint.width=128*scale;
  _blueprint.height=184*scale;
  _blueprint.x=+780*scale;
  _blueprint.y=_render.height/2-_clipboard.height/2;
  _blueprintBack.width=24*scale;
  _blueprintBack.height=24*scale;
  _blueprintBack.x=_blueprint.x+92*scale;
  _blueprintBack.y=_blueprint.y+2*scale;
  _blueprintLeft.width=24*scale;
  _blueprintLeft.height=24*scale;
  _blueprintLeft.x=_blueprint.x+10*scale;
  _blueprintLeft.y=_blueprint.y+158*scale;
  _blueprintRight.width=24*scale;
  _blueprintRight.height=24*scale;
  _blueprintRight.x=_blueprint.x+92*scale;
  _blueprintRight.y=_blueprint.y+158*scale;

  _blueprintGeneral1.x=_blueprint.x+16*scale;
  _blueprintGeneral1.y=_blueprint.y+20*scale;
  _blueprintGeneral1.size=Math.ceil(20*scale);
  _blueprintGeneral1.debug=_blueprintGeneral1.size+"px "+_blueprintGeneral1.font;
  _blueprintGeneral2.x=_blueprint.x+54*scale;
  _blueprintGeneral2.y=_blueprint.y+176*scale;
  _blueprintGeneral2.size=Math.ceil(20*scale);
  _blueprintGeneral2.value=Number(skin+1)+"/4";
  _blueprintGeneral2.debug=_blueprintGeneral2.size+"px "+_blueprintGeneral2.font;

  _gameUI.width=_currentResolution.width;
  _gameUI.height=24*scale;
  _gameUI.x=0;
  _gameUI.y=0;
  _gameLevel.x=_currentResolution.width-78*scale;
  _gameLevel.y=18*scale;
  _gameLevel.size=Math.ceil(20*scale);
  _gameLevel.debug=_gameLevel.size+"px "+_gameLevel.font;
  _gameHP1.width=16*scale;
  _gameHP1.height=16*scale;
  _gameHP1.x=_currentResolution.width-138*scale;
  _gameHP1.y=4*scale;
  _gameHP2.width=16*scale;
  _gameHP2.height=16*scale;
  _gameHP2.x=_currentResolution.width-120*scale;
  _gameHP2.y=4*scale;
  _gameHP3.width=16*scale;
  _gameHP3.height=16*scale;
  _gameHP3.x=_currentResolution.width-102*scale;
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

  _player.width=48*scale;
  _player.height=81*scale;
  _player.x=_render.width/2-_player.width/2;
  _player.y=_render.height-12*scale-_player.height;
  _player.initialvy=-12*scale;
  _player.gravity=0.5*scale;
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
  _spike.height=16*scale;
  _spike.x=0;
  _spike.y=0;

  _sign.width=64*scale;
  _sign.height=64*scale;
  _sign.x=0;
  _sign.y=0;

  _boss.width=64*scale;
  _boss.height=108*scale;
  _boss.x=_render.height*2;
  _boss.y=0;

  _tebulinek.width=64*scale;
  _tebulinek.height=32*scale;
  _tebulinek.x=-_tebulinek.width;
  _tebulinek.y=-_tebulinek.height;
  _tebulinek.gravity=0.25*scale;
}
