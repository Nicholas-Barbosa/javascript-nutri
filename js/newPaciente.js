var btn = document.querySelector("#adicionar-paciente");
console
btn.addEventListener("click",save);
  
function save(event){
    event.preventDefault();

    var form = document.querySelector("#formAdiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.peso.altura;
    var gordura = form.peso.gordura;

    
}