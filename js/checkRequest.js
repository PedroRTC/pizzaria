let containerCheckRequest = document.querySelector(".containerCheckRequest");
let containerRequest = document.querySelector(".containerRequest");

let formRequest = document.querySelector("form");
let buttonRegisterAddress = document.querySelector(".buttonRegisterAddress");
let buttonChangeAddress = document.querySelector(".changeAddress");
let buttonCancelRequest = document.querySelector(".cancel");


let checkAmount = document.querySelector(".checkAmount");
let buttonOrder = document.querySelector(".buttonOrder");
let qnt = document.querySelectorAll(".qntSnacks");
let backendAddress = [];

backendAddress = JSON.parse(localStorage.getItem("backendAddress")) || [];

buttonOrder.addEventListener("click", checkRequest);
formRequest.addEventListener("submit", addBackendAddress);
buttonChangeAddress.addEventListener("click", changeAddress);
buttonCancelRequest.addEventListener("click", cancelRequest);


function addBackendAddress(event) {
  event.preventDefault();

  let newAddress = {
    client: formRequest.client.value,
    phone: formRequest.phone.value,
    zipCode: formRequest.zipCode.value,
    burgh: formRequest.burgh.value,
    road: formRequest.road.value,
    houseNumber: formRequest.houseNumber.value,
  };

  if (backendAddress.length > 0) {
    backendAddress.push();
  } else {
    backendAddress.push(newAddress);
    buttonRegisterAddress.innerHTML = `Salvando <i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>`;

    setTimeout(() => {
      checkAddress();
    }, 3000);
  }

  localStorage.setItem("backendAddress", JSON.stringify(backendAddress));
}

function checkRequest() {
  removeCart();
  if (backendCart.length > 0) {
    containerCheckRequest.style.display = "flex";
  } else {
    alert("Você não tem Pedido");
  }
  backendCart.map((snacks) => {
    let snacksRequest = createElementWithClass("section", "snacksRequest");
    let imgSnaksRequest = createElementWithClass("img", "imgSnaksRequest");
    let infoSnacksResquest = createElementWithClass(
      "div",
      "infoSnacksResquest"
    );

    infoSnacksResquest.innerHTML = `<p>[${snacks.categoria} ${snacks.nome}</p>  <p>QNT:${snacks.qntP}</p>  <p>Valor:${snacks.valor}R$] </p>`;

    imgSnaksRequest.src = snacks.img;

    snacksRequest.appendChild(imgSnaksRequest);
    snacksRequest.appendChild(infoSnacksResquest);
    containerRequest.appendChild(snacksRequest);
    checkAmount.textContent = `Total: ${amount.textContent} R$`;
  });
}

function savedAddress() {
  backendAddress.map((clients) => {
    formRequest.client.value = clients.client;
    formRequest.phone.value = clients.phone;
    formRequest.zipCode.value = clients.zipCode;
    formRequest.burgh.value = clients.burgh;
    formRequest.road.value = clients.road;
    formRequest.houseNumber.value = clients.houseNumber;
  });
  checkAddress();
}
savedAddress();

function changeAddress() {
  formRequest.client.focus();
  backendAddress =
    JSON.stringify(localStorage.removeItem("backendAddress")) || [];
  checkAddress();
}

function checkAddress() {
  let input = document.querySelectorAll("form input");

  if (backendAddress.length > 0) {
    buttonRegisterAddress.style.background = "#F1F9F7";
    buttonRegisterAddress.style.color = "#1D9D74";
    buttonRegisterAddress.style.border = "1px solid #1D9D74";
    buttonRegisterAddress.innerHTML = `Endereço Salvo <i class="fa fa-check-square-o" aria-hidden="true"></i>`;
    buttonChangeAddress.style.display = "block";

    input.forEach((element) => {
      element.setAttribute("readonly", "readonly");
      formRequest.style.opacity = "0.9";
    });
  } else {
    buttonRegisterAddress.style.background = "";
    buttonRegisterAddress.style.color = "";
    buttonRegisterAddress.style.border = "";
    buttonRegisterAddress.innerHTML = `Salvar endereço`;
    buttonChangeAddress.style.display = "none";
    input.forEach((element) => {
      element.removeAttribute("readonly", "readonly");
      formRequest.style.opacity = "1";
    });
  }
}

function cancelRequest() {
  containerCheckRequest.style.display = "none";

}

function sendRequest() {
  let pedido = containerRequest.textContent.split("         ");
  console.log(pedido);

  if (backendAddress.length > 0 && backendCart.length > 0) {

    buttonSend.setAttribute(
      "href",
      `https://wa.me/5585981385233?text= 
         NOME:${formRequest.client.value}--------------------
         CONTATO:${formRequest.phone.value}------------------
         CEP:${formRequest.zipCode.value}--------------------
         BAIRRO:${formRequest.burgh.value}-------------------
         RUA:${formRequest.road.value}-----------------------
         NUMERO:${formRequest.houseNumber.value}------------------------------------
         PEDIDO:---------------------------------------------------
         ${pedido}-----------------------------------------------------------
         (TOTAL:%20${amount.textContent}R$)`
    );

 
  } else {
    alert("Endereço ou Pedido (ESTAR VAZIO)");
  }
}
