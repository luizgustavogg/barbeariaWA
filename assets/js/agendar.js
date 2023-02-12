const formepisodio = document.querySelector(".poup-form form"),
continueBtnepisodio = formepisodio.querySelector(".poup-form button"),
errorTextepisodio = formepisodio.querySelector(".poup-form .errortxt");

formepisodio.onsubmit = (e) => {
e.preventDefault(); //impedindo a formsa de submit

}

continueBtnepisodio.onclick = () => {
//console.log("continueBtns");

// Vamos começar

let xhr = new XMLHttpRequest(); //criando XML objeto
xhr.open("POST", "action/agendar.php", true);
xhr.onload = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      let data = xhr.response;
      console.log(data);
      if (data == "sucesso") {
        location.href = 'index.php';
      } else {
        errorTextepisodio.textContent = data;
        errorTextepisodio.style.display = "block";
      }
    }
  }
}

/* temos que enviar os dados de formsulário através ajax para php */
let formDataepisodio = new FormData(formepisodio); //criando novas formasDeta Object
xhr.send(formDataepisodio); //enviando os dados do formulário para php
}