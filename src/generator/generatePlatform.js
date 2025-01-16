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

scene.mainPlatformGenerator=function(){
  _currentPlatform={
    x:0,
    y:canvas.height-(12*canvas.scale),

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
    y:-((128*canvas.scale)*(_platform.load-1))-(36*canvas.scale),

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
  if(_platform.lx>(canvas.width-_platform.lx)-(128*canvas.scale)&&_platform.currentLoad<1){
    _platform.random=Math.floor(Math.random()*(125*canvas.scale))+(42*canvas.scale)+(25*canvas.scale);
  } else if(_platform.lx<=(canvas.width-_platform.lx)-(128*canvas.scale)&&_platform.currentLoad<1){
    _platform.random=Math.floor(Math.random()*(125*canvas.scale))+(320*canvas.scale)+(25*canvas.scale);
  }

  _currentPlatform={
    x:0,
    y:(canvas.height-((128*canvas.scale)*_platform.currentLoad))-(144*canvas.scale),

    width:_platform.random,
    height:_platform.height,

    level:_platform.currentLoad,
  };

  _platform.array.push(_currentPlatform);

  _currentPlatform={
    x:_platform.random+(128*canvas.scale),
    y:(canvas.height-((128*canvas.scale)*_platform.currentLoad))-(144*canvas.scale),

    width:(canvas.width-_platform.random)-(128*canvas.scale),
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

