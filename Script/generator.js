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
    x:0,y:_currentResolution.height-16*scale,

    width:_currentResolution.width,
    height:_platform.height,

    main:true,

    color:_platform.color,
  };

  _platform.array.push(_currentPlatform);
  _platform.lenght+=1;
}

window.platformgenerator = function() {
  random=Math.floor(Math.random()*480*scale)-48*scale;
  if(random<=48*scale){ random+=54*scale; }

  _currentPlatform={
    x:0,y:_currentResolution.height-128*scale*_platform.currentload-144*scale,

    width:random,height:_platform.height,

    level:_platform.currentload,
    main:false,

    color:_platform.color,
  };

  if(_currentPlatform.y<=_platform.highestposition){ _platform.highestposition=_currentPlatform.y; }

  _platform.array.push(_currentPlatform);

  _currentPlatform={
    x:random+128*scale,y:_currentResolution.height-128*scale*_platform.currentload-144*scale,

    width:_currentResolution.width-random+128*scale,height:_platform.height,

    level:_platform.currentload,
    main:false,

    color:_platform.color,
  };

  _platform.array.push(_currentPlatform);

  _platform.loop+=1;
  _platform.currentcount+=1;
  _platform.lenght+=1;
}
