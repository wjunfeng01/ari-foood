const btn = document.querySelector(".btn");
const reload = document.querySelector(".reload");
const foodBox = document.querySelector(".foods");

//Food options
const foodChoices = [
  "Seng kee mee sua",
  "Matchaya",
  "Ippudo ramen",
  "J9 prata",
  "Yishun Thai food",
  "Fortuna italian",
  "Little rogue cafe",
  "Collins",
  "Northpoint indomie",
  "Meet 4 meat",
  "ECP Spanish",
];


//Generate random food from options
//const randomFood = foodChoices[Math.floor(Math.random() * foodChoices.length)];
let clickCount = 0;
//Functions
const insertRandomFood = () => {
  clickCount++;
  
  // If the counter reaches 10, display "eat" and reset the counter
  if (clickCount >= 10) {
    foodBox.innerHTML = "eat me bitch";
    //clickCount = 0; // Reset the counter for the next round
  } else {
    // Otherwise, generate a random food item
    foodBox.innerHTML = "";
    const randomFood = foodChoices[Math.floor(Math.random() * foodChoices.length)];
    foodBox.innerHTML = randomFood;
  }

};

const reloadPage = () => {
  return document.location.reload();
};

//Handlers
btn.addEventListener("click", insertRandomFood);

reload.addEventListener("click", reloadPage);
