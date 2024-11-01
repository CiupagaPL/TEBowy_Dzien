/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

window.onload=function(){
  _render.base.style.visibility="visible";
  _load.style.visibility="hidden";
  _error.style.visibility="hidden";
  _info.style.visibility="hidden";

  window.resolution();

  _window.width=window.innerWidth;
  _window.height=window.innerHeight;

  _render.base.width=_render.width;
  _render.base.height=_render.height;

  _context=_render.base.getContext("2d");
  _context.imageSmoothingEnabled=false;
  window.onupdate();
}

window.onresize=function(){
  _window.width=window.innerWidth;
  _window.height=window.innerHeight;

  _render.width=_window.width;
  _render.height=_window.height;

  window.resolution();

  _render.base.width=_render.width;
  _render.base.height=_render.height;

  _context=_render.base.getContext("2d");
  _context.imageSmoothingEnabled=false;

  if(scene!=0&&scene!=1&&!pauseOn){
    pauseOn=true;
    pauseChange=true;
    canClick=false;
    nextScene=1;
    changeScene=true;
  } if(scene!=0&&scene!=1&&pauseOn){
    if(_clipboard.on){
      autoScene=true;
      nextAutoScene=1;
      if(_menuSetting.on){
        _menuSetting.animation=true;
        _clipboard.close=true;
        canClick=false;
      } if(_menuAbout.on){
        _menuAbout.animation=true;
        _clipboard.close=true;
        canClick=false;
      }
    } else if(!_clipboard.on){
      canClick=false;
      nextScene=1;
      changeScene=true;
    }
  } if(scene==1){
    _blueprint.on=false;
    _clipboard.on=false;
    _menuLevel.on=false;
    _menuLevel.animation=false;
    _menuAbout.on=false;
    _menuAbout.animation=false;
    _menuSetting.on=false;
    _menuSetting.animation=false;
    _menuCustom.on=false;
    _menuCustom.animation=false;
  }
}

window.resolution=function(){
  if(_window.width<960||_window.height<540){
    _render.base.style.visibility="hidden";
    _error.style.visibility="visible";
    _info.style.visibility="visible";
    resolutionError=true;
  } else if(_window.width>=960&&_window.height>=540){
    _render.base.style.visibility="visible";
    _error.style.visibility="hidden";
    _info.style.visibility="hidden";
    resolutionError=false;
  }

  while(_window.width*0.95>_currentResolution.width){ _currentResolution.width+=16; _currentResolution.height+=9; }
  while(_window.width*0.95<_currentResolution.width||_window.height*0.95<_currentResolution.height){ _currentResolution.width-=16; _currentResolution.height-=9; }

  _render.width=_currentResolution.width;
  _render.height=_currentResolution.height;

  scale=_render.width/640;

  _render.base.style.width=_currentResolution.width+"px";
  _render.base.style.height=_currentResolution.height+"px";
  _render.base.style.left=(_window.width-_currentResolution.width)/2-12+"px";
  _render.base.style.top=(_window.height-_currentResolution.height)/2-12+"px";
  _render.base.style.border=4*scale+"px solid white";
  _render.base.style.borderRadius=12*scale+"px";
  _render.base.style.boxShadow="0px "+2*scale+"px "+10*scale+"px "+2*scale+"px white";

  window.defaultvalue();
}

window.detectcollision=function(_object1,_object2){
  return _object1.x<_object2.x+_object2.width&&
         _object1.x+_object1.width>_object2.x&&
         _object1.y<_object2.y+_object2.height&&
         _object1.y+_object1.height>_object2.y;
}

window.onupdate=function(timeStamp){
  if(timeStamp-lastFrame>=1000/fpsLimit){
    lastFrame=timeStamp;
    window.loop();
  }
  requestAnimationFrame(window.onupdate);
}
requestAnimationFrame(window.onupdate);

window.loop=function(){
  _context.clearRect(0,0,_render.width,_render.height);

  switch(scene){
    case 0:
      scene0();
      break;
    case 1:
      scene1();
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      level();
      break;
  }

  _context.fillShortText(_versionText.color,_versionText,_versionText.value);
}
