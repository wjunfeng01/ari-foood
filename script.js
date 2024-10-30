const btn = document.querySelector(".btn");
const reload = document.querySelector(".reload");
const foodBox = document.querySelector(".foods");

//Food options
const foodChoices = [
  "Syip cafe",
  "Lola’s",
  "Warm up cafe",
  "Swee Choon",
  "Bbq box",
  "DLLM",
  "Feizhu loklok",
  "Mookata",
  "iSteak",
  "Xinwang",
  "925 chicken rice",
  "Dtf",
  "Yakiniku like",
  "Pastamania",
  "Pizzahut",
  "Sukiya",
  "Aston",
  "Lauwang claypot",
  "Genki sushi",
  "Tori Q",
  "Yoshinoya",
  "Dian Xiao Er",
  "Fish soup at Northpoint",
  "Ximenjie",
  "8 degree",
  "Popeyes",
  "Jollibee",
  "Yaowarat",
  "Ban Mian",
  "Carrot cake",
  "Taste of Thailand Yishun",
  "鱼众不同 at Wisma",
  "Saladstop",
  "Seng kee mee sua",
  "Matchaya",
  "Ippudo ramen",
  "Sanpoutei ramen at Shaw",
  "J9 prata",
  "Numnum thai food",
  "Fortuna italian",
  "Little rogue cafe",
  "Collins",
  "Northpoint indomie",
  "Meet 4 meat",
  "Spanish food paella East Coast"
];


//Generate random food from options
//const randomFood = foodChoices[Math.floor(Math.random() * foodChoices.length)];
//let clickCount = 0;
//Functions
const insertRandomFood = () => {
  //clickCount++;
  
  // If the counter reaches 10, display "eat" and reset the counter
  //if (clickCount >= 10) {
    //foodBox.innerHTML = "eat me bitch";
    //clickCount = 0; // Reset the counter for the next round
  //} else {
    // Otherwise, generate a random food item
    foodBox.innerHTML = "";
    const randomFood = foodChoices[Math.floor(Math.random() * foodChoices.length)];
    foodBox.innerHTML = randomFood;
  //}

};

const reloadPage = () => {
  return document.location.reload();
};

//Handlers
btn.addEventListener("click", insertRandomFood);

reload.addEventListener("click", reloadPage);
