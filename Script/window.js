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
  _about.style.visibility="visible";

  window.onsetup();

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

  window.onsetup();
  _render.base.width=_render.width;
  _render.base.height=_render.height;

  _context=_render.base.getContext("2d");
  _context.imageSmoothingEnabled=false;

  if(scene!=0){
    scene=1;

    menuLoad=true;
    changeScene=true;
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

window.onsetup=function(){
  if(_window.width<960||_window.height<540){
    _render.base.style.visibility="hidden";
    _error.style.visibility="visible";
    _about.style.visibility="hidden";
    resolutionError=true;
  } else if(_window.width>=960&&_window.height>=540){
    _render.base.style.visibility="visible";
    _error.style.visibility="hidden";
    _about.style.visibility="visible";
    resolutionError=false;
  }

  while(_window.width*0.9>_currentResolution.width){
    _currentResolution.width+=16;
    _currentResolution.height+=9;
  } while(_window.width*0.9<_currentResolution.width||
          _window.height*0.8<_currentResolution.height){
    _currentResolution.width-=16;
    _currentResolution.height-=9;
  }

  _render.width=_currentResolution.width;
  _render.height=_currentResolution.height;
  scale=_render.width/640;

  _render.base.style.width=_currentResolution.width+"px";
  _render.base.style.height=_currentResolution.height+"px";
  _render.base.style.left=((_window.width-_currentResolution.width)/2)-(2*scale)+"px";
  _render.base.style.top=(((_window.height-_currentResolution.height)-(24*scale))/2)-(2*scale)+"px";
  _render.base.style.border=(4*scale)+"px solid white";
  _render.base.style.borderRadius=(7*scale)+"px";
  _render.base.style.boxShadow=0+"px "+0+"px "+(10*scale)+"px "+(2*scale)+"px white";

  _about.style.width=_window.width+"px";
  _about.style.height=(24*scale)+"px";
  _about.style.top=(_window.height-(24*scale))+"px";
  _about.style.left=0+"px";
  _about.style.fontSize=(16*scale)+"px";
  _about.style.borderTop=(2*scale)+"px solid white";
  _about.style.boxShadow=0+"px "+0+"px "+(10*scale)+"px "+(2*scale)+"px white";

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

    window.onloop();
  } requestAnimationFrame(window.onupdate);
}
requestAnimationFrame(window.onupdate);

window.onloop=function(){
  _context.clearRect(0,0,_render.width,_render.height);

  if(scene==0){ start(); }
  if(scene==1){ menu(); }
  if(scene==2||scene==3||scene==4||
     scene==5||scene==6||scene==7||
     scene==8||scene==9||scene==10||scene==11){ level(); }
}
