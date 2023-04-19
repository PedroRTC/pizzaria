let buttonMenu=document.querySelector(".buttonMenu")
let buttonCars=document.querySelector(".buttonCars")
let CloseCartButton=document.querySelector(".CloseCartButton")
let cart=document.querySelector(".cart")
let menuSide=document.querySelector(".menuSide")


buttonMenu.addEventListener("click", expandirMenu)
buttonCars.addEventListener("click", expandirCarrinho)
CloseCartButton.addEventListener("click",removeCars)



function expandirMenu(){
  menuSide.style.display="flex"
  
  setTimeout(() => {
    menuSide.style.transform="translateX(0%)"
    buttonMenu.style.transform="rotateX(180deg) scale(1.4)"
    buttonMenu.classList.remove("fa-bars")
    buttonMenu.classList.add("fa-times")
  }, 100);
 
  buttonMenu.removeEventListener("click", expandirMenu)
  buttonMenu.addEventListener("click", removerMenu)
 removeCars()

}


function removerMenu(){
 
    menuSide.style.transform="translateX(-100%) "
    buttonMenu.style.transform="rotateX(0deg) scale(1.4)"
    setTimeout(() => {
      menuSide.style.display="none"
      buttonMenu.classList.add("fa-bars")
      buttonMenu.classList.remove("fa-times")
    }, 400);
  
  buttonMenu.addEventListener("click", expandirMenu)
  buttonMenu.removeEventListener("click", removerMenu)

}

function expandirCarrinho(){

  cart.style.transform="translate(0%)"
  removerMenu()

}

function removeCars(){
  cart.style.transform="translate(130%)"
}



