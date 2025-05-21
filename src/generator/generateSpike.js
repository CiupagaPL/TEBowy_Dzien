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

scene.spikeGenerator=function(){
  if(scene.type7!=0&&scene.type0!=0){
    _spike.current=Math.floor(Math.random()*2); 

    if(_spike.current==0||_platform.load==_platform.currentLoad){
      _currentSpike={
        x:context.scale(6),
        y:_currentPlatform.y+context.scale(155),

        width:context.scale(20),
        height:context.scale(28),
      };
    } else if(_platform.load!=_platform.currentLoad){
      _currentSpike={
        x:context.scale(6),
        y:_currentPlatform.y+context.scale(11),
        vy:0,

        width:context.scale(20),
        height:context.scale(28),
        rotation:180,

        level:_platform.currentLoad-1,
        active:false,

        alpha:100,
      };
    }

    _spike.array.push(_currentSpike);
    _spike.lenght++;
  } if(scene.type0!=0&&scene.type1!=0){
    _spike.current=Math.floor(Math.random()*2); 

    if(_spike.current==0||_platform.load==_platform.currentLoad){
      _currentSpike={
        x:context.scale(166),
        y:_currentPlatform.y+context.scale(155),

        width:context.scale(20),
        height:context.scale(28),
      };
    } else if(_platform.load!=_platform.currentLoad){
      _currentSpike={
        x:context.scale(166),
        y:_currentPlatform.y+context.scale(11),
        vy:0,

        width:context.scale(20),
        height:context.scale(28),
        rotation:180,

        level:_platform.currentLoad-1,
        active:false,

        alpha:100,
      };
    }

    _spike.array.push(_currentSpike);
    _spike.lenght++;
  } if(scene.type1!=0&&scene.type2!=0&&_platform.currentLoad!=1){
    _spike.current=Math.floor(Math.random()*2); 

    if(_spike.current==0||_platform.load==_platform.currentLoad){
      _currentSpike={
        x:context.scale(326),
        y:_currentPlatform.y+context.scale(155),

        width:context.scale(20),
        height:context.scale(28),
      };
    } else if(_platform.load!=_platform.currentLoad){
      _currentSpike={
        x:context.scale(326),
        y:_currentPlatform.y+context.scale(11),
        vy:0,

        width:context.scale(20),
        height:context.scale(28),
        rotation:180,

        level:_platform.currentLoad-1,
        active:false,

        alpha:100,
      };
    }

    _spike.array.push(_currentSpike);
    _spike.lenght++;
  } if(scene.type2!=0&&scene.type3!=0){
    _spike.current=Math.floor(Math.random()*2); 

    if(_spike.current==0||_platform.load==_platform.currentLoad){
      _currentSpike={
        x:context.scale(486),
        y:_currentPlatform.y+context.scale(155),

        width:context.scale(20),
        height:context.scale(28),
      };
    } else if(_platform.load!=_platform.currentLoad){
      _currentSpike={
        x:context.scale(486),
        y:_currentPlatform.y+context.scale(11),
        vy:0,

        width:context.scale(20),
        height:context.scale(28),
        rotation:180,

        level:_platform.currentLoad-1,
        active:false,

        alpha:100,
      };
    }

    _spike.array.push(_currentSpike);
    _spike.lenght++;
  } if(scene.type3!=0&&scene.type4!=0){
    _spike.current=Math.floor(Math.random()*2); 

    if(_spike.current==0||_platform.load==_platform.currentLoad){
      _currentSpike={
        x:context.scale(646),
        y:_currentPlatform.y+context.scale(155),

        width:context.scale(20),
        height:context.scale(28),
      };
    } else if(_platform.load!=_platform.currentLoad){
      _currentSpike={
        x:context.scale(646),
        y:_currentPlatform.y+context.scale(11),
        vy:0,

        width:context.scale(20),
        height:context.scale(28),
        rotation:180,

        level:_platform.currentLoad-1,
        active:false,

        alpha:100,
      };
    }

    _spike.array.push(_currentSpike);
    _spike.lenght++;
  } if(scene.type4!=0&&scene.type5!=0){
    _spike.current=Math.floor(Math.random()*2); 

    if(_spike.current==0||_platform.load==_platform.currentLoad){
      _currentSpike={
        x:context.scale(806),
        y:_currentPlatform.y+context.scale(155),

        width:context.scale(20),
        height:context.scale(28),
      };
    } else if(_platform.load!=_platform.currentLoad){
      _currentSpike={
        x:context.scale(806),
        y:_currentPlatform.y+context.scale(11),
        vy:0,

        width:context.scale(20),
        height:context.scale(28),
        rotation:180,

        level:_platform.currentLoad-1,
        active:false,

        alpha:100,
      };
    }

    _spike.array.push(_currentSpike);
    _spike.lenght++;
  } if(scene.type5!=0&&scene.type6!=0){
    _spike.current=Math.floor(Math.random()*2); 

    if(_spike.current==0||_platform.load==_platform.currentLoad){
      _currentSpike={
        x:context.scale(966),
        y:_currentPlatform.y+context.scale(155),

        width:context.scale(20),
        height:context.scale(28),
      };
    } else if(_platform.load!=_platform.currentLoad){
      _currentSpike={
        x:context.scale(966),
        y:_currentPlatform.y+context.scale(11),
        vy:0,

        width:context.scale(20),
        height:context.scale(28),
        rotation:180,

        level:_platform.currentLoad-1,
        active:false,

        alpha:100,
      };
    }

    _spike.array.push(_currentSpike);
    _spike.lenght++;
  } if(scene.type6!=0&&scene.type7!=0){
    _spike.current=Math.floor(Math.random()*2); 

    if(_spike.current==0||_platform.load==_platform.currentLoad){
      _currentSpike={
        x:context.scale(1126),
        y:_currentPlatform.y+context.scale(155),

        width:context.scale(20),
        height:context.scale(28),
      };
    } else if(_platform.load!=_platform.currentLoad){
      _currentSpike={
        x:context.scale(1126),
        y:_currentPlatform.y+context.scale(11),
        vy:0,

        width:context.scale(20),
        height:context.scale(28),
        rotation:180,

        level:_platform.currentLoad-1,
        active:false,

        alpha:100,
      };
    }

    _spike.array.push(_currentSpike);
    _spike.lenght++;
  }
}
