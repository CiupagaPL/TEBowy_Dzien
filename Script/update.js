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
  window.resolution();

  _render.base.width=_render.width;
  _render.base.height=_render.height;

  _context=_render.base.getContext("2d");
  _context.imageSmoothingEnabled=false;

  if(!resolutionError){
    window.onupdate();
  }
}

window.onresize=function(){
  resolutionError=false;
  error.innerHTML = "";
  _render.base.style.visibility="visible";

  _currentResolution.width=640;
  _currentResolution.height=360;

  _window.width=window.innerWidth;
  _window.height=window.innerHeight;

  window.resolution();

  _render.width=_window.width;
  _render.height=_window.height;

  _render.base.width=_render.width;
  _render.base.height=_render.height;

  _context=_render.base.getContext("2d");
  _context.imageSmoothingEnabled=false;

  // window.defaultValue();
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

  _context.fillSingleText(_versionText);
}
