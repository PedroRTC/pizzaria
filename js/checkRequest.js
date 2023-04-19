let containerCheckRequest = document.querySelector(".containerCheckRequest");
let containerRequest = document.querySelector(".containerRequest");
let formRequest = document.querySelector("form");
let checkAmount = document.querySelector(".checkAmount");


let backendAddress = [];

buttonOrder.addEventListener("click", checkRequest);

backendAddress = JSON.parse(localStorage.getItem("backendAddress")) || [];

  

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

  console.log(backendAddress);
}

savedAddress();

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
