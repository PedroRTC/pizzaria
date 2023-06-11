function clientPdf(){

  
  //Conteúdo transformado em PDF

  let sectionCheckRequest=document.querySelector(".sectionCheckRequest")
  let sectionButtonRequest=document.querySelector(".sectionButtonRequest")
  

   sectionCheckRequest.style.width="100%"
   sectionCheckRequest.style.height="100%"
   sectionButtonRequest.style.display="none"
   
  // Configuração do arquivo final de PDF

  const options = {
    margin: 0,
    filename: `Pedido-Cliente-${dateRequest.textContent}`,
    image: { type: "png", quality: 0.98 },
    html2canvas: { escale: 1 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  // Gerar e baixar o PDF


    html2pdf().set(options).from(sectionCheckRequest).save();


    
  setTimeout(() => {
    sectionCheckRequest.style.width=""
    sectionCheckRequest.style.height=""
    sectionButtonRequest.style.display=""
  }, 10000);
 
}

  
  
