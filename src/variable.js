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
const load=document.getElementById("load");
const error=document.getElementById("error");
const render=document.getElementById("render",{
  width:"0px",
  height:"0px",
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
  start:false,
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

  teacher:false,
  win:false,
  defeat:false,

  generated:false,

  change:false,
  blocked:false,
  auto:false,

  startRender:function(){},
  startUpdate:function(){},
  menuRender:function(){},
  menuUpdate:function(){},
  levelRender:function(){},
  levelUpdate:function(){},
};

const global={
  pause:false,
  pauseChange:false,
  pauseAnimation:false,

  restart:false,

  autoUnpause:false,
  autoRestart:false,

  menuLoad:false,

  currentTutorial:false,
  currentTeacher:false,
  currentReward:false,

  sfx:true,
  music:true,
  tutorial:true,
  teacher:true,
  addon:true,
};

const keyDown={
  left:false,
  right:false,
  top:false,
  bottom:false,
};

const audio={
  menu:new Audio("sfx/music/menu.mp3"),
  game:new Audio("sfx/music/game.mp3"),
  teacher:new Audio("sfx/music/teacher.mp3"),

  load1:new Audio("sfx/load1.mp3"),
  load2:new Audio("sfx/load2.mp3"),
  load3:new Audio("sfx/load3.mp3"),

  click:new Audio("sfx/click.wav"),
  die:new Audio("sfx/die.wav"),
  hit:new Audio("sfx/hit.wav"),
  jump:new Audio("sfx/jump.wav"),
  laser:new Audio("sfx/laser.wav"),
  paper:new Audio("sfx/paper.wav"),

  teacherDefeat:new Audio("sfx/teacherDefeat.wav"),
  teacherHit:new Audio("sfx/teacherHit.wav"),
  teacherStart:new Audio("sfx/teacherStart.mp3"),

  timer:0,
};

// audio.menu.load();
// audio.game.load();
// audio.teacher.load();

// audio.menu.volume=0.25;
// audio.game.volume=0.25;
// audio.teacher.volume=0.25;

audio.load1.load();
audio.load2.load();
audio.load3.load();

audio.load1.volume=1;
audio.load2.volume=1;
audio.load3.volume=1;

// audio.click.load();
// audio.die.load();
// audio.hit.load();
// audio.jump.load();
// audio.laser.load();
// audio.paper.load();

// audio.click.volume=1;
// audio.die.volume=0.25;
// audio.hit.volume=0.25;
// audio.jump.volume=0.25;
// audio.laser.volume=0.25;
// audio.paper.volume=0.25;

// audio.teacherDefeat.load();
// audio.teacherHit.load();
// audio.teacherStart.load();

// audio.teacherDefeat.volume=0.25;
// audio.teacherHit.volume=0.25;
// audio.teacherStart.volume=0.25;
