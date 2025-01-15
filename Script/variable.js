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

const ratio=16/9,fpsLimit=60;
let resolutionError=false,scale=1.00,lastFrame=0,screenCheckTimer=0;
let canStart=false,canClick=true,changeScene=false;
let scene=0,sceneTimer=0,changeTimer=0,nextScene=0,musicTimer=0;
let autoScene=false,nextAutoScene=0,autoUnpause=false,autoRestart=false;
let sfxOn=true,musicOn=true,tutorialOn=true,teacherOn=true,addonOn=true,
    tempSfxOn=true,tempMusicOn=true,pause=false,pauseChange=false,
    pauseAnimation=false,menuLoad=false;
let tutorial=true,teacher=true,reward=false,dead=false,restart=false;
let globalMove=0,localMove=0,score=0,boss=false,defeat=false;

let _html=document.getElementById("html");
let _error=document.getElementById("error");
let _load=document.getElementById("load");

let _window={
  width:window.innerWidth,
  height:window.innerHeight,
  outWidth:window.outerWidth,
  outHeight:window.outerHeight,
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

  bossDie:new Audio("Source/Sound/bossDie.wav"),
  bossHit:new Audio("Source/Sound/bossHit.wav"),
  bossStart:new Audio("Source/Sound/bossStart.mp3"),
};

let _mouse={
  width:4,height:4,

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
  top:false,
  bottom:false,
};

let _currentPlatform,_currentSpike,_currentCorner,_currentLaser,_currentLight,_currentSign;

let _background={
  width:640,height:360,

  x:0,y:0,

  change:false,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),

  color0:"#002f6d",
  color1:"#e40002",
  color2:"#037aa2",
  color3:"#414141",
  color4:"#0a0a0a",
};
let _backgroundTop={
  width:640,height:360,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
};
let _backgroundRight={
  width:640,height:360,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
};
let _backgroundTopRight={
  width:640,height:360,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
};

let _change={
  width:640,height:360,

  x:0,y:0,

  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
  img4:new Image()
};
let _changeText={
  value:"Menu",

  size:32,
  font:"orangeKid",
  debug:"",

  color0:"rgba(255,255,255,1)",
  color1:"rgba(255,255,255,0.5)",
  color2:"rgba(255,255,255,0.15)",

  x:0,y:0,
};

let _startText={
  value:"Naciśnij Enter aby rozpocząć",

  size:24,
  font:"orangeKid",
  debug:"",

  color0:"rgba(255,255,255,1)",
  color1:"rgba(255,255,255,0.5)",
  color2:"rgba(255,255,255,0.15)",

  x:0,y:0,
};

let _startTEB={
  width:128,height:128,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
};

let _menuUI={
  width:264,
  height:360,

  x:0,y:0,

  color:"rgba(0,0,55,0.75)",
};

let _menuTitle={
  width:480,height:270,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};

let _menuResolution={
  width:16,height:16,

  x:0,y:0,

  img:new Image(),
  imgOn:new Image(),
};

let _menuStart={
  width:42,height:42,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuStartText={
  value:"Start",

  size:32,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _menuLevel={
  width:42,height:42,

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

  size:32,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _menuMenu={
  width:42,height:42,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuMenuText={
  value:"Menu",

  size:32,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _menuSetting={
  width:42,height:42,

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

  size:32,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _menuAbout={
  width:42,height:42,

  x:0,y:0,

  hover:false,
  on:false,
  animation:false,
  lateanimation:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuAboutText={
  value:"Opis",

  size:32,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _menuVersion={
  width:42,height:42,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuVersionText={
  value:"Alpha 1.21;\n15-01-2025",

  size:16,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _menuCustom={
  width:42,height:42,

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

  size:32,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _menuRestart={
  width:42,height:42,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuRestartText={
  value:"Powtórz",

  size:32,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};

let _clipboard={
  width:160,height:240,

  x:0,y:0,

  on:false,
  close:false,
  change:false,

  img:new Image(),
};
let _clipboardBack={
  width:24,height:24,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};

let _clipboardSettingText={
  value:"Opcje",

  size:28,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};
let _clipboardAboutText={
  value:"Opis",

  size:28,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};
let _clipboardVersionText={
  value:"Twórcy",

  size:28,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
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
  width:32,height:32,

  x:0,y:0,

  img:new Image(),
  imgOn:new Image(),
};
let _clipboardSetting5={
  width:32,height:32,

  x:0,y:0,

  img:new Image(),
  imgOn:new Image(),
};
let _clipboardSetting6={
  value:"Dźwięk",

  size:16,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};
let _clipboardSetting7={
  value:"Muzyka",

  size:16,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};
let _clipboardSetting8={
  value:"Poradnik",

  size:16,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};
let _clipboardSetting9={
  value:"Opis Nauczycieli",

  size:16,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};
let _clipboardSetting10={
  value:"Efekty Dodatkowe",

  size:16,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};

let _clipboardAbout1={
  value:"Gra TEBOWY DZIEŃ\nzostała stworzona\nz myślą o naszych\nuczniach. Mamy\nnadzieję, że sprawi\n"+
  "ona wiele uśmiechu\nna Waszych twarzach\ni radości z grania!\nPozdrawiamy :-D",

  size:15,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};

let _clipboardVersion1={
  value:"Nadzorowanie Projektu:\n- TomEDU\nPisanie Kodu:\n- Ciupaga\nDźwięk, Testowanie:\n- idk_10\nMuzyka:\n- M4RCIN-MJJ",

  size:15,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};

let _blueprint={
  width:160,height:240,

  x:0,y:0,

  on:false,
  close:false,
  change:false,

  img0:new Image(),
  img1:new Image(),
};
let _blueprintSkin={
  width:72,height:122,

  x:0,y:0,

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

let _blueprintLevelText={
  value:"Poziomy",

  size:28,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};

let _blueprintLevel1={
  width:24,height:24,

  x:0,y:0,

  img:new Image(),
};
let _blueprintLevel2={
  width:24,height:24,

  x:0,y:0,

  img:new Image(),
};
let _blueprintLevel3={
  width:24,height:24,

  x:0,y:0,

  img:new Image(),
};
let _blueprintLevel4={
  width:24,height:24,

  x:0,y:0,

  img:new Image(),
};
let _blueprintLevel5={
  width:24,height:24,

  x:0,y:0,

  img:new Image(),
};
let _blueprintLevel6={
  width:24,height:24,

  x:0,y:0,

  img:new Image(),
};
let _blueprintLevel7={
  width:24,height:24,

  x:0,y:0,

  img:new Image(),
};
let _blueprintLevel8={
  width:24,height:24,

  x:0,y:0,

  img:new Image(),
};
let _blueprintLevel9={
  width:24,height:24,

  x:0,y:0,

  img:new Image(),
};
let _blueprintLevel10={
  width:24,height:24,

  x:0,y:0,

  img:new Image(),
};

let _blueprintCustomText={
  value:"Postać",

  size:28,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _blueprintCustom1={
  value:Number(1)+"/4",

  size:20,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};

let _gameUI={
  width:640,height:24,

  x:0,y:0,

  color:"rgba(0,0,55,0.75)",
};
let _gamePause={
  width:16,height:16,

  x:0,y:0,

  img:new Image(),
};
let _gameLevel={
  value:"Poziom: "+Number(1),

  size:20,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _gameHP1={
  width:16,height:16,

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
  width:16,height:16,

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
  width:16,height:16,

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
  width:16,height:16,

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
  width:16,height:16,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
};
let _gameWater={
  width:16,height:16,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
  img4:new Image(),
};
let _wideClipboard={
  width:264,height:184,

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
  value:"Poruszaj się za pomocą [A]|[D] lub [Lewo]|[Prawo].\nPodskakuj za pomocą [W]|[Góra]|[Spacja]. Będąc\n"+
        "na chmurce do poruszania używaj [W]|[A]|[S]|[D] lub\n[Góra]|[Lewo]|[Dół]|[Prawo]. Strzelaj za pomocą\n"+
        "[Shift]. Twoim celem jest dostać się na górę poziomu\ni pokonać danego nauczyciela. Po drodze musisz\n"+
        "omijać przeszkody w postaci kolców i laserów.\nW trudnej sytuacji użyj Tebulinka. Życzymy szczęścia!",

  size:12,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};
let _rewardTitle={
  value:"Gratulacje!",

  size:24,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};
let _rewardIcon={
  width:16,height:16,

  x:0,y:0,

  img:new Image(),
};
let _rewardText={
  value:"Udało się Tobie przejść całą\ngrę. Mamy nadzieję że zabawa była\nudana i przy okazji nauczyciele\nwystępujący w grze nie będą straszni\njuż w realu >_o",

  size:12,
  font:"orangeKid",
  debug:"",
  color:"black",

  x:0,y:0,
};

let _wideBlueprint={
  width:264,height:184,

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
  value1:"Radosław Sass",
  value2:"Paweł Kępa",
  value3:"Anna Skarbek Chmielewska",
  value4:"Marta Milde",
  value5:"Anna Świtoń",
  value6:"Piotr Łojek",
  value7:"Iwo Musiałowski",
  valueAdd0:"Wojciech Złotowski",
  valueAdd1:"Anna Niklas",
  valueAdd2:"Iwona Bury-Sierzchuła",

  size:20,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};
let _bossDescription={
  value0:"Nauczyciel z pasją, zwany często\nPanem Gołębiem. Twórca Twojej\nplatformówki. "+
         "Dzięki niemu\npoznasz wszystkie tajniki aplikacji\nwebowych, desktopowych\ni mobilnych. Walka nie będzie łatwa.",
  value1:"Zapalony fotograf i mistrz zdjęć\ndużego formatu. Z nim nie\nbędziesz się nudził/a szczególnie\n"+
         "jeśli planujesz zostać Technikiem\nFotografii i Multimediów. Zajęcia\npraktyczne"+
         "pełne ciekawych\nrozwiązań, a usposobienie Pana\nRadka na szóstkę z koroną!\nWalka nie będzie łatwa.",
  value2:"Mężczyzna pracujący, żadnej\npracy się nie boi! Fotograf\ni Informatyk w jednym, a swoje\n"+
         "umiejętności z powodzeniem łączy\nna kierunkach zawodowych.\nNauczy Cię do egzaminu i sprzeda\n"+
         "przydatną wiedzę życiową! Walka\nnie będzie łatwa.",
  value3:"Ma rękę do biznesów. Z tym\nnauczycielem będzie Ci po\ndrodze jeśli chcesz nauczyć się\n"+
         "Biznesu i Zarządzania. Podstawy\nPrzedsiębiorczości nie są jej\nobce, a wycieczki do Urzędu\n"+
         "Skarbowego murowane. Walka nie\nbędzie łatwa.",
  value4:"Kobieta tysiąca zawodów\ni koordynator chaosu, nie ma\ntakich zadań, z którymi by sobie\n"+
         "nie poradziła! Możesz ją spotkać\nna zajęciach z Cyfrowej Obróbki\nObrazu, Projektów, Plastyki\n"+
         "czy BiZu. Za chwilę będzie\nwychodzić nawet z lodówki! Walka\nnie będzie łatwa.",
  value5:"Kiedy głowa ciąży od problemów,\na serduszko łamie się od zmartwień,\nlekiem na problemy jest Pani Pedagog,\n"+
         "która zawsze znajdzie dla Ciebie czas.\nWalka nie będzie łatwa.",
  value6:"Zwany postrachem tej szkoły. Mistrz\npoligrafii i nauczyciel w jednym. Jeśli\nmyślisz serio o przedmiotach zawodowych,\n"+
         "może Cię potraktować ulgowo… pod\nwarunkiem, że go słuchasz! Walka\nnie będzie łatwa.",
  value7:"To jest dopiero #nauczycielzpasją!\nNie stroni od historycznych przebieranek\n"+
         "i inscenizacji, a jego lekcje historii\npoparte są żywym przykładem. Kolekcjoner\nuzbrojenia i mundrów. Walka nie\nbędzie łatwa.",
  valueAdd0:"Bezpieczeństwo i higiena to przedmiot,\nktóry uczy nasz Dyrektor. Pan\n"+
            "Wojtek zarządza Liceum, a jednocześnie\nprzekazuje praktyczną wiedzę. To jeszcze\nnie koniec!",
  valueAdd1:"Groźna Pani Dyrektor! A skąd!\nWie kiedy pogrozić palcem, mimo\nto uwielbia swoją młodzież\n"+
            "i stara się robić wszystko by\nspełnić ich marzenia. Pod warunkiem,\nże akurat nie dostałeś/aś drugiej nagany.\n"+
            "Daj z siebie wszystko!",
  valueAdd2:"Główna Pani Dyrektor TEB TORUŃ.\nNadzoruje aby wszystko działało jak należy.\nTo już ostateczna walka!",

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
  hp:150,
  skin:0,

  touched:false,
  active:false,
  grounded:false,
  jumped:false,
  left:false,
  fly:false,
  cloud:false,

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
let _playerCloud={
  width:64,height:48,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
};
let _playerGun={
  width:20,height:20,

  x:0,y:0,

  timer:0,

  on:false,
  power:false,
  
  img0:new Image(),
  img1:new Image(),
};
let _playerAmmo={
  width:16,height:16,

  x:0,y:0,

  power:false,
  unused:true,
  
  img0:new Image(),
  img1:new Image(),
};
let _playerTop={
  width:40,height:4,

  x:0,y:0,
};
let _playerBottom={
  width:40,height:4,

  x:0,y:0,
};
let _playerLeft={
  width:4,height:69,

  x:0,y:0,
};
let _playerRight={
  width:4,height:69,

  x:0,y:0,
};

let _platform={
  array:[],

  width:128,height:12,

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

  img:new Image(),
};

let _corner={
  array:[],

  width:12,height:12,

  x:0,y:0,

  lenght:-1,
  currentLenght:0,

  left:false,

  img0:new Image(),
  img1:new Image(),
};

let _laser={
  array:[],

  width:12,height:12,

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

  width:120,height:6,

  x:0,y:0,

  lenght:-1,
  currentLenght:0,

  color0:"rgba(255,255,255,1)",
  color1:"rgba(255,255,255,0.5)",
  color2:"rgba(255,255,255,0.15)",
};

let _spike={
  array:[],

  width:16,height:14,

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

  width:64,height:48,

  x:0,y:0,

  lenght:-1,
  currentLenght:0,

  boss:false,
  
  img0:new Image(),
  img1:new Image(),
};

let _boss={
  width:64,height:108,

  x:0,y:0,

  invisible:0,
  random:0,
  max:60,
  hp:250,
  round:0,

  load:false,
  attack:false,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
  img4:new Image(),
  img5:new Image(),
  img6:new Image(),
  img7:new Image(),
  imgAdd0:new Image(),
  imgAdd1:new Image(),
  imgAdd2:new Image(),
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
let _bossCloud={
  width:96,height:72,

  x:0,y:0,

  img:new Image(),
};

let _tebulinek={
  width:64,height:64,

  x:0,y:0,

  timer:0,

  unused:true,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
};

let _attack1={
  width:48,height:48,

  x:0,y:0,

  timer:0,
  current:0,

  unused:true,

  imgComputer0:new Image(),
  imgComputer1:new Image(),
  imgComputer2:new Image(),
  imgComputer3:new Image(),
  imgKeyboard0:new Image(),
  imgKeyboard1:new Image(),
  imgKeyboard2:new Image(),
  imgKeyboard3:new Image(),
};
let _attack2={
  width:48,height:48,

  x:0,y:0,

  timer:0,
  current:0,

  unused:true,

  imgCoffe0:new Image(),
  imgCoffe1:new Image(),
  imgCoffe2:new Image(),
  imgCoffe3:new Image(),
  imgDove0:new Image(),
  imgDove1:new Image(),
  imgDove2:new Image(),
  imgDove3:new Image(),
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

_audio.click.volume=1;
_audio.die.volume=0.25;
_audio.hit.volume=0.25;
_audio.jump.volume=0.25;
_audio.laser.volume=0.25;
_audio.paper.volume=0.25;

_audio.bossDie.load();
_audio.bossHit.load();
_audio.bossStart.load();

_audio.bossDie.volume=0.25;
_audio.bossHit.volume=0.25;
_audio.bossStart.volume=0.25;

_background.img0.src="Source/UI/Background/0.png";
_background.img1.src="Source/UI/Background/1.png";
_background.img2.src="Source/UI/Background/2.png";
_backgroundTop.img0.src="Source/UI/Background/0.png";
_backgroundTop.img1.src="Source/UI/Background/1.png";
_backgroundTop.img2.src="Source/UI/Background/3.png";
_backgroundRight.img0.src="Source/UI/Background/0.png";
_backgroundRight.img1.src="Source/UI/Background/1.png";
_backgroundTopRight.img0.src="Source/UI/Background/0.png";
_backgroundTopRight.img1.src="Source/UI/Background/1.png";

_change.img1.src="Source/UI/Transition/1.png";
_change.img2.src="Source/UI/Transition/2.png";
_change.img3.src="Source/UI/Transition/3.png";
_change.img4.src="Source/UI/Transition/4.png";

_startTEB.img0.src="Source/Object/TEB/0.png";
_startTEB.img1.src="Source/Object/TEB/1.png";
_startTEB.img2.src="Source/Object/TEB/2.png";

_menuTitle.img.src="Source/UI/Title/title.png";
_menuTitle.imgOn.src="Source/UI/Title/titleOn.png";

_menuResolution.img.src="Source/UI/max.png";
_menuResolution.imgOn.src="Source/UI/min.png";

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
_menuVersion.img.src="Source/UI/Button/version.png";
_menuVersion.imgOn.src="Source/UI/Button/versionOn.png";
_menuCustom.img.src="Source/UI/Button/custom.png";
_menuCustom.imgOn.src="Source/UI/Button/customOn.png";
_menuRestart.img.src="Source/UI/Button/restart.png";
_menuRestart.imgOn.src="Source/UI/Button/restartOn.png";

_clipboard.img.src="Source/UI/Clipboard/clipboard.png";
_clipboardBack.img.src="Source/UI/Clipboard/right.png";
_clipboardBack.imgOn.src="Source/UI/Clipboard/rightOn.png";

_blueprintLevel1.img.src="Source/UI/Level/1.png";
_blueprintLevel2.img.src="Source/UI/Level/2.png";
_blueprintLevel3.img.src="Source/UI/Level/3.png";
_blueprintLevel4.img.src="Source/UI/Level/4.png";
_blueprintLevel5.img.src="Source/UI/Level/5.png";
_blueprintLevel6.img.src="Source/UI/Level/6.png";
_blueprintLevel7.img.src="Source/UI/Level/7.png";
_blueprintLevel8.img.src="Source/UI/Level/8.png";
_blueprintLevel9.img.src="Source/UI/Level/9.png";
_blueprintLevel10.img.src="Source/UI/Level/10.png";

_blueprint.img0.src="Source/UI/Blueprint/blueprint0.png";
_blueprint.img1.src="Source/UI/Blueprint/blueprint1.png";
_blueprintSkin.img0.src="Source/Object/Player/boy0.png";
_blueprintSkin.img1.src="Source/Object/Player/boy1.png";
_blueprintSkin.img2.src="Source/Object/Player/girl0.png";
_blueprintSkin.img3.src="Source/Object/Player/girl1.png";
_blueprintBack.img.src="Source/UI/Blueprint/right.png";
_blueprintBack.imgOn.src="Source/UI/Blueprint/rightOn.png";
_blueprintLeft.img.src="Source/UI/Blueprint/left.png";
_blueprintLeft.imgOn.src="Source/UI/Blueprint/leftOn.png";
_blueprintRight.img.src="Source/UI/Blueprint/right.png";
_blueprintRight.imgOn.src="Source/UI/Blueprint/rightOn.png";

_clipboardSetting1.img.src="Source/UI/O.png";
_clipboardSetting1.imgOn.src="Source/UI/X.png";
_clipboardSetting2.img.src="Source/UI/O.png";
_clipboardSetting2.imgOn.src="Source/UI/X.png";
_clipboardSetting3.img.src="Source/UI/O.png";
_clipboardSetting3.imgOn.src="Source/UI/X.png";
_clipboardSetting4.img.src="Source/UI/O.png";
_clipboardSetting4.imgOn.src="Source/UI/X.png";
_clipboardSetting5.img.src="Source/UI/O.png";
_clipboardSetting5.imgOn.src="Source/UI/X.png";

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
_gameBossHP1.img2.src="Source/UI/Heart/empty.png";
_gameBossHP2.img0.src="Source/UI/Heart/bossHeart.png";
_gameBossHP2.img1.src="Source/UI/Heart/bossHalf.png";
_gameBossHP2.img2.src="Source/UI/Heart/empty.png";
_gameBossHP3.img0.src="Source/UI/Heart/bossHeart.png";
_gameBossHP3.img1.src="Source/UI/Heart/bossHalf.png";
_gameBossHP3.img2.src="Source/UI/Heart/empty.png";
_gameBossHP4.img0.src="Source/UI/Heart/bossHeart.png";
_gameBossHP4.img1.src="Source/UI/Heart/bossHalf.png";
_gameBossHP4.img2.src="Source/UI/Heart/empty.png";
_gameBossHP5.img0.src="Source/UI/Heart/bossHeart.png";
_gameBossHP5.img1.src="Source/UI/Heart/bossHalf.png";
_gameBossHP5.img2.src="Source/UI/Heart/empty.png";
_gameWater.img0.src="Source/UI/Water/water.png";
_gameWater.img1.src="Source/UI/Water/half.png";
_gameWater.img2.src="Source/UI/Water/empty.png";
_gameWater.img3.src="Source/UI/Water/powerWater.png";
_gameWater.img4.src="Source/UI/Water/powerHalf.png";

_wideClipboard.img.src="Source/UI/Clipboard/wideClipboard.png";
_wideClipboardForward.img.src="Source/UI/Clipboard/right.png";
_wideClipboardForward.imgOn.src="Source/UI/Clipboard/rightOn.png";

_wideBlueprint.img.src="Source/UI/Blueprint/wideBlueprint.png";
_wideBlueprintForward.img.src="Source/UI/Blueprint/right.png";
_wideBlueprintForward.imgOn.src="Source/UI/Blueprint/rightOn.png";

_rewardIcon.img.src="Source/UI/Icon/trophy.png";

_player.img0.src="Source/Object/Player/boy0.png";
_player.img1.src="Source/Object/Player/boy1.png";
_player.img2.src="Source/Object/Player/girl0.png";
_player.img3.src="Source/Object/Player/girl1.png";
_player.img0left.src="Source/Object/Player/boy0left.png";
_player.img1left.src="Source/Object/Player/boy1left.png";
_player.img2left.src="Source/Object/Player/girl0left.png";
_player.img3left.src="Source/Object/Player/girl1left.png";
_playerCloud.img0.src="Source/Object/Cloud/left.png";
_playerCloud.img1.src="Source/Object/Cloud/right.png";
_playerGun.img0.src="Source/Object/Gun/gun.png";
_playerGun.img1.src="Source/Object/Gun/powerGun.png";
_playerAmmo.img0.src="Source/Object/Ammo/ammo.png";
_playerAmmo.img1.src="Source/Object/Ammo/powerAmmo.png";

_platform.img.src="Source/Object/platform.png";

_corner.img0.src="Source/Object/Corner/left.png";

_corner.img1.src="Source/Object/Corner/right.png";

_laser.img0.src="Source/Object/Laser/left.png";
_laser.img1.src="Source/Object/Laser/right.png";

_spike.img.src="Source/Object/spike.png";

_sign.img0.src="Source/Object/next.png";
_sign.img1.src="Source/Object/boss.png";

_boss.img0.src="Source/Object/People/TS.png";
_boss.img1.src="Source/Object/People/RS.png";
_boss.img2.src="Source/Object/People/PK.png";
_boss.img3.src="Source/Object/People/ASC.png";
_boss.img4.src="Source/Object/People/MM.png";
_boss.img5.src="Source/Object/People/AS.png";
_boss.img6.src="Source/Object/People/PL.png";
_boss.img7.src="Source/Object/People/IM.png";
_boss.imgAdd0.src="Source/Object/People/WZ.png";
_boss.imgAdd1.src="Source/Object/People/AN.png";
_boss.imgAdd2.src="Source/Object/People/IBS.png";
_bossCloud.img.src="Source/Object/Cloud/left.png";

_tebulinek.img0.src="Source/Object/Attack/Tebulinek/0.png";
_tebulinek.img1.src="Source/Object/Attack/Tebulinek/90.png";
_tebulinek.img2.src="Source/Object/Attack/Tebulinek/180.png";
_tebulinek.img3.src="Source/Object/Attack/Tebulinek/270.png";

_attack1.imgComputer0.src="Source/Object/Attack/Computer/0.png";
_attack1.imgComputer1.src="Source/Object/Attack/Computer/90.png";
_attack1.imgComputer2.src="Source/Object/Attack/Computer/180.png";
_attack1.imgComputer3.src="Source/Object/Attack/Computer/270.png";
_attack1.imgKeyboard0.src="Source/Object/Attack/Keyboard/0.png";
_attack1.imgKeyboard1.src="Source/Object/Attack/Keyboard/90.png";
_attack1.imgKeyboard2.src="Source/Object/Attack/Keyboard/180.png";
_attack1.imgKeyboard3.src="Source/Object/Attack/Keyboard/270.png";
_attack2.imgCoffe0.src="Source/Object/Attack/Coffe/0.png";
_attack2.imgCoffe1.src="Source/Object/Attack/Coffe/90.png";
_attack2.imgCoffe2.src="Source/Object/Attack/Coffe/180.png";
_attack2.imgCoffe3.src="Source/Object/Attack/Coffe/270.png";
_attack2.imgDove0.src="Source/Object/Attack/Dove/0.png";
_attack2.imgDove1.src="Source/Object/Attack/Dove/90.png";
_attack2.imgDove2.src="Source/Object/Attack/Dove/180.png";
_attack2.imgDove3.src="Source/Object/Attack/Dove/270.png";

