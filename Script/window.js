/*
 *    ,-----,
 *    |     |    ,--------------------------------------------------------,
 *    |     |   ( Projekt objęty jest licencją. Przeczytasz o niej na:     )
 *   (|-----|)  < github.com/CiupagaPL/Tebowy_Dzien/blob/stable/LICENSE.md )
 *   |\_____/|   "--------------------------------------------------------"
 *   |       |    __---.
 *   ( o   o )   /      )
 *   \ = . = \__/    --"
 *   /              /
 *  |              |
 *   \ \    \ \   |
 *    | |    | | /
 *   (_(_)--(_(_)
*/

window.setup=function(){
  if((window.innerWidth/16)>=(window.innerHeight/9)){
    canvas.width=16*Math.floor(window.innerHeight/9);
    canvas.height=9*Math.floor(window.innerHeight/9);

    render.width=canvas.width;
    render.height=canvas.height;

    canvas.prevScale=canvas.scale;
    canvas.scale=window.scale();

    context.imageSmoothingEnabled=false;

    render.style.borderTop=0;
    render.style.borderBottom=0;

    render.style.borderLeft=(4*canvas.scale)+"px solid white";
    render.style.borderRight=(4*canvas.scale)+"px solid white";

    render.style.left=((window.innerWidth-canvas.width)/2)-(4*canvas.scale)+"px";
    render.style.top=((window.innerHeight-canvas.height)/2)+"px";
  } else{
    canvas.width=16*Math.floor(window.innerWidth/16);
    canvas.height=9*Math.floor(window.innerWidth/16);

    render.width=canvas.width;
    render.height=canvas.height;

    context.imageSmoothingEnabled=false;

    canvas.prevScale=canvas.scale;
    canvas.scale=window.scale();

    render.style.borderTop=(4*canvas.scale)+"px solid white";
    render.style.borderBottom=(4*canvas.scale)+"px solid white";
    render.style.borderLeft=0;
    render.style.borderRight=0;

    render.style.left=((window.innerWidth-canvas.width)/2)+"px";
    render.style.top=((window.innerHeight-canvas.height)/2)-(4*canvas.scale)+"px";
  }

  render.style.boxShadow=0+"px "+0+"px "+(8*canvas.scale)+"px "+(2*canvas.scale)+"px white";

  render.style.width=canvas.width+"px";
  render.style.height=canvas.height+"px";
}

// window.scale=function(){ return canvas.width/640||canvas.height/360; }

// window.check=function(){
//   if(canvas.width<640||canvas.height<360){
//     if(render.classList.contains("show")){
//       render.classList.remove("show");
//       render.classList.add("hide");
//     }

//     if(load.classList.contains("hide")){
//       load.classList.add("show");
//       load.classList.remove("hide");
//     }

//     error.classList.add("show");
//     error.classList.remove("hide");

//     html.style.backgroundColor=_background.color2;
//     canvas.error=true;
//   } else{
//     render.classList.add("show");
//     render.classList.remove("hide");

//     load.classList.remove("show");
//     load.classList.add("hide");

//     if(canvas.error){
//       error.classList.remove("show");
//       error.classList.add("hide");
//     }

//     html.style.backgroundColor=_background.color0;
//     canvas.error=false;
//   }
// }

// window.update=function(timeStamp){
//   if(timeStamp-canvas.lastFrame>=1000/60){
//     canvas.lastFrame=timeStamp;

//     window.loop();
//   } requestAnimationFrame(window.update);
// }
// requestAnimationFrame(window.update);

// window.loop=function(){
//   if(scene.value==0){ context.clearRect(0,0,canvas.width,canvas.height); }

//   if(canvas.resize){
//     html.style.animationPlayState="paused";

//     window.setup();
//     context.reset();
//     window.check();

//     if(scene.value>=2&&scene.next!=1&&!scene.change){
//       scene.value=1;

//       global.menuLoad=true;
//       scene.change=true;

//       _clipboard.on=false;
//       _button.level.on=false;
//       _button.level.animation=false;
//       _button.setting.on=false;
//       _button.setting.animation=false;
//       _button.about.on=false;
//       _button.about.animation=false;
//       _button.version.on=false;
//       _button.version.animation=false;
//       _button.custom.on=false;
//       _button.custom.animation=false;

//       if(scene.value==1){ _transition.text.value0="   Menu"; }
//       else{ _transition.text.value0="Poziom "+Number(scene.value-1); }

//       _transition.timer=0;
//     }

//     html.style.animationPlayState="running";
//     canvas.resize=false;
//   }

//   if(!canvas.error){
//     if(scene.value==0){
//       scene.startRender();
//       scene.startUpdate();
//     } else if(scene.value==1){
//       scene.menuRender();
//       scene.menuUpdate();
//     } else{
//       scene.levelRender();
//       scene.levelUpdate();
//     }
//   }
// }






window.onload=function(){
  _render.base.style.visibility="visible";
  _load.style.visibility="hidden";
  _error.style.visibility="hidden";

  window.onsetup();

  _window.width=window.innerWidth;
  _window.height=window.innerHeight;
  _window.outWidth=window.outerWidth;
  _window.outHeight=window.outerHeight;

  _render.base.width=_render.width;
  _render.base.height=_render.height;

  _context=_render.base.getContext("2d");
  _context.imageSmoothingEnabled=false;

  window.onupdate();
}

window.onresize=function(){
  _window.width=window.innerWidth;
  _window.height=window.innerHeight;
  _window.outWidth=window.outerWidth;
  _window.outHeight=window.outerHeight;

  _render.width=_window.width;
  _render.height=_window.height;

  window.onsetup();
  _render.base.width=_render.width;
  _render.base.height=_render.height;

  _context=_render.base.getContext("2d");
  _context.imageSmoothingEnabled=false;

  if(scene>=2){
    scene=1;

    menuLoad=true;
    changeScene=true;
    changeTimer=45;
  }

  _blueprint.on=false;
  _clipboard.on=false;
  _menuLevel.on=false;
  _menuLevel.animation=false;
  _menuSetting.on=false;
  _menuSetting.animation=false;
  _menuAbout.on=false;
  _menuAbout.animation=false;
  _menuVersion.on=false;
  _menuVersion.animation=false;
  _menuCustom.on=false;
  _menuCustom.animation=false;
}

window.onsetup=function(){
  if(_window.width<640||_window.height<360){
    if(_render.base.classList.contains("show")){
      _render.base.classList.remove("show");
      _render.base.classList.add("hide");
    }

    if(_load.classList.contains("hide")){
      _load.classList.add("show");
      _load.classList.remove("hide");
    }

    _error.classList.add("show");
    _error.classList.remove("hide");

    _html.style.backgroundColor=_background.color1;
    resolutionError=true;
  } else{
    _render.base.classList.add("show");
    _render.base.classList.remove("hide");

    _load.classList.remove("show");
    _load.classList.add("hide");

    if(resolutionError){
      _error.classList.remove("show");
      _error.classList.add("hide");
    }

    _html.style.backgroundColor=_background.color0;
    resolutionError=false;
  }

  if(Math.abs(_window.outWidth-screen.width)<=4&&Math.abs(_window.outHeight-screen.height)<=4||
     Math.abs(_window.width-screen.width)<=4&&Math.abs(_window.height-screen.height)<=4){ fullScreen=true; }
  else{ fullScreen=false; }

  changeTimer=0;

  _render.base.style.border=0+"px solid white";
  _render.base.style.borderRadius=0+"px";

  if((_window.width/16)>(_window.height/9)){
    _currentResolution.width=16*Math.floor(_window.height/9);
    _currentResolution.height=9*Math.floor(_window.height/9);

    _render.width=_currentResolution.width;
    _render.height=_currentResolution.height;
    scale=_render.width/640;

    _render.base.style.borderLeft=(4*scale)+"px solid white";
    _render.base.style.borderRight=(4*scale)+"px solid white";

    _render.base.style.left=((_window.width-_currentResolution.width)/2)-(4*scale)+"px";
    _render.base.style.top=0+"px";
  } else if((_window.width/16)<(_window.height/9)){
    _currentResolution.width=16*Math.floor(_window.width/16);
    _currentResolution.height=9*Math.floor(_window.width/16);

    _render.width=_currentResolution.width;
    _render.height=_currentResolution.height;
    scale=_render.width/640;

    _render.base.style.borderTop=(4*scale)+"px solid white";
    _render.base.style.borderBottom=(4*scale)+"px solid white";

    _render.base.style.left=0+"px";
    _render.base.style.top=((_window.height-_currentResolution.height)/2)-(4*scale)+"px";
  }

  _render.base.style.width=_currentResolution.width+"px";
  _render.base.style.height=_currentResolution.height+"px";
  _render.base.style.boxShadow=0+"px "+0+"px "+(8*scale)+"px "+(2*scale)+"px white";

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
  if(screenCheckTimer<4){
    window.onresize();
    screenCheckTimer++;
  }

  if(scene==0){ start(); }
  if(scene==1){ menu(); }
  if(scene==2||scene==3||scene==4||
     scene==5||scene==6||scene==7||
     scene==8||scene==9||scene==10||scene==11){ level(); }
}

