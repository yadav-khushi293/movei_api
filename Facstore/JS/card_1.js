let cartArr = JSON.parse(localStorage.getItem('cartItem')) || [];
console.log(cartArr);


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
    


        button.innerText = 'remove';
        div.classList.add('card-div');
        pricingDiv.classList.add('card-price-div');
        description.classList.add('text_div');
         title.classList.add('title')
          pricingDiv.classList.add('pricingDiv_1');
          category.classList.add('category_1')

        button.innerText = 'add'



        button.addEventListener('click',function(){

            // crrtArr.push(element);

            let deleteData = cartArr.filter((dl)=>{
                return dl.id !== element.id
            })

            cartArr = deleteData;
            localStorage.setItem('cartItem',JSON.stringify(cartArr));
             storeUI(cartArr);
        })
        



        // button.addEventListener('click', function () {
        //     cartArr.push(element);
        //     localStorage.setItem('cartItem', JSON.stringify(cartArr));
        //     if (cartArr.length && path === '/Project/FakeStore/index.html') {
        //         cartLength.style.display = 'block'
        //         cartLength.className = 'cartLength-active';
        //         cartLength.innerText = cartArr.length
        //     }
        // })


        pricingDiv.append( rate, count);

        div.append(img, id, title, description,category,price, pricingDiv, button);

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
const checkoutTocard=()=>{
     window.location = 'Chackout.html'
}

const cartDisplay = () => {
    storeUI(cartArr)
}




