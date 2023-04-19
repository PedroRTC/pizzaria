let containerCart = document.querySelector(".containerCart");
let qntPro = document.querySelector(".qntPro");
let contCart = document.querySelector(".contCart");
let amount = document.querySelector(".amount");
let buttonOrder = document.querySelector(".buttonOrder");

let containerCheckRequest = document.querySelector(".containerCheckRequest");
let containerRequest = document.querySelector(".containerRequest");
let checkAmount = document.querySelector(".checkAmount");

let backendCart = [];
let backendAmount = 0;
let backendQnt = 0;

backendCart = JSON.parse(localStorage.getItem("backendCart")) || [];
backendAmount = JSON.parse(localStorage.getItem("backendAmount")) || 0;
backendQnt = JSON.parse(localStorage.getItem("backendQnt")) || 0;
let arr = Number(backendAmount);
amount.textContent = arr.toFixed(2);

function addBackendCars(item) {
  let dataAmount = (backendAmount = JSON.parse(
    localStorage.getItem("backendAmount")
  ));
  backendQnt++;
  backendAmount = item.valor;

  if (dataAmount != null) {
    let totalArre = Number(dataAmount) + Number(backendAmount);
    backendAmount = totalArre.toFixed(2);
  }
  qntPro.textContent = backendQnt;
  contCart.textContent = backendQnt;
  let novoLache = {
    nome: item.nome,
    categoria: item.categoria,
    img: item.img,
    valor: item.valor,
  };

  backendCart.push(novoLache);

  localStorage.setItem("backendCart", JSON.stringify(backendCart)) || [];
  localStorage.setItem("backendQnt", JSON.stringify(backendQnt));
  localStorage.setItem("backendAmount", JSON.stringify(backendAmount));
  loadingSite();
  setTimeout(() => {
    location.reload();
  }, 2000);
}

function storeSnackCart() {
  qntPro.textContent = backendQnt;
  contCart.textContent = backendQnt;
  backendCart.map((cart) => {
    let snacks = createElementWithClass("section", "snacks");
    let inforSnacks = createElementWithClass("section", "inforSnacks");
    let imgSnacks = createElementWithClass("img", "imgSnacks");
    let nameSnacks = createElementWithClass("p", "nameSnacks");
    let valueSnacks = createElementWithClass("p", "valueSnacks");
    let qntSnacks = createElementWithClass("input", "qntSnacks");
    let buttonDeleteSnacks = createElementWithClass(
      "button",
      "buttonDeleteSnacks"
    );

    qntSnacks.setAttribute("type", "number");
    qntSnacks.setAttribute("value", "1");
    qntSnacks.setAttribute("min", "1");

    imgSnacks.src = cart.img;
    nameSnacks.innerHTML = `${cart.categoria} ${cart.nome}<br>`;
    valueSnacks.textContent = `  ${cart.valor}  `;
    buttonDeleteSnacks.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;

    inforSnacks.appendChild(nameSnacks);
    inforSnacks.appendChild(valueSnacks);
    inforSnacks.appendChild(qntSnacks);

    snacks.appendChild(imgSnacks);
    snacks.appendChild(inforSnacks);

    snacks.appendChild(imgSnacks);
    snacks.appendChild(inforSnacks);
    snacks.appendChild(buttonDeleteSnacks);

    containerCart.appendChild(snacks);

    qntSnacks.addEventListener("input", () =>
      changeQuantityProducts(cart, qntSnacks, valueSnacks)
    );

    buttonDeleteSnacks.addEventListener("click", () =>
      deleteCartSnacks(cart, snacks, qntSnacks)
    );
  });
}
storeSnackCart();

function changeQuantityProducts(cart, qntSnacks, valueSnacks) {
  let valueSnacksArre = Number(cart.valor) * qntSnacks.value;

  valueSnacks.innerHTML = `${valueSnacksArre.toFixed(2)}`;

  let allValueSnacks = document.querySelectorAll(".valueSnacks");
  let sumValue = 0;

  allValueSnacks.forEach((element) => {
    sumValue += Number(element.textContent);
    amount.textContent = sumValue.toFixed(2);
  });
}

function deleteCartSnacks(cart, snacks, qntSnacks) {
  containerCart.removeChild(snacks);
  let index = backendCart.indexOf(cart);

  if (index > -1) {
    backendCart.splice(index, 1);
  }

  localStorage.removeItem("backendCart");
  localStorage.removeItem("backendQnt");

  backendQnt--;

  qntPro.textContent = backendQnt;
  contCart.textContent = backendQnt;

  let arr = Number(amount.textContent) - cart.valor * qntSnacks.value;
  amount.textContent = arr.toFixed(2);

  localStorage.removeItem("backendAmount");

  localStorage.setItem("backendCart", JSON.stringify(backendCart)) || [];
  localStorage.setItem("backendQnt", JSON.stringify(backendQnt)) || 0;
  localStorage.setItem("backendAmount", JSON.stringify(arr.toFixed(2)));
}

buttonOrder.addEventListener("click", checkRequest);

function checkRequest() {
  removeCars();
  containerCheckRequest.style.display = "flex";
  backendCart.map((snacks) => {
    let snacksRequest = createElementWithClass("section", "snacksRequest");
    let imgSnaksRequest = createElementWithClass("img", "imgSnaksRequest");
    let infoSnacksResquest = createElementWithClass(
      "div",
      "infoSnacksResquest"
    );

    imgSnaksRequest.src = snacks.img;
    infoSnacksResquest.innerHTML = `<p>${snacks.categoria} ${snacks.nome}</p><p>${snacks.valor} R$</p>`;

    snacksRequest.appendChild(imgSnaksRequest);
    snacksRequest.appendChild(infoSnacksResquest);
    containerRequest.appendChild(snacksRequest);
    checkAmount.textContent = `Total: ${amount.textContent} R$`;
  });
}

/*

function SendRequest() {
  let pedido = containerCart.textContent.split("                   ");
  console.log(pedido);

  buttonOrder.setAttribute(
    "href",
    `https://wa.me/5585988996987?text= 
     PEDIDO:%20${pedido}%20
     (TOTAL:%20${amount.textContent}R$)`
  );
  
}

  */