
buttonSend.addEventListener("click", clientPdf);

function clientPdf() {
  //Conteúdo transformado em PDF

  let sectionCheckRequest = document.querySelector(".sectionCheckRequest");

  sectionCheckRequest.style.width = "100%";



  // Configuração do arquivo final de PDF

  const options = {
    margin: 0,
    filename: `Pedido-Cliente-${dateRequest.textContent}`,
    image: { type: "png", quality: 0.98 },
    html2canvas: { escale: 1 },
    jsPDF: { unit: "in", format:"A4", orientation: "portrait" },
  };

  // Gerar e baixar o PDF

  html2pdf().set(options).from(sectionCheckRequest).save();

 
}
