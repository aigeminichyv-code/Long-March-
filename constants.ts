import { Milestone } from './types';

export const MILESTONES: Milestone[] = [
  {
    id: 0,
    title: "瑞金出發",
    date: "1934年10月",
    location: "江西瑞金",
    coords: { x: 75, y: 70 }, // Southeast China
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ruijin_Soviet_Site.jpg/640px-Ruijin_Soviet_Site.jpg",
    description: "由於第五次反「圍剿」失敗，中央紅軍（紅一方面軍）主力開始進行戰略轉移。這是一次被逼無奈的撤退，初期攜帶了大量輜重（壇壇罐罐），行軍速度極慢。",
    significance: "紅軍被迫撤離中央蘇區，開始了艱苦卓絕的戰略大轉移。這是長征的起點。",
    figures: [
      { name: "博古", role: "中共中央總負責人", desc: "推行「左」傾錯誤路線，導致反圍剿失敗。" },
      { name: "李德", role: "共產國際軍事顧問", desc: "掌握軍事指揮權，採取機械的陣地戰。" }
    ],
    survival: {
      title: "搬家式行軍",
      content: "出發初期，紅軍實行「大搬家」，攜帶了印刷機、X光機甚至桌椅板凳。這些笨重的輜重嚴重拖慢了行軍速度，讓紅軍在突破封鎖線時付出了代價。"
    },
    stat: { label: "出發人數", value: "8.6萬餘人" },
    quiz: {
      question: "長征的出發點主要是在哪個省份？",
      options: ["陝西", "江西", "貴州", "四川"],
      answer: 1 
    }
  },
  {
    id: 1,
    title: "血戰湘江",
    date: "1934年11月-12月",
    location: "廣西全州",
    coords: { x: 62, y: 65 }, // Moving West/South
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Battle_of_Xiangjiang_River_Memorial_Park_02.jpg/640px-Battle_of_Xiangjiang_River_Memorial_Park_02.jpg",
    description: "長征中最慘烈的一戰。紅軍突破國民黨軍第四道封鎖線，但由於隊伍臃腫和指揮失誤，付出了極其慘重的代價。湘江水被紅軍戰士的鮮血染紅。",
    significance: "雖然突破了封鎖，但慘重的犧牲（損兵折將過半）引發了廣大指戰員對軍事指揮錯誤的強烈不滿，為遵義會議的召開埋下伏筆。",
    figures: [
      { name: "陳樹湘", role: "紅34師師長", desc: "率領全師擔任後衛，彈盡糧絕後腹部中彈，斷腸明志，壯烈犧牲。" }
    ],
    survival: {
      title: "三年不飲湘江水",
      content: "戰役過後，當地百姓流傳著「三年不飲湘江水，十年不食湘江魚」的說法，可見戰況之慘烈，屍橫遍野。"
    },
    stat: { label: "人員銳減", value: "8.6萬 → 3萬" },
    quiz: {
      question: "湘江戰役後，紅軍人數發生了什麼變化？",
      options: ["增加了一倍", "基本持平", "銳減過半", "全部犧牲"],
      answer: 2
    }
  },
  {
    id: 2,
    title: "遵義會議",
    date: "1935年1月",
    location: "貴州遵義",
    coords: { x: 52, y: 60 }, // Guizhou area
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Zunyi_Conference_Site_2014.jpg/640px-Zunyi_Conference_Site_2014.jpg",
    description: "中共中央在遵義召開政治局擴大會議。會議集中全力解決了當時具有決定意義的軍事和組織問題，糾正了「左」傾教條主義錯誤。",
    significance: "確立了毛澤東在黨和紅軍中的領導地位，在極其危急的關頭挽救了黨，挽救了紅軍，是黨的歷史上一個生死攸關的轉折點。",
    figures: [
      { name: "毛澤東", role: "政治局常委", desc: "在會議上批評了單純防禦路線，增選為政治局常委。" },
      { name: "王稼祥", role: "紅軍總政治部主任", desc: "投出了關鍵一票，支持毛澤東的主張。" }
    ],
    survival: {
      title: "難得的休整",
      content: "佔領遵義後，紅軍獲得了長征以來難得的12天休整時間。戰士們補充了給養，更重要的是，精神面貌煥然一新。"
    },
    stat: { label: "會議時長", value: "3天 (1月15-17日)" },
    quiz: {
      question: "遵義會議被認為是中國共產黨歷史上的什麼？",
      options: ["生死攸關的轉折點", "長征的結束點", "建黨的開始", "國共合作的起點"],
      answer: 0
    }
  },
  {
    id: 3,
    title: "四渡赤水",
    date: "1935年1月-3月",
    location: "川黔邊界",
    coords: { x: 48, y: 55 }, // Near Guizhou/Sichuan border
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Chishui_River.jpg/640px-Chishui_River.jpg",
    description: "在毛澤東指揮下，紅軍在赤水河兩岸穿插往返，聲東擊西。通過四次渡河，紅軍巧妙地穿插於國民黨軍重兵集團之間，迷惑了敵人。",
    significance: "徹底粉碎了蔣介石企圖圍殲紅軍於川黔滇邊境的狂妄計劃，取得了戰略轉移中的主動權，被毛澤東視為其「平生得意之筆」。",
    figures: [
      { name: "毛澤東", role: "指揮者", desc: "展現了高超的軍事指揮藝術，靈活機動。" }
    ],
    survival: {
      title: "急行軍與運動戰",
      content: "為了調動敵人，紅軍必須在山路中頻繁急行軍。「肥的拖瘦，瘦的拖死」，這種高強度的運動戰雖然疲憊，但卻是生存的唯一希望。"
    },
    stat: { label: "歷時", value: "3個多月" },
    quiz: {
      question: "四渡赤水的主要軍事目的是什麼？",
      options: ["消滅敵人主力", "尋找糧食", "擺脫敵人圍追堵截", "建立根據地"],
      answer: 2
    }
  },
  {
    id: 4,
    title: "巧渡金沙江",
    date: "1935年5月",
    location: "雲南祿勸",
    coords: { x: 40, y: 58 }, // Yunnan area
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Jinsha_River_Tiger_Leaping_Gorge.jpg/640px-Jinsha_River_Tiger_Leaping_Gorge.jpg",
    description: "紅軍利用7隻小船，在當地船工的幫助下，經過9天9夜，將主力部隊全部渡過金沙江。當國民黨軍隊趕到時，只能望江興嘆。",
    significance: "紅軍從此跳出了數十萬敵軍的包圍圈，粉碎了敵人圍追堵截的計劃，取得了戰略轉移的決定性勝利。",
    figures: [
      { name: "劉伯承", role: "總參謀長", desc: "親自指揮先遣隊奪取皎平渡口。" },
      { name: "當地船工", role: "無名英雄", desc: "30多名船工日夜不停地擺渡，為紅軍北上立下大功。" }
    ],
    survival: {
      title: "與時間賽跑",
      content: "渡江完全依賴僅有的幾條小船。為了加快速度，部隊嚴格控制秩序，人歇船不歇。船工們唱著號子，在湍急的江流中往返。"
    },
    stat: { label: "渡船數量", value: "僅7隻小船" },
    quiz: {
      question: "巧渡金沙江標誌著紅軍？",
      options: ["到達了延安", "跳出了敵人的包圍圈", "結束了長征", "開始了抗日戰爭"],
      answer: 1
    }
  },
  {
    id: 5,
    title: "飛奪瀘定橋",
    date: "1935年5月",
    location: "四川瀘定",
    coords: { x: 38, y: 50 }, // Western Sichuan
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Luding_Bridge.jpg/640px-Luding_Bridge.jpg",
    description: "紅四團戰士在晝夜兼程240里後，22名突擊隊員沿著只剩下鐵鍊的橋面，冒著對岸敵人的機槍掃射，強行突擊，奪取了大橋。",
    significance: "粉碎了蔣介石藉助大渡河天險，讓紅軍成為「石達開第二」的企圖，打開了北上的通道。",
    figures: [
      { name: "22勇士", role: "突擊隊員", desc: "名字多已不可考，他們攀著鐵鍊，背著馬刀，冒死衝鋒。" },
      { name: "楊成武", role: "紅四團政委", desc: "指揮部隊在24小時內急行軍240里（120公里）趕到橋頭。" }
    ],
    survival: {
      title: "極限急行軍",
      content: "為了搶在敵人援兵之前到達，紅四團創造了單日行軍120公里的奇蹟。戰士們邊跑邊嚼生米，甚至互相用繩子拉著跑，克服了身體的極限。"
    },
    stat: { label: "急行軍速度", value: "一晝夜240里" },
    quiz: {
      question: "飛奪瀘定橋的突擊隊員有多少人？",
      options: ["100人", "50人", "22人", "18人"],
      answer: 2
    }
  },
  {
    id: 6,
    title: "爬雪山過草地",
    date: "1935年6月-8月",
    location: "川西北",
    coords: { x: 36, y: 40 }, // Northern Sichuan / Grasslands
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Snow_Mountains_Sichuan.jpg/640px-Snow_Mountains_Sichuan.jpg",
    description: "紅軍翻越了終年積雪的夾金山，穿越了人跡罕至、氣候惡劣、遍布沼澤的松潘草地。這是長征中自然環境最惡劣、非戰鬥減員最嚴重的階段。",
    significance: "體現了紅軍戰士極強的意志力和革命樂觀主義精神，是長征精神的集中體現。",
    figures: [
      { name: "炊事班長", role: "無名英雄", desc: "在《金色的魚鉤》故事中，老班長照顧病號，自己卻因飢餓犧牲。" }
    ],
    survival: {
      title: "吃皮帶與野菜",
      content: "糧食斷絕後，戰士們挖野菜、煮皮帶充飢。草地天氣瞬息萬變，許多戰士因為陷入泥沼或體溫過低而在睡夢中再也沒有醒來。"
    },
    stat: { label: "主要威脅", value: "飢餓、嚴寒、缺氧" },
    quiz: {
      question: "紅軍翻越的第一座大雪山是？",
      options: ["玉龍雪山", "夾金山", "長白山", "崑崙山"],
      answer: 1
    }
  },
  {
    id: 7,
    title: "吳起鎮會師",
    date: "1935年10月",
    location: "陝北吳起鎮",
    coords: { x: 55, y: 30 }, // Shaanxi (North)
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Yan%27an_Pagoda_Hill.jpg/640px-Yan%27an_Pagoda_Hill.jpg",
    description: "中央紅軍到達陝北吳起鎮，與陝北紅軍勝利會師。這標誌著紅一方面軍主力長征的勝利結束。",
    significance: "宣告了國民黨圍追堵截的失敗，為中國革命大本營放在西北舉行了奠基禮，開啟了中國革命的新局面。",
    figures: [
      { name: "劉志丹", role: "陝北紅軍領導人", desc: "創建了陝北革命根據地，為中央紅軍提供了落腳點。" },
      { name: "習仲勳", role: "陝北紅軍領導人", desc: "迎接中央紅軍的到來。" }
    ],
    survival: {
      title: "窯洞與小米",
      content: "到達陝北後，戰士們住進了窯洞，吃上了小米飯。雖然條件依然艱苦，但相比草地雪山，這裡已經是溫暖的家。"
    },
    stat: { label: "總里程", value: "二萬五千里" },
    quiz: {
      question: "中央紅軍長征的落腳點是哪裡？",
      options: ["陝北", "西藏", "新疆", "北京"],
      answer: 0
    }
  }
];