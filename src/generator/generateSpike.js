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
  if(_platform.lastx>context.scale(320)&&_platform.currentLoad>=1){ _platform.random=Math.floor(Math.random()*context.scale(150))+context.scale(42); }
  if(_platform.lastx<=context.scale(320)&&_platform.currentLoad>=1){ _platform.random=Math.floor(Math.random()*context.scale(150))+context.scale(320); }

  if(_platform.lastx>_platform.random-context.scale(128)){
    if(_spike.count>=2){
      _spike.random=Math.floor(Math.random()*_platform.random);
      if(_spike.random+_spike.width>_platform.random){ _spike.random=_platform.random-_spike.width; }

      _currentSpike={
        x:_spike.random,
        y:(_platform.lasty-_spike.height)+context.scale(0.5),

        width:_spike.width,
        height:_spike.height,
      };

      _spike.array.push(_currentSpike);
      _spike.lenght++;
    } if(_spike.count>=1){
      _spike.random=(Math.floor(Math.random()*((_platform.lastx-_platform.random)+context.scale(128))))+_platform.random+context.scale(128);
      if(_spike.random+_spike.width*3>_platform.lastx){ _spike.random=_platform.lastx-_spike.width*4; }

      _currentSpike={
        x:_spike.random,
        y:(_platform.lasty-_spike.height)+context.scale(0.5),

        width:_spike.width,
        height:_spike.height,
      };

      _spike.array.push(_currentSpike);
      _spike.lenght++;
    } if(_spike.count>=3){
      _spike.random=Math.floor(Math.random()*((canvas.width-_platform.lastx)+context.scale(128)))+_platform.lastx+context.scale(128);
      if(_spike.random+_spike.width>canvas.width){ _spike.random=canvas.width-_spike.width; }

      _currentSpike={
        x:_spike.random,
        y:(_platform.lasty-_spike.height)+context.scale(0.5),

        width:_spike.width,
        height:_spike.height,
      };

      _spike.array.push(_currentSpike);
      _spike.lenght++;
    }
  } else if(_platform.lastx<=_platform.random-context.scale(128)){
    if(_spike.count>=2){
      _spike.random=Math.floor(Math.random()*_platform.lastx);
      if(_spike.random+_spike.width>_platform.lastx){ _spike.random=_platform.lastx-_spike.width; }

      _currentSpike={
        x:_spike.random,
        y:(_platform.lasty-_spike.height)+context.scale(0.5),

        width:_spike.width,
        height:_spike.height,
      };

      _spike.array.push(_currentSpike);
      _spike.lenght++;
    } if(_spike.count>=1){
      _spike.random=Math.floor(Math.random()*((_platform.random-_platform.lastx)+context.scale(128)))+_platform.lastx+context.scale(128);
      if(_spike.random+_spike.width>_platform.random){ _spike.random=_platform.random-_spike.width; }
      if(_spike.random+_spike.width*3>_platform.lastx+context.scale(128)){ _spike.random=(_platform.lastx+context.scale(128))+_spike.width*4; }

      _currentSpike={
        x:_spike.random,
        y:(_platform.lasty-_spike.height)+context.scale(0.5),

        width:_spike.width,
        height:_spike.height,
      };

      _spike.array.push(_currentSpike);
      _spike.lenght++;
    } if(_spike.count>=3){
      _spike.random=Math.floor(Math.random()*((canvas.width-_platform.random)+context.scale(128)))+_platform.random+context.scale(128);
      if(_spike.random+_spike.width>canvas.width){ _spike.random=canvas.width-_spike.width; }

      _currentSpike={
        x:_spike.random,
        y:(_platform.lasty-_spike.height)+context.scale(0.5),

        width:_spike.width,
        height:_spike.height,
      };

      _spike.array.push(_currentSpike);
      _spike.lenght++;
    }
  }
}
