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

let html=document.getElementById("html");
let load=document.getElementById("load");
let error=document.getElementById("error");
let render=document.getElementById("render");
let context=render.getContext("2d");

let mouse={
  x:0,
  y:0,

  width:4,
  height:4,
};

let canvas={
  width:640,
  height:360,

  scale:1.00,
  prevScale:1.00,

  lastFrame:0,

  font:"orangeKid",

  error:false,
  resize:true,
};

let scene={
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
};

let global={
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

let keyDown={
  left:false,
  right:false,
  top:false,
  bottom:false,
};

let audio={
  menu:new Audio("sfx/music/menu.mp3"),
  game:new Audio("sfx/music/game.mp3"),
  boss:new Audio("sfx/music/teacher.mp3"),

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
// audio.boss.load();

// audio.menu.volume=0.25;
// audio.game.volume=0.25;
// audio.boss.volume=0.25;

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

