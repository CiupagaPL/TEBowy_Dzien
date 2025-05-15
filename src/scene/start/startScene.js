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
    context.render(_background.base,"rgb(0,47,109)");

    if(scene.timer>=context.time(5)&&scene.timer<context.time(35)){ _start.base.alpha-=context.frame(4); }
    else if(scene.timer==context.time(35)){ _start.base.alpha=0; }
    else if(scene.timer>context.time(35)){ _start.base.alpha+=context.frame(4); }
    context.render(_start.base,_start.base.imgBase);
  } else{
    if(scene.timer>=context.time(100)&&scene.timer<context.time(120)){
      context.render(_background.base,"rgb(3,122,162)");

      if(html.classList.contains("black-blue")||html.classList.contains("red-blue")){
        html.classList.remove("black-blue");
        html.classList.remove("red-blue");
        html.classList.add("blue-cyan");
      } context.render(_start.base,_start.base.imgLic);
    } else{
      context.render(_background.base,"rgb(228,0,2)");

      if(html.classList.contains("blue-cyan")){
        html.classList.remove("blue-cyan");
        html.classList.add("cyan-red");
      } context.render(_start.base,_start.base.imgTech);
    }
  } context.render(_start.arrow,_start.arrow.img);

  if(!document.fullscreenElement){ context.render(_indicator,_indicator.imgMax); }
  else{ context.render(_indicator,_indicator.imgMin); }
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
