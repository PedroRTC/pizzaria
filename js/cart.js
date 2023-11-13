let containerCart = document.querySelector(".containerCart");
let qntPro = document.querySelector(".qntPro");
let contCart = document.querySelector(".contCart");
let amount = document.querySelector(".amount");

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
    localStorage.getItem("backendAmount") || 0
  )) 
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
    qntP: 1,
    img: item.img,
    valor: item.valor,
  };

  backendCart.push(novoLache);

  localStorage.setItem("backendCart", JSON.stringify(backendCart)) || [];
  localStorage.setItem("backendQnt", JSON.stringify(backendQnt));
  localStorage.setItem("backendAmount", JSON.stringify(backendAmount));
 

    
    containerCart.innerHTML=""
     amount.textContent = backendAmount
    storeSnackCart()
    loadingSite()
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
    qntSnacks.setAttribute("value", `${cart.qntP}`);
    qntSnacks.setAttribute("min", `1`);

    imgSnacks.src = cart.img;
    nameSnacks.innerHTML = ` ${cart.categoria} ${cart.nome}  <br>`;
    valueSnacks.innerHTML = `${cart.valor}`;
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

    if (backendCart.length > 0) {
      contCart.style.display = "flex";
    } else {
      contCart.style.display = "none";
    }
  });
}

storeSnackCart();

function changeQuantityProducts(cart, qntSnacks, valueSnacks) {
  let valueSnacksArre = Number(cart.valor);

  valueSnacksArre = valueSnacksArre * qntSnacks.value;

  valueSnacks.innerHTML = `${valueSnacksArre.toFixed(2)}`;

  let allValueSnacks = document.querySelectorAll(".valueSnacks");
  let sumValue = 0;

  allValueSnacks.forEach((element) => {
    sumValue += Number(element.textContent);
    amount.textContent = sumValue.toFixed(2);
  });

  backendCart.map((i) => {
    let index = backendCart.indexOf(cart);
    let il = backendCart.indexOf(i);
    if (index == il) {
      i.qntP = qntSnacks.value;
      backendAmount = amount.textContent;
    }
  });

  localStorage.setItem("backendCart", JSON.stringify(backendCart)) || [];
  localStorage.setItem("backendAmount", JSON.stringify(backendAmount));
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
