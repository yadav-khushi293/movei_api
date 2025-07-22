const apiKey = `3d15e923`;

const dataLoad = async () => {
  myFunction();
  let random = [
    { name: "ironman" },
    { name: "superman" },
    { name: "avengers" },
    { name: "thor" },
    { name: "loki" },
    { name: "evil death" },
    { name: "space" },
    { name: "earth" },
    { name: "animal" },
    { name: "disney" },
    { name: "harry potter" },
  ];

  let movie = Math.round(Math.random() * random.length);

  let moviename = random[movie].name;

  const api = `https://www.omdbapi.com/?s=${moviename}&apikey=${apiKey}`;

  try {
    const response = await fetch(api);
    const data = await response.json();
    appendsFunc(data);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const ApiCalling = async (event) => {
  if (event.key === "Enter") {
    const searchApi = document.querySelector("#searchInput");
    console.log("Search Api: ", searchApi.value.length);

    if (searchApi.value.length === 0) return;

    const api =` https://www.omdbapi.com/?s=${searchApi.value}&apikey=${apiKey}&page=4`;

    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log("Data: ", data);
      appendsFunc(data);
      searchApi.value = "";
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  return;
};

const appendsFunc = (data) => {
  let mainDiv = document.getElementById("info");
  mainDiv.innerHTML = "";
  data.Search.forEach((hello) => {
    const cardDiv = document.createElement("div");
    const img = document.createElement("img");

    const nameDiv = document.createElement("div");
    const title = document.createElement("h3");

    const gridDiv = document.createElement("div");
    const year = document.createElement("p");
    const imdb = document.createElement("p");
    const type = document.createElement("p");

    const link = document.createElement("a");

    cardDiv.className = "card_div";
    nameDiv.className = "name_div";
    gridDiv.className = "grid_div";

    img.src = hello.Poster;
    title.innerText = `Title: ${hello.Title}`;
    year.innerText = `Year: ${hello.Year}`;
    imdb.innerText = `Imdb ID: ${hello.imdbID}`;
    type.innerText = `Type: ${hello.Type}`;

    link.href = `movei_deaitel.html?id=${hello.imdbID}`;
    link.style.textDecoration = "none";
    link.style.color = "inherit";

    gridDiv.append(year, imdb, type);
    nameDiv.append(title, gridDiv);
    cardDiv.append(img, nameDiv);
    link.append(cardDiv);
    mainDiv.append(link);
  });
};

let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

const keywords = ["batman", "marvel", "avengers", "harry potter"];

async function loadPosters() {
  const scrollDiv = document.getElementById("posterScroll");

  for (let word of keywords) {
    const api = `https://www.omdbapi.com/?s=${word}&apikey=${apiKey}`;
    try {
      const res = await fetch(api);
      const data = await res.json();

      if (data.Search) {
        data.Search.forEach((movie) => {
          if (movie.Poster && movie.Poster !== "N/A") {
            const link = document.createElement("a");
            link.href = `movei_deaitel.html?id=${movie.imdbID}`;

            const img = document.createElement("img");
            img.src = movie.Poster;

            link.appendChild(img);
            scrollDiv.appendChild(link);
          }
        });
      }
    } catch (err) {
      console.log("Error loading posters:", err);
    }
  }
}

window.addEventListener("load", loadPosters);

const back = document.getElementById("back");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    back.classList.add("show");
  } else {
    back.classList.remove("show");
  }
});