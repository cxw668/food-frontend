import { PRODUCTS } from '@/mock/products.js'

export const DIABETES_RULES = {
  avoidRisks: ['highSugar', 'highSodium'],
  maxCarbsPerMeal: 60
}

export const RECIPES = [
  {
    id: 'breakfast_overnight_oats',
    name: '隔夜燕麦早餐杯',
    tags: ['breakfast', 'meal-prep', 'vegetarian'],
    ingredients: [
      { productId: 'oatmeal', amount: 50 },
      { productId: 'milk', amount: 200 },
      { productId: 'blueberry', amount: 100 },
      { productId: 'almondButter', amount: 15 }
    ],
    description: '提前一晚准备的健康早餐，富含纤维和蛋白质',
    prepTime: 5,
    cookTime: 0,
    calories: 350
  },
  {
    id: 'greek_yogurt_parfait',
    name: '希腊酸奶水果帕菲特',
    tags: ['breakfast', 'snack', 'high-protein'],
    ingredients: [
      { productId: 'yogurt', amount: 150 },
      { productId: 'granola', amount: 30 },
      { productId: 'strawberry', amount: 100 },
      { productId: 'banana', amount: 50 }
    ],
    description: '层次丰富的酸奶杯，提供持久能量',
    prepTime: 10,
    cookTime: 0,
    calories: 280
  },
  {
    id: 'avocado_egg_toast',
    name: '牛油果鸡蛋吐司',
    tags: ['breakfast', 'high-protein', 'healthy-fat'],
    ingredients: [
      { productId: 'bread', amount: 60 },
      { productId: 'avocado', amount: 100 },
      { productId: 'egg', amount: 50 },
      { productId: 'lemonJuice', amount: 5 }
    ],
    description: '经典的网红早餐，优质脂肪和蛋白质的完美结合',
    prepTime: 5,
    cookTime: 8,
    calories: 320
  },
  {
    id: 'broccoli_chicken_quinoa',
    name: '西兰花鸡胸藜麦碗',
    tags: ['lunch', 'dinner', '211', 'high-protein'],
    ingredients: [
      { productId: 'broccoli', amount: 200 },
      { productId: 'chicken', amount: 150 },
      { productId: 'quinoa', amount: 100 },
      { productId: 'oliveOil', amount: 10 }
    ],
    description: '经典的211饮食搭配，营养均衡饱腹感强',
    prepTime: 10,
    cookTime: 20,
    calories: 450
  },
  {
    id: 'salmon_veg_rice_bowl',
    name: '三文鱼蔬菜杂粮饭',
    tags: ['lunch', 'dinner', 'omega-3', 'healthy-fat'],
    ingredients: [
      { productId: 'salmon', amount: 150 },
      { productId: 'spinach', amount: 100 },
      { productId: 'brownRice', amount: 100 },
      { productId: 'carrot', amount: 50 },
      { productId: 'avocado', amount: 50 }
    ],
    description: '富含Omega-3的健康餐，支持心脏和大脑健康',
    prepTime: 15,
    cookTime: 25,
    calories: 520
  },
  {
    id: 'tofu_veg_stir_fry',
    name: '豆腐时蔬炒',
    tags: ['lunch', 'dinner', 'vegetarian', 'vegan'],
    ingredients: [
      { productId: 'tofu', amount: 200 },
      { productId: 'bellPepper', amount: 100 },
      { productId: 'broccoli', amount: 150 },
      { productId: 'mushroom', amount: 100 },
      { productId: 'soySauce_light', amount: 10 }
    ],
    description: '纯素食的美味炒菜，高蛋白低热量',
    prepTime: 15,
    cookTime: 12,
    calories: 280
  },
  {
    id: 'mediterranean_chicken_salad',
    name: '地中海风味鸡肉沙拉',
    tags: ['lunch', 'low-carb', 'high-protein'],
    ingredients: [
      { productId: 'chicken', amount: 120 },
      { productId: 'spinach', amount: 100 },
      { productId: 'tomato', amount: 100 },
      { productId: 'cucumber', amount: 100 },
      { productId: 'fetaCheese', amount: 30 },
      { productId: 'oliveOil', amount: 15 }
    ],
    description: '地中海饮食风格沙拉，清爽健康',
    prepTime: 20,
    cookTime: 15,
    calories: 380
  },
  {
    id: 'veggie_soup',
    name: '蔬菜营养汤',
    tags: ['dinner', 'low-calorie', 'vegetarian'],
    ingredients: [
      { productId: 'carrot', amount: 100 },
      { productId: 'celery', amount: 100 },
      { productId: 'tomato', amount: 150 },
      { productId: 'onion', amount: 50 },
      { productId: 'garlicPowder', amount: 5 }
    ],
    description: '温暖的低卡蔬菜汤，适合晚餐',
    prepTime: 10,
    cookTime: 30,
    calories: 120
  },
  {
    id: 'shrimp_avocado_salad',
    name: '虾仁牛油果沙拉',
    tags: ['lunch', 'dinner', 'high-protein', 'low-carb'],
    ingredients: [
      { productId: 'shrimp', amount: 150 },
      { productId: 'avocado', amount: 100 },
      { productId: 'mixedGreens', amount: 150 },
      { productId: 'lemonJuice', amount: 10 },
      { productId: 'oliveOil', amount: 10 }
    ],
    description: '高蛋白低碳水沙拉，减脂期友好',
    prepTime: 15,
    cookTime: 5,
    calories: 320
  },
  {
    id: 'greek_chicken_gyro',
    name: '希腊鸡肉卷',
    tags: ['lunch', 'meal-prep', 'high-protein'],
    ingredients: [
      { productId: 'chicken', amount: 150 },
      { productId: 'wholeWheatWrap', amount: 1 },
      { productId: 'tomato', amount: 50 },
      { productId: 'cucumber', amount: 50 },
      { productId: 'tzatzikiSauce', amount: 30 }
    ],
    description: '便携的地中海风味卷饼，适合带餐',
    prepTime: 20,
    cookTime: 15,
    calories: 420
  },
  {
    id: 'sweet_potato_chickpea_bowl',
    name: '红薯鹰嘴豆碗',
    tags: ['lunch', 'dinner', 'vegetarian', 'high-fiber'],
    ingredients: [
      { productId: 'sweetPotato', amount: 200 },
      { productId: 'chickpeas', amount: 100 },
      { productId: 'kale', amount: 100 },
      { productId: 'tahini', amount: 20 },
      { productId: 'lemonJuice', amount: 10 }
    ],
    description: '富含纤维和植物蛋白的素食碗',
    prepTime: 15,
    cookTime: 25,
    calories: 380
  },
  {
    id: 'tuna_avocado_sushi_bowl',
    name: '金枪鱼牛油果寿司碗',
    tags: ['lunch', 'dinner', 'high-protein', 'omega-3'],
    ingredients: [
      { productId: 'tuna', amount: 150 },
      { productId: 'avocado', amount: 100 },
      { productId: 'sushiRice', amount: 100 },
      { productId: 'cucumber', amount: 50 },
      { productId: 'soySauce_light', amount: 10 }
    ],
    description: '无寿司卷的寿司碗，轻松享用日式风味',
    prepTime: 20,
    cookTime: 15,
    calories: 450
  },
  {
    id: 'protein_smoothie_bowl',
    name: '蛋白思慕雪碗',
    tags: ['breakfast', 'snack', 'post-workout'],
    ingredients: [
      { productId: 'banana', amount: 100 },
      { productId: 'spinach', amount: 50 },
      { productId: 'wheyProtein', amount: 30 },
      { productId: 'almondMilk', amount: 200 },
      { productId: 'chiaSeeds', amount: 10 },
      { productId: 'blueberry', amount: 50 }
    ],
    description: '健身后的完美恢复餐，高蛋白富含抗氧化剂',
    prepTime: 10,
    cookTime: 0,
    calories: 320
  },
  {
    id: 'turkey_quinoa_stuffed_pepper',
    name: '火鸡藜麦彩椒盅',
    tags: ['dinner', 'high-protein', 'low-carb'],
    ingredients: [
      { productId: 'bellPepper', amount: 2 },
      { productId: 'groundTurkey', amount: 200 },
      { productId: 'quinoa', amount: 100 },
      { productId: 'tomatoSauce', amount: 50 },
      { productId: 'mozzarellaCheese', amount: 30 }
    ],
    description: '美味的彩椒盅，富含蛋白质和蔬菜',
    prepTime: 20,
    cookTime: 35,
    calories: 380
  },
  {
    id: 'zucchini_noodles_pesto',
    name: '西葫芦面配青酱',
    tags: ['dinner', 'low-carb', 'vegetarian'],
    ingredients: [
      { productId: 'zucchini', amount: 300 },
      { productId: 'basilPesto', amount: 30 },
      { productId: 'cherryTomato', amount: 100 },
      { productId: 'pineNuts', amount: 15 },
      { productId: 'parmesanCheese', amount: 20 }
    ],
    description: '低碳水的面条替代品，美味无负担',
    prepTime: 15,
    cookTime: 5,
    calories: 250
  },
  {
    id: 'miso_salmon_bowl',
    name: '味噌三文鱼饭',
    tags: ['dinner', 'high-protein', 'omega-3'],
    ingredients: [
      { productId: 'salmon', amount: 180 },
      { productId: 'brownRice', amount: 120 },
      { productId: 'edamame', amount: 100 },
      { productId: 'carrot', amount: 50 },
      { productId: 'misoSauce', amount: 20 }
    ],
    description: '日式风味三文鱼饭，富含健康脂肪',
    prepTime: 20,
    cookTime: 25,
    calories: 520
  },
  {
    id: 'protein_pancakes',
    name: '高蛋白松饼',
    tags: ['breakfast', 'high-protein', 'post-workout'],
    ingredients: [
      { productId: 'oatmeal', amount: 50 },
      { productId: 'wheyProtein', amount: 30 },
      { productId: 'egg', amount: 50 },
      { productId: 'banana', amount: 50 },
      { productId: 'mapleSyrup', amount: 10 }
    ],
    description: '高蛋白的早餐松饼，健身爱好者首选',
    prepTime: 10,
    cookTime: 15,
    calories: 350
  },
  {
    id: 'beef_broccoli_stir_fry',
    name: '西兰花牛肉炒',
    tags: ['dinner', 'high-protein', 'iron-rich'],
    ingredients: [
      { productId: 'beef', amount: 180 },
      { productId: 'broccoli', amount: 200 },
      { productId: 'brownRice', amount: 120 },
      { productId: 'garlic', amount: 10 },
      { productId: 'soySauce_light', amount: 15 }
    ],
    description: '经典的中式炒菜，富含铁质和蛋白质',
    prepTime: 20,
    cookTime: 15,
    calories: 480
  }
];

// 添加一些额外的产品（如果在PRODUCTS中没有的话）
// 这些是食谱中用到但之前没有定义的产品
export const additionalProducts = {
  almondButter: {
    id: 'almondButter',
    name: '杏仁酱',
    category: 'condiment',
    nutrition: { carbs: 20, sugar: 3, sodium: 0, energy: 614 },
    unit: 'g',
    riskFlags: []
  },
  granola: {
    id: 'granola',
    name: '格兰诺拉麦片',
    category: 'carb',
    nutrition: { carbs: 64, sugar: 24, sodium: 26, energy: 471 },
    unit: 'g',
    riskFlags: ['highSugar']
  },
  lemonJuice: {
    id: 'lemonJuice',
    name: '柠檬汁',
    category: 'condiment',
    nutrition: { carbs: 6.9, sugar: 2.5, sodium: 1, energy: 22 },
    unit: 'g',
    riskFlags: []
  },
  soySauce_light: {
    id: 'soySauce_light',
    name: '低盐酱油',
    category: 'condiment',
    nutrition: { carbs: 8, sugar: 5, sodium: 3000, energy: 53 },
    unit: 'g',
    riskFlags: []
  },
  fetaCheese: {
    id: 'fetaCheese',
    name: '菲达奶酪',
    category: 'dairy',
    nutrition: { carbs: 4.1, sugar: 4.1, sodium: 1116, energy: 264 },
    unit: 'g',
    riskFlags: ['highSodium']
  },
  celery: {
    id: 'celery',
    name: '芹菜',
    category: 'veg',
    nutrition: { carbs: 3, sugar: 1.3, sodium: 80, energy: 16 },
    unit: 'g',
    riskFlags: []
  },
  mixedGreens: {
    id: 'mixedGreens',
    name: '混合蔬菜叶',
    category: 'veg',
    nutrition: { carbs: 3.6, sugar: 0.9, sodium: 40, energy: 20 },
    unit: 'g',
    riskFlags: []
  },
  wholeWheatWrap: {
    id: 'wholeWheatWrap',
    name: '全麦卷饼',
    category: 'carb',
    nutrition: { carbs: 45, sugar: 2, sodium: 400, energy: 280 },
    unit: '个',
    riskFlags: []
  },
  tzatzikiSauce: {
    id: 'tzatzikiSauce',
    name: '希腊酸奶黄瓜酱',
    category: 'condiment',
    nutrition: { carbs: 3.3, sugar: 3.2, sodium: 300, energy: 59 },
    unit: 'g',
    riskFlags: []
  },
  chickpeas: {
    id: 'chickpeas',
    name: '鹰嘴豆',
    category: 'protein',
    nutrition: { carbs: 61, sugar: 10.7, sodium: 24, energy: 364 },
    unit: 'g',
    riskFlags: []
  },
  tahini: {
    id: 'tahini',
    name: '芝麻酱',
    category: 'condiment',
    nutrition: { carbs: 21, sugar: 0.5, sodium: 115, energy: 595 },
    unit: 'g',
    riskFlags: []
  },
  tuna: {
    id: 'tuna',
    name: '金枪鱼',
    category: 'protein',
    nutrition: { carbs: 0, sugar: 0, sodium: 50, energy: 132 },
    unit: 'g',
    riskFlags: []
  },
  sushiRice: {
    id: 'sushiRice',
    name: '寿司米',
    category: 'carb',
    nutrition: { carbs: 77, sugar: 0.1, sodium: 5, energy: 370 },
    unit: 'g',
    riskFlags: []
  },
  almondMilk: {
    id: 'almondMilk',
    name: '杏仁奶',
    category: 'dairy',
    nutrition: { carbs: 1, sugar: 0, sodium: 150, energy: 15 },
    unit: '100ml',
    riskFlags: []
  },
  chiaSeeds: {
    id: 'chiaSeeds',
    name: '奇亚籽',
    category: 'seed',
    nutrition: { carbs: 42, sugar: 0, sodium: 16, energy: 486 },
    unit: 'g',
    riskFlags: []
  },
  groundTurkey: {
    id: 'groundTurkey',
    name: '火鸡肉末',
    category: 'protein',
    nutrition: { carbs: 0, sugar: 0, sodium: 70, energy: 149 },
    unit: 'g',
    riskFlags: []
  },
  tomatoSauce: {
    id: 'tomatoSauce',
    name: '番茄酱（无糖）',
    category: 'condiment',
    nutrition: { carbs: 4.8, sugar: 3.5, sodium: 430, energy: 24 },
    unit: 'g',
    riskFlags: []
  },
  mozzarellaCheese: {
    id: 'mozzarellaCheese',
    name: '马苏里拉奶酪',
    category: 'dairy',
    nutrition: { carbs: 3.1, sugar: 1, sodium: 373, energy: 300 },
    unit: 'g',
    riskFlags: []
  },
  zucchini: {
    id: 'zucchini',
    name: '西葫芦',
    category: 'veg',
    nutrition: { carbs: 3.1, sugar: 2.5, sodium: 8, energy: 17 },
    unit: 'g',
    riskFlags: []
  },
  basilPesto: {
    id: 'basilPesto',
    name: '罗勒青酱',
    category: 'condiment',
    nutrition: { carbs: 5.8, sugar: 0.7, sodium: 426, energy: 496 },
    unit: 'g',
    riskFlags: ['highSodium']
  },
  cherryTomato: {
    id: 'cherryTomato',
    name: '小番茄',
    category: 'veg',
    nutrition: { carbs: 3.9, sugar: 2.6, sodium: 5, energy: 18 },
    unit: 'g',
    riskFlags: []
  },
  pineNuts: {
    id: 'pineNuts',
    name: '松子',
    category: 'nut',
    nutrition: { carbs: 13, sugar: 3.6, sodium: 2, energy: 673 },
    unit: 'g',
    riskFlags: []
  },
  parmesanCheese: {
    id: 'parmesanCheese',
    name: '帕玛森奶酪',
    category: 'dairy',
    nutrition: { carbs: 3.2, sugar: 0.8, sodium: 1529, energy: 431 },
    unit: 'g',
    riskFlags: ['highSodium']
  },
  edamame: {
    id: 'edamame',
    name: '毛豆',
    category: 'protein',
    nutrition: { carbs: 9.9, sugar: 2.2, sodium: 6, energy: 122 },
    unit: 'g',
    riskFlags: []
  },
  misoSauce: {
    id: 'misoSauce',
    name: '味噌酱',
    category: 'condiment',
    nutrition: { carbs: 25, sugar: 6, sodium: 3728, energy: 199 },
    unit: 'g',
    riskFlags: ['highSodium']
  },
  mapleSyrup: {
    id: 'mapleSyrup',
    name: '枫糖浆',
    category: 'condiment',
    nutrition: { carbs: 67, sugar: 60, sodium: 12, energy: 260 },
    unit: 'g',
    riskFlags: ['highSugar']
  },
  garlic: {
    id: 'garlic',
    name: '大蒜',
    category: 'veg',
    nutrition: { carbs: 33, sugar: 1, sodium: 17, energy: 149 },
    unit: 'g',
    riskFlags: []
  }
};

export function calcCarbsForRecipe(recipe) {
  return recipe.ingredients.reduce((sum, ing) => {
    const p = PRODUCTS[ing.productId]
    if (!p) return sum
    const ratio = ing.amount / 100
    return sum + p.nutrition.carbs * ratio
  }, 0)
}

