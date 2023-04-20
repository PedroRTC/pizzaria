let containerCheckRequest = document.querySelector(".containerCheckRequest");
let containerRequest = document.querySelector(".containerRequest");

let formRequest = document.querySelector("form");
let buttonRegisterAddress = document.querySelector(".buttonRegisterAddress");

let checkAmount = document.querySelector(".checkAmount");
let buttonOrder = document.querySelector(".buttonOrder");
let qnt = document.querySelectorAll(".qntSnacks");
let backendAddress = [];

backendAddress = JSON.parse(localStorage.getItem("backendAddress")) || [];

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

    infoSnacksResquest.innerHTML = `<p>${snacks.categoria} ${snacks.nome}</p>${snacks.valor}R$</p>`;

    imgSnaksRequest.src = snacks.img;

    snacksRequest.appendChild(imgSnaksRequest);
    snacksRequest.appendChild(infoSnacksResquest);
    containerRequest.appendChild(snacksRequest);
    checkAmount.textContent = `Total: ${amount.textContent} R$`;
  });
}

formRequest.addEventListener("submit", addBackendAddress);

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
      checkAddress()
    }, 3000);
  }

  localStorage.setItem("backendAddress", JSON.stringify(backendAddress));
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
  checkAddress()
 
}

savedAddress();


function checkAddress(){
  if (backendAddress.length > 0) {
    buttonRegisterAddress.style.background = "#F1F9F7";
    buttonRegisterAddress.style.color = "#1D9D74";
    buttonRegisterAddress.style.border = "1px solid #1D9D74";
    buttonRegisterAddress.innerHTML = `Endereço Salvo <i class="fa fa-check-square-o" aria-hidden="true"></i>`;
  }
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


