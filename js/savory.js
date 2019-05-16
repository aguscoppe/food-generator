//variables for savory start btn & empty div
var savoryBtn = document.getElementById("savory-start");
var randomSavoryResult = document.getElementById("savory-empty");

//variable with savory food array
var savoryFood = [
  {
    name: "Bacon cheeseburger",
    code: "burger"
  },
  {
    name: "Macaroni and Cheese",
    code: "mac"
  },
  {
    name: "Chicken nuggets",
    code: "nuggets"
  },
  {
    name: "Spaghetti in tomato sauce",
    code: "spaghetti"
  },
  {
    name: "Caesar salad",
    code: "caesar"
  },
  {
    name: "Pizza",
    code: "pizza"
  },
  {
    name: "Grilled steak",
    code: "steak"
  },
  {
    name: "Mashed potatoes",
    code: "mashed"
  },
  {
    name: "Tacos",
    code: "tacos"
  },
  {
    name: "Ramen",
    code: "ramen"
  },
  {
    name: "Sushi",
    code: "sushi"
  },
  {
    name: "Lasagna",
    code: "lasagna"
  },
  {
    name: "Mozzarella sticks",
    code: "sticks"
  },
  {
    name: "Grilled cheese",
    code: "grilled"
  },
  {
    name: "Fajitas",
    code: "fajitas"
  },
  {
    name: "Nachos",
    code: "nachos"
  },
  {
    name: "Chicken wings",
    code: "wings"
  },
  {
    name: "Barbecue ribs",
    code: "ribs"
  },
  {
    name: "Roast turkey",
    code: "turkey"
  },
  {
    name: "Baked shrimp",
    code: "shrimp"
  },
  {
    name: "Greek salad",
    code: "greek"
  }
];

// calling event on click
savoryBtn.addEventListener("click", getSavoryFood);

// creating function to get random savory food
function getSavoryFood(e) {
  // var that holds result from array
  var savoryFoodResult =
    savoryFood[Math.floor(Math.random() * savoryFood.length)];

  console.log(savoryFoodResult);
  // changing inner html of empty div to get food image
  randomSavoryResult.innerHTML = `<div class="food-box food-size" id=${
    savoryFoodResult.code
  }></div><p>${savoryFoodResult.name}</p>`;
}
