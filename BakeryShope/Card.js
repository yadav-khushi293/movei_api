const api = `http://localhost:3000/cart`;
let page = 1; // current page
let limit = 10; // items per page
let allProducts

let log = document.querySelector('#Logo');
log=false;

const storage = JSON.parse(sessionStorage.getItem('category'));

//filter the code 

const countCategory = () => {

      if (!storage) return;
      
    let filterSelect = document.querySelector("#filter");

    Object.keys(storage).map((key) => {
        let options = document.createElement('option');
        options.value = key;
        options.innerText = key;
        filterSelect.append(options);
    });


}

countCategory();

const ApiCall = () => {
    fetch(api)
        .then((res) => res.json())
        .then((res) => {
          
            let category = res.map((el) => el.category)
            const countCategory = category.reduce((acc, fruit) => {
                acc[fruit] = (acc[fruit] || 0) + 1;
                return acc;
            }, {});

            sessionStorage.setItem('category', JSON.stringify(countCategory))

            appendsFunc(res);

        
        })
        .catch((err) => console.log(err));
};

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
        let div1 = document.createElement("div1");
        let button = document.createElement('button');
        let checkout_btn = document.createElement('button');

        button.classList='cart';
        cardDiv.className = 'card_div';
        description.className = "text_div  placeholder";
        title.className = "title_div  placeholder";
        rating.className = "reating_1  placeholder";
        id.className="placeholder";
        price.className="placeholder";
         category.className="placeholder";
         img.className="placeholder";
          checkout_btn.classList="checkout_button";
          div1.classList="div1";


        img.src = element.image;
        title.innerText = element.title;
        price.innerText = ` price : ${element.price}`;
        category.innerText = `category : ${element.category}`;
        description.innerText = element.description;
        rate.innerText = `Rate : ${element.rating.rate}`;
        count.innerText = `count : ${element.rating.count}`;
        id.innerText = `id : ${element.id}`;
         button.innerText='Add To card';
         checkout_btn.innerText='Checkout';
          
        button.addEventListener("click",()=>AddTocard(element));
        
        div1.append(button,checkout_btn)
        rating.append(rate, count);
        cardDiv.append(img, id, title, price, category, description, rating, div1);

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


//This for serching
const searchFunc = async () => {


    console.log(' ~ i am invoked :');

    let search = document.querySelector("#search").value;
    console.log(' ~ search:', search);
    try {
        let res = await fetch(api);
        let data = await res.json()

        let searchArr = data.filter((el) => {
            return search === el.category || search === el.title;
        })

        // this line of code remove duplicate value
        let uniqueSearchArr = searchArr.filter((item, index, self) =>
       index === self.findIndex((t) => t.id === item.id)
);
 appendsFunc(uniqueSearchArr);

    } catch (error) {
        console.log(' ~ error:', error);

    }
};


//filter for  dropdownlist

const selectFun = async (el) => {
    let filter = document.querySelector("#filter").value;

    try {
        let res = await fetch(api);
    let data = await res.json();

     let filterData = data.filter((el) => {
      return filter === el.category;
    });
    appendsFunc(filterData);
    } catch (error) {
        console.log(error)
   };
}


//Fetch paginated data
const dataFetch = async () => {
  try {
    let res = await fetch(`${api}?_limit=${limit}&_page=${page}`);
    let data = await res.json();
    appendsFunc(data);
    updateButtons(data.length);
  } catch (error) {
    console.log("Pagination Error:", error);
  }
};

// Update Prev / Next buttons
const updateButtons = (dataLength) => {
  document.getElementById("prev").disabled = page === 1;
  document.getElementById("next").disabled = dataLength < limit;
  document.querySelector(".numOfPage").innerText = `Page: ${page}`;//show a current page
};

// Prev button click
const prevBtnInvokation = () => {
  if (page > 1) {
    page--;
    dataFetch();
  }
};

// Next button click
const nextBtnInvokation = () => {
  page++;
  dataFetch();
};

window.onload = () => {
  ApiCall();      // for category dropdown
  dataFetch();    // for initial paginated data
};

const changeToLogin = () => {
    window.location = 'Singhpage.html'
}


const changetoCard = () => {
    window.location = 'Card.html'
}




/*** */
const sidebar = () => {
  const side = document.querySelector(".slide");
  side.classList.toggle("active");
};

const sortHigh = async () => {
  try {
    const res = await fetch(api);
    const data = await res.json();

    const sortedData = data.sort((a, b) => b.price - a.price);
    appendsFunc(sortedData);

    const activeFilter = document.querySelector("#activeFilter");
    activeFilter.innerHTML = `
            <span>Low To High</span>
            <button onclick="clearFilter()"><img src="../img/close.svg"></button>
            `;
  document.querySelector(".slide").classList.remove("active");

  } catch (error) {
    console.log("Error While Sorting High To Low: ", error);
  }
};

const sortLow = async () => {
  
  try {
    const res = await fetch(api);
    const data = await res.json();

    const sortedData1 = data.sort((a, b) => a.price - b.price);
    appendsFunc(sortedData1);

    const activeFilter = document.querySelector("#activeFilter");
    activeFilter.innerHTML = `
            <span>Low To High</span>
            <button onclick="clearFilter()"><img src="../img/close.svg"></button>
            `;   
    
  document.querySelector(".slide").classList.remove("active");   

  } catch (error) {
    console.log("Error While Sorting Low To High: ", error);
  }
 
};

const clearFilter = async () => {
  ApiCall();
  document.querySelector("#activeFilter").innerHTML = "";

  try {
    const res = await fetch(api);
    const data = await res.json();
    appendsFunc(data);
  } catch (error) {
    console.log("Error While Clearing Filter: ", error);
  }
};

