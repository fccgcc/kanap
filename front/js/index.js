// const request = require('request')

function putAllProducts()
{
     
    fetch("http://127.0.0.1:3000/api/products")
        .then(function(res) {
            if (res.ok) {
            return res.json();
            }
        })
        .then(function(products) 
        {
            for (let i = 0; i < products.length; i++) 
            {
                product = products[i]
                
                const link = document.createElement("a")
                link.setAttribute("href",`./product.html?id=${product._id}`)
                // link.addEventListener('click', function() {         
        

                // });

                const article = document.createElement("article");
                article.innerHTML = 
                `<img src='${product.imageUrl}' alt=${product.name}">
                <h3 class="productName">${product.name}</h3>
                <p class="productDescription">${product.description}.</p>`
                
                
                items = document.getElementById("items")
                
                link.appendChild(article)
                items.appendChild(link)
            }
        })
        .catch(function(err) {
        });

    // request(options, function (error, response, products) {
    //         product = products[0]
    //         const link = document.createElement("a")
    //         link.setAttribute("href",`./product.html?id=${product.id}`)
    //         const article = document.createElement("article");
            
    //         article.innerHTML = 
    //         `<img src='.../${product.imageUrl}' alt=${product.name}">
    //         <h3 class="productName">${product.name}</h3>
    //         <p class="productDescription">${product.description}.</p>`
            
            
    //         items = document.getElementById("items")
            
    //         link.appendChild(article)
    //         items.appendChild(link)
          

    //       })
}

putAllProducts() 

// items = document.getElementById('items');   //déclarer en const => bug
// console.log(items, items.children) 

// items.children.addEventListener('click', function() {         
//         console.log(productClickableWidget.accessKey, productClickableWidget.accessKeyLabel)
//     });
// console.log(items.children)

// articles = items.getElementsByTagName('a');

// articles = items.getElementsByTagName('a');   
// console.log(articles.length)

// articles.addEventListener('click', function() {         
//     console.log(productClickableWidget.accessKey, productClickableWidget.accessKeyLabel)
// });

// products.map(function (product)  {

// })

// product = products[0]
// console.log(product)

// const link = document.createElement("a")
// link.setAttribute("href",`./product.html?id=${product.id}`)
// const article = document.createElement("article");

// article.innerHTML = `<img src='.../${product.imageUrl}' alt=${product.name}">
// <h3 class="productName">${product.name}</h3>
// <p class="productDescription">${product.description}.</p>`


// items = document.getElementById("items")

// link.appendChild(article)
// items.appendChild(link)





