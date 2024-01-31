const categories =  document.querySelectorAll('.item');
// console.log(`Number of categories: ${categories.length}`);
document.write(`<p><h2><i>Number of categories: ${categories.length}</i></h2></p>`);
// document.write(`<p>Number of categories: ${categories.length}</p>`);

categories.forEach((category) => {
    document.write(`<b>Category</b>: ${category.querySelector("h2").textContent},` )
   document.write(`\n<b>elements</b>: ${category.querySelectorAll('li').length}.</p>`);
}
   );

// document.write(`<b>END</b></p>`)
// document.write(`<b>START</b></p>`)

// for (let i = 0; i < categories.length; i+=1) {
//     const category = categories[i];
        
//     // console.log(`\nCategory: ${category.querySelector("h2").textContent}`);
//     // console.log(`Elements: ${category.querySelectorAll('li').length}`); 
//     document.write(`Category: ${category.querySelector("h2").textContent},`);
    
//     document.write(`<p>elements: ${category.querySelectorAll('li').length}</p>`);

// }

 
