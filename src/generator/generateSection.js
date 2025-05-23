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

scene.sectionGenerator=function(){
  if(_platform.currentLoad==1){
    scene.current=7;
    scene.last=7;
  } if(_platform.currentLoad!=_platform.load){
    if(scene.current<=1){ scene.current=Math.floor(Math.random()*3)+4; }
    else if(scene.current==2){ scene.current=Math.floor(Math.random()*2)+5; }
    else if(scene.current==4){ scene.current=Math.floor(Math.random()*2); }
    else if(scene.current>=5){ scene.current=Math.floor(Math.random()*3); }
  }

  scene.section1=0;
  scene.section2=0;
  scene.section3=0;
  scene.section4=0;

  scene.type0=Math.floor(Math.random()*4)+1;
  if(scene.current==0||scene.last==0){ scene.type0=0; }
  else{
	  if(scene.type0==1){ scene.section1++; }
	  else if(scene.type0==2){ scene.section2++; }
	  else if(scene.type0==3){ scene.section3++; }
	  else{ scene.section4++; }
  }

  scene.type1=Math.floor(Math.random()*4)+1;
  if(scene.current==1||scene.last==1){ scene.type1=0; }
  else{
    if(scene.section4==1){ scene.type1=1; }
    if(scene.type1>=scene.type0&&scene.type1!=4){ scene.type1++; }
    else if(scene.type1>=scene.type0&&scene.type1==4){ scene.type1=1; }
    if(scene.type1==1&&(scene.section1==2||_platform.currentLoad==_platform.load&&scene.section1==1)){ scene.type1++; }
    if(scene.type1==2&&scene.section2==3){ scene.type1++; }

    if(scene.type1==1){ scene.section1++; }
    else if(scene.type1==2){ scene.section2++; }
    else if(scene.type1==3){ scene.section3++; }
    else{ scene.section4++; } 
  }

  scene.type2=Math.floor(Math.random()*4)+1;
  if(scene.current==2||scene.last==2){ scene.type2=0; }
  else{
    if(scene.section4==1){ scene.type2=1; }
    if(scene.type2>=scene.type1&&scene.type2!=4){ scene.type2++; }
    else if(scene.type2>=scene.type1&&scene.type2==4){ scene.type2=1; }
    if(scene.type2==1&&(scene.section1==2||_platform.currentLoad==_platform.load&&scene.section1==1)){ scene.type2++; }
    if(scene.type2==2&&scene.section2==3){ scene.type2++; }

    if(scene.type2==1){ scene.section1++; }
    else if(scene.type2==2){ scene.section2++; }
    else if(scene.type2==3){ scene.section3++; }
    else{ scene.section4++; }
  }

  scene.type3=Math.floor(Math.random()*4)+1;
  if(scene.section4==1){ scene.type3=1; }
  if(scene.type3>=scene.type2&&scene.type3!=4){ scene.type3++; }
  else if(scene.type3>=scene.type2&&scene.type3==4){ scene.type3=1; }
  if(scene.type3==1&&(scene.section1==2||_platform.currentLoad==_platform.load&&scene.section1==1)){ scene.type3++; }
  if(scene.type3==2&&scene.section2==3){ scene.type3++; }

  if(scene.type3==1){ scene.section1++; }
  else if(scene.type3==2){ scene.section2++; }
  else if(scene.type3==3){ scene.section3++; }
  else{ scene.section4++; }

  scene.type4=Math.floor(Math.random()*4)+1;
  if(scene.current==4||scene.last==4){ scene.type4=0; }
  else{
    if(scene.section4==1){ scene.type4=1; }
	  if(scene.type4>=scene.type3&&scene.type4!=4){ scene.type4++; }
	  else if(scene.type4>=scene.type3&&scene.type4==4){ scene.type4=1; }
    if(scene.type4==1&&(scene.section1==2||_platform.currentLoad==_platform.load&&scene.section1==1)){ scene.type4++; }
	  if(scene.type4==2&&scene.section2==3){ scene.type4++; }

	  if(scene.type4==1){ scene.section1++; }
	  else if(scene.type4==2){ scene.section2++; }
	  else if(scene.type4==3){ scene.section3++; }
	  else{ scene.section4++; }
  }

  scene.type5=Math.floor(Math.random()*4)+1;
  if(scene.current==5||scene.last==5){ scene.type5=0; }
  else{
    if(scene.section4==1){ scene.type5=1; }
    if(scene.type5>=scene.type4&&scene.type5!=4){ scene.type5++; }
    else if(scene.type5>=scene.type4&&scene.type5==4){ scene.type5=1; }
    if(scene.type5==1&&(scene.section1==2||_platform.currentLoad==_platform.load&&scene.section1==1)){ scene.type5++; }
    if(scene.type5==2&&scene.section2==3){ scene.type5++; }

    if(scene.type5==1){ scene.section1++; }
    else if(scene.type5==2){ scene.section2++; }
    else if(scene.type5==3){ scene.section3++; }
    else{ scene.section4++; }
  }

  if(scene.current==6||scene.last==6){ scene.type6=0; }
  else{
    if(scene.section1==0){ 
      scene.type6=1;
      scene.section1++;
    } else if(scene.section2==0){ 
      scene.type6=2;
      scene.section2++;
    } else if(scene.section3==0){ 
      scene.type6=3;
      scene.section3++;
    } else if(scene.section4==0){
      scene.type6=4;
      scene.section4++;
    } else{
      if(scene.section1==1&&_platform.currentLoad!=_platform.load){
        scene.type6=1;
        scene.section1++;
      } else if(scene.section2==1||scene.section2==2){
        scene.type6=2;
        scene.section2++;
      } else if(scene.section3==1||scene.section3==2){ 
        scene.type6=3;
        scene.section3++;
      }
    }
  }

  if(scene.section1==0){ 
    scene.type7=1;
    scene.section1++;
  } else if(scene.section2==0){ 
    scene.type7=2;
    scene.section2++;
  } else if(scene.section3==0){ 
    scene.type7=3;
    scene.section3++;
  } else if(scene.section4==0){
    scene.type7=4;
    scene.section4++;
  } else{
    if(scene.section1==1&&_platform.currentLoad!=_platform.load){ 
      scene.type7=1;
      scene.section1++;
    } else if(scene.section2==1||scene.section2==2){
      scene.type7=2;
      scene.section2++;
    } else if(scene.section3==1||scene.section3==2){
      scene.type7=3;
      scene.section3++;
    }
  } scene.last=scene.current;
}
