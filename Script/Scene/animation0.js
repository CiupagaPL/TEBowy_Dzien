/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

animateloading=function(){
  if(!canStart){
    _context.fillShortRect(_background.color0,_background);
    _html.style.backgroundColor=_background.color0;
    _context.drawShortImage(_startTEB.img0,_startTEB);

    if(sceneTimer<=15){
      _context.fillSingleText(_startText);
    } if(sceneTimer>30){
      sceneTimer=0;
    }
  } else if(canStart){
    if(sceneTimer>0&&sceneTimer<=10){
      _context.fillShortRect(_background.color1,_background);

      _html.style.backgroundColor=_background.color1;

      _context.drawShortImage(_startTEB.img1,_startTEB);

      _audio.load1.play();
    } if(sceneTimer>10&&sceneTimer<=20){
      _context.fillShortRect(_background.color2,_background);

      _html.style.backgroundColor=_background.color2;

      _context.drawShortImage(_startTEB.img2,_startTEB);

      _audio.load2.play();
    } if(sceneTimer>20&&sceneTimer<=30){
      _context.fillShortRect(_background.color1,_background);

      _html.style.backgroundColor=_background.color1;

      _context.drawShortImage(_startTEB.img1,_startTEB);

      _audio.load1.play();
    } if(sceneTimer>30&&sceneTimer<=40){
      _context.fillShortRect(_background.color2,_background);

      _html.style.backgroundColor=_background.color2;

      _context.drawShortImage(_startTEB.img2,_startTEB);

      _audio.load2.play();
    }
    if(sceneTimer>40&&sceneTimer<=50){
      _context.fillShortRect(_background.color1,_background);

      _html.style.backgroundColor=_background.color1;

      _context.drawShortImage(_startTEB.img1,_startTEB);

      _audio.load1.play();
    } if(sceneTimer>50&&sceneTimer<=60){
      _context.fillShortRect(_background.color2,_background);

      _html.style.backgroundColor=_background.color2;

      _context.drawShortImage(_startTEB.img2,_startTEB);

      _audio.load2.play();
    } if(sceneTimer>60){ nextScene=1; _audio.load3.play(); }
  }
}
