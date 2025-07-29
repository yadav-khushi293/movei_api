let Api = `https://fakestoreapi.com/products`


let storage = JSON.parse(localStorage.getItem('token'));

let cartArr = JSON.parse(localStorage.getItem('cartItem')) || [];
//console.log( cartArr.length);

const path = window.location.pathname;
console.log( path);

const cartLength = document.querySelector('span');
if (path === '/Facstore/HTML/Card.html') {
    cartLength.style.display = cartArr.length < 0 ? 'none' : 'block';//ye chis sir se puch na hai 
    cartLength.className = cartArr.length > 0 ? 'cartLength-active' : 'none';
    cartLength.innerText = cartArr.length > 0 ? cartArr.length : '';
}



const datafetch = async () => {
    try {
        let res = await fetch(Api);
        let data = await res.json();
        storeUI(data);
    } catch (error) {
        console.log(error);
    }
}

const storeUI = (value) => {
    const dataInfo = document.querySelector("#dataInfo");

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

        img.src = element.image;
        id.innerText =`ID: ${element.id}`;
        price.innerText = ` Price:   ${element.price}`;
        title.innerText = ` Title:  ${element. title}`;
        category.innerText =` Category:  ${element.category}`;
        description.innerText = element.description;
        rate.innerText = ` Rate:  ${element.rating. rate}`;
        count.innerText = `Count: ${element.rating.count}`;


        div.classList.add('card-div');
        pricingDiv.classList.add('card-price-div');
        description.classList.add('text_div');
         title.classList.add('title')
          pricingDiv.classList.add('pricingDiv_1');
          category.classList.add('category_1')

        button.innerText = 'add'


        
        button.addEventListener('click', function () {
            cartArr.push(element);
            localStorage.setItem('cartItem', JSON.stringify(cartArr));
            if (cartArr.length && path === '/Project/FakeStore/index.html') {
                cartLength.style.display = 'block'
                cartLength.className = 'cartLength-active';
                cartLength.innerText = cartArr.length
            }
        })


        pricingDiv.append( rate, count);

        div.append(img, id, title, description,category,price, pricingDiv, button);

        dataInfo.append(div);


    });

}


//  =============== from js =====================



const formSubmitData = async (e) => {
    e.preventDefault();

    const loginApi = `https://fakestoreapi.com/auth/login`;


    const email = document.querySelector("#username").value;
    console.log( typeof email);
    const pass = document.querySelector("#password").value;
    console.log( typeof pass);

    /* 
    johnd -> username
    m38rmF$ -> pass    
    */

    let loginData = {
        username: email,
        password: pass
    }

    try {
        let res = await fetch(loginApi, {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await res.json();
        console.log( data);

        localStorage.setItem('token', JSON.stringify(data.token));
        if (storage) {
            window.location = 'Login.html';
            localStorage.removeItem('token');
        }
    } catch (error) {
        console.log( error);
    }

}
// https://fakestoreapi.com/carts
// https://fakestoreapi.com/products




const changeToLogin = () => {
    window.location = 'Login.html'
}

const backFun = () => {
    window.location = 'Card.html'
}

const chageToCart = () => {
    window.location = 'Card1.html'
}


const cartDisplay = () => {
    storeUI(cartArr)
}