const recipes = [
  {
    name: "Carrot Pudding",
    category: "Desserts",
    image: "images/carrotpudding.jpeg",
    ingredients: [
      "1 kg grated carrots",
      "1 liter full-fat milk",
      "1 cup sugar",
      "1/4 cup ghee",
      "1/2 tsp cardamom powder",
      "Optional: saffron, chopped nuts"
    ],
    method: [
      "Heat ghee and sauté carrots until light brown.",
      "Add milk and cook until absorbed.",
      "Add sugar, cardamom, and saffron. Mix well.",
      "Cook until thickened. Serve garnished."
    ]
  },
  {
    name: "Overnight Oats",
    category: "Diet Foods",
    image: "images/overnightoats.jpeg",
    ingredients: [
      "½ cup oats",
      "Milk/curd",
      "Honey",
      "Chopped fruits and dry fruits"
    ],
    method: [
      "Mix oats, milk, and honey in a jar.",
      "Refrigerate overnight.",
      "Top with fruits and nuts in the morning."
    ]
  },
  {
    name: "Fruit Yogurt Parfait",
    category: "Desserts",
    image: "images/fruityogurtparfait.jpeg",
    ingredients: [
      "Curd",
      "Yogurt",
      "Honey",
      "Chopped fruits",
      "Granola or cornflakes",
    ],
    method: [
      "In a glass, layer yogurt, fruits, and granola",
      "Repeat layers and serve chilled."
    ]
  },
  {
    name: "Chocolate Energy Balls",
    category: "Desserts",
    image: "images/chocolateenergyballs.jpeg",
    ingredients: [
      "Dates",
      "Cocoa powder",
      "Oats",
      "Peanuts",
    ],
    method: [
      "Grind all together, make small balls.",
      "Refrigerate for 30 minutes.",
    ]
  },
  {
    name: "Rava Kesari",
    category: "Desserts",
    image: "images/ravakesari.jpeg",
    ingredients: [
      "Rava (semolina) - 1 cup",
      "sugar - 1 cup",
      "Water - 1 cup",
      "Ghee (clarified butter) - 1/2 cup",
      "Cardamom powder - 1/4 teaspoon",
      "Cashews and raisins - for garnishing"
    ],
    method: [
      "Roast rava in ghee un l light golden.",
      "Boil sugar and water to make a syrup.", 
      "Add syrup to roasted rava and mix well.",
      "Cook un l mixture thickens.",
      "Add cardamom powder and mix well.",
      "Garnish with cashews and raisins.",
      "Serve warm or at room temperature."
    ]
  },
  {
    name: "Oreo Chocolate pudding",
    category: "Desserts",
    image: "images/oreochocolatepudding.jpeg",
    ingredients: [
      "1 package of Oreo cookies (crushed)",
      "1 package of chocolate pudding mix",
      "1 cup of milk",
      "Whipped cream and extra Oreos for topping(optional)"
    ],
    method: [
      "In a bowl, mix pudding mix and milk until well combined.", 
      "Stir in crushed Oreos.",
    "Refrigerate until chilled.",
    "Top with whipped cream and extra Oreos (if using).",
    "Serve chilled and enjoy!"
    ]
  },
  {
    name: "Oats Pancakes",
    category: "Diet Foods",
    image: "images/oatspancake.jpeg",
    ingredients: [
      "Oats powder",
      "curd",
      "chopped veggies",
      "salt" 
    ],
    method: [
      "Make a batter and cook like dosa/pancake on a pan."
    ]
  },
  {
    name: "Aloo Frankie",
    category: "Diet Foods",
    image: "images/aloofrankieroll.jpeg",
    ingredients: [
      "Roti",
      "boiled potato",
       "onion",
       "spices",
       "green chutney"
    ],
    method: [
      " Mash potato with spices, spread on ro , roll and toast slightly.",
       "Serve with chutney."
    ]
  },
  {
    name: "Burrito Bowl",
    category: "Diet Foods",
    image: "images/burrittibwol.jpeg",
    ingredients: [
      "Rice",
      "rajma or chole",
      "salsa (or onion-tomato mix)", 
      "corn",
       "curd" 
    ],
    method: [
      " Arrange rice in a bowl, add toppings, drizzle curd or sauce.",
      "Serve with tortilla chips."
    ]
  },
  {
    name: "Veg Sandwich",
    category: "Snacks",
    image: "images/vegsandwich.jpeg",
    ingredients: [
      "2 slices of bread(whole wheat or white)",
      "1-2 tablespoons of butter or spread",
      "Filling ingredients (cucumber, tomato, lettuce, cheese, etc.)"
    ],
    method: [
      "Butter or spread one side of each bread slice.",
    "Layer the filling ingredients on one slice of bread.",
    "Top with the other slice of bread, bu er side up.",
    "Grill or toast the sandwich in a pan or toaster until golden brown.",
    "Serve hot and enjoy!"
    ]
  },
  {
    name: "Egg Muffins(Mini Omelettes Cups)",
    category: "Snacks",
    image: "images/eggmuffins.jpeg",
    ingredients: [
      " Eggs",
      "chopped veggies",
       "salt",
       "pepper" 
    ],
    method: [
      "Beat eggs, add veggies and spices.", 
    "Pour into greased muffin cups.", 
    "Bake 10–12 min (or steam in an idli maker)."
    ]
  },
  {
    name: "Garlic Bread",
    category: "Snacks",
    image: "images/garlicbread.jpeg",
    ingredients: [
      "Bread slices",
      "Butter",
       "Garlic",
       "Mixed herbs" 
    ],
    method: [
      "Mix butter with garlic and herbs.",
      "Spread on bread slices.",
        "Toast on a pan or in an oven until crispy." 
    ]
  },
  {
    name: "Mini Pizza with Bread",
    category: "Snacks",
    image: "images/minipizzawithbread.jpeg",
    ingredients: [
      "Bread slices",
      "Pizza Sauce(or ketchup)",
       "Cheese",
       "Toppings (veggies, pepperoni, etc.)" 
    ],
    method: [
      " Spread sauce on bread. ",
      "Add toppings & cheese..",
      "Toast on pan or oven ll cheese melts. " 
    ]
  },
  {
    name: "Chilli Cheese Toast",
    category: "Snacks",
    image: "images/chillicheesetoast.jpeg",
    ingredients: [
      "Bread ",
      "Chopped green chilies",
       "Grated Cheese",
       "Capsicum",
       "Butter",
       "salt"
    ],
    method: [
      "Spread cheese & toppings on bread",
      "Toast on a tawa or oven till golden.",
    ]
  },
  {
    name: "Masala Sweet Corn",
    category: "Snacks",
    image: "images/masadasweetcorn.jpeg",
    ingredients: [
      "Boiled corn ",
      "chaat masala",
       "lemon",
       "Butter",
    ],
    method: [
      "Mix everything and serve warm in a bowl."
    ]
  },
  {
    name: "Choco Sandwich",
    category: "Snacks",
    image: "images/chocosandwich.jpeg",
    ingredients: [
      "Bread ",
      "Nutella or chocolate spread"
    ],
    method: [
      "Spread chocolate, close with another bread, toast lightly. "
    ]
  },
  {
    name: "Momos(Quick Hack using Bread)",
    category: "Snacks",
    image: "images/momos.jpeg",
    ingredients: [
      "Bread slices",
      "mixed veg filling",
      "chutney or sauce for dipping"
    ],
    method: [
      "Flatten bread, fill with mix, fold into dumpling shape, steam for 5–7 min.",
      "Serve with chutney or sauce."
    ]
  },
  {
    name: "Chicken Sandwich",
    category: "Snacks",
    image: "images/chickensandwich.jpeg",
    ingredients: [
      "Cooked chicken breast ",
      "Bread slices ",
      "Lettuce", 
    "Tomato",
    "Cheese"
    ],
    method: [
    "Place cooked chicken on one bread slice.",
    "Add lettuce, tomato, and cheese (if using).", 
    "Top with another bread slice.",
    "Grill or toast until golden brown.",
    "Serve hot!"
    ]
  },
  {
    name: "Egg Noodles",
    category: "Main Course",
    image: "images/eggnoodles.jpeg",
    ingredients: [
      "2 cups all-purpose flour",
    "2 eggs",
    "1/4 tsp salt",
    "Water (as needed)"
    ],
    method: [
    "Mix flour and salt in a bowl.",
    "Make a well and add eggs.",
    "Gradually mix flour into eggs.",
    "Knead dough until smooth.",
    "Rest dough for 30 minutes.",
    "Roll out dough thinly.",
    "Cut into noodle shapes.",
    "Boil noodles in salted water until cooked.",
    "Drain and serve."
    ]
  },
  {
    name: "Chicken Noodles",
    category: "Main Course",
    image: "images/chickennoodles.jpeg",
    ingredients: [
      "1 lb boneless chicken breast or thighs",
    "1 cup noodles (egg noodles or rice noodles)",
    "2 cups chicken broth",
    "1 tbsp soy sauce",
    "1 tsp ginger, minced",
    "1 tsp garlic, minced",
    "Vegetables (optional): bell peppers, carrots, green onions"
  ],
    method: [
    "Cook noodles accordingly.",
    "Cook chicken with ginger, garlic, and soy sauce.",
    "Add chicken broth and bring to a simmer.",
    "Combine cooked noodles and chicken mixture.",
    "Add vegetables (if using) and stir-fry.",
    "Serve hot."
  ]
  },
  {
    name: "Falooda ",
    category: "Drinks",
    image: "images/faloodadrink.jpeg",
    ingredients: [
      "Rose syrup",
    "Milk (chilled)",
    "Soaked sabja (basil) seeds",
    "Cooked vermicelli",
    "Ice cream"
  ],
    method: [
    "In a tall glass, add rose syrup, soaked basil seeds, and cooked vermicelli.",
    "Pour chilled milk over the mixture.",
    "Top with a scoop of ice cream.",
    "Serve immediately."
  ]
  },
  {
    name: "Fruit Custard ",
    category: "Drinks",
    image: "images/fruitcustard.jpeg",
    ingredients: [
      "Milk",
    "Custard powder",
    "Sugar",
    "Cut fruits (apple, banana, grapes, etc.)"
  ],
    method: [
    "Prepare custard by mixing custard powder with milk and sugar.",
    "Cook the mixture until it thickens.",
    "Let the custard cool completely in the refrigerator.",
    "Before serving, mix in chopped fruits.",
    "Serve chilled."
  ]
  },
  {
    name: "Icecream Milkshake",
    category: "Drinks",
    image: "images/icecreammilkshake.jpeg",
    ingredients: [
      "Any ice cream (vanilla, chocolate, etc.)",
    "Milk",
    "Sugar or flavored syrup (optional)"
  ],
    method: [
    "Add ice cream, milk, and sugar/syrup to a blender.",
    "Blend until smooth and creamy.",
    "Serve chilled in a tall glass."
  ]
  },
  {
  name: "Lemon Mint Cooler",
  category: "Drinks",
  image: "images/lemonmintcooler.jpeg",
  ingredients: [
    "1 glass cold water",
    "1 tbsp lemon juice",
    "1 tbsp sugar (or honey)",
    "A few mint leaves"
  ],
  method: [
    "Add lemon juice and sugar to cold water.",
    "Stir well until sugar dissolves.",
    "Crush mint leaves lightly with your fingers and drop them in.",
    "Serve chilled!"
  ]
},
{
  name: "Banana Milkshake",
  category: "Drinks",
  image: "images/bananamilkshake.jpeg",
  ingredients: [
    "1 ripe banana",
    "1 glass cold milk",
    "1 tsp sugar (optional)"
  ],
  method: [
    "Cut the banana into pieces.",
    "Blend banana, milk, and sugar together until smooth.",
    "Pour into a glass and enjoy."
  ]
},
{
  name: "Iced Coffee",
  category: "Drinks",
  image: "images/icedcoffee.jpeg",
  ingredients: [
    "1 cup milk (cold)",
    "1 tsp instant coffee",
    "1–2 tsp sugar"
  ],
  method: [
    "Mix coffee and sugar in a small amount of hot water (2–3 tbsp).",
    "Add cold milk and stir well (or blend for frothy texture).",
    "Serve over ice cubes."
  ]
},
{
  name: "Chicken Fried Rice",
  category: "Main Course",
  image: "images/chickenfriedrice.jpeg",
  ingredients: [
    "2 cups cooked rice (cooled)",
    "200 g boneless chicken (small pieces)",
    "1 cup mixed vegetables (carrot, beans, capsicum)",
    "2 eggs (optional)",
    "2 tbsp soy sauce",
    "1 tbsp oil",
    "Salt, pepper"
  ],
  method: [
    "Heat oil, cook chicken pieces with salt and pepper. Keep aside.",
    "In the same pan, scramble eggs (optional).",
    "Add vegetables, stir fry for 2–3 min.",
    "Add rice, soy sauce, cooked chicken, mix well.",
    "Stir-fry on high heat for 2–3 min. Serve hot."
  ]
},
{
  name: "Chicken Curry with Rice",
  category: "Main Course",
  image: "images/chickencurrywithrice.jpeg",
  ingredients: [
    "500 g chicken pieces",
    "2 onions (chopped)",
    "2 tomatoes (chopped)",
    "1 tbsp ginger-garlic paste",
    "1 tsp turmeric",
    "1 tsp red chilli powder",
    "1 tsp garam masala",
    "Oil",
    "Salt"
  ],
  method: [
    "Heat oil, sauté onions till golden.",
    "Add ginger-garlic paste, cook 1 min.",
    "Add tomatoes and spices, cook till soft.",
    "Add chicken pieces, mix and cook for 5 min.",
    "Add 1–1.5 cups water, cover and cook till chicken is soft.",
    "Serve hot with steamed rice."
  ]
},
{
  name: "Paneer Butter Masala with Naan",
  category: "Main Course",
  image: "images/paneerbuttermasala.jpeg",
  ingredients: [
    "200 g paneer cubes",
    "2 tomatoes",
    "1 onion",
    "1 tsp ginger-garlic paste",
    "1 tsp red chilli powder",
    "½ tsp garam masala",
    "2 tbsp fresh cream or milk",
    "1 tbsp butter"
  ],
  method: [
    "Grind onion and tomatoes into a smooth paste.",
    "Heat butter, add paste and cook till oil separates.",
    "Add spices and little water.",
    "Add paneer cubes and cream.",
    "Cook for 5 minutes. Serve with naan or roti."
  ]
},
{
  name: "Vegetable Pulao",
  category: "Main Course",
  image: "images/vegetablepulao.jpeg",
  ingredients: [
    "1 cup basmati rice",
    "1 cup mixed vegetables (peas, carrot, beans)",
    "1 onion (sliced)",
    "1 tsp ginger-garlic paste",
    "1 bay leaf",
    "1 small piece cinnamon",
    "1 tsp garam masala"
  ],
  method: [
    "Heat oil, add bay leaf and cinnamon.",
    "Add onion and ginger-garlic paste, sauté.",
    "Add vegetables, salt, and garam masala.",
    "Add soaked rice and 2 cups water.",
    "Cook on low flame till rice is done."
  ]
},
{
  name: "Egg Curry with Chapati",
  category: "Main Course",
  image: "images/eggcurry.jpeg",
  ingredients: [
    "4 boiled eggs",
    "2 onions (chopped)",
    "2 tomatoes (chopped)",
    "1 tsp ginger-garlic paste",
    "1 tsp red chilli powder",
    "½ tsp turmeric",
    "1 tsp garam masala",
    "Oil",
    "Salt"
  ],
  method: [
    "Heat oil, sauté onions till golden.",
    "Add ginger-garlic paste and tomatoes, cook till soft.",
    "Add spices and 1 cup water.",
    "Cut boiled eggs in half and add.",
    "Simmer for 5 minutes. Serve with chapati."
  ]
},
{
  name: "Apple Pie",
  category: "Desserts",
  image: "images/applepie.jpeg",
  ingredients: [
    "2 cups all-purpose flour",
    "1 tsp salt",
    "1/2 cup cold butter, cut into small pieces",
    "1/4 cup ice water",
    "6–8 medium apples, peeled and sliced",
    "1/2 cup granulated sugar",
    "2 tbsp all-purpose flour",
    "1 tsp cinnamon",
    "1/4 tsp nutmeg"
  ],
  method: [
    "Preheat oven to 375°F (190°C).",
    "Make the crust: Mix flour and salt, add butter and ice water, and knead until smooth.",
    "Roll out crust and place in a pie dish.",
    "Fill with apple mixture: Mix apples, sugar, flour, cinnamon, and nutmeg.",
    "Top with another crust or crumb topping.",
    "Bake for 40–50 minutes or until golden brown."
  ]
},
{
  name: "Baked Oatcake",
  category: "Diet Foods",
  image: "images/bakedoatcake.jpeg",
  ingredients: [
    "2 cups rolled oats",
    "1/2 cup milk",
    "1/2 cup yogurt",
    "1 egg",
    "1/4 cup honey or maple syrup",
    "1/2 tsp baking powder",
    "Pinch of salt",
    "Optional: fruits, nuts, or spices"
  ],
  method: [
    "Preheat oven to 375°F (190°C).",
    "Mix oats, milk, yogurt, egg, honey, baking powder, and salt.",
    "Add optional ingredients (if using).",
    "Pour mixture into a greased baking dish.",
    "Bake for 20–25 minutes or until set.",
    "Serve warm."
  ]
},
{
  name: "Besan Toast",
  category: "Snacks",
  image: "images/besantoast.jpeg",
  ingredients: [
    "1 cup gram flour (besan)",
    "1/2 cup water",
    "1/4 tsp salt",
    "1/4 tsp baking soda (optional)",
    "1 tbsp oil or ghee",
    "2–3 slices of bread",
    "Chopped cilantro or green chilies (optional)"
  ],
  method: [
    "Mix besan, water, salt, and baking soda (if using) to form a smooth batter.",
    "Heat oil or ghee in a pan.",
    "Dip bread slices in the besan batter, coating both sides evenly.",
    "Place coated bread slices in the pan and cook until golden brown on both sides.",
    "Serve hot, garnished with cilantro or green chilies (if using)."
  ]
},
{
  name: "Moong Dal Khichdi",
  category: "Diet Foods",
  image: "images/moongdalkichdi.jpeg",
  ingredients: [
    "½ cup rice",
    "½ cup yellow moong dal",
    "1 tsp cumin seeds",
    "1 small tomato",
    "Turmeric",
    "Salt"
  ],
  method: [
    "Wash rice and dal.",
    "In a cooker, add dal, rice, tomato, turmeric, salt, and 3 cups water.",
    "Cook for 3–4 whistles.",
    "Serve hot. (No ghee if you want diet-friendly)"
  ]
}
];
