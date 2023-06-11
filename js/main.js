let buttonMenu = document.querySelector(".buttonMenu");
let buttonCart = document.querySelector(".buttonCart");
let CloseCartButton = document.querySelector(".CloseCartButton");
let cart = document.querySelector(".cart");
let menuSide = document.querySelector(".menuSide");
let dateRequest = document.querySelector(".dateRequest");

buttonCart.addEventListener("click", expandCart);
CloseCartButton.addEventListener("click", removeCart);
buttonMenu.addEventListener("click", expandMenu);
let buttonSend = document.querySelector(".send");


 // Data do Pedido
function DateSistem() {
 

  let dateSistem = new Date();

  console.log(dateSistem);

  let day = dateSistem.getDate();
  let month = dateSistem.getMonth() + 1;
  let year = dateSistem.getFullYear();
   

  if(day < 10){
    day = `0` + day
   
  }else{
    day=day
  }

  if(month < 10){
    month = `0` + month
   
  }else{
    month = month
  }
  dateRequest.textContent = `${day}/${month}/${year}`;
}
DateSistem();

function expandMenu() {
  menuSide.style.display = "flex";
  setTimeout(() => {
    menuSide.style.transform = "translateX(0%)";
    buttonMenu.style.transform = "rotateX(180deg) scale(1.4)";
    buttonMenu.classList.remove("bi-justify-right");
    buttonMenu.classList.add("bi-x-lg");
  }, 100);

  buttonMenu.addEventListener("click", removeMenu);
  buttonMenu.removeEventListener("click", expandMenu);

  removeCart();
}

function removeMenu() {
  menuSide.style.transform = "translateX(-100%) ";
  buttonMenu.style.transform = "rotateX(0deg) scale(1.4)";
  setTimeout(() => {
    menuSide.style.display = "none";
    buttonMenu.classList.remove("bi-x-lg");
    buttonMenu.classList.add("bi-justify-right");
  }, 400);

  buttonMenu.addEventListener("click", expandMenu);
  buttonMenu.removeEventListener("click", removeMenu);
}

function expandCart() {
  cart.style.transform = "translate(0%)";
  removeMenu();
}

function removeCart() {
  cart.style.transform = "translate(130%)";
}


buttonSend.addEventListener("click",()=>{
   clientPdf()
   sendRequest()
})