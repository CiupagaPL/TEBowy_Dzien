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
    platformgenerator();
    spikegenerator();
    cornergenerator();

    _platform.currentload+=1;
  }
}

resetlevel=function(){
  _platform.array=[];
  _platform.lenght=0;
  _corner.array=[];
  _corner.lenght=-1;
  _spike.array=[];
  _spike.lenght=-1;
  _platform.currentload=0;
}

mainplatformgenerator=function(){
  _currentPlatform={
    x:0,y:_currentResolution.height-12*scale,

    width:_currentResolution.width,height:_platform.height,

    level:-1,
  };

  _platform.array[0]=_currentPlatform;
  _platform.loop+=1;
  _platform.currentcount+=1;
  _platform.lenght+=1;
}

spikegenerator=function(){
  _spike.random=Math.floor(Math.random()*_platform.random*3/5)-_spike.width;

  _currentSpike={
    x:_spike.random,y:_currentPlatform.y-_spike.height,

    width:_spike.width,height:_spike.height,
  };

  _spike.array.push(_currentSpike);
  _spike.lenght+=1;

  _spike.random=Math.floor(Math.random()*(_currentResolution.width-_platform.random+128*scale)*3/5)+_platform.random+128*scale-_spike.width;
  
  _currentSpike={
    x:_spike.random,y:_currentPlatform.y-_spike.height,

    width:_spike.width,height:_spike.height,
  };

  _spike.array.push(_currentSpike);
  _spike.lenght+=1;
}

cornergenerator=function(){
  _currentCorner={
    x:_platform.random-_corner.width,y:_currentPlatform.y,

    width:_corner.width,height:_corner.height,

    left:false,
  };

  _corner.array.push(_currentCorner);
  _corner.lenght+=1;

  _currentCorner={
    x:_platform.random+128*scale,y:_currentPlatform.y,

    width:_corner.width,height:_corner.height,

    left:true,
  };

  _corner.array.push(_currentCorner);
  _corner.lenght+=1;
}

platformgenerator=function(){
  if(_platform.lastx>240*scale){
    _platform.random=Math.floor(Math.random()*96*scale)+16*scale;
  } if(_platform.lastx<=240*scale){
    _platform.random=Math.floor(Math.random()*144*scale)+256*scale;
  }

  _currentPlatform={
    x:0,y:_currentResolution.height-128*scale*_platform.currentload-144*scale,

    width:_platform.random,height:_platform.height,

    level:_platform.currentload,
  };

  _platform.array.push(_currentPlatform);

  _currentPlatform={
    x:_platform.random+128*scale,y:_currentResolution.height-128*scale*_platform.currentload-144*scale,

    width:_currentResolution.width-_platform.random+128*scale,height:_platform.height,

    level:_platform.currentload,
  };

  _platform.array.push(_currentPlatform);

  _platform.lastx=_platform.random;
  _platform.loop+=1;
  _platform.currentcount+=1;
  _platform.lenght+=1;
}
