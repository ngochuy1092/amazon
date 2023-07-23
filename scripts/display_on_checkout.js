const cart= JSON.parse (localStorage.getItem('store'))
const optionRadio=[];


/////Update quanity to Item()
const quantity= JSON.parse (localStorage.getItem('quantity'))
document.querySelector('.js-item').innerHTML=quantity;
///Update total price
totalPrice();
function totalPrice() {
	let eachTotal=0;

	cart.forEach((value)=> {
		value.itemPrice= Number(value.itemPrice);	
		eachTotal+= (value.quanity * value.itemPrice);	
	})
	eachTotal=(eachTotal).toFixed(2);
	document.querySelector('.js-payment-summary-row').innerHTML=eachTotal;
	eachTotal=Number(eachTotal);
	localStorage.setItem('eachTotal', JSON.stringify(eachTotal));

	totalRadio= Number(JSON.parse(localStorage.getItem('totalRadio')));	
	document.querySelector('.js-payment-summary-money').innerHTML=
	((eachTotal+totalRadio).toFixed(2));
}

renderList();

function renderList() {
	let totalHtml='';
	cart.forEach((item,index)=> {
		totalHtml+=
		`	<div class="cart-item-container">
	<div class="delivery-date">
		Delivery date: Tuesday, June 21
	</div>

	<div class="cart-item-details-grid">
		<img class="product-image"
			src="${item.itemImage}">

		<div class="cart-item-details">
			<div class="product-name">
				${item.itemName}
			</div>
			<div class="product-price">
				${(item.itemPrice).toFixed(2)}
			</div>
			<div class="product-quantity">
				<span>
					Quantity: <span class="quantity-label">${item.quanity}</span>
				</span>
				<span class="update-quantity-link link-primary">
					Update
				</span>
				<span class="delete-quantity-link link-primary js-delete-quantity-link">
					Delete
				</span>
			</div>
		</div>

		<div class="delivery-options">
			<div class="delivery-options-title">
				Choose a delivery option:
			</div>
			<div class="delivery-option">
				<input type="radio" checked
					class="delivery-option-input one "
					name="a-${item.itemId}"
					id="one"
					value="0">
				<div>
					<div class="delivery-option-date">
						Tuesday, June 21
					</div>
					<div class="delivery-option-price">
						FREE Shipping
					</div>
				</div>
			</div>
			<div class="delivery-option">
				<input type="radio" 
					class="delivery-option-input two"
					name="a-${item.itemId}"
					id="two"
					value="499">
				<div>
					<div class="delivery-option-date">
						Wednesday, June 15
					</div>
					<div class="delivery-option-price">
						$4.99 - Shipping
					</div>
				</div>
			</div>
			<div class="delivery-option">
				<input type="radio" 
					class="delivery-option-input three "
					name="a-${item.itemId}"
					id="three"
					value="999">
				<div>
					<div class="delivery-option-date">
						Monday, June 13
					</div>
					<div class="delivery-option-price">
						$9.99 - Shipping
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
		`
	})
	document.querySelector('.js-order-summary').innerHTML
	= totalHtml;
	////////////////////////

	

    /////////////////////////////////
	const optionRadio=[];
	
	let eachRadio;
	
	let arrayOption= document.querySelectorAll('.delivery-option-input');
	arrayOption.forEach(
		(value)=> {
			value.addEventListener('click',()=> {
				let totalRadio=0;
				arrayOption.forEach((option)=> {
					if(option.checked) {
						eachRadio= Number(option.value);
						totalRadio+=eachRadio;
				}})
				
				totalRadio=(totalRadio/100).toFixed(2);

				document.querySelector('.shipping-handling')
				.innerHTML=totalRadio;

				eachTotal= JSON.parse(localStorage.getItem('eachTotal'));
				eachTotal= Number(eachTotal);
				totalRadio=Number(totalRadio);
				
				document.querySelector('.js-payment-summary-money').innerHTML
				= ((eachTotal + totalRadio).toFixed(2));
				let total= Number(((eachTotal + totalRadio).toFixed(2)));
				tax= Number(((total*10)/100).toFixed(2));
				console.log( typeof(tax));
				document.querySelector('.js-payment-summary-tax').innerHTML= tax;
				final= (tax+total).toFixed(2);
				document.querySelector('.final').innerHTML= final;

				localStorage.setItem('totalRadio',JSON.stringify(totalRadio));
				localStorage.setItem('total',JSON.stringify(total));
				localStorage.setItem('tax',JSON.stringify(tax));
				localStorage.setItem('final',JSON.stringify(final));
			})})				
			
		
	///////delivery option///////
	optionOnes= document.querySelectorAll('.one');
	optionTwos=document.querySelectorAll('.two');
	optionThrees=document.querySelectorAll('.three');

	let arrayOptionOne=[];
	let arrayOptionTwo=[];
	let arrayOptionThree=[];
	
	optionOnes.forEach((optionOne)=> {
		optionOne.addEventListener('click', ()=>{
			updataRadio();
		})
	})
	optionTwos.forEach((optiontwo)=> {
		optiontwo.addEventListener('click', ()=>{
			updataRadio();
		})
	})
	optionThrees.forEach((optionThree)=> {
		optionThree.addEventListener('click', ()=>{
			updataRadio();
		})
	})

	function updataRadio() {
		arrayOptionOne=[];
		arrayOptionTwo=[];
		arrayOptionThree=[];
		optionOnes.forEach ((value)=>{
			if(value.checked) {
				arrayOptionOne.push(1);	}
			else{arrayOptionOne.push(0);}
		})
		console.log(arrayOptionOne);
		localStorage.setItem('arrayOptionOne', JSON.stringify(arrayOptionOne));

		optionTwos.forEach ((value)=>{
			if(value.checked) {
				arrayOptionTwo.push(1);	}
			else{arrayOptionTwo.push(0);}
		})
		console.log(arrayOptionTwo);
		localStorage.setItem('arrayOptionTwo', JSON.stringify(arrayOptionTwo));

		optionThrees.forEach ((value)=>{
			if(value.checked) {
				arrayOptionThree.push(1);	}
			else{arrayOptionThree.push(0);}
		})
		console.log(arrayOptionThree)
		localStorage.setItem('arrayOptionThree', JSON.stringify(arrayOptionThree));

	}

	//////delete Items//////
	let deleteButton= document.querySelectorAll('.js-delete-quantity-link');
	deleteButton.forEach(
		(value,index)=> {
			value.addEventListener('click', ()=> {		
				console.log(arrayOptionOne= JSON.parse(localStorage.getItem('arrayOptionOne')))
				console.log(arrayOptionTwo=JSON.parse(localStorage.getItem('arrayOptionTwo')))
				console.log(arrayOptionThree =JSON.parse(localStorage.getItem('arrayOptionThree')))

				arrayOptionOne.splice(index, '1');
				arrayOptionTwo.splice(index, '1');
				arrayOptionThree.splice(index, '1');
				console.log(arrayOptionOne);
				localStorage.setItem('arrayOptionOne', JSON.stringify(arrayOptionOne));

				console.log(arrayOptionTwo);
				localStorage.setItem('arrayOptionTwo', JSON.stringify(arrayOptionTwo));

				console.log(arrayOptionThree);
				localStorage.setItem('arrayOptionThree', JSON.stringify(arrayOptionThree));


				cart.splice(index, '1');
				localStorage.setItem('store',JSON.stringify(cart));

//////// Update quantity in Items()	
				let totalQuantity=0;
				cart.forEach( (value)=> {
					totalQuantity+= value.quanity;
				})
				document.querySelector('.js-item').innerHTML= totalQuantity;
				localStorage.setItem('quantity', JSON.stringify(totalQuantity));
///////// Calculate Price				
				let eachTotal=0;

				cart.forEach((value)=> {
					value.itemPrice= Number(value.itemPrice);	
					eachTotal+= (value.quanity * value.itemPrice);	
				})
				eachTotal=(eachTotal).toFixed(2);
				document.querySelector('.js-payment-summary-row').innerHTML=eachTotal;
				eachTotal=Number(eachTotal);
				console.log(eachTotal);
				localStorage.setItem('eachTotal', JSON.stringify(eachTotal));
				

/////////display Html on checkout page again
				renderList();
				let arrayOptionCheck= document.querySelectorAll('.delivery-option-input');
		if(arrayOptionCheck.length===0) {
			document.querySelector('.shipping-handling').innerHTML='0';
			document.querySelector('.js-payment-summary-tax').innerHTML='0';
			document.querySelector('.js-payment-summary-money').innerHTML='0';
			document.querySelector('.final').innerHTML='0';

		 }
		 else{
			arrayOptionOne.forEach((value,index)=> {
				arrayOne= document.querySelectorAll('.one');
				if(value===1) {
					console.log(index);
					arrayOne[index].checked=true;
				}
			})
			arrayOptionTwo.forEach((value,index)=> {
				arrayTwo= document.querySelectorAll('.two');
				if(value===1) {
					console.log(index);
					arrayTwo[index].checked=true;
				}
			})
			arrayOptionThree.forEach((value,index)=> {
				arrayThree= document.querySelectorAll('.three');
				if(value===1) {
					console.log(index);
					arrayThree[index].checked=true;
				}
			})
			
			let eachRadio;
		
			let arrayOption= document.querySelectorAll('.delivery-option-input');
			console.log(arrayOption);
			let totalRadio=0;
			arrayOption.forEach(
				(value)=> {							
							if(value.checked) {
							eachRadio= Number(value.value);
							totalRadio+=eachRadio;
						} })
						console.log(totalRadio);
						document.querySelector('.shipping-handling').innerHTML= ((totalRadio/100).toFixed(2));
					
				totalRadio=Number((totalRadio/100).toFixed(2));
				
				eachTotal= JSON.parse(localStorage.getItem('eachTotal'));
				console.log(eachTotal);
				
				document.querySelector('.js-payment-summary-money').innerHTML
				= ((eachTotal+totalRadio).toFixed(2));
				let total= Number(((eachTotal + totalRadio).toFixed(2)));
				tax= Number(((total*10)/100).toFixed(2));
				console.log( typeof(tax));
				document.querySelector('.js-payment-summary-tax').innerHTML= tax;
				final= (tax+total).toFixed(2);
				document.querySelector('.final').innerHTML= final;

				localStorage.setItem('totalRadio',JSON.stringify(totalRadio));
				localStorage.setItem('total',JSON.stringify(total));
				localStorage.setItem('tax',JSON.stringify(tax));
				localStorage.setItem('final',JSON.stringify(final));
									
		 }


		})
	}
)
}
///////save the radio state
	saveRadio();
	function saveRadio() {
		console.log(arrayOptionOne= JSON.parse(localStorage.getItem('arrayOptionOne')))
		console.log(arrayOptionTwo=JSON.parse(localStorage.getItem('arrayOptionTwo')))
		console.log(arrayOptionThree =JSON.parse(localStorage.getItem('arrayOptionThree')))
				
		
		let arrayOptionCheck= document.querySelectorAll('.delivery-option-input');
		if(arrayOptionCheck.length===0) {
		document.querySelector('.shipping-handling')
		.innerHTML='0'; }
		
		else {
			arrayOptionOne.forEach((value,index)=> {
			arrayOne= document.querySelectorAll('.one');
			if(value===1) {
				console.log(index);
				arrayOne[index].checked=true;
			}
			})
			arrayOptionTwo.forEach((value,index)=> {
			arrayTwo= document.querySelectorAll('.two');
			if(value===1) {
				console.log(index);
				arrayTwo[index].checked=true;
			}
			})
			arrayOptionThree.forEach((value,index)=> {
			arrayThree= document.querySelectorAll('.three');
			if(value===1) {
				console.log(index);
				arrayThree[index].checked=true;
			}
			})

			let eachRadio;

			let arrayOption= document.querySelectorAll('.delivery-option-input');
			console.log(arrayOption);			

			arrayOption.forEach(
			(value)=> {				
					let totalRadio=0;
					arrayOption.forEach((option)=> {
						if(option.checked) {
							eachRadio= Number(option.value);
							totalRadio+=eachRadio;
					}})
					console.log(totalRadio);
					document.querySelector('.shipping-handling')
					.innerHTML=(totalRadio/100).toFixed(2);
				})
			}
		}

/////svaveee the data when click the option
			let checkTotalprice= JSON.parse(localStorage.getItem('eachTotal'));
			checkTotalprice=Number(checkTotalprice);
			if(checkTotalprice===0) {
				document.querySelector('.shipping-handling').innerHTML='0';
				document.querySelector('.js-payment-summary-tax').innerHTML='0';
				document.querySelector('.js-payment-summary-money').innerHTML='0';
				document.querySelector('.final').innerHTML='0';
			}
			else {
				let eachRadio;
		
			let arrayOption= document.querySelectorAll('.delivery-option-input');
			console.log(arrayOption);
			let totalRadio=0;
			arrayOption.forEach(
				(value)=> {							
							if(value.checked) {
							eachRadio= Number(value.value);
							totalRadio+=eachRadio;
						} })
						console.log(totalRadio);
						document.querySelector('.shipping-handling').innerHTML= ((totalRadio/100).toFixed(2));
					
				totalRadio=Number((totalRadio/100).toFixed(2));
				
				eachTotal= JSON.parse(localStorage.getItem('eachTotal'));
				console.log(eachTotal);
				
				document.querySelector('.js-payment-summary-money').innerHTML
				= ((eachTotal+totalRadio).toFixed(2));
				let total= Number(((eachTotal + totalRadio).toFixed(2)));
				tax= Number(((total*10)/100).toFixed(2));
				console.log( typeof(tax));
				document.querySelector('.js-payment-summary-tax').innerHTML= tax;
				final= (tax+total).toFixed(2);
				document.querySelector('.final').innerHTML= final;
			}
			