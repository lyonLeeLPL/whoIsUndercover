const data = [
  [
    "汉堡",
    "肉夹馍"
  ],
  [
    "葡萄",
    "提子"
  ],
  [
    "肯德基",
    "麦当劳"
  ],
  [
    "橙子",
    "橘子"
  ],
  [
    "A cup",
    "C cup"
  ],
  [
    "饺子",
    "包子"
  ],
  [
    "高跟鞋",
    "增高鞋"
  ],
  [
    "丑小鸭",
    "灰姑娘"
  ],
  [
    "床单",
    "被罩"
  ],
  [
    "吸血鬼",
    "僵尸"
  ],
  [
    "雪糕",
    "甜筒"
  ],
  [
    "小矮人",
    "葫芦娃"
  ],
  [
    "牛奶",
    "豆浆"
  ],
  [
    "赵四",
    "刘能"
  ],
  ["马克风",
    "扩音器"
  ],
  [
    "暖男",
    "闺蜜"
  ],
  [
    "饥饿",
    "饥渴"
  ],
  [
    "棒子",
    "鬼子"
  ],
  [
    "奈何桥",
    "鬼门关"
  ],
  [
    "高达",
    "变形金刚"
  ],
  [
    "土豪",
    "高富帅"
  ],
  [
    "洗浴",
    "桑拿"
  ],
  [
    "神经病",
    "脑残"
  ],
  [
    "口香糖",
    "泡泡糖"
  ],
  [
    "谁知道呢",
    "我不知道"
  ],
  [
    "爱咋咋地",
    "随你便吧"
  ],
  [
    "我无所谓",
    "我不在乎"
  ],
  [
    "摇摇车",
    "学步车"
  ],
  [
    "广场舞",
    "太极拳"
  ],
  [
    "好吧",
    "好的"
  ],
  [
    "脑残粉",
    "真爱饭"
  ],
  [
    "皮皮虾",
    "小龙虾"
  ],
  [
    "cosplay",
    "奇装异服"
  ],
  [
    "少妇",
    "御姐"
  ],
  [
    "同学会",
    "校友会"
  ],
  [
    "铅笔",
    "签字笔"
  ],
  [
    "身份",
    "角色"
  ],
  [
    "代理人",
    "经纪人"
  ],
  [
    "流氓",
    "小混混"
  ],
  [
    "奥运会",
    "世界杯"
  ],
  [
    "大妈",
    "老阿姨"
  ],
  [
    "红牛",
    "脉动"
  ],
  [
    "加冕",
    "夺冠"
  ],
  [
    "绿茶婊",
    "外围女"
  ],
  [
    "不可以",
    "不要啊"
  ],
  [
    "斗地主",
    "打麻将"
  ],
  [
    "鞍前马后",
    "端茶倒水"
  ],
  [
    "羞耻",
    "羞涩"
  ],
  [
    "黑板报",
    "大字报"
  ],
  [
    "尼姑",
    "修女"
  ],
  [
    "左顾右盼",
    "贼眉鼠眼"
  ],
  [
    "剁手",
    "卖肾"
  ],
  [
    "生无可恋",
    "不知所措"
  ],
  [
    "低端人口",
    "无产阶级"
  ],
  [
    "没完没了",
    "无休无止"
  ],
  [
    "专家",
    "学者"
  ],
  [
    "精卫填海",
    "女娲补天"
  ],
  [
    "小笼包",
    "灌汤包"
  ],
  ["汤圆", "丸子"],
	["哈密瓜", "西瓜"],
	["包子", "水饺"],
	["汉堡包", "肉夹馍"],
	["宫锁心玉", "宫锁珠帘"],
	["步步惊心", "宫锁心玉"],
	["钢笔", "中性笔"],
	["玫瑰", "月季"],
	["董永", "许仙"],
	["若曦", "晴川"],
	["谢娜", "李湘"],
	["孟非", "乐嘉"],
	["牛奶", "豆浆"],
	["保安", "保镖"],
	["白菜", "生菜"],
	["辣椒", "芥末"],
	["赵敏", "黄蓉"],
	["海豚", "海狮"],
	["水盆", "水桶"],
	["唇膏", "口红"],
	["小笼包", "灌汤包"],
	["薰衣草", "满天星"],
	["富二代", "高富帅"],
	["生活费", "零花钱"],
	["麦克风", "扩音器"],
	["郭德纲", "周立波"],
	["图书馆", "图书店"],
	["男朋友", "前男友"],
	["洗衣粉", "皂角粉"],
	["牛肉干", "猪肉脯"],
	["泡泡糖", "棒棒糖"],
	["小沈阳", "宋小宝"],
	["张韶涵", "王心凌"],
	["刘诗诗", "刘亦菲"],
	["甄嬛传", "红楼梦"],
	["甄子丹", "李连杰"],
	["包青天", "狄仁杰"],
	["大白兔", "金丝猴"],
	["果粒橙", "鲜橙多"],
	["沐浴露", "沐浴盐"],
	["洗发露", "护发素"],
	["自行车", "电动车"],
	["班主任", "辅导员"],
	["过山车", "碰碰车"],
	["铁观音", "碧螺春"],
	["丑小鸭", "灰姑娘"],
	["十面埋伏", "四面楚歌"],
	["成吉思汗", "努尔哈赤"],
	["谢娜张杰", "邓超孙俪"],
	["福尔摩斯", "工藤新一"],
	["贵妃醉酒", "黛玉葬花"],
	["流星花园", "花样男子"],
	["神雕侠侣", "天龙八部"],
	["天天向上", "非诚勿扰"],
	["勇往直前", "全力以赴"],
	["鱼香肉丝", "四喜丸子"],
	["语无伦次", "词不达意"],
	["鼠目寸光", "井底之蛙"],
	["近视眼镜", "隐形眼镜"],
	["美人心计", "倾世皇妃"],
	["夏家三千金", "爱情睡醒了"],
	["降龙十八掌", "九阴白骨爪"],
	["红烧牛肉面", "香辣牛肉面"],
	["江南style", "最炫民族风"],
	["脚踏车", "自行车"],
	["口香糖", "木糖醇"],
	["老佛爷", "老天爷"],
	["金丝猴", "大白兔(奶糖)"],
	["近视眼镜", "隐形眼镜"],
	["两小无猜", "青梅竹马"],
	["龙凤呈祥", "鸳鸯戏水"],
	["麻婆豆腐", "皮蛋豆腐"],
	["降龙十八掌", "九阴白骨爪"],
	["梁山伯与祝英台", "罗密欧与朱丽叶"],
	["王菲", "那英"],
	["元芳", "展昭"],
	["麻雀", "乌鸦"],
	["胖子", "肥肉"],
	["眉毛", "胡须"],
	["何炅", "维嘉"],
	["状元", "冠军"],
	["玫瑰", "月季"],
	["董永", "许仙"],
	["若曦", "晴川"],
	["孟非", "乐嘉"],
	["牛奶", "豆浆"]
];

module.exports = data