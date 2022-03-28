const items = { ...localStorage };
// allitems[]
keys = Object.keys(items)
root = document.getElementById("cart__items")

totalCartPrice = 0
totalCartQuantity = 0

totalPriceElement    = document.getElementById("totalPrice")

totalQuantityElement = document.getElementById("totalQuantity")
//totalQuantityElement.innerHTML
numberOfKeys =  keys.length
counter = 0


async function getProductData(productId)
{
    return new Promise(function(resolve, reject) {    
            fetch("http://127.0.0.1:3000/api/products/" + productId)
            .then(function(res) 
            {
                if (res.ok) {
                return res.json();
                }
            })
                .then(function(product) 
                {   
                    console.log(product.imageUrl)
                    resolve({
                        imageSrc: product.imageUrl,
                        price : product.price,
                        name: product.name
                    })
                }
                )
            })
}

async function needAsync()
{
    for (let i = 0 ; i < keys.length;  i++) 
    {
        parsed = JSON.parse(items[keys[i]]) 
        try 
        {
            product = await getProductData(parsed.id);
        } 
        catch (error) {
            console.log(error)    
        }
        

        console.log(product)

        article = document.createElement("article")
        article.classList.add("cart__item")
        article.dataset.id = parsed.id 
        article.dataset.color = parsed.color
        article.dataset.name = product.name

        document.getElementById("cart__items").append(article)

        imageContainer = document.createElement('div')
        article.appendChild(imageContainer)
        imageContainer.classList.add("cart__item__img")

        image = document.createElement("img")
        imageContainer.appendChild(image)

        itemContentContainer = document.createElement("div")
        itemContentContainer.classList.add("cart__item__content")
        article.appendChild(itemContentContainer)
        
        imageContentDescriptionContainer = document.createElement('div')
        imageContentDescriptionContainer.className = "cart__item__content__description"
        itemContentContainer.appendChild(imageContentDescriptionContainer)

        imageContentDescriptionContainer__h2  = document.createElement('h2')
        imageContentDescriptionContainer__p_1 = document.createElement('p')
        imageContentDescriptionContainer__p_2 = document.createElement('p')

        imageContentDescriptionContainer.appendChild(imageContentDescriptionContainer__h2)
        imageContentDescriptionContainer.appendChild(imageContentDescriptionContainer__p_1)
        imageContentDescriptionContainer.appendChild(imageContentDescriptionContainer__p_2)


        cartItemContentSettings = document.createElement('div')
        article.appendChild(cartItemContentSettings)
        cartItemContentSettingsQuantity = document.createElement('div')
        cartItemContentSettings.appendChild(cartItemContentSettingsQuantity) 
        quantitytext = document.createElement('p')
        quantitytext.innerHTML = "Qté : "
        
        inputQuantity =  document.createElement('input', "")
        inputQuantity.setAttribute("type","number")
        inputQuantity.setAttribute("min",1)
        inputQuantity.setAttribute("max",100)
        inputQuantity.setAttribute("value", parsed.itemQuantity)
        inputQuantity.className = "itemQuantity"

        inputQuantity.addEventListener('change', e => {
            
            article = e.target.closest("article") 
            itemKey = article.dataset.name + "-" + article.dataset.color
            itemInStorage = JSON.parse(localStorage.getItem(itemKey))
           
            itemInStorage.itemQuantity = e.target.value 
    
            localStorage.setItem(itemKey,JSON.stringify(itemInStorage))
        })

        cartItemContentSettingsQuantity.appendChild(quantitytext)
        cartItemContentSettingsQuantity.appendChild(inputQuantity)

        cartItemContentDeleteContainer = document.createElement('p')
        cartItemContentDeleteContainer.className = "cart__item__content__settings__delete"
        cartItemContentSettings.appendChild(cartItemContentDeleteContainer) 
            
        cartItemContentDelete = document.createElement('p')
        cartItemContentDelete.className = "deleteItem"
        cartItemContentDelete.innerHTML = "Supprimer"
        cartItemContentDeleteContainer.appendChild(cartItemContentDelete) 

        cartItemContentDelete.addEventListener('click', e => { 
            article = e.target.closest("article") 
            article.remove()         
        })

        image.src = product.imageSrc
        imageContentDescriptionContainer__h2.innerHTML  =   product.name
        imageContentDescriptionContainer__p_1.innerHTML =   parsed.color
        imageContentDescriptionContainer__p_2.innerHTML =   Number(product.price) * Number(parsed.itemQuantity) + " €"
        totalCartPrice = totalCartPrice +  Number(product.price) * Number(parsed.itemQuantity)
        totalCartQuantity += Number(parsed.itemQuantity)
    }
}

needAsync()

setTimeout(function(){ 
    console.log(totalCartPrice)
    totalPriceElement.innerHTML = totalCartPrice;
    totalQuantityElement.innerHTML = totalCartQuantity }
    , 500);


// console.log(keys)
//console.log(items)
// console.log(allitems)
