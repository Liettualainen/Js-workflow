const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
  "SALO",
];

ingredients[ingredients.length] = "Bread";

const currentUl = document.getElementById("ingredients");

const CollectionIngred = ingredients.map((ingredient) => {
    let newLi = document.createElement("li");
    newLi.classList.add("item");
  newLi.innerText = ingredient;
  console.log(newLi);
  return newLi;
}
)
  currentUl.append(...CollectionIngred);




  
// const CollectionIngred = [];  
// function addElement() {
//   for (const ingredient of ingredients) {
//     let newLi = document.createElement("li");
//     newLi.classList.add("item");
//     newLi.innerText = ingredient;
//     CollectionIngred.push(newLi);
//   }
//   currentUl.append(...CollectionIngred);
// }
//  console.log("CollectionIngred:", CollectionIngred);
