/*   ,-----,
 *   |     |    ,--------------------------------------,
 *   |     |   ( */"use strict"/* pastebin.com/zdg35gef )
 *  (|-----|) < The project is licensed under MIT -^    |
 *  |\_____/|  "---------------------------------------"
 *  |       |    __---.
 *  ( o   o )   /      )
 *  \ = . = \__/    --"
 *  /              /
 * |              |
 *  \ \    \ \   |
 *   | |    | | /
 *  (_(_)--(_(_) */

canvas.setup=function(){
  if((window.innerWidth/16)>=(window.innerHeight/9)){
    canvas.width=16*Math.floor(window.innerHeight/9);
    canvas.height=9*Math.floor(window.innerHeight/9);

    render.width=canvas.width;
    render.height=canvas.height;

    canvas.prevScale=canvas.scale;
    canvas.scale=Math.floor((canvas.width/640||canvas.height/360)*100)/100;

    context.imageSmoothingEnabled=false;

    render.style.borderTop=0;
    render.style.borderBottom=0;

    render.style.borderLeft=context.scale(4)+"px solid white";
    render.style.borderRight=context.scale(4)+"px solid white";

    render.style.left=((window.innerWidth-canvas.width)/2)-context.scale(4)+"px";
    render.style.top=((window.innerHeight-canvas.height)/2)+"px";
  } else{
    canvas.width=16*Math.floor(window.innerWidth/16);
    canvas.height=9*Math.floor(window.innerWidth/16);

    render.width=canvas.width;
    render.height=canvas.height;

    context.imageSmoothingEnabled=false;

    canvas.prevScale=canvas.scale;
    canvas.scale=Math.floor((canvas.width/640||canvas.height/360)*100)/100;

    render.style.borderTop=context.scale(4)+"px solid white";
    render.style.borderBottom=context.scale(4)+"px solid white";
    render.style.borderLeft=0;
    render.style.borderRight=0;

    render.style.left=((window.innerWidth-canvas.width)/2)+"px";
    render.style.top=((window.innerHeight-canvas.height)/2)-context.scale(4)+"px";
  }

  render.style.boxShadow=0+"px "+0+"px "+context.scale(8)+"px "+context.scale(2)+"px white";

  render.style.width=canvas.width+"px";
  render.style.height=canvas.height+"px";
}

canvas.check=function(){
  if(canvas.width<640||canvas.height<360){
    if(render.classList.contains("show")){
      render.classList.remove("show");
      render.classList.add("hide");
    } if(load.classList.contains("hide")){
      load.classList.add("show");
      load.classList.remove("hide");
    }

    error.classList.add("show");
    error.classList.remove("hide");

    html.classList.remove("blue-black");
    html.classList.remove("cyan-black");
    html.classList.remove("red-black");
    html.classList.remove("black-blue");
    html.classList.remove("black-cyan");
    html.classList.remove("black-red");
    html.classList.remove("cyan-red");
    html.classList.remove("red-blue");
    html.classList.add("blue-red");

    canvas.error=true;
  } else{
    render.classList.add("show");
    render.classList.remove("hide");
    load.classList.remove("show");
    load.classList.add("hide");

    if(canvas.error){
      error.classList.remove("show");
      error.classList.add("hide");
      html.classList.remove("blue-red");
      html.classList.add("red-blue");
    } canvas.error=false;
  }
}

canvas.animate=function(current){
  requestAnimationFrame(canvas.animate);
  canvas.elapsed=current-canvas.then;

  if(canvas.elapsed>1000/canvas.limitFps){
    canvas.then=current-(canvas.elapsed%(1000/canvas.limitFps));
    canvas.currentFps=Math.round(1000/((current-canvas.start)/++canvas.countFps));

    canvas.loop();
	
	  if(document.visibilityState=="visible"){ document.title="Tebowy Dzień: "+canvas.currentFps+"FPS"; }
	  else{
      document.title="Tebowy Dzień: Minimized";
      global.pause=true;
      global.pauseChange=true;
    }

    if(!canvas.reset||current-canvas.reset>=500){
      if(document.visibilityState!="visible"){
        canvas.fpsLimit=4;
        canvas.first=false;
        canvas.reset+=1000;
      }

      if(canvas.first){
        canvas.prevTimeScale=canvas.timeScale;

        while((canvas.timeScale-0.1)*40>canvas.currentFps){ canvas.timeScale-=0.1; }
        while((canvas.timeScale*40)-2<=canvas.currentFps){ canvas.timeScale+=0.2; }

        if(canvas.timeScale<0.3){ canvas.timeScale=0.3; }
        if(canvas.timeScale>3.0){ canvas.timeScale=3.0; }

        canvas.fpsLimit=canvas.timeScale*40;
        scene.timer=context.limit(scene.timer);

        _transition.timer=context.limit(_transition.timer);

        if(scene.value>=2){
          _player.invisible=context.limit(_player.invisible);
          _player.upTimer=context.limit(_player.upTimer);
          _teacher.invisible=context.limit(_teacher.invisible);

          _corner.timer=context.limit(_corner.timer);
          _ui.elapsed=context.limit(_ui.elapsed);
        }
      } else{
        canvas.fpsLimit=120;
        canvas.first=true;
      }

      canvas.reset=current;
      canvas.countFps=0;
      canvas.start=current;
    }
  }
}

canvas.startAnimating=function(){
  canvas.then=window.performance.now();
  canvas.start=canvas.then;

  canvas.animate();
}
canvas.startAnimating();

canvas.loop=function(){
  if(scene.value==0){ context.clearRect(0,0,canvas.width,canvas.height); }

  if(canvas.resize){
    html.style.animationPlayState="paused";
    scene.blocked=true;

    canvas.setup();
    context.reset();
    canvas.check();

    if(scene.value>=2&&scene.next!=1&&!scene.change){
      scene.value=1;

      global.menuLoad=true;
      scene.change=true;
      _transition.base.alpha=100;
      _transition.text.alpha=100;

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
    scene.blocked=false;
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

    if(!global.stable){ context.text(_info,_info.color0,_info.value0); }
  }
}
