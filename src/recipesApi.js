const RecipesApi = {
  /*     recipes: [
        {id: '1', title:'Recipe 1',tp:'10 minutes', sv:'3 pessoas', ingredients:[{name:'ingr 1',amount:'3',unit:'cups'},{name:'salt',amount:',unit:'at will'}],url:'/cookbook.gif',instructions:'Instructions for Recipe 1'},
        {id: '2', title:'Recipe 2',tp:'15 minutes', sv:'3 pessoas', ingredients:[{name:'ingr 2',amount:'3',unit:'grams'},{name:'salt',amount:',unit:'at will'}],url:'/cookbook.gif',instructions:'Instructions for Recipe 2'},
        {id: '3', title:'Recipe 3',tp:'25 minutes', sv:'3 pessoas', ingredients:[{name:'salt',amount:',unit:'at will'}],url:'/cookbook.gif',instructions:'Instructions for Recipe 3'},
        {id: '4', title:'Recipe 4',tp:'28 minutes', sv:'8 pessoas', ingredients:[{name:'ingr 1',amount:'5',unit:'cups'},{name:'salt',amount:',unit:'at will'}],url:'/cookbook.gif',instructions:'Instructions for Recipe 3'}
    ]
  */
  recipes: [
    {
      id: '10',
      title: 'Crock Pot Roast',
      ingredients: [
        {'id': 1, 'amount': '1', 'name': ' beef roast', 'unit': 'Unit'},
        {'id': 2, 'amount': '1', 'name': 'brown gravy mix', 'unit': 'Package'},
        {'id': 3, 'amount': '1', 'name': 'dried Italian salad dressing mix', 'unit': 'Package'},
        {'id': 4, 'amount': '1', 'name': 'dry ranch dressing mix', 'unit': 'Package'},
        {'id': 5, 'amount': '1/2', 'name': 'water', 'unit': 'Cups'}
      ],
      instructions:
        'Place beef roast in crock pot.\n Mix the dried mixes together in a bowl and sprinkle over the roast.\n Pour the water around the roast.\n Cook on low for 7-9 hours.',
      sv: '10 people',
      tp: '10 minutes',
      url: '/cookbook.gif'
    },
    {
      id: '11',
      title: 'Roasted Asparagus',
      ingredients: [
        {'id': 6, 'amount': '1 ', 'name': ' asparagus', 'unit': 'lb'},
        {'id': 7, 'amount': '1 1/2', 'name': 'olive oil', 'unit': 'Tbsp'},
        {'id': 8, 'amount': '1/2', 'name': 'kosher salt', 'unit': 'Tbsp'}
      ],
      instructions:
        'Preheat oven to 425°F.\n Cut off the woody bottom part of the asparagus spears and discard.\n With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.\',string.\', and if you eat asparagus you know what I mean by that).\n Place asparagus on foil-lined baking sheet and drizzle with olive oil.\n Sprinkle with salt.\n With your hands, roll the asparagus around until they are evenly coated with oil and salt.\n Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.\n They should be tender when pierced with the tip of a knife.\n The tips of the spears will get very brown but watch them to prevent burning.\n They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal.',
      sv: '10 people',
      tp: '10 minutes',
      url: '/cookbook.gif'
    },
    {
      id: '12',
      title: 'Curried Lentils and Rice',
      ingredients: [
        {'id': 9, 'amount': '1/4', 'name': 'beef broth', 'unit': 'Unit'},
        {'id': 10, 'amount': '1', 'name': 'dried green lentils', 'unit': 'Cups'},
        {'id': 11, 'amount': '1/2', 'name': 'basmati rice', 'unit': 'Cups'},
        {'id': 12, 'amount': '1', 'name': 'curry powder', 'unit': 'Tsp'},
        {'id': 13, 'amount': '1', 'name': 'salt', 'unit': 'Tsp'}
      ],
      instructions:
          'Bring broth to a low boil.\n Add curry powder and salt.\n Cook lentils for 20 minutes.\n Add rice and simmer for 20 minutes.\n Enjoy!',
      sv: '10 people',
      tp: '10 minutes',
      url: '/cookbook.gif'
    },
    {
      id: '13',
      title: 'Big Night Pizza',
      ingredients: [
        {'id': 14, 'amount': '5 teaspoons', 'name': 'yeast', 'unit': 'Baking'},
        {'id': 15, 'amount': '5 cups', 'name': 'flour', 'unit': 'Baking'},
        {'id': 16, 'amount': '4 tablespoons', 'name': 'vegetable oil', 'unit': 'Baking'},
        {'id': 17, 'amount': '2 tablespoons', 'name': 'sugar', 'unit': 'Baking'},
        {'id': 18, 'amount': '2 teaspoons', 'name': 'salt', 'unit': 'Baking'},
        {'id': 19, 'amount': '2 cups', 'name': 'hot water', 'unit': 'Misc'},
        {'id': 20, 'amount': '1/4 cup', 'name': 'pizza sauce', 'unit': 'Misc'},
        {'id': 21, 'amount': '3/4 cup', 'name': 'mozzarella cheese', 'unit': 'Dairy'}
      ],
      instructions:
        'Add hot water to yeast in a large bowl and let sit for 15 minutes.\n Mix in oil, sugar, salt, and flour and let sit for 1 hour.\n Knead the dough and spread onto a pan.\n Spread pizza sauce and sprinkle cheese.\n Add any optional toppings as you wish.\n Bake at 400 deg Fahrenheit for 15 minutes.\n Enjoy!',
      sv: '10 people',
      tp: '10 minutes',
      url: '/cookbook.gif'
    },
    {
      id: '14',
      title: 'Cranberry and Apple Stuffed Acorn Squash Recipe',
      ingredients: [
        {'id': 22, 'amount': '2', 'name': 'acorn squash', 'unit': 'Produce'},
        {'id': 23, 'amount': '1', 'name': 'boiling water', 'unit': 'Drinks'},
        {'id': 24, 'amount': '2', 'name': 'apples chopped into 1.4 inch pieces', 'unit': 'Produce'},
        {'id': 25, 'amount': '1/2 cup', 'name': 'dried cranberries', 'unit': 'Produce'},
        {'id': 26, 'amount': '1 teaspoon', 'name': 'cinnamon', 'unit': 'Baking'},
        {'id': 27, 'amount': '2 tablespoons', 'name': 'melted butter', 'unit': 'Dairy'}
      ],
      instructions:
        'Cut squash in half, remove seeds.\n Place squash in baking dish, cut-side down.\n Pour 1/4-inch water into dish.\n Bake for 30 minutes at 350 degrees F.\n In large bowl, combine remaining ingredients.\n Remove squash from oven, fill with mix.\n Bake for 30-40 more minutes, until squash tender.\n Enjoy!',
      sv: '10 people',
      tp: '10 minutes',
      url: '/cookbook.gif'
    },
    {
      id: '15',
      title: 'Mic\'s Yorkshire Puds',
      ingredients: [
        {'id': 28, 'amount': '200g', 'name': 'plain flour', 'unit': 'Baking'},
        {'id': 29, 'amount': '3', 'name': 'eggs', 'unit': 'Dairy'},
        {'id': 30, 'amount': '300ml', 'name': 'milk', 'unit': 'Dairy'},
        {'id': 31, 'amount': '3 tbsp', 'name': 'vegetable oil', 'unit': 'Condiments'}
      ],
      instructions:
        'Put the flour and some seasoning into a large bowl.\n Stir in eggs, one at a time.\n Whisk in milk until you have a smooth batter.\n Chill in the fridge for at least 30 minutes.\n Heat oven to 220C/gas mark 7.\n Pour the oil into the holes of a 8-hole muffin tin.\n Heat tin in the oven for 5 minutes.\n Ladle the batter mix into the tin.\n Bake for 30 minutes until well browned and risen.',
      sv: '10 people',
      tp: '10 minutes',
      url: '/cookbook.gif'
    },
    {
      id: '16',
      title: 'Old-Fashioned Oatmeal Cookies',
      ingredients: [
        {'id': 32, 'amount': '1 cup', 'name': 'raisins', 'unit': 'Produce'},
        {'id': 33, 'amount': '1', 'name': 'cup water', 'unit': 'Drinks'},
        {'id': 34, 'amount': '3/4 cup', 'name': 'shortening', 'unit': 'Baking'},
        {'id': 35, 'amount': '1 1/2 cups', 'name': 'sugar', 'unit': 'Baking'},
        {'id': 36, 'amount': '2 1/2 cups', 'name': 'flour', 'unit': 'Baking'},
        {'id': 37, 'amount': '1 tsp.', 'name': 'soda', 'unit': 'Baking'},
        {'id': 38, 'amount': '1 tsp.', 'name': 'salt', 'unit': 'Baking'},
        {'id': 39, 'amount': '1 tsp.', 'name': 'cinnamon', 'unit': 'Baking'},
        {'id': 40, 'amount': '1/2 tsp.', 'name': 'baking powder', 'unit': 'Baking'},
        {'id': 41, 'amount': '1/2 tsp.', 'name': 'cloves', 'unit': 'Baking'},
        {'id': 42, 'amount': '2 cups', 'name': 'oats', 'unit': 'Baking'},
        {'id': 43, 'amount': '1/2 cup', 'name': 'chopped nuts', 'unit': 'Baking'}
      ],
      instructions:
        'Simmer raisins and water over medium heat until raisins are plump, about 15 minutes.\n Drain raisins, reserving the liquid.\n Add enough water to reserved liquid to measure 1/2 cup.\n Heat oven to 400°.\n Mix thoroughly shortening, sugar, eggs and vanilla.\n Stir in reserved liquid.\n Blend in remaining ingredients.\n Drop dough by rounded teaspoonfuls about 2 inches apart onto ungreased baking sheet.\n Bake 8 to 10 minutes or until light brown.\n About 6 1/2 dozen cookies.',
      sv: '10 people',
      tp: '10 minutes',
      url: '/cookbook.gif'
    },
    {
      id: '17',
      title: 'Blueberry Oatmeal Squares',
      ingredients: [
        {'id': 44, 'amount': '2-1/2 cups', 'name': 'rolled oats, (not instant)', 'unit': 'Baking'},
        {'id': 45, 'amount': '1-1/4 cups', 'name': 'all-purpose flour', 'unit': 'Baking'},
        {'id': 46, 'amount': '1 tbsp', 'name': 'grated orange rind', 'unit': 'Produce'},
        {'id': 47, 'amount': '1/4 tsp', 'name': 'salt', 'unit': 'Baking'},
        {'id': 48, 'amount': '1 cup', 'name': 'cold butter, cubed', 'unit': 'Baking'},
        {'id': 49, 'amount': '3/4 cup', 'name': 'packed brown sugar', 'unit': 'Baking'},
        {'id': 50, 'amount': '3 cups', 'name': 'fresh blueberries', 'unit': 'Produce'},
        {'id': 51, 'amount': '1/2 cup', 'name': 'granulated sugar', 'unit': 'Baking'},
        {'id': 52, 'amount': '1/3 cup', 'name': 'orange juice', 'unit': 'Produce'},
        {'id': 53, 'amount': '4 tsp', 'name': 'cornstarch', 'unit': 'Baking'}
      ],
      instructions:
          'Filling: In saucepan, bring blueberries, sugar and orange juice to boil; reduce heat and simmer until tender, about 10 minutes.\n Whisk cornstarch with 2 tbsp (25 mL) water; whisk into blueberries and boil, stirring, until thickened, about 1 minute.\n Place plastic wrap directly on surface; refrigerate until cooled, about 1 hour.\n In large bowl, whisk together oats, flour, sugar, orange rind and salt ; with pastry blender, cut in butter until in coarse crumbs.\n Press half into 8-inch (2 L) square parchment paper–lined metal cake pan; spread with blueberry filling.\n Bake in centre of 350°F oven until light golden, about 45 minutes.\n Let cool on rack before cutting into squares.\n Make-ahead: Cover and refrigerate for up to 2 days or overwrap with heavy-duty foil and freeze for up to 2 weeks.)',
      sv: '10 people',
      tp: '10 minutes',
      url: '/cookbook.gif'
    },
    {
      id: '18',
      title: 'Curried chicken salad',
      ingredients: [
        {'id': 54, 'amount': '3', 'name': 'skinless, boneless chicken breasts, halved lengthwise', 'unit': 'Meat'},
        {'id': 55, 'amount': '1/2 cup', 'name': 'mayonnaise', 'unit': 'Baking'},
        {'id': 56, 'amount': '1 tbsp', 'name': 'lemon zest', 'unit': 'Produce'},
        {'id': 57, 'amount': '1 tbsp ', 'name': 'lemon juice', 'unit': 'Produce'},
        {'id': 58, 'amount': '1 1/2 tsp', 'name': 'curry powder', 'unit': 'Baking'},
        {'id': 59, 'amount': '1/4 tsp', 'name': 'salt', 'unit': 'Baking'},
        {'id': 60, 'amount': '2', 'name': 'ripe mangoes, diced', 'unit': 'Produce'},
        {'id': 61, 'amount': '1/4 cup', 'name': 'dried cranberries', 'unit': 'Produce'},
        {'id': 62, 'amount': '2', 'name': 'green onions, thinly sliced', 'unit': 'Produce'},
        {'id': 63, 'amount': '1', 'name': 'celery stalk, finely chopped', 'unit': 'Produce'},
        {'id': 64, 'amount': '6 leaves', 'name': 'Boston lettuce', 'unit': 'Produce'},
        {'id': 65, 'amount': '6', 'name': 'English muffins, toasted', 'unit': 'Misc'}
      ],
      instructions:
        'ARRANGE chicken in a single layer in a large pot.\n Add water to just cover.\n Bring to a boil over medium-high.\n Flip chicken, reduce heat to medium and simmer until cooked, about 6 more min.\n Cool.\n STIR mayo with lemon zest, juice, curry and salt in large bowl.\n Using 2 forks, shred chicken, then stir into mayo mixture with mango, cranberries, green onions and celery.\n Divide among muffins with lettuce leaves\n Sandwich with tops',
      sv: '10 people',
      tp: '10 minutes',
      url: '/cookbook.gif'
    },
    {id: '1', title: 'Recipe 1', tp: '10 minutes', sv: '3 pessoas', ingredients: [{'id': 66, name: 'ingr 1', amount: '3', unit: 'cups'}, {'id': 70, name: 'salt', amount: '1', unit: 'at will'}], url: '/cookbook.gif', instructions: 'Instructions for Recipe 1'},
    {id: '2', title: 'Recipe 2', tp: '15 minutes', sv: '3 pessoas', ingredients: [{'id': 67, name: 'ingr 2', amount: '3', unit: 'grams'}, {'id': 71, name: 'salt', amount: '1', unit: 'at will'}], url: '/cookbook.gif', instructions: 'Instructions for Recipe 2'},
    {id: '3', title: 'Recipe 3', tp: '25 minutes', sv: '3 pessoas', ingredients: [{'id': 68, name: 'salt', amount: '1', unit: 'at will'}], url: '/cookbook.gif', instructions: 'Instructions for Recipe 3'},
    {id: '4', title: 'Recipe 4', tp: '28 minutes', sv: '8 pessoas', ingredients: [{'id': 69, name: 'ingr 1', amount: '5', unit: 'cups'}, {'id': 72, name: 'salt', amount: '1', unit: 'at will'}], url: '/cookbook.gif', instructions: 'Instructions for Recipe 3'}

  ],
  all: function () { return this.recipes },
  get: function (id) {
    const isRecipe = p => p.id === id
    return this.recipes.find(isRecipe)
  },
  search: function (title) {
    if (!title) { return this.recipes }

    let result = []
    for (let i in this.recipes) {
      if (this.recipes[i].title.toUpperCase().indexOf(title.toUpperCase()) >= 0) {
        result.push(this.recipes[i])
      }
    }
    return result
  },
  add: function (recipe) {
    this.recipes.push(recipe)
    return recipe.id
  },
  getMaxIngredientId: function () {
    return 72
  }
}

export default RecipesApi
