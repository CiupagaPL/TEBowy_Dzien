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

scene.decorationGenerator=function(){
  _decoration.current=1;

  if(scene.type0==1){
    _currentDecoration={
      base:{
        x:context.scale(42),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(66),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:0,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=3; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=11&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }
    if(_platform.currentLoad==_platform.load){
      _currentDecoration.type=4;
      _currentDecoration.text.value0="Finał";
      _currentDecoration.text.x=context.scale(63);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type1==1){
    _currentDecoration={
      base:{
        x:context.scale(202),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(226),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:1,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=2; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=11&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }
    if(_platform.currentLoad==_platform.load){
      _currentDecoration.type=4;
      _currentDecoration.text.value0="Finał";
      _currentDecoration.text.x=context.scale(223);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type2==1){
    _currentDecoration={
      base:{
        x:context.scale(362),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(386),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:2,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=1; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=11&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }
    if(_platform.currentLoad==_platform.load){
      _currentDecoration.type=4;
      _currentDecoration.text.value0="Finał";
      _currentDecoration.text.x=context.scale(383);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type3==1){
    _currentDecoration={
      base:{
        x:context.scale(522),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(546),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:3,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=0; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=11&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }
    if(_platform.currentLoad==_platform.load){
      _currentDecoration.type=4;
      _currentDecoration.text.value0="Finał";
      _currentDecoration.text.x=context.scale(543);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type4==1){
    _currentDecoration={
      base:{
        x:context.scale(682),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(706),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:0,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=3; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=11&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }
    if(_platform.currentLoad==_platform.load){
      _currentDecoration.type=4;
      _currentDecoration.text.value0="Finał";
      _currentDecoration.text.x=context.scale(703);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type5==1){
    _currentDecoration={
      base:{
        x:context.scale(842),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(866),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:1,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=2; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=11&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }
    if(_platform.currentLoad==_platform.load){
      _currentDecoration.type=4;
      _currentDecoration.text.value0="Finał";
      _currentDecoration.text.x=context.scale(863);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type6==1){
    _currentDecoration={
      base:{
        x:context.scale(1002),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(1026),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:2,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=1; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=11&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }
    if(_platform.currentLoad==_platform.load){
      _currentDecoration.type=4;
      _currentDecoration.text.value0="Finał";
      _currentDecoration.text.x=context.scale(1023);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } if(scene.type7==1){
    _currentDecoration={
      base:{
        x:context.scale(1162),
        y:_currentPlatform.y+context.scale(48),

        width:context.scale(76),
        height:context.scale(132),
      }, text:{
        x:context.scale(1186),
        y:_currentPlatform.y+context.scale(82),

        value0:"L"+String(_platform.currentLoad-1)+"0"+_decoration.current,
        size:context.scale(20),
      },

      current:0,
      type:3,
    };

    if(_platform.currentLoad%2==0){ _currentDecoration.type=0; }
    if(_platform.currentLoad==2&&_decoration.current==1){ _currentDecoration.text.x+=context.scale(2); }
    else if(_platform.currentLoad>=11&&_platform.currentLoad!=12){ _currentDecoration.text.x-=context.scale(3); }
    else if(_platform.currentLoad==12){ _currentDecoration.text.x-=context.scale(1); }
    if(_platform.currentLoad==_platform.load){
      _currentDecoration.type=4;
      _currentDecoration.text.value0="Finał";
      _currentDecoration.text.x=context.scale(1183);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
    _decoration.current++;
  } _decoration.current=1;

  if(scene.type0==2){
    _currentDecoration={
      base:{
        x:context.scale(78),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:0,
      }, bottom:{
        x:context.scale(78),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:0,
      }, left:{
        x:context.scale(30),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:0,
      }, bottomLeft:{
        x:context.scale(30),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:0,
      }, first:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, second:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, current:1,
    };

    if(_platform.currentLoad%2==0){
      _currentDecoration.base.type=3;
      _currentDecoration.bottom.type=3;
      _currentDecoration.left.type=3;
      _currentDecoration.bottomLeft.type=3;
    } while(_currentDecoration.bottom.type==_currentDecoration.base.type){ _currentDecoration.bottom.type=Math.floor(Math.random()*4); }
    _currentDecoration.left.type=_currentDecoration.bottom.type;

    _decoration.current=Math.floor(Math.random()*2);
    if(_decoration.current==0){
      _currentDecoration.first.type=_currentDecoration.base.type;
      _currentDecoration.base.type=5;
      _currentDecoration.second.type=_currentDecoration.bottomLeft.type;
      _currentDecoration.bottomLeft.type=5;
      _currentDecoration.first.x=_currentDecoration.base.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.base.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.bottomLeft.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.bottomLeft.y-context.scale(8);
    } else{
      _currentDecoration.first.type=_currentDecoration.bottom.type;
      _currentDecoration.bottom.type=5;
      _currentDecoration.second.type=_currentDecoration.left.type;
      _currentDecoration.left.type=5;
      _currentDecoration.first.x=_currentDecoration.bottom.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.bottom.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.left.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.left.y-context.scale(8);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type1==2){
    _currentDecoration={
      base:{
        x:context.scale(238),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:1,
      }, bottom:{
        x:context.scale(238),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:1,
      }, left:{
        x:context.scale(190),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:1,
      }, bottomLeft:{
        x:context.scale(190),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:1,
      }, first:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, second:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, current:1,
    };

    if(_platform.currentLoad%2==0){
      _currentDecoration.base.type=2;
      _currentDecoration.bottom.type=2;
      _currentDecoration.left.type=2;
      _currentDecoration.bottomLeft.type=2;
    } while(_currentDecoration.bottom.type==_currentDecoration.base.type){ _currentDecoration.bottom.type=Math.floor(Math.random()*4); }
    _currentDecoration.left.type=_currentDecoration.bottom.type;

    _decoration.current=Math.floor(Math.random()*2);
    if(_decoration.current==0){
      _currentDecoration.first.type=_currentDecoration.base.type;
      _currentDecoration.base.type=5;
      _currentDecoration.second.type=_currentDecoration.bottomLeft.type;
      _currentDecoration.bottomLeft.type=5;
      _currentDecoration.first.x=_currentDecoration.base.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.base.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.bottomLeft.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.bottomLeft.y-context.scale(8);
    } else{
      _currentDecoration.first.type=_currentDecoration.bottom.type;
      _currentDecoration.bottom.type=5;
      _currentDecoration.second.type=_currentDecoration.left.type;
      _currentDecoration.left.type=5;
      _currentDecoration.first.x=_currentDecoration.bottom.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.bottom.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.left.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.left.y-context.scale(8);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type2==2){
    _currentDecoration={
      base:{
        x:context.scale(398),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:2,
      }, bottom:{
        x:context.scale(398),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:2,
      }, left:{
        x:context.scale(350),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:2,
      }, bottomLeft:{
        x:context.scale(350),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:2,
      }, first:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, second:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, current:1,
    };

    if(_platform.currentLoad%2==0){
      _currentDecoration.base.type=1;
      _currentDecoration.bottom.type=1;
      _currentDecoration.left.type=1;
      _currentDecoration.bottomLeft.type=1;
    } while(_currentDecoration.bottom.type==_currentDecoration.base.type){ _currentDecoration.bottom.type=Math.floor(Math.random()*4); }
    _currentDecoration.left.type=_currentDecoration.bottom.type;

    _decoration.current=Math.floor(Math.random()*2);
    if(_decoration.current==0){
      _currentDecoration.first.type=_currentDecoration.base.type;
      _currentDecoration.base.type=5;
      _currentDecoration.second.type=_currentDecoration.bottomLeft.type;
      _currentDecoration.bottomLeft.type=5;
      _currentDecoration.first.x=_currentDecoration.base.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.base.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.bottomLeft.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.bottomLeft.y-context.scale(8);
    } else{
      _currentDecoration.first.type=_currentDecoration.bottom.type;
      _currentDecoration.bottom.type=5;
      _currentDecoration.second.type=_currentDecoration.left.type;
      _currentDecoration.left.type=5;
      _currentDecoration.first.x=_currentDecoration.bottom.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.bottom.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.left.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.left.y-context.scale(8);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type3==2){
    _currentDecoration={
      base:{
        x:context.scale(558),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:3,
      }, bottom:{
        x:context.scale(558),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:3,
      }, left:{
        x:context.scale(510),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:3,
      }, bottomLeft:{
        x:context.scale(510),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:3,
      }, first:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, second:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, current:1,
    };

    if(_platform.currentLoad%2==0){
      _currentDecoration.base.type=0;
      _currentDecoration.bottom.type=0;
      _currentDecoration.left.type=0;
      _currentDecoration.bottomLeft.type=0;
    } while(_currentDecoration.bottom.type==_currentDecoration.base.type){ _currentDecoration.bottom.type=Math.floor(Math.random()*4); }
    _currentDecoration.left.type=_currentDecoration.bottom.type;

    _decoration.current=Math.floor(Math.random()*2);
    if(_decoration.current==0){
      _currentDecoration.first.type=_currentDecoration.base.type;
      _currentDecoration.base.type=5;
      _currentDecoration.second.type=_currentDecoration.bottomLeft.type;
      _currentDecoration.bottomLeft.type=5;
      _currentDecoration.first.x=_currentDecoration.base.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.base.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.bottomLeft.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.bottomLeft.y-context.scale(8);
    } else{
      _currentDecoration.first.type=_currentDecoration.bottom.type;
      _currentDecoration.bottom.type=5;
      _currentDecoration.second.type=_currentDecoration.left.type;
      _currentDecoration.left.type=5;
      _currentDecoration.first.x=_currentDecoration.bottom.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.bottom.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.left.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.left.y-context.scale(8);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type4==2){
    _currentDecoration={
      base:{
        x:context.scale(718),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:0,
      }, bottom:{
        x:context.scale(718),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:0,
      }, left:{
        x:context.scale(670),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:0,
      }, bottomLeft:{
        x:context.scale(670),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:0,
      }, first:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, second:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, current:1,
    };

    if(_platform.currentLoad%2==0){
      _currentDecoration.base.type=3;
      _currentDecoration.bottom.type=3;
      _currentDecoration.left.type=3;
      _currentDecoration.bottomLeft.type=3;
    } while(_currentDecoration.bottom.type==_currentDecoration.base.type){ _currentDecoration.bottom.type=Math.floor(Math.random()*4); }
    _currentDecoration.left.type=_currentDecoration.bottom.type;

    _decoration.current=Math.floor(Math.random()*2);
    if(_decoration.current==0){
      _currentDecoration.first.type=_currentDecoration.base.type;
      _currentDecoration.base.type=5;
      _currentDecoration.second.type=_currentDecoration.bottomLeft.type;
      _currentDecoration.bottomLeft.type=5;
      _currentDecoration.first.x=_currentDecoration.base.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.base.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.bottomLeft.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.bottomLeft.y-context.scale(8);
    } else{
      _currentDecoration.first.type=_currentDecoration.bottom.type;
      _currentDecoration.bottom.type=5;
      _currentDecoration.second.type=_currentDecoration.left.type;
      _currentDecoration.left.type=5;
      _currentDecoration.first.x=_currentDecoration.bottom.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.bottom.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.left.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.left.y-context.scale(8);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type5==2){
    _currentDecoration={
      base:{
        x:context.scale(878),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:1,
      }, bottom:{
        x:context.scale(878),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:1,
      }, left:{
        x:context.scale(830),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:1,
      }, bottomLeft:{
        x:context.scale(830),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:1,
      }, first:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, second:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, current:1,
    };

    if(_platform.currentLoad%2==0){
      _currentDecoration.base.type=2;
      _currentDecoration.bottom.type=2;
      _currentDecoration.left.type=2;
      _currentDecoration.bottomLeft.type=2;
    } while(_currentDecoration.bottom.type==_currentDecoration.base.type){ _currentDecoration.bottom.type=Math.floor(Math.random()*4); }
    _currentDecoration.left.type=_currentDecoration.bottom.type;

    _decoration.current=Math.floor(Math.random()*2);
    if(_decoration.current==0){
      _currentDecoration.first.type=_currentDecoration.base.type;
      _currentDecoration.base.type=5;
      _currentDecoration.second.type=_currentDecoration.bottomLeft.type;
      _currentDecoration.bottomLeft.type=5;
      _currentDecoration.first.x=_currentDecoration.base.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.base.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.bottomLeft.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.bottomLeft.y-context.scale(8);
    } else{
      _currentDecoration.first.type=_currentDecoration.bottom.type;
      _currentDecoration.bottom.type=5;
      _currentDecoration.second.type=_currentDecoration.left.type;
      _currentDecoration.left.type=5;
      _currentDecoration.first.x=_currentDecoration.bottom.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.bottom.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.left.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.left.y-context.scale(8);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type6==2){
    _currentDecoration={
      base:{
        x:context.scale(1038),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:2,
      }, bottom:{
        x:context.scale(1038),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:2,
      }, left:{
        x:context.scale(990),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:2,
      }, bottomLeft:{
        x:context.scale(990),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:2,
      }, first:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, second:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, current:1,
    };

    if(_platform.currentLoad%2==0){
      _currentDecoration.base.type=1;
      _currentDecoration.bottom.type=1;
      _currentDecoration.left.type=1;
      _currentDecoration.bottomLeft.type=1;
    } while(_currentDecoration.bottom.type==_currentDecoration.base.type){ _currentDecoration.bottom.type=Math.floor(Math.random()*4); }
    _currentDecoration.left.type=_currentDecoration.bottom.type;

    _decoration.current=Math.floor(Math.random()*2);
    if(_decoration.current==0){
      _currentDecoration.first.type=_currentDecoration.base.type;
      _currentDecoration.base.type=5;
      _currentDecoration.second.type=_currentDecoration.bottomLeft.type;
      _currentDecoration.bottomLeft.type=5;
      _currentDecoration.first.x=_currentDecoration.base.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.base.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.bottomLeft.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.bottomLeft.y-context.scale(8);
    } else{
      _currentDecoration.first.type=_currentDecoration.bottom.type;
      _currentDecoration.bottom.type=5;
      _currentDecoration.second.type=_currentDecoration.left.type;
      _currentDecoration.left.type=5;
      _currentDecoration.first.x=_currentDecoration.bottom.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.bottom.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.left.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.left.y-context.scale(8);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type7==2){
    _currentDecoration={
      base:{
        x:context.scale(1198),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:3,
      }, bottom:{
        x:context.scale(1198),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:3,
      }, left:{
        x:context.scale(1150),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:3,
      }, bottomLeft:{
        x:context.scale(1150),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:3,
      }, first:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, second:{
        x:0,
        y:0,

        width:context.scale(16),
        height:context.scale(88),

        type:0,
      }, current:1,
    };

    if(_platform.currentLoad%2==0){
      _currentDecoration.base.type=0;
      _currentDecoration.bottom.type=0;
      _currentDecoration.left.type=0;
      _currentDecoration.bottomLeft.type=0;
    } while(_currentDecoration.bottom.type==_currentDecoration.base.type){ _currentDecoration.bottom.type=Math.floor(Math.random()*4); }
    _currentDecoration.left.type=_currentDecoration.bottom.type;

    _decoration.current=Math.floor(Math.random()*2);
    if(_decoration.current==0){
      _currentDecoration.first.type=_currentDecoration.base.type;
      _currentDecoration.base.type=5;
      _currentDecoration.second.type=_currentDecoration.bottomLeft.type;
      _currentDecoration.bottomLeft.type=5;
      _currentDecoration.first.x=_currentDecoration.base.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.base.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.bottomLeft.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.bottomLeft.y-context.scale(8);
    } else{
      _currentDecoration.first.type=_currentDecoration.bottom.type;
      _currentDecoration.bottom.type=5;
      _currentDecoration.second.type=_currentDecoration.left.type;
      _currentDecoration.left.type=5;
      _currentDecoration.first.x=_currentDecoration.bottom.x+context.scale(36);
      _currentDecoration.first.y=_currentDecoration.bottom.y-context.scale(8);
      _currentDecoration.second.x=_currentDecoration.left.x+context.scale(36);
      _currentDecoration.second.y=_currentDecoration.left.y-context.scale(8);
    }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  }

  if(scene.type0==3){
    _currentDecoration={
      x:context.scale(16),
      y:_currentPlatform.y+context.scale(53),

      width:context.scale(128),
      height:context.scale(88),

      current:2,
      type:0,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=3; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type1==3){
    _currentDecoration={
      x:context.scale(176),
      y:_currentPlatform.y+context.scale(53),

      width:context.scale(128),
      height:context.scale(88),

      current:2,
      type:1,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=2; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type2==3){
    _currentDecoration={
      x:context.scale(336),
      y:_currentPlatform.y+context.scale(53),

      width:context.scale(128),
      height:context.scale(88),

      current:2,
      type:2,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=1; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type3==3){
    _currentDecoration={
      x:context.scale(496),
      y:_currentPlatform.y+context.scale(53),

      width:context.scale(128),
      height:context.scale(88),

      current:2,
      type:3,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=0; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type4==3){
    _currentDecoration={
      x:context.scale(656),
      y:_currentPlatform.y+context.scale(53),

      width:context.scale(128),
      height:context.scale(88),

      current:2,
      type:0,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=3; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type5==3){
    _currentDecoration={
      x:context.scale(816),
      y:_currentPlatform.y+context.scale(53),

      width:context.scale(128),
      height:context.scale(88),

      current:2,
      type:1,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=2; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type6==3){
    _currentDecoration={
      x:context.scale(976),
      y:_currentPlatform.y+context.scale(53),

      width:context.scale(128),
      height:context.scale(88),

      current:2,
      type:2,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=1; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type7==3){
    _currentDecoration={
      x:context.scale(1136),
      y:_currentPlatform.y+context.scale(53),

      width:context.scale(128),
      height:context.scale(88),

      current:2,
      type:3,
    }; if(_platform.currentLoad%2==0){ _currentDecoration.type=0; }

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  }

  if(scene.type0==4){
    _currentDecoration={
      base:{
        x:context.scale(64),
        y:_currentPlatform.y+context.scale(13),

        width:context.scale(68),
        height:context.scale(5),
      }, light:{
        x:context.scale(10),
        y:_currentPlatform.y+context.scale(18),

        width:context.scale(176),
        height:context.scale(164),

        alpha:25,
      }, current:3,
    };

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type1==4){
    _currentDecoration={
      base:{
        x:context.scale(224),
        y:_currentPlatform.y+context.scale(13),

        width:context.scale(68),
        height:context.scale(5),
      }, light:{
        x:context.scale(170),
        y:_currentPlatform.y+context.scale(18),

        width:context.scale(176),
        height:context.scale(164),

        alpha:25,
      }, current:3,
    };

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type2==4){
    _currentDecoration={
      base:{
        x:context.scale(384),
        y:_currentPlatform.y+context.scale(13),

        width:context.scale(68),
        height:context.scale(5),
      }, light:{
        x:context.scale(330),
        y:_currentPlatform.y+context.scale(18),

        width:context.scale(176),
        height:context.scale(164),

        alpha:25,
      }, current:3,
    };

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type3==4){
    _currentDecoration={
      base:{
        x:context.scale(544),
        y:_currentPlatform.y+context.scale(13),

        width:context.scale(68),
        height:context.scale(5),
      }, light:{
        x:context.scale(490),
        y:_currentPlatform.y+context.scale(18),

        width:context.scale(176),
        height:context.scale(164),

        alpha:25,
      }, current:3,
    };

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type4==4){
    _currentDecoration={
      base:{
        x:context.scale(704),
        y:_currentPlatform.y+context.scale(13),

        width:context.scale(68),
        height:context.scale(5),
      }, light:{
        x:context.scale(650),
        y:_currentPlatform.y+context.scale(18),

        width:context.scale(176),
        height:context.scale(164),

        alpha:25,
      }, current:3,
    };

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type5==4){
    _currentDecoration={
      base:{
        x:context.scale(864),
        y:_currentPlatform.y+context.scale(13),

        width:context.scale(68),
        height:context.scale(5),
      }, light:{
        x:context.scale(810),
        y:_currentPlatform.y+context.scale(18),

        width:context.scale(176),
        height:context.scale(164),

        alpha:25,
      }, current:3,
    };

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type6==4){
    _currentDecoration={
      base:{
        x:context.scale(1024),
        y:_currentPlatform.y+context.scale(13),

        width:context.scale(68),
        height:context.scale(5),
      }, light:{
        x:context.scale(970),
        y:_currentPlatform.y+context.scale(18),

        width:context.scale(176),
        height:context.scale(164),

        alpha:25,
      }, current:3,
    };

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  } if(scene.type7==4){
    _currentDecoration={
      base:{
        x:context.scale(1184),
        y:_currentPlatform.y+context.scale(13),

        width:context.scale(68),
        height:context.scale(5),
      }, light:{
        x:context.scale(1130),
        y:_currentPlatform.y+context.scale(18),

        width:context.scale(176),
        height:context.scale(164),

        alpha:25,
      }, current:3,
    };

    _decoration.array.push(_currentDecoration);
    _decoration.lenght++;
  }
}
