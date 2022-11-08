let allTotal = 0;

function addToCart(element) {
  let mainEl = element.closest(".card");
  let name = mainEl.querySelector(".name-movie").innerText;
  let price = mainEl.querySelector(".price").innerText;
  let checkOutItems = document.querySelector(".checkout-items");

  checkOutItems.innerHTML += `<div class="check-out-item">
      <h2>${name}</h2>
      <div class="ukloni-div">
      <p>${price}</p>
      <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
      </div>
    </div>`;
  price = price.substring(1);
  price = parseInt(price);
  allTotal += price;

  document.querySelector(".total").innerText = `Total: $${allTotal}`;
  element.innerHTML = "Dodato";
  element.setAttribute("disabled", "true");
}

function removeFromCart(element) {
  let mainEl = element.closest(".check-out-item");
  let price = mainEl.querySelector("p").innerText;
  let name = mainEl.querySelector("h2").innerText;

  price = price.substring(1);
  price = parseInt(price);

  allTotal -= price;

  document.querySelector(".total").innerText = `Total: $${allTotal}`;
  mainEl.remove();

  let movies = document.querySelectorAll(".card");

  movies.forEach(function (movie) {
    let movieName = movie.querySelector(".card h2").innerText;

    if (movieName === name) {
      movie.querySelector(".card button").removeAttribute("disabled");
      movie.querySelector(".card button").innerText = `Gledaj`;
    }
  });
}
