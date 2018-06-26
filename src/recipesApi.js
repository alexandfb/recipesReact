const RecipesApi = {
 /* 	recipes: [
    	{id: "1", title:"Recipe 1",tp:"10 minutes", sv:"3 pessoas", ingredients:[{name:"ingr 1",amount:"3",unit:"cups"},{name:"salt",amount:"",unit:"at will"}],url:"/cookbook.gif",instructions:"Instructions for Recipe 1"},
		{id: "2", title:"Recipe 2",tp:"15 minutes", sv:"3 pessoas", ingredients:[{name:"ingr 2",amount:"3",unit:"grams"},{name:"salt",amount:"",unit:"at will"}],url:"/cookbook.gif",instructions:"Instructions for Recipe 2"},
		{id: "3", title:"Recipe 3",tp:"25 minutes", sv:"3 pessoas", ingredients:[{name:"salt",amount:"",unit:"at will"}],url:"/cookbook.gif",instructions:"Instructions for Recipe 3"},
		{id: "4", title:"Recipe 4",tp:"28 minutes", sv:"8 pessoas", ingredients:[{name:"ingr 1",amount:"5",unit:"cups"},{name:"salt",amount:"",unit:"at will"}],url:"/cookbook.gif",instructions:"Instructions for Recipe 3"}
  	]
  */
  	recipes:[
    {
        id:"10",
        title: "Crock Pot Roast",
        ingredients: [
            {"amount": "1","name": " beef roast","unit": "Meat"},
            {"amount": "1 package", "name": "brown gravy mix","unit": "Baking" },
            {"amount": "1 package", "name": "dried Italian salad dressing mix", "unit": "Condiments"},
            {"amount": "1 package", "name": "dry ranch dressing mix","unit": "Condiments"   },
            {"amount": "1/2 cup",   "name": "water",    "unit": "Drinks" }
        ],
        instructions: 
            "Place beef roast in crock pot.\n Mix the dried mixes together in a bowl and sprinkle over the roast.\n Pour the water around the roast.\n Cook on low for 7-9 hours."
        ,
        sv: "10 people",
        tp: "10 minutes",
        url:"/cookbook.gif",
    },
    {
        id:"11",
        title: "Roasted Asparagus",
        ingredients: [
            {"amount": "1 lb","name": " asparagus","unit": "Produce"},
            {"amount": "1 1/2 tbsp","name": "olive oil","unit": "Condiments"},
            {"amount": "1/2 tsp","name": "kosher salt","unit": "Baking"}
        ],
        instructions: 
            "Preheat oven to 425°F.\n Cut off the woody bottom part of the asparagus spears and discard.\n With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.\",string.\", and if you eat asparagus you know what I mean by that).\n Place asparagus on foil-lined baking sheet and drizzle with olive oil.\n Sprinkle with salt.\n With your hands, roll the asparagus around until they are evenly coated with oil and salt.\n Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.\n They should be tender when pierced with the tip of a knife.\n The tips of the spears will get very brown but watch them to prevent burning.\n They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal."
        ,
        sv: "10 people",
        tp: "10 minutes",
        url:"/cookbook.gif",
    },
    {
        id:"12",
        title: "Curried Lentils and Rice",
        ingredients: [
            {"amount": "1 quart","name": "beef broth","unit": "Misc"},
            {"amount": "1 cup","name": "dried green lentils","unit": "Misc"},
            {"amount": "1/2 cup","name": "basmati rice","unit": "Misc"},
            {"amount": "1 tsp","name": "curry powder","unit": "Condiments"},
            {"amount": "1 tsp","name": "salt","unit": "Condiments"}
        ],
        instructions: 
            "Bring broth to a low boil.\n Add curry powder and salt.\n Cook lentils for 20 minutes.\n Add rice and simmer for 20 minutes.\n Enjoy!"
        ,
        sv: "10 people",
        tp: "10 minutes",
        url:"/cookbook.gif"
    },
    {
        id:"13",
        title: "Big Night Pizza",
        ingredients: [
            {"amount": "5 teaspoons","name": "yeast","unit": "Baking"},
            {"amount": "5 cups","name": "flour","unit": "Baking"},
            {"amount": "4 tablespoons","name": "vegetable oil","unit": "Baking"},
            {"amount": "2 tablespoons","name": "sugar","unit": "Baking"},
            {"amount": "2 teaspoons","name": "salt","unit": "Baking"},
            {"amount": "2 cups","name": "hot water","unit": "Misc"},
            {"amount": "1/4 cup","name": "pizza sauce","unit": "Misc"},
            {"amount": "3/4 cup","name": "mozzarella cheese","unit": "Dairy"}
        ],
        instructions: 
            "Add hot water to yeast in a large bowl and let sit for 15 minutes.\n Mix in oil, sugar, salt, and flour and let sit for 1 hour.\n Knead the dough and spread onto a pan.\n Spread pizza sauce and sprinkle cheese.\n Add any optional toppings as you wish.\n Bake at 400 deg Fahrenheit for 15 minutes.\n Enjoy!"
        ,
        sv: "10 people",
        tp: "10 minutes",
        url:"/cookbook.gif"
    },
    {
        id:"14",
        title: "Cranberry and Apple Stuffed Acorn Squash Recipe",
        ingredients: [
            {"amount": "2","name": "acorn squash","unit": "Produce"},
            {"amount": "1","name": "boiling water","unit": "Drinks"},
            {"amount": "2","name": "apples chopped into 1.4 inch pieces","unit": "Produce"},
            {"amount": "1/2 cup","name": "dried cranberries","unit": "Produce"},
            {"amount": "1 teaspoon","name": "cinnamon","unit": "Baking"},
            {"amount": "2 tablespoons","name": "melted butter","unit": "Dairy"}
        ],
        instructions: 
            "Cut squash in half, remove seeds.\n Place squash in baking dish, cut-side down.\n Pour 1/4-inch water into dish.\n Bake for 30 minutes at 350 degrees F.\n In large bowl, combine remaining ingredients.\n Remove squash from oven, fill with mix.\n Bake for 30-40 more minutes, until squash tender.\n Enjoy!"
        ,
        sv: "10 people",
        tp: "10 minutes",
        url:"/cookbook.gif",
    },
    {
        id:"15",
        title: "Mic's Yorkshire Puds",
        ingredients: [
            {"amount": "200g","name": "plain flour","unit": "Baking"},
            {"amount": "3","name": "eggs","unit": "Dairy"},
            {"amount": "300ml","name": "milk","unit": "Dairy"},
            {"amount": "3 tbsp","name": "vegetable oil","unit": "Condiments"}
        ],
        instructions: 
            "Put the flour and some seasoning into a large bowl.\n Stir in eggs, one at a time.\n Whisk in milk until you have a smooth batter.\n Chill in the fridge for at least 30 minutes.\n Heat oven to 220C/gas mark 7.\n Pour the oil into the holes of a 8-hole muffin tin.\n Heat tin in the oven for 5 minutes.\n Ladle the batter mix into the tin.\n Bake for 30 minutes until well browned and risen."
        ,
        sv: "10 people",
        tp: "10 minutes",
        url:"/cookbook.gif",
    },
    {
        id:"16",
        title: "Old-Fashioned Oatmeal Cookies",
        ingredients: [
            {"amount": "1 cup","name": "raisins","unit": "Produce"},
            {"amount": "1","name": "cup water","unit": "Drinks"},
            {"amount": "3/4 cup","name": "shortening","unit": "Baking"},
            {"amount": "1 1/2 cups","name": "sugar","unit": "Baking"},
            {"amount": "2 1/2 cups","name": "flour","unit": "Baking"},
            {"amount": "1 tsp.","name": "soda","unit": "Baking"},
            {"amount": "1 tsp.","name": "salt","unit": "Baking"},
            {"amount": "1 tsp.","name": "cinnamon","unit": "Baking"},
            {"amount": "1/2 tsp.","name": "baking powder","unit": "Baking"},
            {"amount": "1/2 tsp.","name": "cloves","unit": "Baking"},
            {"amount": "2 cups","name": "oats","unit": "Baking"},
            {"amount": "1/2 cup","name": "chopped nuts","unit": "Baking"}
        ],
        instructions: 
            "Simmer raisins and water over medium heat until raisins are plump, about 15 minutes.\n Drain raisins, reserving the liquid.\n Add enough water to reserved liquid to measure 1/2 cup.\n Heat oven to 400°.\n Mix thoroughly shortening, sugar, eggs and vanilla.\n Stir in reserved liquid.\n Blend in remaining ingredients.\n Drop dough by rounded teaspoonfuls about 2 inches apart onto ungreased baking sheet.\n Bake 8 to 10 minutes or until light brown.\n About 6 1/2 dozen cookies."
        ,
        sv: "10 people",
        tp: "10 minutes",
        url:"/cookbook.gif",
    },
    {
        id:"17",
        title: "Blueberry Oatmeal Squares",
        ingredients: [
            {"amount": "2-1/2 cups","name": "rolled oats, (not instant)","unit": "Baking"},
            {"amount": "1-1/4 cups","name": "all-purpose flour","unit": "Baking"},
            {"amount": "1 tbsp","name": "grated orange rind","unit": "Produce"},
            {"amount": "1/4 tsp","name": "salt","unit": "Baking"},
            {"amount": "1 cup","name": "cold butter, cubed","unit": "Baking"},
            {"amount": "3/4 cup","name": "packed brown sugar","unit": "Baking"},
            {"amount": "3 cups","name": "fresh blueberries","unit": "Produce"},
            {"amount": "1/2 cup","name": "granulated sugar","unit": "Baking"},
            {"amount": "1/3 cup","name": "orange juice","unit": "Produce"},
            {"amount": "4 tsp","name": "cornstarch","unit": "Baking"}
        ],
        instructions: 
            "Filling: In saucepan, bring blueberries, sugar and orange juice to boil; reduce heat and simmer until tender, about 10 minutes.\n Whisk cornstarch with 2 tbsp (25 mL) water; whisk into blueberries and boil, stirring, until thickened, about 1 minute.\n Place plastic wrap directly on surface; refrigerate until cooled, about 1 hour.\n In large bowl, whisk together oats, flour, sugar, orange rind and salt ; with pastry blender, cut in butter until in coarse crumbs.\n Press half into 8-inch (2 L) square parchment paper–lined metal cake pan; spread with blueberry filling.\n Bake in centre of 350°F oven until light golden, about 45 minutes.\n Let cool on rack before cutting into squares.\n Make-ahead: Cover and refrigerate for up to 2 days or overwrap with heavy-duty foil and freeze for up to 2 weeks.)"
        ,
        sv: "10 people",
        tp: "10 minutes",
        url:"/cookbook.gif",
    },
    {
        id:"18",
        title: "Curried chicken salad",
        ingredients: [
            {"amount": "3","name": "skinless, boneless chicken breasts, halved lengthwise","unit": "Meat"},
            {"amount": "1/2 cup","name": "mayonnaise","unit": "Baking"},
            {"amount": "1 tbsp","name": "lemon zest","unit": "Produce"},
            {"amount": "1 tbsp ","name": "lemon juice","unit": "Produce"},
            {"amount": "1 1/2 tsp","name": "curry powder","unit": "Baking"},
            {"amount": "1/4 tsp","name": "salt","unit": "Baking"},
            {"amount": "2","name": "ripe mangoes, diced","unit": "Produce"},
            {"amount": "1/4 cup","name": "dried cranberries","unit": "Produce"},
            {"amount": "2","name": "green onions, thinly sliced","unit": "Produce"},
            {"amount": "1","name": "celery stalk, finely chopped","unit": "Produce"},
            {"amount": "6 leaves","name": "Boston lettuce","unit": "Produce"},
            {"amount": "6","name": "English muffins, toasted","unit": "Misc"}
        ],
        instructions: 
            "ARRANGE chicken in a single layer in a large pot.\n Add water to just cover.\n Bring to a boil over medium-high.\n Flip chicken, reduce heat to medium and simmer until cooked, about 6 more min.\n Cool.\n STIR mayo with lemon zest, juice, curry and salt in large bowl.\n Using 2 forks, shred chicken, then stir into mayo mixture with mango, cranberries, green onions and celery.\n Divide among muffins with lettuce leaves\n Sandwich with tops"
        ,
        sv: "10 people",
        tp: "10 minutes",
        url:"/cookbook.gif",
    },
        {id: "1", title:"Recipe 1",tp:"10 minutes", sv:"3 pessoas", ingredients:[{name:"ingr 1",amount:"3",unit:"cups"},{name:"salt",amount:"",unit:"at will"}],url:"/cookbook.gif",instructions:"Instructions for Recipe 1"},
        {id: "2", title:"Recipe 2",tp:"15 minutes", sv:"3 pessoas", ingredients:[{name:"ingr 2",amount:"3",unit:"grams"},{name:"salt",amount:"",unit:"at will"}],url:"/cookbook.gif",instructions:"Instructions for Recipe 2"},
        {id: "3", title:"Recipe 3",tp:"25 minutes", sv:"3 pessoas", ingredients:[{name:"salt",amount:"",unit:"at will"}],url:"/cookbook.gif",instructions:"Instructions for Recipe 3"},
        {id: "4", title:"Recipe 4",tp:"28 minutes", sv:"8 pessoas", ingredients:[{name:"ingr 1",amount:"5",unit:"cups"},{name:"salt",amount:"",unit:"at will"}],url:"/cookbook.gif",instructions:"Instructions for Recipe 3"}
    
]


 ,
  	all: function() { return this.recipes},
  	get: function(id) {
    	const isRecipe = p => p.id === id
    	return this.recipes.find(isRecipe)
  	},
  	search: function(title) {
  		if (!title) {return this.recipes}
 		
    	let result = [];
    	for (let i in this.recipes) {    		
    	    if (this.recipes[i].title.toUpperCase().indexOf(title.toUpperCase()) >=0) {
    	        result.push(this.recipes[i]);
    	    }
    	}
    	return result;
  	},
    add: function(recipe){
        this.recipes.push(recipe);
        return recipe.id;
    }  	
}

export default RecipesApi;




