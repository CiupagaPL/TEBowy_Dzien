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

scene.generateLevel=function(){
  while(_platform.currentLoad<=_platform.load){
    scene.mainPlatformGenerator();
    if(_platform.currentLoad>=1){ scene.spikeGenerator(); }
    scene.platformGenerator();
    scene.cornerGenerator();
    scene.lastPlatformGenerator();

    _platform.currentLoad+=1;
  } if(_platform.currentLoad>_platform.load){ scene.generated=true; }
}

scene.resetLevel=function(){
  _platform.array=[];
  _platform.lenght=0;
  _corner.array=[];
  _corner.lenght=-1;
  _spike.array=[];
  _spike.lenght=-1;

  _platform.currentLoad=0;
}

scene.cornerGenerator=function(){
  _currentCorner={
    base:{
      x:_platform.random-context.scale(0.5),
      y:_currentPlatform.y,

      width:_corner.base.width,
      height:_corner.base.height,
    }, laser:{
      x:_platform.random+context.scale(4.5),
      y:_currentPlatform.y+context.scale(3),

      width:_corner.laser.width,
      height:_corner.laser.height,

      alpha:0,
    },
  };

  _corner.array.push(_currentCorner);
  _corner.lenght++;

  _currentCorner={
    base:{
      x:(_platform.random+context.scale(128))-context.scale(5.5),
      y:_currentPlatform.y,

      width:_corner.base.width,
      height:_corner.base.height,
      rotation:180,
    }, 
  };

  _corner.array.push(_currentCorner);
  _corner.lenght++;
}
