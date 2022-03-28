
// get current URL
currentURL = window.location.search
// parse url for arguments id
const urlParams = new URLSearchParams(currentURL);

id = urlParams.get('id')

function getProductById(id) 
{
    fetch("http://127.0.0.1:3000/api/products/" + id)
        .then(function(res) 
        {
            if (res.ok) {
            return res.json();
            }
        })
        .then(function(product) 
        {   
            // document.getElementsByClassName("item__img").src = product.imageUrl
            itemImageDiv = document.getElementsByClassName("item__img")[0]
            itemImage = document.createElement('img')

            itemImage.src =  product.imageUrl
            itemImage.alt = product.name

            itemImageDiv.appendChild(itemImage)
            
            itemPriceNameDiv = document.getElementsByClassName("item__content__titlePrice")[0]

            itemName = document.getElementById("title")
            itemName.innerHTML = product.name

            itemPrice = document.getElementById("price")
            itemPrice.innerHTML = product.price
            
            itemDescription = document.getElementById("description")
            itemDescription.innerHTML = product.description

            colorSelect = document.getElementById("colors")

            for (let i = 0 ; i < product.colors.length ; i++)
            {
                colorChoice = new Option(product.colors[i])
                colorSelect.add(colorChoice)    
            }
            

            // for (let color in product.colors){
            //     console.log(color + color)
                // colorChoice = new Option(color)
                // colorSelect.add(color)    
         //   }

        })
}

getProductById(id)

document.getElementById("addToCart").addEventListener('click', function() 
{
    colorSelect = document.getElementById("colors")
    color = colorSelect.options[colorSelect.selectedIndex].value

    itemName = document.getElementById("title").innerHTML 

    itemQuantity = document.getElementById("quantity").value
    console.log("item quant " +  itemQuantity)

    const items = { ...localStorage };

    console.log(Object.keys(items))    

    const toLocalStorage = 
    {
            id           : id,
            color        : color,
            itemQuantity : itemQuantity
    }
    
    itemKey = itemName + "-" + color
    console.log(itemKey)
    // accessableObjectItem =JSON.parse(localStorage.getItem(id))
    if(Object.keys(items).find(element => element == itemKey ) == undefined )
    {
        if(itemQuantity == 0 || itemQuantity > 100 || color == "")
        {
            alert("invalid order ! choose both item quantity (min. 1; max. 100) and color")
        }
        else
        {
            localStorage.setItem(itemKey ,JSON.stringify(toLocalStorage))
        }
    }
    else 
    {   
        currentCartQuantity = JSON.parse(localStorage.getItem(itemKey)).itemQuantity
        console.log("item type of cartQuantity " + typeof(currentCartQuantity))
        newQuantity = Number(currentCartQuantity) + Number(itemQuantity)
        if (newQuantity <= 100 ) 
        {
            toLocalStorage.itemQuantity = newQuantity
            localStorage.setItem(itemKey,JSON.stringify(toLocalStorage))
        }
        else
        {    
            depassement = newQuantity - 100 
            alert("déja " +String(currentCartQuantity) +  " articles de cette catégorie dans le panier. commandez "  + String(depassement)+  " articles de moins pour valider la modification." )
        }
    }

    // if (Object.keys(items).find(element => element == id) != undefined && accessableObjectItem.color == color)
    // {
    //         }
    // else 
    // {
    //     console.log("item already in cart !")
    // }

                                          
    
    // localStorage.setItem("test",Number(1))
    // localStorage.setItem("test",Number(localStorage.getItem("test")) + Number(1) ) 
    // console.log(localStorage.getItem("test"))  
    // console.log(Object.keys(items).find(element => element == "test1"))    
    // console.log(localStorage.getItem(id))
    // console.log(JSON.parse(localStorage.getItem(id)).color)
    // console.log(JSON.parse(localStorage.getItem(id))["color"])
    
    // accessableObjectItem =JSON.parse(localStorage.getItem(id))
    // console.log(accessableObjectItem.color + " and " + color)

    
    // localStorage.getItem(id).itemQuantity = currentItemQuantity = localStorage.getItem(id).itemQuantity
    // localStorage.setItem(id,)

    // }
     // localStorage.setItem("test","test")
    // localStorage.setItem("test",JSON.stringify({a : "a",
    //                              b : 'b'}))
    // localStorage.setItem("test",JSON.stringify({a : "a",
    //                             b : 'b'}))                                 
    

    // items.forEach((item) => {
    //     console.log(item)
    // })
     // console.log(localStorage.getItem("test"))
    // console.log(JSON.stringify(localStorage.getItem("test")))    

    
})
// fetch("http://127.0.0.1:3000/api/products/" + id)
// .then(function(res) 
// {
//     if (res.ok) {
//     return res.json();
//     }
// })
// .then(function(product) 
// {
//     const toLocalStorage = 
//     {
//         '_id'         : id, 
//         'colors'      : product.colors,
//         // 'imageUrl'    : product.imageUrl,
//         // 'description' : product.description,
//         'itemQuantity': document.getElementById("quantity").value
//     }     
//     console.log(toLocalStorage)
// })     
// get product from back with id

// display...


