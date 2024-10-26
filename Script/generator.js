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

  while(_spike.currentcount<_spike.count){
    _spike.random=Math.floor(Math.random()*640*scale-_spike.width);
    while(_spike.random>=_platform.lastx-48*scale&&_spike.random<=_platform.lastx+128*scale+48*scale||
          _spike.random>=_platform.random-48*scale&&_spike.random<=_platform.random+128*scale+48*scale||
          _spike.currentcount==1&&_spike.random>=_spike.first-64*scale&&_spike.random<=_spike.first+64*scale||
          _spike.currentcount==2&&_spike.random>=_spike.first-64*scale&&_spike.random<=_spike.first+64*scale&&
          _spike.random>=_spike.second-64*scale&&_spike.random<=_spike.second+48*scale){
      _spike.random=Math.floor(Math.random()*640*scale-_spike.width);
    }

    _currentSpike={
      x:_spike.random,y:_platform.lasty-_spike.height,

      width:_spike.width,height:_spike.height,
    };

    if(_spike.currentcount==0){ first=_currentSpike.x; }
    if(_spike.currentcount==1){ second=_currentSpike.x; }

    _spike.array.push(_currentSpike);

    _spike.lenght++;
    _spike.currentcount++;
  } _spike.currentcount=0;
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

    width:_currentResolution.width-_platform.random+128*scale,height:_platform.height,

    level:_platform.currentload,
  };

  _platform.array.push(_currentPlatform);

  _platform.lastx=_platform.random;
  _platform.lasty=_currentPlatform.y;
  _platform.loop++;
  _platform.currentcount++;
  _platform.lenght++;
}
