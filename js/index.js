// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

// Iteration 1: set the visibility of `<section class="mushroom">`

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

 // Iteration 1: set the visibility of `<section class="green-pepper">`

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
      }
  });
}
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

function renderWhiteSauce() {
  const whiteSauce = document.querySelector(".sauce");
  whiteSauce.classList.toggle("sauce-white");
}

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function renderGlutenFreeCrust() {
  const crust1 = document.querySelector(".crust");
  crust1.classList.toggle("crust-gluten-free");
}

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`


function renderButtons(evt) {
  const active1 = document.querySelectorAll(".btn");
  if (state.pepperoni === true) {
    document.querySelector(".btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn-mushrooms").classList.remove("active");
  }
  if (state.pepperoni === true) {
    document.querySelector(".btn-pepperoni").classList.add("active");
  } else {
    document.querySelector(".btn-pepperoni").classList.remove("active");
  }
  if (state.greenPeppers === true) {
    document.querySelector(".btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn-green-peppers").classList.remove("active");
  }
  if (state.sauce === true) {
    document.querySelector(".btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn-sauce").classList.remove("active");
  }
  if (state.crust === true) {
    document.querySelector(".btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn-crust").classList.remove("active");
  }
}

  // Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice(checkItem) {
  let lis = "";
  checkItem.forEach((price) {
    lis += `<li>${price} </li>`;
  });
  return lis;
}

/* function createGenres(genres) {
  let lis = "";
  genres.forEach((genre) => {
    lis += `<li>${genre}</li>`;
  });
  return lis;
}

movies.forEach((movie) => {
  const card = document.createElement("div");
  card.className = "card";

  const markup = `
    <h2>${movie.title} - ${movie.director} (${movie.year})</h2>
    <ul>${createGenres(movie.genre)}</ul>
  `;

  card.innerHTML = markup;
  card.onclick = handleClick;
  moviesElement.appendChild(card);
});*/

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`

renderEverything();
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.crust1 = !state.crust1;
  renderEverything();
});