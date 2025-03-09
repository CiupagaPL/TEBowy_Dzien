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

let _currentPlatform=[],_currentSpike=[],_currentCorner=[];

const _background={
  base:{
    x:0,
    y:0,
	
	alpha:75,
  }, bottom:{
    x:0,
    y:360,
  }, left:{
    x:-640,
    y:0,
  }, bottomLeft:{
    x:-640,
    y:360,
  },

  change:false,

  color0:"rgb(0,47,109)",
  color1:"rgb(3,122,162)",
  color2:"rgb(228,0,2)",
  img0:Object.assign(new Image(),{src:"tex/ui/background/0.png"}),
  img1:Object.assign(new Image(),{src:"tex/ui/background/1.png"}),
  img2:Object.assign(new Image(),{src:"tex/ui/background/2.png"}),
  img3:Object.assign(new Image(),{src:"tex/ui/background/3.png"}),
};

const _transition={
  base:{
    x:0,
    y:0,

    color0:"rgb(0,0,25)",
    alpha:0,
  }, text:{
    x:640-256,
    y:96,

    value0:"",
    size:64,

    color0:"rgb(255,255,255)",
    alpha:0,
  },

  timer:0,

  sceneOff:function(){},
  sceneOn:function(){},
  pauseOff:function(){},
  pauseOn:function(){},
  pauseEnd:function(){},
};

const _info={
  x:64,
  y:128,

  value0:"Wersja Niestabilna",
  size:80,
  rotation:25,

  enabled:true,
  
  color0:"rgb(255,255,255)",
  alpha:50,
}

const _start={
  base:{
    x:640-256,
    y:0,

    width:256,
    height:256,

    img0:Object.assign(new Image(),{src:"tex/obj/teb/teb.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/teb/liceum.png"}),
    img2:Object.assign(new Image(),{src:"tex/obj/teb/technikum.png"}),
    alpha:100,
  }, arrow:{
    x:-92,
    y:(360-256)-32,

    width:384,
    height:384,

    img0:Object.assign(new Image(),{src:"tex/obj/arrow.png"}),
    alpha:25,
  }
};

const _title={
  base:{
    x:166,
    y:24,

    width:162,
    height:96,

    img0:Object.assign(new Image(),{src:"tex/ui/title/text.png"}),
    alpha:100,
  }, teb:{
    x:64,
    y:24,
    
    width:96,
    height:96,

    img0:Object.assign(new Image(),{src:"tex/ui/title/teb.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/title/tebOn.png"}),
  },
};

const _resolution={
  x:640-24,
  y:360-24,

  width:16,
  height:16,

  img0:Object.assign(new Image(),{src:"tex/ui/max.png"}),
  img1:Object.assign(new Image(),{src:"tex/ui/min.png"}),
  alpha:100,
};

const _ui={
  menu:{
    x:48,
    y:0,

    width:296,
    height:360,

	  alpha:75,
  }, game:{
    x:0,
    y:0,

    width:640,
    height:24,

	  alpha:75,
  },

  color0:"rgb(0,0,55)",
};

const _hud={
  level:{
    x:640-70,
    y:18,

    value0:"",
    size:20,
  }, score:{
    x:24,
    y:18,

    value0:"",
    size:20,
  },

  icon:{
    pause:{
      x:8,
      y:18,

      width:12,
      height:12,

      value0:"ıı",
      size:28,
    },

    water:{
      x:640-156,
      y:4,

      width:16,
      height:16,

      img0:Object.assign(new Image(),{src:"tex/ui/water/water.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/water/half.png"}),
      img2:Object.assign(new Image(),{src:"tex/ui/water/empty.png"}),
      img3:Object.assign(new Image(),{src:"tex/ui/water/powerWater.png"}),
      img4:Object.assign(new Image(),{src:"tex/ui/water/powerHalf.png"}),
    },

    hpPlayer:{
      heart0:{
        x:640-132,
        y:4,

        width:16,
        height:16,
      }, heart1:{
        x:640-114,
        y:4,

        width:16,
        height:16,
      }, heart2:{
        x:640-96,
        y:4,

        width:16,
        height:16,
      },

      img0:Object.assign(new Image(),{src:"tex/ui/heart/heart.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/heart/half.png"}),
      img2:Object.assign(new Image(),{src:"tex/ui/heart/empty.png"}),
    }, hpTeacher:{
      heart0:{
        x:90,
        y:4,

        width:16,
        height:16,
      }, heart1:{
        x:108,
        y:4,

        width:16,
        height:16,
      }, heart2:{
        x:126,
        y:4,

        width:16,
        height:16,
      }, heart3:{
        x:144,
        y:4,

        width:16,
        height:16,
      }, heart4:{
        x:162,
        y:4,

        width:16,
        height:16,
      },

      img0:Object.assign(new Image(),{src:"tex/ui/heart/bossHeart.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/heart/bossHalf.png"}),
      img2:Object.assign(new Image(),{src:"tex/ui/heart/empty.png"}),
    },
  },

  color0:"rgb(255,255,255)",
};

const _button={
  start:{
    base:{
      x:64,
      y:360-192,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/button/start.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/button/startOn.png"}),
    }, text:{
      x:64+48,
      y:(360-192)+18,

      value0:"Rozpocznij\nPoziom: 01",
      size:16,
      line:2,
	    alpha:100,
    },
  }, level:{
    base:{
      x:64,
      y:360-128,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/button/level.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/button/levelOn.png"}),
    }, text:{
      x:64+48,
      y:(360-128)+18,

      value0:"Selektor\nPoziomów",
      size:16,
      line:2,
	    alpha:100,
    },

    on:false,
    animation:false,
    lateanimation:false,
  }, menu:{
    base:{
      x:64,
      y:360-128,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/button/menu.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/button/menuOn.png"}),
    }, text:{
      x:64+48,
      y:(360-128)+18,

      value0:"Menu\nGłówne",
      size:16,
      line:2,
	    alpha:100,
    },
  }, custom:{
    base:{
      x:64,
      y:360-64,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/button/custom.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/button/customOn.png"}),
    }, text:{
      x:64+48,
      y:(360-64)+28,

      value0:"Postać",
      size:24,
	    alpha:100,
    },

    on:false,
    animation:false,
    lateanimation:false,
  }, restart:{
    base:{
      x:64,
      y:360-64,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/button/restart.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/button/restartOn.png"}),
    }, text:{
      x:64+48,
      y:(360-64)+18,

      value0:"Powtórz\nPoziom",
      size:16,
      line:2,
	    alpha:100,
    },
  }, setting:{
    base:{
      x:(64+264)-42,
      y:360-192,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/button/setting.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/button/settingOn.png"}),
    }, text:{
      x:((64+264)-42)-48,
      y:(360-192)+28,

      value0:"Opcje",
      size:24,
	    alpha:100,
    },

    on:false,
    animation:false,
    lateanimation:false,
  }, about:{
    base:{
      x:(64+264)-42,
      y:360-128,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/button/about.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/button/aboutOn.png"}),
    }, text:{
      x:((64+264)-42)-60,
      y:(360-128)+18,

      value0:" Na Temat\nRozgrywki",
      size:16,
      line:2,
	    alpha:100,
    },
	
    on:false,
    animation:false,
    lateanimation:false,
  }, version:{
    base:{
      x:(64+264)-42,
      y:360-64,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/button/version.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/button/versionOn.png"}),
    }, text:{
      x:((64+264)-42)-64,
      y:(360-64)+18,

      value0:"    Unstable\n09-03-2025",
      size:16,
      line:2,
	    alpha:100,
    },
  },

  color0:"rgb(255,255,255)",
};

const _clipboard={
  base:{
    x:640+160,
    y:(360/2)-(240/2),

    width:160,
    height:240,

    img0:Object.assign(new Image(),{src:"tex/ui/clipboard/clipboard.png"}),
  }, back:{
    x:(640+160)+(160-36),
    y:((360/2)-(240/2))+4,

    width:32,
    height:32,
	  rotation:180,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/clipboard/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/clipboard/backOn.png"}),
  },

  wide:{
    x:64-2,
    y:152,

    width:264,
    height:184,

    img0:Object.assign(new Image(),{src:"tex/ui/clipboard/wideClipboard.png"}),
  }, wideBack:{
    x:(64-2)+234,
    y:152,

    width:24,
    height:24,
	  rotation:180,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/clipboard/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/clipboard/backOn.png"}),
  },

  setting:{
    title:{
      x:(640+160)+54,
      y:((360/2)-(240/2))+60,

      value0:"Opcje",
      size:28,
    }, sfx:{
      base:{
        x:(640+160)+24,
        y:((360/2)-(240/2))+78,

        width:16,
        height:16,
      }, text:{
        x:(640+160)+42,
        y:((360/2)-(240/2))+91,

        value0:"Dźwięk",
        size:16,
      },
    }, music:{
      base:{
        x:(640+160)+24,
        y:((360/2)-(240/2))+108,

        width:16,
        height:16,
      }, text:{
        x:(640+160)+42,
        y:((360/2)-(240/2))+121,

        value0:"Muzyka",
        size:16,
      },
    }, tutorial:{
      base:{
        x:(640+160)+24,
        y:((360/2)-(240/2))+138,

        width:16,
        height:16,
      }, text:{
        x:(640+160)+42,
        y:((360/2)-(240/2))+151,

        value0:"Poradnik",
        size:16,
      },
    }, teacher:{
      base:{
        x:(640+160)+24,
        y:((360/2)-(240/2))+168,

        width:16,
        height:16,
      }, text:{
        x:(640+160)+42,
        y:((360/2)-(240/2))+181,

        value0:"Opis Nauczycieli",
        size:16,
      },
    }, addon:{
      base:{
        x:(640+160)+24,
        y:((360/2)-(240/2))+198,

        width:16,
        height:16,
      }, text:{
        x:(640+160)+42,
        y:((360/2)-(240/2))+211,

        value0:"Efekty Dodatkowe",
        size:16,
      },
    },

    img0:Object.assign(new Image(),{src:"tex/ui/O.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/X.png"}),
  },

  about:{
    title:{
      x:(640+160)+60,
      y:((360/2)-(240/2))+60,

      value0:"Opis",
      size:28,
    }, text:{
      x:(640+160)+24,
      y:((360/2)-(240/2))+88,

      value0:"Gra TEBOWY DZIEŃ\nzostała stworzona\nz myślą o naszych\nuczniach. Mamy\nnadzieję, że sprawi\n"+
            "ona wiele uśmiechu\nna Waszych twarzach\ni radości z grania!\nPozdrawiamy :-D",
      size:15,
    },
  },

  version:{
    title:{
      x:(640+160)+46,
      y:((360/2)-(240/2))+60,

      value0:"Twórcy",
      size:28,
    }, text:{
      x:(640+160)+24,
      y:((360/2)-(240/2))+88,

      value0:"Nadzorowanie Projektu:\n> tom2edu\nPisanie Kodu:\n> Ciupaga\nDźwięk, Testowanie:\n> Ucheesename\nMuzyka:\n> M4RCIN-MJJ",
      size:15,
    },
  },

  tutorial:{
    title:{
      x:(64-2)+82,
      y:152+32,

      value0:"Poradnik",
      size:28,
    }, text:{
      x:(64-2)+18,
      y:152+50,

      value0:"Poruszaj się za pomocą [A]|[D] lub [Lewo]|[Prawo].\nPodskakuj za pomocą [W]|[Góra]|[Spacja]. Będąc\n"+
            "na chmurce do poruszania używaj [W]|[A]|[S]|[D] lub\n[Góra]|[Lewo]|[Dół]|[Prawo]. Strzelaj za pomocą\n"+
            "[Shift]. Twoim celem jest dostać się na górę poziomu\ni pokonać danego nauczyciela. Po drodze musisz\n"+
            "omijać przeszkody w postaci kolców i laserów.\nW trudnej sytuacji użyj Tebulinka. Życzymy szczęścia!",
      size:12,
    },
  },

  reward:{
    title:{
      x:(64-2)+62,
      y:152+32,

      value0:"Gratulacje!",
      size:28,
    }, text:{
      x:(64-2)+18,
      y:152+50,

      value0:"Udało się Tobie przejść całą\ngrę. Mamy nadzieję że zabawa była\nudana i przy okazji nauczyciele\nwystępujący w grze nie będą straszni\njuż w realu >_o",
      size:12,
    }, icon:{
      x:(64-2)+162,
      y:152+12,

      width:24,
      height:24,

      img0:Object.assign(new Image(),{src:"tex/ui/icon/trophy.png"}),
    },
  },

  on:false,
  close:false,
  change:false,

  color0:"rgb(0,0,0)",

  update:function(){},
};

const _blueprint={
  base:{
    x:640+160,
    y:(360/2)-(240/2),

    width:160,
    height:240,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/blueprint0.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/blueprint1.png"}),
  }, skin:{
    x:(640+160)+42,
    y:((360/2)-(240/2))+58,

    width:72,
    height:122,

    img0:Object.assign(new Image(),{src:"tex/obj/player/boy0.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/player/boy1.png"}),
    img2:Object.assign(new Image(),{src:"tex/obj/player/girl0.png"}),
    img3:Object.assign(new Image(),{src:"tex/obj/player/girl1.png"}),
  }, back:{
    x:(640+160)+124,
    y:((360/2)-(240/2))+6,

    width:28,
    height:28,
	  rotation:180,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/backOn.png"}),
  }, left:{
    x:(640+160)+8,
    y:((360/2)-(240/2))+206,

    width:28,
    height:28,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/backOn.png"}),
  }, right:{
    x:(640+160)+124,
    y:((360/2)-(240/2))+206,

    width:28,
    height:28,
	  rotation:180,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/backOn.png"}),
  },

  wide:{
    x:64-2,
    y:152,

    width:264,
    height:184,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/wideBlueprint.png"}),
  }, wideBack:{
    x:(64-2)+238,
    y:152+158,

    width:24,
    height:24,
	  rotation:180,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/backOn.png"}),
  },

  level:{
    title:{
      x:(640+160)+42,
      y:((360/2)-(240/2))+58,

      value0:"Poziomy",
      size:28,
    }, button1:{
      x:(640+160)+20,
      y:((360/2)-(240/2))+92,

      width:52,
      height:14,

      value0:"Poziom  1",
      size:18,
    }, button2:{
      x:(640+160)+20,
      y:((360/2)-(240/2))+120,

      width:52,
      height:14,

      value0:"Poziom  2",
      size:18,
    }, button3:{
      x:(640+160)+20,
      y:((360/2)-(240/2))+148,

      width:52,
      height:14,
      value0:"Poziom  3",
      size:18,
    }, button4:{
      x:(640+160)+20,
      y:((360/2)-(240/2))+176,

      width:52,
      height:14,
      
      value0:"Poziom  4",
      size:18,
    }, button5:{
      x:(640+160)+20,
      y:((360/2)-(240/2))+204,

      width:52,
      height:14,
      
      value0:"Poziom  5",
      size:18,
    }, button6:{
      x:(640+160)+88,
      y:((360/2)-(240/2))+92,

      width:52,
      height:14,
      
      value0:"Poziom  6",
      size:18,
    }, button7:{
      x:(640+160)+88,
      y:((360/2)-(240/2))+120,

      width:52,
      height:14,
      
      value0:"Poziom  7",
      size:18,
    }, button8:{
      x:(640+160)+88,
      y:((360/2)-(240/2))+148,

      width:52,
      height:14,
      
      value0:"Poziom  8",
      size:18,
    }, button9:{
      x:(640+160)+88,
      y:((360/2)-(240/2))+176,

      width:52,
      height:14,
      
      value0:"Poziom  9",
      size:18,
    }, button10:{
      x:(640+160)+88,
      y:((360/2)-(240/2))+204,

      width:52,
      height:14,
      
      value0:"Poziom 10",
      size:18,
    },
  },

  custom:{
    title:{
      x:(640+160)+50,
      y:((360/2)-(240/2))+58,

      value0:"Postać",
      size:28,
    }, text:{
      x:(640+160)+68,
      y:((360/2)-(240/2))+200,

      value0:"1/4",
      size:20,
    },
  },

  teacher:{
    title:{
      x:(64-2)+12,
      y:152+24,

      value0:"Tomasz Staniszewski",
      value1:"Radosław Sass",
      value2:"Paweł Kępa",
      value3:"Anna Skarbek Chmielewska",
      value4:"Marta Milde",
      value5:"Anna Świtoń",
      value6:"Piotr Łojek",
      value7:"Iwo Musiałowski",
      valueAdd0:"Iwona Bury Sierzchuła",
      valueAdd1:"Wojciech Złotowski",
      valueAdd2:"Anna Niklas",
      size:20,
    }, text:{
      x:(64-2)+14,
      y:152+64,

      value0:"Nauczyciel z pasją, zwany często\nPanem Gołębiem. Twórca Twojej\nplatformówki. "+
             "Dzięki niemu\npoznasz wszystkie tajniki aplikacji\nwebowych, desktopowych\ni mobilnych. Walka nie będzie łatwa.",
      value1:"Zapalony fotograf i mistrz zdjęć\ndużego formatu. Z nim nie\nbędziesz się nudził/a szczególnie\n"+
             "jeśli planujesz zostać Technikiem\nFotografii i Multimediów. Zajęcia\npraktyczne"+
             "pełne ciekawych\nrozwiązań, a usposobienie Pana\nRadka na szóstkę z koroną!\nWalka nie będzie łatwa.",
      value2:"Mężczyzna pracujący, żadnej\npracy się nie boi! Fotograf\ni Informatyk w jednym, a swoje\n"+
             "umiejętności z powodzeniem łączy\nna kierunkach zawodowych.\nNauczy Cię do egzaminu i sprzeda\n"+
             "przydatną wiedzę życiową! Walka\nnie będzie łatwa.",
      value3:"Ma rękę do biznesów. Z tym\nnauczycielem będzie Ci po\ndrodze jeśli chcesz nauczyć się\n"+
             "Biznesu i Zarządzania. Podstawy\nPrzedsiębiorczości nie są jej\nobce, a wycieczki do Urzędu\n"+
             "Skarbowego murowane. Walka nie\nbędzie łatwa.",
      value4:"Kobieta tysiąca zawodów\ni koordynator chaosu, nie ma\ntakich zadań, z którymi by sobie\n"+
             "nie poradziła! Możesz ją spotkać\nna zajęciach z Cyfrowej Obróbki\nObrazu, Projektów, Plastyki\n"+
             "czy BiZu. Za chwilę będzie\nwychodzić nawet z lodówki! Walka\nnie będzie łatwa.",
      value5:"Kiedy głowa ciąży od problemów,\na serduszko łamie się od zmartwień,\nlekiem na problemy jest Pani Pedagog,\n"+
             "która zawsze znajdzie dla Ciebie czas.\nWalka nie będzie łatwa.",
      value6:"Zwany postrachem tej szkoły. Mistrz\npoligrafii i nauczyciel w jednym. Jeśli\nmyślisz serio o przedmiotach zawodowych,\n"+
             "może Cię potraktować ulgowo… pod\nwarunkiem, że go słuchasz! Walka\nnie będzie łatwa.",
      value7:"To jest dopiero #nauczycielzpasją!\nNie stroni od historycznych przebieranek\n"+
             "i inscenizacji, a jego lekcje historii\npoparte są żywym przykładem. Kolekcjoner\nuzbrojenia i mundrów. Walka nie\nbędzie łatwa.",
      valueAdd0:"[...] To jeszcze nie koniec!",
      valueAdd1:"Bezpieczeństwo i higiena to przedmiot,\nktóry uczy nasz Dyrektor. Pan\n"+
                "Wojtek zarządza Liceum, a jednocześnie\nprzekazuje praktyczną wiedzę. To jeszcze\nnie koniec!",
      valueAdd2:"Groźna Pani Dyrektor! A skąd!\nWie kiedy pogrozić palcem, mimo\nto uwielbia swoją młodzież\n"+
                "i stara się robić wszystko by\nspełnić ich marzenia. Pod warunkiem,\nże akurat nie dostałeś/aś drugiej nagany.\n"+
                "Daj z siebie wszystko!",
      size:12,
    },
  },
  
  on:false,
  close:false,
  change:false,

  color0:"rgb(255,255,255)",

  update:function(){},
};

const _player={
  base:{
    x:64,
    y:(360-12)-81,

    width:48,
    height:81,

    img0:Object.assign(new Image(),{src:"tex/obj/player/boy0.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/player/boy1.png"}),
    img2:Object.assign(new Image(),{src:"tex/obj/player/girl0.png"}),
    img3:Object.assign(new Image(),{src:"tex/obj/player/girl1.png"}),
    img0Left:Object.assign(new Image(),{src:"tex/obj/player/boy0left.png"}),
    img1Left:Object.assign(new Image(),{src:"tex/obj/player/boy1left.png"}),
    img2Left:Object.assign(new Image(),{src:"tex/obj/player/girl0left.png"}),
    img3Left:Object.assign(new Image(),{src:"tex/obj/player/girl1left.png"}),
    alpha:100,
  }, text:{
    x:0,
    y:0,

    value0:"",
    size:12,

    color0:"rgb(225,255,255)",
    alpha:0,
  },

  gun:{
    x:0,
    y:0,

    width:20,
    height:20,

    timer:0,

    on:false,
    power:false,
  
    img0:Object.assign(new Image(),{src:"tex/obj/gun/gun.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/gun/powerGun.png"}),
  }, ammo:{
    x:0,
    y:0,

    width:16,
    height:16,

    power:false,
    unused:true,
  
    img0:Object.assign(new Image(),{src:"tex/obj/ammo/ammo.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/ammo/powerAmmo.png"}),
  },

  cloud:{
    x:0,
    y:0,

    width:64,
    height:48,

    available:false,

    img0:Object.assign(new Image(),{src:"tex/obj/cloud/left.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/cloud/right.png"}),
  },

  collisionTop:{
    x:0,
    y:0,

    width:40,
    height:4,
  }, collisionBottom:{
    x:0,
    y:0,

    width:40,
    height:4,
  }, collisionLeft:{
    x:0,
    y:0,

    width:4,
    height:69,
  }, collisionRight:{
    x:0,
    y:0,

    width:4,
    height:69,
  },

  vx:0,
  vy:0,
  ivy:-12,
  gravity:0.5,
  upTimer:0,
  invisible:0,
  max:60,
  skin:0,
  hp:150,

  touched:false,
  active:false,
  grounded:false,
  jumped:false,
  fly:false,
  cloudFly:false,
  left:false,

  render:function(){},
  textRender:function(){},
  update:function(){},
  midUpdate:function(){},
  lateUpdate:function(){},
};

const _platform={
  array:[],

  lx:0,
  ly:0,

  width:0,
  height:12,

  lenght:0,
  currentLenght:0,
  load:13,
  currentLoad:0,
  currentCount:0,
  level:0,
  lastLevel:0,
  random:0,

  img0:Object.assign(new Image(),{src:"tex/obj/platform.png"}),

  update:function(){},
};

const _corner={
  base:{
    width:6,
    height:12,
  }, laser:{
    width:120,
    height:6,
  },

  array:[],

  lenght:-1,
  currentLenght:0,
  timer:0,
  max:60,

  img0:Object.assign(new Image(),{src:"tex/obj/corner.png"}),

  color0:"rgb(255,255,255)",

  update:function(){},
};

const _spike={
  array:[],

  width:16,
  height:14,
  lenght:-1,
  currentLenght:0,
  random:0,
  count:0,

  checked:false,
  detected:false,
  
  img0:Object.assign(new Image(),{src:"tex/obj/spike.png"}),

  update:function(){},
};

const _sign={
  base:{
    x:0,
    y:0,

    width:64,
    height:48,

    img0:Object.assign(new Image(),{src:"tex/obj/next.png"}),
  }, teacher:{
    x:0,
    y:0,

    width:64,
    height:48,

    img0:Object.assign(new Image(),{src:"tex/obj/teacher.png"}),
  },
};

const _teacher={
  base:{
    x:0,
    y:0,

    width:64,
    height:108,

    img0:Object.assign(new Image(),{src:"tex/obj/people/TS.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/people/RS.png"}),
    img2:Object.assign(new Image(),{src:"tex/obj/people/PK.png"}),
    img3:Object.assign(new Image(),{src:"tex/obj/people/ASC.png"}),
    img4:Object.assign(new Image(),{src:"tex/obj/people/MM.png"}),
    img5:Object.assign(new Image(),{src:"tex/obj/people/AS.png"}),
    img6:Object.assign(new Image(),{src:"tex/obj/people/PL.png"}),
    img7:Object.assign(new Image(),{src:"tex/obj/people/IM.png"}),
    imgAdd0:Object.assign(new Image(),{src:"tex/obj/people/ISB.png"}),
    imgAdd1:Object.assign(new Image(),{src:"tex/obj/people/WZ.png"}),
    imgAdd2:Object.assign(new Image(),{src:"tex/obj/people/AN.png"}),
  }, text:{
    x:0,
    y:0,

    value0:"",
    size:12,

    color0:"rgb(225,255,255)",
  },

  cloud:{
    x:0,
    y:0,

    width:96,
    height:72,

    img0:Object.assign(new Image(),{src:"tex/obj/cloud/left.png"}),
  },

  invisible:0,
  random:0,
  round:0,
  max:60,
  hp:250,

  load:false,
  attack:false,
  on:false,

  render:function(){},
  textRender:function(){},
  update:function(){},
};

const _attack={
  tebulinek:{
    x:0,
    y:0,

    width:64,
    height:64,
    rotation:0,
	
    unused:true,

    img0:Object.assign(new Image(),{src:"tex/obj/attack/tebulinek.png"}),
  },

  object1:{
    x:0,
    y:0,

    width:48,
    height:48,
    rotation:0,

    current:0,

    unused:true,

    img0Computer:Object.assign(new Image(),{src:"tex/obj/attack/computer.png"}),
    img0Keyboard:Object.assign(new Image(),{src:"tex/obj/attack/keyboard.png"}),
  }, object2:{
    x:0,
    y:0,

    width:48,
    height:48,
    rotation:0,

    current:0,

    unused:true,

    img0Coffe:Object.assign(new Image(),{src:"tex/obj/attack/coffe.png"}),
    img0Pigeon:Object.assign(new Image(),{src:"tex/obj/attack/pigeon.png"}),
  },

  update:function(){},
  handle:function(){},
};
