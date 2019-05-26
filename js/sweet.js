const btn = document.getElementById("sweet-start");
const randomResult = document.getElementById("sweet-empty");

class Food {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

const foodArray = [
  new Food("Ice cream", "icecream"),
  new Food("Apple pie", "applepie"),
  new Food("Brownies", "brownies"),
  new Food("Chocolate cake", "chococake"),
  new Food("Cupcakes", "cupcakes"),
  new Food("Chocolate chip cookies", "cookies"),
  new Food("Cinnamon bun", "bun"),
  new Food("Milkshake", "milkshake"),
  new Food("Doughnuts", "donut"),
  new Food("Popcorn", "popcorn"),
  new Food("Cheesecake", "cheesecake"),
  new Food("Blueberry pancakes", "pancakes"),
  new Food("Hot cakes", "hotcakes"),
  new Food("Cotton candy", "cotton"),
  new Food("S'mores dip", "smores"),
  new Food("Waffles", "waffles"),
  new Food("Churros", "churros"),
  new Food("Strawberries and whipped cream", "strawberries"),
  new Food("Ice cream sandwich", "icecreamsandwich"),
  new Food("Fruit salad", "fruitsalad"),
  new Food("Lemon pie", "lemonpie")
];

btn.addEventListener("click", getFood);

function getFood(e) {
  let foodResult = foodArray[Math.floor(Math.random() * foodArray.length)];

  randomResult.innerHTML = `<div class="food-box food-size" 
  id=${foodResult.code}></div>
  <p>${foodResult.name}</p>`;
}
