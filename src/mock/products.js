export const PRODUCTS = {
  // 蛋白质类 (protein) - 10条数据
  beef: {
    id: 'beef',
    name: '牛肉',
    category: 'protein',
    nutrition: { carbs: 0, sugar: 0, sodium: 60, energy: 250 },
    unit: 'g',
    riskFlags: [],
    icon: '🥩'
  },
  chicken: {
    id: 'chicken',
    name: '鸡胸肉',
    category: 'protein',
    nutrition: { carbs: 0, sugar: 0, sodium: 74, energy: 165 },
    unit: 'g',
    riskFlags: [],
    icon: '🍗'
  },
  salmon: {
    id: 'salmon',
    name: '三文鱼',
    category: 'protein',
    nutrition: { carbs: 0, sugar: 0, sodium: 59, energy: 206 },
    unit: 'g',
    riskFlags: [],
    icon: '🐟'
  },
  egg: {
    id: 'egg',
    name: '鸡蛋',
    category: 'protein',
    nutrition: { carbs: 1.1, sugar: 0.3, sodium: 124, energy: 155 },
    unit: 'g',
    riskFlags: [],
    icon: '🥚'
  },
  tofu: {
    id: 'tofu',
    name: '豆腐',
    category: 'protein',
    nutrition: { carbs: 1.9, sugar: 0.2, sodium: 7, energy: 76 },
    unit: 'g',
    riskFlags: [],
    icon: '🧊'
  },
  pork: {
    id: 'pork',
    name: '猪肉',
    category: 'protein',
    nutrition: { carbs: 0, sugar: 0, sodium: 62, energy: 242 },
    unit: 'g',
    riskFlags: [],
    icon: '🐖'
  },
  shrimp: {
    id: 'shrimp',
    name: '虾',
    category: 'protein',
    nutrition: { carbs: 0.9, sugar: 0, sodium: 111, energy: 85 },
    unit: 'g',
    riskFlags: [],
    icon: '🍤'
  },
  duck: {
    id: 'duck',
    name: '鸭肉',
    category: 'protein',
    nutrition: { carbs: 0, sugar: 0, sodium: 63, energy: 337 },
    unit: 'g',
    riskFlags: [],
    icon: '🦆'
  },
  lamb: {
    id: 'lamb',
    name: '羊肉',
    category: 'protein',
    nutrition: { carbs: 0, sugar: 0, sodium: 72, energy: 294 },
    unit: 'g',
    riskFlags: [],
    icon: '🐑'
  },
  tempeh: {
    id: 'tempeh',
    name: '印尼天贝',
    category: 'protein',
    nutrition: { carbs: 9.4, sugar: 0.4, sodium: 9, energy: 193 },
    unit: 'g',
    riskFlags: [],
    icon: '🫘'
  },

  // 乳制品类 (dairy) - 10条数据
  milk: {
    id: 'milk',
    name: '牛奶',
    category: 'dairy',
    nutrition: { carbs: 5, sugar: 5, sodium: 44, energy: 65 },
    unit: '100ml',
    riskFlags: [],
    icon: '🥛'
  },
  yogurt: {
    id: 'yogurt',
    name: '酸奶',
    category: 'dairy',
    nutrition: { carbs: 4.7, sugar: 4.7, sodium: 52, energy: 61 },
    unit: '100g',
    riskFlags: [],
    icon: '🥣'
  },
  cheese: {
    id: 'cheese',
    name: '奶酪',
    category: 'dairy',
    nutrition: { carbs: 1.3, sugar: 0.5, sodium: 620, energy: 404 },
    unit: 'g',
    riskFlags: ['highSodium'],
    icon: '🧀'
  },
  butter: {
    id: 'butter',
    name: '黄油',
    category: 'dairy',
    nutrition: { carbs: 0.1, sugar: 0.1, sodium: 11, energy: 717 },
    unit: 'g',
    riskFlags: [],
    icon: '🧈'
  },
  cream: {
    id: 'cream',
    name: '奶油',
    category: 'dairy',
    nutrition: { carbs: 2.8, sugar: 2.8, sodium: 27, energy: 345 },
    unit: '100g',
    riskFlags: [],
    icon: '🧁'
  },
  kefir: {
    id: 'kefir',
    name: '开菲尔',
    category: 'dairy',
    nutrition: { carbs: 4.5, sugar: 4.5, sodium: 40, energy: 60 },
    unit: '100ml',
    riskFlags: [],
    icon: '🥛'
  },
  sourCream: {
    id: 'sourCream',
    name: '酸奶油',
    category: 'dairy',
    nutrition: { carbs: 2.9, sugar: 2.9, sodium: 33, energy: 198 },
    unit: '100g',
    riskFlags: [],
    icon: '🥣'
  },
  cottageCheese: {
    id: 'cottageCheese',
    name: '松软干酪',
    category: 'dairy',
    nutrition: { carbs: 3.4, sugar: 3.4, sodium: 364, energy: 98 },
    unit: '100g',
    riskFlags: [],
    icon: '🧀'
  },
  wheyProtein: {
    id: 'wheyProtein',
    name: '乳清蛋白粉',
    category: 'dairy',
    nutrition: { carbs: 3.5, sugar: 2, sodium: 150, energy: 380 },
    unit: 'g',
    riskFlags: [],
    icon: '🥤'
  },
  condensedMilk: {
    id: 'condensedMilk',
    name: '炼乳',
    category: 'dairy',
    nutrition: { carbs: 55, sugar: 55, sodium: 120, energy: 321 },
    unit: '100g',
    riskFlags: ['highSugar'],
    icon: '🍯'
  },

  // 蔬菜类 (veg) - 10条数据
  broccoli: {
    id: 'broccoli',
    name: '西兰花',
    category: 'veg',
    nutrition: { carbs: 7, sugar: 1.7, sodium: 33, energy: 34 },
    unit: 'g',
    riskFlags: [],
    icon: '🥦'
  },
  spinach: {
    id: 'spinach',
    name: '菠菜',
    category: 'veg',
    nutrition: { carbs: 3.6, sugar: 0.4, sodium: 79, energy: 23 },
    unit: 'g',
    riskFlags: [],
    icon: '🍃'
  },
  carrot: {
    id: 'carrot',
    name: '胡萝卜',
    category: 'veg',
    nutrition: { carbs: 10, sugar: 4.7, sodium: 69, energy: 41 },
    unit: 'g',
    riskFlags: [],
    icon: '🥕'
  },
  bellPepper: {
    id: 'bellPepper',
    name: '彩椒',
    category: 'veg',
    nutrition: { carbs: 6, sugar: 4.2, sodium: 3, energy: 31 },
    unit: 'g',
    riskFlags: [],
    icon: '🫑'
  },
  tomato: {
    id: 'tomato',
    name: '番茄',
    category: 'veg',
    nutrition: { carbs: 3.9, sugar: 2.6, sodium: 5, energy: 18 },
    unit: 'g',
    riskFlags: [],
    icon: '🍅'
  },
  cucumber: {
    id: 'cucumber',
    name: '黄瓜',
    category: 'veg',
    nutrition: { carbs: 3.6, sugar: 1.7, sodium: 2, energy: 15 },
    unit: 'g',
    riskFlags: [],
    icon: '🥒'
  },
  onion: {
    id: 'onion',
    name: '洋葱',
    category: 'veg',
    nutrition: { carbs: 9.3, sugar: 4.2, sodium: 4, energy: 40 },
    unit: 'g',
    riskFlags: [],
    icon: '🧅'
  },
  mushroom: {
    id: 'mushroom',
    name: '蘑菇',
    category: 'veg',
    nutrition: { carbs: 3.3, sugar: 2, sodium: 5, energy: 22 },
    unit: 'g',
    riskFlags: [],
    icon: '🍄'
  },
  kale: {
    id: 'kale',
    name: '羽衣甘蓝',
    category: 'veg',
    nutrition: { carbs: 8.8, sugar: 2.3, sodium: 53, energy: 49 },
    unit: 'g',
    riskFlags: [],
    icon: '🥬'
  },
  potato: {
    id: 'potato',
    name: '土豆',
    category: 'veg',
    nutrition: { carbs: 17, sugar: 0.8, sodium: 6, energy: 77 },
    unit: 'g',
    riskFlags: [],
    icon: '🥔'
  },

  // 碳水化合物类 (carb) - 10条数据
  rice: {
    id: 'rice',
    name: '大米',
    category: 'carb',
    nutrition: { carbs: 77, sugar: 0.1, sodium: 7, energy: 365 },
    unit: 'g',
    riskFlags: [],
    icon: '🍚'
  },
  brownRice: {
    id: 'brownRice',
    name: '糙米',
    category: 'carb',
    nutrition: { carbs: 77, sugar: 0.5, sodium: 5, energy: 370 },
    unit: 'g',
    riskFlags: [],
    icon: '🌾'
  },
  bread: {
    id: 'bread',
    name: '面包',
    category: 'carb',
    nutrition: { carbs: 49, sugar: 5, sodium: 491, energy: 265 },
    unit: 'g',
    riskFlags: ['highSodium'],
    icon: '🍞'
  },
  pasta: {
    id: 'pasta',
    name: '意大利面',
    category: 'carb',
    nutrition: { carbs: 74, sugar: 2.5, sodium: 6, energy: 370 },
    unit: 'g',
    riskFlags: [],
    icon: '🍝'
  },
  oatmeal: {
    id: 'oatmeal',
    name: '燕麦片',
    category: 'carb',
    nutrition: { carbs: 66, sugar: 0.9, sodium: 2, energy: 379 },
    unit: 'g',
    riskFlags: [],
    icon: '🥣'
  },
  quinoa: {
    id: 'quinoa',
    name: '藜麦',
    category: 'carb',
    nutrition: { carbs: 64, sugar: 1.5, sodium: 9, energy: 368 },
    unit: 'g',
    riskFlags: [],
    icon: '🌾'
  },
  sweetPotato: {
    id: 'sweetPotato',
    name: '红薯',
    category: 'carb',
    nutrition: { carbs: 20, sugar: 4.2, sodium: 55, energy: 86 },
    unit: 'g',
    riskFlags: [],
    icon: '🍠'
  },
  corn: {
    id: 'corn',
    name: '玉米',
    category: 'carb',
    nutrition: { carbs: 19, sugar: 3.2, sodium: 15, energy: 86 },
    unit: 'g',
    riskFlags: [],
    icon: '🌽'
  },
  noodles: {
    id: 'noodles',
    name: '面条',
    category: 'carb',
    nutrition: { carbs: 72, sugar: 1.5, sodium: 7, energy: 351 },
    unit: 'g',
    riskFlags: [],
    icon: '🍜'
  },
  buckwheat: {
    id: 'buckwheat',
    name: '荞麦',
    category: 'carb',
    nutrition: { carbs: 71, sugar: 1.5, sodium: 1, energy: 343 },
    unit: 'g',
    riskFlags: [],
    icon: '🌾'
  },

  // 水果类 (fruit) - 10条数据
  apple: {
    id: 'apple',
    name: '苹果',
    category: 'fruit',
    nutrition: { carbs: 14, sugar: 10, sodium: 1, energy: 52 },
    unit: 'g',
    riskFlags: ['highSugar'],
    icon: '🍎'
  },
  banana: {
    id: 'banana',
    name: '香蕉',
    category: 'fruit',
    nutrition: { carbs: 23, sugar: 12, sodium: 1, energy: 89 },
    unit: 'g',
    riskFlags: ['highSugar'],
    icon: '🍌'
  },
  orange: {
    id: 'orange',
    name: '橙子',
    category: 'fruit',
    nutrition: { carbs: 12, sugar: 9, sodium: 0, energy: 47 },
    unit: 'g',
    riskFlags: [],
    icon: '🍊'
  },
  strawberry: {
    id: 'strawberry',
    name: '草莓',
    category: 'fruit',
    nutrition: { carbs: 8, sugar: 4.9, sodium: 1, energy: 32 },
    unit: 'g',
    riskFlags: [],
    icon: '🍓'
  },
  blueberry: {
    id: 'blueberry',
    name: '蓝莓',
    category: 'fruit',
    nutrition: { carbs: 14, sugar: 9.7, sodium: 1, energy: 57 },
    unit: 'g',
    riskFlags: [],
    icon: '🫐'
  },
  watermelon: {
    id: 'watermelon',
    name: '西瓜',
    category: 'fruit',
    nutrition: { carbs: 8, sugar: 6.2, sodium: 1, energy: 30 },
    unit: 'g',
    riskFlags: [],
    icon: '🍉'
  },
  mango: {
    id: 'mango',
    name: '芒果',
    category: 'fruit',
    nutrition: { carbs: 15, sugar: 13.7, sodium: 1, energy: 60 },
    unit: 'g',
    riskFlags: ['highSugar'],
    icon: '🥭'
  },
  pineapple: {
    id: 'pineapple',
    name: '菠萝',
    category: 'fruit',
    nutrition: { carbs: 13, sugar: 9.9, sodium: 1, energy: 50 },
    unit: 'g',
    riskFlags: [],
    icon: '🍍'
  },
  avocado: {
    id: 'avocado',
    name: '牛油果',
    category: 'fruit',
    nutrition: { carbs: 9, sugar: 0.7, sodium: 7, energy: 160 },
    unit: 'g',
    riskFlags: [],
    icon: '🥑'
  },
  grape: {
    id: 'grape',
    name: '葡萄',
    category: 'fruit',
    nutrition: { carbs: 18, sugar: 16, sodium: 2, energy: 69 },
    unit: 'g',
    riskFlags: ['highSugar'],
    icon: '🍇'
  },

  // 调味品类 (condiment) - 10条数据
  soySauce_regular: {
    id: 'soySauce_regular',
    name: '酱油（普通）',
    category: 'condiment',
    nutrition: { carbs: 8, sugar: 5, sodium: 6000, energy: 53 },
    unit: 'g',
    riskFlags: ['highSodium'],
    icon: '🍶'
  },
  salt: {
    id: 'salt',
    name: '盐',
    category: 'condiment',
    nutrition: { carbs: 0, sugar: 0, sodium: 38758, energy: 0 },
    unit: 'g',
    riskFlags: ['highSodium'],
    icon: '🧂'
  },
  oliveOil: {
    id: 'oliveOil',
    name: '橄榄油',
    category: 'condiment',
    nutrition: { carbs: 0, sugar: 0, sodium: 0, energy: 884 },
    unit: 'g',
    riskFlags: [],
    icon: '🫒'
  },
  honey: {
    id: 'honey',
    name: '蜂蜜',
    category: 'condiment',
    nutrition: { carbs: 82, sugar: 82, sodium: 4, energy: 304 },
    unit: 'g',
    riskFlags: ['highSugar'],
    icon: '🍯'
  },
  ketchup: {
    id: 'ketchup',
    name: '番茄酱',
    category: 'condiment',
    nutrition: { carbs: 25, sugar: 22, sodium: 907, energy: 111 },
    unit: 'g',
    riskFlags: ['highSugar', 'highSodium'],
    icon: '🍅'
  },
  mayonnaise: {
    id: 'mayonnaise',
    name: '蛋黄酱',
    category: 'condiment',
    nutrition: { carbs: 1.8, sugar: 1.8, sodium: 635, energy: 680 },
    unit: 'g',
    riskFlags: ['highSodium'],
    icon: '🥣'
  },
  vinegar: {
    id: 'vinegar',
    name: '醋',
    category: 'condiment',
    nutrition: { carbs: 0.9, sugar: 0.4, sodium: 2, energy: 18 },
    unit: 'g',
    riskFlags: [],
    icon: '🍶'
  },
  mustard: {
    id: 'mustard',
    name: '芥末酱',
    category: 'condiment',
    nutrition: { carbs: 5.8, sugar: 0.6, sodium: 1100, energy: 66 },
    unit: 'g',
    riskFlags: ['highSodium'],
    icon: '🌭'
  },
  garlicPowder: {
    id: 'garlicPowder',
    name: '大蒜粉',
    category: 'condiment',
    nutrition: { carbs: 73, sugar: 2.4, sodium: 60, energy: 331 },
    unit: 'g',
    riskFlags: [],
    icon: '🧄'
  },
  chiliSauce: {
    id: 'chiliSauce',
    name: '辣椒酱',
    category: 'condiment',
    nutrition: { carbs: 22, sugar: 12, sodium: 1350, energy: 120 },
    unit: 'g',
    riskFlags: ['highSodium'],
    icon: '🌶️'
  }
};
