let selectCategoria = document.getElementById("id_categoria");

selectCategoria.onchange = () => {
    let selecetSubcategoria = document.getElementById("id_sub_categoria");
    // console.log("Foi")
    fetch("./select_subcategoria.php?id_categoria=42442")
    .then( response => {
        return response.text();
    })
    .then(texto => {
        selecetSubcategoria.innerHTML = texto;
    });

}