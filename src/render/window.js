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

window.setup=function(){
  if((window.innerWidth/16)>=(window.innerHeight/9)){
    canvas.width=16*Math.floor(window.innerHeight/9);
    canvas.height=9*Math.floor(window.innerHeight/9);

    render.width=canvas.width;
    render.height=canvas.height;

    canvas.prevScale=canvas.scale;
    canvas.scale=window.scale().toFixed(2);

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
    canvas.scale=window.scale().toFixed(2);

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

window.scale=function(){ return canvas.width/640||canvas.height/360; }

window.check=function(){
  if(canvas.width<640||canvas.height<360){
    if(render.classList.contains("show")){
      render.classList.remove("show");
      render.classList.add("hide");
    }

    if(load.classList.contains("hide")){
      load.classList.add("show");
      load.classList.remove("hide");
    }

    error.classList.add("show");
    error.classList.remove("hide");

    html.style.backgroundColor=_background.color2;
    canvas.error=true;
  } else{
    render.classList.add("show");
    render.classList.remove("hide");

    load.classList.remove("show");
    load.classList.add("hide");

    if(canvas.error){
      error.classList.remove("show");
      error.classList.add("hide");
    }

    html.style.backgroundColor=_background.color0;
    canvas.error=false;
  }
}

window.update=function(timeStamp){
  if(timeStamp-canvas.lastFrame>=1000/60){
    canvas.lastFrame=timeStamp;

    window.loop();
  } requestAnimationFrame(window.update);
}
requestAnimationFrame(window.update);

window.loop=function(){
  if(scene.value==0){ context.clearRect(0,0,canvas.width,canvas.height); }

  if(canvas.resize){
    html.style.animationPlayState="paused";

    window.setup();
    context.reset();
    window.check();

    if(scene.value>=2&&scene.next!=1&&!scene.change){
      scene.value=1;

      global.menuLoad=true;
      scene.change=true;

      _clipboard.on=false;
      _button.level.on=false;
      _button.level.animation=false;
      _button.setting.on=false;
      _button.setting.animation=false;
      _button.about.on=false;
      _button.about.animation=false;
      _button.version.on=false;
      _button.version.animation=false;
      _button.custom.on=false;
      _button.custom.animation=false;

      if(scene.value==1){ _transition.text.value0="   Menu"; }
      else{ _transition.text.value0="Poziom "+Number(scene.value-1); }

      _transition.timer=0;
    }

    html.style.animationPlayState="running";
    canvas.resize=false;
  }

  if(!canvas.error){
    if(scene.value==0){
      scene.startRender();
      scene.startUpdate();
    } else if(scene.value==1){
      scene.menuRender();
      scene.menuUpdate();
    } else{
      scene.levelRender();
      scene.levelUpdate();
    }
  }
}

