/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

window.detectcollision=function(_object1,_object2){
  return _object1.x<_object2.x+_object2.width&&
         _object1.x+_object1.width>_object2.x&&
         _object1.y<_object2.y+_object2.height&&
         _object1.y+_object1.height>_object2.y;
}

_context.fillMultiText=function(_text){
  let lines=_text.value.split("\n");

  _context.fillStyle=_text.color;
  _context.font=_text.debug;

  lines.forEach((line,c)=>{
    _context.fillText(line,_text.x,_text.y+(c*_text.size),_currentResolution.width);
  });
}

_context.fillSingleText=function(_text){
  _context.fillStyle=_text.color;
  _context.font=_text.debug;
  _context.fillText(_text.value,_text.x,_text.y);
}

_context.drawShortImage=function(_img,_object){
  _context.drawImage(_img,_object.x,_object.y,_object.width,_object.height);
}

_context.fillShortRect=function(_color,_object){
  _context.fillStyle=_color;
  _context.fillRect(_object.x,_object.y,_object.width,_object.height);
}
