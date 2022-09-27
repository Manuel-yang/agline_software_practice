const Catalogue = require("../src/productCatalogue");
const Product = require("../src/product");
// Setup
let cat = new Catalogue("Test Catalogue");
const p123 = new Product("A123", "Product 1", 100, 10, 10.0);
const p124 = new Product("A124", "Widget 1", 100, 10, 10.0);
const p125 = new Product("A125", "A Product 2", 100, 10, 10.0);
const p126 = new Product("A126", "A Widget 2", 100, 10, 10.0);
const p127 = new Product("A127", "Bracket 1", 100, 10, 10.0)
const p128 = new Product("A128", "Another Product 3", 100, 10, 10.0);
let response

console.log('Test addProduct')
console.log("\tWhen we add a product, then it will return true")
response = cat.addProduct(p123);
// Expectation
if (response === true)
  console.log('\tPassed')
else
  console.log('\tfailed')

console.log("\tWhen we add a product whose id matches an existinf one, then it will return false")
response = cat.addProduct(new Product("A123", "Product X", 100, 10, 10.0));
// Expectation
if (response === false)
  console.log('\tPassed')
else
  console.log('failed')
//================================


cat = new Catalogue("Test Catalogue");
console.log('Test findProductByNameLike')

cat.addProduct(p123);
cat.addProduct(p124);
cat.addProduct(p125);
cat.addProduct(p126);
cat.addProduct(p127);
cat.addProduct(p128);

let substring = "Product";
console.log("\tGiven the catalogue has some products, when we provide a substring that has matches, then it returns the correct products")
let matches = cat.findProductsByNameLike(substring);
// Expectation
if (matches.length !== 3)
  console.log('\tFailed')
if (matches[0].name === p123.name && matches[1].name === p125.name && matches[2].name === p128.name)
  console.log('\tPassed')
else
  console.log('\tFailed')

substring = "No match";
console.log("\tGiven the catalogue has some products, when we provide a substring that has no matches, then it returns an empty array")
matches = cat.findProductsByNameLike(substring);
// Expectation
if (matches.length === 0)
  console.log('\tPassed')
else
  console.log('\tFailed')

cat = new Catalogue("Test Catalogue");
substring = "Product";
console.log("\tGiven the catalogue is empty, when we provide a substring, then it returns an empty array")
matches = cat.findProductsByNameLike(substring);
if (matches.length === 0)
  console.log('\tPassed')
else
  console.log('\tFailed')

//================================
cat = new Catalogue("Test removeCatalogue");
console.log('Test removeProductById')

cat.addProduct(p123);
cat.addProduct(p124);
cat.addProduct(p125);
cat.addProduct(p126);
cat.addProduct(p127);
cat.addProduct(p128);

let size = cat.products.length
if (size === 6) {
  console.log("\tInitialization successful")
}
else {
  console.log("\tInitialization fail")
}



let id = "A1288"
console.log("\tGiven the catalogue has some products, when we provide a id that doesn't exist, then it returns false")
matches = cat.removeProductById(id)
if(matches === false || cat.products.length === size) {
  console.log("\tPassed")
}
else { 
  console.log("\Failed")
}

id = "A123"
console.log("\tGiven the catalogue has some products, when we provide a id that has matches, then it returns true and remove the product")
matches = cat.removeProductById(id)
if(matches === true || cat.products.length === size - 1) {
  console.log("\tPassed")
}
else {
  console.log("\tFailed")
}


//================================
cat = new Catalogue("Test checkReorder");
console.log('Test checkReorder')

cat.addProduct(p123);
cat.addProduct(p124);
cat.addProduct(p125);
cat.addProduct(p126);
cat.addProduct(p127);
cat.addProduct(p128);

size = cat.products.length
if (size === 6) {
  console.log("\tInitialization successful")
}
else {
  console.log("\tInitialization fail")
}

console.log("\tInvoke the checkReorder function and return a empty array because all the items are sufficient")
matches = cat.checkReorder()

let result = { type: "Reorder", productIds: [] };
if(JSON.stringify(matches) === JSON.stringify(result)) {
  console.log("\tPassed")
}
else console.log("\tFailed")

console.log("\tInvoke the checkReorder function and return the reorder array after modifying the quantity")
let p1 = cat.findProductById("A124")
p1.quantityInStock = 8
let p2 = cat.findProductById("A127")
p2.quantityInStock = 10

matches = cat.checkReorder()

result = { type: 'Reorder', productIds: [ 'A124', 'A127' ] }
if (JSON.stringify(matches) === JSON.stringify(result)) {
  console.log("\tPassed")
}
else console.log("\tFailed")
