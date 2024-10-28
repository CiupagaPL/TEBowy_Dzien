/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

generatelevel=function(){
  while(_platform.currentload<=_platform.load){
    mainplatformgenerator();
    if(_platform.currentload>=1){ spikegenerator(); }
    platformgenerator();
    cornergenerator();
    signgenerator();
    lasergenerator();
    lightgenerator();

    _platform.currentload+=1;
  }
}

resetlevel=function(){
  _platform.array=[];
  _platform.lenght=0;
  _corner.array=[];
  _corner.lenght=-1;
  _laser.array=[];
  _laser.lenght=-1;
  _light.array=[];
  _light.lenght=-1;
  _spike.array=[];
  _spike.lenght=-1;
  _sign.array=[];
  _sign.lenght=-1;
  _platform.currentload=0;
}

mainplatformgenerator=function(){
  _currentPlatform={
    x:0,y:_currentResolution.height-12*scale,

    width:_currentResolution.width,height:_platform.height,

    level:-1,
  };

  _platform.array[0]=_currentPlatform;
  _platform.loop++;
  _platform.currentcount++;
  _platform.lenght++;
}

signgenerator=function(){
  _currentSign={
    x:16*scale,y:_render.height-12*scale-_sign.height,

    width:_sign.width,height:_sign.height,
  
    boss:false,
  };

  _sign.array[0]=_currentSign;

  _currentSign={
    x:16*scale,y:_platform.besty-_sign.height,

    width:_sign.width,height:_sign.height,
  
    boss:true,
  };

  _sign.array[1]=_currentSign;

  _sign.lenght=1;
}

cornergenerator=function(){
  _currentCorner={
    x:_platform.random-_corner.width,y:_currentPlatform.y,

    width:_corner.width,height:_corner.height,

    left:false,
  };

  _corner.array.push(_currentCorner);
  _corner.lenght++;

  _currentCorner={
    x:_platform.random+128*scale,y:_currentPlatform.y,

    width:_corner.width,height:_corner.height,

    left:true,
  };

  _corner.array.push(_currentCorner);
  _corner.lenght++;
}

lasergenerator=function(){
  _currentLaser={
    x:_platform.random,y:_currentPlatform.y,

    width:_laser.width,height:_laser.height,

    left:false,
  };

  _laser.array.push(_currentLaser);
  _laser.lenght++;

  _currentLaser={
    x:_platform.random+128*scale-_laser.width,y:_currentPlatform.y,

    width:_laser.width,height:_laser.height,

    left:true,
  };

  _laser.array.push(_currentLaser);
  _laser.lenght++;
}

lightgenerator=function(){
  _currentLight={
    x:_platform.random+4*scale,y:_currentPlatform.y+3*scale,

    width:_light.width,height:_light.height,
  };

  _light.array.push(_currentLight);
  _light.lenght++;
}

platformgenerator=function(){
  if(_platform.lastx>320*scale&&_platform.currentload<1){
    _platform.random=Math.floor(Math.random()*150*scale)+42*scale;
  } if(_platform.lastx<=320*scale&&_platform.currentload<1){
    _platform.random=Math.floor(Math.random()*150*scale)+320*scale;
    if(_platform.random<556*scale){ _platform.random+42*scale; }
  }

  _currentPlatform={
    x:0,y:_currentResolution.height-128*scale*_platform.currentload-144*scale,

    width:_platform.random,height:_platform.height,

    level:_platform.currentload,
  };

  _platform.array.push(_currentPlatform);

  _currentPlatform={
    x:_platform.random+128*scale,y:_currentResolution.height-128*scale*_platform.currentload-144*scale,

    width:_currentResolution.width-_platform.random-128*scale,height:_platform.height,

    level:_platform.currentload,
  };
  if(_currentPlatform.level==13){ _currentPlatform.width+=_currentResolution.width; }

  _platform.array.push(_currentPlatform);

  if(_currentPlatform.y<=_platform.besty){ _platform.besty=_currentPlatform.y; }

  _platform.lastx=_platform.random;
  _platform.lasty=_currentPlatform.y;
  _platform.loop++;
  _platform.currentcount++;
  _platform.lenght++;
}

spikegenerator=function(){
  if(_platform.lastx>320*scale&&_platform.currentload>=1){
    _platform.random=Math.floor(Math.random()*150*scale)+42*scale;
  } if(_platform.lastx<=320*scale&&_platform.currentload>=1){
    _platform.random=Math.floor(Math.random()*150*scale)+320*scale;
    if(_platform.random<556*scale){ _platform.random+42*scale; }
  }

  if(_platform.lastx>_platform.random-128*scale){
    _spike.random=Math.floor(Math.random()*_platform.random);
    if(_spike.random+_spike.width>_platform.random){ _spike.random=_platform.random-_spike.width; }

    _currentSpike={
      x:_spike.random,y:_platform.lasty-_spike.height,

      width:_spike.width,height:_spike.height,
    };

    _spike.array.push(_currentSpike);
    _spike.lenght++;

    _spike.random=Math.floor(Math.random()*(_platform.lastx-(_platform.random+128*scale)))+_platform.random+128*scale;
    if(_spike.random+_spike.width*3>_platform.lastx){ _spike.random=_platform.lastx-_spike.width*4; }

    _currentSpike={
      x:_spike.random,y:_platform.lasty-_spike.height,

      width:_spike.width,height:_spike.height,
    };

    _spike.array.push(_currentSpike);
    _spike.lenght++;

    _spike.random=Math.floor(Math.random()*(_render.width-(_platform.lastx+128*scale)))+_platform.lastx+128*scale;
    if(_spike.random+_spike.width>_render.width){ _spike.random=_render.width-_spike.width; }

    _currentSpike={
      x:_spike.random,y:_platform.lasty-_spike.height,

      width:_spike.width,height:_spike.height,
    };

    _spike.array.push(_currentSpike);
    _spike.lenght++;
  } else if(_platform.lastx<=_platform.random-128*scale){
    _spike.random=Math.floor(Math.random()*_platform.lastx);
    if(_spike.random+_spike.width>_platform.lastx){ _spike.random=_platform.lastx-_spike.width; }

    _currentSpike={
      x:_spike.random,y:_platform.lasty-_spike.height,

      width:_spike.width,height:_spike.height,
    };

    _spike.array.push(_currentSpike);
    _spike.lenght++;

    _spike.random=Math.floor(Math.random()*(_platform.random-(_platform.lastx+128*scale)))+_platform.lastx+128*scale;
    if(_spike.random+_spike.width>_platform.random){ _spike.random=_platform.random-_spike.width; }
    if(_spike.random+_spike.width*3>_platform.lastx+128*scale){ _spike.random=_platform.lastx+128*scale+_spike.width*4; }

    _currentSpike={
      x:_spike.random,y:_platform.lasty-_spike.height,

      width:_spike.width,height:_spike.height,
    };

    _spike.array.push(_currentSpike);
    _spike.lenght++;

    _spike.random=Math.floor(Math.random()*(_render.width-(_platform.random+128*scale)))+_platform.random+128*scale;
    if(_spike.random+_spike.width>_render.width){ _spike.random=_render.width-_spike.width; }

    _currentSpike={
      x:_spike.random,y:_platform.lasty-_spike.height,

      width:_spike.width,height:_spike.height,
    };

    _spike.array.push(_currentSpike);
    _spike.lenght++;
  }
}
