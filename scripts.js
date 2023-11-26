const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

names.forEach(name => console.log(name))

names.forEach((name, index) => {
    const province = provinces[index];
    console.log(`${name} (${province})`)
    });
   
 provinces.map(province => {
     console.log(province.toUpperCase())
})   

const nameLength = names.map(name => {
    console.log(name.length)
})

const nameSort = provinces.toSorted()
console.log(nameSort);

const provFilter = provinces.filter(province => !province.includes('Cape'));

const provLeft = provFilter.length;
console.log(provLeft); 

const containsS = names.map(item => item.split('').some(char => (char.toLowerCase() === 's')))
console.log(containsS)

const itemReduce = names.reduce((acc, name, index) => {
acc[name] = provinces[index];
return acc}, {})
console.log(itemReduce)


// Additional Challenge

const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]


products.forEach(item => {
    console.log(item.product)
})

console.log(products.filter(item => item.product.length > 5))


const productsWithPrices = products.filter(product => product.price !== '' && !isNaN(product.price));

const productNumbers = productsWithPrices.map(product => ({ ...product, price: Number(product.price) }));

const finalPrice = productNumbers.reduce((acc, product) => acc + product.price, 0);
console.log(finalPrice);


const concatenatedNames = products.reduce((accum, item, index) => {
    if (index === 0) {
      return item.product;
    } else if (index === products.length - 1) {
      return `${accum} and ${item.product}`;
    } else {
      return `${accum}, ${item.product}`;
    }
  }, '');
  
  console.log(concatenatedNames);


  let highest = null; 
let lowest = null;  

products.reduce((_, item) => { 
    const price = parseInt(item.price);

    if (!isNaN(price)) {
        if (highest === null || price > highest.price) {
            highest = { name: item.product, price };
        }

        if (lowest === null || price < lowest.price) {
            lowest = { name: item.product, price };
        }
    }

    return null; 
}, null);

console.log(
    `Highest: ${highest.name}, Lowest: ${lowest.name}`
);

const recreatedProducts = products.map(product => {
  return Object.entries(product).reduce((acc, [key, value]) => {
    if (key === 'product') {
      acc.name = value;
    } else if (key === 'price') {
      acc.cost = value;
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
});

console.log(recreatedProducts);


