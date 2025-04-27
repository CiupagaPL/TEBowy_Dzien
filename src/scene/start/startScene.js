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

if(global.stable){ console.log("Pamiętaj, że grając wspierasz rozwój gry! Dzięki :-D"); }
else{ console.log("Grasz na wersji niestabilnej, pamiętaj by wszelkie błędy zgłaszać na GitHubie! >.<"); }
html.classList.add("black-blue");

scene.startRender=function(){
  if(scene.timer<context.time(100)){
    context.render(_background.base,_background.color0);

    if(scene.timer>=context.time(5)&&scene.timer<context.time(35)){ _start.base.alpha-=context.frame(4); }
    else if(scene.timer==context.time(35)){ _start.base.alpha=0; }
    else if(scene.timer>context.time(35)){ _start.base.alpha+=context.frame(4); }
    context.render(_start.base,_start.base.img0);
  } else{
    if(scene.timer>=context.time(100)&&scene.timer<context.time(120)){
      context.render(_background.base,_background.color1);

      if(html.classList.contains("black-blue")||html.classList.contains("red-blue")){
        html.classList.remove("black-blue");
        html.classList.remove("red-blue");
        html.classList.add("blue-cyan");
      } context.render(_start.base,_start.base.img1);
    } else{
      context.render(_background.base,_background.color2);

      if(html.classList.contains("blue-cyan")){
        html.classList.remove("blue-cyan");
        html.classList.add("cyan-red");
      } context.render(_start.base,_start.base.img2);
    }
  } context.render(_start.arrow,_start.arrow.img0);

  if(!document.fullscreenElement){ context.render(_indicator,_indicator.img0Resolution); }
  else{ context.render(_indicator,_indicator.img1Resolution); }
}

scene.startUpdate=function(){
  scene.timer++;

  if(scene.timer==context.time(102)&&global.sfx){
    audio.load_sfx.load();
    audio.load_sfx.play();
  } else if(scene.timer==context.time(140)){
    html.classList.remove("cyan-red");
    html.classList.add("red-blue");

	  _background.base.alpha=100;
    scene.timer=0;
    scene.value=1;
  } else if(scene.timer>=context.time(65)&&scene.timer<context.time(100)){
    scene.timer=0;
    _start.base.alpha=100;
  } else if(scene.timer==context.time(120)){ _background.base.alpha=50; }
}
