document.addEventListener("DOMContentLoaded",()=>{
    const products=[
        {id:1,name:"Product 1",price:29.99,},
        {id:2,name:"Product 2",price:39.99,},
        {id:3,name:"Product 3",price:59.99,},
    ]
    const cart=[]
   const  productList=document.getElementById("productlist")
   const  cartItemst= document.getElementById("cart-items")
    const  emptyCardMsg=document.getElementById("empty-cards")
   const  cartTotalMsg= document.getElementById("cart-total")
    const  totalPriceDisplay=document.getElementById("total-price")
    const  checkoutBtn=document.getElementById("checkout-btn")

    products.forEach(product=>{
        const productDiv=document.createElement("div")
        productDiv.classList.add("product")
        productDiv.innerHTML=`
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add a Item</button>`
        productList.appendChild(productDiv)
    })

    productList.addEventListener("click",(e)=>{
        if(e.target.tagName==="BUTTON"){
           const productId=parseInt(e.target.getAttribute('data-id'))
            const product=products.find(p=>p.id===productId)
            // console.log(product);
            addToCart(product)
        }
    })
    function addToCart(product){
        cart.push(product)
        renderCart();        
    }
    function renderCart(){
        cartItemst.innerHTML=""
        let totalPrice=0

        if(cart.length>0){
            emptyCardMsg.classList.add("hidden")
            cartTotalMsg.classList.remove("hidden")
            cart.forEach((item,index)=>{
                totalPrice+=item.price
                const cartItem=document.createElement("div")
                cartItem.innerHTML=`
                    ${item.name} - ${item.price.toFixed(2)}`
                    cartItemst.appendChild(cartItem)
                    totalPriceDisplay.textContent=`${totalPrice.toFixed(2)}`
                    // console.log(totalPriceDisplay);
                    
            })

        }else{
            emptyCardMsg.classList.remove("hidden")

            totalPriceDisplay.textContent=`$0.00`

        }
                            document.getElementById('no-item').classList.add("hidden")

    }
    checkoutBtn.addEventListener("click",(e)=>{
        cart.length=0;
        alert("Checkout succeSsfullY")

        renderCart()
        document.getElementById('no-item').classList.remove("hidden")
    })
})