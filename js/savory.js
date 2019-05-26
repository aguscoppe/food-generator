const btn = document.getElementById("savory-start");
const randomResult = document.getElementById("savory-empty");

class Food {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

const foodArray = [
  new Food("Bacon cheeseburger", "burger"),
  new Food("Macaroni and Cheese", "mac"),
  new Food("Chicken nuggets", "nuggets"),
  new Food("Spaghetti in tomato sauce", "spaghetti"),
  new Food("Caesar salad", "caesar"),
  new Food("Pizza", "pizza"),
  new Food("Grilled steak", "steak"),
  new Food("Mashed potatoes", "mashed"),
  new Food("Tacos", "tacos"),
  new Food("Ramen", "ramen"),
  new Food("Sushi", "sushi"),
  new Food("Lasagna", "lasagna"),
  new Food("Mozzarella sticks", "sticks"),
  new Food("Grilled cheese", "grilled"),
  new Food("Fajitas", "fajitas"),
  new Food("Nachos", "nachos"),
  new Food("Chicken wings", "wings"),
  new Food("Barbecue ribs", "ribs"),
  new Food("Roast turkey", "turkey"),
  new Food("Baked shrimp", "shrimp"),
  new Food("Greek salad", "greek")
];

btn.addEventListener("click", getFood);

function getFood(e) {
  let foodResult = foodArray[Math.floor(Math.random() * foodArray.length)];

  randomResult.innerHTML = `<div class="food-box food-size" 
  id=${foodResult.code}></div>
  <p>${foodResult.name}</p>`;
}
