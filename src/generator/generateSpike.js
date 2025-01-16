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

scene.spikeGenerator=function(){
  if(_platform.lastx>320*canvas.scale&&_platform.currentLoad>=1){ _platform.random=Math.floor(Math.random()*(150*canvas.scale))+(42*canvas.scale); }
  if(_platform.lastx<=320*canvas.scale&&_platform.currentLoad>=1){ _platform.random=Math.floor(Math.random()*(150*canvas.scale))+(320*canvas.scale); }

  if(_platform.lastx>_platform.random-(128*canvas.scale)){
    if(_spike.count>=2){
      _spike.random=Math.floor(Math.random()*_platform.random);
      if(_spike.random+_spike.width>_platform.random){ _spike.random=_platform.random-_spike.width; }

      _currentSpike={
        x:_spike.random,
        y:(_platform.lasty-_spike.height)+(0.5*canvas.scale),

        width:_spike.width,
        height:_spike.height,
      };

      _spike.array.push(_currentSpike);
      _spike.lenght++;
    } if(_spike.count>=1){
      _spike.random=(Math.floor(Math.random()*((_platform.lastx-_platform.random)+(128*canvas.scale))))+_platform.random+(128*canvas.scale);
      if(_spike.random+_spike.width*3>_platform.lastx){ _spike.random=_platform.lastx-_spike.width*4; }

      _currentSpike={
        x:_spike.random,
        y:(_platform.lasty-_spike.height)+(0.5*canvas.scale),

        width:_spike.width,
        height:_spike.height,
      };

      _spike.array.push(_currentSpike);
      _spike.lenght++;
    } if(_spike.count>=3){
      _spike.random=Math.floor(Math.random()*((canvas.width-_platform.lastx)+(128*canvas.scale)))+_platform.lastx+(128*canvas.scale);
      if(_spike.random+_spike.width>canvas.width){ _spike.random=canvas.width-_spike.width; }

      _currentSpike={
        x:_spike.random,
        y:(_platform.lasty-_spike.height)+(0.5*canvas.scale),

        width:_spike.width,
        height:_spike.height,
      };

      _spike.array.push(_currentSpike);
      _spike.lenght++;
    }
  } else if(_platform.lastx<=_platform.random-(128*canvas.scale)){
    if(_spike.count>=2){
      _spike.random=Math.floor(Math.random()*_platform.lastx);
      if(_spike.random+_spike.width>_platform.lastx){ _spike.random=_platform.lastx-_spike.width; }

      _currentSpike={
        x:_spike.random,
        y:(_platform.lasty-_spike.height)+(0.5*canvas.scale),

        width:_spike.width,
        height:_spike.height,
      };

      _spike.array.push(_currentSpike);
      _spike.lenght++;
    } if(_spike.count>=1){
      _spike.random=Math.floor(Math.random()*((_platform.random-_platform.lastx)+(128*canvas.scale)))+_platform.lastx+(128*canvas.scale);
      if(_spike.random+_spike.width>_platform.random){ _spike.random=_platform.random-_spike.width; }
      if(_spike.random+_spike.width*3>_platform.lastx+(128*canvas.scale)){ _spike.random=(_platform.lastx+(128*canvas.scale))+_spike.width*4; }

      _currentSpike={
        x:_spike.random,
        y:(_platform.lasty-_spike.height)+(0.5*canvas.scale),

        width:_spike.width,
        height:_spike.height,
      };

      _spike.array.push(_currentSpike);
      _spike.lenght++;
    } if(_spike.count>=3){
      _spike.random=Math.floor(Math.random()*((canvas.width-_platform.random)+(128*canvas.scale)))+_platform.random+(128*canvas.scale);
      if(_spike.random+_spike.width>canvas.width){ _spike.random=canvas.width-_spike.width; }

      _currentSpike={
        x:_spike.random,
        y:(_platform.lasty-_spike.height)+(0.5*canvas.scale),

        width:_spike.width,
        height:_spike.height,
      };

      _spike.array.push(_currentSpike);
      _spike.lenght++;
    }
  }
}
