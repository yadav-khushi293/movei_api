let cartArr = JSON.parse(localStorage.getItem('cartItem'));

let tokenStorage = JSON.parse(sessionStorage.getItem('token'));

if (!tokenStorage) {
    window.location = 'Login.html'
}

const result = cartArr.reduce((acc, item) => {
    const existing = acc.find((el) => el.id === item.id);
    if (existing) {
        existing.count += 1; // increment count
    } else {
        acc.push({ ...item }); // clone item
    }
    return acc;
}, []);

cartArr = result;

localStorage.setItem('cartItem', JSON.stringify(cartArr));



const storeUI = (value) => {
    const dataInfo = document.querySelector("#dataInfo");
    dataInfo.innerHTML=''

    value?.forEach((element) => {
        console.log( element);
        const div = document.createElement('div');
        const pricingDiv = document.createElement('div');
        const id = document.createElement('h2');
        const img = document.createElement('img');
        const price = document.createElement('h3');
        const title = document.createElement('h4');
        const category = document.createElement('h3');
        const description = document.createElement('p');
        const rate = document.createElement('h3');
        const count = document.createElement('h3');
        const button = document.createElement('button');
         const checkout_btn = document.createElement('button');
        

        img.src = element.image;
        id.innerText =`ID: ${element.id}`;
        price.innerText = ` Price:   ${element.price}`;
        title.innerText = ` Title:  ${element. title}`;
        category.innerText =` Category:  ${element.category}`;
        description.innerText = element.description;
        rate.innerText = ` Rate:  ${element.rating. rate}`;
        count.innerText = `Count: ${element.rating.count}`;
         checkout_btn.innerText = 'checkout';
    


        button.innerText = 'remove';
         checkout_btn.classList.add('checkout-btn');
        div.classList.add('card-div');
        pricingDiv.classList.add('card-price-div');
        description.classList.add('text_div');
         title.classList.add('title')
          pricingDiv.classList.add('pricingDiv_1');
          category.classList.add('category_1')

        // button.innerText = 'add'



        button.addEventListener('click',function(){

            // crrtArr.push(element);

            let deleteData = cartArr.filter((dl)=>{
                return dl.id !== element.id
            })

            cartArr = deleteData;
            localStorage.setItem('cartItem',JSON.stringify(cartArr));
             storeUI(cartArr);
        })
        checkout_btn.addEventListener('click', () => {
            window.location = 'Checkout.html'
        })

        pricingDiv.append( rate, count);

        div.append(img, id, title, description,category,price, pricingDiv, button, checkout_btn);

        dataInfo.append(div);


    });

}

const changeToLogin = () => {
    window.location = 'Login.html'
}

const backFun = () => {
    window.location = 'Card.html'
}

const chageToCart = () => {
    window.location = 'Card1.html'
}
// const checkoutTocard=()=>{
//      window.location = 'Chackout.html'
// }

const cartDisplay = () => {
    storeUI(cartArr)
}




