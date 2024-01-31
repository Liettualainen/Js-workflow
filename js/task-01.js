const categories =  document.querySelectorAll('.item');
// console.log(`Number of categories: ${categories.length}`);
document.write(`<p>Number of categories: ${categories.length}</p>`);

for (let i = 0; i < categories.length; i+=1) {
    const category = categories[i];
    // console.log(`\nCategory: ${category.querySelector("h2").textContent}`);
    // console.log(`Elements: ${category.querySelectorAll('li').length}`); 
    document.write(`\nCategory: ${category.querySelector("h2").textContent},`);
    document.write(`<p>\nelements: ${category.querySelectorAll('li').length}</p>`);
}