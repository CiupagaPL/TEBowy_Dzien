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

    _platform.currentload+=1;
  }
}

resetlevel=function(){
  _platform.array=[];
  _platform.lenght=-1;
  _platform.currentload=0;
}

mainplatformgenerator=function(){
  _currentPlatform={
    x:0,y:_currentResolution.height-12*scale,

    width:_currentResolution.width,
    height:_platform.height,

    main:true,

    color:_platform.color,
  };

  _platform.array.push(_currentPlatform);
  _platform.loop+=1;
  _platform.currentcount+=1;
  _platform.lenght+=1;
}

spikegenerator=function(){
  _spike.random1=Math.floor(Math.random()*336*scale-_platform.random)+_currentPlatform.x+16*scale;
  _spike.random2=Math.floor(Math.random()*_platform.random)+16*scale;

  _currentSpike={
    x:_spike.random1,
    y:_currentPlatform.y-_spike.height,

    w:_spike.w,h:_spike.h,

    color:_spike.color,
  };

  _spike.array.push(_currentSpike);
  _spike.lenght+=1;

  _currentSpike={
    x:_spike.random2,
    y:_currentPlatform.y-_spike.height,

    w:_spike.w,h:_spike.h,

    color:_spike.color,
  };

  console.log(_currentSpike.y);

  _spike.array.push(_currentSpike);
  _spike.lenght+=1;
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
    main:false,

    color:_platform.color,
  };

  if(_currentPlatform.y<=_platform.highestposition){ _platform.highestposition=_currentPlatform.y; }

  _platform.array.push(_currentPlatform);

  _currentPlatform={
    x:_platform.random+128*scale,y:_currentResolution.height-128*scale*_platform.currentload-144*scale,

    width:_currentResolution.width-_platform.random+128*scale,height:_platform.height,

    level:_platform.currentload,
    main:false,

    color:_platform.color,
  };

  _platform.array.push(_currentPlatform);

  _platform.lastx=_platform.random;
  _platform.loop+=1;
  _platform.currentcount+=1;
  _platform.lenght+=1;
}
