const api = `http://localhost:3000/cookie`;
let page = 1; // current page
let limit = 10; // items per page
let allProducts



const storage = JSON.parse(sessionStorage.getItem('category'));

//filter the code 





const appendsFunc = (data) => {
    let dataShow = document.querySelector('#info');
    dataShow.innerHTML = ''
  
      allProducts = data;

    data.forEach((element) => {
        let cardDiv = document.createElement('div');
        let title = document.createElement('h4');
        let price = document.createElement('h3');
        let description = document.createElement('h6');
        let category = document.createElement('h3');
        let img = document.createElement('img');
        let rating = document.createElement('div');
        let rate = document.createElement('h3')
        let count = document.createElement('h3');
        let id = document.createElement('h3');
        let button = document.createElement('button');

        button.classList='cart';
        cardDiv.className = 'card_div';
        description.className = "text_div  placeholder";
        title.className = "title_div  placeholder";
        rating.className = "reating_1  placeholder";
        id.className="placeholder";
        price.className="placeholder";
         category.className="placeholder";
         img.className="placeholder";
      


        img.src = element.image;
        title.innerText = element.title;
        price.innerText = ` price : ${element.price}`;
        category.innerText = `category : ${element.category}`;
        description.innerText = element.description;
        rate.innerText = `Rate : ${element.rating.rate}`;
        count.innerText = `count : ${element.rating.count}`;
        id.innerText = `id : ${element.id}`;
         button.innerText='Add To card';
          
        button.addEventListener("click",()=>AddTocard(element));
        

        rating.append(rate, count);
        cardDiv.append(img, id, title, price, category, description, rating,button);

        dataShow.append(cardDiv);
    });

};


const AddTocard = async (product) => {
    const cartApi = `http://localhost:3000/cart`;

    try {
        // Step 1: Get current cart data
        const res = await fetch(cartApi);
        const cartItems = await res.json();

        // Step 2: Check if product already in cart
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            // Step 3: If exists, increase count
            await fetch(`${cartApi}/${existingItem.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ count: existingItem.count + 1 })
            });
        } else {
            // Step 4: If not exists, add new with count = 1
            await fetch(cartApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...product, count: 1 })
            });
        }

        alert("Added to cart successfully!");

    } catch (error) {
        console.error("Error adding to cart:", error);
    }
};


const changeToLogin = () => {
    window.location = 'Singhpage.html'
}


const changetoCard = () => {
    window.location = 'Card.html'
}

