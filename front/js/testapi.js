const request = require('request')

function getAllProducts()
{
    const options = 
    {   
        method: 'GET',
        uri: 'http://127.0.0.1:3000/api/products'
    }

    request(options, function (error, response, body) {
          //   console.log(response)
          //   console.log("---------------------------------------------------------------------------------------- \n")
            console.log(body + "\n")
          }
        )
}

function getProductById(id)
{
    const options = 
    {   
        method: 'GET',
        uri: 'http://127.0.0.1:3000/api/products/' + id 
    }

    request(options, function (error, response, body) {
          //   console.log(response)
          //   console.log("---------------------------------------------------------------------------------------- \n")
            console.log(body + "\n")
          }
        )
}

getAllProducts()

idTest = "034707184e8e4eefb46400b5a3774b5f"
getProductById(idTest)


// const optionsR2 = 
// {   
//     method: 'GET',
//     uri: 'http://127.0.0.1:3000/api/products/034707184e8e4eefb46400b5a3774b5f'
// }

// request( options
//   , function (error, response, body) {
//       // body is the decompressed response body
//     //   console.log(response)
//     //   console.log("---------------------------------------------------------------------------------------- \n")
//       console.log(body)
//     }
//   )

// const options = {
//     method: 'get',
//     url: "127.0.0.1/api/products",
//     headers: 
//     {
//       'Content-Type': 'application/json'
//     },
//     json: true,
// };

// console.log(rp(options).response);


















// F = require("node-fetch")
// fetch("localhost:3000")  
//   .then(function(res) {
//     if (res.ok) {
//       console.log(JSON.stringify(res))  
//       return res.json();
//     }
//   })
//   .then(function(value) {
//     console.log(value);
//   })
//   .catch(function(err) {
//     // Une erreur est survenue
//   });





// F = require("node-fetch")

// let fetchUrl = F.fetchUrl;

// const options = {
//     method : 'GET',
//     headers : {
//         'content-type' : 'application/json' 
//     }
// }

// fetchUrl('http://localhost/api/products', options)
// .then(response => console.log(response.json))


// fetchUrl("http://127.0.0.1/api/products", function(error, meta, body){
//     console.log(body.toJSON());
// });

// fetchUrl("http://127.0.0.1/api/products", function(error, meta, body){
//     console.log(body.toJSON());
// });


// fetchUrl("localhost:3000")
//   .then(function(res) {
//     if (res.ok) {
//       console.log(JSON.stringify(res))  
//       return res.json();
//     }
//   })
//   .then(function(value) {
//     console.log(value);
//   })
//   .catch(function(err) {
//     // Une erreur est survenue
//   });