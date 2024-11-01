/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

let resolutionError=false,ratio=16/9,scale=1.00,fpsLimit=60,lastFrame=0;
let canStart=false,canClick=true,changeScene=false;
let scene=0,sceneTimer=0,changeTimer=0,nextScene=0,musicTimer=0;
let autoScene=false,nextAutoScene=0,autoUnpause=false;
let sfxOn=true,musicOn=true,fullscreenOn=false,tempSfxOn=true,tempMusicOn=true;
    pauseOn=false,pauseChange=false,pauseAnimation=false,menuLoad=false;
let skin=0,hp=6,dead=false,bossHp=10;
let globalMove=0,localMove=0,round=0,score=0,boss=false,defeat=false;
let tutorial=true,teacher=false;

let _html=document.getElementById("html");

let _info=document.getElementById("info");

let _error=document.getElementById("error");

let _load=document.getElementById("load");

let _window={
  width:window.innerWidth,
  height:window.innerHeight,
};

let _audio={
  menu:new Audio("Source/Music/menu.mp3"),
  game:new Audio("Source/Music/game.mp3"),
  boss:new Audio("Source/Music/boss.mp3"),

  load1:new Audio("Source/Sound/load1.mp3"),
  load2:new Audio("Source/Sound/load2.mp3"),
  load3:new Audio("Source/Sound/load3.mp3"),

  click:new Audio("Source/Sound/click.wav"),
  die:new Audio("Source/Sound/die.wav"),
  hit:new Audio("Source/Sound/hit.wav"),
  jump:new Audio("Source/Sound/jump.wav"),
  laser:new Audio("Source/Sound/laser.wav"),
  paper:new Audio("Source/Sound/paper.wav"),
  lightning:new Audio("Source/Sound/lightning.mp3"),

  bossDie:new Audio("Source/Sound/bossDie.wav"),
  bossHit:new Audio("Source/Sound/bossHit.wav"),
  bossStart:new Audio("Source/Sound/bossStart.mp3"),
};

let _mouse={
  width:24,height:24,

  x:0,y:0,
};

let _currentResolution={
  width:640,height:360,
};

let _render={
  base:document.getElementById("render"),

  width:window.innerWidth,
  height:window.innerHeight,
};

let _context=_render.base.getContext("2d");

let _keyState={
  left:false,
  right:false,
};

let _currentPlatform,_currentSpike,_currentCorner,_currentLaser,_currentLight,_currentSign;

let _background={
  width:640,height:360,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),

  color0:"#002f6d",
  color1:"#e40002",
  color2:"#037aa2",
};

let _change={
  width:640,height:360,

  x:0,y:0,

  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
  img4:new Image()
}

let _versionText={
  value:"Test 15",

  size:36,
  on:false,
  animation:false,
  font:"orangeKid",
  debug:"",
  color:"red",

  x:0,y:0,
}

let _startText={
  value:"Naciśnij Enter aby rozpocząć",

  size:24,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
}

let _startTEB={
  width:128,height:128,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
};

let _menuTitle={
  width:480,height:270,

  x:0,y:0,

  img:new Image(),
};

let _menuStart={
  width:32,height:32,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuStartText={
  value:"Start",

  size:24,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _menuLevel={
  width:32,height:32,

  x:0,y:0,

  hover:false,
  on:false,
  animation:false,
  lateanimation:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuLevelText={
  value:"Poziomy",

  size:24,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _menuMenu={
  width:32,height:32,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuMenuText={
  value:"Menu",

  size:24,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _menuSetting={
  width:32,height:32,

  x:0,y:0,

  hover:false,
  on:false,
  animation:false,
  lateanimation:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuSettingText={
  value:"Opcje",

  size:24,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _menuAbout={
  width:32,height:32,

  x:0,y:0,

  hover:false,
  on:false,
  animation:false,
  lateanimation:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuAboutText={
  value:"O grze",

  size:24,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _menuCustom={
  width:32,height:32,

  x:0,y:0,

  hover:false,
  on:false,
  animation:false,
  lateanimation:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuCustomText={
  value:"Postać",

  size:24,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};

let _clipboard={
  width:128,height:184,

  x:0,y:0,

  on:false,
  close:false,

  img:new Image(),
};
let _clipboardBack={
  width:24,height:24,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};

let _clipboardLevelText={
  value:"Poziomy",

  size:24,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};
let _clipboardSettingText={
  value:"Opcje",

  size:24,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};
let _clipboardAboutText={
  value:"O grze",

  size:24,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};

let _clipboardLevel1={
  width:16,height:16,

  x:0,y:0,

  img:new Image(),
};
let _clipboardLevel2={
  width:16,height:16,

  x:0,y:0,

  img:new Image(),
};
let _clipboardLevel3={
  width:16,height:16,

  x:0,y:0,

  img:new Image(),
};
let _clipboardLevel4={
  width:16,height:16,

  x:0,y:0,

  img:new Image(),
};
let _clipboardLevel5={
  width:16,height:16,

  x:0,y:0,

  img:new Image(),
};
let _clipboardLevel6={
  width:16,height:16,

  x:0,y:0,

  img:new Image(),
};
let _clipboardLevel7={
  width:16,height:16,

  x:0,y:0,

  img:new Image(),
};
let _clipboardLevel8={
  width:16,height:16,

  x:0,y:0,

  img:new Image(),
};

let _clipboardSetting1={
  width:32,height:32,

  x:0,y:0,

  img:new Image(),
  imgOn:new Image(),
};
let _clipboardSetting2={
  width:32,height:32,

  x:0,y:0,

  img:new Image(),
  imgOn:new Image(),
};
let _clipboardSetting3={
  width:32,height:32,

  x:0,y:0,

  img:new Image(),
  imgOn:new Image(),
};
let _clipboardSetting4={
  value:"Dźwięk",

  size:16,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};
let _clipboardSetting5={
  value:"Muzyka",

  size:16,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};
let _clipboardSetting6={
  value:"Pełne Okno",

  size:16,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};

let _clipboardAbout1={
  value:"Gra TEBOWY DZIEŃ\nzostała stworzona\nz myślą o naszych\nuczniach. Mamy\nnadzieję, że sprawi\nona wiele uśmiechu\nna Waszych twarzach\ni radości z grania!",

  size:12,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};

let _blueprint={
  width:128,height:184,

  x:0,y:0,

  on:false,
  close:false,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
};
let _blueprintBack={
  width:24,height:24,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};
let _blueprintLeft={
  width:24,height:24,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};
let _blueprintRight={
  width:24,height:24,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};

let _blueprintGeneral1={
  value:"Postać",

  size:20,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _blueprintGeneral2={
  value:Number(skin+1)+"/4",

  size:20,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};

let _gameUI={
  width:640,
  height:24,

  x:0,y:0,

  color:"rgba(0,0,0,0.50)",
};
let _gamePause={
  width:16,height:16,

  x:0,y:0,

  img:new Image(),
};
let _gameLevel={
  value:"Poziom: "+Number(scene-1)+"-"+round,

  size:20,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _gameHP1={
  width:16,
  height:16,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
};
let _gameHP2={
  width:16,
  height:16,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
};
let _gameHP3={
  width:16,
  height:16,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
};
let _gameScore={
  value:"Wynik: "+score,

  size:20,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _gameBossHP1={
  width:16,
  height:16,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
};
let _gameBossHP2={
  width:16,
  height:16,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
};
let _gameBossHP3={
  width:16,
  height:16,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
};
let _gameBossHP4={
  width:16,
  height:16,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
};
let _gameBossHP5={
  width:16,
  height:16,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
};
let _wideClipboard={
  width:184,height:184,

  x:0,y:0,

  img:new Image(),
};
let _wideClipboardForward={
  width:24,height:24,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};
let _tutorialTitle={
  value:"Poradnik",

  size:24,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};
let _tutorialText={
  value:"Poruszaj się za pomocą [a] i [d] lub\n[<-] i [->]. Podskakuj za pomocą [w],\n[^] lub [_]. Twoim celem jest dostać się\nna górę poziomu i pokonać danego\n"+
        "nauczyciela. Po drodze musisz omijać\nprzeszkody w postaci kolców i laserów.\nW trudnej sytuacji użyj Tebulinka.\n\nŻyczymy szczęścia!",

  size:12,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};

let _wideBlueprint={
  width:184,height:184,

  x:0,y:0,

  img:new Image(),
};
let _wideBlueprintForward={
  width:24,height:24,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};
let _bossTitle={
  value0:"Tomasz Staniszewski",

  size:20,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _bossDescription={
  value0:"Nauczyciel z pasją, zwany często\nPanem Gołębiem. Twórca Twojej\nplatformówki. "+
         "Dzięki niemu poznasz\nwszystkie tajniki aplikacji webowych,\ndesktopowych i mobilnych.",

  size:12,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};

let _player={
  width:48,height:81,

  x:0,y:0,
  vx:0,vy:0,
  initialvy:-12,

  gravity:0.5,
  upTimer:0,
  invisible:0,
  max:60,

  touched:false,
  active:false,
  grounded:false,
  jumped:false,
  left:false,
  fly:false,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
  img0left:new Image(),
  img1left:new Image(),
  img2left:new Image(),
  img3left:new Image(),
};
let _playerText={
  value:"-0 puntków\nz zachowania",

  size:12,
  font:"orangeKid",
  debug:"",
  color0:"rgba(225,0,0,1)",
  color1:"rgba(225,0,0,0.75)",
  color2:"rgba(225,0,0,0.5)",
  color3:"rgba(225,0,0,0.25)",

  x:0,y:0,
};
let _playerTop={
  w:40,h:4,

  x:0,y:0,
};
let _playerBottom={
  w:40,h:4,

  x:0,y:0,
};
let _playerLeft={
  w:4,h:69,

  x:0,y:0,
};
let _playerRight={
  w:4,h:69,

  x:0,y:0,
};

let _platform={
  array:[],

  w:128,h:12,

  x:0,y:0,

  lenght:0,
  currentLenght:0,
  load:13,
  currentLoad:0,
  currentCount:0,
  level:0,
  lastLevel:0,
  random:0,
  lastx:0,
  lasty:0,
  besty:0,

  img:new Image(),
};

let _corner={
  array:[],

  w:12,h:12,

  x:0,y:0,

  lenght:-1,
  currentLenght:0,

  left:false,

  img0:new Image(),
  img1:new Image(),
};

let _laser={
  array:[],

  w:12,h:12,

  x:0,y:0,

  lenght:-1,
  currentLenght:0,
  timer:0,
  max:60,

  left:false,

  img0:new Image(),
  img1:new Image(),
};

let _light={
  array:[],

  w:120,h:6,

  x:0,y:0,

  lenght:-1,
  currentLenght:0,

  color0:"rgba(255,255,255,1)",
  color1:"rgba(255,255,255,0.5)",
  color2:"rgba(255,255,255,0.15)",
};

let _spike={
  array:[],

  w:16,h:16,

  x:0,y:0,

  lenght:-1,
  currentLenght:0,
  random:0,
  count:0,

  checked:false,
  detected:false,
  
  img:new Image(),
};

let _sign={
  array:[],

  w:64,h:64,

  x:0,y:0,

  lenght:-1,
  currentLenght:0,

  boss:false,
  
  img0:new Image(),
  img1:new Image(),
};

let _boss={
  w:64,h:108,

  x:0,y:0,

  invisible:0,
  random1:0,
  random2:0,
  random3:0,
  max:60,
  id:0,

  load:false,
  left:false,

  img0:new Image(),
  img1:new Image(),
};
let _bossText={
  value:"-0 puntków\nz zachowania",

  size:12,
  font:"orangeKid",
  debug:"",
  color0:"rgba(225,0,0,1)",
  color1:"rgba(225,0,0,0.75)",
  color2:"rgba(225,0,0,0.5)",
  color3:"rgba(225,0,0,0.25)",

  x:0,y:0,
};
let _cloud={
  w:96,h:64,

  x:0,y:0,

  timer:0,
  random:0,

  attack:false,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
  img0left:new Image(),
  img1left:new Image(),
  img2left:new Image(),
};
let _lightning={
  w:4,h:240,

  x:0,y:0,

  unused:true,

  color0:"rgba(255,255,0,1)",
  color1:"rgba(255,255,0,0.5)",
};

let _tebulinek={
  w:64,h:64,

  x:0,y:0,
  vx:0,vy:0,

  gravity:0.25,
  timer:0,
  side:0,

  unused:true,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
};

let _computer={
  w:48,h:48,

  x:0,y:0,
  vx:0,vy:0,

  gravity:0.25,
  timer:0,
  side:0,

  unused:true,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
};
let _keyboard={
  w:48,h:48,

  x:0,y:0,
  vx:0,vy:0,

  gravity:0.25,
  timer:0,
  side:0,

  unused:true,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
};
let _coffe={
  w:48,h:48,

  x:0,y:0,
  vx:0,vy:0,

  gravity:0.25,
  timer:0,
  side:0,

  unused:true,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
};
let _dove={
  w:48,h:48,

  x:0,y:0,
  vx:0,vy:0,

  gravity:0.25,
  timer:0,
  side:0,

  unused:true,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
};

_audio.menu.load();
_audio.game.load();
_audio.boss.load();

_audio.menu.volume=0.25;
_audio.game.volume=0.25;
_audio.boss.volume=0.25;

_audio.load1.load();
_audio.load2.load();
_audio.load3.load();

_audio.load1.volume=1;
_audio.load2.volume=1;
_audio.load3.volume=1;

_audio.click.load();
_audio.die.load();
_audio.hit.load();
_audio.jump.load();
_audio.laser.load();
_audio.paper.load();
_audio.lightning.load();

_audio.click.volume=1;
_audio.die.volume=0.25;
_audio.hit.volume=0.25;
_audio.jump.volume=0.25;
_audio.laser.volume=0.25;
_audio.paper.volume=0.25;
_audio.lightning.volume=0.25;

_audio.bossDie.load();
_audio.bossHit.load();
_audio.bossStart.load();

_audio.bossDie.volume=0.25;
_audio.bossHit.volume=0.25;
_audio.bossStart.volume=0.25;

_background.img0.src="Source/Object/background.png";
_background.img1.src="Source/Object/gameground.png";

_change.img1.src="Source/UI/Transition/1.png";
_change.img2.src="Source/UI/Transition/2.png";
_change.img3.src="Source/UI/Transition/3.png";
_change.img4.src="Source/UI/Transition/4.png";

_startTEB.img0.src="Source/Object/TEB/teb0.png";
_startTEB.img1.src="Source/Object/TEB/teb1.png";
_startTEB.img2.src="Source/Object/TEB/teb2.png";

_menuTitle.img.src="Source/title.png";

_menuStart.img.src="Source/UI/Button/start.png";
_menuStart.imgOn.src="Source/UI/Button/startOn.png";
_menuMenu.img.src="Source/UI/Button/menu.png";
_menuMenu.imgOn.src="Source/UI/Button/menuOn.png";
_menuLevel.img.src="Source/UI/Button/level.png";
_menuLevel.imgOn.src="Source/UI/Button/levelOn.png";
_menuSetting.img.src="Source/UI/Button/setting.png";
_menuSetting.imgOn.src="Source/UI/Button/settingOn.png";
_menuAbout.img.src="Source/UI/Button/about.png";
_menuAbout.imgOn.src="Source/UI/Button/aboutOn.png";
_menuCustom.img.src="Source/UI/Button/custom.png";
_menuCustom.imgOn.src="Source/UI/Button/customOn.png";

_clipboard.img.src="Source/UI/clipboard.png";
_clipboardBack.img.src="Source/UI/back.png";
_clipboardBack.imgOn.src="Source/UI/backOn.png";

_clipboardLevel1.img.src="Source/UI/Level/1.png";
_clipboardLevel2.img.src="Source/UI/Level/2.png";
_clipboardLevel3.img.src="Source/UI/Level/3.png";
_clipboardLevel4.img.src="Source/UI/Level/4.png";
_clipboardLevel5.img.src="Source/UI/Level/5.png";
_clipboardLevel6.img.src="Source/UI/Level/6.png";
_clipboardLevel7.img.src="Source/UI/Level/7.png";
_clipboardLevel8.img.src="Source/UI/Level/8.png";

_blueprint.img0.src="Source/UI/Blueprint/boy0.png";
_blueprint.img1.src="Source/UI/Blueprint/boy1.png";
_blueprint.img2.src="Source/UI/Blueprint/girl0.png";
_blueprint.img3.src="Source/UI/Blueprint/girl1.png";
_blueprintBack.img.src="Source/UI/right.png";
_blueprintBack.imgOn.src="Source/UI/rightOn.png";
_blueprintLeft.img.src="Source/UI/left.png";
_blueprintLeft.imgOn.src="Source/UI/leftOn.png";
_blueprintRight.img.src="Source/UI/right.png";
_blueprintRight.imgOn.src="Source/UI/rightOn.png";

_clipboardSetting1.img.src="Source/UI/O.png";
_clipboardSetting1.imgOn.src="Source/UI/X.png";
_clipboardSetting2.img.src="Source/UI/O.png";
_clipboardSetting2.imgOn.src="Source/UI/X.png";
_clipboardSetting3.img.src="Source/UI/O.png";
_clipboardSetting3.imgOn.src="Source/UI/X.png";

_gameHP1.img0.src="Source/UI/Heart/heart.png";
_gameHP1.img1.src="Source/UI/Heart/half.png";
_gameHP1.img2.src="Source/UI/Heart/empty.png";
_gameHP2.img0.src="Source/UI/Heart/heart.png";
_gameHP2.img1.src="Source/UI/Heart/half.png";
_gameHP2.img2.src="Source/UI/Heart/empty.png";
_gameHP3.img0.src="Source/UI/Heart/heart.png";
_gameHP3.img1.src="Source/UI/Heart/half.png";
_gameHP3.img2.src="Source/UI/Heart/empty.png";

_gamePause.img.src="Source/UI/pause.png";

_gameBossHP1.img0.src="Source/UI/Heart/bossHeart.png";
_gameBossHP1.img1.src="Source/UI/Heart/bossHalf.png";
_gameBossHP1.img2.src="Source/UI/Heart/bossEmpty.png";
_gameBossHP2.img0.src="Source/UI/Heart/bossHeart.png";
_gameBossHP2.img1.src="Source/UI/Heart/bossHalf.png";
_gameBossHP2.img2.src="Source/UI/Heart/bossEmpty.png";
_gameBossHP3.img0.src="Source/UI/Heart/bossHeart.png";
_gameBossHP3.img1.src="Source/UI/Heart/bossHalf.png";
_gameBossHP3.img2.src="Source/UI/Heart/bossEmpty.png";
_gameBossHP4.img0.src="Source/UI/Heart/bossHeart.png";
_gameBossHP4.img1.src="Source/UI/Heart/bossHalf.png";
_gameBossHP4.img2.src="Source/UI/Heart/bossEmpty.png";
_gameBossHP5.img0.src="Source/UI/Heart/bossHeart.png";
_gameBossHP5.img1.src="Source/UI/Heart/bossHalf.png";
_gameBossHP5.img2.src="Source/UI/Heart/bossEmpty.png";

_wideClipboard.img.src="Source/UI/wideClipboard.png";
_wideClipboardForward.img.src="Source/UI/forward.png";
_wideClipboardForward.imgOn.src="Source/UI/forwardOn.png";

_wideBlueprint.img.src="Source/UI/wideBlueprint.png";
_wideBlueprintForward.img.src="Source/UI/right.png";
_wideBlueprintForward.imgOn.src="Source/UI/rightOn.png";

_player.img0.src="Source/Object/Player/boy0.png";
_player.img1.src="Source/Object/Player/boy1.png";
_player.img2.src="Source/Object/Player/girl0.png";
_player.img3.src="Source/Object/Player/girl1.png";
_player.img0left.src="Source/Object/Player/boy0left.png";
_player.img1left.src="Source/Object/Player/boy1left.png";
_player.img2left.src="Source/Object/Player/girl0left.png";
_player.img3left.src="Source/Object/Player/girl1left.png";

_platform.img.src="Source/Object/platform.png";

_corner.img0.src="Source/Object/Corner/left.png";
_corner.img1.src="Source/Object/Corner/right.png";

_laser.img0.src="Source/Object/Laser/left.png";
_laser.img1.src="Source/Object/Laser/right.png";

_spike.img.src="Source/Object/spike.png";

_sign.img0.src="Source/Object/next.png";
_sign.img1.src="Source/Object/boss.png";

_boss.img0.src="Source/Object/People/TS.png";
_boss.img1.src="Source/Object/People/TSLeft.png";

_cloud.img0.src="Source/Object/Cloud/0Left.png";
_cloud.img1.src="Source/Object/Cloud/1Left.png";
_cloud.img2.src="Source/Object/Cloud/2Left.png";
_cloud.img0left.src="Source/Object/Cloud/0.png";
_cloud.img1left.src="Source/Object/Cloud/1.png";
_cloud.img2left.src="Source/Object/Cloud/2.png";

_tebulinek.img0.src="Source/Object/Attack/Tebulinek/0.png";
_tebulinek.img1.src="Source/Object/Attack/Tebulinek/90.png";
_tebulinek.img2.src="Source/Object/Attack/Tebulinek/180.png";
_tebulinek.img3.src="Source/Object/Attack/Tebulinek/270.png";

_computer.img0.src="Source/Object/Attack/Computer/0.png";
_computer.img1.src="Source/Object/Attack/Computer/90.png";
_computer.img2.src="Source/Object/Attack/Computer/180.png";
_computer.img3.src="Source/Object/Attack/Computer/270.png";
_keyboard.img0.src="Source/Object/Attack/Keyboard/0.png";
_keyboard.img1.src="Source/Object/Attack/Keyboard/90.png";
_keyboard.img2.src="Source/Object/Attack/Keyboard/180.png";
_keyboard.img3.src="Source/Object/Attack/Keyboard/270.png";
_coffe.img0.src="Source/Object/Attack/Coffe/0.png";
_coffe.img1.src="Source/Object/Attack/Coffe/90.png";
_coffe.img2.src="Source/Object/Attack/Coffe/180.png";
_coffe.img3.src="Source/Object/Attack/Coffe/270.png";
_dove.img0.src="Source/Object/Attack/Dove/0.png";
_dove.img1.src="Source/Object/Attack/Dove/90.png";
_dove.img2.src="Source/Object/Attack/Dove/180.png";
_dove.img3.src="Source/Object/Attack/Dove/270.png";
