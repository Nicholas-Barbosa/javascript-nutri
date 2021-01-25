var btn = document.querySelector("#adicionar-paciente");
console
btn.addEventListener("click",save);
  
function save(event){
    event.preventDefault();

    var form = document.querySelector("#formAdiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.valua;

    var pacienteTr = document.createElement("tr");
    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = 20;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}