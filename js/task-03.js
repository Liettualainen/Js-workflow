const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const currentUl = document.getElementsByClassName("gallery")[0];


const CollectionImages = images.map((image) => 
  image =`<li class="item"><img class= "image" src= ${image.url} alt =${image.alt} ></li>`
)


// const CollectionImages = images.map((image) => {
//       const newLi = document.createElement("li");
//          newLi.classList.add("item");

//         const newImg = document.createElement("img");
//         newImg.classList.add("image");
//         newImg.src = image.url;
//         newImg.alt = image.alt;
//         newLi.insertAdjacentElement("afterBegin", newImg); 
//     console.log(newLi);
//     return newLi.outerHTML;
  
// })

console.log(CollectionImages);

// currentUl.innerHTML = CollectionImages;
currentUl.insertAdjacentHTML("afterBegin", CollectionImages)

let header = document.createElement('h1');
header.innerText = "Image Collection";
document.body.insertBefore(header, currentUl )




// const currentUl = document.getElementsByClassName("gallery")[0];

// const CollectionImages = images.map((image) => {
//       const newLi = document.createElement("li");
//          newLi.classList.add("item");

//         const newImg = document.createElement("img");
//         newImg.classList.add("image");
//         newImg.src = image.url;
//         newImg.alt = image.alt;
//         newLi.insertAdjacentElement("afterBegin", newImg);     
//         return newLi;
// }
// )
//   currentUl.append(...CollectionImages)





// const CollectionImages = [];
// document.body.onload = addCollectionImageas;
// function addCollectionImageas() {
//     for (const image of images) {
//         const newLi = document.createElement("li");
//          newLi.classList.add("item");

//         const newImg = document.createElement("img");
//         newImg.classList.add("image");
//         newImg.src = image.url;
//         newImg.alt = image.alt;

//         newLi.insertAdjacentElement("afterBegin", newImg);     
//         CollectionImages.push(newLi);
//     }   
//         currentUl.append(...CollectionImages)
// }
 
// console.log("CollectionImages:", CollectionImages);
