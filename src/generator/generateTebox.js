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

scene.teboxGenerator=function(){
  if(scene.type0==4){
    _currentTebox={
      x:context.scale(76),
      y:_currentPlatform.y+context.scale(132),

      width:context.scale(48),
      height:context.scale(48),

      first:0,
      second:Math.floor(Math.random()*3),
      third:Math.floor(Math.random()*2),
    };

    if(!scene.key){
      _currentTebox.third=0;
      scene.key=true;
    }

    _tebox.array.push(_currentTebox);
    _tebox.lenght++;
  }

  if(scene.type1==4){
    _currentTebox={
      x:context.scale(236),
      y:_currentPlatform.y+context.scale(132),

      width:context.scale(48),
      height:context.scale(48),

      first:0,
      second:Math.floor(Math.random()*3),
      third:Math.floor(Math.random()*2),
    };

    if(!scene.key){
      _currentTebox.third=0;
      scene.key=true;
    }

    _tebox.array.push(_currentTebox);
    _tebox.lenght++;
  }

  if(scene.type2==4){
    _currentTebox={
      x:context.scale(396),
      y:_currentPlatform.y+context.scale(132),

      width:context.scale(48),
      height:context.scale(48),

      first:0,
      second:Math.floor(Math.random()*3),
      third:Math.floor(Math.random()*2),
    };

    if(!scene.key){
      _currentTebox.third=0;
      scene.key=true;
    }

    _tebox.array.push(_currentTebox);
    _tebox.lenght++;
  }

  if(scene.type3==4){
    _currentTebox={
      x:context.scale(556),
      y:_currentPlatform.y+context.scale(132),

      width:context.scale(48),
      height:context.scale(48),

      first:0,
      second:Math.floor(Math.random()*3),
      third:Math.floor(Math.random()*2),
    };

    if(!scene.key){
      _currentTebox.third=0;
      scene.key=true;
    }

    _tebox.array.push(_currentTebox);
    _tebox.lenght++;
  }

  if(scene.type4==4){
    _currentTebox={
      x:context.scale(716),
      y:_currentPlatform.y+context.scale(132),

      width:context.scale(48),
      height:context.scale(48),

      first:0,
      second:Math.floor(Math.random()*3),
      third:Math.floor(Math.random()*2),
    };

    if(!scene.key){
      _currentTebox.third=0;
      scene.key=true;
    }

    _tebox.array.push(_currentTebox);
    _tebox.lenght++;
  }

  if(scene.type5==4){
    _currentTebox={
      x:context.scale(876),
      y:_currentPlatform.y+context.scale(132),

      width:context.scale(48),
      height:context.scale(48),

      first:0,
      second:Math.floor(Math.random()*3),
      third:Math.floor(Math.random()*2),
    };

    if(!scene.key){
      _currentTebox.third=0;
      scene.key=true;
    }

    _tebox.array.push(_currentTebox);
    _tebox.lenght++;
  }

  if(scene.type6==4){
    _currentTebox={
      x:context.scale(1036),
      y:_currentPlatform.y+context.scale(132),

      width:context.scale(48),
      height:context.scale(48),

      first:0,
      second:Math.floor(Math.random()*3),
      third:Math.floor(Math.random()*2),
    };

    if(!scene.key){
      _currentTebox.third=0;
      scene.key=true;
    }

    _tebox.array.push(_currentTebox);
    _tebox.lenght++;
  }

  if(scene.type7==4){
    _currentTebox={
      x:context.scale(1196),
      y:_currentPlatform.y+context.scale(132),

      width:context.scale(48),
      height:context.scale(48),

      first:0,
      second:Math.floor(Math.random()*3),
      third:Math.floor(Math.random()*2),
    };

    if(!scene.key){
      _currentTebox.third=0;
      scene.key=true;
    }

    _tebox.array.push(_currentTebox);
    _tebox.lenght++;
  }
}
