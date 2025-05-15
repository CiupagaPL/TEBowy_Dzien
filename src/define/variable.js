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

const html=document.getElementById("html");
const body=document.getElementById("body");
const load=document.getElementById("load");
const error=document.getElementById("error");
const render=document.getElementById("render",{
  width:0,
  height:0,
});

const context=render.getContext("2d",{
  alpha:true,
  willReadFrequently:true,

  powerPreference:"high-performance",

  collision:function(){},
  scale:function(){},
  time:function(){},
  frame:function(){},
  move:function(){},
  limit:function(){},
  setup:function(){},
  render:function(){},
  text:function(){},
  default:function(){},
  reset:function(){},
});

const mouse={
  x:0,
  y:0,

  width:4,
  height:4,
};

const canvas={
  width:640,
  height:360,

  scale:1.00,
  prevScale:1.00,
  timeScale:1.00,
  prevTimeScale:1.00,
  limitFps:120,
  currentFps:40,
  countFps:0,
  start:0,
  then:0,
  elapsed:0,
  reset:0,

  error:false,
  resize:true,
  first:false,
  minimize:false,

  setup:function(){},
  check:function(){},
  animate:function(){},
  startAnimating:function(){},
  loop:function(){},
};

const scene={
  vx:0,
  vy:0,

  value:0,
  next:0,
  nextAuto:0,
  timer:0,
  score:0,
  current:0,
  type0:0,
  type1:0,
  type2:0,
  type3:0,
  type4:0,
  type5:0,
  type6:0,
  type7:0,
  section1:0,
  section2:0,
  section3:0,
  section4:0,
  last:-1,
  count:10,

  generated:false,
  change:false,
  blocked:false,
  auto:false,
  key:false,
  teacher:false,
  load:false,

  startRender:function(){},
  startUpdate:function(){},
  menuRender:function(){},
  menuUpdate:function(){},
  levelRender:function(){},
  levelUpdate:function(){},
  generateLevel:function(){},
  resetLevel:function(){},
  sectionGenerator:function(){},
  platformGenerator:function(){}, 
  cornerGenerator:function(){}, 
  foregroundGenerator:function(){}, 
  decorationGenerator:function(){},
  lockerGenerator:function(){},
  teboxGenerator:function(){}, 
  spikeGenerator:function(){},
};

const global={
  stable:false,
  pause:false,
  pauseChange:false,
  pauseAnimation:false,
  restart:false,
  autoUnpause:false,
  autoRestart:false,
  load:false,
  menuLoad:false,
  gameLoad:false,
  currentTutorial:false,
  currentTeacher:false,
  currentReward:false,
  sfx:localStorage.getItem("sfx"),
  music:localStorage.getItem("music"),
  tutorial:true,
};
if(global.sfx==null||global.sfx=="true"){ global.sfx=true; }
else{ global.sfx=false; }
if(global.music==null||global.music=="true"){ global.music=true; }
else{ global.music=false; }

const keyDown={
  left:false,
  right:false,
  top:false,
  bottom:false,
};

const audio={
  menu1_music:new Audio("sfx/music/menu1.mp3"),
  menu2_music:new Audio("sfx/music/menu2.mp3"),
  level1_music:new Audio("sfx/music/level1.mp3"),
  level2_music:new Audio("sfx/music/level2.mp3"),
  level3_music:new Audio("sfx/music/level3.mp3"),
  teacher_music:new Audio("sfx/music/teacher.mp3"),

  load_sfx:new Audio("sfx/general/load.mp3"),
  click1_sfx:new Audio("sfx/general/click.mp3"),
  click2_sfx:new Audio("sfx/general/clickAlt.mp3"),
  click3_sfx:new Audio("sfx/general/clickStart.mp3"),
  click4_sfx:new Audio("sfx/general/clickChange.mp3"),
  jump_sfx:new Audio("sfx/player/jump.mp3"),
  jump_alt:new Audio("sfx/player/jumpAlt.mp3"),
  damage1_sfx:new Audio("sfx/player/damage.mp3"),
  damage1_alt:new Audio("sfx/player/damageAlt.mp3"),
  damage2_sfx:new Audio("sfx/teacher/damage.mp3"),
  damage2_alt:new Audio("sfx/teacher/damageAlt.mp3"),
  lost1_sfx:new Audio("sfx/player/lost.mp3"),
  lost2_sfx:new Audio("sfx/teacher/lost.mp3"),
  fire1_sfx:new Audio("sfx/player/fire.mp3"),
  fire1_alt:new Audio("sfx/player/fireAlt.mp3"),
  fire2_sfx:new Audio("sfx/teacher/fire.mp3"),
  fire2_alt:new Audio("sfx/teacher/fireAlt.mp3"),
  laser_sfx:new Audio("sfx/level/laser.mp3"),
  laser_alt:new Audio("sfx/level/laserAlt.mp3"),
  chest_sfx:new Audio("sfx/level/chest.mp3"),
  door_sfx:new Audio("sfx/level/door.mp3"),
  unlock_sfx:new Audio("sfx/level/unlock.mp3"),
  locker_sfx:new Audio("sfx/level/locker.mp3"),
  entrance_sfx:new Audio("sfx/teacher/entrance.mp3"),

  current:0,
  jump:0,
  damage1:0,
  damage2:0,
  fire1:0,
  fire2:0,
  laser:0,
};

audio.menu1_music.volume=0.25;
audio.menu2_music.volume=0.15;
audio.level1_music.volume=0;
audio.level2_music.volume=0;
audio.level3_music.volume=0;
audio.teacher_music.volume=0;

audio.click1_sfx.volume=0.5;
audio.click2_sfx.volume=0.5;
audio.click3_sfx.volume=0.5;
audio.click4_sfx.volume=0.5;
audio.jump_sfx.volume=0.35;
audio.jump_alt.volume=0.35;
audio.damage1_sfx.volume=0.5;
audio.damage1_alt.volume=0.5;
audio.damage2_sfx.volume=0.5;
audio.damage2_alt.volume=0.5;
audio.lost1_sfx.volume=0.5;
audio.lost2_sfx.volume=0.5;
audio.fire1_sfx.volume=0.5;
audio.fire1_alt.volume=0.5;
audio.fire2_sfx.volume=0.35;
audio.fire2_alt.volume=0.65;
audio.laser_sfx.volume=0.5;
audio.laser_alt.volume=0.5;
audio.chest_sfx.volume=0.65;
audio.door_sfx.volume=0.65;
audio.unlock_sfx.volume=0.65;
audio.locker_sfx.volume=0.35;
audio.entrance_sfx.volume=0.65;
