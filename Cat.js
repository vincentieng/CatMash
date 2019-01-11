
new Vue({
  el: '#display',
  data: {

    gridData: [
        {
          "url": "http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg",
          "id": "MTgwODA3MA",
          "counter": 0
        },
        {
          "url": "http://24.media.tumblr.com/tumblr_m29a9d62C81r2rj8po1_500.jpg",
          "id": "tt",
          "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m4bgd9OXmw1qioo2oo1_500.jpg",
            "id": "bmp",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_lzxok2e2kX1qgjltdo1_1280.jpg",
            "id": "c8a",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m33r7lpy361qzi9p6o1_500.jpg",
            "id": "3kj",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m2p6dxhxul1qdvz31o1_500.jpg",
            "id": "9pu",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m1ku66jPWV1qze0hyo1_400.jpg",
            "id": "aca",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m4pwa9EXE41r6jd7fo1_500.jpg",
            "id": "ebk",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m6x62cjEz31qk4s2co1_1280.jpg",
            "id": "MTg0MTYyOQ",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lyj0y5tg4L1qbwemzo1_1280.jpg",
            "id": "6mo",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m44w9nI50Y1qzyqubo1_500.jpg",
            "id": "4m5",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_lzqv50jiCj1qzex9io1_1280.jpg",
            "id": "5v3",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lrlhw46Re81r3q92to1_500.jpg",
            "id": "52k",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m3u1mfIZwv1rtqthio1_500.jpg",
            "id": "47s",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/Jjkybd3nS98hfqy8vevnj6R9_500.jpg",
            "id": "77s",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m4j6icIQdF1qzex9io1_1280.jpg",
            "id": "8g6",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/5gI3dw08Qncg15r8LBMo8NMZo1_400.jpg",
            "id": "6cu",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_lg1hnknXjm1qfyzelo1_1280.jpg",
            "id": "71f",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_kstpz9IxDK1qzefipo1_250.gif",
            "id": "2pp",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m4s05iYQmN1r6jd7fo1_500.gif",
            "id": "e6d",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m2gyauUXoh1qbe5pxo1_500.jpg",
            "id": "99t",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_ltqi8k2OcP1qiyvcfo1_250.jpg",
            "id": "510",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m20iu31nBD1qz4dkmo1_500.jpg",
            "id": "9u3",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m11rjz2nrk1qznh2ao1_1280.jpg",
            "id": "1dp",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_luvlehQz7n1qgnva2o1_500.jpg",
            "id": "b8p",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m2wvwmHrX61r73wdao1_250.gif",
            "id": "7q3",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m0ljiiZ08O1r7plk4o1_500.jpg",
            "id": "8v5",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_lw9hu39q621qdvbl3o1_1280.jpg",
            "id": "37p",
            "counter": 0
        },
        {
            "url": "http://29.media.tumblr.com/tumblr_m1k4ze7hja1r6b7kmo1_500.jpg",
            "id": "2n0",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_lnvz6gLbjS1qji0t2o1_500.jpg",
            "id": "ckc",
            "counter": 0
        },
        {
            "url": "http://27.media.tumblr.com/tumblr_lh6ywkF22D1qfyzelo1_1280.jpg",
            "id": "27m",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m4rorb74ne1qkk65ko1_1280.jpg",
            "id": "di6",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m44tfdCUcz1qzgoy8o1_1280.jpg",
            "id": "afr",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_luu4l5AmkP1qzxrnuo1_1280.jpg",
            "id": "65s",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m1mls6SBfO1qze0hyo1_1280.jpg",
            "id": "abs",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_mcg6abzbmT1qejbiro1_500.jpg",
            "id": "MjAxMTk1Mw",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_lqhtuoG1by1qbhms5o1_500.jpg",
            "id": "6hn",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m4rwuzEHVz1r6jd7fo1_1280.jpg",
            "id": "e82",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lgt0zjaTik1qgnva2o1_500.png",
            "id": "bgf",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lu8wwx12zx1qlyuwso1_1280.jpg",
            "id": "93m",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m4vzekUu7G1r6b7kmo1_500.jpg",
            "id": "MTY1Mjg5NQ",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_lvfpb18iea1qi23vmo1_500.jpg",
            "id": "3dr",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lx6uh8RO4r1qenqklo1_1280.jpg",
            "id": "8o4",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m3g4wzlmaK1qzex9io1_500.jpg",
            "id": "8g1",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m3gl5xsZGq1r73wdao1_1280.jpg",
            "id": "3s9",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m4l704E3mL1qdajm7o1_500.jpg",
            "id": "bjp",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lql6c16YhH1qdth8zo1_1280.jpg",
            "id": "cgp",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m0umerwZ3L1qznclro1_1280.jpg",
            "id": "1e6",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m3pv11WNcO1r5c1jmo1_1280.jpg",
            "id": "3b8",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m1uu8abTLM1qd477zo1_500.jpg",
            "id": "9us",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m4apapdhVj1r18oqso1_500.jpg",
            "id": "MTY4NDQ5NQ",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m3gaff05EE1qddbvio1_500.jpg",
            "id": "bu5",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m3nbobox8B1qj638ro1_1280.jpg",
            "id": "3ic",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_llahls2IeS1qjmniro1_250.gif",
            "id": "8q",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_lnvyrt5j1M1qce7tgo1_500.gif",
            "id": "ck8",
            "counter": 0
        },
        {
            "url": "http://30.media.tumblr.com/tumblr_m2b0ykP6Fu1qzex9io1_1280.jpg",
            "id": "s7",
            "counter": 0
        },
        {
            "url": "http://29.media.tumblr.com/tumblr_ly4w9oJVgE1r189uao1_500.jpg",
            "id": "is",
            "counter": 0
        },
        {
            "url": "http://28.media.tumblr.com/qgIb8tERiqzchkc2UFsyedLmo1_500.jpg",
            "id": "2r3",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m4habeFR271qd477zo1_1280.jpg",
            "id": "btv",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m20bftDngo1qejbiro1_1280.jpg",
            "id": "e3a",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_lehgc4thel1qecpy9o1_500.gif",
            "id": "al8",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_kqai1e03j91qzv5pwo1_500.jpg",
            "id": "56s",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_ku726anOmb1qzrlhgo1_500.png",
            "id": "aj6",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m3tpx8fsXX1qhwmnpo1_400.jpg",
            "id": "46h",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lhe1fu7JpG1qgnva2o1_500.png",
            "id": "bd8",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m43mq45fgs1qzxrnuo1_1280.jpg",
            "id": "45k",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m4mo17vXSa1r6jd7fo1_500.jpg",
            "id": "bjc",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m1oyzmlqEu1rsf53jo1_1280.jpg",
            "id": "5ts",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lpl0cy8o5R1qdth8zo1_1280.jpg",
            "id": "chk",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_lz5pu74OPk1qgjltdo1_1280.jpg",
            "id": "ca8",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m7cjk9zTNM1qzex9io1_1280.jpg",
            "id": "MTU0NzgwMA",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m4gtikn86b1qztc0jo1_1280.jpg",
            "id": "ddp",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m2xlwaadCC1qejbiro1_1280.jpg",
            "id": "e03",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/GxlDeM8kxl6gszkaC1RgD776o1_1280.jpg",
            "id": "9mk",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m3khmzDXEo1qjc1a7o1_1280.jpg",
            "id": "3gm",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lz8fwef0VA1qzv52ko1_1280.jpg",
            "id": "6lo",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_ma7j0aGNbB1r6jd7fo1_1280.jpg",
            "id": "MjA2NTY1NQ",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m3pm45zC4v1qjahcpo1_500.jpg",
            "id": "41c",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lqv93f3ZQT1qi3974o1_500.jpg",
            "id": "54m",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m2lim4Wocd1qjev1to1_1280.jpg",
            "id": "bjf",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m4qdjuybqb1r0wqrdo1_1280.jpg",
            "id": "e9h",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m4pvakprVF1r6jd7fo1_500.jpg",
            "id": "ec6",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m2g2ksSLML1qgkc80o1_400.gif",
            "id": "4ge",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m3uxadNlfI1qejbiro1_1280.jpg",
            "id": "ds4",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_mc1lz78RNn1qjc1a7o1_1280.jpg",
            "id": "MTcwMTgxMg",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_lht68lybsE1qcn249o1_250.gif",
            "id": "7ts",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lidvsekFL91qzabkfo1_1280.jpg",
            "id": "d5c",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lpcq3447RK1qbhms5o1_500.jpg",
            "id": "6jf",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_mbe1tuRvoN1rxer0vo1_1280.jpg",
            "id": "MTY4MDkyOA",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m47yaokX791qhwmnpo1_500.jpg",
            "id": "8hk",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_ll3uw0KDeM1qb8a3ro1_500.jpg",
            "id": "5no",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_m1nn0aPJU31qejbiro1_1280.jpg",
            "id": "e3v",
            "counter": 0
        },
        {
            "url": "http://28.media.tumblr.com/tumblr_ly7rtpsCSc1qgop81o1_1280.jpg",
            "id": "dp",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_lowyfwTewp1qbhms5o1_500.jpg",
            "id": "6jt",
            "counter": 0
        },
        {
            "url": "http://27.media.tumblr.com/tumblr_lwaso5dl5N1qbhms5o1_500.jpg",
            "id": "1qj",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lst9zbbAGx1r4xjo2o1_1280.jpg",
            "id": "5io",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m44vnvR00W1rtuomto1_1280.jpg",
            "id": "46o",
            "counter": 0
        },
        {
            "url": "http://24.media.tumblr.com/tumblr_kujwmnKr8k1qzpwi0o1_250.gif",
            "id": "4lt",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_lwip0fnA2D1qzv52ko1_1280.jpg",
            "id": "6ps",
            "counter": 0
        },
        {
            "url": "http://25.media.tumblr.com/tumblr_m3jbdxqnma1qa8o34o1_500.jpg",
            "id": "a4e",
            "counter": 0
        }
    ],
  },
  mounted() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.gridData[i].counter = localStorage.getItem('gridData['+i+'].counter');
      }
    }
  },
  methods: {
    count: function(idx) {
      this.gridData[idx].counter++;
      this.saveCounter(this.gridData[idx].counter, idx);
    },
    saveCounter :function(param,idx){
      localStorage.setItem('gridData['+idx+'].counter', param);
      console.log(localStorage);
    },
    deleteItem: function(idx) {
      this.gridData.splice(idx,1);
    },
    sortBy: function(idx) {
      this.gridData.sort((idx, b) => b.counter - idx.counter);
    },
  },
})
