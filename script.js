//Elements
let dropZone = document.querySelector(".dropzone");
let lista = document.getElementById("lista-arquivos");
let imgArea = document.querySelector(".imgArea");


//Events
dropZone.addEventListener("dragover", e => {
  e.preventDefault();
  dropZone.classList.add("over");
  dropZone.classList.remove("erro");
  dropZone.textContent = "Arraste os arquivos aqui";
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("over");
});

dropZone.addEventListener("drop", e => {
  e.preventDefault();
  dropZone.classList.remove("over");
  dropZone.classList.remove("erro");

  let arquivos = e.dataTransfer.files;
  let tiposPermitidos = ["image/", "application/pdf"];

  for (let arquivo of arquivos) {
    let tipoValido = tiposPermitidos.some(tipo => arquivo.type.startsWith(tipo));

    if (!tipoValido) {
      dropZone.classList.add("erro");
      dropZone.textContent = "Tipo de arquivo inválido";

      imgArea.textContent = "";
      imgArea.classList.remove("pdf");
      continue;
    }

    if (arquivo.type.startsWith("image/")) {
      imgArea.textContent = "";
      imgArea.classList.remove("pdf");

      const currentFileURL = URL.createObjectURL(arquivo);
      imgArea.style.background = `url(${currentFileURL}) top/contain no-repeat`;
    } 
    else if (arquivo.type === "application/pdf") {
      imgArea.style.background = "";
      imgArea.textContent = "Arquivo PDF";
      imgArea.classList.add("pdf");
    }

    let li = document.createElement('li');
    li.textContent = `Nome: ${arquivo.name} | Tipo: ${arquivo.type}`;
    lista.append(li);
  }
});