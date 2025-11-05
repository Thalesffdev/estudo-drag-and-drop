# 🧩 Projeto: Arrastar e Soltar Arquivos

    Este projeto demonstra de forma simples e funcional como criar uma **interface de upload por arrastar e soltar (drag & drop)** usando apenas **HTML, CSS e JavaScript puro** — sem bibliotecas externas.

    Ele reconhece arquivos de **imagem** e **PDF**, exibindo uma pré-visualização ou uma indicação visual conforme o tipo do arquivo.


## 🚀 Funcionalidades

    - Área interativa para **arrastar e soltar arquivos**.  
    - **Validação de tipos de arquivo** (somente imagens e PDFs).  
    - Exibição de **pré-visualização de imagens** diretamente na página.  
    - Indicação visual para **arquivos PDF**.  
    - Feedback visual em tempo real (borda verde para sucesso, vermelha para erro).  
    - Lista com os nomes e tipos de todos os arquivos enviados.


## 🖼️ Demonstração

    ![Exemplo de uso](https://github.com/Thalesffdev/drag-and-drop-preview/assets/demo.gif)
    *(adicione aqui um gif ou imagem mostrando o funcionamento, se quiser)*


## 🧱 Estrutura do Projeto

    📁 arrastar-soltar/
    │
    ├── index.html # Estrutura da página
    ├── style.css # Estilos visuais e feedbacks
    └── script.js # Lógica de drag and drop e validação

## 💻 Tecnologias Utilizadas

    - **HTML5** – Estrutura semântica da página  
    - **CSS3** – Estilização e efeitos visuais  
    - **JavaScript (Vanilla JS)** – Manipulação da DOM e lógica de drag & drop  


## 🧠 Como Funciona

    1. Ao **arrastar um arquivo** sobre a área de upload, o evento `dragover` impede o comportamento padrão e aplica o estilo `.over`.  

    2. Quando o arquivo é **solto**, o script:

    - Verifica se o tipo do arquivo é permitido (`image/*` ou `application/pdf`);
    - Se for imagem → exibe a **prévia** no container `.imgArea`;
    - Se for PDF → exibe a mensagem **"Arquivo PDF"** com fundo vermelho;
    - Caso contrário → mostra um aviso de **"Tipo de arquivo inválido"**;
    - Adiciona o nome e tipo do arquivo na lista abaixo.


## 🧩 Exemplo de Código

    ```js
    if (arquivo.type.startsWith("image/")) {
    const currentFileURL = URL.createObjectURL(arquivo);
    imgArea.style.background = `url(${currentFileURL}) top/contain no-repeat`;

    } else if (arquivo.type === "application/pdf") {
    imgArea.textContent = "Arquivo PDF";
    }


⚙️ Como Usar

    Baixe ou clone este repositório:

    git clone https://github.com/Thalesffdev/arrastar-soltar.git

    Abra o arquivo index.html no navegador.

    Arraste imagens ou PDFs para a área destacada e veja o resultado.


🧾 Licença

    Este projeto está sob a licença MIT.
    Sinta-se à vontade para usar e modificar como quiser. 💡


✨ Autor

    Desenvolvido por https://github.com/Thalesffdev