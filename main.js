async function getProducts(){
    const response = await fetch("https://dummyjson.com/products");
    const products = await response.json();
    const data = products.products;
    let result="";
    result+= data.map(function(ele){
       return `
  
      <h2>${ele.title}</h2>
      <p>${ele.price}</p>
      <p>${ele.thumbnail}</p>
  
      `
      
    } );
    document.querySelector(".products").innerHTML=result;
  }
  getProducts();