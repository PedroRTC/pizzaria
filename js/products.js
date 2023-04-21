let containerPizza = document.querySelector(".containerPizza");
let containerEsfiha = document.querySelector(".containerEsfiha");
let containerDrinks = document.querySelector(".containerDrinks");
let containerPortions = document.querySelector(".containerPortions");

let containerProducts = document.querySelectorAll(".containerProducts");
let arrowLeft = document.querySelectorAll(".arrowLeft");
let arrowRight = document.querySelectorAll(".arrowRight");

let allTheProducts = [];

async function initializeProducts() {
  try {
    allTheProducts = await productsResponse();

    generateProducts();
  } catch (error) {
    alert("ola");
  }
}

initializeProducts();

function createElementWithClass(type, elementClass) {
  const element = document.createElement(type);
  element.classList.add(elementClass);
  return element;
}

function generateProducts() {
  allTheProducts.map((products) => {
    let card = createElementWithClass("div", "card");
    let imgProducts = createElementWithClass("img", "imgProducts");
    let descriptionProducts = createElementWithClass(
      "section",
      "descriptionProducts"
    );
    let sectionCartValue = createElementWithClass(
      "section",
      "sectionCartValue"
    );
    let valueCard = createElementWithClass("p", "valueCard");
    let cartFromCard = createElementWithClass("p", "cartFromCard");

    imgProducts.src = products.img;
    descriptionProducts.innerHTML = `<p class="nameProducts">${products.nome}</p><p class="captionProducts">${products.categoria}</p>`;
    valueCard.innerHTML = `R$` + products.valor;
    cartFromCard.innerHTML = `<i class="fa fa-shopping-basket icars" aria-hidden="true"></i>`;

    sectionCartValue.appendChild(valueCard);
    sectionCartValue.appendChild(cartFromCard);
    card.appendChild(imgProducts);
    card.appendChild(descriptionProducts);
    card.appendChild(sectionCartValue);

    cartFromCard.addEventListener("click", () => {
      addBackendCars(products);
    });

    checkProductsCategory(products, card);
  });
}

function checkProductsCategory(checkProducts, selectCard) {
  if (checkProducts.categoria == "Pizza") {
    containerPizza.appendChild(selectCard);
  } else if (checkProducts.categoria == "Esfiha") {
    containerEsfiha.appendChild(selectCard);
  } else if (checkProducts.categoria == "Bebida") {
    containerDrinks.appendChild(selectCard);
  } else {
    containerPortions.appendChild(selectCard);
  }
}

function carrosselProdutos() {
  for (let index = 0; index < containerProducts.length; index++) {
    arrowLeft[index].addEventListener("click", () => {
      containerProducts[index].scrollBy(-200, 0);
    });

    arrowRight[index].addEventListener("click", () => {
      containerProducts[index].scrollBy(200, 0);
    });
  }
}

carrosselProdutos();

function loadingSite() {
  let containerLoading = document.createElement("div");
  let loading = document.createElement("div");

  containerLoading.classList.add("containerLoading");
  loading.classList.add("loading");
  containerLoading.appendChild(loading);
  document.body.appendChild(containerLoading);
}
