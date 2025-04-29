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

let _currentPlatform=[],_currentCorner=[],_currentForeground=[],_currentDecoration=[],_currentTebox=[],_currentSpike=[];

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

  color0:"rgb(0,47,109)",
  color1:"rgb(3,122,162)",
  color2:"rgb(228,0,2)",
  imgMenu:Object.assign(new Image(),{src:"tex/back/menu.png"}),
  imgLevel:Object.assign(new Image(),{src:"tex/back/level.png"}),
  imgTeacher:Object.assign(new Image(),{src:"tex/back/teacher.png"}),
};

const _transition={
  base:{
    x:0,
    y:-718,
  }, top:{
    x:0,
    y:-1076,
  }, bottom:{
    x:0,
    y:-360,
  }, overlay:{
    x:0,
    y:0,

    alpha:0,
  }, text:{
    x:0,
    y:-550,

    size:48,
    value0:"",
  },

  color0:"rgb(0,27,69)",
  img0:Object.assign(new Image(),{src:"tex/ui/transition/top.png"}),
  img1:Object.assign(new Image(),{src:"tex/ui/transition/bottom.png"}),

  sceneOff:function(){},
  sceneOn:function(){},
  pauseOff:function(){},
  pauseOn:function(){},
};

const _indicator={
  x:616,
  y:336,

  width:20,
  height:20,

  timer:0,

  img0Resolution:Object.assign(new Image(),{src:"tex/ui/indicator/max.png"}),
  img1Resolution:Object.assign(new Image(),{src:"tex/ui/indicator/min.png"}),
  img0:Object.assign(new Image(),{src:"tex/ui/indicator/0.png"}),
  img1:Object.assign(new Image(),{src:"tex/ui/indicator/1.png"}),
  img2:Object.assign(new Image(),{src:"tex/ui/indicator/2.png"}),
  img3:Object.assign(new Image(),{src:"tex/ui/indicator/3.png"}),
  img4:Object.assign(new Image(),{src:"tex/ui/indicator/4.png"}),
  img5:Object.assign(new Image(),{src:"tex/ui/indicator/5.png"}),
  alpha:100,
};

const _info={
  x:64,
  y:128,

  value0:"Wersja Niestabilna",
  size:80,
  rotation:25,

  color0:"rgb(255,255,255)",
  alpha:50,
}

const _start={
  base:{
    x:384,
    y:0,

    width:256,
    height:256,

    img0:Object.assign(new Image(),{src:"tex/ui/menu/teb/base.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/menu/teb/lic.png"}),
    img2:Object.assign(new Image(),{src:"tex/ui/menu/teb/tech.png"}),
    alpha:100,
  }, arrow:{
    x:-92,
    y:72,

    width:384,
    height:384,

    img0:Object.assign(new Image(),{src:"tex/icon/menu/hugeArrow.png"}),
    alpha:25,
  },
};

const _title={
  base:{
    x:166,
    y:28,

    width:162,
    height:96,

    img0:Object.assign(new Image(),{src:"tex/ui/menu/title/text.png"}),
    alpha:100,
  }, teb:{
    x:64,
    y:28,
    
    width:96,
    height:96,

    img0:Object.assign(new Image(),{src:"tex/ui/menu/title/teb.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/menu/title/tebHover.png"}),
  },

  color0:"rgb(255,255,255)",
};

const _account={
  name:{
    x:52,
    y:14,

    value0:"Witaj Graczu!",
    size:16,
  }, profile:{
    x:320,
    y:4,

    width:20,
    height:20,

    img0:Object.assign(new Image(),{src:"tex/icon/menu/profile0.png"}),
    img1:Object.assign(new Image(),{src:"tex/icon/menu/profile1.png"}),
    alpha:100,
  }, background:{
    x:318,
    y:2,

    width:24,
    height:24,
  }, color0:"rgb(255,255,255)",
}

const _footer={
  version:{
    x:52,
    y:354,

    value0:"Wersja: Beta (B)1.001",
    size:16,
  }, github:{
    x:318,
    y:334,

    width:24,
    height:24,

    img0:Object.assign(new Image(),{src:"tex/icon/menu/github.png"}),
    alpha:100,
  }, pastebin:{
    x:292,
    y:334,

    width:24,
    height:24,

    img0:Object.assign(new Image(),{src:"tex/icon/menu/pastebin.png"}),
    alpha:100,
  }, next:{
    x:318,
    y:338-28,

    width:24,
    height:18,

    img0:Object.assign(new Image(),{src:"tex/icon/menu/next.png"}),
    alpha:100,
  }, color0:"rgb(255,255,255)",
};

const _description={
  title:{
    x:86,
    y:174,

    value0:"Poradnik",
    value1:"Gratulacje",
    value2:"Walka",
    size:28,
  }, text:{
    x:64,
    y:188,

    value0:"Sterowanie\n"+
           "Poruszanie: [A] [D] | [<] [>]\n"+
           "Skok: [W] | [^] | [Spacja]; Interakcja z obiektami: [E]\n"+
           "Strzelanie: [Q]; Zamiana amunicji: [R]\n\n"+
           "Opis\n"+
           "Twoim celem jest dostać się na górę poziomu i zjawić się w\n"+
           "pokoju nauczyciela. Po drodze musisz omijać wiele przeszkód\n"+
           "na szkolnych korytarzach. Przeskakuj dolne kolce. Zwracaj\n"+
           "uwagę na kolce górne. Strzelaj w szafki by je zamknąć.\n"+
           "Otwieraj TEBoxy by zdobyć klucze do kolejnych pięter\n"+
           "i inne przedmioty. Życzymy szczęścia!",
    value1:"Notka\n"+
           "Udało się Tobie przejść całą grę. Mamy nadzieję że zabawa\n"+
           "była udana i przy okazji nauczyciele występujący w grze nie\n"+
           "będą straszni już w realu >_o",
    value0Teacher:"Tomasz Staniszewski\n"+
                  "Nauczyciel z pasją, zwany często Panem Gołębiem. Twórca\n"+
                  "Twojej platformówki. Dzięki niemu poznasz wszystkie tajniki\n"+
                  "aplikacji webowych, desktopowych i mobilnych.\n\n"+
                  "Opis\n"+
                  "Użyj chmurki do latania. Unikaj ataków nauczyciela, o ile nie\n"+
                  "zapominaj, że TEBulinek jest po Twojej stronie. Inne rodzaje\n"+
                  "amunicji nadadzą się wiele lepiej do walki. Życzymy szczęścia!",
    value1Teacher:"Radosław Sass\n"+
                  "Zapalony fotograf i mistrz zdjęć dużego formatu. Z nim nie\n"+
                  "będziesz się nudził/a szczególnie jeśli planujesz zostać\n"+
                  "Technikiem Fotografii i Multimediów. Zajęcia praktyczne\n"+
                  "pełne ciekawych rozwiązań, a usposobienie Pana Radka na\n"+
                  "szóstkę z koroną!\n\n"+
                  "Opis\n"+
                  "Użyj chmurki do latania. Unikaj ataków nauczyciela, o ile nie\n"+
                  "zapominaj, że TEBulinek jest po Twojej stronie. Inne rodzaje\n"+
                  "amunicji nadadzą się wiele lepiej do walki.\n"+
                  "Życzymy szczęścia!",
    value2Teacher:"Paweł Kępa\n"+
                  "Mężczyzna pracujący, żadnej pracy się nie boi! Fotograf i\n"+
                  "Informatyk w jednym, a swoje umiejętności z powodzeniem\n"+
                  "łączy a kierunkach zawodowych. Nauczy Cię do egzaminu i\n"+
                  "sprzeda przydatną wiedzę życiową!\n\n"+
                  "Opis\n"+
                  "Użyj chmurki do latania. Unikaj ataków nauczyciela, o ile nie\n"+
                  "zapominaj, że TEBulinek jest po Twojej stronie. Inne rodzaje\n"+
                  "amunicji nadadzą się wiele lepiej do walki. Życzymy szczęścia!",
    value3Teacher:"Anna Skarbek Chmielewska\n"+
                  "Ma rękę do biznesów. Z tym nauczycielem będzie Ci po drodze\n"+
                  "jeśli chcesz nauczyć się Biznesu i Zarządzania. Podstawy\n"+
                  "Przedsiębiorczości nie są Jej obce, a wycieczki do Urzędu\n"+
                  "Skarbowego murowane.\n\n"+
                  "Opis\n"+
                  "Użyj chmurki do latania. Unikaj ataków nauczyciela, o ile nie\n"+
                  "zapominaj, że TEBulinek jest po Twojej stronie. Inne rodzaje\n"+
                  "amunicji nadadzą się wiele lepiej do walki. Życzymy szczęścia!",
    value4Teacher:"Marta Milde\n"+
                  "Kobieta tysiąca zawodów i koordynator chaosu, nie ma takich\n"+
                  "zadań, z którymi by sobie nie poradziła! Możesz Ją spotkać\n"+
                  "na zajęciach z Cyfrowej Obróbki Obrazu, Projektów, Plastyki\n"+
                  "czy BiZu. Za chwilę będzie wychodzić nawet z lodówki!\n\n"+
                  "Opis\n"+
                  "Użyj chmurki do latania. Unikaj ataków nauczyciela, o ile nie\n"+
                  "zapominaj, że TEBulinek jest po Twojej stronie. Inne rodzaje\n"+
                  "amunicji nadadzą się wiele lepiej do walki. Życzymy szczęścia!",
    value5Teacher:"Anna Świtoń\n"+
                  "<< Kiedy głowa ciąży od problemów, a serduszko łamie się od\n"+
                  "zmartwień, lekiem na problemy jest Pani Pedagog, która\n"+
                  "zawsze znajdzie dla Ciebie czas. >>\n\n"+
                  "Opis\n"+
                  "Użyj chmurki do latania. Unikaj ataków nauczyciela, o ile nie\n"+
                  "zapominaj, że TEBulinek jest po Twojej stronie. Inne rodzaje\n"+
                  "amunicji nadadzą się wiele lepiej do walki. Życzymy szczęścia!",
    value6Teacher:"Piotr Łojek\n"+
                  "Zwany postrachem tej szkoły. Mistrz poligrafii i nauczyciel w\n"+
                  "jednym. Jeśli myślisz serio o przedmiotach zawodowych, może\n"+
                  "Cię potraktować ulgowo… pod warunkiem, że go słuchasz!\n\n"+
                  "Opis\n"+
                  "Użyj chmurki do latania. Unikaj ataków nauczyciela, o ile nie\n"+
                  "zapominaj, że TEBulinek jest po Twojej stronie. Inne rodzaje\n"+
                  "amunicji nadadzą się wiele lepiej do walki. Życzymy szczęścia!",
    value7Teacher:"Iwo Musiałowski\n"+
                  "To jest dopiero #nauczycielzpasją! Nie stroni od historycznych\n"+
                  "przebieranek i inscenizacji, a jego lekcje historii poparte są\n"+
                  "żywym przykładem. Kolekcjoner uzbrojenia i mundrów.\n\n"+
                  "Opis\n"+
                  "Użyj chmurki do latania. Unikaj ataków nauczyciela, o ile nie\n"+
                  "zapominaj, że TEBulinek jest po Twojej stronie. Inne rodzaje\n"+
                  "amunicji nadadzą się wiele lepiej do walki. Życzymy szczęścia!",
    value8Teacher:"Wojciech Złotowski\n"+
                  "Bezpieczeństwo i higiena to przedmiot, który uczy nasz\n"+
                  "Dyrektor. Pan Wojtek zarządza Liceum, a jednocześnie\n"+
                  "przekazuje praktyczną wiedzę.\n\n"+
                  "Opis\n"+
                  "Użyj chmurki do latania. Unikaj ataków nauczyciela, o ile nie\n"+
                  "zapominaj, że TEBulinek jest po Twojej stronie. Inne rodzaje\n"+
                  "amunicji nadadzą się wiele lepiej do walki. Życzymy szczęścia!",
    value9Teacher:"Anna Niklas\n"+
                  "Groźna Pani Dyrektor! A skąd! Wie kiedy pogrozić palcem, mimo\n"+
                  "to uwielbia swoją młodzież i stara się robić wszystko by\n"+
                  "spełnić ich marzenia. Pod warunkiem, że akurat nie dostałeś/aś\n"+
                  "drugiej nagany.\n\n"+
                  "Opis\n"+
                  "Użyj chmurki do latania. Unikaj ataków nauczyciela, o ile nie\n"+
                  "zapominaj, że TEBulinek jest po Twojej stronie. Inne rodzaje\n"+
                  "amunicji nadadzą się wiele lepiej do walki. Życzymy szczęścia!",
    value10Teacher:"Iwona Bury Sierzchuła\n"+
                   "Główna Pani Dyrektor TEB TORUŃ. Nadzoruje aby wszystko\n"+
                   "działało jak należy. To wielki finał!\n\n"+
                   "Opis\n"+
                   "Użyj chmurki do latania. Unikaj ataków nauczyciela, o ile nie\n"+
                   "zapominaj, że TEBulinek jest po Twojej stronie. Inne rodzaje\n"+
                   "amunicji nadadzą się wiele lepiej do walki. Życzymy szczęścia!",
    size:13,
  }, icon:{
    x:64,
    y:158,

    width:16,
    height:16,

    img0:Object.assign(new Image(),{src:"tex/icon/decoration/general0.png"}),
    img1:Object.assign(new Image(),{src:"tex/icon/decoration/win.png"}),
    img2:Object.assign(new Image(),{src:"tex/icon/decoration/fight.png"}),
  },
};

const _ui={
  menu:{
    main:{
      x:48,
      y:-2,

      width:296,
      height:364,

	    alpha:75,
    }, left:{
      x:44,
      y:-2,

      width:4,
      height:364,
    }, right:{
      x:344,
      y:-2,

      width:4,
      height:364,
    },
  }, game:{
    heart:{
      main:{
        x:604,
        y:6,

        width:32,
        height:32,
      }, background:{
        x:602,
        y:4,

        width:36,
        height:36,
      }, icon:{
        x:613,
        y:10,

        width:14,
        height:14,
        
        timer:0,

        img0:Object.assign(new Image(),{src:"tex/ui/level/0.png"}),
        img1:Object.assign(new Image(),{src:"tex/ui/level/heart/player/1.png"}),
        img2:Object.assign(new Image(),{src:"tex/ui/level/heart/player/2.png"}),
        img3:Object.assign(new Image(),{src:"tex/ui/level/heart/player/3.png"}),
        img4:Object.assign(new Image(),{src:"tex/ui/level/heart/player/4.png"}),
        img5:Object.assign(new Image(),{src:"tex/ui/level/heart/player/5.png"}),
      }, text:{
        x:613,
        y:36,

        value0:"",
        size:12,
      },
    }, ammo:{
      main:{
        x:566,
        y:6,

        width:32,
        height:32,
      }, background:{
        x:564,
        y:4,

        width:36,
        height:36,
      }, icon:{
        x:575,
        y:10,

        width:14,
        height:14,
        
        timer:0,

        img0:Object.assign(new Image(),{src:"tex/ui/level/0.png"}),
        img1Normal:Object.assign(new Image(),{src:"tex/ui/level/ammo/normal/1.png"}),
        img2Normal:Object.assign(new Image(),{src:"tex/ui/level/ammo/normal/2.png"}),
        img3Normal:Object.assign(new Image(),{src:"tex/ui/level/ammo/normal/3.png"}),
        img4Normal:Object.assign(new Image(),{src:"tex/ui/level/ammo/normal/4.png"}),
        img5Normal:Object.assign(new Image(),{src:"tex/ui/level/ammo/normal/5.png"}),
        img1Strong:Object.assign(new Image(),{src:"tex/ui/level/ammo/strong/1.png"}),
        img2Strong:Object.assign(new Image(),{src:"tex/ui/level/ammo/strong/2.png"}),
        img3Strong:Object.assign(new Image(),{src:"tex/ui/level/ammo/strong/3.png"}),
        img4Strong:Object.assign(new Image(),{src:"tex/ui/level/ammo/strong/4.png"}),
        img5Strong:Object.assign(new Image(),{src:"tex/ui/level/ammo/strong/5.png"}),
        img1Fast:Object.assign(new Image(),{src:"tex/ui/level/ammo/fast/1.png"}),
        img2Fast:Object.assign(new Image(),{src:"tex/ui/level/ammo/fast/2.png"}),
        img3Fast:Object.assign(new Image(),{src:"tex/ui/level/ammo/fast/3.png"}),
        img4Fast:Object.assign(new Image(),{src:"tex/ui/level/ammo/fast/4.png"}),
        img5Fast:Object.assign(new Image(),{src:"tex/ui/level/ammo/fast/5.png"}),
      }, text:{
        x:577,
        y:35,

        value0:"",
        size:16,
      },
    }, key:{
      main:{
        x:604,
        y:44,

        width:32,
        height:32,
      }, background:{
        x:602,
        y:42,

        width:36,
        height:36,
      }, icon:{
        x:612,
        y:47,

        width:16,
        height:16,
        
        timer:0,

        img0:Object.assign(new Image(),{src:"tex/ui/level/key/empty.png"}),
        img1:Object.assign(new Image(),{src:"tex/ui/level/key/base.png"}),
      }, text:{
        x:610,
        y:73,

        value0:"Klucz",
        size:12,
      },
    }, pause:{
      main:{
        x:6,
        y:6,

        width:32,
        height:32,
      }, background:{
        x:4,
        y:4,

        width:36,
        height:36,
      }, icon:{
        x:16,
        y:26,

        width:12,
        line:1,
        timer:0,

        value0:"ıı",
        size:34,
      }, text:{
        x:10,
        y:36,

        value0:"Pauza",
        size:12,
      },
    }, info:{
      main:{
        x:44,
        y:6,

        width:92,
        height:32,
      }, background:{
        x:42,
        y:4,

        width:96,
        height:36,
      }, icon:{
        x:50,
        y:8,

        width:20,
        height:20,
        
        timer:0,

        img0:Object.assign(new Image(),{src:"tex/icon/general/iconL.png"}),
      }, text:{
        x:48,
        y:36,

        value0:"Status",
        size:12,
      }, score:{
        x:78,
        y:16,

        value0:"",
        size:13,
      }, level:{
        x:78,
        y:26,

        value0:"",
        size:13,
      }, time:{
        x:78,
        y:36,

        value0:"Czas: 0s",
        size:13,
      },
    }, notification:{
      main:{
        x:-132,
        y:44,

        width:130,
        height:32,
      }, background:{
        x:-134,
        y:42,

        width:134,
        height:36,
      }, icon:{
        x:-120,
        y:64,

        width:12,
        line:1,
        timer:0,

        value0:"!",
        size:28,
      }, text:{
        x:-124,
        y:73,

        value0:"Info",
        size:12,
      }, info:{
        x:-100,
        y:56,

        value0:"",
        size:12,
      },
    }, teacher:{
      main:{
        x:604,
        y:44,

        width:32,
        height:32,
      }, background:{
        x:602,
        y:42,

        width:36,
        height:36,
      }, icon:{
        x:613,
        y:47,

        width:14,
        height:14,

        timer:0,

        img0:Object.assign(new Image(),{src:"tex/ui/level/0.png"}),
        img1:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/1.png"}),
        img2:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/2.png"}),
        img3:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/3.png"}),
        img4:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/4.png"}),
        img5:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/5.png"}),
      }, text:{
        x:610,
        y:73,

        value0:"",
        size:12,
      },
    },
  },

  time:0,
  elapsed:0,

  show:true,
  message:false,

  color0:"rgb(0,0,65)",
  color1:"rgb(255,255,255)",

  update:function(){},
};

const _button={
  start:{
    base:{
      x:64,
      y:150,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/start.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/startOn.png"}),
    }, text:{
      x:112,
      y:168,

      width:56,
      line:2,

      value0:"Rozpocznij\nNową Grę",
      size:16,
	    alpha:100,
    },
  }, level:{
    base:{
      x:64,
      y:214,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/level.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/levelOn.png"}),
    }, text:{
      x:112,
      y:232,

      width:42,
      line:2,

      value0:"Wybierz\nPoziom",
      size:16,
	    alpha:100,
    },

    on:false,
    animation:false,
    lateanimation:false,
  }, menu:{
    base:{
      x:64,
      y:214,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/menu.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/menuOn.png"}),
    }, text:{
      x:112,
      y:232,

      width:46,
      line:2,

      value0:"Przejdź\nDo Menu",
      size:16,
	    alpha:100,
    },
  }, custom:{
    base:{
      x:64,
      y:278,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/custom.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/customOn.png"}),
    }, text:{
      x:112,
      y:296,

      width:42,
      line:2,

      value0:"Wybierz\nPostać",
      size:16,
	    alpha:100,
    },

    on:false,
    animation:false,
    lateanimation:false,
  }, restart:{
    base:{
      x:64,
      y:278,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/restart.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/restartOn.png"}),
    }, text:{
      x:112,
      y:296,

      width:42,
      line:2,

      value0:"Powtórz\nPoziom",
      size:16,
	    alpha:100,
    },
  }, setting:{
    base:{
      x:286,
      y:150,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/setting.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/settingOn.png"}),
    }, text:{
      x:238,
      y:178,

      width:42,
      line:1,

      value0:"Opcje",
      size:24,
	    alpha:100,
    },

    on:false,
    animation:false,
    lateanimation:false,
  }, about:{
    base:{
      x:286,
      y:214,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/about.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/aboutOn.png"}),
    }, text:{
      x:226,
      y:232,

      width:54,
      line:2,

      value0:" Na Temat\nRozgrywki",
      size:16,
	    alpha:100,
    },
	
    on:false,
    animation:false,
    lateanimation:false,
  }, version:{
    base:{
      x:286,
      y:278,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/version.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/versionOn.png"}),
    }, text:{
      x:230,
      y:296,

      width:58,
      line:2,

      value0:"Na Temat\n Twórców",
      size:16,
	    alpha:100,
    },
  },

  color0:"rgb(255,255,255)",
};

const _clipboard={
  base:{
    x:800,
    y:60,

    width:160,
    height:240,

    img0:Object.assign(new Image(),{src:"tex/ui/clipboard/base.png"}),
  }, back:{
    x:924,
    y:64,

    width:32,
    height:32,
	  rotation:180,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/clipboard/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/clipboard/backHover.png"}),
  }, icon:{
    x:820,
    y:104,

    width:16,
    height:16,

    img0:Object.assign(new Image(),{src:"tex/icon/decoration/setting.png"}),
    img1:Object.assign(new Image(),{src:"tex/icon/decoration/info.png"}),
    img2:Object.assign(new Image(),{src:"tex/icon/decoration/general1.png"}),
  }, title:{
    x:844,
    y:120,

    value0:"Opcje",
    value1:"Opis",
    value2:"Twórcy",
    size:28,
  }, text:{
    x:824,
    y:138,

    value0:"Gra TEBOWY DZIEŃ\nzostała stworzona\nz myślą o naszych\nuczniach. Mamy\nnadzieję, że sprawi\n"+
           "ona wiele uśmiechu\nna Waszych twarzach\ni radości z grania!\n\nOd TEBowiczów\nDla TEBowiczów <3",
    value1:"Inicjator Projektu,\nPomysłodawca:\n> tom2edu\nProgramista, Twórca\nWiększości Tekstur:\n> Ciupaga\n"+
           "Twórca Dźwięków, Alpha\ni Beta Tester:\n> Ucheesename\nTwórca Muzyki:\n> M4RCIN-MJJ",
    size:14,
  }, setting:{
    sfx:{
      base:{
        x:824,
        y:138,

        width:16,
        height:16,
      }, text:{
        x:842,
        y:151,

        value0:"Dźwięk",
        size:16,
      },
    }, music:{
      base:{
        x:824,
        y:168,

        width:16,
        height:16,
      }, text:{
        x:842,
        y:181,

        value0:"Muzyka",
        size:16,
      },
    },

    img0:Object.assign(new Image(),{src:"tex/ui/clipboard/unChecked.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/clipboard/checked.png"}),
  },

  on:false,
  close:false,
  change:false,

  update:function(){},
};

const _blueprint={
  base:{
    x:800,
    y:60,

    width:160,
    height:240,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/0.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/1.png"}),
  }, skin:{
    x:846,
    y:132,

    width:70,
    height:120,

    img0:Object.assign(new Image(),{src:"tex/obj/player/base/boy.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/player/base/girl.png"}),
  }, back:{
    x:924,
    y:66,

    width:28,
    height:28,
	  rotation:180,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/backHover.png"}),
  }, left:{
    x:808,
    y:266,

    width:28,
    height:28,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/backHover.png"}),
  }, right:{
    x:924,
    y:266,

    width:28,
    height:28,
	  rotation:180,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/backHover.png"}),
  }, title:{
    x:842,
    y:120,

    value0:"Poziomy",
    value1:"Skórka",
    size:28,
  }, text:{
    x:868,
    y:284,

    value0:"1/2",
    size:20,
  }, icon:{
    x:820,
    y:104,

    width:16,
    height:16,

    img0:Object.assign(new Image(),{src:"tex/icon/decoration/level.png"}),
    img1:Object.assign(new Image(),{src:"tex/icon/decoration/skin.png"}),
  }, level:{
    button1:{
      x:820,
      y:152,

      width:58,
      line:1,

      value0:"Poziom 01",
      size:18,
      alpha:100,
    }, button2:{
      x:820,
      y:180,

      width:58,
      line:1,

      value0:"Poziom 02",
      size:18,
      alpha:100,
    }, button3:{
      x:820,
      y:208,

      width:58,
      line:1,

      value0:"Poziom 03",
      size:18,
      alpha:100,
    }, button4:{
      x:820,
      y:236,

      width:58,
      line:1,
      
      value0:"Poziom 04",
      size:18,
      alpha:100,
    }, button5:{
      x:820,
      y:264,

      width:58,
      line:1,
      
      value0:"Poziom 05",
      size:18,
      alpha:100,
    }, button6:{
      x:888,
      y:152,

      width:58,
      line:1,
      
      value0:"Poziom 06",
      size:18,
      alpha:100,
    }, button7:{
      x:888,
      y:180,

      width:58,
      line:1,
      
      value0:"Poziom 07",
      size:18,
      alpha:100,
    }, button8:{
      x:888,
      y:208,

      width:58,
      line:1,
      
      value0:"Poziom 08",
      size:18,
      alpha:100,
    }, buttonF:{
      x:902,
      y:264,

      width:28,
      line:1,
      
      value0:"Finał",
      size:18,
      alpha:100,
    },
  },
  
  on:false,
  close:false,
  change:false,

  update:function(){},
};

const _player={
  base:{
    x:0,
    y:0,

    width:56,
    height:96,

    img0:Object.assign(new Image(),{src:"tex/obj/player/base/boy.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/player/base/girl.png"}),
    img0Left:Object.assign(new Image(),{src:"tex/obj/player/base/boyLeft.png"}),
    img1Left:Object.assign(new Image(),{src:"tex/obj/player/base/girlLeft.png"}),
    alpha:100,
  }, gun:{
    x:0,
    y:0,

    width:56,
    height:40,

    timer:0,
    type:0,
    ammo1:5,
    ammo2:5,

    img0BoyNormal:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/normal/0.png"}),
    img1BoyNormal:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/normal/1.png"}),
    img2BoyNormal:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/normal/2.png"}),
    img0BoyNormalLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/normal/0Left.png"}),
    img1BoyNormalLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/normal/1Left.png"}),
    img2BoyNormalLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/normal/2Left.png"}),
    img0BoyStrong:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/strong/0.png"}),
    img1BoyStrong:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/strong/1.png"}),
    img2BoyStrong:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/strong/2.png"}),
    img0BoyStrongLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/strong/0Left.png"}),
    img1BoyStrongLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/strong/1Left.png"}),
    img2BoyStrongLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/strong/2Left.png"}),
    img0BoyFast:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/fast/0.png"}),
    img1BoyFast:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/fast/1.png"}),
    img2BoyFast:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/fast/2.png"}),
    img0BoyFastLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/fast/0Left.png"}),
    img1BoyFastLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/fast/1Left.png"}),
    img2BoyFastLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/fast/2Left.png"}),
    img0GirlNormal:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/normal/0.png"}),
    img1GirlNormal:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/normal/1.png"}),
    img2GirlNormal:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/normal/2.png"}),
    img0GirlNormalLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/normal/0Left.png"}),
    img1GirlNormalLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/normal/1Left.png"}),
    img2GirlNormalLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/normal/2Left.png"}),
    img0GirlStrong:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/strong/0.png"}),
    img1GirlStrong:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/strong/1.png"}),
    img2GirlStrong:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/strong/2.png"}),
    img0GirlStrongLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/strong/0Left.png"}),
    img1GirlStrongLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/strong/1Left.png"}),
    img2GirlStrongLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/strong/2Left.png"}),
    img0GirlFast:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/fast/0.png"}),
    img1GirlFast:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/fast/1.png"}),
    img2GirlFast:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/fast/2.png"}),
    img0GirlFastLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/fast/0Left.png"}),
    img1GirlFastLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/fast/1Left.png"}),
    img2GirlFastLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/fast/2Left.png"}),
  }, ammo:{
    x:0,
    y:0,

    width:10,
    height:10,

    type:0,

    unused:true,
    left:false,
  
    img0:Object.assign(new Image(),{src:"tex/obj/player/ammo/normal.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/player/ammo/strong.png"}),
    img2:Object.assign(new Image(),{src:"tex/obj/player/ammo/fast.png"}),
  }, cloud:{
    x:0,
    y:0,

    width:64,
    height:48,

    on:false,

    img0:Object.assign(new Image(),{src:"tex/obj/player/cloud/normal/left.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/player/cloud/normal/right.png"}),
    img0Lose:Object.assign(new Image(),{src:"tex/obj/player/cloud/defeat/left.png"}),
    img1Lose:Object.assign(new Image(),{src:"tex/obj/player/cloud/defeat/right.png"}),
  }, action:{
    x:0,
    y:0,

    width:20,
    height:16,

    current:-1,

    img0:Object.assign(new Image(),{src:"tex/icon/action/key.png"}),
    img1:Object.assign(new Image(),{src:"tex/icon/action/use.png"}),
  }, collisionTop:{
    x:0,
    y:0,

    width:36,
    height:8,
  }, collisionBottom:{
    x:0,
    y:0,

    width:42,
    height:8,
  }, collisionLeft:{
    x:0,
    y:0,

    width:8,
    height:72,
  }, collisionRight:{
    x:0,
    y:0,

    width:8,
    height:72,
  },

  vx:0,
  vy:0,
  ivy:-12,
  gravity:0.5,
  upTimer:0,
  invisible:0,
  skin:0,
  hp:5,

  touchTebox:false,
  touchDoor:false,
  touchLock:false,
  touched:false,
  active:false,
  grounded:false,
  jumped:false,
  fly:false,
  left:false,
  damage:false,
  heal:false,

  render:function(){},
  update:function(){},
  lateUpdate:function(){},
};

const _platform={
  array:[],

  lenght:0,
  currentLenght:0,
  load:0,
  currentLoad:0,
  level:0,
  lastLevel:0,
  random:0,

  move:false,
  up:false,

  img0:Object.assign(new Image(),{src:"tex/obj/map/general/platform.png"}),

  update:function(){},
};

const _corner={
  array:[],

  lenght:-1,
  currentLenght:0,
  useLenght:-1,
  timer:0,

  img0:Object.assign(new Image(),{src:"tex/obj/map/general/corner.png"}),
  img1:Object.assign(new Image(),{src:"tex/obj/map/general/lock.png"}),
  color0:"rgb(255,255,255)",

  update:function(){},
};

const _foreground={
  array:[],

  lenght:-1,
  currentLenght:0,

  update:function(){},
}

const _spike={
  array:[],

  lenght:-1,
  currentLenght:0,
  current:0,

  img0:Object.assign(new Image(),{src:"tex/obj/map/general/spike.png"}),

  update:function(){},
};

const _decoration={
  array:[],

  lenght:-1,
  currentLenght:1,
  current:0,

  color0:"rgb(140,140,196)",
  img0Door:Object.assign(new Image(),{src:"tex/obj/map/door/orange.png"}),
  img1Door:Object.assign(new Image(),{src:"tex/obj/map/door/green.png"}),
  img2Door:Object.assign(new Image(),{src:"tex/obj/map/door/purple.png"}),
  img3Door:Object.assign(new Image(),{src:"tex/obj/map/door/cyan.png"}),
  img4Door:Object.assign(new Image(),{src:"tex/obj/map/door/red.png"}),
  img0Board:Object.assign(new Image(),{src:"tex/obj/map/board/orange.png"}),
  img1Board:Object.assign(new Image(),{src:"tex/obj/map/board/green.png"}),
  img2Board:Object.assign(new Image(),{src:"tex/obj/map/board/purple.png"}),
  img3Board:Object.assign(new Image(),{src:"tex/obj/map/board/cyan.png"}),
  img0Light:Object.assign(new Image(),{src:"tex/obj/map/general/light.png"}),
  img0Locker:Object.assign(new Image(),{src:"tex/obj/map/locker/empty.png"}),
  img1Locker:Object.assign(new Image(),{src:"tex/obj/map/locker/decoration/orange.png"}),
  img2Locker:Object.assign(new Image(),{src:"tex/obj/map/locker/decoration/green.png"}),
  img3Locker:Object.assign(new Image(),{src:"tex/obj/map/locker/decoration/purple.png"}),
  img4Locker:Object.assign(new Image(),{src:"tex/obj/map/locker/decoration/cyan.png"}),
  img0Close:Object.assign(new Image(),{src:"tex/obj/map/locker/obstacle/orange.png"}),
  img1Close:Object.assign(new Image(),{src:"tex/obj/map/locker/obstacle/green.png"}),
  img2Close:Object.assign(new Image(),{src:"tex/obj/map/locker/obstacle/purple.png"}),
  img3Close:Object.assign(new Image(),{src:"tex/obj/map/locker/obstacle/cyan.png"}),

  update:function(){},
};

const _tebox={
  array:[],

  lenght:-1,
  currentLenght:1,
  useLenght:-1,
  first:-1,
  second:-1,
  third:-1,

  img0:Object.assign(new Image(),{src:"tex/obj/map/tebox/base/unActivated.png"}),
  img1:Object.assign(new Image(),{src:"tex/obj/map/tebox/base/activated.png"}),

  update:function(){},
}

const _loot={
  x:0,
  y:0,
  iy:0,

  width:21,
  height:21,

  current:-1,
  timer:0,

  img0:Object.assign(new Image(),{src:"tex/obj/map/tebox/loot/key.png"}),
  img1:Object.assign(new Image(),{src:"tex/obj/map/tebox/loot/strong.png"}),
  img2:Object.assign(new Image(),{src:"tex/obj/map/tebox/loot/fast.png"}),
  img3:Object.assign(new Image(),{src:"tex/obj/map/tebox/loot/heart.png"}),
  alpha:100,
}

const _teacher={
  base:{
    x:0,
    y:0,

    width:48,
    height:108,

    img0:Object.assign(new Image(),{src:"tex/obj/teacher/base/TS.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/teacher/base/RS.png"}),
    img2:Object.assign(new Image(),{src:"tex/obj/teacher/base/PK.png"}),
    img3:Object.assign(new Image(),{src:"tex/obj/teacher/base/ASC.png"}),
    img4:Object.assign(new Image(),{src:"tex/obj/teacher/base/MM.png"}),
    img5:Object.assign(new Image(),{src:"tex/obj/teacher/base/AS.png"}),
    img6:Object.assign(new Image(),{src:"tex/obj/teacher/base/PL.png"}),
    img7:Object.assign(new Image(),{src:"tex/obj/teacher/base/IM.png"}),
    img8:Object.assign(new Image(),{src:"tex/obj/teacher/base/WZ.png"}),
    img9:Object.assign(new Image(),{src:"tex/obj/teacher/base/AN.png"}),
    img10:Object.assign(new Image(),{src:"tex/obj/teacher/base/ISB.png"}),
    img0Left:Object.assign(new Image(),{src:"tex/obj/teacher/left/TS.png"}),
    img1Left:Object.assign(new Image(),{src:"tex/obj/teacher/left/RS.png"}),
    img2Left:Object.assign(new Image(),{src:"tex/obj/teacher/left/PK.png"}),
    img3Left:Object.assign(new Image(),{src:"tex/obj/teacher/left/ASC.png"}),
    img4Left:Object.assign(new Image(),{src:"tex/obj/teacher/left/MM.png"}),
    img5Left:Object.assign(new Image(),{src:"tex/obj/teacher/left/AS.png"}),
    img6Left:Object.assign(new Image(),{src:"tex/obj/teacher/left/PL.png"}),
    img7Left:Object.assign(new Image(),{src:"tex/obj/teacher/left/IM.png"}),
    img8Left:Object.assign(new Image(),{src:"tex/obj/teacher/left/WZ.png"}),
    img9Left:Object.assign(new Image(),{src:"tex/obj/teacher/left/AN.png"}),
    img10Left:Object.assign(new Image(),{src:"tex/obj/teacher/left/ISB.png"}),
  }, cloud:{
    x:0,
    y:0,

    width:64,
    height:48,

    img0:Object.assign(new Image(),{src:"tex/obj/teacher/cloud/normal/left.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/teacher/cloud/normal/right.png"}),
    img0Final:Object.assign(new Image(),{src:"tex/obj/teacher/cloud/final/left.png"}),
    img1Final:Object.assign(new Image(),{src:"tex/obj/teacher/cloud/final/right.png"}),
    img0Lose:Object.assign(new Image(),{src:"tex/obj/teacher/cloud/defeat/left.png"}),
    img1Lose:Object.assign(new Image(),{src:"tex/obj/teacher/cloud/defeat/right.png"}),
  },

  invisible:0,
  random:0,
  round:0,
  hp:30,

  attack:false,
  left:true,

  render:function(){},
  update:function(){},
};

const _attack={
  tebulinek:{
    x:0,
    y:0,

    width:68,
    height:48,
    rotation:0,

    unused:true,
    left:true,
    touch:false,

    img0:Object.assign(new Image(),{src:"tex/obj/teacher/attack/tebulinek.png"}),
    alpha:100,
  }, object0:{
    x:0,
    y:0,

    width:48,
    height:48,
    rotation:0,

    current:0,

    unused:true,
    left:true,
    touch:false,

    img0Computer:Object.assign(new Image(),{src:"tex/obj/teacher/attack/computer.png"}),
    img0Keyboard:Object.assign(new Image(),{src:"tex/obj/teacher/attack/keyboard.png"}),
    alpha:100,
  }, object1:{
    x:0,
    y:0,

    width:48,
    height:48,
    rotation:0,

    current:0,

    unused:true,
    left:true,
    touch:false,

    img0Coffe:Object.assign(new Image(),{src:"tex/obj/teacher/attack/coffe.png"}),
    img0Pigeon:Object.assign(new Image(),{src:"tex/obj/teacher/attack/pigeon.png"}),
    alpha:100,
  },

  update:function(){},
  handle:function(){},
};
