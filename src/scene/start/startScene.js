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

scene.startRender=function(){
  if(scene.timer<context.time(70)){
    context.render(_background.base,_background.color0);
    html.style.backgroundColor=_background.color0;

    if(scene.timer>=context.time(5)&&scene.timer<context.time(35)){ _start.base.alpha-=context.frame(4); }
    else if(scene.timer==context.time(35)){ _start.base.alpha=0; }
    else if(scene.timer>context.time(35)){ _start.base.alpha+=context.frame(4); }
    context.render(_start.base,_start.base.img0);
  } else{
    if(scene.timer>=context.time(70)&&scene.timer<context.time(90)){
      context.render(_background.base,_background.color1);
      html.style.backgroundColor=_background.color1;

      context.render(_start.base,_start.base.img1);
    } else{
      context.render(_background.base,_background.color2);
      html.style.backgroundColor=_background.color2;

      context.render(_start.base,_start.base.img2);
    }
  }

  context.render(_start.arrow,_start.arrow.img0);

  if(!document.fullscreenElement){ context.render(_resolution,_resolution.img0); }
  else{ context.render(_resolution,_resolution.img1); }
}

scene.startUpdate=function(){
  scene.timer++;

  if(scene.timer==context.time(72)){
    audio.load1.load();
    audio.load1.play();
  } else if(scene.timer==context.time(92)){
    audio.load2.load();
    audio.load2.play();
  } else if(scene.timer==context.time(112)){
    audio.load3.load();
    audio.load3.play();

	  _background.base.alpha=100;
    scene.timer=0;
    scene.value=1;
  } else if(scene.timer==context.time(65)){
    scene.timer=0;
    _start.base.alpha=100;
  } else if(scene.timer==context.time(90)){ _background.base.alpha=50; }
}
