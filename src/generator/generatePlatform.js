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

scene.mainPlatformGenerator=function(){
  _currentPlatform={
    x:0,
    y:canvas.height-context.scale(12),

    width:canvas.width,
    height:_platform.height,

    level:-1,
  };

  _platform.array[0]=_currentPlatform;

  _platform.loop++;
  _platform.currentCount++;
  _platform.lenght++;
}

scene.lastPlatformGenerator=function(){
  _currentPlatform={
    x:0,
    y:-(context.scale(128)*(_platform.load-1))-context.scale(36),

    width:canvas.width,
    height:_platform.height,

    level:_platform.load+1,
  };

  _platform.array[_platform.lenght+1]=_currentPlatform;

  _platform.loop++;
  _platform.currentCount++;
  _platform.lenght++;
}

scene.platformGenerator=function(){
  if(_platform.lx>(canvas.width-_platform.lx)-context.scale(128)&&_platform.currentLoad<1){
    _platform.random=Math.floor(Math.random()*context.scale(125))+context.scale(42)+context.scale(25);
  } else if(_platform.lx<=(canvas.width-_platform.lx)-context.scale(128)&&_platform.currentLoad<1){
    _platform.random=Math.floor(Math.random()*context.scale(125))+context.scale(320)+context.scale(25);
  }

  _currentPlatform={
    x:0,
    y:(canvas.height-(context.scale(128)*_platform.currentLoad))-context.scale(144),

    width:_platform.random,
    height:_platform.height,

    level:_platform.currentLoad,
  };

  _platform.array.push(_currentPlatform);

  _currentPlatform={
    x:_platform.random+context.scale(128),
    y:(canvas.height-(context.scale(128)*_platform.currentLoad))-context.scale(144),

    width:(canvas.width-_platform.random)-context.scale(128),
    height:_platform.height,

    level:_platform.currentLoad,
  };
  if(_currentPlatform.level==_platform.load){ _currentPlatform.width+=canvas.width; }

  _platform.array.push(_currentPlatform);

  _platform.lastx=_platform.random;
  _platform.lasty=_currentPlatform.y;
  _platform.loop++;
  _platform.currentCount++;
  _platform.lenght++;
}
