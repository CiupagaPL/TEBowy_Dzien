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
    scene.sectionGenerator();
    if(_platform.currentLoad>=1){
      scene.platformGenerator();
      scene.cornerGenerator();
      scene.foregroundGenerator();
      scene.decorationGenerator();
      scene.teboxGenerator();
      scene.spikeGenerator();
    }

    scene.key=false;
    _platform.currentLoad+=1;
  } if(_platform.currentLoad>_platform.load){ scene.generated=true; }
}

scene.resetLevel=function(){
  _platform.array=[];
  _platform.lenght=-1;
  _corner.array=[];
  _corner.lenght=-1;
  _foreground.array=[];
  _foreground.lenght=-1;
  _decoration.array=[];
  _decoration.lenght=-1;
  _tebox.array=[];
  _tebox.lenght=-1;
  _spike.array=[];
  _spike.lenght=-1;

  _platform.currentLoad=0;
}

scene.foregroundGenerator=function(){
  _currentForeground={
    x:0,
    y:_currentPlatform.y+context.scale(14),

    width:5120,
    height:context.scale(166),

    score:_platform.currentLoad-1,

    on:true,
    change:false,

    alpha:50,
  }; if(_platform.currentLoad==1){
    _currentForeground.alpha=0;
    _currentForeground.on=false;
  }

  _foreground.array.push(_currentForeground);
  _foreground.lenght++;

  _currentForeground={
    x:5120,
    y:_currentPlatform.y+context.scale(14),

    width:5120,
    height:context.scale(166),

    score:_platform.currentLoad-1,

    on:true,
    change:false,

    alpha:50,
  }; if(_platform.currentLoad==1){
    _currentForeground.alpha=0;
    _currentForeground.on=false;
  }

  _foreground.array.push(_currentForeground);
  _foreground.lenght++;
}

scene.cornerGenerator=function(){
  if(_platform.currentLoad!=_platform.load){
    _currentCorner={
      base:{
        x:_platform.random-context.scale(2),
        y:_currentPlatform.y,

        width:context.scale(8),
        height:context.scale(14),
      }, laser:{
        x:_platform.random+context.scale(4.5),
        y:_currentPlatform.y+context.scale(4),

        width:context.scale(148),
        height:context.scale(6),

        alpha:0,
      },
    };

    _corner.array.push(_currentCorner);
    _corner.lenght++;

    _currentCorner={
      base:{
        x:(_platform.random+context.scale(156))-context.scale(7.5),
        y:_currentPlatform.y,

        width:context.scale(8),
        height:context.scale(14),

        rotation:180,
      }, lock:{
        x:_platform.random+context.scale(4.5),
        y:_currentPlatform.y,

        width:context.scale(148),
        height:context.scale(16),

        alpha:100,
      }
    };

    _corner.array.push(_currentCorner);
    _corner.lenght++;
  }
}
