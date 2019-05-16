//variables for sweet start btn & empty div
var sweetBtn = document.getElementById("sweet-start");
var randomSweetResult = document.getElementById("sweet-empty");

//variable with sweet food array
var sweetFood = [
  {
    name: "Ice cream",
    code: "icecream"
  },
  {
    name: "Apple pie",
    code: "applepie"
  },
  {
    name: "Brownies",
    code: "brownies"
  },
  {
    name: "Chocolate cake",
    code: "chococake"
  },
  {
    name: "Cupcakes",
    code: "cupcakes"
  },
  {
    name: "Chocolate chip cookies",
    code: "cookies"
  },
  {
    name: "Cinnamon bun",
    code: "bun"
  },
  {
    name: "Milkshake",
    code: "milkshake"
  },
  {
    name: "Doughnuts",
    code: "donut"
  },
  {
    name: "Popcorn",
    code: "popcorn"
  },
  {
    name: "Cheesecake",
    code: "cheesecake"
  },
  {
    name: "Blueberry pancakes",
    code: "pancakes"
  },
  {
    name: "Hot cakes",
    code: "hotcakes"
  },
  {
    name: "Cotton candy",
    code: "cotton"
  },
  {
    name: "S'mores dip",
    code: "smores"
  },
  {
    name: "Waffles",
    code: "waffles"
  },
  {
    name: "Churros",
    code: "churros"
  },
  {
    name: "Strawberries and whipped cream",
    code: "strawberries"
  },
  {
    name: "Ice cream sandwich",
    code: "icecreamsandwich"
  },
  {
    name: "Fruit salad",
    code: "fruitsalad"
  },
  {
    name: "Lemon pie",
    code: "lemonpie"
  }
];

// calling event on click
sweetBtn.addEventListener("click", getSweetFood);

// creating function to get random sweet food
function getSweetFood(e) {
  // var that holds result from array
  var sweetFoodResult = sweetFood[Math.floor(Math.random() * sweetFood.length)];

  // changing inner html of empty div to get food image
  randomSweetResult.innerHTML = `<div class="food-box food-size" id=${
    sweetFoodResult.code
  }></div><p>${sweetFoodResult.name}</p>`;
}
