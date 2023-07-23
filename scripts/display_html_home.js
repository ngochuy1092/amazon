let html= '';
products.forEach( (value,index) => {
    html+= `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${value.image}">
    </div>
  
    <div class="product-name limit-text-to-2-lines">
        ${value.name}
    </div>
  
    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${value.rating.stars*10}.png">
      <div class="product-rating-count link-primary">
      ${value.rating.count}
      </div>
    </div>
  
    <div class="product-price">
    ${(value.priceCents/100).toFixed(2)}
    </div>
  
    <div class="product-quantity-container" >
      <select class="a-${value.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  
    <div class="product-spacer"></div>
  
    <div class="added-to-cart b-${value.id}">
      <img src="images/icons/checkmark.png">
      Added
    </div>
  
    <button class="add-to-cart-button button-primary
			js-button-add-to-cart display-check" 
    data-product-id="a-${value.id}"
    data-product-check="b-${value.id}"
		data-product-name="${value.name}" 
    data-product-image="${value.image}" 
    data-product-price="${value.priceCents}">
      Add to Cart
    </button>
  </div>   
    `
} );

document.querySelector('.js-products-grid').innerHTML= html;
////////add display checkmark
let displayCheck= document.querySelectorAll('.display-check');
displayCheck.forEach((value)=> {
  value.addEventListener('click', ()=> {
    let imgClass= value.dataset.productCheck;
    img= document.querySelector(`.${imgClass}`);
    console.log(img); 
    img.style.display="block";
    setTimeout(()=>{img.style.display="none"},2000)
  })
})

//// Add the 'Click' function to all Button.
document.querySelectorAll('.js-button-add-to-cart'). forEach (
	(value)=> {
		value.addEventListener('click', ()=> {

//////choose the quantity option
      let quanityOption= Number((document.querySelector(`.${value.dataset.productId}`).value))
    

//// take the item on local store
      const cart= JSON.parse (localStorage.getItem('store'));
			
			let matchItem;

			cart.forEach( (item)=> {
				if( item.itemName=== value.dataset.productName) {
					matchItem= item;
				}});	

			if (matchItem) {
				matchItem.quanity+=quanityOption;
			}
			else {
				cart.push(
					{
            itemId: value.dataset.productId,
						itemName: value.dataset.productName,
						quanity: quanityOption, 
            itemImage: value.dataset.productImage,
            itemPrice: (value.dataset.productPrice/100).toFixed(2),
            itemOption: {
              option1: 'zero',
              option2: 'one',
              option3: 'two',
            }
					}
				)
			}	;
			console.log  (cart);

      localStorage.setItem('store', JSON.stringify(cart));

      let totalQuantity=0;
      cart.forEach( (value)=> {
        totalQuantity+= value.quanity;
      })

      document.querySelector('.cart-quantity').innerHTML
      = totalQuantity;

      localStorage.setItem('quantity', JSON.stringify(totalQuantity));
		})
	}
)

     let quantity= JSON.parse(localStorage.getItem('quantity'));
     document.querySelector('.cart-quantity').innerHTML= quantity;

