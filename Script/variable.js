/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

let resolutionError=false,ratio=16/9,scale=1.00;
let fpsLimit=60,lastFrame=0;
let canStart=false,canClick=true,changeScene=false;
let scene=0,sceneTimer=0,changeTimer=0,nextScene=0;
let sfxOn=true,musicOn=false,fullscreenOn=false;
let pauseOn=false,pauseChange=false,pauseAnimation=false;
let hp=6,globalMove=0,round=0,score=0,dead=false;

let _html=document.getElementById("html");

let _error=document.getElementById("error");

let _window={
  width:window.innerWidth,
  height:window.innerHeight,
  ratio:window.innerWidth/window.innerHeight,
};

let _audio={
  load1:new Audio("Source/Sound/load1.mp3"),
  load2:new Audio("Source/Sound/load2.mp3"),
  load3:new Audio("Source/Sound/load3.mp3"),
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
  a:false,
  d:false,
  left:false,
  right:false
};

let _currentPlatform,_currentSpike;

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
  value:"Test 6",

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
  value:"Some random game\ndescription here!",

  size:12,
  font:"orangeKid",
  debug:"",
  color:"black",

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

let _player={
  width:48,height:81,

  x:0,y:0,
  vx:0,vy:0,
  initialvy:-12,

  img:new Image(),

  gravity:0.5,
  fallentimer:0,
  checkTimer:0,
  upTimer:0,

  touched:false,
  stay:false,
  grounded:false,
  checked:false,
  jumped:false,
};
let _playerTop={
  w:24,h:12,

  x:0,y:0,

  color:"green",
};
let _playerBottom={
  w:24,h:12,

  x:0,y:0,

  color:"green",
};
let _playerLeft={
  w:12,h:105,

  x:0,y:0,

  color:"red",
};
let _playerRight={
  w:12,h:105,

  x:0,y:0,

  color:"red",
};
let _playerCheckTop={
  w:24,h:24,

  x:0,y:0,

  color:"blue",
};
let _playerCheckBottom={
  w:24,h:24,

  x:0,y:0,

  color:"white",
};

let _platform={
  array:[],

  w:128,h:8,

  x:0,y:0,

  lenght:-1,
  currentlenght:0,
  load:35,
  currentload:0,
  level:0,
  lastlevel:0,
  highestposition:0,
  random:0,
  lastx:0,

  main:false,

  color:"white",
};

let _spike={
  array:[],

  w:16,h:16,

  x:0,y:0,
  lenght:-1,
  currentlenght:0,
  random1:0,
  random2:0,

  color:"red",
};

let _boss={
  w:64,h:108,

  x:0,y:0,

  timer:0,

  load:false,

  img0:new Image(),
};

let _tebulinek={
  w:64,h:32,

  x:0,y:0,
  vy:0,

  gravity:0.25,

  img:new Image(),
};

_audio.load1.load();
_audio.load2.load();
_audio.load3.load();

_background.img0.src="Source/background.png";
_background.img1.src="Source/gameground.png";

_change.img1.src="Source/UI/Transition/1.png";
_change.img2.src="Source/UI/Transition/2.png";
_change.img3.src="Source/UI/Transition/3.png";
_change.img4.src="Source/UI/Transition/4.png";

_startTEB.img0.src="Source/TEB/teb0.png";
_startTEB.img1.src="Source/TEB/teb1.png";
_startTEB.img2.src="Source/TEB/teb2.png";

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

_player.img.src="Source/Player/test.png";

_boss.img0.src="Source/People/TS.png";

_tebulinek.img.src="Source/Attack/tebulinek.png";
