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

scene.startRender=function(){
  if(scene.timer<70){
    context.render(_background.base,_background.color0Half);
    html.style.backgroundColor=_background.color0;

    if(scene.timer<20||scene.timer>=60){ context.render(_start.base,_start.base.img0); }
    else if(scene.timer>=20&&scene.timer<25||scene.timer>=55&&scene.timer<60){ context.render(_start.base,_start.base.img1); }
    else if(scene.timer>=25&&scene.timer<30||scene.timer>=50&&scene.timer<55){ context.render(_start.base,_start.base.img2); }
  } else{
    if(scene.timer>=70&&scene.timer<90){
      context.render(_background.base,_background.color1Half);
      html.style.backgroundColor=_background.color1;

      context.render(_start.base,_start.base.img0Liceum);
    } else{
      context.render(_background.base,_background.color2Half);
      html.style.backgroundColor=_background.color2;

      context.render(_start.base,_start.base.img0Technikum);
    }
  }

  context.render(_start.arrow,_start.arrow.img0);

  if(_resolution.hover){
    if(!document.fullscreenElement){ context.render(_resolution,_resolution.img2); }
    else{ context.render(_resolution,_resolution.img3); }
  } else{
    if(!document.fullscreenElement){ context.render(_resolution,_resolution.img0); }
    else{ context.render(_resolution,_resolution.img1); }
  }
}

scene.startUpdate=function(){
  scene.timer++;

  if(scene.timer==72){
    audio.load1.load();
    audio.load1.play();
  } else if(scene.timer==92){
    audio.load2.load();
    audio.load2.play();
  } else if(scene.timer==110){
    audio.load3.load();
    audio.load3.play();

    scene.timer=0;
    scene.value=1;
  } else if(scene.timer==65){ scene.timer=0; }
}

